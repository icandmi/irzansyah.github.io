
function validateForm() {
  let berat = document.forms["myForm"]["weightDesc"].value;
  if (berat == "") {
    alert("Input berat badan masih kosong");
    return false;
  }
  let Umur = document.forms["myForm"]["oldDesc"].value;
  if (Umur == "") {
    alert("Input Umur masih kosong");
    return false;
  }
  let tinggi = document.forms["myForm"]["heightDesc"].value;
  if (tinggi == "") {
    alert("Input tinggi badan masih kosong");
    return false;
  }
}

function calculateBMI() {
  weight = weightDesc.value;
  old = oldDesc.value;
  height = heightDesc.value;
  BMI = weight / height ** 2;
  result.innerText = BMI;

  if (BMI < 18.5) {
    statement.innerText = "BMI Anda berada dalam kisaran berat badan kurang";
  } else if (BMI > 18.5 && BMI < 24.9) {
    statement.innerText =
      "BMI Anda berada dalam kisaran berat badan normal atau sehat";
  } else if (BMI > 25 && BMI < 29.9) {
    statement.innerText = "BMI Anda berada dalam kisaran kelebihan berat badan";
  } else {
    statement.innerText = "KESALAHAN: Masukkan data yang benar";
    showAlert();
  }
}