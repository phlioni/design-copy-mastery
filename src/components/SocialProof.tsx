import { motion } from "framer-motion";

const SocialProof = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto" // Aumentado para permitir que o texto estique
        >
          {/* Adicionado md:whitespace-nowrap para forçar uma linha em desktop */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground mb-6 md:whitespace-nowrap">
            Terminais do mundo <span className="text-foreground font-bold">todo</span>{" "}
            <span className="text-foreground font-bold">já modernizaram suas inspeções</span>
          </h2>

          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            Inspeções presenciais geram atraso, custo e brechas operacionais.
            <br className="hidden md:block" />
            Com o ViSia, a conferência acontece ao vivo, em ambiente digital e
            100% rastreável.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;