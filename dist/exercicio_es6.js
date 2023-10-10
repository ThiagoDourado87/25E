"use strict";

var alunos = [{
  nome: "Thiago",
  nota: 7
}, {
  nome: "Ana",
  nota: 5
}, {
  nome: "Rodrigo",
  nota: 8
}, {
  nome: "Paulo",
  nota: 6
}];
function alunosAprovados(listaDeAlunos) {
  return listaDeAlunos.filter(function (alunos) {
    return alunos.nota >= 6;
  });
}
var ArrayAlunosAprovados = alunosAprovados(alunos);
console.log(ArrayAlunosAprovados);