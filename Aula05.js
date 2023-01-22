const mapa = new Map ([
    [0, 'Progamador'],
    [1, 'a'],
    [2, 'Bordo']
]);
const obj = {};
mapa.set('3', 'wesley isaias');
mapa.set(true, 'React');
mapa.set({}, 'vazio');
mapa.set(obj, 'Objeto vazio')
/*
console.log(mapa.get(0));  // .get é o metedo utilizado para acessar os valores em new Map
console.log(mapa.get(true));
console.log(mapa.get({})); // undefined porque eles são alocados em locais diferentes na memória. São diferentes.
console.log(mapa.get(obj)); // passagem por referencia para objetos ou funções
console.log(mapa.size);  //size -> Vai mostrar quantos elementos possuem ( o tamanho)*/
/*outros metodos
has-delete-clear-forEach-keys-values-entries*/

mapa.forEach(function(value,key){
   // console.log(value);
})

for (let m of mapa){
    console.log(m);
}

