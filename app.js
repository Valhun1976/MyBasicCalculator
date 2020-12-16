const calculator = document.querySelector('.calculator');
const buttons = document.querySelector('.calculator_buttons');

buttons.addEventListener('click', e =>{
	if(e.target.matches('button')){
		console.log('Button click!');
	}
})