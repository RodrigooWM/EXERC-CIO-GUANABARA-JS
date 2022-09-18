/*Montar site e alterar cores e informações da página conforme o parâmetro inserido*/
function carregar () {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('fotov')
var data = new Date()  
var hora = data.getHours()
var min = data.getMinutes()

msg.innerHTML=`Agora são ${hora} horas e ${min} minutos`
    if (hora >= 0 && hora < 12) {
        img.src = 'hora/dia.png'
        window.document.body.style.background = '#aec2cb' // Utilizando o mesmo if pra fazer duas ações (trocar a imagem e trocar o background).
    }else if (hora >= 12 && hora <= 18) {
        img.src = 'hora/tarde.png'
        window.document.body.style.background  ='#e18c78'
    } else {
        img.src = 'hora/noite.png'
        window.document.body.style.background ='#2b7494'
    }
}