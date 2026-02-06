import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const bulletPoints = [
  "Até 70% ganho em tempo",
  "Trilha de auditoria 100% completa",
  "Conferência digital em tempo real",
];

const HeroSection = () => {
  return (
    <section className="relative min-h-[700px] lg:min-h-[850px] pt-24 overflow-hidden flex items-center">
      {/* Background image - Plataforma */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/img-hero.png"
          alt="Plataforma ViSia"
          className="w-full h-full object-cover object-center"
          aria-hidden="true"
        />
        {/* Overlay para garantir leitura do texto sobre a imagem */}
        <div className="absolute inset-0 bg-foreground/30" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 h-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="py-12 lg:py-20 relative z-30"
          >
            {/* Título com peso extra (extrabold) */}
            <h1 className="text-4xl md:text-xl lg:text-[2.75rem] xl:text-5xl font-heading  text-primary-foreground leading-tight mb-6">
              Ganhe mais agilidade, rastreabilidade e controle da inspeção com o{" "}
              <span className="relative inline-block">
                <span className="text-primary-foreground">ViSia</span>
                <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-primary rounded-full" />
              </span>
            </h1>

            <p className="text-primary-foreground/90 text-lg md:text-xl font-bold mb-8">
              Conferência remota para operações logísticas
            </p>

            {/* Bullet points individuais - Fundo acompanha o texto */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mb-10"
            >
              <ul className="space-y-3">
                {bulletPoints.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-primary-foreground text-base font-medium bg-primary/40 backdrop-blur-md border border-primary/20 rounded-full px-6 py-2 w-fit"
                  >
                    <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0 shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <div className="relative z-40">
              <motion.a
                href="#fechamento"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                // ALTERAÇÃO AQUI: Adicionado 'hidden' (para mobile) e 'lg:inline-flex' (para desktop)
                className="hidden lg:inline-flex gradient-cta text-accent-foreground px-10 py-4 rounded-full text-lg font-bold hover:scale-105 transition-transform shadow-xl animate-pulse-glow"
              >
                SOLICITE UMA PROPOSTA
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column - Mantida vazia para preservar layout sem o worker */}
          <div className="hidden lg:block"></div>
        </div>
      </div>

      {/* ViSia badge at bottom center */}
      {/* Container absoluto flexível para garantir centralização perfeita independente da animação */}
      <div className="absolute bottom-0 left-0 w-full flex justify-center z-20 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="pointer-events-auto"
        >
          {/* rounded-t-full cria o semicírculo */}
          <div className="bg-background rounded-t-full px-10 pt-8 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] flex justify-center items-center">
            <img
              src="/images/logo-visia.png"
              alt="Plataforma ViSia"
              className="w-36 h-auto object-contain"
              aria-hidden="true"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;