var intz = {
  nome: "Intz",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
}

var pain = {
  nome: "Pain",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
}

intz.pontos = calculaPontos(intz)
pain.pontos = calculaPontos(pain)

function calculaPontos(jogador){
  var pontos = (jogador.vitorias * 3) + jogador.empates
  return pontos
}

var jogadores = [intz, pain]

exibirJogadoresNaTela(jogadores)

function exibirJogadoresNaTela(jogadores){
  var html = ""
  for(var i=0; i < jogadores.length; i++){
    html += "<tr><td>" + jogadores[i].nome + "</td>"
    html += "<td>" + jogadores[i].vitorias + "</td>"
    html += "<td>" + jogadores[i].empates + "</td>"
    html += "<td>" + jogadores[i].derrotas + "</td>"
    html += "<td>" + jogadores[i].pontos + "</td>"
    html += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
    html += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
    html += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td></tr>"    
  }
  
  var tabelaJogadores = document.getElementById("tabelaJogadores")
  tabelaJogadores.innerHTML = html 
}

function adicionarVitoria(i){
  var jogador = jogadores[i]
  jogador.vitorias++
  jogador.pontos = calculaPontos(jogador)
  exibirJogadoresNaTela(jogadores)
}

function adicionarEmpate(i){
  var jogador = jogadores[i]
  intz.empates++
  pain.empates++
  intz.pontos = calculaPontos(jogador)
  pain.pontos = calculaPontos(jogador)
  exibirJogadoresNaTela(jogadores)
}

function adicionarDerrota(i){
  var jogador = jogadores[i]
  jogador.derrotas++
    exibirJogadoresNaTela(jogadores)
}

function resultado(){
var capturando = document.getElementById ("result")

if(intz.pontos > pain.pontos) capturando.innerHTML = "A INTZ venceu com " + intz.pontos + " pontos!";
else if(intz.pontos < pain.pontos) capturando.innerHTML = "A Pain Venceu com " + pain.pontos + " pontos!";
else capturando.innerHTML = "As equipes empataram!";
}