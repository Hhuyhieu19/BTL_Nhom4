// Tìm phần tử biểu mẫu trong DOM
const form = document.querySelector('form');

// Định nghĩa hàm xử lý sự kiện cho biểu mẫu
function handleSubmit(event) {
  // Ngăn chặn chuyển hướng mặc định của biểu mẫu
  event.preventDefault();
  
  // Lấy giá trị của các trường nhập liệu
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  
  // Kiểm tra xem các trường nhập liệu có được nhập đầy đủ không
  if (!name || !email || !message) {
    alert('Vui lòng nhập đầy đủ thông tin liên hệ của bạn!');
    return;
  }
  
  // Kiểm tra xem địa chỉ email có hợp lệ không
  if (!isValidEmail(email)) {
    alert('Địa chỉ email không hợp lệ!');
    return;
  }
  
  // Gửi thông tin liên hệ đến một máy chủ hoặc dịch vụ xử lý biểu mẫu ở đây
  
  // Hiển thị thông báo gửi thành công
  const modal = new bootstrap.Modal(document.getElementById('exampleModal'));
  modal.show();
}

// Đăng ký hàm xử lý sự kiện cho biểu mẫu
form.addEventListener('submit', handleSubmit);

// Định nghĩa hàm kiểm tra địa chỉ email
function isValidEmail(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

