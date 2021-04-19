// PRODUCTS
//home products
let homeProducts = [
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

// home inventory map
window.addEventListener("DOMContentLoaded", () => {
    let homeInventory = document.querySelector(".homeInventory");

    let showHomeProducts = homeProducts.map((homeProduct) => {
        return `<div class="card">
                    <div class="card-img">
                        <img src=${homeProduct.img} alt="product-1" class="img product-pic">
                    </div>

                    <div class="card-name">
                            <h1>${homeProduct.name}</h1>
                        </div>
                    <div class="info">
                        

                        <div class="card-age">
                            <h3>${homeProduct.age}</h3>
                        </div>

                        <div class="card-gender">
                            <h3>${homeProduct.gender}</h3>
                        </div>

                        <div class="card-breed">
                            <h3>${homeProduct.breed}</h3>
                        </div>

                        <a href="#" class="card-dog-link"><h3>More Info</h3></a>
                    </div>
                </div>`;
    });
    showHomeProducts = showHomeProducts.join("");
    homeInventory.innerHTML = showHomeProducts;
});

//all products
let allProducts = [
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
    },
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

// full inventory map
window.addEventListener("DOMContentLoaded", () => {
    const fullInventory = document.querySelector(".full-inventory");

    let showAllProducts = allProducts.map((eachProduct) => {
        return `<div class="card">
                    <div class="card-img">
                        <img src=${eachProduct.img} alt="product-1" class="img product-pic">
                    </div>

                    <div class="card-name">
                            <h1>${eachProduct.name}</h1>
                        </div>
                    <div class="info">

                        <div class="card-age">
                            <h3>${eachProduct.age}</h3>
                        </div>

                        <div class="card-gender">
                            <h3>${eachProduct.gender}</h3>
                        </div>

                        <div class="card-breed">
                            <h3>${eachProduct.breed}</h3>
                        </div>

                        <a href="#" class="card-dog-link"><h3>More Info</h3></a>
                    </div>
                </div>`;
    });
    showAllProducts = showAllProducts.join("");
    fullInventory.innerHTML = showAllProducts;
});

/*
// SORTING COLORS
let blacks = [];
let browns = [];
let whites = [];
let otherColors = [];

dog.color.toLowerCase() == "black".toLowerCase()
    ? blacks.push(dog.name)
    : dog.color.toLowerCase() == "brown".toLowerCase()
    ? browns.push(dog.name)
    : dog.color.toLowerCase() == "white".toLowerCase()
    ? whites.push(dog.name)
    : otherColors.push(dog.name);
*/

submit = document.querySelector(".form-submit");

/*
allProducts = allProducts.filter(
    (female) =>
        female.gender.toLocaleLowerCase() == "female".toLocaleLowerCase()
);

allProducts = allProducts.filter(
    (male) => male.gender.toLowerCase() == "male".toLocaleLowerCase()
);
*/

const getForm = () => {
    console.log("Getting the form data.");
    var gender = document.querySelector(input);
    console.log(gender);
};

submit.addEventListener("submit", getForm());

// function getForm() {
//     console.log("Getting the form data.");
//     var input = document.querySelectorAll("gender");
//     console.log(input);
//     for (i = 0; i < input.length; i++) {
//         if (input[i].checked) {
//             console.log(input[i].value);
//         }
//     }
// }
