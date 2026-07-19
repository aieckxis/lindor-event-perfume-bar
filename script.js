(function () {
  var prices = {
    intimate: { 10: { 4: [8500, 170], 6: [9500, 190] }, 30: { 4: [12500, 250], 6: [13500, 270] } },
    celebration: { 10: { 4: [13500, 135], 6: [14500, 145] }, 30: { 4: [19500, 195], 6: [20500, 205] } },
    grand: { 10: { 4: [18500, 123], 6: [19500, 130] }, 30: { 4: [27500, 183], 6: [28500, 190] } }
  };

  var size = 10, scents = 4;

  function paint() {
    document.querySelectorAll('.pkg-card').forEach(function (card) {
      var key = card.getAttribute('data-pkg');
      if (card.querySelector('.price-value')) {
        card.querySelector('.price-value').textContent = "₱" + prices[key][size][scents][0].toLocaleString();
      }
    });
  }

  document.querySelectorAll('[data-size]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      document.querySelectorAll('[data-size]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      size = parseInt(btn.getAttribute('data-size'), 10);
      paint();
    });
  });

  document.querySelectorAll('[data-scents]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      document.querySelectorAll('[data-scents]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      scents = parseInt(btn.getAttribute('data-scents'), 10);
      paint();
    });
  });

  var namesInput = document.getElementById('names');
  var dateInput = document.getElementById('event-date');

  function update() {
    var pNames = document.getElementById('preview-names');
    var pDate = document.getElementById('preview-date');
    if (pNames) pNames.textContent = namesInput.value || "Your Names";
    if (pDate) pDate.textContent = dateInput.value || "EVENT DATE";
  }

  if (namesInput && dateInput) {
    namesInput.addEventListener('input', update);
    dateInput.addEventListener('input', update);
  }
})(); 