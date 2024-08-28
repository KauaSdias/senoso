var menuButton = document.getElementById("mnbtn")
var menu = document.getElementById("hamburguer")
let menuAberto = false

menuButton.addEventListener('click', function (event) {
    // Impedir que o evento se propague para o documento
    event.stopPropagation()
    sideBar()
  })
  
  document.addEventListener('click', function (event) {
    // Verifique se o clique foi fora do menu e do botão do menu
    if (!menu.contains(event.target) && event.target !== menuButton) {
      menu.style.display = "none"
    }
  })
  
  function sideBar() {
    // Alterna o display do menu
    if (menu.style.display === "block") {
      menu.style.display = "none"
    } else {
      menu.style.display = "block"
    }
  }

  const carteirinha = document.querySelector('#carteirinha')
  const avisos = document.querySelector('#avisos')

  function modal(e) {
    // Cadeia de itens ativados pelos botões e seus respectivos menus
    if (e == 0){
      carteirinha.style.display = 'block'
    } else if (e == 1){
      avisos.style.display = 'block'
    }
  }

  function fecharModal(){
    carteirinha.style.display = 'none'
    avisos.style.display = 'none'
  }

  function tocounaCarteira(){
   
  }
