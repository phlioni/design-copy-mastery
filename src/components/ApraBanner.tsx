import { motion } from "framer-motion";

const ApraBanner = () => {
  return (
    <section className="gradient-apra-banner py-5">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 lg:px-8 text-center"
      >
        <h3 className="text-primary-foreground font-heading font-bold text-lg md:text-xl tracking-wide">
          CONDIÇÕES ESPECIAIS PARA{" "}
          <span className="text-accent">ASSOCIADOS APRA</span>
        </h3>
      </motion.div>
    </section>
  );
};

export default ApraBanner;
