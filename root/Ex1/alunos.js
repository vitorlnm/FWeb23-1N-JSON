const fs = require('fs');

// Lendo o arquivo JSON de alunos e cursos
const data = fs.readFileSync('alunos_cursos.json', 'utf8');
const alunosCursos = JSON.parse(data);

for (let curso in alunosCursos) {
    console.log(curso + ":");
    alunosCursos[curso].forEach(aluno => {
        console.log("- Nome: " + aluno.nome);
        console.log("  Idade: " + aluno.idade);
        console.log("  CPF: " + aluno.cpf);
        console.log("  Telefone: " + aluno.telefone + "\n");
    });
    console.log();
}