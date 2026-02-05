import { motion } from "framer-motion";
import {
  Shield,
  Camera,
  CalendarClock,
  Building2,
  Puzzle,
  LayoutDashboard,
} from "lucide-react";
import featuresBg from "@/assets/features-bg.jpg";

const features = [
  {
    icon: Shield,
    title: "Segurança e Rastreabilidade",
    description:
      "Todas as conferências ficam registradas com data, hora, imagem e usuário responsável, oferecendo uma trilha completa para auditoria.",
  },
  {
    icon: Camera,
    title: "Evidências Visuais",
    description:
      "Geração de registros com evidências visuais e dados operacionais para rastreabilidade completa.",
  },
  {
    icon: CalendarClock,
    title: "Agendamento Inteligente",
    description:
      "Controle e parametrização de agendas para execução das inspeções, otimizando tempo e recursos.",
  },
  {
    icon: Building2,
    title: "Independência Institucional",
    description:
      "Liberdade total para implementação. Nossa solução não depende de filiações específicas.",
  },
  {
    icon: Puzzle,
    title: "Modularidade e Personalização",
    description:
      "Pague apenas pelo que usar. Nossa arquitetura modular permite ativar somente os recursos que sua operação realmente necessita.",
  },
  {
    icon: LayoutDashboard,
    title: "Sistema de Gestão Nativo",
    description:
      "Controle total na plataforma. Gerencie empresas, câmeras, permissões e usuários diretamente no sistema.",
  },
];

const Features = () => {
  return (
    <section
      id="beneficios"
      className="relative py-16 lg:py-24 overflow-hidden"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={featuresBg}
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-primary-dark/90" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-primary-foreground mb-4">
            <span className="text-accent">Tudo</span> o que sua operação precisa
            <br />
            para funcionar remotamente
          </h2>
          <p className="text-primary-foreground/60 text-sm">
            Segurança, evidência e auditoria, tudo no mesmo fluxo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-xl p-6 hover:bg-primary-foreground/10 transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-heading font-bold text-primary-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <a
            href="#fechamento"
            className="inline-flex gradient-cta text-accent-foreground px-8 py-3.5 rounded-lg text-sm font-bold hover:opacity-90 transition-opacity"
          >
            AGENDAR PROPOSTA
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
