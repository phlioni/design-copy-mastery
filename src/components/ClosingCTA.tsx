import { motion } from "framer-motion";
import {
  Check,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

const benefits = [
  "20% de desconto exclusivo APRA",
  "Implementação em até 30 dias",
  "Treinamento completo para equipe",
  "Suporte prioritário 24/7",
  "Sem taxa de setup (contrato anual)",
  "Condições especiais de pagamento",
];

const ClosingCTA = () => {
  return (
    <section id="fechamento" className="gradient-closing py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Pronto para{" "}
            <span className="text-accent italic">transformar</span> sua
            operação?
          </h2>
          <p className="text-primary-foreground/70 max-w-lg mx-auto">
            Escaneie o QR Code ou clique no botão abaixo para iniciar sua
            jornada com o ViSia.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/15 rounded-2xl p-8 lg:p-10">
            <h3 className="font-heading font-bold text-primary-foreground text-lg mb-6 text-center">
              Ao aceitar esta proposta você terá:
            </h3>

            <ul className="grid sm:grid-cols-2 gap-3 mb-8">
              {benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-center gap-2 text-primary-foreground/90"
                >
                  <Check className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="text-sm">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="text-center mb-8">
              <a
                href="mailto:apra@mosten.com"
                className="inline-flex gradient-cta text-accent-foreground px-10 py-4 rounded-lg text-base font-bold hover:opacity-90 transition-opacity animate-pulse-glow"
              >
                QUERO ADERIR À OFERTA APRA
              </a>
            </div>

            {/* Contact info */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-primary-foreground/70 text-sm">
              <a
                href="tel:+551140003000"
                className="flex items-center gap-2 hover:text-primary-foreground transition-colors"
              >
                <Phone className="w-4 h-4" />
                (11) 4000-3000
              </a>
              <a
                href="mailto:apra@mosten.com"
                className="flex items-center gap-2 hover:text-primary-foreground transition-colors"
              >
                <Mail className="w-4 h-4" />
                apra@mosten.com
              </a>
            </div>
          </div>

          {/* Urgency */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-8"
          >
            <p className="inline-flex items-center gap-2 text-accent font-semibold text-sm">
              <Clock className="w-4 h-4" />
              Condições especiais válidas até 28/02/2026.
            </p>
            <p className="text-primary-foreground/50 text-xs mt-2">
              Associados APRA têm prioridade na implementação.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClosingCTA;
