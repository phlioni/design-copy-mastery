import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "O que é o ViSia?",
    answer:
      "O ViSia é uma plataforma de conferência remota que digitaliza inspeções de carga em tempo real, conectando fiscais, gestores e operação com segurança e rastreabilidade.",
  },
  {
    question: "O ViSia substitui CFTV/monitoramento?",
    answer:
      "Não. O ViSia não é monitoramento passivo. É conferência ativa, com acompanhamento ao vivo, fluxo orientado e registro de evidências.",
  },
  {
    question: "Preciso trocar todo o hardware para usar?",
    answer:
      "Não. O ViSia não exige troca obrigatória de hardware e pode ser adaptado à infraestrutura existente.",
  },
  {
    question: "O que fica registrado durante a conferência?",
    answer:
      "Ficam registrados data, hora, usuários envolvidos, logs da operação e evidências visuais, garantindo rastreabilidade completa.",
  },
  {
    question: "O sistema é seguro?",
    answer:
      "Sim. O ViSia possui segurança nativa, com criptografia, autenticação por certificado digital e controle de permissões.",
  },
  {
    question: "O fiscal precisa estar no local?",
    answer:
      "Não, nas conferências remotas. O acompanhamento acontece ao vivo e à distância, eliminando deslocamentos.",
  },
  {
    question: "O que exatamente fica registrado?",
    answer:
      "Cada conferência gera uma trilha digital completa, com registros de eventos, usuários, logs e imagens, pronta para auditoria.",
  },
  {
    question: "Em quais tipos de operação pode ser usado?",
    answer:
      "Portos, aeroportos, terminais alfandegados, centros logísticos e ambientes industriais, em áreas alfandegadas ou não.",
  },
  {
    question: "O sistema é modular?",
    answer:
      "Sim. Você ativa apenas os recursos que sua operação realmente precisa e escala conforme a demanda.",
  },
];

const FAQ = () => {
  return (
    <section id="duvidas" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground">
            Perguntas Frequentes
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border border-border rounded-xl px-6 data-[state=open]:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:text-primary py-5 text-sm md:text-base">
                  {i + 1}) {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
