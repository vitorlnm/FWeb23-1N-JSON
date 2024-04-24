const readlineSync = require('readline-sync');

// Lendo o arquivo JSON de alunos e cursos
const data = fs.readFileSync('alunos_cursos.json', 'utf8');
const alunosCursos = JSON.parse(data);

for (let curso in alunosCursos) {
    console.log(curso + ":");
    alunosCursos[curso].forEach(aluno => {
        console.log("- " + aluno);
    });
}