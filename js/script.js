class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }

    clear(){
        this.currentOperandTextElement = ''
        this.previousOperandTextElement = ''
        this.operation = undefined
    }
    delet(){

    }
    appendNumber(number){

    }
    choseOperation(operation){

    }
    compute(){

    }
    updatedisplay(){

    }


}


const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equelButtons = document.querySelector('[data-equal]')
const clearallButtons = document.querySelector('[data-clear-all]')
const deletButtons = document.querySelector('[data-delet]')
const previousOperandTextElement = document.querySelector('[data-previous]')
const currentOperandTextElement = document.querySelector('[data-current]')


const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement), 

numberButtons.forEach(button => {
    button.addEventListener(click, () => {
        calculator.appendNumber()
    }
    
});