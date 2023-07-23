/**
 * AOS
 */
AOS.init();
/**
 * Header mobile toogle
 */
let mobile_toogle = document.querySelector(".header__menu-mobile");
let headerMenu = document.querySelector(".header__menu");
headerMenu.querySelectorAll("li").forEach((item, index) => {
    item.style.transitionDelay = index*0.07 + 's';
});
mobile_toogle.addEventListener("click", () => {
    if(!headerMenu.classList.contains("active")){
        headerMenu.classList.add("active");
        setTimeout(() => {
                headerMenu.querySelectorAll("li").forEach(item => {
                item.classList.add("active");
            });
        }, 10);
    }else{
        headerMenu.classList.remove("active");
        headerMenu.querySelectorAll("li").forEach(item => {
            item.classList.remove("active");
        });
    }
});
/**
 * Scroll to top
 */
// let scroll_top_btn = document.querySelector("");
// window.addEventListener("scroll", () => {
//     let position = window.scrollY;
//     if(position > 200){
//         scroll_top_btn.style.display = "block";
//     }else{
//         scroll_top_btn.style.display = "none";
//     }
// });