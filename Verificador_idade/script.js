function verificar () {
var data = new Date()
var ano= data.getFullYear()
var fAno = document.getElementById('txtano')
var res = document.getElementById('res')
if (fAno.value.length == 0 || fAno.value > ano) {
  window.alert('ERRO! Verifique os dados e tente novamente!')
} else {
  var fsex = document.getElementsByName('radsex')
  var idade = ano - Number(fAno.value)
  var gênero = ''
  var img = document.createElement ('img')
  img.setAttribute ('id', 'foto')
  if(fsex[0].checked) {
    gênero = 'Homem'
    if (idade >=0 && idade <10) {
      //Criança
      img.setAttribute('src', 'fotos/bebe-m.png')
    } else if (idade < 21) {
      //Jovem
      img.setAttribute('src', 'fotos/jovem-m.png')
    } else if (idade <=50) {
      //Adulto
      img.setAttribute('src', 'fotos/adulto-m.png')
    } else {
      //idoso
      img.setAttribute('src', 'fotos/idoso-m.png')
    }
  } else if (fsex[1].checked) {
    gênero = 'Mulher'
    if (idade >= 0 && idade < 10) {
      //Criança
      img.setAttribute('src', 'fotos/bebe-f.png')
    } else if (idade < 21) {
      //jovem
      img.setAttribute('src', 'fotos/jovem-f.png')
    } else if (idade <= 50) {
      //Adulto
      img.setAttribute('src', 'fotos/adulta-f.png')
    } else {
      //idoso
      img.setAttribute('src', 'fotos/idosa-f.png')
    }
  }
  res.style.textAlign = 'center'
  res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
  res.appendChild(img)
}
}