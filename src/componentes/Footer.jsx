import { PiBowlFoodDuotone } from "react-icons/pi";
import { IoLogoWhatsapp } from "react-icons/io";
import { CiDiscount1 } from "react-icons/ci";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { Button } from "@mui/material";
import { FaPhoneVolume } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="bg-gray-200">
            <div className="container mx-auto px-4 pb-5">
                {/* Seção de ícones com frases */}
                <div className="flex flex-wrap justify-center py-4 px-4">
                    <div className="flex flex-col sm:flex-row items-center border-b border-black/20 pb-2 mb-2 sm:mr-8 sm:mb-0">
                        <span><PiBowlFoodDuotone className="text-2xl" /></span>
                        <span className="ml-2 text-gray-700 text-xs font-semibold">Produtos frescos todo dia</span>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center border-b border-black/20 pb-2 mb-2 sm:mr-8 sm:mb-0">
                        <span><a href="https://api.whatsapp.com/send?phone=5519996042970&text=" target="_blank"><FaWhatsappSquare className="text-[#25d366] text-2xl" /></a></span>
                        <span className="ml-2 text-gray-700 text-xs font-semibold">Atendimento personalizado via Whatsapp </span>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center border-b border-black/20 pb-2 mb-2 sm:mr-8 sm:mb-0">
                        <span><CiDiscount1 className="text-2xl" /></span>
                        <span className="ml-2 text-gray-700 text-xs font-semibold">Desconto no plano mensal</span>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center border-b border-black/20 pb-2 mb-2 sm:mr-8 sm:mb-0">
                        <span><RiMoneyDollarCircleLine className="text-2xl" /></span>
                        <span className="ml-2 text-gray-700 text-xs font-semibold">Preços justos e acessíveis</span>
                    </div>
                </div>


                {/* Seção com o endereço e email */}
                <div className="flex flex-col items-center justify-center py-6 border-b border-gray-300">
                    <div className="text-center mb-4">
                        <p className="text-lg font-semibold text-gray-800">Endereço</p>
                        <a className="text-sm text-gray-600 hover:opacity-60" href="https://www.google.com/maps/@-22.8860832,-47.0550241,3a,75y,287.2h,90t/data=!3m7!1e1!3m5!1s6UF5E_kOqucD8A1fXn1Zcw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D0%26panoid%3D6UF5E_kOqucD8A1fXn1Zcw%26yaw%3D287.20102!7i16384!8i8192?coh=205410&entry=ttu&g_ep=EgoyMDI0MDgyMy4wIKXMDSoASAFQAw%3D%3D" target="_blank">Rua Lauro Vannucci, 118 Santa Cândida - Campinas/São Paulo</a>
                    </div>
                    <div className="text-center mb-4">
                        <p className="text-lg font-semibold text-gray-800">E-mail</p>
                        <p className="text-sm text-gray-600 hover:opacity-60">bestforpet@yahoo.com</p>
                    </div>
                    <div className="text-center mt-4 italic text-red-900 font-medium">
                        <p>"Alimentação natural é um investimento em AMOR, SAÚDE E LONGEVIDADE."</p>
                    </div>
                </div>

                {/* Seção do botão Fale Conosco */}
                <div className="flex justify-center mb-6 sm:mb-0 mt-2 falebtn">
                    <Button 
                        variant="contained"
                        className="w-full sm:w-auto text-white hover:bg-green-700 px-6 py-2 rounded-lg flex items-center justify-center"
                    >
                        <FaPhoneVolume className="mr-2" />
                        <a href="https://api.whatsapp.com/send?phone=5519996042970&text=" target="_blank" className="flex-1 text-center">Fale Conosco</a>
                    </Button>
                </div>

                {/* Seção de redes sociais e copyright */}
                <div className="flex flex-col sm:flex-row items-center justify-between mt-3 pt-3 pb-3">
                    <p className="mb-4 sm:mb-0 text-center sm:text-left text-gray-700">© Copyright 2025. All rights reserved ©</p>
                    <ul className="flex space-x-4 justify-center sm:justify-end">
                        <li>
                            <Link to="https://www.facebook.com/share/1gh83cNnqjXtToYa/?mibextid=LQQJ4d" target="_blank" className="flex items-center justify-center w-10 h-10 rounded-full border border-black/20 transition-all hover:bg-blue-600 hover:text-white">
                                <FaFacebook className="text-lg" />
                            </Link>
                        </li>
                        <li>
                            <Link to="https://api.whatsapp.com/send?phone=5519996042970&text=" target="_blank" className="flex items-center justify-center w-10 h-10 rounded-full border border-black/20 transition-all hover:bg-green-600 hover:text-white">
                                <IoLogoWhatsapp className="text-lg" />
                            </Link>
                        </li>
                        <li>
                            <Link to="https://www.instagram.com/bestforpetoficial?igsh=MXd2andhYjU2YzJ0eQ==" target="_blank" className="flex items-center justify-center w-10 h-10 rounded-full border border-black/20 transition-all hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 hover:bg-red-500 hover:text-white">
                                <AiFillInstagram className="text-lg" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
