const menuItems = document.querySelectorAll(".menu li");
const contentItems = document.querySelectorAll(".menu .item");

menuItems.forEach((menuItem, index) => {
  menuItem.addEventListener("click", () => {
    // Remove active class from all menu items and content items
    menuItems.forEach((item) => {
      item.classList.remove("active");
    });
    contentItems.forEach((item) => {
      item.classList.remove("active");
    });

    // Add active class to clicked menu item and corresponding content item
    menuItem.classList.add("active");
    contentItems[index].classList.add("active");
  });
});