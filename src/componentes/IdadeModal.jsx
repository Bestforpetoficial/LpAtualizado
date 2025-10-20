import React, { useState } from "react";
import { Checkbox, CircularProgress, FormControlLabel } from "@mui/material";
import { IoIosCheckmarkCircle } from "react-icons/io";

// Ícones ou imagens representando cada categoria
import FilhoteIcon from "../assets/filhote.jfif"; 
import AdultoIcon from "../assets/golden-adulto.jpeg";
import SeniorIcon from "../assets/senior.jpg";

const ModalIdade = ({ closeModal, setIdadeEscolhida, abrirModalCondicoes, abrirModalFilhote }) => {
  const [loading, setLoading] = useState(false);
  const [idade, setIdade] = useState(null);

  const handleIdadeSelect = (value) => {
    setIdade(value); 
  };

  const handleProseguir = () => {
    if (idade) {
      setLoading(true);
      setIdadeEscolhida(idade); 
      setTimeout(() => {
        setLoading(false);
        closeModal(); 

        if (idade === "filhote") {
          abrirModalFilhote(); 
        } else {
          abrirModalCondicoes(); 
        }
      }, 500); 
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Selecione a Idade do Seu Pet</h2>

        <div className="grid grid-cols-3 gap-4 mb-6">
          {/* Filhote */}
          <div className="text-center">
            <img src={FilhoteIcon} alt="Filhote" className="mx-auto w-24 h-24 rounded-full mb-2 shadow-black shadow-sm" />
            <p>Filhote</p>
            <FormControlLabel
              control={
                <Checkbox
                  checked={idade === "filhote"}
                  onChange={() => handleIdadeSelect("filhote")}
                  color="primary"
                  icon={<span className="w-5 h-5 rounded-full border-2 border-black"></span>} 
                  checkedIcon={<span className="w-5 h-5 rounded-full bg-[#7f1d1d]"></span>} 
                />
              }
              label="escolher"
            />
          </div>

          {/* Adulto */}
          <div className="text-center">
            <img src={AdultoIcon} alt="Adulto" className="mx-auto w-24 h-24 rounded-full mb-2 shadow-black shadow-sm" />
            <p>Adulto</p>
            <FormControlLabel
              control={
                <Checkbox
                  checked={idade === "adulto"}
                  onChange={() => handleIdadeSelect("adulto")}
                  color="primary"
                  icon={<span className="w-5 h-5 rounded-full border-2 border-black"></span>}
                  checkedIcon={<span className="w-5 h-5 rounded-full bg-[#7f1d1d]"></span>}
                />
              }
              label="escolher"
            />
          </div>

          {/* Sênior */}
          <div className="text-center">
            <img src={SeniorIcon} alt="Senior" className="mx-auto w-24 h-24 rounded-full mb-2 border shadow-black shadow-sm" />
            <p>Sênior</p>
            <FormControlLabel
              control={
                <Checkbox
                  checked={idade === "senior"}
                  onChange={() => handleIdadeSelect("senior")}
                  color="primary"
                  icon={<span className="w-5 h-5 rounded-full border-2 border-black"></span>}
                  checkedIcon={<span className="w-5 h-5 rounded-full bg-[#7f1d1d]"></span>}
                />
              }
              label="escolher"
            />
          </div>
        </div>

        <div className="text-center">
          <button
            className={`w-full py-2 px-4 ${!idade || loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#7f1d1d]'} text-white font-bold rounded-lg`}
            disabled={!idade || loading}
            onClick={handleProseguir}
          >
            {loading ? <CircularProgress size={24} /> : "Prosseguir"}
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

export default ModalIdade;
