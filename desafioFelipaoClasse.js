class heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
      switch (this.tipo) {
        case "mago":
          ataque = "magia";
          break;
        case "guerreiro":
          ataque = "espada";
          break;
        case "monge":
          ataque = "artes marciais";
          break;
        case "ninja":
          ataque = "shuriken";
          break;
        default:
          ataque = "ataque desconhecido";
      }
      console.log(`O ${this.tipo} atacou usando ${ataque}.`);
    }
  }
  
  const heroFinal = new heroi("Shiryu", 29, "ninja");// O ninja atacou usando Shuriken.
  heroFinal.atacar(); 
  
  