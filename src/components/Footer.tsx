const Footer = () => {
  return (
    <footer className="bg-foreground py-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm font-heading font-bold text-primary-foreground/80">
              mosten
            </span>
            <span className="text-sm font-heading font-bold text-accent">
              ViSia
            </span>
          </div>

          <p className="text-primary-foreground/50 text-xs text-center">
            Condições válidas até 28/02/2026. Valores sujeitos a análise. Taxa
            de setup inclusa para contratos anuais.
          </p>

          <p className="text-primary-foreground/40 text-xs">
            © {new Date().getFullYear()} Mosten. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
