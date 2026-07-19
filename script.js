(function () {
  var prices = {
    intimate: { name: "The Intimate (50 Bottles)", 10: { 4: [8500, 170], 6: [9500, 190] }, 30: { 4: [12500, 250], 6: [13500, 270] } },
    celebration: { name: "The Celebration (100 Bottles)", 10: { 4: [13500, 135], 6: [14500, 145] }, 30: { 4: [19500, 195], 6: [20500, 205] } },
    grand: { name: "The Grand (150 Bottles)", 10: { 4: [18500, 123], 6: [19500, 130] }, 30: { 4: [27500, 183], 6: [28500, 190] } }
  };
  var size = 10, scents = 4;
  var peso = function (n) { return "₱" + n.toLocaleString("en-PH"); };

  function paint() {
    document.querySelectorAll('.pkg-card').forEach(function (card) {
      var key = card.getAttribute('data-pkg');
      var pair = prices[key][size][scents];
      var priceEl = card.querySelector('.price-value');
      var perEl = card.querySelector('.per-value');
      var price = card.querySelector('.price');
      var per = card.querySelector('.per-guest');
      price.style.opacity = 0;
      per.style.opacity = 0;
      setTimeout(function () {
        priceEl.textContent = peso(pair[0]);
        perEl.textContent = peso(pair[1]);
        price.style.opacity = 1;
        per.style.opacity = 1;
      }, 90);
    });
  }
  document.querySelectorAll('[data-size]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      document.querySelectorAll('[data-size]').forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      size = parseInt(btn.getAttribute('data-size'), 10);
      paint();
    });
  });
  document.querySelectorAll('[data-scents]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      document.querySelectorAll('[data-scents]').forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      scents = parseInt(btn.getAttribute('data-scents'), 10);
      paint();
    });
  });
  paint();

  document.querySelectorAll('[data-choose]').forEach(function (a) {
    a.addEventListener('click', function () {
      var val = a.getAttribute('data-choose');
      var sel = document.getElementById('pkg-select');
      for (var i = 0; i < sel.options.length; i++) {
        if (sel.options[i].value === val) { sel.selectedIndex = i; break; }
      }
    });
  });

  var namesInput = document.getElementById('names');
  var dateInput = document.getElementById('event-date');
  var heroNames = document.getElementById('hero-names');
  var heroDate = document.getElementById('hero-date');
  var prevNames = document.getElementById('preview-names');
  var prevDate = document.getElementById('preview-date');

  function formatDate(v) {
    if (!v) return "EVENT DATE";
    var parts = v.split('-');
    if (parts.length !== 3) return v;
    return parts[1] + " . " + parts[2] + " . " + parts[0];
  }

  function clearChildren(el) {
    while (el.firstChild) el.removeChild(el.firstChild);
  }

  /* Tries the whole name on one line, shrinking font-size down to minSize.
     Returns true if it ends up fitting inside maxWidth. */
  function clampToWidth(tspanOrText, maxWidth) {
    var len = tspanOrText.getComputedTextLength();
    if (len > maxWidth) {
      tspanOrText.setAttribute('textLength', maxWidth);
      tspanOrText.setAttribute('lengthAdjust', 'spacingAndGlyphs');
    }
  }

  function fitSingleLine(el, text, maxWidth, startSize, minSize) {
    clearChildren(el);
    el.appendChild(document.createTextNode(text));
    var size = startSize;
    el.setAttribute('font-size', size);
    var len = el.getComputedTextLength();
    while (len > maxWidth && size > minSize) {
      size -= 0.5;
      el.setAttribute('font-size', size);
      len = el.getComputedTextLength();
    }
    return len <= maxWidth;
  }

  /* Picks a break point for a two-line name: right after " & " if present
     (so couple names read "First &" / "Second"), otherwise the space
     closest to the middle of the string. */
  function splitForTwoLines(text) {
    var ampIdx = text.indexOf(' & ');
    if (ampIdx !== -1) {
      return [text.slice(0, ampIdx) + ' &', text.slice(ampIdx + 3)];
    }
    var spaces = [];
    for (var i = 0; i < text.length; i++) {
      if (text[i] === ' ') spaces.push(i);
    }
    if (!spaces.length) return null;
    var mid = text.length / 2;
    var best = spaces[0];
    var bestDist = Math.abs(best - mid);
    for (var j = 1; j < spaces.length; j++) {
      var d = Math.abs(spaces[j] - mid);
      if (d < bestDist) { best = spaces[j]; bestDist = d; }
    }
    return [text.slice(0, best), text.slice(best + 1)];
  }

  /* Renders the name as two centered tspans and shrinks both lines
     together until they both fit inside maxWidth. */
  function fitTwoLines(el, text, maxWidth, startSize, minSize, lineGap) {
    var parts = splitForTwoLines(text);
    if (!parts) return false;
    clearChildren(el);
    var t1 = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
    t1.setAttribute('x', '100');
    t1.textContent = parts[0];
    var t2 = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
    t2.setAttribute('x', '100');
    t2.setAttribute('dy', lineGap);
    t2.textContent = parts[1];
    el.appendChild(t1);
    el.appendChild(t2);
    var size = startSize;
    el.setAttribute('font-size', size);
    var len1 = t1.getComputedTextLength();
    var len2 = t2.getComputedTextLength();
    while ((len1 > maxWidth || len2 > maxWidth) && size > minSize) {
      size -= 0.5;
      el.setAttribute('font-size', size);
      len1 = t1.getComputedTextLength();
      len2 = t2.getComputedTextLength();
    }
    clampToWidth(t1, maxWidth);
    clampToWidth(t2, maxWidth);
    return true;
  }

  /* Fits a name into its label: single line if it reads fine that way,
     otherwise wraps to two lines and nudges the date row down to match. */
  function layoutNameLabel(nameEl, dateEl, text, o) {
    if (!nameEl || typeof nameEl.getComputedTextLength !== 'function') return;
    nameEl.setAttribute('y', o.singleY);
    var fitsOnOneLine = fitSingleLine(nameEl, text, o.maxWidth, o.startSize, o.minSize);
    if (fitsOnOneLine) {
      dateEl.setAttribute('y', o.dateYSingle);
      return;
    }
    nameEl.setAttribute('y', o.twoLineY);
    var wrapped = fitTwoLines(nameEl, text, o.maxWidth, o.twoLineStartSize, o.minSize, o.lineGap);
    if (wrapped) {
      dateEl.setAttribute('y', o.dateYTwo);
    } else {
      nameEl.setAttribute('y', o.singleY);
      fitSingleLine(nameEl, text, o.maxWidth, o.startSize, o.minSize);
      clampToWidth(nameEl, o.maxWidth);
      dateEl.setAttribute('y', o.dateYSingle);
    }
  }

  function updatePreview() {
    var n = namesInput.value.trim() || "Your Names";
    var d = formatDate(dateInput.value);
    var heroText = n === "Your Names" ? "Gabriel & Sofia" : n;
    var prevText = n;
    prevDate.textContent = d;
    heroDate.textContent = d === "EVENT DATE" ? "10 . 24 . 2026" : d;

    layoutNameLabel(heroNames, heroDate, heroText, {
      maxWidth: 54, startSize: 15, twoLineStartSize: 13, minSize: 7.5,
      singleY: 234, twoLineY: 228, lineGap: 13,
      dateYSingle: 250, dateYTwo: 258
    });
    layoutNameLabel(prevNames, prevDate, prevText, {
      maxWidth: 66, startSize: 14, twoLineStartSize: 12, minSize: 7.5,
      singleY: 190, twoLineY: 184, lineGap: 12,
      dateYSingle: 207, dateYTwo: 216
    });
  }
  namesInput.addEventListener('input', updatePreview);
  dateInput.addEventListener('input', updatePreview);
  updatePreview();
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(updatePreview);
  }

  function currentSummary() {
    var lines = [
      "Booking Request — Lindor Parfum",
      "",
      "Event / couple name: " + (namesInput.value || "—"),
      "Event date: " + (dateInput.value || "—"),
      "Venue & city: " + (document.getElementById('venue').value || "—"),
      "Package: " + document.getElementById('pkg-select').value,
      "Bottle size: " + size + "ml",
      "Scent choices: " + scents,
      "Estimated guests: " + (document.getElementById('guests').value || "—"),
      "Contact details: " + (document.getElementById('contact').value || "—"),
      "Notes: " + (document.getElementById('notes').value || "—")
    ];
    return lines.join("\n");
  }

  var summaryBox = document.getElementById('summary-box');
  document.getElementById('build-request').addEventListener('click', function () {
    var body = currentSummary();
    summaryBox.textContent = body;
    summaryBox.classList.add('show');
    var subject = encodeURIComponent("Booking Request — " + (namesInput.value || "Lindor Parfum Event"));
    window.location.href = "mailto:hello@lindorparfum.ph?subject=" + subject + "&body=" + encodeURIComponent(body);
  });
  document.getElementById('copy-request').addEventListener('click', function () {
    var body = currentSummary();
    summaryBox.textContent = body;
    summaryBox.classList.add('show');
    if (navigator.clipboard) {
      navigator.clipboard.writeText(body).then(function () {
        var btn = document.getElementById('copy-request');
        var original = btn.textContent;
        btn.textContent = "Copied ✓";
        setTimeout(function () { btn.textContent = original; }, 1800);
      });
    }
  });

  /* ===== Mobile menu ===== */
  var menuToggle = document.getElementById('menu-toggle');
  var mobileNav = document.getElementById('mobile-nav');
  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', function () {
      var isOpen = mobileNav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      menuToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    });
    mobileNav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        mobileNav.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Open menu');
      });
    });
  }

  /* ===== Header shadow on scroll ===== */
  var header = document.querySelector('header.site');
  if (header) {
    var onScroll = function () {
      if (window.scrollY > 12) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ===== Scroll reveal ===== */
  var revealTargets = document.querySelectorAll(
    '.section-head, .counter-item, .swatch, .pkg-card, .process-item, .menu-board, .preview-panel'
  );
  revealTargets.forEach(function (el) { el.classList.add('reveal'); });

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    revealTargets.forEach(function (el) { io.observe(el); });
  } else {
    revealTargets.forEach(function (el) { el.classList.add('in-view'); });
  }

  /* ===== Active nav link on scroll ===== */
  var navLinks = document.querySelectorAll('nav.links a');
  var sections = Array.prototype.slice.call(navLinks).map(function (a) {
    return document.querySelector(a.getAttribute('href'));
  }).filter(Boolean);

  if (sections.length && 'IntersectionObserver' in window) {
    var navIo = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var id = '#' + entry.target.id;
        var link = document.querySelector('nav.links a[href="' + id + '"]');
        if (!link) return;
        if (entry.isIntersecting) {
          navLinks.forEach(function (a) { a.classList.remove('active-link'); });
          link.classList.add('active-link');
        }
      });
    }, { threshold: 0, rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(function (s) { navIo.observe(s); });
  }
})();