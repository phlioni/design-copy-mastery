import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import heroWorker from "@/assets/hero-worker-radio.png";

const bulletPoints = [
  "Até 70% de ganho em tempo",
  "Trilha de auditoria 100% completa",
  "Conferência digital em tempo real",
];

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] pt-20 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-foreground/40" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 h-full">
        <div className="grid lg:grid-cols-2 gap-8 items-end min-h-[520px] lg:min-h-[620px]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="pt-12 lg:pt-20 pb-12 lg:pb-20"
          >
            <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] xl:text-5xl font-heading font-bold text-primary-foreground leading-tight mb-5">
              Ganhe mais agilidade, rastreabilidade
              <br className="hidden md:block" /> e controle da inspeção com o{" "}
              <span className="relative inline-block">
                <span className="text-primary-foreground">ViSia</span>
                <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-primary rounded-full" />
              </span>
            </h1>

            <p className="text-primary-foreground/90 text-lg font-bold mb-6">
              Conferência remota para operações logísticas
            </p>

            {/* Bullet points in translucent purple box */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="inline-block bg-primary/40 backdrop-blur-sm rounded-xl px-6 py-4 mb-8"
            >
              <ul className="space-y-2">
                {bulletPoints.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-primary-foreground text-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <div>
              <motion.a
                href="#fechamento"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="inline-flex gradient-cta text-accent-foreground px-10 py-4 rounded-full text-lg font-bold hover:opacity-90 transition-opacity shadow-lg animate-pulse-glow"
              >
                SOLICITE UMA PROPOSTA
              </motion.a>
            </div>
          </motion.div>

          {/* Right - Worker image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:flex justify-end items-end self-end"
          >
            <img
              src={heroWorker}
              alt="Profissional de logística com rádio comunicador"
              className="relative z-10 w-[480px] xl:w-[540px] h-auto object-contain object-bottom"
            />
          </motion.div>
        </div>
      </div>

      {/* ViSia badge at bottom center */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="bg-background rounded-t-full px-10 pt-6 pb-2 shadow-lg">
          <div className="flex items-center gap-1.5">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="text-primary"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="2"
              />
              <circle cx="12" cy="12" r="4" fill="currentColor" />
            </svg>
            <span className="font-heading font-bold text-primary text-2xl">
              ViSia
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
