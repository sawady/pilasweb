/// <reference path="actor.ts"/>

class Aceituna extends Actor {

  constructor() {
    var imagen = pilas.imagenes.cargar("aceituna.png");
    super(0, 0, imagen);
  }

}
