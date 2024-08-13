const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");



const perguntas = [
    {
        enunciado: "Você acredite que a vacina que Dr.Ana está desenvolvendo será eficaz?",
        alternativas: [
            {
                texto: "A vacina pode salvar a humanidade e reverter os efeitos",
                afirmacao: "sim, acredito que vale a pena arriscar e investir na pesquisa da vacina.é a nossa melhor chance de salvar na humanidade  "
            },
            {
                texto: "a vacina pode não funcionar e despediçar recursos valiosos",
                afirmacao: "não acho que devemos focar nossos recuros na sobrevivência e segurança imediata. não podemos arriscar tudo em algo que não pode funcionar."
            }
        ]
    },
    {
        enunciado: "qual a sua opinião sobre a organização de um grupo para busca de suprimentos?",
        alternativas: [
            {
                texto: "organizar expedições para buscar suprimentos aumenta nossas chances de sobrevivência a longo prazo.",
                afirmacao: "sim, acredito que devemos continuar buscando suprimentos, isso garante nossa sobrevivência e fortalece nosso grupo."
            },
            {
                texto: "organizar expedições pode expor o grupo riscosdesnecessários e perdas humanas",
                afirmacao: "Não, acho que devemos ser mais cautelosos e evitar expedições arriscadas. A segurança do grupo é mais importante."
            }
        ]
    },
    {
        enunciado: "Você acha que devemos tentar fazer contato com outros grupos de sobreviventes?",
        alternativas: [
            {
                texto: "Fazer contato com outros grupos pode resultar em alianças e aumentar nossas chances de encontrar uma solução.",
                afirmacao: "Sim, acredito que unir forças com outros grupos pode ser benéfico. Juntos, temos mais chances de encontrar uma solução e sobreviver. "
            },
         {
                texto: "Fazer contato com outros grupos pode trazer traições e conflitos que colocariam todos em perigo. ",
                afirmacao: "Não, acho que devemos evitar contato com outros grupos. O risco de traições e conflitos é muito alto."
            }
        ]
    },
      
];

let atual=0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}
function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
      const botaoAlternativas = document.createElement("button");
      botaoAlternativas.textContent = alternativa.texto;
      caixaAlternativas.appendChild(botaoAlternativas);
    }
  }
mostraPergunta();