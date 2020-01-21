const usuarios = [
  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
  { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
 ];

 //2.1
 const idades = usuarios.map(usuario => usuario.idade);
 console.log(idades);

//2.2
const rocketSeaters = usuarios.filter(usuario => {
  return usuario.empresa === 'Rocketseat' && usuario.idade > 18;
});
console.log(rocketSeaters);

//2.3
const googles = usuarios.find(usuario => {
  return usuario.empresa === 'Google';
});
console.log(googles);

//2.4
usuarios.map(usuario => usuario.idade = usuario.idade * 2);
const result = usuarios.filter(usuario => usuario.idade <= 50);
console.log(result);