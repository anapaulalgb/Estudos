const notasFinais = [
    {nome: "Ana", nota: 6},
    {nome: "João", nota: 9},
    {nome: "Alice", nota: 5},
    {nome: "Paula", nota: 8}
]

notasFinais.forEach((aluno) => {
    if (aluno.nota >= 6) {
        console.log(`O aluno ${aluno.nome} está aprovado.`)
    } else {
        console.log(`O aluno ${aluno.nome} foi reprovado.`)
    }
}
)