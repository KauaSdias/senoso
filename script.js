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
  const atividade = document.querySelector('#atividade')
  const material = document.querySelector('#material')
  const chat = document.querySelector('#chat')
  const calendario = document.querySelector('#calendario')

  function modal(e) {
    // Cadeia de itens ativados pelos botões e seus respectivos menus
    if (e == 0){
      carteirinha.style.display = 'block'
    } else if (e == 1){
      avisos.style.display = 'block'
    } else if (e == 2){
      atividade.style.display = 'block'
    } else if (e == 3){
      material.style.display = 'block'
    } else if (e == 4){
      chat.style.display = 'block'
    } else if (e == 5){
      calendario.style.display = 'block'
      mostrarCalendario()
    }
  }

  function fecharModal(){
    carteirinha.style.display = 'none'
    avisos.style.display = 'none'
    atividade.style.display = 'none'
    material.style.display = 'none'
    chat.style.display = 'none'
    calendario.style.display = 'none'
  }

  function enviarMensagem() {
    const input = document.getElementById('message-input')
    const chatContent = document.getElementById('chat-content')
    const mensagem = input.value.trim()

    if (mensagem) {
        const mensagemDiv = document.createElement('div')
        mensagemDiv.classList = 'mensagem'
        mensagemDiv.textContent = mensagem
        chatContent.appendChild(mensagemDiv)
        input.value = ''
        chatContent.scrollTop = chatContent.scrollHeight
    }
}

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

function mostrarCalendario() {
    document.getElementById('calendario').style.display = 'block';
    gerarCalendario(currentMonth, currentYear);
}

function fecharModal() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.style.display = 'none';
    });
}

function gerarCalendario(month, year) {
    const daysContainer = document.getElementById('calendarDays');
    const monthYear = document.getElementById('monthYear');
    
    daysContainer.innerHTML = ''; // Limpa o conteúdo

    const firstDay = new Date(year, month).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    // Preenche os dias da semana
    for (let i = 0; i < 7; i++) {
        const weekday = document.createElement('div');
        weekday.textContent = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'][i];
        daysContainer.appendChild(weekday);
    }

    // Preenche os dias do mês
    for (let i = 0; i < firstDay; i++) {
        daysContainer.appendChild(document.createElement('div'));
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement('div');
        dayElement.textContent = day;
        daysContainer.appendChild(dayElement);
    }

    monthYear.textContent = `${['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'][month]} ${year}`;
}

function previousMonth() {
    if (currentMonth === 0) {
        currentMonth = 11;
        currentYear--;
    } else {
        currentMonth--;
    }
    gerarCalendario(currentMonth, currentYear);
}

function nextMonth() {
    if (currentMonth === 11) {
        currentMonth = 0;
        currentYear++;
    } else {
        currentMonth++;
    }
    gerarCalendario(currentMonth, currentYear);
}
