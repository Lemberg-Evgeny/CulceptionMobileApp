//navigation items
let navItems = document.querySelectorAll('.nav-item');
// console.log(navItems);

const navItem = (item) => {

    navItems.forEach(el => {
        if (!el.classList == 'active') {
            // el.classList.remove("active");
            item.classList.add("active");
        } else {
            el.classList.remove("active");
        }
    });

}