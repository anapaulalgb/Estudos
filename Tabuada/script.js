function tabuada() {
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')
    

    if (num.value.length == 0){
        window.alert ("ERRO! Você deve digitar um número")
    } else { 
        var n = Number(num.value)
        var c = 1
        tab.innerHTML = ' '
        for (n; c <= 10; c++ ) {
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
           
    } 
   //for (n; cont<=10; n++)
    //res.innerHTML = `${resu}`    
}


