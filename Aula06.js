let obj = {id: '123'};
const obj2 = {};

//weakMap -> Recebe Objetos. Não recebe strings. Serve como caixa preta.

const wMapa = new WeakMap;

wMapa.set (obj, 'valor1');
wMapa.set (obj2, 'valor2');

console.log(wMapa.get(obj));
console.log(wMapa.get(obj2));