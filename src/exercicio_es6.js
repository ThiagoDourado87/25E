const alunos =[
    {nome:"Thiago", nota:7},
    {nome:"Ana", nota:5},
    {nome:"Rodrigo", nota:8},
    {nome:"Paulo", nota:6},
];

function alunosAprovados(listaDeAlunos){
    return listaDeAlunos.filter(alunos => alunos.nota >=6);
}

const ArrayAlunosAprovados = alunosAprovados(alunos);

console.log(ArrayAlunosAprovados)