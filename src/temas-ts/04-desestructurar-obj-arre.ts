interface Reproductor{
    volumen:number;
    segundo:number;
    cancion:string;
    detalles:Detalles;
}

interface Detalles{
    autor:string;
    year:number;
}

const reproductor:Reproductor={
    volumen:50,
    segundo:30,
    cancion:"La vida es un sueno",
    detalles:{
        autor:"Fernando de Rojas",
        year:1500
    }
}

//Desectruturacion para acceder a las propiedades mas rapidamente

const{volumen, segundo, cancion, detalles}=reproductor;

const{autor, year}=detalles;


console.log(`El volumen actual es: ${volumen}`)
console.log(`El segundo actual es: ${segundo}`)
console.log(`La cancion actual es: ${cancion}`)
console.log(`El autor es: ${autor}`)
console.log(`El año es: ${year}`)

const dbz:string[]=['Goku','Majinbu','Babidi','Freezer']

//No desectructurado
console.log(`Personaje 1: ${dbz[0]}`)
console.log(`Personaje 2: ${dbz[1]}`)
console.log(`Personaje 3: ${dbz[2]}`)
console.log(`Personaje 4: ${dbz[3]}`)



//Desestructurado
const[a,,b,c]=dbz;

console.log(`Personaje 1:${a}`)
console.log(`Personaje 2:${b}`)
console.log(`Personaje 3:${c}`)
