
class Aluno {
    constructor(nome, idade, curso, notaFinal) {
        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
        this.notaFinal = notaFinal;
    }

    isAprovado() {
        return this.notaFinal >= 7;
    }

    toString() {
        return `${this.nome}, ${this.idade} anos, Curso: ${this.curso}, Nota Final: ${this.notaFinal}`;
    }
}

let alunos = [];


document.getElementById("Aluno Form").addEventListener("submit", (event) => {
    
    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let idade = parseInt(document.getElementById("idade").value);
    let curso = document.getElementById("curso").value;
    let notaFinal = parseInt(document.getElementById("notaFinal").value);

    if (!nome || isNaN(idade) || isNaN(notaFinal) || idade < 1 || notaFinal < 0){
        alert("Preencha todos os campos corretamente!");
        return;
    }

    let aluno = new Aluno(nome, idade, curso, notaFinal);

    alunos.push(aluno);

    atualizartabela();
    document.getElementById("Aluno Form").reset();

    alert("Aluno adicionado");
})

function atualizartabela(){

    let tabela = document.querySelector("#tabelaAlunos tbody");
    tabela.innerHTML = "";

    for (let index = 0; index < alunos.length; index++){

        let aluno = alunos[index];

        let linha = tabela.insertRow();

        linha.insertCell(0).textContent = aluno.nome;
        linha.insertCell(1).textContent = aluno.idade;
        linha.insertCell(2).textContent = aluno.curso;
        linha.insertCell(3).textContent = aluno.notaFinal;

        let acoes = linha.insertCell(4);
        let botaoEditar = document.createElement("button");
        botaoEditar.textContent = "Editar";
        botaoEditar.type = "button";
        botaoEditar.onclick = (function () {
        
            document.getElementById("nome").value = aluno.nome;
            document.getElementById("idade").value = aluno.idade;
            document.getElementById("curso").value = aluno.curso;
            document.getElementById("notaFinal").value = aluno.notaFinal;
        
            alunos.splice(index, 1);
            
            atualizartabela();

            alert("Aluno editado");
        
        })
        acoes.appendChild(botaoEditar);

        let botaoExcluir = document.createElement("button");
        botaoExcluir.textContent = "Excluir";
        botaoExcluir.type = "button";
        botaoExcluir.onclick = (function () {

            alunos.splice(index, 1);
            
            atualizartabela();

            alert("Aluno excluido");
        
        })
        acoes.appendChild(botaoExcluir);   
    }
}
