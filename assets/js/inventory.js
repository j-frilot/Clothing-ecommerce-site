let products = [{
    id: 1,
    name : "Max",
    age : "2 years",
    breed : "Pit Bull",
    desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, in?",
    gender : "male",
    color: "Brown",
    img: "images/inventory/pit.jpg",
    }, 
    {
    id: 2,
    name : "Bella",
    age : "Unknown",
    breed : "Chihuahua",
    desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, in?",
    gender : "female",
    color:"tan",
    img: "images/inventory/chihuahua.jpeg",
    }, 
    {
    id: 3,
    name : "Buddy",
    age : "4 years",
    breed : "Hound",
    desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, in?",
    gender : "male",
    color: "Black, White",
    img: "images/inventory/hound.jpeg",
    }, 
    {
    id: 4,
    name : "Daisy",
    age : "2 years",
    breed : "Labrador",
    desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, in?",
    gender : "female",
    color: "Brown",
    img: "images/inventory/labrador.jpeg",
    }, 
    {
    id: 5,
    name : "Charlie",
    age : "1 years",
    breed : "Pitbull, Boxer",
    desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, in?",
    gender : "male",
    color: "brown",
    img: "images/inventory/pit-boxer.jpg", 
    },  
    {
    id: 6,
    name : "Coco",
    age : "5 years",
    breed : "Poodle",
    desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, in?",
    gender : "female",
    color: "white",
    img: "images/inventory/poodle.jpg",
    },
    {
    id: 7,
    name : "Jack",
    age : "4 years",
    breed : "Shar-pei",
    desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, in?",
    gender : "male",
    color: "Black",
    img: "images/inventory/shar-pei.jpeg",
    }, 
    {
    id: 8,
    name : "Ellie",
    age : "1 years",
    breed : "Terrier Mix",
    desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, in?",
    gender : "female",
    color: "black",
    img: "images/inventory/terrier-mix.jpeg",
    }, 
    {
    id: 9,
    name : "Thor",
    age : "6 years",
    breed : "Sheppard",
    desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, in?",
    gender : "male",
    color: "brown",
    img: "images/inventory/shepard.jpeg",
}]

window.addEventListener('DOMContentLoaded', () => {
    let inventory = document.querySelector(".inventory");

    let showProducts = products.map((product) => {
        return `<div class="card">
                    <div class="card-img">
                        <img src=${product.img} alt="product-1" class="img product-pic">
                    </div>

                    <div class="card-name">
                        <h1>${product.name}</h1>
                    </div>

                    <div class="card-age">
                        <h2>Age</h2>
                        <h3>${product.age}
                    </div>

                    <div class="card-gender">
                        <h2>Gender</h2>
                        <h3>${product.gender}
                    </div>

                    <div class="card-breed">
                        <h2>Breed</h2>
                        <h3>${product.breed}
                    </div>

                    <a href="#" class="card-dog-link"><p>More Info</p></a>

                </div>`
    });
    showProducts = showProducts.join("");
    inventory.innerHTML = showProducts;

});



