const url = "http://172.30.0.69:8080";

var defaultPrice = 0, price = defaultPrice; totalPrice = 0;
var temp; var orders = []; orderIndex = 0;
window.onload = () => {
  document.getElementById("purchase_button").addEventListener('click', () => disableCart());
  ["addBI", "addIIB", "addIWB", "addIAB", "addBIB", "addEI", "addC", "addW"].forEach(e => { document.getElementById(e).addEventListener('click', () => showAdd(e)); });
  document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();
    for (i = 1; i <= temp.num; i++) { temp.iceNum[document.getElementById("flavor" + i).options.selectedIndex - 1]++; temp.topNum[document.getElementById("topping" + i).options.selectedIndex - 1]++; };
    if(temp.type == "Ice Affogato Baby")temp.topNum[document.getElementById("topping2").options.selectedIndex - 1]++;
    for (i = 0; i < 3; i++) { temp.iceAdd[i] = Number(document.getElementById("flavor1-" + (i + 1)).value) };
    for (i = 0; i < 7; i++) { temp.topAdd[i] = Number(document.getElementById("topping1-" + (i + 1)).value) };
    
    if (temp.type == "Ice Waffle Baby") { temp.waffleAdd = 1; } else { temp.waffleAdd = 0; }
    if (temp.type == "Ice Affogato Baby") { temp.coffeeAdd = [1, 0]; } else { for (i = 0; i < 2; i++) { temp.coffeeAdd[i] = Number(document.getElementById("coffee1-" + (i + 1)).value); }; };
    temp.waterAdd = Number(document.getElementById("water1").value);
    if (temp.type == "Extra Ice Cream") { for (i = 0; i < 3; i++) { temp.iceAdd[i] = Number(document.getElementById("iceflavor1-" + (i + 1)).value) }; }
    if (temp.type == "Extra Topping") { for (i = 0; i < 7; i++) { temp.topAdd[i] = Number(document.getElementById("toptopping1-" + (i + 1)).value) }; }
    temp.price = price;
    addCart(menu);
    });
    ["iceflavor1-1", "iceflavor1-2", "iceflavor1-3", "toptopping1-1", "toptopping1-2", "toptopping1-3", "toptopping1-3", "toptopping1-5", "toptopping1-6", "toptopping1-7", "coffee1-1", "coffee1-2", "water1", "flavor1-1", "flavor1-2", "flavor1-3", "topping1-1", "topping1-2", "topping1-3", "topping1-4", "topping1-5", "topping1-6", "topping1-7"].forEach(e => { document.getElementById(e).addEventListener('change', () => setPrice(e)); });
  document.getElementById("confirm_button").addEventListener('click', () => send());
    }
    function addOrder(label, num, price) {
      temp = new Order(label, num, price);
      }
      function showAdd(btn) {
        document.querySelector('form').reset();
  for (i = 1; i <= 3; i++) { document.getElementById("flavor" + i).removeAttribute('required'); };
  for (i = 1; i <= 3; i++) { document.getElementById("topping" + i).removeAttribute('required'); };
  ["combomain", "flavor", "topping", "waffle", "coffee", "icecream-1", "icecream-2", "icecream-3", "topping-1", "topping-2", "topping-3", "alaice", "alatop", "alacoffee", "alawater", "combala"].forEach(e => hide(e));
  switch (btn) {
    case "addBI":
      label = "Baby Ice";
      document.getElementById('Label').textContent = label;
      defaultPrice = 10; price = defaultPrice; document.getElementById('Price').textContent = price;
      ["combomain", "flavor", "topping", "icecream-1", "topping-1", "combala", "accordionice"].forEach(e => show(e));
      addOrder(label, 1, price);
      break;
    case "addIIB":
      label = "Ice Ice Baby"
      document.getElementById('Label').textContent = label;
      defaultPrice = 20; price = defaultPrice; document.getElementById('Price').textContent = price;
      ["combomain", "flavor", "topping", "icecream-1", "icecream-2", "topping-1", "topping-2", "combala", "accordionice"].forEach(e => show(e));
      addOrder(label, 2, price);
      break;
    case "addIWB":
      label = "Ice Waffle Baby";
      document.getElementById('Label').textContent = label;
      defaultPrice = 32; price = defaultPrice; document.getElementById('Price').textContent = price;
      ["combomain", "flavor", "topping", "icecream-1", "icecream-2", "topping-1", "topping-2", "waffle", "combala", "accordionice"].forEach(e => show(e));
      addOrder(label, 2, price);
      break;
    case "addIAB":
      label = "Ice Affogato Baby";
      document.getElementById('Label').textContent = label;
      defaultPrice = 18; price = defaultPrice; document.getElementById('Price').textContent = price;
      ["combomain", "flavor", "topping", "icecream-1", "topping-1", "topping-2", "coffee", "combala", "accordionice"].forEach(e => show(e));
      addOrder(label, 1, price);
      break;
    case "addBIB":
      label = "Big Ice Baby";
      document.getElementById('Label').textContent = label;
      defaultPrice = 30; price = defaultPrice; document.getElementById('Price').textContent = price;
      ["combomain", "flavor", "topping", "icecream-1", "icecream-2", "icecream-3", "topping-1", "topping-2", "topping-3", "combala", "accordionice"].forEach(e => show(e));
      addOrder(label, 3, price);
      break;
    case "addEI":
      label = "Extra Ice Cream";
      document.getElementById('Label').textContent = label;
      defaultPrice = 0; price = defaultPrice; document.getElementById('Price').textContent = price;
      ["alaice", "combala"].forEach(e => show(e));
      ["accordionice"].forEach(e => hide(e));
      addOrder(label, 0, price);
      break;
    case "addC":
      label = "Coffee";
      document.getElementById('Label').textContent = label;
      defaultPrice = 0; price = defaultPrice; document.getElementById('Price').textContent = price;
      ["alacoffee"].forEach(e => show(e));
      addOrder(label, 0, price);
      break;
    case "addW":
      label = "Water";
      document.getElementById('Label').textContent = label;
      defaultPrice = 0; price = defaultPrice; document.getElementById('Price').textContent = price;
      ["alawater"].forEach(e => show(e));
      addOrder(label, 0, price);
    default:
      break;
  }
  for (i = 1; i <= temp.num; i++) { document.getElementById("flavor" + i).setAttribute('required', true); document.getElementById("topping" + i).setAttribute('required', true); };
  if(temp.type == "Ice Affogato Baby")document.getElementById("topping2").setAttribute('required', true);
}
function setPrice() {
  price = defaultPrice
    + (Number(document.getElementById("flavor1-1").value) + Number(document.getElementById("flavor1-2").value) + Number(document.getElementById("flavor1-3").value) + Number(document.getElementById("iceflavor1-1").value) + Number(document.getElementById("iceflavor1-2").value) + Number(document.getElementById("iceflavor1-3").value)) * 9
    + (Number(document.getElementById("topping1-1").value) + Number(document.getElementById("topping1-2").value) + Number(document.getElementById("topping1-3").value) + Number(document.getElementById("topping1-4").value) + Number(document.getElementById("topping1-5").value) + Number(document.getElementById("topping1-6").value) + Number(document.getElementById("topping1-7").value) + Number(document.getElementById("toptopping1-1").value) + Number(document.getElementById("toptopping1-2").value) + Number(document.getElementById("toptopping1-3").value) + Number(document.getElementById("toptopping1-4").value) + Number(document.getElementById("toptopping1-5").value) + Number(document.getElementById("toptopping1-6").value) + Number(document.getElementById("toptopping1-7").value)) * 3
    + (Number(document.getElementById("coffee1-1").value) + Number(document.getElementById("coffee1-2").value)) * 8
    + (Number(document.getElementById("water1").value)) * 2;
  document.getElementById("Price").textContent = price;
}
function show(id) { document.getElementById(id).style.display = ""; }
function hide(id) { document.getElementById(id).style.display = "none"; }
function zeros(i) { return Array.from({ length: i }, () => 0) }
function Order(type, num, price, iceNum = zeros(3), topNum = zeros(7), iceAdd = zeros(3), topAdd = zeros(7), waffleAdd = 0, coffeeAdd = zeros(2), waterAdd = 0) {
  this.index = orderIndex++;
  this.type = type;
  this.num = num;
  this.price = price;
  this.iceNum = iceNum;
  this.topNum = topNum;
  this.iceAdd = iceAdd;
  this.topAdd = topAdd;
  this.waffleAdd = waffleAdd;
  this.coffeeAdd = coffeeAdd;
  this.waterAdd = waterAdd;
}
/**
 * @param {Order} order 
 */
