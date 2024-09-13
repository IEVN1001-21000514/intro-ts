export class CalcularAreas{
    protected base:number;
    protected altura:number;
    protected lado:number;
    protected radio:number;
    protected area:number;

    constructor(base:number, altura:number, lado:number, radio:number, area:number){
        this.base = base;
        this.altura = altura;
        this.lado = lado;
        this.radio = radio;
        this.area = area;
    }

    imprimirMedidas(){
        console.log(" Rectangulo = Base: "+ this.base + " Altura: "+ this.altura);
        console.log(" Cuadrado = Lado: "+ this.lado);
        console.log(" Circulo = Radio: "+ this.lado);
    }

    AreaRect(){
        this.area = this.base * this.altura;
        console.log(`El area del Rectangulo es: ${this.area}`)
    }

    AreaCuadrado(){
        this.area = this.lado * this.lado;
        console.log(`El area del Rectangulo es: ${this.area}`)
    }

    AreaCirculo(){
        this.area = 3.1416 * (this.radio * this.radio);
        console.log(`El area del Rectangulo es: ${this.area}`)
    }

}

const calcular = new CalcularAreas (10,10,10,10,0)
calcular.imprimirMedidas();
calcular.AreaRect();
calcular.AreaCuadrado();
calcular.AreaCirculo();