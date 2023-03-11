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

  constructor(){
    
  }

  //função - método
  soltarPoder = function(tipo_do_poder){
    console.log("Poder é: " + tipo_do_poder);
  }
}

gaviao_negro = new heroi();
gaviao_negro['nome'] = "Gavião Negro";
gaviao_negro['forca'] = 100;
gaviao_negro['idade'] = 35;
gaviao_negro['poder'] = "Atacar com a Clave",
gaviao_negro['sexo'] = 'm';
gaviao_negro['equipamento'] = "Clave";
gaviao_negro['cor_da_pele'] = "morena";
gaviao_negro['estilo_cabelo'] = "normal";

atomo = new heroi();
atomo['nome'] = "Atomo";
atomo['forca'] = 70;
atomo['idade'] = 30;
atomo['poder'] = "Diminui e aumenta de tamanho",
atomo['sexo'] = 'm';
atomo['equipamento'] = "";
atomo['cor_da_pele'] = "branca";
atomo['estilo_cabelo'] = "normal";
console.log(gaviao_negro.nome);
console.log(gaviao_negro.forca);
console.log(gaviao_negro.idade);
console.log(gaviao_negro.poder);
console.log(gaviao_negro.sexo);
console.log(gaviao_negro.equipamento);
console.log(gaviao_negro.cor_da_pele);
console.log(gaviao_negro.estilo_cabelo);
