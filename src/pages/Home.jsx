import { Button } from "@mui/material";
import Homeimg from "../assets/cachorrogato.webp";
import { BsFillCupHotFill } from "react-icons/bs";
import { FaGears } from "react-icons/fa6";
import Ingredientes from "../assets/ingredientes.png";
import { FaBook } from "react-icons/fa";
import Transicao from "../componentes/Transicao";

const Home = () => {
    return (
        <div>
            {/* Seção Principal */}
            <section className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${Homeimg})` }}>
                <div className="absolute inset-0"></div>
                <div className="relative flex items-center justify-start h-full px-8 text-white space-y-6">
                    <div className="text-left">
                        <h4 className="text-4xl sm:text-5xl md:text-6xl font-bold text-red-600 drop-shadow-lg">
                            Bem-vindo à <br /> Best for Pet!
                        </h4>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-5">
                            Comida de verdade! <br /> Petiscos e dietas personalizadas <br /> para cães e gatos.
                        </h1>
                        <a href="https://api.whatsapp.com/send?phone=5519996042970&text=" id="home-btn" target="_blank" className="text-white bg-red-600 py-2 px-6 rounded-lg hover:bg-red-700">
                            Faça já seu pedido
                        </a>
                    </div>
                </div>
            </section>

            {/* Seção de "Por que as pessoas escolhem nossos produtos?" */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-8">
                    {/* Título da Seção */}
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-800">Por que as pessoas escolhem nossos produtos?</h2>
                    </div>

                    {/* Conteúdo com imagem e descrição */}
                    <div className="flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0">
                        {/* Imagem à esquerda (ocultar em telas pequenas) */}
                        <div className="w-full lg:w-1/2 relative mr-10 hidden lg:block">
                            <img src={Ingredientes} alt="Ingredientes" className="w-full h-full rounded-lg" />
                        </div>

                        {/* Texto à direita */}
                        <div className="w-full lg:w-1/2 text-left text-gray-800 space-y-10">
                            <div className="flex items-start space-x-4">
                                <div className="text-4xl">
                                    <BsFillCupHotFill className="text-2xl" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold">Preparo feito com cuidado e carinho</h4>
                                    <p className="text-gray-600 text-sm">
                                        Para o preparo das dietas, cozinhamos os ingredientes no vapor através do uso de forno combinado, que regula os parâmetros de temperatura e umidade ideais, mantendo o valor nutricional dos alimentos e realçando o sabor.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="text-4xl">
                                    <FaGears className="text-3xl" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold">Equipamentos de ponta</h4>
                                    <p className="text-gray-600 text-sm">
                                        Após a pesagem dos ingredientes e preparo das dietas, as embalagens são seladas a vácuo e colocadas no Ultracongelador para serem congeladas de forma rápida a fim de manter as propriedades organolépticas.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="text-4xl">
                                    <FaBook className="text-2xl" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold">Dietas desenvolvidas por especialistas</h4>
                                    <p className="text-gray-600 text-sm">
                                        Nossas dietas foram desenvolvidas por um veterinário especializado em Nutrologia Animal. São balanceadas e suplementadas, o que garante a ingestão diária necessária de vitaminas e minerais pelo seu patudo.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <Transicao />
        </div>
    );
}

export default Home;
