import React, { useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import raquel from "../assets/raquel-removebg-preview.png";
import angelica from "../assets/angelica-removebg-preview.png";
import gabriel from '../assets/gabriel-removebg-preview.png';
import natalia from "../assets/natalia-removebg-preview.png";
import salute from "../assets/salute-removebg-preview.png";
import fernanda from "../assets/fernanda-removebg-preview.png"


const depoimentosIniciais = [
  {
    nome: "Raquel Santos",
    foto: raquel,
    avaliacao: "M-A-R-A-V-I-L-H-O-S-O! Meus cachorros adoram e claro, recomendo! Super prático, vem embalado super bem, bem homogeneo, com um cheiro incrível que dá vontade de comer também! Recomendo a Best for Pet!",
  },
  {
    nome: "Gabriel Guilherme",
    foto: gabriel,
    avaliacao: "Já alimentava minhas cadelas com alimentacao natural e mudamos a dieta delas para a Best for Pet, foi uma ótima experiencia. Atendimento personalizado e ótima qualidade do produto. Recomendo para todos.",
  },
  {
    nome: "Angelica Marques",
    foto: angelica,
    avaliacao: "Excelente super recomendo, minhas cachorrinhas amaram, o pelo ficou muito mais bonito, nao cai o tanto que caia, tenho uma idosinha que estava com dificuldade em comer a racao ricou anemica e a comida natural ajudou ela",
  },
];

const depoimentosAdicionais = [
  {
    nome: "Natalia de Paula Lopes e Silva",
    foto: natalia,
    avaliacao: "A comida é feita de acordo com a dieta prescrita, super bem embalada, minha cachorra ama! o atendimento é excelente rápido, equipe muito solicita! Recomendo!",
  },
  {
    nome: "Salute",
    foto: salute,
    avaliacao: "Um ótimo atendimento e comida para pet excelente !!! Tobias adora a comidinha feita pela BestFor Pet.",
  },
  {
    nome: "Fernanda Francabandiera",
    foto: fernanda,
    avaliacao: "Só tenho elogios e agradecimentos a Best for Pet. Minha cachorrinha tem paladar exigente e e renal, então enjoa muito facilmente das comidas e tem um cardápio um pouco mais restrito",
  },
];

const Depoimento = () => {
  const [mostrarMais, setMostrarMais] = useState(false);

  const depoimentos = mostrarMais ? [...depoimentosIniciais, ...depoimentosAdicionais] : depoimentosIniciais;

  const handleVerMais = () => {
    setMostrarMais(!mostrarMais);
  };

  return (
    <div className="p-6 bg-gray-100">
      <h2 className="text-3xl font-semibold text-center mb-8">
        O que nossos clientes dizem
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {depoimentos.map((depoimento, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 flex flex-col items-center"
          >
            <div className="text-4xl text-yellow-600 mb-4">
              <FaQuoteLeft />
            </div>
            <p className="text-center text-gray-700 italic mb-4">{`"${depoimento.avaliacao}"`}</p>
            <div className="flex flex-col items-center mt-4">
              <img
                src={depoimento.foto}
                alt={depoimento.nome}
                className="w-20 h-20 rounded-full border-4 border-white shadow-md"
              />
              <p className="mt-2 font-semibold text-lg text-gray-800">{depoimento.nome}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button
          onClick={handleVerMais}
          className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-6 rounded-lg transition-colors duration-300"
        >
          {mostrarMais ? "Ver Menos Avaliações" : "Ver Mais Avaliações"}
        </button>
      </div>
    </div>
  );
};

export default Depoimento;
