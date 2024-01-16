function hitung() {
  S = document.getElementById("S").value;
  Luas = S * S;
  document.getElementById("Luas").value = Luas;
  Keliling = 4 * S;
  document.getElementById("Keliling").value = Keliling;
}

function reset() {
  document.getElementById("S").value = "";
  document.getElementById("Luas").value = "";
  document.getElementById("Keliling").value = "";
}
