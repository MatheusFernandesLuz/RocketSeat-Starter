//5.1 Rest
const arr = [1, 2, 3, 4, 5, 6];

[x, ...y] = arr;
console.log(x, y);

//function soma...
function soma(...params) {
  return params.reduce((total, next) => total + next);  
}

console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3

//5.2 Spread
const usuario = {
  nome: 'Diego',
  idade: 23,
  endereco: {
  cidade: 'Rio do Sul',
  uf: 'SC',
  pais: 'Brasil',
  }
};

const usuario2 = {...usuario, nome: 'Gabriel'};
const usuario3 = 
console.log(usuario2);