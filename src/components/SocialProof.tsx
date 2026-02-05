import { motion } from "framer-motion";

const SocialProof = () => {
  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-muted-foreground text-lg mb-2">
            Terminais do mundo inteiro{" "}
            <span className="font-bold text-foreground">
              já modernizaram suas inspeções
            </span>
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4 text-sm leading-relaxed">
            Inspeções presenciais geram atraso, custo e brechas operacionais.
            Com o ViSia, a conferência acontece ao vivo, em ambiente digital e
            100% rastreável.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;
