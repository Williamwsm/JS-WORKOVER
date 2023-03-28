const pessoa = {
  nome:nome,
  sobrenome:sobrenome,
  idade:idade,
  alterarNome: function(nome,sobrenome,idade){
    return this.nome = nome ,this.sobrenome = sobrenome, this.idade = idade;
  }
};

console.log(pessoa.alterarNome('jhonatan','isaias',21));
console.log(pessoa.nome);