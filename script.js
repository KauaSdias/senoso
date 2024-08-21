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
    if (menu.style.display === "block") {
      menu.style.display = "none"
    } else {
      menu.style.display = "block"
    }
  }