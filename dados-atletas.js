//criando parametros do constructor 
class Atleta{constructor(nome,idade, peso, altura, notas,){
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    this.altura = altura;
    this.notas = notas;
}

//para calcular a categoria
calculaCategoria(){
    if(this.idade >= 9 && this.idade <= 11){return "Infantil"};

    if(this.idade >= 12 && this.idade <= 13){return "Juvenil"};

    if(this.idade >= 14 && this.idade <= 15){return "Intermediário"};

    if(this.idade >= 16 && this.idade <= 30){return "Adulto"};

    if(this.idade > 30 && this.idade < 9){return "Sem categoia"};
}

//calculo de imc
calculaIMC() {
    return this.peso / (this.altura * this.altura);
  }

//calcula a media valida
calculaMediaValida() {
    let soma = 0;
    let quantidade = 0;
    for (let nota of this.notas) {
      if (nota >= 0 && nota <= 10) {
        soma += nota;
        quantidade++;
      }
    }
    if (quantidade === 0) {
      return null;
    } else {
      return soma / quantidade;
    }
  }

// construindo os metodos das classe
  obtemNomeAtleta() {
    return this.nome;
  }

  obtemIdadeAtleta() {
    return this.idade;
  }

  obtemPesoAtleta() {
    return this.peso;
  }

  obtemNotasAtleta() {
    return this.notas;
  }

  obtemCategoria() {
    return this.calculaCategoria();
  }

  obtemIMC() {
    return this.calculaIMC();
  }

  obtemMediaValida() {
    return this.calculaMediaValida();
  }
}

// dados disponibilizados pelo desafio 
// Cria um objeto atleta
const atleta = new Atleta("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]);


console.log(`nome:${atleta.obtemNomeAtleta()}`);
console.log(`idade:${atleta.obtemIdadeAtleta()}`);
console.log(`peso:${atleta.obtemPesoAtleta()}`);
console.log(`notas:${atleta.obtemNotasAtleta()}`);
console.log(`categorias:${atleta.calculaCategoria()}`);
console.log(`imc:${atleta.calculaIMC()}`);
console.log(`media:${atleta.calculaMediaValida()}`);