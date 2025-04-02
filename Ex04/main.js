
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

            alert("Editando aluno");
        
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

function listarAlunosAprovados(){

    let aprovados = alunos.filter(aluno => aluno.isAprovado());

    document.getElementById("relatorio").innerHTML = `<p>Alunos aprovados:</p>${aprovados.map(a => a.toString()).join("<br/>")}`;

}

function mediaNotasFinais(){

    if (alunos.length < 1){

        alert("Não há alunos cadastrados");
        return;
    }

    let media = 0
    media = alunos.map(a => a.notaFinal).reduce((acum, atual) => acum + atual, media) / alunos.length;

    document.getElementById("relatorio").innerHTML = `<p>Média das notas finais</p>${media.toFixed(1)}`;
}

function mediaIdadesAlunos(){

    if (alunos.length < 1){

        alert("Não há alunos cadastrados");
        return;
    }

    let media = 0
    media = alunos.map(a => a.idade).reduce((acum, atual) => acum + atual, media) / alunos.length;

    document.getElementById("relatorio").innerHTML = `<p>Média das idades</p>${media.toFixed(1)}`;

}

function listarAlunosOrdemAlfa(){

    let alunos_ord = alunos.sort((a, b) => a.nome.localeCompare(b.nome));

    document.getElementById("relatorio").innerHTML = `<p>Alunos ordenados em ordem alfabética:</p>${alunos_ord.map(a => a.toString()).join("<br/>")}`;

}

function quantidadeAlunosCursos(){

    let q_JavaScript = 0;
    let q_Python = 0;
    let q_Java = 0;

    alunos.forEach((aluno) => {

        if (aluno.curso == "Java") q_Java++;

        else if (aluno.curso == "Python") q_Python++;

        else q_JavaScript++;

    })

    document.getElementById("relatorio").innerHTML = `<p>Qtd de alunos por curso:</p>`
    document.getElementById("relatorio").innerHTML += `JavaScript: ${q_JavaScript}<br/>`
    document.getElementById("relatorio").innerHTML += `Python: ${q_Python}<br/>`
    document.getElementById("relatorio").innerHTML += `Java: ${q_Java}`

}

