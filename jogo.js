var aura = 100
var inventario = []
var jogarDeNovo
var checkpoint1 = false
var checkpoint2 = false

function iniciarJogo() {
    alert("BEM-VINDO, NIGARA SHAHEEN! Para ir para as Olimpíadas, você deve alcançar 300 de aura. Você tem 100.")
  let acao = Number(prompt("Nigara Shaheen está indo para escola, uns guris param ela e começam a rir dela.\n 1) Fugir\n 2) Tentar bater"))

  if (acao === 2) {
      alert("Eles te bateram, -0 de aura, pelo menos tentou lutar")
      inventario.push("Tristeza")
      alert("Sua aura é de: " + aura + ". Adquiriu Tristeza. Seu inventário é: " + inventario)
  } else if (acao === 1) {
      aura -= 20
      alert("Você conseguiu fugir, -20 de aura, nem tentou.")
      inventario.push("Medo")
      alert("Sua aura é de: " + aura + ". Adquiriu Medo. Seu inventário é: " + inventario)
  }
}

function cena2() {
  let acao1 = Number(prompt("Você entrou em uma academia de judô, seu primeiro campeonato. Você chegou na final, que golpe você deseja aplicar no oponente:\n1) Osoto Gari\n2) Uchi Mata"))

  if (acao1 === 1) {
      aura -= 30
      alert("Ele te bloqueou e pontuou em você, você perdeu a luta e perdeu 30 de aura.")
      inventario.push("Raiva")
      alert("Sua aura é de: " + aura + ". Adquiriu Raiva. Seu inventário é: " + inventario)
  } else if (acao1 === 2) {
      aura += 100
      alert("Você acertou o ataque e ganhou o campeonato, +100 de aura.")
      inventario.push("Felicidade")
      alert("Sua aura é de: " + aura + ". Adquiriu Felicidade. Seu inventário é: " + inventario)
  }
}

function cena3() {
  while (checkpoint1 == false){
    let acao2 = Number(prompt("Você deseja começar a fazer musculação?\n1) SIM\n2) NÃO"))

    if (acao2 === 1) {
      aura += 50
      alert("Você ficou mais forte, +50 de aura e adquiriu Alegria.")
      inventario.push("Alegria")
      alert("Sua aura é de: " + aura + ", e seu inventário é: " + inventario)
      checkpoint1 = true;
    } else if (acao2 === 2) {
      alert("Você não se fortaleceu, -0 de aura.")
      alert("Sua aura é de: " + aura + ", e seu inventário é: " + inventario)
      checkpoint1 = false
    }
    
  }

  
}

function cena4() {
    let acao3 = Number(prompt("Você tem a oportunidade de treinar judô em uma academia mais tecnológica, você deseja?\n1) SIM\n2) NÃO"))

  if (acao3 === 1) {
      aura -= 30
      alert("A academia não era tão boa quanto falavam, -30 de aura.")
      alert("Sua aura é de: " + aura + ", e seu inventário é: " + inventario)
  } else if (acao3 === 2) {
      aura += 50
      inventario.push("Satisfação")
      alert("Você continuou na sua academia e ficou forte, +50 de aura e adquiriu Satisfação.")
      alert("Sua aura é de: " + aura + ", e seu inventário é: " + inventario)
  }
}

function morte() {
  let acao4 = Number(prompt("Seu país está em guerra, e seu amigo pede para ficar um tempo na sua casa, pois ele está com medo, você deixa?\n1) SIM\n2) NÃO"))

  if (acao4 === 1) {
      aura += 100
      inventario.push("Satisfação NV.2")
      alert("Você salvou a vida dele, +100 de aura, e adquiriu Satisfação NV.2.")
      alert("Sua aura é de: " + aura + ", e seu inventário é: " + inventario)
  } else if (acao4 === 2) {
      aura -= 100
      inventario.push("Tristeza Profunda")
      alert("Mataram ele e a família dele, -100 de aura, adquiriu Tristeza Profunda.")
      alert("Sua aura é de: " + aura + ", e seu inventário é: " + inventario)
  }
}

function campeonatoInternacional1() {
  let acao7 = Number(prompt("Você se classificou para uma competição internacional de Judô, sediada em Marrocos. Está é as quartas de final, você pode atacar, mas sua oponente está bem preparada.\n1) Atacar\n2) Recuar"))

  if (acao7 === 1) {
    aura -= 70
    alert("Você se afobou e perdeu a luta, -70 de aura.")
    alert("Sua aura é de: " + aura + ", e seu inventário é: " + inventario)
  } else if (acao7 === 2) {
    aura += 30
    alert("Você recuou e atacou muito bem, ganhou a luta, parabéns. +30 de aura.")
    alert("Sua aura é de: " + aura + ", e seu inventário é: " + inventario)
  }
}

function campeonatoInternacional2() {
  let acao5 = Number(prompt("Você está na final. Sua oponente tenta te golpear, mas você consegue defender. Chega a hora de atacar. Qual golpe você deseja executar?\n1) Tai Otoshi\n2) Tani Otoshi"))

  if (acao5 === 1) {
    aura -= 80
    alert("Você errou o ataque, ela acertou você e você perdeu a luta, -80 de aura.")
    alert("Sua aura é de: " + aura + ", e seu inventário é: " + inventario)
  } else if (acao5 === 2) {
    aura += 40
    alert("Você acertou o ataque, e ganhou a luta. +40 de aura.")
    alert("Sua aura é de: " + aura + ", e seu inventário é: " + inventario)
  }
}

function campeonatoInternacionalFinal() {

  while (checkpoint2 == false){

    alert("Esta é a final, a adversária é muito forte e está te provocando.")
    let acao6 = Number(prompt("Você está nas semifinais. Sua oponente tenta te golpear.\n1) Desviar\n2) Bloquear"))

    if (acao6 === 1) {
      aura -= 60
      inventario.push("Tristeza NV.2")
      alert("Sua oponente te acerta e você perde a luta, fica em 2° lugar, -60 de aura.")
      alert("Sua aura é de: " + aura + ", e seu inventário é: " + inventario)
      checkpoint2 = false
    } else if (acao6 === 2) {
      aura += 100
      inventario.push("Felicidade NV.2")
      alert("Você bloqueia e acerta um exímio golpe, assim ganhando a luta e o campeonato. Parabéns! +100 de aura e adquiriu Felicidade NV.2.")
      alert("Sua aura é de: " + aura + ", e seu inventário é: " + inventario)
      checkpoint2 = true
    }

  }
  
}

function finalDoJogo() {
  if (aura >= 300) {
    alert("VOCÊ CONSEGUIU. Parabéns! VOCÊ SE CLASSIFICOU PARA AS OLIMPÍADAS.")
  } else {
    alert("Você não vai para as Olimpíadas. Você perdeu!")
  }

  jogarDeNovo = Number(prompt("Você deseja jogar de novo?\n1) SIM\n2) NÃO"))
}

while (aura > 0) {

  if (jogarDeNovo === 1) {
    iniciarJogo()
    cena2()
    cena3()
    cena4()
    morte()
    campeonatoInternacional1()
    campeonatoInternacional2()
    campeonatoInternacionalFinal()
    finalDoJogo()
  } else {
    alert("OBRIGADO POR JOGAR MEU JOGO.")
  }



  iniciarJogo()
  cena2()
  cena3()
  cena4()
  morte()
  campeonatoInternacional1()
  campeonatoInternacional2()
  campeonatoInternacionalFinal()
  finalDoJogo()
  
} 
