


const inp = document.querySelector('.display1')
const out = document.querySelector('.display2')
const numberEl = document.querySelectorAll('.number')
const operationEl = document.querySelectorAll('.operation')
const clearEl = document.querySelector('.clear')
const deletEl = document.querySelector('.delet')
const equalEl = document.querySelector('.equal')


let input = '';
let output = '';
let haveDot = false;
let operationClicked = false;

numberEl.forEach(number => {
    number.addEventListener('click',(e) => {
      if(e.target.textContent === '.'){
          if(!haveDot){
            haveDot = true;
          } else if(haveDot){
              return;
          }
          
      }
      input += e.target.textContent;
      inp.textContent = input
      operationClicked = false
    })
});

operationEl.forEach(operation => {
    operation.addEventListener('click', (e) => {
        if(!input) return;
        if(operationClicked) {
            input = input.substring(input.length - 1, e.target.textContent)
        }
        haveDot = false;

        input += e.target.textContent
        inp.textContent = input
        operationClicked = true;
    })
})

function mathOperation(){
    output = eval(input.replace(/÷/g, '/').replace(/x/g, '*'));
}

equalEl.addEventListener('click',(e) => {
    if(!input) return;
    haveDot = false;
    mathOperation();
     input = '';
    // inp.textContent = ''
    out.textContent = output;
    operationClicked = false;
})





clearEl.addEventListener('click',(e) => {
    inp.textContent = '';
    out.textContent = '';
    input = '';
    output = '';
    result = '';
    operationClicked = false
    haveDot = false
});

deletEl.addEventListener('click',(e) => {
   let arr = input.split('');
   console.log(arr)
   let lastItem = arr.pop();
   input = arr.join('');
   inp.textContent = input;
   if(lastItem === '.'){
    haveDot = false;
   }
    if(lastItem - 1 === 'x' || lastItem - 1  === '+' || lastItem - 1  === '-' || lastItem - 1 === '÷'){}
   operationClicked = true;
   
})

