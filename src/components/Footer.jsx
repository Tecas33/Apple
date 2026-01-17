

function Footer() {

    const sections = [
        { title: 'Comprar e Saber Mais', links: ['Comprar iPhone', 'Comprar iPad', 'Comprar Mac', 'Comprar Acessórios', 'Ofertas Especiais'] },
        { title: 'Suporte', links: ['Suporte ao iPhone', 'Suporte ao iPad', 'Suporte ao Mac', 'Status do Sistema', 'Recursos de Acessibilidade'] },
        { title: 'Apple', links: ['Sobre a Apple', 'Carreiras', 'Investidores', 'Eventos Corporativos', 'Contato com a Mídia'] },
        { title: 'Recursos Legais', links: ['Termos de Serviço', 'Política de Privacidade', 'Política de Cookies', 'Acessibilidade', 'Mapa do Site'] },
    ]

    const buttonLinks = [
        'politica de privacidade',
        'termos de uso',
        'vendas e reembolsos',
        'mapa do site'
    ]
    return (
        <footer className="bg-gray-900 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid  md:grid-cols-4 gap-8 mb-8">
                    {sections.map((section, index) => (
                        <div key={index} className="mb-6">
                            <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
                            <ul className="space-y-2 tet-sm text-gray-400">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <a href="#" className="text-gray-400 text-md hover:text-white transition-colors cursor-pointer">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <div className="px-8 py-4 border-t pt-6 border-gray-800">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 ">
                    <p className="text-sm text-gray-300">&copy; 2026 Iphone. Todos os direitos reservados.</p>
                    <div>
                        {buttonLinks.map((text, index) => (
                            <a key={index} href="#" className="text-gray-400 text-md hover:text-white transition-colors cursor-pointer mr-4">
                                {text}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;