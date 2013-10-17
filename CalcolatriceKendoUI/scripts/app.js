var app = new kendo.mobile.Application(document.body);


/* variabili globali per la gestione della calcolatrice */
var onOperand1 = true;
var isOn = false; 
var operand1 = "";
var operand2 = "";
var operator = "";

function startCalc(){
	onOperand1 = true;
	isOn = true; 
	operand1 = "";
	operand2 = "";
	operator = "";
}

function clickButton(e){
	var param = e.button.data();

	if (param.number == 'c') {
		startCalc();
		$('#display').val("0");
        return;
    }
    else if (isOn == true){
        switch(param.number){
            case '+' : case '-': case '*': case '/': operator = param.number; onOperand1 = false;break;
            case '=' : risultato();return;
            case 'c' : startCalc(); $('#display').val("0");return;
            default : onOperand1 == true? operand1 = operand1 + param.number: operand2=operand2 + param.number;break;
        }
        $('#display').val(operand1 + " " + operator + " " + operand2);
    }
}

function risultato(){
	var num1 = parseFloat(operand1);
    var num2 = parseFloat(operand2);
    var res = 0;

    switch (operator){
        case '+': res = num1 + num2; break;
        case '-': res = num1 - num2; break;
        case '*': res = num1 * num2; break;
        case '/': res = num1 / num2; break;
    }
    $('#display').val(res.toString());
    startCalc();
}

