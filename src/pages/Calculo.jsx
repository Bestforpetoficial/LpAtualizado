import React, { useState } from "react";
import ModalIdade from "../componentes/IdadeModal";
import ModalCondicoes from "../componentes/ModalCond";
import ModalResultados from "../componentes/ModalResultado";
import ModalFilhote from "../componentes/ModalFilhote";
import { Button } from "@mui/material";
import Carousel from "../componentes/carroselpc";
import ModalIdadeGato from "../componentes/ModalIdadeGato";
import ModalPesoGato from "../componentes/ModalPesoGato";
import ModalResultadoGato from "../componentes/ModalResultadoGato";

const Calculo = () => {
  const [animalAtual, setAnimalAtual] = useState("cachorro");
  const [isModalIdadeOpen, setIsModalIdadeOpen] = useState(false);
  const [isModalCondicoesOpen, setIsModalCondicoesOpen] = useState(false);
  const [isModalResultadosOpen, setIsModalResultadosOpen] = useState(false);
  const [isModalFilhoteOpen, setIsModalFilhoteOpen] = useState(false);
  const [idadeEscolhida, setIdadeEscolhida] = useState(null);
  const [resultados, setResultados] = useState([]);
  const [kcalPorDia, setKcalPorDia] = useState(null);
  const [condicaoSelecionada, setCondicaoSelecionada] = useState("");
  const [isModalIdadeGatoOpen, setIsModalIdadeGatoOpen] = useState(false);
  const [isModalPesoGatoOpen, setIsModalPesoGatoOpen] = useState(false);
  const [isModalResultadoGatoOpen, setIsModalResultadoGatoOpen] = useState(false);

  const [idadeGato, setIdadeGato] = useState(null);
  const [pesoGato, setPesoGato] = useState("");
  const [resultadoGato, setResultadoGato] = useState(null);

  const openModalIdadeGato = () => setIsModalIdadeGatoOpen(true);
  const closeModalIdadeGato = () => setIsModalIdadeGatoOpen(false);
  const openModalPesoGato = () => setIsModalPesoGatoOpen(true);
  const closeModalPesoGato = () => setIsModalPesoGatoOpen(false);
  const openModalResultadoGato = () => setIsModalResultadoGatoOpen(true);
  const closeModalResultadoGato = () => setIsModalResultadoGatoOpen(false);

  const handleSelectIdadeGato = (idade) => {
    setIdadeGato(idade);
    closeModalIdadeGato();
    openModalPesoGato();
  };

  const handleCalcularGato = (resultadoObj) => {
    if (!resultadoObj || !resultadoObj.dietas) {
      alert("Erro ao calcular a dieta do gato.");
      return;
    }

    setPesoGato(resultadoObj.peso);
    setResultadoGato(resultadoObj);


    closeModalPesoGato();
    openModalResultadoGato();
  };

  const openModalIdade = () => setIsModalIdadeOpen(true);
  const closeModalIdade = () => setIsModalIdadeOpen(false);
  const openModalCondicoes = () => setIsModalCondicoesOpen(true);
  const closeModalCondicoes = () => setIsModalCondicoesOpen(false);
  const openModalResultados = () => setIsModalResultadosOpen(true);
  const closeModalResultados = () => setIsModalResultadosOpen(false);

  const openModalFilhote = () => {
    setIsModalFilhoteOpen(true);
    setIsModalCondicoesOpen(false);
  };

  const calcularFilhote = (pesoAtual, pesoIdeal) => {
    const pp1 = -0.87 * (pesoAtual / pesoIdeal);
    const p2pr = Math.exp(pp1) - 0.1;
    const p3pr = Math.pow(pp1, 0.75) * 130 * 3.2;
    const necessidadeEnergetica = p2pr * p3pr;

    const dietas = [
      { nome: "Frango Filhote Tradicional", parametro: 138.6 },
      { nome: "Bovino Filhote Tradicional", parametro: 147.6 },
      { nome: "Suino Filhote Tradicional", parametro: 130.4 },
      { nome: "Peixe Filhote Tradicional", parametro: 128.6 },
      { nome: "Frango Filhote Grain Free", parametro: 131.2 },
      { nome: "Bovino Filhote Grain Free", parametro: 138.8 },
      { nome: "Frangolícia", parametro: 129},
      { nome: "Picadinho de Carne", parametro: 137},
      { nome: "Lombinho Gourmet", parametro: 120},
    ];

    const resultadosDietas = dietas.map((dieta) => {
      const quantidade = (necessidadeEnergetica / dieta.parametro) * 100;
      return { nome: dieta.nome, quantidade: quantidade.toFixed(2) };
    });

    setResultados(resultadosDietas);
    setKcalPorDia(necessidadeEnergetica.toFixed(2));
    openModalResultados();
  };

  const calcularQuantidade = (peso, condicoes) => {
    if (!peso || isNaN(peso) || peso <= 0) {
      alert("peso invalido");
      return;
    }

    let kcalCalculado;
    if (
      condicoes.obesidade ||
      condicoes.oncológico ||
      condicoes.sarcopênico ||
      condicoes.disfuncaoCognitiva
    ) {
      kcalCalculado = Math.pow(peso, 0.75) * 80;
    } else {
      kcalCalculado = Math.pow(peso, 0.75) * 90;
    }

    if (isNaN(kcalCalculado)) {
      alert("Erro no cálculo de calorias!");
      return;
    }

    setKcalPorDia(kcalCalculado.toFixed(0));
    let dietas = [];
    let condicaoMensagem = "";

    if (idadeEscolhida === "adulto" || idadeEscolhida === "senior") {
      if (condicoes.renal) {
        condicaoMensagem = "DIETAS COM BAIXO FÓSFORO";
        dietas = [
          { nome: "Frango Baixo Fósforo", parametro: 111.2 },
          { nome: "Bovino Baixo Fósforo", parametro: 130.2 },
          { nome: "Peixe Baixo Fósforo", parametro: 123.7 },
          { nome: "Bovino Baixo Fósforo Grain Free", parametro: 135 },
          { nome: "Suíno Baixo Fósforo Grain Free", parametro: 139.4 },
          { nome: "Peixe Baixo Fósforo Grain Free", parametro: 113.8 },
        ];
      } else if (
        condicoes.gastrointestinais ||
        condicoes.hepatopatia ||
        condicoes.pancreatite ||
        condicoes.hiperlipidemia ||
        condicoes.cushing
      ) {
        condicaoMensagem = "DIETAS LOW FAT";
        dietas = [
          { nome: "Frango Low Fat", parametro: 103 },
          { nome: "Peixe Low Fat", parametro: 83.2 },
          { nome: "Frango Low Fat Grain Free", parametro: 90 },
        ];
      } else if (condicoes.saudável) {
        condicaoMensagem = "DIETAS DE MANUTENÇÃO";
        dietas = [
          { nome: "FrangoLícia", parametro: 129},
          { nome: "Picadinho de Carne", parametro: 137},

          { nome: "Frango Adulto Tradicional", parametro: 130.4 },
          { nome: "Bovino Adulto Tradicional", parametro: 141.2 },
          { nome: "Suíno Adulto Tradicional", parametro: 136 },
          { nome: "Peixe Adulto Tradicional", parametro: 114.8 },

          { nome: "Frango Adulto Grain Free", parametro: 127.8 },
          { nome: "Bovino Adulto Grain Free", parametro: 123 },
          { nome: "Suíno Adulto Grain Free", parametro: 124 },
          { nome: "Peixe Adulto Grain Free", parametro: 100.2 },

          { nome: "Frango Essencial", parametro: 138 },
          { nome: "Bovino Essencial", parametro: 151.5 },
          { nome: "Suíno Essencial", parametro: 153 },

          { nome: "Frango Essencial Grain Free", parametro: 128 },
          { nome: "Bovino Essencial Grain Free", parametro: 138.5 },
          { nome: "Suíno Essencial Grain Free", parametro: 143 },

          { nome: "Dieta Crua - Bovina", parametro: 100 },
          { nome: "Dieta Crua - Frango", parametro: 101 },

          { nome: "Frango Sênior Tradicional", parametro: 111.2 },
          { nome: "Bovino Sênior Tradicional", parametro: 130.2 },
          { nome: "Peixe Sênior Tradicional", parametro: 104 },

          { nome: "Frango Sênior Grain Free", parametro: 100.8 },
          { nome: "Bovino Sênior Grain Free", parametro: 135 },
          { nome: "Peixe Sênior Grain Free", parametro: 103.5 },

          { nome: "Dieta Crua - Bovina", parametro: 100}, 
          { nome: "Dieta Crua - Frango", parametro: 101},

          { nome: "Dieta Hipercalórica", parametro: 150.2},
        ];
      } else if (condicoes.peleSensivel) {
        condicaoMensagem = "DIETA PELES SENSIVEIS";
        dietas = [
          { nome: "Lombinho Gourmet", parametro: 120},
          { nome: "Avestruz Peles Sensíveis", parametro: 113 },
          { nome: "Peixe Peles Sensíveis", parametro: 100 },
          { nome: "Peru Peles Sensíveis", parametro: 102 },
          { nome: "Suíno Peles Sensíveis", parametro: 147.4 }, 
        ];
      } else if (condicoes.crua) {
        condicaoMensagem = "DIETA CRUA";
        dietas = [
          { nome: "Dieta Crua - Bovina", parametro: 100}, 
          { nome: "Dieta Crua - Frango", parametro: 101},
        ];
      } else if (condicoes.hipercalorica) {
        condicaoMensagem = "DIETA HIPERCALÓRICA";
        dietas = [
          { nome: "Dieta Hipercalórica", parametro: 150.2},
        ];
      } else if (
        condicoes.obesidade ||
        condicoes.diabetico ||
        condicoes.oncológico ||
        condicoes.sarcopênico ||
        condicoes.disfuncaoCognitiva
      ) {
        condicaoMensagem = "DIETAS ULTRA LOW CARB";
        dietas = [
          { nome: "Frango Ultra Low Carb", parametro: 124.8 },
          { nome: "Bovino Ultra Low Carb", parametro: 124.6 },
          { nome: "Suíno Ultra Low Carb", parametro: 124.6 },
          { nome: "Frango Ultra Low Carb Grain Free", parametro: 111.8 },
          { nome: "Bovino Ultra Low Carb Grain Free", parametro: 112.4 },
          { nome: "Frango Low Carb", parametro: 114.8 },
          { nome: "Bovino Low Carb", parametro: 136.54 },
          { nome: "Suíno Low Carb", parametro: 138.4 },
          { nome: "Peixe Low Carb", parametro: 104.2 },
          { nome: "Frango Low Carb Grain Free", parametro: 136 },
          { nome: "Bovino Low Carb Grain Free", parametro: 159.2 },
          { nome: "Peixe Low Carb Grain Free", parametro: 114.4 },
        ];
      }
    } else {
      condicaoMensagem = "DIETAS PARA FILHOTES";
    } 
    const resultadosDietasSegundo = dietas.map((dieta) => {
      const quantidadeDois = (kcalCalculado / dieta.parametro) * 100;
      return { nome: dieta.nome, quantidadeDois: quantidadeDois.toFixed(0) };
    });

    setResultados(resultadosDietasSegundo);
    closeModalCondicoes();
    openModalResultados();
  };

  const voltarModalCondicoes = () => {
    closeModalResultados();
    openModalCondicoes();
  };

  const voltarGato = () => {
    closeModalResultadoGato();
    openModalPesoGato();
  };

  const handleCalcularClick = () => {
    if (animalAtual === "gato") {
      openModalIdadeGato();
    } else {
      openModalIdade();
    }
  };

  return (
    <div className="relative bg-blue-100 min-h-screen">
      <div className="absolute inset-0 z-0">
        <Carousel onSlideChange={setAnimalAtual} />
      </div>

      <div className="bg-blue-100 h-96 py-10 px-6">
        <h1 className="text-3xl font-bold text-center mb-10 relative text-white space-x-2 text-shadow font-poppins">
          Saiba qual é a quantidade ideal de alimento que seu pet deve ingerir por dia.
        </h1>
        <div className="flex justify-center calcbtn">
          <Button variant="contained" onClick={handleCalcularClick}>
            Calcular ({animalAtual})
          </Button>
        </div>

        {isModalIdadeOpen && (
          <ModalIdade
            closeModal={closeModalIdade}
            setIdadeEscolhida={setIdadeEscolhida}
            abrirModalCondicoes={openModalCondicoes}
            abrirModalFilhote={openModalFilhote}
          />
        )}

        {isModalCondicoesOpen && (
          <ModalCondicoes
            closeModal={closeModalCondicoes}
            calcular={calcularQuantidade}
            setCondicaoSelecionada={setCondicaoSelecionada}
            idadeEscolhida={idadeEscolhida}
            voltarModalCondicoes={voltarModalCondicoes} 
          />
        )}

        {isModalResultadosOpen && (
          <ModalResultados
            resultados={resultados}
            kcalPorDia={kcalPorDia}
            condicaoMensagem={`Condição Física: ${condicaoSelecionada}`}
            closeModal={closeModalResultados}
            voltarModalCondicoes={voltarModalCondicoes} 
            idadeEscolhida={idadeEscolhida}
          />
        )}

        {}
        {isModalFilhoteOpen && (
          <ModalFilhote
            closeModal={() => setIsModalFilhoteOpen(false)}
            calcularFilhote={calcularFilhote}
          />
        )}

        {isModalIdadeGatoOpen && (
          <ModalIdadeGato
            open={isModalIdadeGatoOpen}
            closeModal={closeModalIdadeGato}
            onSelectIdade={handleSelectIdadeGato}
          />
        )}

        {isModalPesoGatoOpen && (
          <ModalPesoGato
            open={isModalPesoGatoOpen}
            closeModal={closeModalPesoGato}
            idadeGato={idadeGato}
            onCalcular={handleCalcularGato}
          />
        )}

        {isModalResultadoGatoOpen && (
          <ModalResultadoGato
            resultado={resultadoGato}
            peso={pesoGato}
            idadeGato={idadeGato}
            closeModal={closeModalResultadoGato}
            voltar={voltarGato} 
          />
        )}
      </div>
    </div>
  );
};

export default Calculo;
