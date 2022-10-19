let form = document.forms.ter;
	let text1 = form.elements.text1;
	let button = form.elements.button;
	let multiline = form.elements.multiline;
	let reset = form.elements.stopIT;
//1

	button.onclick = function(){
	
	
	text1.value = "текстовое поле"; 
	
//2

	if(text1.style.color === 'yellow'){
		text1.style.color = 'red';
	}
    else{
		text1.style.color = 'yellow'; }
	}   
//3

	reset.onclick = function(){
		let textToCom = prompt("ентер стринг то компаре","");
		let showRes = "";
		let text2rows = multiline.value;
		
		if(textToCom === text2rows){
			showRes = "same line";
			alert(showRes);
		}
		else{
			showRes = "not same line";
			alert(showRes);
		} 	  
	}
//4

	let submitButton = document.getElementById('submit');
	submitButton.addEventListener("dblclick", onSubmitButtonClick);
	let checks = document.querySelectorAll('input[name="check"]');
	let radi = document.querySelectorAll('input[name="radio"]');
	let select = form.elements.names;

	function onSubmitButtonClick() {
    let showRadio = "not picked;";
	let showChecks = "not picked;";
	let showSelect = "not picked;";	
	
	radi.forEach((radio) => {
        if (radio.checked) {
            showRadio = radio.value;
        }
    });
	
	checks.forEach((checkbox) => {
        if (checkbox.checked) {
            showChecks = checkbox.value + ", ";
        }
    });
	
	for (let i = 0; i < select.options.length; i++) {
        let option = select.options[i];
        if (option.selected) {
            showSelect = option.value;
        }
    }  
    	
    multiline.value = "";
	
	multiline.value += "car: " + showRadio + "\n";
	multiline.value += "style: " + showChecks+ "\n";
    multiline.value += "character: " + showSelect;
	
	}
