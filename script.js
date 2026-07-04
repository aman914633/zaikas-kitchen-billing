// ===== ZAIKA'S KITCHEN MENU =====

const menu = [
 {name:"Poha",price:30,icon:"🍛"},
 {name:"Chai",price:12,icon:"☕"},
 {name:"Black Tea",price:14,icon:"🫖"},
 {name:"Coffee",price:16,icon:"☕"},
 {name:"Rice Plate",price:80,icon:"🍚"},
 {name:"Chicken Thali",price:150,icon:"🍗"},
 {name:"Egg Curry",price:120,icon:"🥚"},
 {name:"Extra Rice",price:15,icon:"🍚"},
 {name:"Extra Chapati",price:6,icon:"🫓"},
 {name:"Extra Bhaji",price:15,icon:"🥘"},
 {name:"Extra Dal",price:12,icon:"🥣"},
 {name:"Butter Chapati",price:10,icon:"🧈"}
];

let bill = [];
let total = 0;

const menuContainer = document.getElementById("menuContainer");
const billItems = document.getElementById("billItems");
const totalSpan = document.getElementById("total");
const paidInput = document.getElementById("paid");
const changeSpan = document.getElementById("change");

// Create Menu
menu.forEach((item,index)=>{

const card=document.createElement("div");
card.className="card";

card.innerHTML=`
<h3>${item.icon} ${item.name}</h3>
<div class="price">₹${item.price}</div>
<button class="addBtn" onclick="addItem(${index})">
➕ Add
</button>
`;

menuContainer.appendChild(card);

});

// Add Item

function addItem(index){

bill.push(menu[index]);

total+=menu[index].price;

updateBill();

}

//
// ===== Quantity Support =====
let cart = {};

function addItem(index) {
    const item = menu[index];

    if (!cart[item.name]) {
        cart[item.name] = {
            ...item,
            qty: 0
        };
    }

    cart[item.name].qty++;
    renderBill();
}

function renderBill() {

    billItems.innerHTML = "";

    total = 0;

    Object.values(cart).forEach(item => {

        total += item.price * item.qty;

        billItems.innerHTML += `
        <div style="display:flex;justify-content:space-between;margin:8px 0;">
            <span>${item.icon} ${item.name} x ${item.qty}</span>
            <span>₹${item.price * item.qty}</span>
        </div>
        `;

    });

    totalSpan.innerText = total;

    calculateChange();

}

function calculateChange() {

    let paid = Number(paidInput.value) || 0;

    let change = paid - total;

    if(change>=0){

        changeSpan.style.color="green";
        changeSpan.innerText=change;

    }else{

        changeSpan.style.color="red";
        changeSpan.innerText="बाकी ₹"+Math.abs(change);

    }

}
