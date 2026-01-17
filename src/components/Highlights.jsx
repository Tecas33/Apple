

function Higlights() {
    return (
        <section className="bg-black py-20 px-6" id="design">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold mb-4">Design Revulocionario</h2>
                    <p className="text-xl text-gray-400">Cada detalhe foi pensado para criar a melhor experiencia</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <div className="bg-gray-900 rounded-3xl p-8">
                        <img className="w-full rounded-2xl mb-4" src="../../public/img/titanium-design.jpg" alt="" />
                        <h3 className="font-bold mb-2 text-3xl">Titanio Premium</h3>
                        <p className="text-gray-300">Estrutura em titanio de grau aerospacial.  O smartphone mais forte e leve.</p>
                    </div>

                    <div className="bg-gray-900 rounded-3xl p-8">
                        <img className="w-full rounded-2xl mb-4" src="../../public/img/ios-features.jpg" alt="" />
                        <h3 className="font-bold mb-2 text-3xl">Ios 26</h3>
                        <p className="text-gray-300">O sistema operacional mais avançado da história.</p>
                    </div>

                </div>

                <div className="bg-gray-900 rounded-3xl p-12 mb-16">
                    <h3 className="font-bold mb-6 text-gradient text-4xl">A18 Pro</h3>
                    <p className="text-gray-300 mb-6">O chip mais rápido da história do iPhone.</p>
                    <img className="w-full rounded-2xl mb-4" src="../../public/img/chip-a18-pro.jpg" alt="" />
                    <ul className="space-y-3 text-gray-300">
                        <li>CPU 20% mais rapida</li>
                        <li>GPU 20% mais rapida</li>
                        <li>Neural Engine 20% mais rapida</li>
                        <li>Memoria 20% mais rapida</li>
                    </ul>
                </div>


                <div id="camera" className="text-center">
                    <h3 className="text-4xl font-bold mb-10">Sistema de camera pro avançado</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-gray-900 rounded-2xl p-8 cursor-pointer hover:scale-105 transition-all duration-300 hover:bg-gray-800">
                            <div className="text-4xl font-bold text-blue-600">48MP</div>
                            <h4 className="text-xl font-semibold mb-2">Principal</h4>
                            <p className="text-gray-400">sensor de imagem de 1/1.4 polegadas </p>
                        </div>
                        
                        <div className="bg-gray-900 rounded-2xl p-8 cursor-pointer hover:scale-105 transition-all duration-300 hover:bg-gray-800">
                            <div className="text-4xl font-bold text-orange-600">12MP</div>
                            <h4 className="text-xl font-semibold mb-2">Ultra wide</h4>
                            <p className="text-gray-400">campo de visão de 120 com modo noturno</p>
                        </div>

                        
                        <div className="bg-gray-900 rounded-2xl p-8 cursor-pointer hover:scale-105 transition-all duration-300 hover:bg-gray-800">
                            <div className="text-4xl font-bold text-blue-600">12MP</div>
                            <h4 className="text-xl font-semibold mb-2">Telephoto 5x</h4>
                            <p className="text-gray-400">Zoom ótico de 5x com estabilização de imagem óptica </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Higlights;