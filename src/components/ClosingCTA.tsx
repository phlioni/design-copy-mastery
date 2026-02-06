import { motion } from "framer-motion";
import { useState } from "react";
import { Check, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const benefits = [
  "20% de desconto exclusivo APRA",
  "Implementação em até 30 dias",
  "Treinamento completo para equipe",
  "Suporte prioritário 24/7",
  "Sem taxa de setup (contrato anual)",
  "Condições especiais de pagamento",
];

const ClosingCTA = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    recintos: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Envia os dados para a API Serverless (api/send-email.js)
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Solicitação enviada com sucesso!", {
          description: "Nossa equipe entrará em contato em breve.",
        });
        // Limpa o formulário apenas se deu certo
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          recintos: "",
        });
      } else {
        throw new Error("Erro no envio");
      }
    } catch (error) {
      console.error("Erro ao enviar:", error);
      toast.error("Erro ao enviar solicitação.", {
        description: "Por favor, tente novamente ou contate via telefone.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="fechamento"
      className="gradient-closing py-16 lg:py-24 relative overflow-hidden"
    >
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-4 leading-tight">
            Pronto para{" "}
            <span className="text-accent italic">transformar</span> sua
            operação?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Preencha o formulário abaixo para garantir as condições exclusivas
            APRA.
            <br className="hidden md:block" />
            Nossa equipe entrará em contato para finalizar sua adesão.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto items-start">
          {/* Coluna da Esquerda: Benefícios e Urgência */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col h-full justify-between"
          >
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-xl">
              <h3 className="font-heading font-bold text-primary-foreground text-xl mb-6 flex items-center gap-2">
                <span className="bg-accent/20 p-2 rounded-lg">
                  <Check className="w-5 h-5 text-accent" />
                </span>
                Ao aceitar esta proposta:
              </h3>

              <ul className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-3 text-primary-foreground/90 group"
                  >
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-accent group-hover:scale-150 transition-transform" />
                    <span className="text-base font-medium">{benefit}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="border-t border-white/10 pt-6 mt-auto">
                <div className="flex flex-col gap-4 text-primary-foreground/80 text-sm">
                  <a
                    href="tel:+551140003000"
                    className="flex items-center gap-3 hover:text-white transition-colors bg-white/5 p-3 rounded-xl hover:bg-white/10"
                  >
                    <Phone className="w-5 h-5 text-accent" />
                    <span className="font-semibold text-base">
                      (11) 4000-3000
                    </span>
                  </a>
                  <a
                    href="mailto:apra@mosten.com"
                    className="flex items-center gap-3 hover:text-white transition-colors bg-white/5 p-3 rounded-xl hover:bg-white/10"
                  >
                    <Mail className="w-5 h-5 text-accent" />
                    <span className="font-semibold text-base">
                      apra@mosten.com
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Urgência */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-6 bg-accent/10 border border-accent/20 rounded-2xl p-4 flex items-start gap-3"
            >
              <Clock className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <div>
                <p className="text-accent font-bold text-sm">
                  Condições especiais válidas até 28/02/2026.
                </p>
                <p className="text-primary-foreground/60 text-xs mt-1">
                  Associados APRA têm prioridade absoluta na fila de
                  implementação.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Coluna da Direita: Formulário */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-primary-foreground text-foreground rounded-3xl p-8 lg:p-10 shadow-2xl relative overflow-hidden"
          >
            {/* Faixa decorativa no topo do card */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-accent" />

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Fale com um especialista
              </h3>
              <p className="text-muted-foreground text-sm">
                Preencha seus dados e receba o contato do nosso time comercial.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground/80">
                  Nome Completo
                </Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Seu nome"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-background border-input focus:border-primary h-12"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground/80">
                    E-mail Corporativo
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="voce@empresa.com.br"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-background border-input focus:border-primary h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground/80">
                    Telefone
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(11) 99999-9999"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-background border-input focus:border-primary h-12"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-foreground/80">
                    Empresa
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Sua empresa"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="bg-background border-input focus:border-primary h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="recintos" className="text-foreground/80">
                    Qtd. Recintos
                  </Label>
                  <Input
                    id="recintos"
                    name="recintos" // Corrigido de "rencintos"
                    type="number"
                    placeholder="1"
                    required
                    value={formData.recintos}
                    onChange={handleChange}
                    className="bg-background border-input focus:border-primary h-12"
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full h-14 text-base font-bold gradient-cta text-accent-foreground hover:opacity-90 transition-all shadow-lg mt-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Enviando..."
                ) : (
                  <span className="flex items-center gap-2">
                    SOLICITAR CONTATO <Send className="w-4 h-4" />
                  </span>
                )}
              </Button>

              <p className="text-xs text-center text-muted-foreground mt-4">
                Ao enviar, você concorda com nossa Política de Privacidade.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClosingCTA;