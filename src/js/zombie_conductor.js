/* Para insipirarte para la implementacion del ZombieConductor podes usar
al ZombieCaminante de ejemplo. Tene en cuenta que tendra algunas diferencias.
Por ejemplo, la cantidad parametros que recibe su constructor. En ZombieConductor
no son exactamente los mismos parametros que en el objeto Enemigo, a diferencia
del ZombieCaminante que eran los mismos. */

var ZombieConductor = function(
  sprite,
  x,
  y,
  ancho,
  alto,
  velocidad,
  rangoMov,
  /*, parametro/s extra de ZombieConductor*/
  dirección
) {
  /* Completar constructor a partir de Enemigo */
  Enemigo.call(this, sprite, x, y, ancho, alto, velocidad, rangoMov, dirección);
  /* No olvidar agregar la/s propiedad/es unicas de ZombieConductor necesarias */
};

/* Completar creacion del ZombieConductor */
ZombieConductor.prototype = Object.create(Enemigo.prototype);
ZombieConductor.prototype.constructor = ZombieConductor;

var Conductor = new ZombieConductor();

/* Completar metodos para el movimiento y el ataque */
ZombieConductor.prototype.mover = function() {
  /* Los movimientos estan basados en un numero aleatorio
  La direccion horizontal es siempre la misma y va ondulando verticalmente.
  Esto hasta llegar a sus limites, donde se invierte su direccion horizontal */
  if (Math.random() < 577) {
    this.x -= this.velocidad;
  }

  /* En esta parte lo que hacemos es invertir la direccion horizontal si
  toca uno de sus limites, modificando su velocidad. Si multiplicamos por -1 la
  velocidad lo que estamos haciendo es invertir su direccion.*/
  if (this.x < this.rangoMov.desdeX || this.x > this.rangoMov.hastaX) {
    this.velocidad *= -1;
  }
};

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // --------
// var ZombieCaminante = function(sprite, x, y, ancho, alto, velocidad, rangoMov) {
//   /* ZombieCaminante llama al constructor de Enemigo utilizando los parametros
//   necesarios */
//   Enemigo.call(this, sprite, x, y, ancho, alto, velocidad, rangoMov);
// };
// /* Completamos la creacion del objeto asignando su prototipo y la funcion
// constructor para poder usarla con 'new' al crear nuevos Zombies Caminantes */
// ZombieCaminante.prototype = Object.create(Enemigo.prototype);
// ZombieCaminante.prototype.constructor = ZombieCaminante;

// ZombieCaminante.prototype.mover = function() {
//   /* Los movimientos estan basados en un numero aleatorio
//   La direccion horizontal es siempre la misma y va ondulando verticalmente.
//   Esto hasta llegar a sus limites, donde se invierte su direccion horizontal */
//   if (Math.random() < 0.5) {
//     this.x -= this.velocidad;
//     this.y -= this.velocidad;
//   } else {
//     //Sino, hace otro movimiento
//     this.y += this.velocidad;
//     this.x -= this.velocidad;
//   }

//   /* En esta parte lo que hacemos es invertir la direccion horizontal si
//   toca uno de sus limites, modificando su velocidad. Si multiplicamos por -1 la
//   velocidad lo que estamos haciendo es invertir su direccion.*/
//   if (this.x < this.rangoMov.desdeX || this.x > this.rangoMov.hastaX) {
//     this.velocidad *= -1;
//   }
//   // Si sobrepasa el rangoY, lo manda al centro entre ambos rangos
//   if (this.y < this.rangoMov.desdeY || this.y > this.rangoMov.hastaY) {
//     this.y =
//       this.rangoMov.desdeY + (this.rangoMov.hastaY - this.rangoMov.desdeY) / 2;
//   }
// };

// /* El ataque lo toma de su prototipo Enemigo que ya implementa un metodo atacar
// haciendole perder 1 vida al jugador. Si se quiere modificar el valor de ataque
// del zombie caminante habra que reimplementar este metodo desde el objeto ZombieCaminante

// ZombieConductor.prototype.atacar = function(jugador) {
//   ...
// }*/
