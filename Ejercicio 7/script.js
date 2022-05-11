const preguntas = ["En HTML: ¿Que caracter se utiliza para indicar el fin de una etiqueta?", "¿Cuál es la instrucción usada para devolver un valor en una función de JavaScript?", "En CSS: ¿Cuál selector debo utilizar para hacer referencia a un ID?", "En HTML: ¿Que atributo se utiliza para especificar que un input debe ser completado?" ];
const respuestas = [["/","*","<","!"],["send","value","return","break"],[".","#",":","$"],["important","formvalidate","placeholder","required"]];

function cargarPreguntas(){
    let container = document.getElementById("container");
    let x = 1;

    let formPrincipal = document.createElement("form");
    formPrincipal.setAttribute("onsubmit", "return validarCamposPreguntas()");
    formPrincipal.setAttribute("class", "was-validated");

    for (let j = 0; j < 4; j++) {
        let form = document.createElement("form");
        form.setAttribute("class", "was-validated");
        

        let label = document.createElement("label");
        label.setAttribute("for", "validationTextarea");
        label.setAttribute("class", "form-label");
        label.innerHTML = preguntas[j];
        form.appendChild(label);

        for (let i = 0; i < 4; i++) {
            let div = document.createElement("div");
            div.setAttribute("class", "form-check");

            let input = document.createElement("input");
            input.setAttribute("type", "radio");
            input.setAttribute("class", "form-check-input");
            input.setAttribute("id", "validationFormCheck" + x);
            input.setAttribute("name", "radio-stacked");
            input.setAttribute("required","");
            div.appendChild(input);


            let labelInput = document.createElement("label");
            labelInput.setAttribute("class", "form-check-label");
            labelInput.setAttribute("for", "validationFormCheck" + x);
            labelInput.innerHTML = respuestas[j][i];
            div.appendChild(labelInput);

            if (i == 3) {
                let divInvalidFeedBack = document.createElement("div");
                divInvalidFeedBack.setAttribute("class", "invalid-feedback");
                divInvalidFeedBack.innerHTML = "Falta seleccionar una opción.";
                div.appendChild(divInvalidFeedBack);
            }

            form.appendChild(div);

            x++;
        }

        formPrincipal.appendChild(form);
    }

    let divTextArea = document.createElement("div");
    divTextArea.setAttribute("class", "mb-3");

    let labelTextArea = document.createElement("label");
    labelTextArea.setAttribute("for", "validationTextarea");
    labelTextArea.setAttribute("class", "form-label");
    labelTextArea.innerHTML = "Aclaraciones (Opcional)";
    divTextArea.appendChild(labelTextArea);

    let textArea = document.createElement("textArea");
    textArea.classList.add("form-control");
    textArea.classList.add("is-invalid");
    textArea.setAttribute("id", "validationTextarea");
    textArea.setAttribute("placeholder", "Ingrese un texto.");
    divTextArea.appendChild(textArea);

    formPrincipal.appendChild(divTextArea);

    let divButtonSubmit = document.createElement("div");
    divButtonSubmit.setAttribute("class", "mb-3");

    let buttonSubmit = document.createElement("button");
    buttonSubmit.classList.add("btn");
    buttonSubmit.classList.add("btn-primary");
    buttonSubmit.setAttribute("type", "submit");
    buttonSubmit.setAttribute("id", "buttonSubmit");
    buttonSubmit.setAttribute("enabled","");
    buttonSubmit.innerHTML = "Confirmar";
    divButtonSubmit.appendChild(buttonSubmit);

    formPrincipal.appendChild(divButtonSubmit);

    container.appendChild(formPrincipal);

}

cargarPreguntas();


function validarCamposPreguntas(){
    let idInput = "validationFormCheck";
    let cont = 0;

    for (let i = 1; i < 17; i++) {

        let inputRadio = document.getElementById(idInput + i)

        if(inputRadio.checked){
            cont++;
        }
    }

    if (cont == 4 ){
        alert('¡Las respuestas se han guardado con éxito!')
        return true;
    } 
    else { 
        alert('¡Faltan respuestas por contestar!')
        return false; 
    }

}