import { useEffect, useRef } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import { Mail, Instagram, CheckCircle, TrendingUp, Camera, Handshake } from "lucide-react";

/* ── Data ── */
const steps = [
  {
    number: "01",
    icon: CheckCircle,
    title: "Evaluación del vehículo",
    desc: "Analizamos el estado, historial y condiciones de tu carro o moto para establecer una valoración real.",
  },
  {
    number: "02",
    icon: TrendingUp,
    title: "Estrategia de precio",
    desc: "Definimos el precio ideal basado en el mercado actual para maximizar tu beneficio y garantizar una venta rápida.",
  },
  {
    number: "03",
    icon: Camera,
    title: "Publicación profesional",
    desc: "Creamos un aviso atractivo con fotografía y descripción optimizada en los canales correctos.",
  },
  {
    number: "04",
    icon: Handshake,
    title: "Negociación y cierre",
    desc: "Gestionamos las negociaciones y acompañamos todo el proceso hasta la firma y transferencia del vehículo.",
  },
];

const reasons = [
  {
    title: "Transparencia total",
    desc: "Nada oculto. Te informamos de cada paso, oferta y decisión durante todo el proceso.",
  },
  {
    title: "Gestión profesional",
    desc: "Nos encargamos de todo: publicación, visitas, pruebas y documentación.",
  },
  {
    title: "Comisión basada en resultados",
    desc: "Solo cobramos cuando tu vehículo se vende. Nuestro éxito depende del tuyo.",
  },
  {
    title: "Acompañamiento completo",
    desc: "Desde la primera evaluación hasta la entrega del dinero. Siempre a tu lado.",
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
      { threshold: 0.15 }
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
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-14 bg-primary/95 backdrop-blur-md border-b border-primary-muted/40">
        <span className="font-display text-xl font-bold tracking-wider">
          <span className="text-accent">INVERA</span><span className="text-primary-foreground">MOTORS</span>
        </span>
        <a
          href="mailto:contacto@inveramotors.com"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-sm bg-accent text-accent-foreground text-sm font-medium tracking-wide transition-opacity hover:opacity-90"
        >
          <Mail size={14} />
          Contactar
        </a>
      </nav>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 gradient-hero" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-24">
          <p className="text-accent text-sm font-medium tracking-[0.25em] uppercase mb-6 animate-fade-in">
            Intermediación de vehículos · Colombia
          </p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up">
            Vendemos tu vehículo con{" "}
            <span className="text-accent">estrategia,</span>{" "}
            seguridad y resultados.
          </h1>
          <p className="text-primary-foreground/70 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.15s" }}>
            Intermediación profesional de carros y motos en Colombia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <a
              href="mailto:contacto@inveramotors.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-sm bg-accent text-accent-foreground font-medium tracking-wide shadow-green transition-all hover:opacity-90 hover:scale-[1.02] text-base"
            >
              <Mail size={16} />
              Contactar ahora
            </a>
            <a
              href="https://instagram.com/inveramotors.co"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-sm border border-primary-foreground/30 text-primary-foreground font-medium tracking-wide transition-all hover:border-accent/60 hover:text-accent text-base bg-primary-foreground/5 backdrop-blur-sm"
            >
              <Instagram size={16} />
              Ver en Instagram
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: "1s" }}>
          <span className="text-primary-foreground/50 text-xs tracking-widest uppercase">Conoce más</span>
          <div className="w-px h-8 bg-gradient-to-b from-accent/70 to-transparent" />
        </div>
      </section>

      {/* ── CÓMO FUNCIONA ── */}
      <section className="py-24 md:py-32 px-6 md:px-14 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center reveal">
            <p className="text-accent text-xs font-medium tracking-[0.3em] uppercase mb-4">Proceso</p>
            <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground">
              Cómo funciona
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className={`reveal reveal-delay-${i + 1} relative group p-7 rounded-sm border border-border bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-green`}
                >
                  <div className="flex items-start justify-between mb-5">
                    <span className="font-display text-4xl font-bold text-primary/20">
                      {step.number}
                    </span>
                    <Icon size={20} className="text-accent mt-1" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── POR QUÉ INVERAMOTORS — fondo verde oscuro ── */}
      <section className="py-24 md:py-32 px-6 md:px-14" style={{ background: "var(--gradient-section)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="reveal">
              <p className="text-accent text-xs font-medium tracking-[0.3em] uppercase mb-4">Diferencial</p>
              <h2 className="font-display text-3xl md:text-5xl font-semibold text-primary-foreground leading-tight">
                Por qué elegir{" "}
                <span className="text-accent">Inveramotors</span>
              </h2>
              <p className="text-primary-foreground/65 mt-6 text-base leading-relaxed max-w-md">
                No somos una plataforma de clasificados. Somos tu aliado estratégico en cada etapa de la venta.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {reasons.map((reason, i) => (
                <div
                  key={i}
                  className={`reveal reveal-delay-${i + 1} p-6 rounded-sm border border-primary-foreground/10 bg-primary-foreground/5 transition-all duration-300 hover:border-accent/40 group`}
                >
                  <div className="w-8 h-0.5 bg-accent mb-4 transition-all group-hover:w-12" />
                  <h3 className="font-display text-base font-semibold text-primary-foreground mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-primary-foreground/60 text-sm leading-relaxed">
                    {reason.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL — blanco ── */}
      <section className="py-24 md:py-32 px-6 md:px-14 bg-background">
        <div className="max-w-3xl mx-auto text-center reveal">
          <div className="inline-block px-4 py-1.5 rounded-full border border-primary/25 text-accent text-xs tracking-widest uppercase mb-8">
            Sin complicaciones
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            ¿Quieres vender tu vehículo sin complicaciones?
          </h2>
          <p className="text-muted-foreground text-base mb-10 max-w-xl mx-auto">
            Escríbenos y cuéntanos sobre tu vehículo. Te respondemos en menos de 24 horas.
          </p>
          <a
            href="mailto:contacto@inveramotors.com"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-sm gradient-green text-primary-foreground font-semibold tracking-wide shadow-green transition-all hover:opacity-90 hover:scale-[1.02] text-base"
          >
            <Mail size={18} />
            Escríbenos ahora
          </a>
        </div>
      </section>

      {/* ── FOOTER — verde oscuro ── */}
      <footer className="bg-primary text-primary-foreground py-12 px-6 md:px-14">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-display text-lg font-bold tracking-wider mb-1">
              <span className="text-accent">INVERA</span><span className="text-primary-foreground">MOTORS</span>
            </p>
            <p className="text-primary-foreground/55 text-sm">Intermediación de venta de vehículos</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-5 text-sm">
            <a
              href="mailto:contacto@inveramotors.com"
              className="flex items-center gap-2 text-primary-foreground/60 hover:text-accent transition-colors"
            >
              <Mail size={14} />
              contacto@inveramotors.com
            </a>
            <span className="hidden sm:block text-primary-foreground/20">|</span>
            <a
              href="https://instagram.com/inveramotors.co"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary-foreground/60 hover:text-accent transition-colors"
            >
              <Instagram size={14} />
              @inveramotors.co
            </a>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-primary-foreground/10 text-center">
          <p className="text-primary-foreground/35 text-xs">
            © {new Date().getFullYear()} Inveramotors · Colombia
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
