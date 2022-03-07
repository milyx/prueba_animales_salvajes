import Animal from "./Animal.js";


export default class Leon extends Animal {

    constructor(nombre, imagen, sonido) {
        super(nombre, imagen, sonido);
    }
    rugir(){
        console.log("rugir rrrr");
    }

}
