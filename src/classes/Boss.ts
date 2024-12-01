import Inimigo from "./Inimigo";
import Personagem from "./Personagem";

export default class Boss extends Inimigo {

    atacar(personagem: Personagem){
        const chanceDeAcerto = Math.random()
        if(chanceDeAcerto < 0.3) {
            console.log("Ataque falhou")
        } else {
            personagem.receberDano(this.causarDano()*2)
        }
    }

    sobrevida(){
        if(this.getVida() <= 0){
            const chanceRessurgir = Math.random()
            if(chanceRessurgir < 0.3) {
                this.setVida(20)
                console.log('Boss ressurgiu com 20 de vida')
            }
        }
    }

}