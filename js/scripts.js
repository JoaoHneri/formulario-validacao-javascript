const handlePhone = (event) => {
    let input = event.target
    input.value = phoneMask(input.value)
  }
  
  const phoneMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value
  }

  

const form = document.querySelector("#form")
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const telInput = document.querySelector("#telefone")
const trabSelect = document.querySelector("#trab")
const mensagemTextarea = document.querySelector("#mensagem")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if(nameInput.value === ""){
        Swal.fire({
            icon: 'info',
            title: 'Oops...',
            text: 'Porfavor, escreva seu nome'
          })
        return;
    }

    if(emailInput.value === "" || !validarEmail(emailInput.value)){
        Swal.fire({
          icon: 'info',
          title: 'Oops...',
          text: 'Porfavor, preencha seu email'
        })
      return;
    }

    if(telInput.value === ""){
        Swal.fire({
          icon: 'info',
          title: 'Oops...',
          text: 'Porfavor, preencha seu telefone'
        })
      return;
    }

    if(trabSelect.value === ""){
      Swal.fire({
        icon: 'info',
        title: 'Oops...',
        text: 'Porfavor, informe a sua situação'
      })
    return;
    }

    if(mensagemTextarea.value === ""){
      Swal.fire({
        icon: 'info',
        title: 'Oops...',
        text: 'Porfavor, preencha o campo Mensagem'
      })
    return;
    }
      form.submit();
})

function validarEmail(email){
    const emailRegex = new RegExp(
        // usuario12@host.com.br
        /^[a-zA=Z0-0._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if(emailRegex.test(email)){
        return true;
    }
    return false;
}

let campo_celular = document.querySelector('#telefone');

campo_celular.addEventListener("blur", function(e) {
   //Remove tudo o que não é dígito
   let celular = this.value.replace( /\D/g , "");

   if (celular.length==11){
    celular = celular.replace(/^(\d{2})(\d)/g,"($1) $2"); 
    resultado_celular = celular.replace(/(\d)(\d{4})$/,"$1-$2");
    document.getElementById('campo_celular').value = resultado_celular;
  } else {
    alert("Digite 11 números.");
  }
})