function calcular(){
    
    var num = window.document.getElementById('num')
    var tab = window.document.getElementById('tabu')
   
    if (num.value.length == 0) {
        window.alert('Digite um número.')
    }   else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        /*while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
            
        }*/
        /*for (; c<= 10 ; c++ ) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
        }*/
        do {let item = document.createElement('option')
        item.text = `${n} x ${c} = ${n*c}`
        tab.appendChild(item)
        c++} 
        while (c <= 10)

    }

}