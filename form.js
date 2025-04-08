
//class contato

class contato {

    constructor(nome,  email, cpf, sobrenome,telefone,contato){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.sobrenome = sobrenome
        this.telefone = telefone 
        this.contato = contato
    
    }
    
}

function Post(form) {

  let data = new contato(form.elements.namedItem("nome").value,
            form.elements.namedItem("email").value, 
            form.elements.namedItem("cpf").value,
            form.elements.namedItem("sobrenome").value,
            form.elements.namedItem("telefone").value, 
            form.elements.namedItem("contato").value);
          

            
            console.log(data)
            form.reset();
}


function controlarBotao() {
  
    const checkbox = document.getElementById('termoAceito') 
    const botao = document.getElementById('botao');

    botao.disabled = !checkbox.checked;

    if (termoAceito.checked) {
        botao.disabled = false; 
        botao.classList.add("enabled"); 
    } else {
        botao.disabled = true; 
        botao.classList.remove("enabled"); 
    }
}


