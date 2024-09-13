import { CalcularAreas } from "./09-calcularAreas";


class CalcularVolumen extends CalcularAreas{
    protected volumen:number;

    constructor(base:number, altura:number, lado:number, radio:number, area:number, volumen:number){
        super(base,altura,lado,radio,area)
        this.volumen = volumen;
    }

    imprimirAreas(){
        console.log(" Area Rectangulo = "+ this.AreaRect());
        console.log(" Area Cuadrado =  "+ this.AreaCuadrado());
        console.log(" Area Circulo =  "+ this.AreaCirculo());
    }

    VolumenRect(){
        this.volumen = this.area;
        console.log(`El volumen del Rectangulo es: ${this.area}`)
    }

    VolumenCuadrado(){
        this.volumen = this.lado * this.lado;
        console.log(`El area del Rectangulo es: ${this.area}`)
    }

    VolumenCirculo(){
        this.volumen = 3.1416 * (this.radio * this.radio);
        console.log(`El area del Rectangulo es: ${this.area}`)
    }

}

const calcular = new CalcularAreas (10,10,10,10,0)
calcular.imprimirMedidas();
calcular.AreaRect();
calcular.AreaCuadrado();
calcular.AreaCirculo();