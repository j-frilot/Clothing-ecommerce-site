let products = [{
    img: "/images/inventory/dog-1.jpg",
    name : "name 1",
    age : "4 years",
    breed : "labrador",
    desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, in?",
    gender : "male",
    location : "Hattiesburg"
    }, 
    {
    img: "/images/inventory/dog-2.jpg",
    name : "name 2",
    age : "4 years",
    breed : "labrador",
    desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, in?",
    gender : "male",
    location : "Vicksburg"
    }, 
    {
    img: "/images/inventory/dog-3.jpg",
    name : "name 3",
    age : "4 years",
    breed : "labrador",
    desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, in?",
    gender : "male",
    location : "Brookhaven"
    }, 
    {
    img: "/images/inventory/dog-4.jpg",
    name : "name 4",
    age : "4 years",
    breed : "labrador",
    desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, in?",
    gender : "male",
    location : "Jackson"
    }, 
    {
    img: "/images/inventory/dog-5.jpg", 
    name : "name 5",
    age : "4 years",
    breed : "labrador",
    desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, in?",
    gender : "male",
    location : "Natchez"
    },  
    {
    img: "/images/inventory/dog-6.jpg",
    name : "name 6",
    age : "4 years",
    breed : "labrador",
    desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, in?",
    gender : "male",
    location : "Gulfport"
    },
    {
    img: "/images/inventory/dog-7.jpg",
    name : "name 1",
    age : "4 years",
    breed : "labrador",
    desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, in?",
    gender : "male",
    location : "Hattiesburg"
    }, 
    {
    img: "/images/inventory/dog-8.jpg",
    name : "name 2",
    age : "4 years",
    breed : "labrador",
    desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, in?",
    gender : "male",
    location : "Vicksburg"
    }, 
    {
    img: "/images/inventory/dog-9.jpg",
    name : "name 3",
    age : "4 years",
    breed : "labrador",
    desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, in?",
    gender : "male",
    location : "Brookhaven"
    }, 
    {
    img: "/images/inventory/dog-10.jpg",
    name : "name 4",
    age : "4 years",
    breed : "labrador",
    desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, in?",
    gender : "male",
    location : "Jackson"
    }, 
    {
    img: "/images/inventory/dog-11.jpg", 
    name : "name 5",
    age : "4 years",
    breed : "labrador",
    desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, in?",
    gender : "male",
    location : "Natchez"
    },  
    {
    img: "/images/inventory/dog-12.jpg",
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