function addCart(order) {
  orders.push(temp);
  const div = document.createElement('div');
  div.innerHTML = `
${temp.iceNum[0] + temp.iceNum[1] + temp.iceNum[2] + temp.iceAdd[0] + temp.iceAdd[1] + temp.iceAdd[2] + temp.topNum[0] + temp.topNum[1] + temp.topNum[2] + temp.topNum[3] + temp.topNum[4] + temp.topNum[5] + temp.topNum[6] + temp.topAdd[0] + temp.topAdd[1] + temp.topAdd[2] + temp.topAdd[3] + temp.topAdd[4] + temp.topAdd[5] + temp.topAdd[6] + temp.waffleAdd + temp.coffeeAdd[0] + temp.coffeeAdd[1] + temp.waterAdd != 0 ? `
<div class="card cartcard"><!--requirement: offcanvas의 addcart버튼 클릭시 형식(이름, 구성, 각 구성의 수량, 가격) 맞춰서 추가-->
  <div class="card-header">
    ${temp.type}
    <p class="card-total">¥<span id="cardTotal">${temp.price}<span></p><!--product price-->
    <button type="button" class="btn-close" data-bs-dismiss="card" aria-label="Close" id="productclose" onclick="javasript:this.parentNode.parentNode.remove();totalMenu(-1*Number(this.parentNode.parentNode.querySelector('span').textContent));orders=orders.filter(e=>{return e.index!=${temp.index}});totalMenu();"></button>
  </div>
  <div class="card-body">
    ${temp.iceNum[0] + temp.iceNum[1] + temp.iceNum[2] +temp.iceAdd[0] + temp.iceAdd[1] + temp.iceAdd[2] != 0 ? `
    <div class="card" id="producticecream">
      <div class="card-body">
        <h5 class="card-title">Ice Cream</h5>
        <div class="row">
    `: ''}
          ${temp.iceNum[0]+temp.iceAdd[0] != 0 ? `<div class="col"><p class="card-text" id="productflavor1">Vanilla: <span id="productFlavor1">${temp.iceNum[0]+temp.iceAdd[0]}</span></p></div>` : ''}
          ${temp.iceNum[1]+temp.iceAdd[1] != 0 ? `<div class="col"><p class="card-text" id="productflavor2">Chocolate: <span id="productFlavor2">${temp.iceNum[1]+temp.iceAdd[1]}</span></p></div>` : ''}
          ${temp.iceNum[2]+temp.iceAdd[2] != 0 ? `<div class="col"><p class="card-text" id="productflavor3">Strawberry: <span id="productFlavor3">${temp.iceNum[2]+temp.iceAdd[2]}</span></p></div>` : ''}
    ${temp.iceNum[0] + temp.iceNum[1] + temp.iceNum[2] +temp.iceAdd[0] + temp.iceAdd[1] + temp.iceAdd[2] != 0 ? `
        </div>
      </div>
    </div>
    `: ''}
    ${temp.topNum[0] + temp.topNum[1] + temp.topNum[2] + temp.topNum[3] + temp.topNum[4] + temp.topNum[5] + temp.topNum[6] + temp.topAdd[0] + temp.topAdd[1] + temp.topAdd[2] + temp.topAdd[3] + temp.topAdd[4] + temp.topAdd[5] + temp.topAdd[6] != 0 ? `
    <div class="card" id="producttoppings">
      <div class="card-body">
        <h5 class="card-title">Toppings</h5>
        <div class="row">
    `: ''}
          ${temp.topNum[0] + temp.topAdd[0] != 0 ? `<div class="col-6"><p class="card-text" id="producttop1">Oreos: <span id="productTop1">${temp.topNum[0] + temp.topAdd[0]}</span></p></div>` : ''}
          ${temp.topNum[1] + temp.topAdd[1] != 0 ? `<div class="col-6"><p class="card-text" id="producttop2">Sprinkle: <span id="productTop2">${temp.topNum[1] + temp.topAdd[1]}</span></p></div>` : ''}
          ${temp.topNum[2] + temp.topAdd[2] != 0 ? `<div class="col-6"><p class="card-text" id="producttop3">Fudge Syrup: <span id="productTop3">${temp.topNum[2] + temp.topAdd[2]}</span></p></div>` : ''}
          ${temp.topNum[3] + temp.topAdd[3] != 0 ? `<div class="col-6"><p class="card-text" id="producttop4">Caramel Syrup: <span id="productTop4">${temp.topNum[3] + temp.topAdd[3]}</span></p></div>` : ''}
          ${temp.topNum[4] + temp.topAdd[4] != 0 ? `<div class="col-6"><p class="card-text" id="producttop5">Waffle Bit: <span id="productTop5">${temp.topNum[4] + temp.topAdd[4]}</span></p></div>` : ''}
          ${temp.topNum[5] + temp.topAdd[5] != 0 ? `<div class="col-6"><p class="card-text" id="producttop6">Waffle Cone: <span id="productTop6">${temp.topNum[5] + temp.topAdd[5]}</span></p></div>` : ''}
          ${temp.topNum[6] + temp.topAdd[6] != 0 ? `<div class="col-12"><p class="card-text" id="producttop7">Whipped Topping: <span id="productTop7">${temp.topNum[6] + temp.topAdd[6]}</span></p></div>` : ''}
    ${temp.topNum[0] + temp.topNum[1] + temp.topNum[2] + temp.topNum[3] + temp.topNum[4] + temp.topNum[5] + temp.topNum[6] + temp.topAdd[0] + temp.topAdd[1] + temp.topAdd[2] + temp.topAdd[3] + temp.topAdd[4] + temp.topAdd[5] + temp.topAdd[6] != 0 ? `
        </div>
      </div>
    </div>
    `: ''}
    ${temp.waffleAdd != 0 ? `
    <div class="card" id="productwaffle">
      <div class="card-body">
        <h5 class="card-title" id="productwaffle1">Waffle: <span id="productWaffle1">${temp.waffleAdd}</span></h5>
      </div>
    </div>
    `: ''}
    ${temp.coffeeAdd[0] + temp.coffeeAdd[1] != 0 ? `
    <div class="card" id="productcoffee">
      <div class="card-body">
        <h5 class="card-title">Coffee</h5>
        <div class="row row-cols-2">
    `: ''}
          ${temp.coffeeAdd[0] != 0 ? `<div class="col"><p class="card-text" id="productcoffee1">Hot Coffee: <span id="productCoffee1">${temp.coffeeAdd[0]}</span></p></div>` : ''}
          ${temp.coffeeAdd[1] != 0 ? `<div class="col"><p class="card-text" id="productcoffee2">Iced Coffee: <span id="productCoffee2">${temp.coffeeAdd[1]}</span></p></div>` : ''}
    ${temp.coffeeAdd[0] + temp.coffeeAdd[1] != 0 ? `
        </div>
      </div>
    </div>
    `: ''}
    ${temp.waterAdd != 0 ? `
    <div class="card" id="productwater">
      <div class="card-body">
        <h5 class="card-title" id="productwater1">Water: <span id="productWater1">${temp.waterAdd}</span></h5>
      </div>
    </div>
    `: ''}
  </div>
</div>
`: ''}
`;
  if(temp.iceNum[0] + temp.iceNum[1] + temp.iceNum[2] + temp.iceAdd[0] + temp.iceAdd[1] + temp.iceAdd[2] + temp.topNum[0] + temp.topNum[1] + temp.topNum[2] + temp.topNum[3] + temp.topNum[4] + temp.topNum[5] + temp.topNum[6] + temp.topAdd[0] + temp.topAdd[1] + temp.topAdd[2] + temp.topAdd[3] + temp.topAdd[4] + temp.topAdd[5] + temp.topAdd[6] + temp.waffleAdd + temp.coffeeAdd[0] + temp.coffeeAdd[1] + temp.waterAdd != 0){
    document.getElementById('cartcards').append(div);
    document.querySelector('form').reset();
    totalMenu(temp.price);
    document.getElementById('canvas_close').click();
  }
}
function totalMenu(p=0) {
  document.getElementById('numAdded').textContent = orders.length;
  totalPrice += p; document.getElementById('totalPrice').textContent = totalPrice;  document.getElementById('finalPrice').textContent = totalPrice;
}

function send(){
  fetch(url+"/order",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({order:orders})
  })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      document.getElementById('modal_id').textContent=data.index;
    })
    .catch(err=>console.log(err));
}
function disableCart(){
  if(Number(document.getElementById("totalPrice").textContent)==0){document.getElementById("confirm_button").setAttribute('disabled', true);}
  if(Number(document.getElementById("totalPrice").textContent)!=0){document.getElementById("confirm_button").removeAttribute('disabled');}
}