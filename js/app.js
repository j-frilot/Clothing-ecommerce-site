//SLIDE SHOW
let keys = document.querySelectorAll(".keys")

window.addEventListener('DOMContentLoaded', function(){
    let firstSlide = document.querySelector(".first-slide")
    firstSlide.style.display = "flex"
})

let slides = [
    "url('images/home/slide_01.jpg')", 
    "url('images/home/slide_02.jpg')", 
    "url('images/home/slide_03.jpg')",
];

let picOne = slides[0];
let picTwo = slides[1];
let picThree = slides[2];

let leftKey = document.querySelector(".left");
let middleKey = document.querySelector(".middle");
let rightKey = document.querySelector(".right");
let firstSlide = document.querySelector(".first-slide")
let secondSlide = document.querySelector(".second-slide")
let thirdSlide = document.querySelector(".third-slide")
let slideShow = document.querySelector(".slide-show");

// change slide by buttons
keys.forEach(function(key){
    key.addEventListener('click', function(){

        // change  picture when slide change

        if (key == leftKey) {
            slideShow.style.backgroundImage = picOne;
            firstSlide.style.display = "flex";
        } else if (key == middleKey) {
            slideShow.style.backgroundImage = picTwo;
        } else if (key == rightKey); {
            slideShow.style.backgroundImage = picThree;
        };
    })
})


///////////////FOR AUTO SLIDES//////////////////

slideCount = 0
function autoSlide () {

    // left.style.display = "none";
    // right.style.display = "none";

    slideImage = slideShow.style.backgroundImage = slides[slideCount]
    slideCount ++;

    if ( slideCount >= slides.length) {
        slideCount = 0;
    }

    console.log(slideCount);
}
setInterval(autoSlide, 3000);

// END SLIDE SHOW CONTENT





// PRODUCTS

let products = [{
    img: "/images/home/dog-1.jpg",
    name : "name 1",
    age : "4 years",
    breed : "labrador",
    desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, in?",
    gender : "male",
    location : "Hattiesburg"
    }, 
    {
    img: "/images/home/dog-2.jpg",
    name : "name 2",
    age : "4 years",
    breed : "labrador",
    desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, in?",
    gender : "male",
    location : "Vicksburg"
    }, 
    {
    img: "/images/home/dog-3.jpg",
    name : "name 3",
    age : "4 years",
    breed : "labrador",
    desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, in?",
    gender : "male",
    location : "Brookhaven"
    }, 
    {
    img: "/images/home/dog-4.jpg",
    name : "name 4",
    age : "4 years",
    breed : "labrador",
    desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, in?",
    gender : "male",
    location : "Jackson"
    }, 
    {
    img: "/images/home/dog-5.jpg", 
    name : "name 5",
    age : "4 years",
    breed : "labrador",
    desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, in?",
    gender : "male",
    location : "Natchez"
    },  
    {
    img: "/images/home/dog-6.jpg",
    name : "name 6",
    age : "4 years",
    breed : "labrador",
    desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, in?",
    gender : "male",
    location : "Gulfport"
    }]

window.addEventListener('DOMContentLoaded', function(){
    let inventory = document.querySelector(".inventory");

    let showProducts = products.map(function(product){
        return `<div class="card">
                    <img src=${product.img} alt="product-1" class="product-pic">

                    <div class="card-content">
                        <h5><a href="#">${product.name}</a> </h5>
                        <div class="card-head">
                            <h5><a href="#">${product.age}</a> </h5>
                            <div class="breed"><h5>${product.breed}</h5></div>
                        </div>

                        <div class="card-body">
                            <div class="desc">${product.desc}</div>
                        </div>

                        <div class="card-footer">
                            <div class="rate red">${product.gender}</div>
                            <div class="location red">${product.location}</div>
                        </div>
                    </div>
        
                </div>`
    });
    showProducts = showProducts.join("");
    inventory.innerHTML = showProducts;

});