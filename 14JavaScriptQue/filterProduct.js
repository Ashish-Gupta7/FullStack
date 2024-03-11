var select = document.querySelector("#main nav #select");
var products = document.querySelector("#main #products");
var search = document.querySelector("#main nav #search");

var arr = [
    { name: "Apple", tag: "Fruit", price: 100 },
    { name: "Mango", tag: "Fruit", price: 80 },
    { name: "Orange", tag: "Fruit", price: 70 },
    { name: "Grapes", tag: "Fruit", price: 60 },
    { name: "Banana", tag: "Fruit", price: 80 },
    { name: "Watermelon", tag: "Fruit", price: 100 },
    { name: "Pineapple", tag: "Fruit", price: 120 },
    { name: "Kiwi", tag: "Fruit", price: 140 },
    { name: "Blueberry", tag: "Fruit", price: 80 },
    { name: "Cherry", tag: "Fruit", price: 90 },
    { name: "Avocado", tag: "Fruit", price: 120 },
    { name: "Mobile", tag: "Electronics", price: 13000 },
    { name: "Earphone", tag: "Electronics", price: 150 },
    { name: "Bulb", tag: "Electronics", price: 60 },
    { name: "TV", tag: "Electronics", price: 60 },
    { name: "Laptop", tag: "Electronics", price: 40000 },
    { name: "Desktop", tag: "Electronics", price: 50000 },
    { name: "Charger", tag: "Electronics", price: 700 },
    { name: "House", tag: "Assets", price: 10000000 },
    { name: "Gold", tag: "Assets", price: 70000 },
    { name: "Silver", tag: "Assets", price: 40000 },
    { name: "Car", tag: "Assets", price: 1500000 },
    { name: "Paintings", tag: "Assets", price: 200000 },
    { name: "Shirt", tag: "Clothing", price: 500 },
    { name: "T-Shirt", tag: "Clothing", price: 200 },
    { name: "Pant", tag: "Clothing", price: 700 },
    { name: "Lowers", tag: "Clothing", price: 250 },
    { name: "Coats", tag: "Clothing", price: 2500 },
    { name: "Jackets", tag: "Clothing", price: 4250 },
    { name: "Shoes", tag: "Clothing", price: 2250 },
    { name: "Trousers", tag: "Clothing", price: 550 },
    { name: "Sweaters", tag: "Clothing", price: 750 },
    { name: "Clothes", tag: "Essentials", price: 5000 },
    { name: "Milk", tag: "Essentials", price: 50 },
    { name: "Toothbrush", tag: "Essentials", price: 10 },
    { name: "Kitchen Appliences", tag: "Essentials", price: 23000 },
    { name: "Cookware", tag: "Essentials", price: 18000 },
    { name: "Tableware", tag: "Essentials", price: 24000 },
    { name: "Table", tag: "Interior", price: 1000 },
    { name: "Bed", tag: "Interior", price: 12000 },
    { name: "Chair", tag: "Interior", price: 400 },
    { name: "Cabinets", tag: "Interior", price: 1500 },
    { name: "Artwork", tag: "Interior", price: 900 },
    { name: "Candles", tag: "Interior", price: 15 },
    { name: "Carpet", tag: "Interior", price: 1700 },
    { name: "Wallpaper", tag: "Interior", price: 50 },
    { name: "Cabinets", tag: "Interior", price: 1500 },
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

function getProducts(productDetails) {
    var productClutter = "";
    productDetails.forEach(elm => {
        productClutter = productClutter + `            <div class="product-details">
        <h2>${elm.name}</h2>
        <div class="category">${elm.tag}</div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure est dolor doloremque cumque eos quibusdam, ut perspiciatis saepe accusantium.</p>
        <button>Add</button>
        </div>`
    })
    products.innerHTML = productClutter;
}
getProducts(arr);

function searchProducts(){
    search.addEventListener( "input", function(){
        var searchTerm = search.value;
        var filteredProducts = arr.filter( elm => elm.name.toLowerCase().startsWith(searchTerm.toLowerCase()) )
        getProducts(filteredProducts);
    } )
}
searchProducts();

function filterProducts() {
    select.addEventListener("change", function(){
        var selectedTag = select.value;
        var filteredProducts = arr.filter(prod => selectedTag === "All" || prod.tag === selectedTag);
        getProducts(filteredProducts);
    });
}
filterProducts();