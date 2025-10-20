import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import { IoIosCloseCircle } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";

const ModalResultadoGato = ({ resultado, peso, idadeGato, closeModal }) => {
  const [abaAtiva, setAbaAtiva] = useState("congelada");
  if (!resultado) return null;

  // Separa as dietas por tipo
  const dietasCongeladas = resultado.dietas.filter((d) => d.tipo === "congelada");
  const dietasPrateleira = resultado.dietas.filter((d) => d.tipo === "prateleira");

  // Verifica se há dietas de cada tipo
  const temCongelada = dietasCongeladas.length > 0;
  const temNaoCongelada = dietasPrateleira.length > 0;

  // Se a aba ativa não tiver dietas, muda automaticamente pra que existir
  useEffect(() => {
    if (abaAtiva === "congelada" && !temCongelada && temNaoCongelada) {
      setAbaAtiva("prateleira");
    } else if (abaAtiva === "prateleira" && !temNaoCongelada && temCongelada) {
      setAbaAtiva("congelada");
    }
  }, [temCongelada, temNaoCongelada, abaAtiva]);

  // Função pra renderizar as dietas
  const renderDietas = (lista) =>
    lista.map((dieta, index) => (
      <Card
        key={index}
        className={`shadow-md hover:shadow-lg transition-all duration-300 rounded-lg border ${
          dieta.tipo === "prateleira"
            ? "bg-orange-100 border-2 border-purple-400"
            : "bg-[#fef2f2] border-2 border-purple-400"
        }`}
      >
        <CardContent className="text-center">
          <Typography variant="h6" className="font-semibold text-gray-800">
            {dieta.nome}
          </Typography>
          <Typography variant="body2" className="text-gray-700">
            Quantidade diária:{" "}
            <span
              className={`font-bold ${
                dieta.tipo === "prateleira" ? "text-orange-700" : "text-[#7f1d1d]"
              }`}
            >
              {dieta.quantidadeGramas} g
            </span>
          </Typography>
        </CardContent>
      </Card>
    ));

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl p-8 w-full max-w-lg max-h-[85vh] overflow-y-auto shadow-2xl relative">
        {/* Cabeçalho */}
        <div className="flex justify-center items-center mb-4">
          <Typography variant="h5" className="font-bold text-black text-center">
            Resultado do Cálculo
          </Typography>
          <IoIosCloseCircle
            onClick={closeModal}
            className="text-3xl text-red-600 cursor-pointer absolute right-4 top-4 hover:scale-110 transition-transform"
          />
        </div>

        {/* Dados do gato */}
        <div className="mb-6 text-center">
          <Typography variant="body1" className="text-gray-700">
            Idade: <strong>{idadeGato?.label}</strong>
          </Typography>
          <Typography variant="body1" className="text-gray-700">
            Peso: <strong>{peso} kg</strong>
          </Typography>
        </div>

        {/* kcal */}
        <div className="text-center my-6">
          <Typography variant="body1" className="text-gray-700">
            O seu Pet deve consumir:
          </Typography>
          <Typography variant="h4" className="font-bold text-[#7f1d1d]">
            {resultado.kcalPorDia} kcal/dia
          </Typography>
        </div>

        {/* Abas — só aparecem se houver dietas na categoria */}
        <div className="flex justify-center gap-4 mb-6">
          {temCongelada && (
            <button
              onClick={() => setAbaAtiva("congelada")}
              className={`px-4 py-2 rounded-md font-semibold transition-all ${
                abaAtiva === "congelada"
                  ? "bg-purple-600 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              Congelada
            </button>
          )}

          {temNaoCongelada && (
            <button
              onClick={() => setAbaAtiva("prateleira")}
              className={`px-4 py-2 rounded-md font-semibold transition-all ${
                abaAtiva === "prateleira"
                  ? "bg-purple-600 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              Não congelada
            </button>
          )}
        </div>

        {/* Lista de dietas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {abaAtiva === "congelada" && renderDietas(dietasCongeladas)}
          {abaAtiva === "prateleira" && renderDietas(dietasPrateleira)}
        </div>

        {/* Botões finais */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8">
          <Button
            variant="outlined"
            color="error"
            onClick={closeModal}
            className="w-full sm:w-auto rounded-xl"
          >
            Fechar
          </Button>

          <Button
            variant="contained"
            href="https://api.whatsapp.com/send?phone=5519996042970&text="
            color="success"
            target="_blank"
            className="w-full sm:w-auto bg-green-600 hover:bg-green-700 rounded-xl flex items-center justify-center gap-2"
          >
            Comprar pelo WhatsApp
            <IoLogoWhatsapp className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ModalResultadoGato;
