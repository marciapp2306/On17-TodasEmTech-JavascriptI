/* const listagemDeFrutas = ["Uva", "Banana", "Manga", "Cajá", "Pinha", "Maçã", "Melão"];

console.log(listagemDeFrutas.length);

const descricaoItem = {
    cor: "azul",
    idade: 2,
    vivo: true,
    preco: myFunction(),
}; */

/* const sobrinhosDaVivian = [
    {
        name: "Beyoncé",
        idade: 2,
        castrado: true,
        cor: ['amarelo', 'branco', 'marrom', 'dourado'],
        'caracteristicas-especiais': ['brincalhão', 'dengoso']
    },
    {
        name: "Iza",
        idade: 2,
        castrado: true,
        cor: ['branco', 'preto'],
        'caracteristicas-especiais': ['fofinha', 'graciosa']
    }
]

console.log(sobrinhosDaVivian[1]['caracteristicas-especiais']);
console.log(sobrinhosDaVivian[1].castrado); */


const listagemDeFrutas = ["Uva", "Banana", "Manga", "Cajá", "Pinha", "Maçã", "Melão"];

for(let fruta = 0; fruta < listagemDeFrutas.length; fruta++) {
   console.log(`A minha fruta é ${listagemDeFrutas[fruta]}`);
}

const usuarios = [
    {user: 234, name: 'Marcia', idade: 40 },
    {user: 235, name: 'Lorena', idade: 20 },
    {user: 236, name: 'Patricia', idade: 24 },
    {user: 237, name: 'Mariana', idade: 15 },
    {user: 238, name: 'Isis', idade: 34 },
    {user: 239, name: 'Pietra', idade: 23 }
]

for(let contador = 0; contador < usuarios.length; contador++) {
    if (usuarios[contador].user === 235) {
        console.log(usuarios[contador].name);
    } else {
        console.log(usuarios[contador].name, usuarios[contador].idade)
    }
}

