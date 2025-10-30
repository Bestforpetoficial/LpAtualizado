import React, { useState } from "react";
import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";

const ModalCondicoes = ({ closeModal, calcular, setCondicaoSelecionada, idadeEscolhida }) => {
  const [peso, setPeso] = useState("");
  const [condicoes, setCondicoes] = useState({
    saudável: false,
    renal: false,
    gastrointestinais: false,
    hepatopatia: false,
    pancreatite: false,
    hiperlipidemia: false,
    cushing: false,
    obesidade: false,
    diabetico: false,
    oncológico: false,
    sarcopênico: false,
    disfuncaoCognitiva: false,
    peleSensivel: false,
    hipercalorica: false,
    crua: false,
  });

  const handleChangeCondicoes = (event) => {
    setCondicoes({
      ...condicoes,
      [event.target.name]: event.target.checked,
    });
  };
  
  const handlePesoChange = (e) => {
    // Substitui vírgula por ponto para garantir que o valor seja interpretado corretamente
    const pesoComPonto = e.target.value.replace(',', '.');
  
    // Para garantir que o valor inserido seja um número válido
    if (!isNaN(pesoComPonto) || pesoComPonto === "") {
      setPeso(pesoComPonto);
    }
  };

  const handleCalcular = () => {
    calcular(peso, condicoes);

    // Define a condição selecionada para ser usada no Modal de Resultados
    const condicoesSelecionadas = Object.keys(condicoes).filter(cond => condicoes[cond]);
    setCondicaoSelecionada(condicoesSelecionadas.join(", ") || "Sem condição física selecionada");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-8 w-full max-w-lg">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-center ml-14">Condição Física e Peso do Pet</h2>
        </div>

        <TextField
          label="Peso IDEAL do Pet (kg)"
          type="number"
          variant="outlined"
          fullWidth
          value={peso}
          onChange={handlePesoChange}
          className="mb-4"
        />

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-4 mt-2">Selecione a Condição Física do Pet:</h3>

          {Object.keys(condicoes)
            // 👇 Oculta a opção "crua" se for cachorro sênior
            .filter(cond => !(idadeEscolhida === "senior" && cond === "crua"))
            .map(cond => (
              <FormControlLabel
                key={cond}
                control={
                  <Checkbox
                    checked={condicoes[cond]}
                    onChange={handleChangeCondicoes}
                    name={cond}
                  />
                }
                label={
                  cond === "disfuncaoCognitiva"
                    ? "Disfunção Cognitiva"
                    : cond.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())
                }
              />
            ))}
        </div>
        
        <Button
          variant="contained"
          color="error"
          fullWidth
          onClick={handleCalcular}
          disabled={!peso || Object.values(condicoes).every(c => !c)}
        >
          Calcular
        </Button>

        <div className="flex justify-end sm:justify-start mt-4">
          <Button onClick={closeModal} variant="outlined" color="error" fullWidth>
            Fechar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ModalCondicoes;
