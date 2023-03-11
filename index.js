// nome, força, idade, poder, sexo, equipamento, cor da pele, estilo cabelo
class heroi{
  //atributos sao caracteristicas comuns
  nome;
  forca;
  idade;
  poder;
  sexo;
  equipamento;
  cor_da_pele;
  estilo_cabelo;

  constructor(nome, forca, idade, poder, sexo, equipamento, cor_da_pele, estilo_cabelo){
    this.nome = nome;
    this.forca = forca;
    this.idade = idade;
    this.poder = poder;
    this.sexo = sexo;
    this.equipamento = equipamento;
    this.cor_da_pele = cor_da_pele;
    this.estilo_cabelo = estilo_cabelo;
  }

  //função - método
  soltarPoder = function(tipo_do_poder){
    console.log("Poder é: " + tipo_do_poder);
  }
  apresentarHeroi = function(){
    //Apresentação
    console.log(this.nome);
console.log(this.forca);
console.log(this.idade);
console.log(this.poder);
console.log(this.sexo);
console.log(this.equipamento);
console.log(this.cor_da_pele);
console.log(this.estilo_cabelo);
  }
};

gaviao_negro = new heroi("Gavião Negro", 100, 35, "Ataque com a clave", "M", "Clave", "Moreno", "Normal");
gaviao_negro.apresentarHeroi();

adao_negro = new heroi("Adão Negro", 200, 1500, "Ataque com Raio", "M", "Raio", "Moreno", "Careca");
adao_negro.apresentarHeroi();

