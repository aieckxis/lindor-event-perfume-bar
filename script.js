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
      card.querySelector('.price-value').textContent = peso(pair[0]);
      card.querySelector('.per-value').textContent = peso(pair[1]);
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
  function updatePreview() {
    var n = namesInput.value.trim() || "Your Names";
    var d = formatDate(dateInput.value);
    prevNames.textContent = n;
    prevDate.textContent = d;
    heroNames.textContent = n === "Your Names" ? "Gabriel & Sofia" : n;
    heroDate.textContent = d === "EVENT DATE" ? "10 . 24 . 2026" : d;
  }
  namesInput.addEventListener('input', updatePreview);
  dateInput.addEventListener('input', updatePreview);

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
})();
