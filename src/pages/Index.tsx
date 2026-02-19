import { useEffect } from "react";
import { Mail, Instagram } from "lucide-react";

/* ── Data ── */
const steps = [
  {
    number: "01",
    title: "Evaluación estratégica",
    desc: "Definimos el precio óptimo según el mercado actual y las condiciones reales del vehículo.",
  },
  {
    number: "02",
    title: "Presentación profesional",
    desc: "Fotografía, descripción estructurada y publicación en los canales correctos.",
  },
  {
    number: "03",
    title: "Gestión de interesados",
    desc: "Filtrado serio de compradores y negociación directa con respaldo profesional.",
  },
  {
    number: "04",
    title: "Cierre seguro",
    desc: "Acompañamiento completo hasta la formalización y transferencia del vehículo.",
  },
];

const reasons = [
  {
    title: "Comisión basada en resultados",
    desc: "Solo cobramos cuando tu vehículo se vende. Nuestro éxito depende del tuyo.",
  },
  {
    title: "Transparencia total",
    desc: "Te informamos de cada oferta, visita y decisión. Sin sorpresas.",
  },
  {
    title: "Gestión estructurada",
    desc: "Proceso claro y ordenado desde la evaluación hasta el cierre.",
  },
  {
    title: "Acompañamiento personalizado",
    desc: "Un equipo dedicado a tu caso, disponible en cada etapa del proceso.",
  },
];

/* ── Scroll-reveal hook ── */
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

/* ── Component ── */
const Index = () => {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-background text-foreground font-body">

      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          <span className="text-base font-bold tracking-widest uppercase">
            <span className="text-primary">INVERA</span>
            <span className="text-foreground">MOTORS</span>
          </span>
          <a
            href="mailto:contacto@inveramotors.com"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2 bg-primary text-primary-foreground text-sm font-medium tracking-wide hover:opacity-90 transition-opacity"
          >
            <Mail size={13} />
            Contactar
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="bg-background pt-32 pb-28 px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-8 animate-fade-in">
            Intermediación de vehículos · Colombia
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight mb-7 animate-fade-up">
            Intermediación profesional para la venta de vehículos
          </h1>
          <p className="text-muted-foreground text-lg font-light leading-relaxed mb-10 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Gestionamos la venta de tu carro o moto con estrategia, transparencia y acompañamiento completo.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <a
              href="mailto:contacto@inveramotors.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold tracking-wide text-sm hover:opacity-90 transition-opacity"
            >
              <Mail size={15} />
              Contactar ahora
            </a>
            <a
              href="https://instagram.com/inveramotors.co"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-primary text-primary font-semibold tracking-wide text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Instagram size={15} />
              Ver Instagram
            </a>
          </div>
        </div>
      </section>

      {/* ── DIVISOR ── */}
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="h-px bg-border" />
      </div>

      {/* ── CÓMO FUNCIONA ── */}
      <section className="bg-muted py-24 md:py-28 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 reveal">
            <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-4">Proceso</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              Cómo funciona
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`reveal reveal-delay-${i + 1} bg-muted p-8 flex flex-col gap-5`}
              >
                <span className="text-primary text-xs font-bold tracking-widest">{step.number}</span>
                <div className="w-6 h-px bg-primary" />
                <h3 className="text-foreground font-semibold text-base leading-snug tracking-tight">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── POR QUÉ INVERAMOTORS ── */}
      <section className="bg-background py-24 md:py-28 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 reveal">
            <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-4">Diferencial</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              Por qué Inveramotors
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-border">
            {reasons.map((reason, i) => (
              <div
                key={i}
                className={`reveal reveal-delay-${i + 1} p-8 border-b border-r border-border last:border-r-0 ${i >= 2 ? "border-b-0" : ""}`}
              >
                <div className="w-8 h-px bg-primary mb-6" />
                <h3 className="text-foreground font-semibold text-base tracking-tight mb-3">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL — fondo verde oscuro sólido ── */}
      <section className="bg-primary py-24 md:py-28 px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground tracking-tight leading-tight mb-8">
            ¿Quieres vender tu vehículo con respaldo profesional?
          </h2>
          <a
            href="mailto:contacto@inveramotors.com"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-primary-foreground text-primary font-semibold tracking-wide text-sm hover:opacity-90 transition-opacity"
          >
            <Mail size={15} />
            Escríbenos a contacto@inveramotors.com
          </a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-background border-t border-border py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="text-base font-bold tracking-widest uppercase mb-1">
              <span className="text-primary">INVERA</span>
              <span className="text-foreground">MOTORS</span>
            </p>
            <p className="text-muted-foreground text-sm">Intermediación de venta de vehículos</p>
          </div>

          <div className="flex flex-col gap-3 text-sm">
            <a
              href="mailto:contacto@inveramotors.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={13} />
              contacto@inveramotors.com
            </a>
            <a
              href="https://instagram.com/inveramotors.co"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram size={13} />
              @inveramotors.co
            </a>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-border">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Inveramotors · Colombia
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
