import React, { useState } from "react";
import { Modal, Card, CardContent, Button, Typography, TextField } from "@mui/material";

const ModalPesoGato = ({ open, closeModal, idadeGato, onVoltar, onCalcular }) => {
  const [peso, setPeso] = useState("");
  const [resultadoPreview, setResultadoPreview] = useState(null);

  const calcularPreview = (valorPeso) => {
    const pesoNum = parseFloat(valorPeso);
    if (!isNaN(pesoNum)) {
      const baseKcal = Math.pow(pesoNum, 0.67) * 100;
      if (idadeGato?.parametro) {
        const grams = (baseKcal / idadeGato.parametro) * 100;
        setResultadoPreview({
          baseKcal: Number(baseKcal.toFixed(0)),
          gramsByAgrParam: Number(grams.toFixed(0)),
        });
      } else {
        setResultadoPreview(null);
      }
    }
  };

  const handleChangePeso = (e) => {
    const valor = e.target.value;
    setPeso(valor);
    calcularPreview(valor);
  };

  const handleCalcularClick = () => {
    const pesoNum = parseFloat(peso);
    if (isNaN(pesoNum) || pesoNum <= 0) {
      alert("Digite um peso válido (kg).");
      return;
    }

    const baseKcal = Math.pow(pesoNum, 0.67) * 100;

    // Definir dietas conforme idade
    let dietas = [];
    if (idadeGato?.id === "adulto") {
      dietas = [
        { nome: "Gato Adulto - Bovino Grain Free", tipo: "congelada", kcalPor100g: 111.6 },
        { nome: "MiauLícia", tipo: "prateleira", kcalPor100g: 130 },
      ];
    } else if (idadeGato?.id === "filhote") {
      dietas = [
        { nome: "Gato Filhote - Peixe Grain Free", tipo: "congelada", kcalPor100g: 168.4 },
      ];
    } else if (idadeGato?.id === "senior") {
      dietas = [
        { nome: "MiauLícia", tipo: "prateleira", kcalPor100g: 130 },
      ];
    }

    const dietasComQuantidade = dietas.map((d) => {
      const quantidadeG = (baseKcal / d.kcalPor100g) * 100;
      return {
        ...d,
        quantidadeGramas: Number(quantidadeG.toFixed(0)),
      };
    });

    const resultadoObj = {
      peso: pesoNum,
      kcalPorDia: Number(baseKcal.toFixed(0)),
      dietas: dietasComQuantidade,
    };

    onCalcular(resultadoObj);
  };

  return (
    <Modal open={open} onClose={closeModal} className="flex items-center justify-center">
      <Card className="w-[90%] max-w-md p-6 rounded-2xl shadow-2xl bg-white">
        <CardContent className="flex flex-col items-center">
          <Typography variant="h5" className="mb-4 font-bold text-gray-800">
            Informe o peso do seu gato
          </Typography>

          <Typography variant="body1" className="mb-6 text-gray-600">
            Tipo selecionado:{" "}
            <span className="font-semibold text-purple-700">
              {idadeGato?.label}
            </span>
          </Typography>

          <TextField
            label="Peso (kg)"
            type="number"
            value={peso}
            onChange={handleChangePeso}
            fullWidth
            variant="outlined"
            className="mb-6"
            inputProps={{ min: 0, step: "0.1" }}
          />

          {resultadoPreview && (
            <div className="text-center mb-4">
              <Typography variant="body1" className="text-gray-700">
                Prévia da quantidade recomendada:
              </Typography>
              <Typography variant="h6" className="font-bold text-purple-700">
                {resultadoPreview.gramsByAgrParam} g
              </Typography>
            </div>
          )}

          <div className="flex justify-between w-full mt-4">
            <Button variant="outlined" color="secondary" onClick={onVoltar}>
              Voltar
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleCalcularClick}
              disabled={!peso || isNaN(parseFloat(peso))}
              className="bg-purple-600 hover:bg-purple-700 rounded-xl"
            >
              Calcular
            </Button>
            <Button variant="outlined" color="error" onClick={closeModal}>
              Fechar
            </Button>
          </div>
        </CardContent>
      </Card>
    </Modal>
  );
};

export default ModalPesoGato;
