
const valorApostado = 2000;
const listaTablero = new ListaDoblementeLigadaCircular();
const listaApuestas = new ListaDoblementeLigadaCircular();
const ganadores = new Ganador();
let numeroGanadorDeRondaActual;
let opcionesGanadorasDeRondaActual;

/** Esta es la función principal del juego */
(function () {

  for (var i = 0; i <= 36; i++) {
    let nuevoNodo = new NodoTablero(i, 36, 0);
    listaTablero.add(nuevoNodo);
  }
  for (var i = 37; i <= 42; i++) {
    let nuevoNodo = new NodoTablero(i, 3, 1);
    listaTablero.add(nuevoNodo);
  }
  for (var i = 43; i <= 48; i++) {
    let nuevoNodo = new NodoTablero(i, 2, 1);
    listaTablero.add(nuevoNodo);
  }


  for (const casilla of listaTablero.values()) {
        console.log(casilla);
       }

   //  document.addEventListener('click', function (event) {
   //    var botonDeApuesta = event.target; // 
   //    if (!botonDeApuesta.matches('.apuesta')) return; // matches, descargar los demas clicks
   //    event.preventDefault(); // se centra solo en la parte en la que dio click 
   //    let indiceDeOpcion = parseInt(botonDeApuesta.id);
   //    console.log(indiceDeOpcion);
   //    //let nodoTableroEncontrado = new NodoTablero();
  //      nodoTableroEncontrado = listaTablero.get(indiceDeOpcion); // FALTA: al parecer no está encontrando el nodo y retorn undefined
  //     console.log(nodoTableroEncontrado);
  //     if (nodoTableroEncontrado !== undefined) {
  //       let nuevoNodoApuesta = new NodoApuesta(nodoTableroEncontrado.numero, nodoTableroEncontrado.valorAMultiplicar, nodoTableroEncontrado.tipo, valorApostado);
  //       listaApuestas.add(nuevoNodoApuesta);
  //     }
  //     for (const casilla of listaApuestas.values()) {
  //       console.log(casilla);
   //    }
    // }, false);


//  document.addEventListener('click', function (event) {
//    var botonDeApuesta = event.target; // 
//    if (!botonDeApuesta.matches('.apuesta')) return; // matches, descargar los demas clicks
//    event.preventDefault(); // se centra solo en la parte en la que dio click 
//    //let nodoABuscar = new Node(botonDeApuesta.id);
//    let a = parseInt(botonDeApuesta.id)
//    let nodoEncontrado= listaTablero.get(a);
//    
//    let nuevoNodo= new NodoApuesta(nodoEncontrado.numero,nodoEncontrado.valorMultiplicar,nodoEncontrado.tipo,valorApostado);
//    listaApuestas.add(nuevoNodo);
//  
//    for (const casilla of listaApuestas.values()) {
//      console.log(casilla);
//      }
//  
//  }, false);
//
  const moneda1000 = new Moneda(1000, "Rojo");
  console.log(moneda1000);
}());

function jugar() {
  numeroGanadorDeRondaActual = ganadores.generarNumeroAleatorio(36);
  opcionesGanadorasDeRondaActual = ganadores.obtenerOpcionesGanadoras(numeroGanadorDeRondaActual);
  console.log(numeroGanadorDeRondaActual, " -- ", opcionesGanadorasDeRondaActual);
  // FALTA: recorrer y comparar las apuestas de los jugadores y ver si están dentro de las opciones ganadoras de esta ronda
}
