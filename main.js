// Classe abstrata
class Animal {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    fazerBarulho() {
        console.log("O animal faz um som.");
    }
}

  // Classes filhas
    class Cachorro extends Animal {
    constructor(nome, idade, raca) {
        super(nome, idade);
        this.raca = raca;
    }

    fazerBarulho() {
        console.log("O cachorro late.");
    }
}

    class Gato extends Animal {
    constructor(nome, idade, cor) {
        super(nome, idade);
        this.cor = cor;
    }

    fazerBarulho() {
        console.log("O gato mia.");
    }
}

  // Criando instâncias de objetos
const cachorro1 = new Cachorro("Rex", 3, "Labrador");
const gato1 = new Gato("Whiskers", 2, "Cinza");
const cachorro2 = new Cachorro("Buddy", 5, "Bulldog");

  // Testando os objetos =D
console.log(cachorro1);
cachorro1.fazerBarulho();

console.log(gato1);
gato1.fazerBarulho();

console.log(cachorro2);
cachorro2.fazerBarulho();
