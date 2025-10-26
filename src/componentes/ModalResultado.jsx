import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";

const ModalResultados = ({
  closeModal,
  resultados,
  kcalPorDia,
  condicaoMensagem,
  voltarModalCondicoes,
  idadeEscolhida,
}) => {
  // Aba padrão
  const [abaAtiva, setAbaAtiva] = useState("naoCongelada");

  // ✅ Função robusta para identificar dietas não congeladas
  // ignora acentos, diferenças de caixa e pequenas variações de grafia
  const isNaoCongelada = (nome) => {
    const padrao = [
      "frangolicia",
      "frango licia",
      "frango lícia",
      "picadinho de carne",
      "lombinho gourmet",
      "miaulicia",
      "miaulícia",
    ];
    const nomeNormalizado = nome
      .normalize("NFD") // separa acentos
      .replace(/[\u0300-\u036f]/g, "") // remove acentos
      .toLowerCase(); // caixa baixa
    return padrao.some((d) => nomeNormalizado.includes(d));
  };

  // ✅ Detecta automaticamente se há dietas congeladas e não congeladas
  const temCongelada = resultados.some((r) => !isNaoCongelada(r.nome));
  const temNaoCongelada = resultados.some((r) => isNaoCongelada(r.nome));

  // ✅ Ajusta automaticamente a aba ativa conforme o tipo disponível
  useEffect(() => {
    if (!temCongelada && temNaoCongelada) {
      setAbaAtiva("naoCongelada");
    } else if (!temNaoCongelada && temCongelada) {
      setAbaAtiva("congelada");
    }
  }, [temCongelada, temNaoCongelada]);

  // ✅ Filtragem unificada (agora funciona para sênior também)
  const resultadosFiltrados = resultados.filter((r) =>
    abaAtiva === "naoCongelada"
      ? isNaoCongelada(r.nome)
      : !isNaoCongelada(r.nome)
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-lg max-h-[70vh] overflow-y-auto">
        {/* Cabeçalho */}
        <div className="flex justify-between items-center">
          <FaArrowAltCircleLeft
            onClick={voltarModalCondicoes}
            className="text-2xl cursor-pointer text-gray-600 hover:text-gray-800"
          />
          <IoIosCloseCircle
            onClick={closeModal}
            className="text-2xl text-red-800 cursor-pointer hover:text-red-900"
          />
        </div>

        <h2 className="text-2xl font-bold text-center mb-4">
          Resultado do Cálculo
        </h2>

        {/* kcal */}
        <div className="mb-6 text-center">
          <p className="text-lg font-medium">O seu pet deve consumir:</p>
          <p className="text-xl font-bold text-[#7f1d1d]">
            {kcalPorDia} kcal/dia
          </p>
        </div>

        {/* Condição */}
        <div className="mb-4">
          <p className="font-semibold text-red-600">{condicaoMensagem}</p>
        </div>

        {/* Botões de aba (não são exibidos se só há um tipo) */}
        {(temCongelada && temNaoCongelada) && (
          <div className="flex justify-center gap-4 mb-6">
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

            <button
              onClick={() => setAbaAtiva("naoCongelada")}
              className={`px-4 py-2 rounded-md font-semibold transition-all ${
                abaAtiva === "naoCongelada"
                  ? "bg-purple-600 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              Não congelada
            </button>
          </div>
        )}

        {/* Resultados filtrados */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {resultadosFiltrados.length > 0 ? (
            resultadosFiltrados.map((resultado, index) => (
              <Card
                key={index}
                className={`shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg ${
                  isNaoCongelada(resultado.nome)
                    ? "bg-purple-100"
                    : "bg-orange-200"
                }`}
              >
                <CardContent className="border-purple-400 border-2">
                  <Typography
                    variant="h6"
                    className="font-semibold text-center"
                  >
                    {resultado.nome}
                  </Typography>
                  <Typography variant="body2" className="text-center">
                    <span>Quantidade: {resultado.quantidadeDois}g</span>
                  </Typography>
                  {isNaoCongelada(resultado.nome) && (
                    <Typography
                      variant="caption"
                      className="block text-center text-purple-600 font-medium mt-1"
                    >
                      Dieta não congelada 🔥
                    </Typography>
                  )}
                </CardContent>
              </Card>
            ))
          ) : (
            <p className="text-center">Nenhuma dieta nesta categoria</p>
          )}
        </div>

        {/* Botão de WhatsApp */}
        <div className="text-center mt-6">
          <Button
            variant="contained"
            color="success"
            href="https://api.whatsapp.com/send?phone=5519996042970&text="
            target="_blank"
            className="flex items-center gap-2"
          >
            Comprar pelo Whatsapp
            <IoLogoWhatsapp className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ModalResultados;
