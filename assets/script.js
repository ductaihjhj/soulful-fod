const dishes = document.getElementById("dishes");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");

    let currentIndex = 0; // Vị trí ban đầu
    const itemWidth = 240 + 20; // Kích thước mỗi món + khoảng cách
    const totalItems = document.querySelectorAll(".dish-item").length;
    const itemsPerView = Math.floor(
      dishes.parentElement.offsetWidth / itemWidth
    ); // Số món hiển thị dựa trên kích thước container

    function updateView() {
      const maxIndex = Math.max(0, totalItems - itemsPerView); // Giới hạn tối đa
      currentIndex = Math.min(currentIndex, maxIndex); // Đảm bảo không vượt quá giới hạn
      const offset = -currentIndex * itemWidth; // Tính khoảng cách di chuyển
      dishes.style.transform = `translateX(${offset}px)`;
    }

    nextButton.addEventListener("click", () => {
      if (currentIndex < totalItems - itemsPerView) {
        currentIndex++;
        updateView();
      }
    });

    prevButton.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateView();
      }
    });

    // Điều chỉnh giao diện khi thay đổi kích thước cửa sổ
    window.addEventListener("resize", updateView);

    // button quay lại đầu
    // Lấy nút
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Khi người dùng cuộn trang
window.onscroll = function() {
  // Nếu người dùng cuộn xuống dưới 200px, hiển thị nút quay về đầu trang
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 200) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

// Hàm quay về đầu trang
function scrollToTop() {
  document.body.scrollTop = 0; // Dành cho Safari
  document.documentElement.scrollTop = 0; // Dành cho Chrome, Firefox, IE và Opera
}