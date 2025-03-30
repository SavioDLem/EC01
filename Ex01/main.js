

let alunos = [];

function editaraluno(index){

    let dados = alunos[index];

    document.getElementById("nome").value = dados[0];
    document.getElementById("idade").value = dados[1];
    document.getElementById("curso").value = dados[2];
    document.getElementById("notaFinal").value = dados[3];

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

    alunos.push([nome, idade, curso, notaFinal]);

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

        let dados = alunos[index];

        tabela_html += "<td>" + dados[0] + "</td>";
        tabela_html += `<td>${dados[1]}</td>`;
        tabela_html += "<td>" + dados[2] + "</td>";
        tabela_html += `<td>${dados[3]}</td>`;
        tabela_html += `<th scope='row'><button onclick=editaraluno(${index})>Editar</button></th>`;
        tabela_html += `<th scope='row'><button onclick=excluiraluno(${index})>Excluir</button></th></tr>`;

    }
    tabela_html += "</tbody></table>";

    document.getElementById("tabela_alunos").innerHTML = tabela_html;

}
