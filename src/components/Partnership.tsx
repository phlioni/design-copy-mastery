import { motion } from "framer-motion";
import {
  Percent,
  Users,
  Settings,
  Headphones,
  Globe,
  RefreshCw,
} from "lucide-react";

const benefits = [
  {
    icon: Percent,
    title: "Condições Exclusivas",
    description:
      "Preços e condições comerciais exclusivas para associados APRA, fortalecendo o poder de negociação coletiva.",
  },
  {
    icon: Users,
    title: "Fortalece a Associação",
    description:
      "Ao adquirir através da APRA, você contribui para o fortalecimento da associação e amplia os benefícios para todos os membros.",
  },
  {
    icon: Settings,
    title: "Padronização de Processos",
    description:
      "Todos os associados utilizando a mesma plataforma, facilitando a comunicação e padronização de processos aduaneiros.",
  },
  {
    icon: Headphones,
    title: "Suporte Centralizado",
    description:
      "Canal de atendimento dedicado e treinamentos exclusivos para todos os associados APRA.",
  },
  {
    icon: Globe,
    title: "Gestão Integrada",
    description:
      "Tenha a visibilidade e controle de todas as inspeções em um único lugar.",
  },
  {
    icon: RefreshCw,
    title: "Atualizações Contínuas",
    description:
      "Acesso prioritário a novas funcionalidades desenvolvidas com base no feedback dos associados.",
  },
];

const Partnership = () => {
  return (
    <section id="parceria" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <img src="/images/logo-apra.png" alt="Logo APRA" className="w-52 h-16 object-contain" />
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading  text-foreground mb-4">
            A parceria <span className="font-bold">APRA + Mosten</span> entrega condições exclusivas.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mais do que tecnologia, essa parceria fortalece a cadeia logística e
            aduaneira com padronização, suporte e evolução contínua.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/20 transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <a
            href="#fechamento"
            className="inline-flex gradient-cta text-accent-foreground px-10 py-4 rounded-full text-base font-bold hover:opacity-90 transition-opacity shadow-lg"
          >
            CONFERIR OFERTA
          </a>
          <p className="text-muted-foreground text-xl mt-4">
            Fale com um especialista e garanta condições especiais por tempo
            limitado.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Partnership;
