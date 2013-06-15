declare var pilas;
declare var PxLoader;
declare var createjs;

/// <reference path="actores.ts />
/// <reference path="utils.ts />
/// <reference path="fondos.ts />
/// <reference path="imagenes.ts />
/// <reference path="mundo.ts />
/// <reference path="escenas.ts />


class Pilas {
  canvas;     // elemento canvas html.
  opciones;   // dict de opciones iniciales.
  mundo;
  
  fondos;       // acceso a modulo.
  imagenes;     // acceso a modulo.
  actores;      // acceso a modulo.

  iniciar(opciones) {
    this.inicializar_opciones(opciones);
    this.actores = new Actores();
    this.obtener_canvas();

    this.imagenes = new Imagenes(this.onready, this.opciones.data_path);
    this.fondos = new Fondos();
    this.mundo = new Mundo();
    this.mundo.gestor_escenas.cambiar_escena(new Normal());
  }

  escena_actual() {
    return this.mundo.gestor_escenas.escena_actual();
  }

  private inicializar_opciones(opciones) {
    this.opciones = opciones || {};
    this.opciones.ancho = opciones.ancho || 320;
    this.opciones.alto = opciones.alto || 240;
    this.opciones.data_path = opciones.data_path || 'data';
  }

  private obtener_canvas() {
    // TODO: hacer parametrizable el id del canvas.
    this.canvas = document.getElementById('canvas');

    if (! this.canvas)
      throw new Error("No se encuentra el elemento canvas (id=canvas)");
  }

  onready() {
    console.log("pilas cargado - debes escribir este método para ingresar codigo inicial.");
  }

  ejecutar() {
    this.onready();
    var self = this;
    setInterval(function() {self.actualizar()}, 100);
  }

  actualizar() {
    this.mundo.actualizar()
  }
}

//PxLoader();
pilas = new Pilas();