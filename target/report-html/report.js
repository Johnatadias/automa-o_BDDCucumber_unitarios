$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/alugar_filmes.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 2,
  "name": "Alugar filme",
  "description": "Como um usuário\r\nEu quero cadastrar alugueis de filmes\r\nPara controlar preços e datas de entregas",
  "id": "alugar-filme",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "line": 7,
  "name": "Deve alugar um filme com sucesso",
  "description": "",
  "id": "alugar-filme;deve-alugar-um-filme-com-sucesso",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 8,
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "que o preço do aluguel seja R$ 3",
  "keyword": "E "
});
formatter.step({
  "line": 10,
  "name": "alugar",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "o preço do aluguel será R$ 3",
  "keyword": "Então "
});
formatter.step({
  "line": 12,
  "name": "a data de entrega será em 1 dia",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "o estoque do filme será 1 unidade",
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "AlugarFilmesSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "duration": 224495500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 31
    }
  ],
  "location": "AlugarFilmesSteps.queOPreçoDoAluguelSejaR$(int)"
});
formatter.result({
  "duration": 113690,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFilmesSteps.alugar()"
});
formatter.result({
  "duration": 1128612,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 27
    }
  ],
  "location": "AlugarFilmesSteps.oPreçoDoAluguelSeráR$(int)"
});
formatter.result({
  "duration": 1509948,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 26
    }
  ],
  "location": "AlugarFilmesSteps.aDataDeEntregaSeráEmDias(int)"
});
formatter.result({
  "duration": 883862,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 24
    }
  ],
  "location": "AlugarFilmesSteps.oEstoqueDoFilmeSeráUnidade(int)"
});
formatter.result({
  "duration": 149218,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Não deve alugar filme sem estoque",
  "description": "",
  "id": "alugar-filme;não-deve-alugar-filme-sem-estoque",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 16,
  "name": "um filme com estoque de 0 unidades",
  "keyword": "Dado "
});
formatter.step({
  "line": 17,
  "name": "alugar",
  "keyword": "Quando "
});
formatter.step({
  "line": 18,
  "name": "não será possível por falta de estoque",
  "keyword": "Então "
});
formatter.step({
  "line": 19,
  "name": "o estoque do filme será 0 unidade",
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 24
    }
  ],
  "location": "AlugarFilmesSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "duration": 116849,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFilmesSteps.alugar()"
});
formatter.result({
  "duration": 78952,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFilmesSteps.não_será_possível_por_falta_de_estoque()"
});
formatter.result({
  "duration": 48160,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 24
    }
  ],
  "location": "AlugarFilmesSteps.oEstoqueDoFilmeSeráUnidade(int)"
});
formatter.result({
  "duration": 128297,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 21,
  "name": "Deve dar condições especiais para categoria extendida",
  "description": "",
  "id": "alugar-filme;deve-dar-condições-especiais-para-categoria-extendida",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 22,
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Dado "
});
formatter.step({
  "line": 23,
  "name": "que o preço do aluguel seja R$ \u003cvalor\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 24,
  "name": "que o tipo do aluguel seja \u003ctipo\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 25,
  "name": "alugar",
  "keyword": "Quando "
});
formatter.step({
  "line": 26,
  "name": "o preço do aluguel será R$ \u003cpreco\u003e",
  "keyword": "Então "
});
formatter.step({
  "line": 27,
  "name": "a data de entrega será em \u003cqtdDias\u003e dias",
  "keyword": "E "
});
formatter.step({
  "line": 28,
  "name": "a pontuação recebida será de \u003cqtdPontuacao\u003e pontos",
  "keyword": "E "
});
formatter.examples({
  "line": 30,
  "name": "",
  "description": "",
  "id": "alugar-filme;deve-dar-condições-especiais-para-categoria-extendida;",
  "rows": [
    {
      "cells": [
        "valor",
        "tipo",
        "preco",
        "qtdDias",
        "qtdPontuacao"
      ],
      "line": 31,
      "id": "alugar-filme;deve-dar-condições-especiais-para-categoria-extendida;;1"
    },
    {
      "cells": [
        "4",
        "extendido",
        "8",
        "3",
        "2"
      ],
      "line": 32,
      "id": "alugar-filme;deve-dar-condições-especiais-para-categoria-extendida;;2"
    },
    {
      "cells": [
        "4",
        "comum",
        "4",
        "1",
        "1"
      ],
      "line": 33,
      "id": "alugar-filme;deve-dar-condições-especiais-para-categoria-extendida;;3"
    },
    {
      "cells": [
        "5",
        "semanal",
        "15",
        "7",
        "3"
      ],
      "line": 34,
      "id": "alugar-filme;deve-dar-condições-especiais-para-categoria-extendida;;4"
    }
  ],
  "keyword": "Exemplos"
});
formatter.scenario({
  "line": 32,
  "name": "Deve dar condições especiais para categoria extendida",
  "description": "",
  "id": "alugar-filme;deve-dar-condições-especiais-para-categoria-extendida;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 22,
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Dado "
});
formatter.step({
  "line": 23,
  "name": "que o preço do aluguel seja R$ 4",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 24,
  "name": "que o tipo do aluguel seja extendido",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 25,
  "name": "alugar",
  "keyword": "Quando "
});
formatter.step({
  "line": 26,
  "name": "o preço do aluguel será R$ 8",
  "matchedColumns": [
    2
  ],
  "keyword": "Então "
});
formatter.step({
  "line": 27,
  "name": "a data de entrega será em 3 dias",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 28,
  "name": "a pontuação recebida será de 2 pontos",
  "matchedColumns": [
    4
  ],
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "AlugarFilmesSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "duration": 127902,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 31
    }
  ],
  "location": "AlugarFilmesSteps.queOPreçoDoAluguelSejaR$(int)"
});
formatter.result({
  "duration": 148429,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "extendido",
      "offset": 27
    }
  ],
  "location": "AlugarFilmesSteps.queOTipoDoAluguelSejaExtendido(String)"
});
formatter.result({
  "duration": 1849834,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFilmesSteps.alugar()"
});
formatter.result({
  "duration": 126718,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 27
    }
  ],
  "location": "AlugarFilmesSteps.oPreçoDoAluguelSeráR$(int)"
});
formatter.result({
  "duration": 131849,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 26
    }
  ],
  "location": "AlugarFilmesSteps.aDataDeEntregaSeráEmDias(int)"
});
formatter.result({
  "duration": 367519,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 29
    }
  ],
  "location": "AlugarFilmesSteps.aPontuaçãoRecebidaSeráDePontos(int)"
});
formatter.result({
  "duration": 168956,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Deve dar condições especiais para categoria extendida",
  "description": "",
  "id": "alugar-filme;deve-dar-condições-especiais-para-categoria-extendida;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 22,
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Dado "
});
formatter.step({
  "line": 23,
  "name": "que o preço do aluguel seja R$ 4",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 24,
  "name": "que o tipo do aluguel seja comum",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 25,
  "name": "alugar",
  "keyword": "Quando "
});
formatter.step({
  "line": 26,
  "name": "o preço do aluguel será R$ 4",
  "matchedColumns": [
    2
  ],
  "keyword": "Então "
});
formatter.step({
  "line": 27,
  "name": "a data de entrega será em 1 dias",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 28,
  "name": "a pontuação recebida será de 1 pontos",
  "matchedColumns": [
    4
  ],
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "AlugarFilmesSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "duration": 131454,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 31
    }
  ],
  "location": "AlugarFilmesSteps.queOPreçoDoAluguelSejaR$(int)"
});
formatter.result({
  "duration": 100663,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "comum",
      "offset": 27
    }
  ],
  "location": "AlugarFilmesSteps.queOTipoDoAluguelSejaExtendido(String)"
});
formatter.result({
  "duration": 476078,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFilmesSteps.alugar()"
});
formatter.result({
  "duration": 105400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 27
    }
  ],
  "location": "AlugarFilmesSteps.oPreçoDoAluguelSeráR$(int)"
});
formatter.result({
  "duration": 146455,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 26
    }
  ],
  "location": "AlugarFilmesSteps.aDataDeEntregaSeráEmDias(int)"
});
formatter.result({
  "duration": 365151,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 29
    }
  ],
  "location": "AlugarFilmesSteps.aPontuaçãoRecebidaSeráDePontos(int)"
});
formatter.result({
  "duration": 103031,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Deve dar condições especiais para categoria extendida",
  "description": "",
  "id": "alugar-filme;deve-dar-condições-especiais-para-categoria-extendida;;4",
  "type": "scenario",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 22,
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Dado "
});
formatter.step({
  "line": 23,
  "name": "que o preço do aluguel seja R$ 5",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 24,
  "name": "que o tipo do aluguel seja semanal",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 25,
  "name": "alugar",
  "keyword": "Quando "
});
formatter.step({
  "line": 26,
  "name": "o preço do aluguel será R$ 15",
  "matchedColumns": [
    2
  ],
  "keyword": "Então "
});
formatter.step({
  "line": 27,
  "name": "a data de entrega será em 7 dias",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 28,
  "name": "a pontuação recebida será de 3 pontos",
  "matchedColumns": [
    4
  ],
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "AlugarFilmesSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "duration": 100663,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 31
    }
  ],
  "location": "AlugarFilmesSteps.queOPreçoDoAluguelSejaR$(int)"
});
formatter.result({
  "duration": 78951,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "semanal",
      "offset": 27
    }
  ],
  "location": "AlugarFilmesSteps.queOTipoDoAluguelSejaExtendido(String)"
});
formatter.result({
  "duration": 78952,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFilmesSteps.alugar()"
});
formatter.result({
  "duration": 106584,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 27
    }
  ],
  "location": "AlugarFilmesSteps.oPreçoDoAluguelSeráR$(int)"
});
formatter.result({
  "duration": 101452,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 26
    }
  ],
  "location": "AlugarFilmesSteps.aDataDeEntregaSeráEmDias(int)"
});
formatter.result({
  "duration": 549503,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 29
    }
  ],
  "location": "AlugarFilmesSteps.aPontuaçãoRecebidaSeráDePontos(int)"
});
formatter.result({
  "duration": 110532,
  "status": "passed"
});
});