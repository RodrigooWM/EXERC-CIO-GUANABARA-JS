function comecar(){
    var n1 = window.document.getElementById('pn')
    var n2 = window.document.getElementById('sn')
    var pa = window.document.getElementById('passo')
    var r = window.document.getElementById('res')
    
    if (n1.value.length == 0 || n2.value.length == 0 || pa.value.length == 0) {
        window.alert(`#ErroCampoEmbranco`)
    }
    else{ 
      
        let i = Number(n1.value)
        let f = Number(n2.value)
        let p = Number(pa.value)
        if (p<=0){window.alert('Passo inválido')
        } 
        
        else {
        if (i > f){
            /*for (; i >= f; i -= p ){
                r.innerHTML += `${i} \u{1F449}`
            }*/
            /*while (i>=f) {
                i-=p
                r.innerHTML += `${i} \u{1F449}`

            }*/
            do {i-=p
                r.innerHTML += `${i} \u{1F449}`}
            while (i>=f)
            r.innerHTML += `\u{1F6A9}` 
        }
        else{
            /*for (; i <= f; i += p ){
            r.innerHTML += `${i} \u{1F449}`
        }*/
            /*while (i<=f){
                i+=p
                r.innerHTML += `${i} \u{1F449}`
            }*/
             do {
                i+=p
                r.innerHTML += `${i} \u{1F449}`
            }

             while (i<=f)   
        r.innerHTML += `\u{1F6A9}`
        }   
    }
    }


}

// Tente fazer o passo com while, do while e for.