// 1. Add an event to the 'See Details' content that will create an alert box that says 'Not Available in Hawaii.' after clicking on See Details.
console.log(document.querySelectorAll("#main"))
let avail = document.querySelector('#details');
avail.addEventListener('click', add);

function add(){
    window.alert("Not Available in Hawaii.");
}

//2. Add an event to the div element with the id of 'name1' that will show/hide the description ('descrip1') after hovering over Air Jordan II.

let air2des = document.querySelector('#name1');
air2des.addEventListener('mouseover', showDes);
air2des.addEventListener('mouseout', removeDes);

function showDes(){
    if (document.querySelector('#descrip1').style.display !== 'block'){
        return document.querySelector('#descrip1').style.display = 'block';
    }
}

function removeDes(){
    if (document.querySelector('#descrip1').style.display === 'block'){
        return document.querySelector('#descrip1').style.display = 'none';
    }
}

//3. Add an event to the div element with the id of 'name2' that will show/hide the following description after clicking on the element.
//'The instantly recognizable Jumpman silhouette made its debut with the Air Jordan 3 during Michael Jordan's 1987-88 NBA season.'

let air3des = document.querySelector('#name2');
air3des.addEventListener('click', showDes2);
let air3desText = document.createElement('div');
air3desText.id = 'descrip2';
air3desText.innerHTML = "The instantly recognizable Jumpman silhouette made its debut with the Air Jordan 3 during Michael Jordan's 1987-88 NBA season.";
air3des.appendChild(air3desText);

function showDes2(){
    if (descrip2.style.display !== 'block'){
        return descrip2.style.display = 'block';
    }else{
        return descrip2.style.display = 'none';
    }
}

//You'll need to:
// create a div element with an id of 'descrip2'
//append this element to the div element with the id of 'name2' 

//4. Add events to the all the thumbs up icon that will add a count for each time the icon is clicked on for any shoe.

let thumbsUp = document.querySelectorAll('#thumbs');
for (let i=0; i<thumbsUp.length; i++){
thumbsUp[i].addEventListener('click', clickThumb);
let thumbsUpCount = document.createElement('div');
thumbsUpCount.id = 'numLikes';
thumbsUp[i].appendChild(thumbsUpCount);

function clickThumb(){
    console.log('test')
    numLikes[i].innerHTML++
}
}

//5. Add an event to the plus icon that will increment the price of the Air Jordan V shoe each time the icon is clicked on.

let priceInc = document.querySelector('#increase');
priceInc.addEventListener('click', clickPlus);

function clickPlus(){
    let x = document.querySelector('#price4').childNodes[0];
    x.data = Number(x.data) + 100;
}

//6. Add an event to the minus icon that will decrement the price of the Air Jordan VI shoe each time the icon is clicked on.

let priceDec = document.querySelector("#decrease");
priceDec.addEventListener('click', clickMinus);

function clickMinus(){
    let y = document.querySelector('#price5').childNodes[0];
    y.data = Number(y.data) - 100;
}

//7. Add an event to the Air Jordan XI shoe that will show another colorway for that shoe after hovering over the image. 

let shoeColor = document.querySelector("#main > div:nth-child(3) > div.block3.col-sm-4 > img");
shoeColor.addEventListener('mouseover', changeColor);
shoeColor.addEventListener('mouseout', changeColorBack);

function changeColor(){
    shoeColor.src = "https://www.flightclub.com/media/catalog/product/cache/1/small_image/360x257/9df78eab33525d08d6e5fb8d27136e95/8/0/805239_01.jpg"
}
function changeColorBack(){
    shoeColor.src = "https://www.sneakerlegends.com/images/stories/virtuemart/product/378037623%20378037623%20378037623%20378037623.jpg"
}

//8. Add an event to the Air Jordan XII shoe that will increase the image by 50% after clicking on the image.

let imgSize = document.querySelector("#main > div:nth-child(4) > div.block1.col-sm-4 > img");
imgSize.addEventListener('click', incSize);

function incSize(){
    if (imgSize.style.width === "250px"){
    imgSize.style.width = "150%";
    imgSize.style.height = "auto";
    }else{
    imgSize.style.width = "250px";
    imgSize.style.height = "250px";
    }
}

//9. Add events to both the plus and minus icon that will add or decrease the price each time the respective icon is clicked on.
console.log
let price2inc = document.querySelector('#oneUp');
let price2dec = document.querySelector('#oneDown');

price2inc.addEventListener('click', incPrice);
price2dec.addEventListener('click', decPrice);
console.log(price2inc);
function incPrice(){
    let price2incVal = document.querySelector('#price8').childNodes[0];
    price2incVal.data = Number(price2incVal.data) + 100;
}

function decPrice(){
    let price2decVal = document.querySelector('#price8').childNodes[0];
    price2decVal.data = Number(price2decVal.data) - 100;
}

//10. Add an event to the Air Jordan XXVIII shoe that will show the famous 'crying Michael Jordan' meme after clicking on the image.

let cryingBox = document.createElement('img');
cryingBox.id = 'cryingMJ';
cryingBox.src = 'https://media.npr.org/assets/img/2016/03/29/ap_090911089838_sq-3271237f28995f6530d9634ff27228cae88e3440-s800-c85.jpg';
banner.appendChild(cryingBox);
cryingBox.style.display = 'none'

let modal = document.querySelector("#main > div:nth-child(4) > div.block3.col-sm-4 > img");
modal.addEventListener('click', showCryingMJ);
let modalBack = document.querySelector('#cryingMJ');
modalBack.addEventListener('click', goBack);

function showCryingMJ(){
    cryingBox.style.display = 'none'
    cryingBox.style.display = 'block'
    cryingBox.style.width = '60%'
    cryingBox.style.height = 'auto'
    mjbanner.style.display = 'none'
    menu.style.display = 'none'
    shipping.style.display = 'none'
    main.style.display = 'none'
}
function goBack(){
    cryingBox.style.display = 'none'
    mjbanner.style.display = 'block'
    menu.style.display = 'block'
    shipping.style.display = 'block'
    main.style.display = 'block'
}