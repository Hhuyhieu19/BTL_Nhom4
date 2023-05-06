function validateRegistrationForm() {
  var nameInput = document.getElementById("name");
  var phoneInput = document.getElementById("phone");
  var emailInput = document.getElementById("email");

  var name = nameInput.value.trim();
  var phone = phoneInput.value.trim();
  var email = emailInput.value.trim();

  if (name === "" || phone === "" || email === "") {
    alert("Vui lòng nhập đầy đủ thông tin");
    return false;
  }

  // Check phone number format
  var phoneRegex = /^[0-9]{10}$/;
  if (!phoneRegex.test(phone)) {
    alert("Số điện thoại không hợp lệ");
    
    return false;
  }

  // Check email format
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Địa chỉ email không hợp lệ");
    return false;
  }

  // Validation passed
  alert("Chọn mua thành công");
  return true;
}