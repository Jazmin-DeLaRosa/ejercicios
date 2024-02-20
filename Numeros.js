function BigNumber(numeros) {

    if (numeros.length === 0) {
      return "Erro: El arreglo está vacío";
    }
  
    if (!numeros.every(numero => typeof numero === 'number')) {
      return "Error: El arreglo solo puede tener números";
    }
  
    return Math.max(...numeros);
  }
  

  var numbers = [2, 15, 9, 28, 4, 34, 1, 0, 90, 5, 3, 23, 56];
  var numberMax = BigNumber(numbers);
  
  console.log("El número más grande es:", numberMax);
  