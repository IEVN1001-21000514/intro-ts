import { CalcularAreas } from "./09-calcularAreas";


class CalcularVolumen extends CalcularAreas{
    protected volumen:number;
    protected ancho:number;
    protected alturaCilindro:number;

    constructor(base:number, altura:number, lado:number, radio:number, area:number, volumen:number, ancho:number, alturaCilindro:number){
        super(base,altura,lado,radio,area)
        this.volumen = volumen;
        this.ancho = ancho;
        this.alturaCilindro = alturaCilindro;
    }

    imprimirmedidas2(){
        console.log(" Ancho Rectangulo = "+this.ancho);
        console.log(" Lado Cuadrado = "+ this.lado);
        console.log(" Altura Cilindro = "+ this.alturaCilindro);
    }

    VolumenRect(){
        this.AreaRect();
        this.volumen = this.area * this.ancho;
        console.log(`El volumen del Rectangulo es: ${this.volumen}`)
    }

    VolumenCuadrado(){
        this.AreaCuadrado();
        this.volumen = this.area * this.lado;
        console.log(`El volumen del Cubo es: ${this.volumen}`)
    }

    VolumenCirculo(){
        this.AreaCirculo();
        this.volumen = this.area * this.alturaCilindro;
        console.log(`El volumen del Cilindro es: ${this.volumen}`)
    }

}


const volumen = new CalcularVolumen (10,5,10,10,0,0,10,5)

volumen.imprimirMedidas();
volumen.imprimirmedidas2();
volumen.VolumenRect();
volumen.VolumenCuadrado();
volumen.VolumenCirculo();