function Hero() {
  return (
    <section className="relative h-screen overflow-hidden bg-black">
      {/* Imagem de fundo */}
      <div className="absolute inset-0 z-0">
        <img
          src="/img/hero.jpg"
          alt=""
          className="w-full h-full object-cover opacity-90"
        />
        {/* Gradiente sobre a imagem */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80"></div>
      </div>

      {/* Conteúdo / Scroll down */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
          />
        </svg>
      </div>
    </section>
  );
}

export default Hero;
