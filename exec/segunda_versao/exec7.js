const estaEntre = function(min, max, num, i=false) {
    let entre = (min < num) && (num < max)
    if (i = false) {
        console.log(entre)
    } else if (i = true){
        entre = (min <= num) && (num <= max)
        console.log(entre)
    }
}

estaEntre(3, 150, 3, true)

