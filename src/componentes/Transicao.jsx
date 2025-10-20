import c1 from "../assets/c1.png"
import c2 from "../assets/c2.png"
import c3 from "../assets/c3.png"
import c4 from "../assets/c4.png"

const Transicao = () => {
    return (
        <section className="py-16 bg-gray-50" id="transicao-alimentar">
      <div className="container mx-auto px-8 text-center">
        {/* Título da Seção */}
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Transição alimentar</h2>

        {/* Cards de Transição */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-110 duration-500">
            <img src={c1} alt="Dia 1 e 2" className="w-full h-64 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex flex-col items-center justify-center text-center p-4">
              <h3 className="text-2xl font-semibold text-white mb-2">Dias 1 e 2</h3>
              <p className="text-white text-left">25% BEST FOR PET <br /> 75% Ração</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-110 duration-500">
            <img src={c2} alt="Dia 3 e 4" className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex flex-col items-center justify-center text-center p-4">
              <h3 className="text-2xl font-semibold text-white mb-2">Dias 3 e 4</h3>
              <p className="text-white text-left">50% BEST FOR PET <br /> 50% Ração</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-110 duration-500">
            <img src={c3} alt="Dia 5 e 6" className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex flex-col items-center justify-center text-center p-4">
              <h3 className="text-2xl font-semibold text-white mb-2">Dias 5 e 6</h3>
              <p className="text-white text-left">75% BEST FOR PET <br /> 25% Ração</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-110 duration-500">
            <img src={c4} alt="Dia 7" className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex flex-col items-center justify-center text-center p-4">
              <h3 className="text-2xl font-semibold text-white mb-2">Dia 7</h3>
              <p className="text-white">100% BEST FOR PET</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}

export default Transicao;