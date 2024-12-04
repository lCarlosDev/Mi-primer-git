let animales=["perro", "gato", "loro", "vaca"]
let numero= parseInt(prompt("Digite un número del 1 al 4 para conocer qué animal está en esa ubicación"));
console.log(animales[numero-1])

for(let i=0; i<=animales.length-1; i++) {
    console.log(animales[i])
}