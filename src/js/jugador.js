/* El objeto jugador es un objeto literal que se encuentra incompleto.
 Solo tiene asignadas algunas de sus propiedades y ningun metodo */
var Jugador = function() {
  /* el sprite contiene la ruta de la imagen
  */
  this.sprite = 'imagenes/auto_rojo_abajo.png';
  this.x = 130;
  this.y = 160;
  this.ancho = 15;
  this.alto = 30;
  this.velocidad = 10;
  this.vidas = 5;
  // Hay que agregar lo que falte al jugador: movimientos, perdida de vidas,
  // y todo lo que haga falta para que cumpla con sus responsabilidades
};

Jugador.prototype.mover = function(movX, movY, sprite, ancho, alto) {
  this.x = movX + this.x;
  this.y = movY + this.y;
  this.sprite = sprite;
  this.ancho = ancho;
  this.alto = alto;
};

Jugador.prototype.perderVidas = function perderVidasFn(cantVidas) {
  this.vidas = this.vidas - cantVidas;
};

var Personaje = new Jugador();
