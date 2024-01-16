function hitung() {
  S = document.getElementById("S").value;
  Luas = S * S;
  document.getElementById("txtLuas").value = Luas;
  Keliling = 4 * S;
  document.getElementById("txtKeliling").value = Keliling;
}

function reset() {
  document.getElementById("S").value = "";
  document.getElementById("txtLuas").value = "";
  document.getElementById("txtKeliling").value = "";
}
