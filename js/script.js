// function isNumber(str){
//     return isNaN(str) === false;
// }




// var equation = [];
// var lastSymbol = undefined;


// var btns = document.querySelectorAll('.button')
// var inp = document.querySelector('.input-operand')
// var out = document.querySelector('.output-operand')
// for(var i = 0; i < btns.length; i++){
//     var btn = btns[i];
//     btn.addEventListener('click',(event) => {
//         var symbol = event.target.textContent;
//         if(symbol === 'C'){
//             equation = [];
//             out.textContent = ''
//         } else if(symbol === '=') {
//             var total = eval(equation.join(' '));
//             out.textContent = total
            
//         }else if(symbol === 'del'){
//             var preSymbol = equation[equation.length - 1];
//             if(preSymbol.length > 1){
//                 equation[equation.length - 1] = preSymbol.slice(0, -1);
//             } else {
//                 equation.splice(equation.length - 1, 1);
//             }

//         } else if(equation.length === 0){
//             if(isNumber(symbol)) {
//                 equation.push(symbol);
//             }
//         } else if(isNumber(symbol)){
//             if(isNumber(lastSymbol) || lastSymbol === '.'){
//                 var preSymbol = equation[equation.length - 1];
//                 equation[equation.length - 1] = preSymbol + '' + symbol;
//             } else {
//                 equation.push(symbol);
//             } 
//         } else if(symbol === '.') {
//             var preSymbol = equation[equation.length - 1];
//             if(!preSymbol.includes('.')) {
//                 equation[equation.length - 1] = preSymbol + '' + symbol;
//             }
//         } else if(!isNumber(symbol)) {
//             if(!isNumber(lastSymbol)) {
//                 equation[equation.length - 1] = symbol;
//             } else {
//                 equation.push(symbol);
//             }
//         }

//         if(symbol !== 'del') {
//             lastSymbol = symbol;

//         }
//         console.log(equation);
//         inp.textContent = equation.join(' ')

//     })
// }


const inp = document.querySelector('.display1')
const out = document.querySelector('.display2')
const buttonEl = document.querySelectorAll('.button')
const operationEl = document.querySelectorAll('.operation')
const clearEl = document.querySelector('.clear')
const deletEl = document.querySelector('.delet')
const equalEl = document.querySelector('.equal')


let input = '';
let output = '';
let haveDot = false;
let lastOperation = '';
let result = null;

buttonEl.forEach(button => {
    button.addEventListener('click',(e) => {
      if(e.target.textContent === '.' && !haveDot){
          haveDot = true;
      }else if(e.target.textContent === '.' && haveDot){
          return; 
      }
      input += e.target.textContent;
      inp.textContent = input
    })
});


// operationEl.forEach(operation => {
//     operation.addEventListener('click', (e) =>{
//         if(!input) return;
//         haveDot = false;
//         const operationName = e.target.textContent
//         if(input && lastOperation){
//             mathOperation()
//         } else{
//             result = parseFloat(output)
//         }
//         console.log(result);
//         clearVar(operationName)
//         lastOperation = operationName;
//     })
// })



// function mathOperation(){
//     if(lastoperation === '%'){
//         result = parseFloat(result) % parseFloat(input)
//     } else if(lastOperation === '+'){
//         result = parseFloat(result) + parseFloat(input)
//     } else if(lastOperation === '-'){
//         result = parseFloat(result) - parseFloat(input)
//     } else if(lastOperation === '*'){
//         result = parseFloat(result) * parseFloat(input)
//     }  else if(lastOperation === '÷'){
//         result = parseFloat(result) / parseFloat(input)
//     }    
// }

// equalEl.addEventListener('click',(e) => {
//     if(!input) return;
//     haveDot = false;
//     mathOperation();
//     out.textContent = result;
//     output = result;
//     input = '';
// })

clearEl.addEventListener('click',(e) => {
    inp.textContent = '';
    out.textContent = '';
    input = '';
    output = '';
    result = '';
});

deletEl.addEventListener('click',(e) => {
    inp = !result
    inp.textContent = result[result.length-1]
})
