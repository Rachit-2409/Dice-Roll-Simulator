let btn = document.getElementById('Btn');
let image = document.getElementById('Dice_image');
let result_box = document.querySelector('ul');
btn.addEventListener('click', diceroll);
let number = 1;

function diceroll(){
    
   
    let value =  Math.floor(Math.random()*6);
    image.src = `./assests/side_${value + 1 }_pips.png`;


    /*Li */ 
    let ele =  document.createElement('li');
    result_box.appendChild(ele);

    /*result Image*/
    let image_result =  document.createElement('img');
    image_result.src = `./assests/side_${value + 1 }_pips.png`;

    let text = document.createElement('p');
    text.innerText = 'Roll : ' + number; 
    console.log(number);

    
    ele.appendChild(text);
    ele.appendChild(image_result);

    number++;


}