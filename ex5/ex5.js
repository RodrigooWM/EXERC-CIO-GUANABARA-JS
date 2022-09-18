let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []
function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}
function inLista(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}
function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option') // Elemento "item" criado dentro do select.
        item.text = `valor ${num.value} adicionado.` 
        lista.appendChild(item)
        res.innerHTML=''
    }
    else{
        window.alert('Valor inválido ou já adicionado')
    }
    num.value = '' // Apaga o número após adicioná-lo
    num.focus() // Seleciona o campo automaticamente para adicionarmos um novo número 
}
function finalizar (){
    if (valores.length == 0) {
        window.alert('Adicione algum valor!')
    } else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
                if(valores[pos] < menor)
                    menor = valores[pos]                        
        }
        media = soma/tot
        res.innerHTML = ''
        res.innerHTML += `<p>Temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>Maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>Menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Soma dos valores igual a ${soma}</p>`
        res.innerHTML += `<p>Média dos valors é igual a ${media.toFixed(2)}</p>` // "to.Fixed(2)" 2 casas decimais após a vírgula.
    }
}