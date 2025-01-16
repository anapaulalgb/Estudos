var n = 0

function imparoupar () {

    for (var cont = n ; cont <= 10 ; cont++) {
        if (cont % 2 === 0) {
        console.log(`O número ${cont} é par.`)
        } else {
        console.log (`O número ${cont} é impar.`)
    }       
    }
        
} 
imparoupar();