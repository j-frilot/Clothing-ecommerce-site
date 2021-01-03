//SLIDE SHOW
let keys = document.querySelectorAll(".keys")

window.addEventListener('DOMContentLoaded', function(){
    let firstSlide = document.querySelector(".first-slide")
    firstSlide.style.display = "flex"
})

keys.forEach(function(key){
    key.addEventListener('click', function(){
        let slides = [
            "url('images/slide_01.jpg')", 
            "url('images/slide_02.jpg')", 
            "url('images/slide_03.jpg')",];
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

        // change the text and picture when slide change
        //text set to none / flex

        if (key == leftKey) {
            slideShow.style.backgroundImage = "url('images/slide_01.jpg')"
            leftKey.style.color = "white"
            firstSlide.style.display = "flex"
            secondSlide.style.display = "none"
            thirdSlide.style.display = "none"

            
        } else if (key == middleKey) {
            slideShow.style.backgroundImage = "url('images/slide_02.jpg')"
            middleKey.style.color = "white"
            firstSlide.style.display = "none"
            secondSlide.style.display = "flex"
            thirdSlide.style.display = "none"

        } else if (key == rightKey){
            slideShow.style.backgroundImage = "url('images/slide_03.jpg')"
            rightKey.style.color = "white"
            firstSlide.style.display = "none"
            secondSlide.style.display = "none"
            thirdSlide.style.display = "flex"
            
        };
    })
})

// END SLIDE SHOW CONTENT

// PRODUCTS

let products = [{
    img: "/images/product_01.jpg",
    title : "title 1",
    price : "$25.75",
    desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, in?",
    rate : "*****",
    reviews : "Reviews (24)"
    }, 
    {
    img: "/images/product_02.jpg",
    title : "title 2",
    price : "$30.25",
    desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, in?",
    rate : "*****",
    reviews : "Reviews (21)"
    }, 
    {
    img: "/images/product_03.jpg",
    title : "title 3",
    price : "$20.45",
    desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, in?",
    rate : "*****",
    reviews : "Reviews (36)"
    }, 
    {
    img: "/images/product_04.jpg",
    title : "title 4",
    price : "$15.25",
    desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, in?",
    rate : "*****",
    reviews : "Reviews (48)"
    }, 
    {
    img: "/images/product_05.jpg", 
    title : "title 5",
    price : "$12.50",
    desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, in?",
    rate : "*****",
    reviews : "Reviews (16)"
    },  
    {
    img: "/images/product_06.jpg",
    title : "title 6",
    price : "$22.50",
    desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, in?",
    rate : "*****",
    reviews : "Reviews (32)"
    }]

    window.addEventListener('DOMContentLoaded', function(){
        let inventory = document.querySelector(".inventory");

        let showProducts = products.map(function(product){
            return `<div class="card">
                        <img src=${product.img} alt="product-1" class="product-pic">
    
                        <div class="card-content">
    
                            <div class="card-head">
                                <h5><a href="#">${product.title}</a> </h5>
                                <div class="price"><h5>${product.price}</h5></div>
                            </div>
    
                            <div class="card-body">
                                <div class="desc">${product.desc}</div>
                            </div>
    
                            <div class="card-footer">
                                <div class="rate red">${product.rate}</div>
                                <div class="reviews red">${product.reviews}</div>
                            </div>
                        </div>
            
                    </div>`
        });
        showProducts = showProducts.join("");
        inventory.innerHTML = showProducts;

    });






/*








            */