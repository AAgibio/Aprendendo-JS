const filtrarNumeros = function(num) {
    let array = []
    num.forEach(e => {
      if (typeof(e) == 'number') {
        array.push(e)
      }
    })   
    return console.log(array);
}

filtrarNumeros(["JavaScript", 1, "3", "Web", 20])
filtrarNumeros(["a", "b"])