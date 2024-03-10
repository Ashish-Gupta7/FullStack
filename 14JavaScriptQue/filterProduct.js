var select = document.querySelector("#main nav #select");
var products = document.querySelector("#main #products");
var search = document.querySelector("#main nav #search");

var arr = [
    { name: "Apple", tag: "Fruit", price: 100 },
    { name: "Mango", tag: "Fruit", price: 80 },
    { name: "Orange", tag: "Fruit", price: 70 },
    { name: "Mobile", tag: "Electronics", price: 13000 },
    { name: "Earphone", tag: "Electronics", price: 150 },
    { name: "Bulb", tag: "Electronics", price: 60 },
    { name: "House", tag: "Assets", price: 10000000 },
    { name: "Car", tag: "Assets", price: 1500000 },
    { name: "Shirt", tag: "Clothing", price: 500 },
    { name: "T-Shirt", tag: "Clothing", price: 200 },
    { name: "Pant", tag: "Clothing", price: 700 },
    { name: "Lowers", tag: "Clothing", price: 250 },
    { name: "Clothes", tag: "Essentials", price: 5000 },
    { name: "Milk", tag: "Essentials", price: 50 },
    { name: "Toothbrush", tag: "Essentials", price: 10 },
    { name: "Table", tag: "Interior", price: 1000 },
    { name: "Bed", tag: "Interior", price: 12000 },
    { name: "Sofa", tag: "Interior", price: 15000 },
    { name: "Almirah", tag: "Interior", price: 7000 }
];

function getOptionsToSelect() {
    var tags = arr.map(elm => elm.tag)
    // tags = [...new Set(tags.sort())]     // 1st method convert into new array
    tags = Array.from(new Set(tags.sort()));    // 2nd method
    // console.log(tags);
    var selectClutter = `<option value="All">All</option>`;
    tags.forEach(elm => {
        selectClutter = selectClutter + `<option value="${elm}">${elm}</option>`
    })
    select.innerHTML = selectClutter;
}
getOptionsToSelect();

function getProducts() {
    var productClutter = "";
    arr.forEach(elm => {
        productClutter = productClutter + `            <div class="product-details">
        <h2>${elm.name}</h2>
        <div class="category">${elm.tag}</div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure est dolor doloremque cumque eos quibusdam, ut perspiciatis saepe accusantium.</p>
        <button>Add</button>
    </div>`
    })
    products.innerHTML = productClutter;
}
getProducts();