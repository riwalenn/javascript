class Chiens {
    constructor(nom) {
        this.nom = nom;
    }

    aboyer() {
        console.log(this.nom + " aboie");
    }

    faireUnCalin(autreChien) {
        console.log(this.nom + " fait un câlin à " + autreChien.nom);
    }

    static direDesGeneralites() {
        console.log("tous les chiens sont gentils");
    }
}

class Teckel extends Chiens {
    aboyer() {
        super.aboyer();
        console.log(this.nom + " miaule");
    }

    seMettreSurLeDos() {
        console.log(this.nom + " se met sur le dos");
    }
}

let joy = new Teckel("Joy");
joy.aboyer();
let milou = new Chiens("Milou");
milou.aboyer();
joy.faireUnCalin(milou);
joy.seMettreSurLeDos();
Chiens.direDesGeneralites();