import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Standard",
    price: "R$ 2.300",
    period: "/ mês",
    popular: false,
    features: [
      "200 vistorias mensais inclusas",
      "Implantação: R$ 5.000,00",
      "Excedente: R$ 7,50 por vistoria",
      "Sem desconto APRA",
      "Acesso completo à plataforma",
    ],
    cta: "Quero Este Plano",
  },
  {
    name: "APRA Fidelidade 24",
    price: "R$ 1.750",
    period: "/ mês (1º ano)",
    popular: true,
    features: [
      "300 vistorias mensais inclusas",
      "Implantação: R$ 0,00 (Isento)",
      "2º ano: R$ 1.900/mês",
      "Excedente: R$ 7,00 por vistoria",
      "Fidelidade de 24 meses",
      "Melhor condição comercial",
    ],
    cta: "Garantir Oferta APRA",
  },
  {
    name: "APRA Flex 12",
    price: "R$ 1.900",
    period: "/ mês",
    popular: false,
    features: [
      "300 vistorias mensais inclusas",
      "Implantação: R$ 0,00 (Isento)",
      "Preço fixo de contrato",
      "Excedente: R$ 7,00 por vistoria",
      "Fidelidade de 1 ano",
    ],
    cta: "Quero Este Plano",
  },
];

const Pricing = () => {
  return (
    <section id="planos" className="gradient-pricing py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-6">
            Planos com condições especiais{" "}
            <span className="text-accent">APRA</span>
          </h2>
          <p className="text-primary-foreground/70 max-w-xl mx-auto text-lg">
            Todos os planos incluem treinamento e suporte.
            Descontos e isenção de setup exclusivos para associados.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative rounded-3xl p-8 flex flex-col transition-transform hover:-translate-y-2 ${plan.popular
                  ? "bg-primary-foreground border-2 border-accent shadow-2xl z-10 scale-105 lg:scale-110"
                  : "bg-primary-foreground/10 border border-primary-foreground/15 backdrop-blur-sm hover:bg-primary-foreground/15"
                }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-full text-center">
                  <span className="gradient-cta text-accent-foreground text-sm font-bold px-6 py-2 rounded-full inline-flex items-center gap-2 shadow-lg">
                    <Star className="w-4 h-4 fill-current" />
                    Melhor Escolha APRA
                  </span>
                </div>
              )}

              <h3
                className={`font-heading font-bold text-2xl mb-2 ${plan.popular ? "text-foreground" : "text-primary-foreground"
                  }`}
              >
                {plan.name}
              </h3>

              {/* Ajuste aqui: Flexbox com items-baseline para alinhar na mesma linha */}
              <div className="mb-8 flex items-baseline gap-1">
                <span
                  className={`text-4xl font-heading font-extrabold ${plan.popular ? "text-primary" : "text-primary-foreground"
                    }`}
                >
                  {plan.price}
                </span>
                {plan.period && (
                  <span
                    className={`text-sm font-medium ${plan.popular
                        ? "text-muted-foreground"
                        : "text-primary-foreground/60"
                      }`}
                  >
                    {plan.period}
                  </span>
                )}
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div
                      className={`mt-1 rounded-full p-0.5 ${plan.popular ? "bg-primary/10" : "bg-accent/20"
                        }`}
                    >
                      <Check
                        className={`w-3.5 h-3.5 ${plan.popular ? "text-primary" : "text-accent"
                          }`}
                      />
                    </div>
                    <span
                      className={`text-sm font-medium ${plan.popular
                          ? "text-foreground/80"
                          : "text-primary-foreground/80"
                        }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#fechamento"
                className={`block text-center py-4 rounded-xl font-bold text-sm transition-all shadow-md ${plan.popular
                    ? "gradient-cta text-accent-foreground hover:shadow-lg hover:opacity-95"
                    : "border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                  }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;