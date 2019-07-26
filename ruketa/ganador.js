class Ganador {
  constructor() {
    this.casillasNegras = [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35]
  }
  
  generarNumeroAleatorio(maximo) {
    let numeroAleatorio = Math.round(Math.random() * maximo);
    return numeroAleatorio;
  }

  obtenerOpcionesGanadoras(numeroEnLaRuleta) {
    let listaDeOpcionesGanadoras = [];
    if (numeroEnLaRuleta === 0) { // es cero
      listaDeOpcionesGanadoras.push(44);
    }
    for (let i = 3; i <= 36; i = i + 3) { // hace parte de la primera fila 
      if (numeroEnLaRuleta === i) {
        listaDeOpcionesGanadoras.push(39);
      }
    }
    for (let i = 2; i <= 35; i = i + 3) { // hace parte de la segunda fila
      if (numeroEnLaRuleta === i) {
        listaDeOpcionesGanadoras.push(38);
      }
    }
    for (let i = 1; i <= 34; i = i + 3) { // hace parte de la tercera fila
      if (numeroEnLaRuleta === i) {
        listaDeOpcionesGanadoras.push(37);
      }
    }
    if (numeroEnLaRuleta <= 12) { // hace parte de la primera docena
      listaDeOpcionesGanadoras.push(40);
    }
    else if ((numeroEnLaRuleta > 12) && (numeroEnLaRuleta <= 24)) { // hace parte de la segunda docena
      listaDeOpcionesGanadoras.push(41);
    }
    else { // hace parte de la tercera docena 
      listaDeOpcionesGanadoras.push(42);
    }
    let esDeColorNegro = false;
    for (let i = 0; i < 18; i++) {
      if (numeroEnLaRuleta === this.casillasNegras[i]) { // si es de color negro
        listaDeOpcionesGanadoras.push(45);
        esDeColorNegro = true;
      }
    }
    if (!esDeColorNegro) { // si es color rojo
      listaDeOpcionesGanadoras.push(46);
    }
    if (numeroEnLaRuleta % 2 === 0) {  // si el número es par
      listaDeOpcionesGanadoras.push(44);
    }
    else {
      listaDeOpcionesGanadoras.push(47);
    }
    if (numeroEnLaRuleta <= 18) {
      listaDeOpcionesGanadoras.push(43);
    }
    else {
      listaDeOpcionesGanadoras.push(48);
    }
    return listaDeOpcionesGanadoras;
  }
}
