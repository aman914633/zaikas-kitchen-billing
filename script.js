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
