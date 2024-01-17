function hitung() {
  S = document.getElementById("S").value;
  document.getElementById("Sisi1").innerHTML= S;
  document.getElementById("Sisi2").innerHTML = S;
  Luas = S * S;
  document.getElementById("Luas").value = Luas;
  document.getElementById("Kel").innerHTML = S;
  Keliling = 4 * S;
  document.getElementById("Keliling").value = Keliling;
}

function reset() {
  document.getElementById("S").value = "";
  document.getElementById("Luas").value = "";
  document.getElementById("Keliling").value = "";
  document.getElementById("Sisi1").innerHTML = "S";
  document.getElementById("Sisi2").innerHTML = "S";
  document.getElementById("Kel").innerHTML = "S";
}

