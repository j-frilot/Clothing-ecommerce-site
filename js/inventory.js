let products = [
    {
        id: 1,
        name: "Max",
        age: "2 years",
        breed: "Pit Bull",
        desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, in?",
        gender: "male",
        color: "Brown",
        img: "images/inventory/dog_1.jpg"
    },
    {
        id: 2,
        name: "Bella",
        age: "Unknown",
        breed: "Chihuahua",
        desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, in?",
        gender: "female",
        color: "tan",
        img: "images/inventory/dog_2.jpeg"
    },
    {
        id: 3,
        name: "Buddy",
        age: "4 years",
        breed: "Hound",
        desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, in?",
        gender: "male",
        color: "Black, White",
        img: "images/inventory/dog_3.jpeg"
    },
    {
        id: 4,
        name: "Daisy",
        age: "2 years",
        breed: "Labrador",
        desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, in?",
        gender: "female",
        color: "Brown",
        img: "images/inventory/dog_4.jpeg"
    },
    {
        id: 5,
        name: "Charlie",
        age: "1 years",
        breed: "Pitbull, Boxer",
        desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, in?",
        gender: "male",
        color: "brown",
        img: "images/inventory/dog_5.jpg"
    },
    {
        id: 6,
        name: "Coco",
        age: "5 years",
        breed: "Poodle",
        desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, in?",
        gender: "female",
        color: "white",
        img: "images/inventory/dog_6.jpg"
    },
    {
        id: 7,
        name: "Jack",
        age: "4 years",
        breed: "Shar-pei",
        desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, in?",
        gender: "male",
        color: "Black",
        img: "images/inventory/dog_7.jpeg"
    },
    {
        id: 8,
        name: "Ellie",
        age: "1 years",
        breed: "Terrier Mix",
        desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, in?",
        gender: "female",
        color: "black",
        img: "images/inventory/dog_8.jpeg"
    },
    {
        id: 9,
        name: "Thor",
        age: "6 years",
        breed: "Sheppard",
        desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, in?",
        gender: "male",
        color: "brown",
        img: "images/inventory/dog_9.jpeg"
    }, //REPEAT////////////////////////////////
    {
        id: 1,
        name: "Max",
        age: "2 years",
        breed: "Pit Bull",
        desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, in?",
        gender: "male",
        color: "Brown",
        img: "images/inventory/dog_1.jpg"
    },
    {
        id: 2,
        name: "Bella",
        age: "Unknown",
        breed: "Chihuahua",
        desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, in?",
        gender: "female",
        color: "tan",
        img: "images/inventory/dog_2.jpeg"
    },
    {
        id: 3,
        name: "Buddy",
        age: "4 years",
        breed: "Hound",
        desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, in?",
        gender: "male",
        color: "Black, White",
        img: "images/inventory/dog_3.jpeg"
    },
    {
        id: 4,
        name: "Daisy",
        age: "2 years",
        breed: "Labrador",
        desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, in?",
        gender: "female",
        color: "Brown",
        img: "images/inventory/dog_4.jpeg"
    },
    {
        id: 5,
        name: "Charlie",
        age: "1 years",
        breed: "Pitbull, Boxer",
        desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, in?",
        gender: "male",
        color: "brown",
        img: "images/inventory/dog_5.jpg"
    },
    {
        id: 6,
        name: "Coco",
        age: "5 years",
        breed: "Poodle",
        desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, in?",
        gender: "female",
        color: "white",
        img: "images/inventory/dog_6.jpg"
    },
    {
        id: 7,
        name: "Jack",
        age: "4 years",
        breed: "Shar-pei",
        desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, in?",
        gender: "male",
        color: "Black",
        img: "images/inventory/dog_7.jpeg"
    },
    {
        id: 8,
        name: "Ellie",
        age: "1 years",
        breed: "Terrier Mix",
        desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, in?",
        gender: "female",
        color: "black",
        img: "images/inventory/dog_8.jpeg"
    },
    {
        id: 9,
        name: "Thor",
        age: "6 years",
        breed: "Sheppard",
        desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, in?",
        gender: "male",
        color: "brown",
        img: "images/inventory/dog_9.jpeg"
    }
];

window.addEventListener("DOMContentLoaded", () => {
    let inventory = document.querySelector(".inventory");

    let showProducts = products.map((product) => {
        return `<div class="card">
                    <div class="card-img">
                        <img src=${product.img} alt="product-1" class="img product-pic">
                    </div>

                    <div class="card-name">
                            <h1>${product.name}</h1>
                        </div>
                    <div class="info">
                        

                        <div class="card-age">
                            <h3>${product.age}</h3>
                        </div>

                        <div class="card-gender">
                            <h3>${product.gender}</h3>
                        </div>

                        <div class="card-breed">
                            <h3>${product.breed}</h3>
                        </div>

                        <a href="#" class="card-dog-link"><h3>More Info</h3></a>
                    </div>
                    

                    

                </div>`;
    });
    showProducts = showProducts.join("");
    inventory.innerHTML = showProducts;
});
