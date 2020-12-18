const calculator = document.querySelector('.calculator');
const buttons = document.querySelector('.calculator_buttons');
const displayScreen = document.querySelector('.calculator_display');


buttons.addEventListener('click', e =>{
	if(e.target.matches('button')){
		const btn = e.target;
		const action = btn.dataset.action;
		const btnContent = btn.textContent;
		const displayedNum = displayScreen.textContent;
		/*var operatorType = '';
		var firstNum = '';*/
		var secondNum = '';
		const previousBtnType = calculator.dataset.previousBtnType;
		
		if(!action){
			if(displayedNum === '0'){
				displayScreen.textContent = btnContent;
			}
			else{
				displayScreen.textContent = displayedNum + btnContent;
			}
		}
		
		if(action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide'){
			
			
			
			//button.classList.add();
			calculator.dataset.previousBtnType = 'operator';
			
			calculator.dataset.firstNum = displayedNum;
			calculator.dataset.operator = action;
			
			displayScreen.textContent = '0';
			/*displayScreen.textContent = displayedNum + btnContent;*/
		}
		
		if(action === 'decimal'){
			
			displayScreen.textContent = displayedNum + '.';
		}
		
		if(action === 'clear'){
			
			displayScreen.textContent = '0';
			firstNum = '';
			operatorType = '';
			secondNum = '';
		}
		
		if(action === 'calculate'){
			
			const firstNum = calculator.dataset.firstNum;
			console.log(firstNum);
			const operatorType = calculator.dataset.operator;
			console.log(operatorType);
			const secondNum = displayedNum;
			console.log(secondNum);
			
			displayScreen.textContent = calculate(firstNum, operatorType, secondNum);
			
		}
	}
})

	const calculate = (num1, operator, num2) =>{	
		let result = '';
		
		/*console.log(num1);
		console.log(operator);
		console.log(num2);*/
			
		if(operator === 'add'){
			result = parseFloat(num1) + parseFloat(num2);
		}
		else if(operator === 'subtract'){
			result = parseFloat(num1) - parseFloat(num2);
		}
		else if(operator === 'multiply'){
			result = parseFloat(num1) * parseFloat(num2);
		}
		else if(operator === 'divide'){
			result = parseFloat(num1) / parseFloat(num2);
		}
			
		return result;
	}
