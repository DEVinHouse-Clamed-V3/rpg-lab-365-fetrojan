import Arma from "./classes/Arma";
import Personagem from "./classes/Personagem";
import Inimigo from "./classes/Inimigo";
import Boss from "./classes/Boss";

const espada = new Arma('Espada Longa', 'Uma espada longa e afiada', 40)
const arco = new Arma('Arco e Flecha', 'Um arco e flecha de madeira', 30)
const machado = new Arma('Machado', 'Um machado gigante de batalha', 50)


const meuPersonagem = new Personagem('Felipe', 200, 15)

const esqueleto = new Inimigo('Esqueleto', 50, 8)
const goblin = new Inimigo('Goblin', 30, 5)
const orc = new Inimigo('Orc', 80, 12)
const mago= new Inimigo('Mago', 40, 10)
const dragao = new Boss('Dragão', 200, 20)

esqueleto.atacar(meuPersonagem)
console.log(meuPersonagem.getVida())
console.log(dragao)
dragao.atacar(meuPersonagem)
dragao.atacar(meuPersonagem)
console.log(meuPersonagem.getVida())