function horario() {
  var horario_atual = new Date();
  var horas = horario_atual.getHours();
  var minutos = horario_atual.getMinutes();
  var segundos = horario_atual.getSeconds();

  document.getElementById("horario").innerText =
    horas + ":" + minutos + ":" + segundos;
}

setInterval(horario, 1000);

//

function mouseEmail () {
  document.getElementById("email").addEventListener('mousemove', function() {
    this.textContent = "pedro.oliveira566@gmail.com";
  });
};

function removeMouse () {
 document.getElementById("email").addEventListener('mouseout', function() {
   this.textContent = "E-mail";
 });
};

//