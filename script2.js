const listProducts = [
    {
        name: "Whiskas Junior",
        price: 150000,
        description: "Lorem ipsum dolor sit amet."
    },
    {
        name: "Whiskas Adult",
        price: 150000,
        description: "Lorem ipsum dolor sit amet."
    },
    {
        name: "Whiskas Baby",
        price: 150000,
        description: "Lorem ipsum dolor sit amet."
    },
    {
        name: "Royal Canin Junior",
        price: 150000,
        description: "Lorem ipsum dolor sit amet."
    },
    {
        name: "Royal Canin Adult",
        price: 150000,
        description: "Lorem ipsum dolor sit amet."
    },
    {
        name: "Royal Canin Baby",
        price: 150000,
        description: "Lorem ipsum dolor sit amet."
    },
    {
        name: "Bolt! Junior",
        price: 150000,
        description: "Lorem ipsum dolor sit amet."
    },
    {
        name: "Bolt! Adult",
        price: 150000,
        description: "Lorem ipsum dolor sit amet."
    },
    {
        name: "Bolt! Baby",
        price: 150000,
        description: "Lorem ipsum dolor sit amet."
    }

]

function formatPrice(value) {
    return `Rp ${value.toLocaleString('id')}`
}

function displayProduct(arrayOfProduct) {
    document.getElementById('content').innerHTML = arrayOfProduct.map(product => 
        `<div class="card">
          <h1>${product.name}</h1>
          <p class="price">${formatPrice(product.price)}</p>
          <p>${product.description}</p>
          <button>Add to Cart</button>
        </div>`
    );
}

function search() {
    const value = document.getElementById("search_product").value;
    const filteredProduct = listProducts.filter(product => {
        return product.name.toLowerCase().includes(value.toLowerCase());
    });
    displayProduct(filteredProduct);
}


displayProduct(listProducts);


function openForm() {
    document.getElementById("myForm").style.display = "block";
}
  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}