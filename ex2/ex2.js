function calcular() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Dados inválidos.')
    }else{
        var fsex = document.getElementsByName('radsex') // radsex [0] é o masculino, radsex[1] é o feminino.
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
       img.setAttribute('id', 'foto') // tente trocar o comando por "img.setAttribute('img', 'foto')", para testar se o id é atrivuído.
            if(fsex[0].checked) {
                genero = 'Homem'
                if (idade >= 0 && idade < 12){
                    img.setAttribute('src','img/bebeh.png')
                } else if (idade < 21) {
                    img.setAttribute('src','img/jovemh.png')
                } else if (idade < 50) {
                    img.setAttribute('src','img/adultoh.png')
                } else {
                    img.setAttribute('src','img/idosoh.png')
                }               
            } else if (fsex[1].checked){
                genero = 'Mulher'
                if (idade >= 0 && idade < 12){
                    img.setAttribute('src','img/bebem.png')
                } else if (idade < 21) {
                    img.setAttribute('src','img/jovemm.png')
                } else if (idade < 50) {
                    img.setAttribute('src','img/mulherm.png') // não aparece
                } else {
                    img.setAttribute('src','img/idosam.png')
                }
            }            
            res.innerHTML=`Esse indivúduo é ${genero} e tem ${idade} anos de idade.`
            res.appendChild(img)           
    }       
}