let buttons = Array.from(document.getElementsByClassName('button'));

let display = document.getElementById("display");

let numOne = 0;
let numTwo = 0;

console.log(buttons);

// make the input display numbers when buttons are being clicked

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case 'C':
                display.innerText = '';
            break;

            case '←':
                if(display.innerText){
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
            
            case '=':
                display.innerText = eval(display.innerText);
                break;

            default:
                display.innerText += e.target.innerText;
        }
    })
});



