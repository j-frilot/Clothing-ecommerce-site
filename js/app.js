//SLIDE SHOW


window.addEventListener('DOMContentLoaded', function(){
    let firstSlide = document.querySelector(".first-slide")
    firstSlide.style.display = "flex"
})

let slides = [
    "url('images/home/dog-1.jpg')", 
    "url('images/home/dog-5.jpg')", 
    "url('images/home/dog-6.jpg')",
];

let picOne = slides[0];
let picTwo = slides[1];
let picThree = slides[2];

let slideShow = document.querySelector(".slide-show");

slideCount = 0
function autoSlide () {

    // left.style.display = "none";
    // right.style.display = "none";

    slideImage = slideShow.style.backgroundImage = slides[slideCount]
    slideCount ++;

    if ( slideCount >= slides.length) {
        slideCount = 0;
    }
}
setInterval(autoSlide, 3000);

// END SLIDE SHOW CONTENT





// PRODUCTS

let products = [{
    id: 7,
    name : "Jack",
    age : "4 years",
    breed : "Shar-pei",
    desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, in?",
    gender : "male",
    color: "Black",
    img: "/images/inventory/shar-pei.jpeg",
    }, 
    {
    id: 8,
    name : "Ellie",
    age : "1 years",
    breed : "Terrier Mix",
    desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, in?",
    gender : "female",
    color: "black",
    img: "/images/inventory/terrier-mix.jpeg",
    }, 
    {
    id: 9,
    name : "Thor",
    age : "6 years",
    breed : "Sheppard",
    desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, in?",
    gender : "male",
    color: "brown",
    img: "/images/inventory/shepard.jpeg",
}, 
    {
    id: 10,
    name : "Chloe",
    age : "3 years",
    breed : "Husky",
    desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, in?",
    gender : "female",
    color: "Tan, White",
    img: "/images/inventory/dog-10.jpg",
    }, 
    {
    id: 11,
    name : "Toby",
    age : "5 years",
    breed : "Pit Bull Terrier",
    desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, in?",
    gender : "male",
    color: "brown",
    img: "/images/inventory/dog-11.jpg", 
    },  
    {
    id: 12,
    name : "Holly",
    age : "4 years",
    breed : "Shepard",
    desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, in?",
    gender : "male",
    img: "/images/inventory/dog-12.jpg",
    color: "tan"
    }]

window.addEventListener('DOMContentLoaded', function(){
    let inventory = document.querySelector(".inventory");

    let showProducts = products.map(function(product){
        return `<div class="card">
                    <div class="card-content">
                        <div class="card-img">
                            <img src=${product.img} alt="product-1" class="img product-pic">
                        </div>
                        

                        <div class="card-head">
                            <h5><a href="#">${product.name}</a> </h5>
                            <h5>${product.gender}</h5>
                        </div>

                        <div class="card-body">
                                <div class="desc"><p>${product.desc}</p></div>
                            </div>

                        <div class="card-footer">
                            <h5>${product.age} old</h5>
                            <div class="breed"><h5>${product.breed}</h5></div>
                        </div>
                    </div>
                </div>`
    });
    showProducts = showProducts.join("");
    inventory.innerHTML = showProducts;

});


/////number incrementer

let rescueNum = document.querySelector(".rescue-num");
let adoptNum = document.querySelector(".adopt-num");
let volunteerNum = document.querySelector(".volunteer-num");




let rescueCount = 1;
setInterval(()=>{
    if (rescueCount < 342){
        rescueCount++;
        rescueNum.innerText = rescueCount;
    }
}, 3)

let adoptCount = 1;
setInterval(()=>{
    if (adoptCount < 155){
        adoptCount++;
        adoptNum.innerText = adoptCount;
    }
}, 10)

let volunteerCount = 1;
setInterval(()=>{
    if (volunteerCount < 50){
        volunteerCount++;
        volunteerNum.innerText = volunteerCount;
    }
}, 50)

// setTimeout(()=>{
//     followers.innerText = "Followers on Instagram!"
// },4700)