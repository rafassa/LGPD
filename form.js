
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
            form.elements.namedItem("contato").value,);
          

            
            
            form.reset();
}

