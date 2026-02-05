import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import heroWorker from "@/assets/hero-worker.jpg";

const bulletPoints = [
  "Até 70% de ganho em tempo",
  "Trilha de auditoria 100% completa",
  "Conferência digital em tempo real",
];

const HeroSection = () => {
  return (
    <section className="relative gradient-hero pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-primary-foreground/70 text-sm font-medium uppercase tracking-wider mb-4">
              Conferência remota para operações logísticas
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-primary-foreground leading-tight mb-6">
              Ganhe mais agilidade, rastreabilidade e controle da inspeção com o{" "}
              <span className="text-accent">ViSia</span>
            </h1>

            <ul className="space-y-3 mb-8">
              {bulletPoints.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
                  className="flex items-center gap-3 text-primary-foreground/90"
                >
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="font-medium">{item}</span>
                </motion.li>
              ))}
            </ul>

            <motion.a
              href="#fechamento"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="inline-flex gradient-cta text-accent-foreground px-8 py-4 rounded-lg text-base font-bold hover:opacity-90 transition-opacity animate-pulse-glow"
            >
              SOLICITE UMA PROPOSTA
            </motion.a>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-80 h-80 lg:w-[420px] lg:h-[420px]">
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-2xl" />
              <img
                src={heroWorker}
                alt="Profissional de logística usando ViSia"
                className="relative z-10 w-full h-full object-cover rounded-3xl shadow-2xl"
              />
            </div>

            {/* ViSia badge */}
            <div className="absolute bottom-4 right-4 lg:bottom-8 lg:right-0 z-20 bg-background/95 backdrop-blur-sm rounded-xl px-5 py-3 shadow-lg">
              <span className="text-sm text-muted-foreground">○</span>{" "}
              <span className="font-heading font-bold text-primary text-lg">
                ViSia
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
