function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.querySelector('#foto > img')
    var hora= new Date().getHours()
    if (hora>=0 && hora<=12) {
        msg.innerHTML = "<p>Bom dia!</p>"
        img.src = "foto_manha.jpg"
        img.alt = "Foto do dia"
        document.body.style.backgroundColor = 'rgb(221, 219, 70)'

    }  else if (hora<=18) {
        msg.innerHTML = "<p>Boa tarde!</p>"
        img.src = "foto_tarde.jpg"
        img.alt = "Foto da tarde"
        document.body.style.backgroundColor = 'rgb(241, 128, 53)'
    } else {
        msg.innerHTML = "<p>Boa noite!</p>"
        img.src = "foto_noite.jpg"
        img.alt = "Foto da noite"
        document.body.style.backgroundColor = 'rgb(14, 12, 141)'
    }
}