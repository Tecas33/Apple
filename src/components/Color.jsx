import { useState } from "react";

function Color()
{
    const colors = [
        { id:'blue', name: " Titanio azul", Image:'/img/iphone-blue.jpg', colorClasse: "bg-blue-500" },
        { id:'silver', name: "Titanio Natural", Image:'/img/iphone-silver.jpg', colorClasse: "bg-gray-300" },
        { id:'orange', name: " Titanio Laranja", Image:'/img/iphone-orange.jpg', colorClasse: "bg-orange-500" },
    ];

    const [selectedColor, setSelectedColor] = useState('blue');

    const models = [
        {  name: "Pro Max", screen: "6.7''", Storage: "512GB", camera: "48MP", battery: "5000mAh"     },
        {  name: "Pro", screen: "6.1''", Storage: "256GB", camera: "48MP", battery: "4000mAh"     },
    ]
    return (
        <section className="my-8 bg-black py-20 px-8" id="cores">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-5xl mb:text-6xl font-bold mb-4">Escolha sua cor favorita</h2>
                    <p className="text-gray-400">Quatro acabamentos em titanio lindos</p>
                </div>

            <div className="flex justify-center mb-12">
                <div className="relative w-full max-w-3xl">
                    <div className="relative flex items-center justify-center min-h-[500px]">
                        <img src={colors.find( color => color.id === selectedColor)?.Image} alt="Iphone 17" className="max-w-full max-h-[600px] mx-auto" />
                    </div>
                    <div className="absolute bottom-8 left-0 right-0 text-center">
                        <div className="px-8 py-8 rounded-full backdrop-blur-md bg-black/40 inline-block">
                            <h3 className="text-2xl font-semibold">{colors.find( color => color.id === selectedColor)?.name}</h3>
                        </div>
                    </div>
                </div>
            </div>


            <div className="flex justify-center items-center gap-8">
                {colors.map( (color) => (
                    <button 
                        key={color.id   }
                        onClick={() => setSelectedColor(color.id)}
                        className={`w-10 h-10 relative cursor-pointer transition-all duration-300 rounded-full ${color.colorClasse} border-2 ${selectedColor === color.id ? 'border-white' : 'border-transparent'} mx-2`}
                         >
                            {/* <div className={`w-10 h-10 rounded-full bg-white absolute top-0 left-0 ${selectedColor === color.id ? 'opacity-100' : 'opacity-0'} flex items-center justify-center`}>

                            </div> */}
                    </button>
                ))}
            </div>

            <div className="grid gap-8 mt-20 md:grid-cols-2">
                {models.map( (model, index) => (
                    <div key={index} className="bg-gradient-to-br from-gray-900 to-transparent rounded-3xl p-8  border border-gray-800">
                        <div className="text-4xl mb-4">📞</div>
                        <h3 className="text-2xl font-bold mb-3">{model.name}</h3>
                        <p className=" text-gray-400 mb-4">{model.screen}</p>

                        <ul className="space-y-2 text-gray-300">
                            <li>{model.Storage}</li>
                            <li>{model.camera   }</li>
                            <li>{model.battery}</li>
                        </ul>
                    </div>
                ))}
                </div>
            </div>

            <div className="text-center mt-16">
                <button className="bg-blue-800 hover:bg-blue-700 text-white px-12 py-4 text-lg font-medium transition-all duration-300 rounded-full mb-8 hover:scale-105 shadow-md shadow-blue-500/50 cursor-pointer">
                    Compre agora apartir de 9.999,00 R$
                </button>
                <p>
                    Ou em até 12X de 833,25 R$
                </p>
            </div>
         
        </section>
    );
}

export default Color;