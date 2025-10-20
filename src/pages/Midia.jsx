import React, { useState } from 'react';
import ReactPlayer from 'react-player';

const videos = [
  {
    url: "https://www.youtube.com/watch?v=dkz6dCqgOoE&t=5s",
    titulo: "Conheça a Best for Pet"
  },
  {
    url: "https://www.youtube.com/watch?v=zp-t7SG5ryY",
    titulo: "ENTREVISTA COM TV RECORD - Jornal da TV Thathi Campinas 09/09/2022"
  },
  {
    url: "https://www.youtube.com/watch?v=48N31WzZeH4",
    titulo: "ENTREVISTA COM SBT - Programa 'Mundo Empresarial' 13/11/2022"
  },
  {
    url: "https://www.youtube.com/watch?v=8Xk9vx1Kj2U",
    titulo: "Entrevista TV Band - Mercado Pet"
  },
  {
    url: "https://www.youtube.com/watch?v=9lcDdkyWO_M",
    titulo: "Best for Pets - Entrevista ao Podcast Executivo"
  },
  {
    url: "https://www.youtube.com/watch?v=ITF8g-TLQeQ",
    titulo: "Conhece a nossa historia"
  }
];

const Midia = () => {
  // Estado para controlar se os vídeos adicionais estão visíveis
  const [mostrarMais, setMostrarMais] = useState(false);

  // Função que alterna entre mostrar ou esconder os vídeos adicionais
  const handleVerMais = () => {
    setMostrarMais(!mostrarMais);
  };

  return (
    <div className="p-6 bg-gray-900 text-white">
      <h2 className="text-3xl font-semibold text-center mb-8">
        Best for Pet na TV 
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Exibe os primeiros 3 vídeos (ou 3 se 'mostrarMais' for falso) */}
        {videos.slice(0, mostrarMais ? 6 : 3).map((video, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="relative w-full h-64 max-w-lg mx-auto">
              <ReactPlayer
                url={video.url}
                className="react-player"
                width="100%"
                height="100%"
                controls={true}
                playing={false}
                light={true}
              />
            </div>
            <p className="mt-4 text-center font-semibold text-lg">{video.titulo}</p>
          </div>
        ))}
      </div>

      {/* Botão para mostrar mais vídeos */}
      <div className="text-center mt-4">
        <button
          onClick={handleVerMais}
          className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-6 rounded-lg transition-colors duration-300"
        >
          {mostrarMais ? "Ver Menos Vídeos" : "Ver Mais Vídeos"}
        </button>
      </div>
    </div>
  );
};

export default Midia;
  