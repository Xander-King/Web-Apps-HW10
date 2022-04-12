var URL="https://api.clearllc.com/api/v2/math/";
//var input_box = $('#calculation');
var expressionData = "";
var resultData = "";
var N1 = "";
var N2 = "";
//inserts the users desired number into the text box of the calc
function UserClickNum(input) {
//	var input_box = $('#calculation');
	var oldinput = $('#calculation').val();
	var newinput = oldinput + input;
	$('#calculation').val(newinput);
//	input_box.value = newinput;
}
//sets the expression type
function UserClickExpression(input) {
	var oldinput = $('#calculation').val();
	N1 = oldinput;
	expressionData = input;
	$('#calculation').val("");
}
//does the chosen operation between N1 and N2 depending on the expressionData
function UserClickEquals() {
	var oldInput = $('#calculation').val();
	N2 = oldInput;

	if(expressionData == "+") {
		add();
	}

	if(expressionData == "-") {
		subtract();
	}

	if(expressionData == "/") {
		divide();
	}

	if(expressionData == "*") {
		multiply();
	}
}
//helper method to clear the input box once a function is completed
function add() {

	a=$.ajax({
		url: URL + 'Add?api_key=bed859b37ac6f1dd59387829a18db84c22ac99c09ee0f5fb99cb708364858818&n1=' + N1 + '&n2=' + N2,
		method: "GET"
	}).done(function(data) {

		var result = data.result;
		$('#calculation').val(result);

	}).fail(function(error) {
		
		var errorMes = error.message;
		$('#calculation').val(errorMes);
		console.log("error",error.message);
	});
}

function subtract() {

        a=$.ajax({
                url: URL + 'Subtract?api_key=bed859b37ac6f1dd59387829a18db84c22ac99c09ee0f5fb99cb708364858818&n1=' + N1 + '&n2=' + N2,
                method: "GET"
        }).done(function(data) {

                var result = data.result;
                $('#calculation').val(result);

        }).fail(function(error) {
                
                var errorMes = error.message;
                $('#calculation').val(errorMes);
                console.log("error",error.message);
        });
}

function multiply() {
	a=$.ajax({
                url: URL + 'Multiply?api_key=bed859b37ac6f1dd59387829a18db84c22ac99c09ee0f5fb99cb708364858818&n1=' + N1 + '&n2=' + N2,
                method: "GET"
        }).done(function(data) {

                var result = data.result;
                $('#calculation').val(result);

        }).fail(function(error) {
                
                var errorMes = error.message;
                $('#calculation').val(errorMes);
                console.log("error",error.message);
        });

}

function divide() {
	a=$.ajax({
                url: URL + 'Divide?api_key=bed859b37ac6f1dd59387829a18db84c22ac99c09ee0f5fb99cb708364858818&n1=' + N1 + '&n2=' + N2,
                method: "GET"
        }).done(function(data) {

                var result = data.result;
                $('#calculation').val(result);

        }).fail(function(error) {
                
                var errorMes = error.message;
                $('#calculation').val(errorMes);
                console.log("error",error.message);
        });

}

function userClear() {
	$('#calculation').val("");
}
