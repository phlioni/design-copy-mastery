import { motion } from "framer-motion";

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
              Como funciona
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mb-6">
              Na prática,{" "}
              <span className="text-gradient-purple">funciona assim:</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4 text-base md:text-lg">
              A inspeção é digitalizada com câmeras posicionadas na zona de
              operação. Pela plataforma web, fiscais e gestores agendam a
              conferência e acompanham o operador <span className="text-foreground font-medium">ao vivo</span>,
              seguindo um fluxo digital orientado.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 text-base md:text-lg">
              Durante a sessão, são registradas evidências visuais e logs em
              tempo real, garantindo rastreabilidade e auditoria completa.
            </p>
            <a
              href="#fechamento"
              className="inline-flex gradient-cta text-accent-foreground px-8 py-3.5 rounded-3xl text-sm font-bold hover:opacity-90 transition-opacity shadow-lg"
            >
              AGENDAR PROPOSTA
            </a>
          </motion.div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src="/images/topo.png"
              alt="Terminal logístico com câmeras de inspeção"
              className="w-full rounded-2xl shadow-xl"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;