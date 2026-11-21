var line = document.getElementById("line");
var dots = document.querySelectorAll(".dot");
var i = 0;

function show(n) {
  i = (n + dots.length) % dots.length;
  line.style.transform = "translateX(-" + i * 100 + "%)";
  for (var k = 0; k < dots.length; k++) {
    dots[k].className = k === i ? "dot active" : "dot";
  }
}

document.getElementById("prev").onclick = function () { show(i - 1); };
document.getElementById("next").onclick = function () { show(i + 1); };
for (var d = 0; d < dots.length; d++) {
  dots[d].onclick = function () { show(Number(this.dataset.i)); };
  dots[d].dataset.i = d;
}

var prices = { adult: 1200, child: 800, family: 3200 };
var names = { adult: "Взрослый", child: "Детский", family: "Семейный" };

var qty = document.getElementById("qty");
var date = document.getElementById("date");
var time = document.getElementById("time");

function money(n) {
  return n.toLocaleString("ru-RU") + " ₽";
}

function count() {
  var type = document.querySelector('input[name="type"]:checked').value;
  var n = Number(qty.value);
  if (n < 1) n = 1;
  if (n > 10) n = 10;

  var price = prices[type] * n;
  var sale = Math.round(price / 10);

  document.getElementById("sum-name").textContent = names[type] + " × " + n;
  document.getElementById("sum-price").textContent = money(price);
  document.getElementById("sum-sale").textContent = "−" + money(sale);
  document.getElementById("sum-total").textContent = money(price - sale);

  var p = date.value.split("-");
  document.getElementById("sum-date").textContent =
    p.length === 3 ? p[2] + "." + p[1] + "." + p[0] + ", " + time.value : "дата не выбрана, " + time.value;
}

document.getElementById("order").oninput = count;
qty.onchange = function () { count(); qty.value = Math.min(Math.max(Number(qty.value) || 1, 1), 10); };

count();
show(0);