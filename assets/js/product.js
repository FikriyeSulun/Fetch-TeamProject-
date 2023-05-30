let shopSomeWearCards = document.querySelector('.shopSomeWearCards');
const shopSomeWearButton = document.querySelector('#shopSomeWearButton');
let shopSomeWearCard = document.querySelectorAll('.shopSomeWearCard');
let products;
fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(json => {
        products = json.products;
        console.log(products);
        listCategory();
        listProducts("");
    });


shopSomeWearButton.addEventListener('click', () => {
    document.querySelectorAll('.shopSomeWearCards > *:nth-child(n+9)').forEach(item => {
        item.style.display = 'block'
        shopSomeWearButton.style.display = 'none';
    })
});

function asd(){
    
}

let shopSomeWearLeftList = document.querySelector('.shopSomeWearLeftList');
let listCategory = () => {

    let categoryMap = products.map(item => item.category);
    let uniqueChars = [...new Set(categoryMap)];

    uniqueChars.forEach(item => {

        shopSomeWearLeftList.children[0].innerHTML +=
            `<label for="${item}" onclick="listProducts('${item}')" ><input type="checkbox" name="${item}" id="${item}">${item}</label>`
    })

}

let listProducts = (param) => {
    shopSomeWearCards.innerHTML = '';

    if (param !== "") {
        products.filter(item => item.category === `${param}`).forEach(item => {
            shopSomeWearCards.innerHTML += `<div class="shopSomeWearCard" onclick="routeProducts()">
<div class="showSomeWearCardImage" >
    <img src="${item.thumbnail}" alt="">
</div>
<div class="shopSomeWearText">
    <h5>${item.category}</h5>
    <p>${item.title}</p>
</div>
<div class="shopSomeWearCardPrice">
    <h3>${item.price} EUR</h3>
</div>
</div>`;
        });
    }
    else {
        products.forEach(item => {

            shopSomeWearCards.innerHTML += `<div class="shopSomeWearCard" onclick="routeProducts()">
            <div class="showSomeWearCardImage">
                <img src="${item.thumbnail}" alt="">
            </div>
            <div class="shopSomeWearText">
                <h5>${item.category}</h5>
                <p>${item.title}</p>
            </div>
            <div class="shopSomeWearCardPrice">
                <h3>${item.price} EUR</h3>
            </div>
            </div>`;
            shopSomeWearCard.forEach(item => item.addEventListener('click', routeProducts()));
        });
    }



    // for (let i = 4; i < 5; i++) {
    //     shopSomeWearCards.innerHTML += `<div class="shopSomeWearCard">
    //     <div class="showSomeWearCardImage">
    //         <img src="${products[i].thumbnail}" alt="">
    //     </div>
    //     <div class="shopSomeWearText">
    //         <h5>${products[i].category}</h5>
    //         <p>${products[i].title}</p>
    //     </div>
    //     <div class="shopSomeWearCardPrice">
    //     <h3 class="discount">${products[i].price - (products[i].discountPercentage * products[i].price / 100).toFixed(2)} EUR</h3>
    //     <h6>${products[i].price} EUR</h6>
    // </div>
    // <span>-${products[i].discountPercentage}%</span>
    //     </div>`
    // }

}
