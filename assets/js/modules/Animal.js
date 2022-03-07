export default class Animal {
    constructor(nombre,imagen, sonido) {
      this._nombre = () => nombre;
      this._imagen    = () => imagen;
      this._sonido = () => sonido;
      this._edad    = () => null;
      this._comentarios = () => null

    }
    get nombre() {
      return this._nombre();
    }
    get imagen() {
        return this._imagen();
    }
    get sonido() {
        return this._sonido();
    }
    get edad() {
        return this._edad();
    }
    get comentarios() {
        return this._comentarios();
    }
    set edad(edad){
        this._edad = () => edad;
    }
    set comentarios(comentarios){
        this._comentarios = () => comentarios
    }
    
  }  