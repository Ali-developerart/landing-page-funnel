import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { ArrowRight, CheckCircle, Star, Zap, Users, TrendingUp } from "lucide-react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission with UTM tracking
    const utmParams = new URLSearchParams(window.location.search);
    const leadData = {
      email,
      source: utmParams.get("utm_source") || "direct",
      medium: utmParams.get("utm_medium") || "organic",
      campaign: utmParams.get("utm_campaign") || "landing",
      timestamp: new Date().toISOString(),
    };
    
    console.log("Lead captured:", leadData);
    
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 500);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
        <div className="max-w-md text-center">
          <div className="mb-6 flex justify-center">
            <div className="bg-green-500/20 rounded-full p-4">
              <CheckCircle className="w-12 h-12 text-green-400" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">Perfekt!</h2>
          <p className="text-gray-300 mb-6">
            Danke für deine Anmeldung! Überprüfe dein E-Mail-Postfach für die nächsten Schritte.
          </p>
          <Button 
            onClick={() => {
              setSubmitted(false);
              setEmail("");
            }}
            className="bg-purple-600 hover:bg-purple-700"
          >
            Zurück zur Seite
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            ✨ GrowthLab
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#benefits" className="hover:text-purple-400 transition">Vorteile</a>
            <a href="#features" className="hover:text-purple-400 transition">Features</a>
            <a href="#testimonials" className="hover:text-purple-400 transition">Bewertungen</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-2 bg-purple-500/20 rounded-full border border-purple-500/50">
              <span className="text-sm font-semibold text-purple-300">🚀 Jetzt verfügbar</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Skaliere dein Business mit
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                intelligenten Funnels
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Lerne die exakten Strategien, die 7-stellige Unternehmen nutzen, um ihre Conversion-Raten zu verdreifachen – ohne teure Agenturen.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg font-semibold rounded-lg"
              >
                Jetzt Zugang erhalten <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-purple-500/50 text-white hover:bg-purple-500/10 px-8 py-6 text-lg font-semibold rounded-lg"
              >
                Kostenlose Demo
              </Button>
            </div>

            {/* Social proof */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 border-2 border-slate-900"></div>
                  ))}
                </div>
                <span>500+ Coaches vertrauen uns</span>
              </div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
                <span>4.9/5 Bewertung</span>
              </div>
            </div>
          </div>

          {/* Hero Image/Mockup */}
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl border border-purple-500/30 p-8 backdrop-blur-sm">
              <div className="bg-slate-800 rounded-lg p-6 shadow-2xl">
                <div className="space-y-4">
                  <div className="h-3 bg-purple-500/30 rounded w-3/4"></div>
                  <div className="h-3 bg-purple-500/20 rounded w-1/2"></div>
                  <div className="grid grid-cols-3 gap-4 mt-6">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="h-20 bg-purple-500/10 rounded"></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Warum GrowthLab?</h2>
            <p className="text-gray-400 text-lg">Die Werkzeuge, die Top-Performer nutzen</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Blitzschnelle Umsetzung",
                description: "Starten Sie in unter 30 Minuten. Keine technischen Kenntnisse erforderlich."
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "3x höhere Conversions",
                description: "Bewährte Strategien, die durchschnittlich 300% mehr Leads generieren."
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Community Support",
                description: "Exklusiver Zugang zu einer Community von 500+ erfolgreichen Unternehmern."
              }
            ].map((benefit, i) => (
              <Card key={i} className="bg-slate-700/50 border-purple-500/30 p-8 hover:border-purple-500/60 transition group">
                <div className="text-purple-400 mb-4 group-hover:scale-110 transition">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Vollständig ausgestattete Plattform</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {[
                "Drag-and-Drop Funnel Builder",
                "A/B Testing Tools",
                "Email Automation",
                "Analytics Dashboard",
                "Zapier Integration",
                "24/7 Support"
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-purple-500/30 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-purple-400" />
                  </div>
                  <span className="text-lg">{feature}</span>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl border border-purple-500/30 p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">📊</div>
                <p className="text-gray-400">Dashboard Preview</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Was unsere Nutzer sagen</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah M.",
                role: "Business Coach",
                text: "Mit GrowthLab habe ich meine Leads um 250% erhöht. Absolut empfehlenswert!"
              },
              {
                name: "Michael K.",
                role: "Entrepreneur",
                text: "Die beste Investition für mein Business. ROI innerhalb von 2 Wochen!"
              },
              {
                name: "Lisa T.",
                role: "Consultant",
                text: "Einfach zu bedienen und unglaublich mächtig. Genau das, was ich brauchte."
              }
            ].map((testimonial, i) => (
              <Card key={i} className="bg-slate-700/50 border-purple-500/30 p-6">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((j) => (
                    <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
        
        <div className="max-w-2xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Bereit zu starten?</h2>
            <p className="text-gray-300 text-lg mb-8">
              Tritt 500+ erfolgreichen Unternehmern bei und skaliere dein Business heute.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-8 border border-purple-500/30">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">E-Mail Adresse</label>
                <Input
                  type="email"
                  placeholder="deine@email.de"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-slate-700/50 border-purple-500/30 text-white placeholder:text-gray-500"
                />
              </div>
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 font-semibold rounded-lg"
              >
                {loading ? "Wird verarbeitet..." : "Kostenlos Zugang erhalten"}
              </Button>
              <p className="text-xs text-gray-400 text-center">
                Wir respektieren deine Privatsphäre. Abmeldung jederzeit möglich.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-500/20 py-8 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">GrowthLab</h3>
              <p className="text-gray-400 text-sm">Die Plattform für intelligente Funnels.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Produkt</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-purple-400 transition">Features</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">Preise</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">Sicherheit</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Unternehmen</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-purple-400 transition">Blog</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">Kontakt</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">Impressum</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Rechtliches</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-purple-400 transition">Datenschutz</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">AGB</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-purple-500/20 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 GrowthLab. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

