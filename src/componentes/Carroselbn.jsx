import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Natural from "../assets/natural.png";
import Pelo from "../assets/pelo-de-cachorro-0-1200x900.jpg";
import Saudavel from "../assets/saudavel.jfif";
import Conservante from "../assets/Sem-conservantes.png";
import Corante from "../assets/sem-corante.jfif";
import Controle from "../assets/controle.png";

const Carroselbn = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-4 py-12">
            <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-green-600 mb-8">
                Benefícios da Alimentação Natural
            </h2>

            <Swiper
                spaceBetween={30} 
                slidesPerView={3} 
                loop={true}
                autoplay={{ delay: 5000 }}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
                navigation={true}
                centeredSlides={true} 
                slideToClickedSlide={true}
                breakpoints={{
                    
                    375: {
                        slidesPerView: 1, 
                        spaceBetween: 10, 
                    },
                    768: {
                        slidesPerView: 2, 
                        spaceBetween: 20, 
                    },
                    1024: {
                        slidesPerView: 3, 
                        spaceBetween: 30, 
                    },
                }}
                modules={[Navigation, Pagination, Autoplay]}
                className="mySwiper"
            >
                {/* Slide 1 */}
                <SwiperSlide className="relative">
                    <img src={Pelo} alt="Benefício 1" className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px] object-cover rounded-lg shadow-lg" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white p-4 rounded-lg">
                        <div className='text-center space-y-3'>
                            <h3 className="text-2xl font-semibold text-yellow-400">Saudável</h3>
                            <p className="text-lg font-medium">Auxilia na prevenção de doenças</p>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide className="relative">
                    <img src={Saudavel} alt="Benefício 2" className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px] object-cover rounded-lg shadow-lg" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white p-4 rounded-lg">
                        <div className='text-center space-y-3'>
                            <h3 className="text-2xl font-semibold text-yellow-400">Sem Conservantes</h3>
                            <p className="text-lg font-medium">Aumenta a longevidade</p>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 3 */}
                <SwiperSlide className="relative">
                    <img src={Conservante} alt="Benefício 3" className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px] object-cover rounded-lg shadow-lg" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white p-4 rounded-lg">
                        <div className='text-center space-y-3'>
                            <h3 className="text-2xl font-semibold text-yellow-400">Sem Corantes</h3>
                            <p className="text-lg font-medium">Nutrição, saúde e bem-estar</p>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 4 */}
                <SwiperSlide className="relative">
                    <img src={Corante} alt="Benefício 4" className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px] object-cover rounded-lg shadow-lg" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white p-4 rounded-lg">
                        <div className='text-center space-y-3'>
                            <h3 className="text-2xl font-semibold text-yellow-400">Controle de Peso</h3>
                            <p className="text-lg font-medium">Porção diária customizada</p>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 5 */}
                <SwiperSlide className="relative">
                    <img src={Controle} alt="Benefício 5" className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px] object-cover rounded-lg shadow-lg" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white p-4 rounded-lg">
                        <div className='text-center space-y-3'>
                            <h3 className="text-2xl font-semibold text-yellow-400">Peles Saudáveis</h3>
                            <p className="text-lg font-medium">Pelo e pelagem saudáveis</p>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 6 */}
                <SwiperSlide className="relative">
                    <img src={Natural} alt="Benefício 6" className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px] object-cover rounded-lg shadow-lg" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white p-4 rounded-lg">
                        <div className='text-center space-y-3'>
                            <h3 className="text-2xl font-semibold text-yellow-400">Mais Umidade</h3>
                            <p className="text-lg font-medium">Maior hidratação do seu pet</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Carroselbn;
