import { Switch, Route, Router as WouterRouter } from "wouter";
import { useEffect, useRef } from "react";
import { MapPin, Clock, Phone, Scissors, Quote, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("opacity-100", "translate-y-0");
              entry.target.classList.remove("opacity-0", "translate-y-8");
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`opacity-0 translate-y-8 transition-all duration-1000 ease-out ${className}`}
    >
      {children}
    </div>
  );
}

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-sm border-b border-border/50">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-serif text-2xl font-bold tracking-tight text-primary">Wilson</div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground/80">
            <a href="#filosofia" className="hover:text-primary transition-colors">Filosofía</a>
            <a href="#servicios" className="hover:text-primary transition-colors">Servicios</a>
            <a href="#testimonios" className="hover:text-primary transition-colors">Reseñas</a>
            <a href="#contacto" className="hover:text-primary transition-colors">Contacto</a>
          </div>
          <Button asChild className="rounded-none px-6 font-serif">
            <a href="https://wa.me/34635765941" target="_blank" rel="noreferrer">
              Reservar cita
            </a>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[90vh] md:h-[100vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
          <img 
            src="/barber-hero.png" 
            alt="Interior de la Barbería Wilson" 
            className="w-full h-full object-cover object-right"
          />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
          <div className="max-w-xl">
            <FadeIn delay={100}>
              <span className="text-primary font-serif italic text-xl mb-4 block">Desde siempre, en tu barrio</span>
            </FadeIn>
            <FadeIn delay={300}>
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground leading-[1.1] mb-6">
                El corte perfecto,<br />sin prisas.
              </h1>
            </FadeIn>
            <FadeIn delay={500}>
              <p className="text-lg md:text-xl text-foreground/80 mb-10 font-light leading-relaxed max-w-md">
                Tradición, navaja y buena conversación. Wilson te ofrece el corte que pides, exactamente como lo pides.
              </p>
            </FadeIn>
            <FadeIn delay={700}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="rounded-none text-base px-8 py-6 font-serif bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                  <a href="https://wa.me/34635765941" target="_blank" rel="noreferrer">
                    Reservar ahora
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="rounded-none text-base px-8 py-6 font-serif border-primary text-primary hover:bg-primary/5" asChild>
                  <a href="#servicios">
                    Ver servicios
                  </a>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="filosofia" className="py-24 bg-card">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <Scissors className="w-10 h-10 mx-auto text-secondary mb-8" />
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-8">El oficio de toda la vida</h2>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed font-light">
              En la calle del Obispo Covarrubias no encontrarás neones ni música estridente. Aquí encontrarás a Wilson, unas tijeras precisas, sillones de cuero con historia y el inconfundible aroma a crema de afeitar. Llevamos décadas siendo la barbería de confianza del barrio de Delicias porque creemos en una sola cosa: el trabajo bien hecho.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-24 border-t border-border/50">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Servicios</h2>
              <div className="w-24 h-1 bg-secondary mx-auto"></div>
            </div>
          </FadeIn>

          <div className="max-w-3xl mx-auto">
            <div className="grid gap-6">
              {[
                { name: "Corte caballero", price: "15,00 €", time: "30 min" },
                { name: "Corte padre e hijo", price: "19,00 €", time: "55 min" },
                { name: "Corte jubilado", price: "12,00 €", time: "30 min" },
                { name: "Corte para niños", price: "12,00 €", time: "30 min" },
                { name: "Recorte de barba", price: "8,00 €", time: "15 min" },
                { name: "Corte cejas", price: "8,00 €", time: "30 min" },
                { name: "Rapado", price: "5,00 €", time: "30 min" },
              ].map((service, index) => (
                <FadeIn key={index} delay={index * 100}>
                  <div className="flex items-end justify-between group hover:bg-card p-4 transition-colors rounded-sm -mx-4">
                    <div>
                      <h3 className="text-xl font-serif font-semibold text-foreground group-hover:text-primary transition-colors">{service.name}</h3>
                      <p className="text-sm text-foreground/60 mt-1">{service.time}</p>
                    </div>
                    <div className="flex-grow border-b-2 border-dotted border-border mx-6 mb-2"></div>
                    <div className="text-xl font-serif font-bold text-primary">{service.price}</div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Break */}
      <section className="py-32 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">Un buen corte de pelo es la mejor carta de presentación.</h2>
            <Button size="lg" className="rounded-none bg-secondary hover:bg-secondary/90 text-secondary-foreground font-serif text-lg px-10 py-6" asChild>
              <a href="https://wa.me/34635765941" target="_blank" rel="noreferrer">Pide tu turno hoy</a>
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonios" className="py-24 bg-card">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Lo que dicen en el barrio</h2>
              <div className="w-24 h-1 bg-secondary mx-auto"></div>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { text: "Llevo años viniendo y no cambiaría de barbería por nada.", author: "Miguel A." },
              { text: "Siempre recibo exactamente el corte que pido. Wilson es un maestro.", author: "Carlos R." },
              { text: "Una barbería de confianza de toda la vida. Siempre limpio y buen trato.", author: "Fernando T." },
              { text: "Muy profesional y trato muy cercano. Te hace sentir en casa.", author: "Javier M." },
              { text: "Servicio excelente y muy buen resultado con la barba.", author: "Antonio G." },
              { text: "El mejor corte de Delicias. Sin prisas y con dedicación.", author: "David S." },
            ].map((testimonial, index) => (
              <FadeIn key={index} delay={index * 150} className="bg-background p-8 border border-border/50 relative">
                <Quote className="absolute top-6 right-6 w-8 h-8 text-muted/50" />
                <div className="flex gap-1 text-secondary mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-foreground/80 font-light italic mb-6">"{testimonial.text}"</p>
                <p className="font-serif font-bold text-primary">— {testimonial.author}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section id="contacto" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <FadeIn>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-10">Visítanos</h2>
              </FadeIn>
              
              <div className="space-y-10">
                <FadeIn delay={100} className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-foreground mb-2">Dirección</h3>
                    <p className="text-foreground/80 font-light">Calle del Obispo Covarrubias, 7<br />Delicias, 50005 Zaragoza</p>
                  </div>
                </FadeIn>

                <FadeIn delay={200} className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div className="w-full">
                    <h3 className="text-xl font-serif font-bold text-foreground mb-4">Horario</h3>
                    <div className="space-y-2 text-foreground/80 font-light">
                      <div className="flex justify-between border-b border-border/50 pb-2">
                        <span>Lunes</span>
                        <span>10:00 – 21:00</span>
                      </div>
                      <div className="flex justify-between border-b border-border/50 pb-2">
                        <span>Martes – Sábado</span>
                        <span className="text-right">10:00 – 14:00<br />16:30 – 21:00</span>
                      </div>
                      <div className="flex justify-between pt-2">
                        <span>Domingo</span>
                        <span className="text-primary font-medium">Cerrado</span>
                      </div>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={300} className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-foreground mb-2">Contacto</h3>
                    <p className="text-muted-foreground mb-3">635 76 59 41</p>
                    <a href="https://wa.me/34635765941" className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-2 group">
                      Reservar por WhatsApp
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </FadeIn>
              </div>
            </div>

            <FadeIn delay={400} className="h-[500px] bg-muted w-full relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2981.650630768912!2d-0.903746!3d41.6416035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5914c6c19f5e1f%3A0x6b77c5d3505c8d6!2sC.%20del%20Obispo%20Covarrubias%2C%207%2C%2050005%20Zaragoza%2C%20Spain!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
                className="absolute inset-0 w-full h-full border-0 grayscale opacity-80 mix-blend-multiply hover:grayscale-0 hover:opacity-100 hover:mix-blend-normal transition-all duration-700"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de Barbería Wilson"
              ></iframe>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div>
            <div className="font-serif text-3xl font-bold mb-2">Barbería Wilson</div>
            <p className="text-primary-foreground/60 font-light">Maestros barberos en Zaragoza.</p>
          </div>
          <div className="text-sm text-primary-foreground/40">
            &copy; {new Date().getFullYear()} Barbería Wilson. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <Switch>
        <Route path="/" component={Home} />
        <Route>
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-2xl font-serif text-primary mb-4">Página no encontrada</h1>
              <Button asChild>
                <a href="/">Volver al inicio</a>
              </Button>
            </div>
          </div>
        </Route>
      </Switch>
    </WouterRouter>
  );
}

export default App;
