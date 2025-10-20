import React, { useState } from "react";
import { Checkbox, FormControlLabel, CircularProgress } from "@mui/material";
import FilhoteIcon from "../assets/GatoFilhote.jfif";
import AdultoIcon from "../assets/GatoAdulto.png";
import SeniorIcon from "../assets/GatoIdoso.jpg";

const ModalIdadeGato = ({ open, closeModal, onSelectIdade }) => {
  const [idadeSelecionada, setIdadeSelecionada] = useState(null);
  const [loading, setLoading] = useState(false);

  const opcoes = [
    { id: "filhote", label: "Filhote", parametro: 111.6, imagem: FilhoteIcon },
    { id: "adulto", label: "Adulto", parametro: 168.4, imagem: AdultoIcon },
    { id: "senior", label: "Senior", parametro: 130, imagem: SeniorIcon },
  ];

  const handleIdadeSelect = (opcao) => {
    setIdadeSelecionada(opcao);
  };

  const handleProsseguir = () => {
    if (idadeSelecionada) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        onSelectIdade(idadeSelecionada);
      }, 500);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Selecione a Idade do Seu Gato</h2>

        <div className="grid grid-cols-3 gap-4 mb-6">
          {opcoes.map((opcao) => (
            <div key={opcao.id} className="text-center">
              <img
                src={opcao.imagem}
                alt={opcao.label}
                className="mx-auto w-24 h-24 rounded-full mb-2 shadow-black shadow-sm"
              />
              <p>{opcao.label}</p>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={idadeSelecionada?.id === opcao.id}
                    onChange={() => handleIdadeSelect(opcao)}
                    color="primary"
                    icon={<span className="w-5 h-5 rounded-full border-2 border-black"></span>}
                    checkedIcon={<span className="w-5 h-5 rounded-full bg-[#7f1d1d]"></span>}
                  />
                }
                label="escolher"
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            className={`w-full py-2 px-4 ${!idadeSelecionada || loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#7f1d1d]'} text-white font-bold rounded-lg`}
            disabled={!idadeSelecionada || loading}
            onClick={handleProsseguir}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : "Prosseguir"}
          </button>

          <div className="flex justify-between items-center mt-4">
            <button
              onClick={closeModal}
              className="py-2 px-4 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalIdadeGato;
