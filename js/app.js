//SLIDE SHOW
let keys = document.querySelectorAll(".keys")

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
        let slideShow = document.querySelector(".slide-show");

        if (key == leftKey) {
            slideShow.style.backgroundImage = "url('images/slide_01.jpg')"
            leftKey.style.color = "white"
        } else if (key == middleKey) {
            slideShow.style.backgroundImage = "url('images/slide_02.jpg')"
            middleKey.style.color = "white"
        } else if (key == rightKey){
            slideShow.style.backgroundImage = "url('images/slide_03.jpg')"
            rightKey.style.color = "white"

        };
    })
})

// END SLIDE SHOW CONTENT

// PRODUCTS

let products = [{
    title : "title 1",
    price : "$25.75",
    desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, in?",
    rate : "*****",
    reviews : "Reviews (24)"
    }, {
    title : "title 2",
    price : "$30.25",
    desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, in?",
    rate : "*****",
    reviews : "Reviews (21)"
    }, {
    title : "title 3",
    price : "$20.45",
    desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, in?",
    rate : "*****",
    reviews : "Reviews (36)"
    }, {
    title : "title 4",
    price : "$15.25",
    desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, in?",
    rate : "*****",
    reviews : "Reviews (48)"
    }, { 
    title : "title 5",
    price : "$12.50",
    desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, in?",
    rate : "*****",
    reviews : "Reviews (16)"
    }, {
    title : "title 6",
    price : "$22.50",
    desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, in?",
    rate : "*****",
    reviews : "Reviews (32)"
    }]
