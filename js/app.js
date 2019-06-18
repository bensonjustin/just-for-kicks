// 1. Add an event to the 'See Details' content that will create an alert box that says 'Not Available in Hawaii.' after clicking on See Details.

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



//5. Add an event to the plus icon that will increment the price of the Air Jordan V shoe each time the icon is clicked on.

//6. Add an event to the minus icon that will decrement the price of the Air Jordan VI shoe each time the icon is clicked on.

//7. Add an event to the Air Jordan XI shoe that will show another colorway for that shoe after hovering over the image. 

//8. Add an event to the Air Jordan XII shoe that will increase the image by 50% after clicking on the image.

//9. Add events to both the plus and minus icon that will add or decrease the price each time the respective icon is clicked on.

//10. Add an event to the Air Jordan XXVIII shoe that will show the famous 'crying Michael Jordan' meme after clicking on the image.
