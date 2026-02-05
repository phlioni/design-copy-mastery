import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Essencial",
    price: "R$ 1.990",
    period: "/ mês",
    popular: false,
    features: [
      "Até 5 câmeras simultâneas",
      "1 usuário administrador",
      "5 usuários operadores",
      "Armazenamento 30 dias",
      "Suporte por email",
      "Relatórios básicos",
    ],
    cta: "Quero Este Plano",
  },
  {
    name: "Profissional",
    price: "R$ 4.490",
    period: "/ mês",
    popular: true,
    features: [
      "Até 15 câmeras simultâneas",
      "3 usuários administradores",
      "Usuários operadores ilimitados",
      "Armazenamento 90 dias",
      "Suporte prioritário",
      "Relatórios avançados",
      "Integrações",
    ],
    cta: "Quero Este Plano",
  },
  {
    name: "Enterprise",
    price: "Sob consulta",
    period: "",
    popular: false,
    features: [
      "Câmeras ilimitadas",
      "Administradores ilimitados",
      "Usuários ilimitados",
      "Armazenamento personalizado",
      "Suporte dedicado",
      "Customizações",
      "API completa",
      "Multi-terminal",
      "SLA garantido",
    ],
    cta: "Falar com Consultor",
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
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Planos com condições especiais{" "}
            <span className="text-accent">APRA</span>
          </h2>
          <p className="text-primary-foreground/60 max-w-xl mx-auto">
            Todos os planos incluem implementação, treinamento e suporte.
            Descontos exclusivos para associados.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative rounded-2xl p-6 lg:p-8 flex flex-col ${
                plan.popular
                  ? "bg-primary-foreground border-2 border-accent shadow-2xl scale-105"
                  : "bg-primary-foreground/10 border border-primary-foreground/15"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="gradient-cta text-accent-foreground text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    Mais Popular
                  </span>
                </div>
              )}

              <h3
                className={`font-heading font-bold text-xl mb-2 ${
                  plan.popular ? "text-foreground" : "text-primary-foreground"
                }`}
              >
                {plan.name}
              </h3>

              <div className="mb-6">
                <span
                  className={`text-3xl font-heading font-extrabold ${
                    plan.popular ? "text-primary" : "text-primary-foreground"
                  }`}
                >
                  {plan.price}
                </span>
                {plan.period && (
                  <span
                    className={`text-sm ${
                      plan.popular
                        ? "text-muted-foreground"
                        : "text-primary-foreground/60"
                    }`}
                  >
                    {plan.period}
                  </span>
                )}
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check
                      className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                        plan.popular ? "text-primary" : "text-accent"
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        plan.popular
                          ? "text-foreground"
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
                className={`block text-center py-3 rounded-lg font-bold text-sm transition-opacity hover:opacity-90 ${
                  plan.popular
                    ? "gradient-cta text-accent-foreground"
                    : "border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/5"
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
