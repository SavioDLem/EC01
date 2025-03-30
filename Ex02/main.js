
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

function editaraluno(index){

    let aluno = alunos[index];

    document.getElementById("nome").value = aluno.nome;
    document.getElementById("idade").value = aluno.idade;
    document.getElementById("curso").value = aluno.curso;
    document.getElementById("notaFinal").value = aluno.notaFinal;

    alunos.splice(index, 1);
    
    atualizartabela();

}

function excluiraluno(index){

    alunos.splice(index, 1);
    
    atualizartabela();

}


function adicionaraluno() {
    
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
}

function atualizartabela(){

    let tabela_html = "<table><thead><tr>";
    tabela_html += "<th scope='col'>Nome</th>";
    tabela_html += "<th scope='col'>Idade</th>";
    tabela_html += "<th scope='col'>Curso</th>";
    tabela_html += "<th scope='col'>Nota</th>";
    tabela_html += "</tr></thead><tbody>";

    for (let index = 0; index < alunos.length; index++){

        let aluno = alunos[index];

        tabela_html += "<td>" + aluno.nome + "</td>";
        tabela_html += `<td>${aluno.idade}</td>`;
        tabela_html += "<td>" + aluno.curso + "</td>";
        tabela_html += `<td>${aluno.notaFinal}</td>`;
        tabela_html += `<th scope='row'><button onclick=editaraluno(${index})>Editar</button></th>`;
        tabela_html += `<th scope='row'><button onclick=excluiraluno(${index})>Excluir</button></th></tr>`;

    }
    tabela_html += "</tbody></table>";

    document.getElementById("tabela_alunos").innerHTML = tabela_html;

}
