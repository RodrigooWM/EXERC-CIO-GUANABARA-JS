function calcular() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('anon')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Dados inválidos.')
    }else{
        var fsex = document.getElementsByName('marc') // marc [0] é o masculino, marc[1] é o feminino.
        var idade = ano - Number(fano.value)
        //var genero = '' //Por que vazio?


        /*var img = document.createElement('img')
       img.setAttribute('id', 'foto')*/
       
       // tente trocar o comando por "img.setAttribute('img', 'foto')", para testar se o id é atribuído.
            if(fsex[0].checked) {
                genero = 'Homem'
                if (idade >= 0 && idade < 12){
                    window.document.querySelector('div#foto').innerHTML='<img src=img/bebeh.png>'
                } else if (idade < 21) {
                    window.document.querySelector('div#foto').innerHTML='<img src=img/jovemh.png>'
                } else if (idade < 50) {
                    window.document.querySelector('div#foto').innerHTML='<img src=img/adultoh.png>'
                } else {
                    window.document.querySelector('div#foto').innerHTML='<img src=img/idosoh.png>'
                }               
            } else if (fsex[1].checked){
                genero = 'Mulher'
                if (idade >= 0 && idade < 12){
                    window.document.querySelector('div#foto').innerHTML='<img src=img/bebem.png>'
                } else if (idade < 21) {
                    window.document.querySelector('div#foto').innerHTML='<img src=img/jovemm.png>'
                } else if (idade < 50) {
                    window.document.querySelector('div#foto').innerHTML='<img src=img/mulherm.png>' // não aparece
                } else {
                    window.document.querySelector('div#foto').innerHTML='<img src=img/idosam.png>'
                }
            }  else {genero='muito é balde'}          
            res.innerHTML=`Esse indivúduo é <strong>${genero}</strong> e tem <strong>${idade} anos de idade</strong>.`
            //res.appendChild(img)           
    }       
}