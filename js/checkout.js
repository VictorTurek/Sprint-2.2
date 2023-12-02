
// Exercise 6
const formulario = document.getElementById("form");
const inputs = document.querySelectorAll("#form input");

const expresiones = {
	fName: /^[a-zA-Z]{3,}$/,
	fEmail: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
	fAddress: /^[a-zA-Z]{3,}$/,
	fLastN: /^[a-zA-Z]{3,}$/,
	fPassword: /^(?=.*[A-Za-z])(?=.*\d).{3,}$/,
	fPhone: /^[0-9]{3,}$/,
}

const validarFormulario = (e) => {
	switch (e.target.id) {
		case "fName":
			if (expresiones.fName.test(e.target.value)) {
				document.getElementById("fName").classList.add('right');
				document.getElementById("fName").classList.remove("error");
				document.getElementById("errorName").classList.remove("error");
				//console.log("correcto");
			} else {
				document.getElementById("fName").classList.remove('right');
				document.getElementById("fName").classList.add("error");
				document.getElementById("errorName").classList.add("error");
				//console.log("error");
			}
			break;

		case "fEmail":
			if (expresiones.fEmail.test(e.target.value)) {
				document.getElementById("fEmail").classList.add('right');
				document.getElementById("fEmail").classList.remove("error");
				document.getElementById("errorEmail").classList.remove("error");
				//console.log("correcto");
			} else {
				document.getElementById("fEmail").classList.remove('right');
				document.getElementById("fEmail").classList.add("error");
				document.getElementById("errorEmail").classList.add("error");
				//console.log("error");
			}
			break;

		case "fAddress":
			if (expresiones.fAddress.test(e.target.value)) {
				document.getElementById("fAddress").classList.add('right');
				document.getElementById("fAddress").classList.remove("error");
				document.getElementById("errorAddress").classList.remove("error");
				//console.log("correcto");
			} else {
				document.getElementById("fAddress").classList.remove('right');
				document.getElementById("fAddress").classList.add("error");
				document.getElementById("errorAddress").classList.add("error");
				//console.log("error");
			}
			break;

		case "fLastN":
			if (expresiones.fLastN.test(e.target.value)) {
				document.getElementById("fLastN").classList.add('right');
				document.getElementById("fLastN").classList.remove("error");
				document.getElementById("errorLastN").classList.remove("error");
				//console.log("correcto");
			} else {
				document.getElementById("fLastN").classList.remove('right');
				document.getElementById("fLastN").classList.add("error");
				document.getElementById("errorLastN").classList.add("error");
				//console.log("error");
			}
			break;

		case "fPassword":
			if (expresiones.fPassword.test(e.target.value)) {
				document.getElementById("fPassword").classList.add('right');
				document.getElementById("fPassword").classList.remove("error");
				document.getElementById("errorPassword").classList.remove("error");
				//console.log("correcto");
			} else {
				document.getElementById("fPassword").classList.remove('right');
				document.getElementById("fPassword").classList.add("error");
				document.getElementById("errorPassword").classList.add("error");
				//console.log("error");
			}
			break;

		case "fPhone":
			if (expresiones.fPhone.test(e.target.value)) {
				document.getElementById("fPhone").classList.add('right');
				document.getElementById("fPhone").classList.remove("error");
				document.getElementById("errorPhone").classList.remove("error");
				//console.log("correcto");
			} else {
				document.getElementById("fPhone").classList.remove('right');
				document.getElementById("fPhone").classList.add("error");
				document.getElementById("errorPhone").classList.add("error");
				//console.log("error");
			}
			break;

	}
}

inputs.forEach((input) => {
	//input.addEventListener("keyup", validarFormulario); // valida el formulario al levantar una tecla
	input.addEventListener("blur", validarFormulario); // valida el formulario al salir hacer click fuera del campo.
});

formulario.addEventListener("submit", (e) => {
	//e.preventDefault();
});




function validate() {
	var error = 0;
	// Get the input fields
	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");
	var fAddress = document.getElementById("fAddress");
	var fLastN = document.getElementById("fLastN");
	var fPassword = document.getElementById("fPassword");
	var fPhone = document.getElementById("fPhone");

	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");
	var errorAddress = document.getElementById("errorAddress");
	var errorLastN = document.getElementById("errorLastN");
	var errorPassword = document.getElementById("errorPassword");
	var errorPhone = document.getElementById("errorPhone");

	// Validate fields entered by the user: name, phone, password, and email
	if (fName.value == "") {
		error++;
	}

	if (fEmail.value == "") {
		error++;
	}

	if (fAddress.value == "") {
		error++;
	}

	if (fLastN.value == "") {
		error++;
	}

	if (fPassword.value == "") {
		error++;
	}

	if (fPhone.value == "") {
		error++;
	}

	if (error > 0) {
		alert("Error");
	} else {
		alert("OK");
	}

}
