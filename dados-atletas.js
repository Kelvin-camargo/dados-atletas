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


}



