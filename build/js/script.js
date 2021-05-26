const nav = document.querySelector(".navigation");
const header = document.querySelector(".header");
const navBtn = document.querySelector(".navigation__toggle");
const priceBullits = document.querySelectorAll(".price .bullits__link");
const priceList = document.querySelector(".price__list");

nav.classList.add("navigation--v");
nav.classList.add("navigation--closed");

if(navBtn){
    navBtn.addEventListener("click", function(evt){
        evt.preventDefault();
        nav.classList.toggle("navigation--closed");

    })
}

if(priceBullits){
    if (document.documentElement.clientWidth < 660) {
        priceList.style.marginLeft = -1 * (1 * (document.documentElement.clientWidth - 58 + 20) - 21) + "px";
    }
    priceBullits.forEach(function(bul){
        bul.addEventListener("click", function(evt){
            evt.preventDefault();
            document.querySelector(".price .bullits__link--active").classList.remove("bullits__link--active");
            this.classList.add("bullits__link--active");
            let k = Array.from(priceBullits).indexOf(document.querySelector(".price .bullits__link--active"));
            console.log(k);
            priceList.style.marginLeft = -1 * (k * (document.documentElement.clientWidth - 58 + 20) - 21) + "px";
           
        });
    });

    window.addEventListener("resize", function () {
        if (document.documentElement.clientWidth < 660) {
            let k = Array.from(priceBullits).indexOf(document.querySelector(".price .bullits__link--active"));
            priceList.style.marginLeft = -1 * (k * (document.documentElement.clientWidth - 58 + 20) - 21) + "px";
        } else {
            priceList.style.marginLeft = "0px";
        }
      });
}