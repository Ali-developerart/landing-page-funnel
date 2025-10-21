import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Zap, 
  Users, 
  TrendingUp,
  Sparkles,
  Shield,
  Rocket,
  Target,
  Award,
  Clock
} from "lucide-react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
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
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 flex items-center justify-center px-4">
        <div className="max-w-md text-center">
          <div className="mb-6 flex justify-center animate-bounce">
            <div className="bg-gradient-to-br from-green-500/30 to-emerald-500/30 rounded-full p-6 border border-green-500/50">
              <CheckCircle className="w-16 h-16 text-green-400" />
            </div>
          </div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-4">
            Perfekt! 🎉
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Danke für deine Anmeldung! Überprüfe dein E-Mail-Postfach für die nächsten Schritte.
          </p>
          <Button 
            onClick={() => {
              setSubmitted(false);
              setEmail("");
            }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-lg font-semibold"
          >
            Zurück zur Seite
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="border-b border-purple-500/20 backdrop-blur-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Rocket className="w-8 h-8 text-purple-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                WebFlow
              </span>
            </div>
            <div className="hidden md:flex gap-8">
              <a href="#features" className="text-gray-300 hover:text-white transition">Features</a>
              <a href="#benefits" className="text-gray-300 hover:text-white transition">Benefits</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition">Pricing</a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-block">
                  <span className="px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/50 text-purple-300 text-sm font-semibold flex items-center gap-2 w-fit">
                    <Sparkles className="w-4 h-4" />
                    Neu: AI-Powered Analytics
                  </span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  Baue deine{" "}
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                    perfekte Funnel
                  </span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Konvertiere mehr Besucher in zahlende Kunden mit unserer professionellen Funnel-Building-Plattform. Einfach. Effektiv. Mächtig.
                </p>
              </div>

              {/* CTA Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="deine@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 bg-slate-800/50 border-purple-500/30 focus:border-purple-500 rounded-lg px-4 py-3 text-white placeholder:text-gray-500"
                  />
                  <Button
                    type="submit"
                    disabled={loading}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 whitespace-nowrap transition-all hover:shadow-lg hover:shadow-purple-500/50"
                  >
                    {loading ? "Wird geladen..." : "Jetzt Starten"}
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
                <p className="text-sm text-gray-400">
                  ✓ Kostenlos • ✓ Keine Kreditkarte erforderlich • ✓ Sofort Zugriff
                </p>
              </form>

              {/* Social Proof */}
              <div className="flex items-center gap-6 pt-8 border-t border-purple-500/20">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 border-2 border-slate-950 flex items-center justify-center text-white font-bold text-sm"
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="font-semibold">2,500+ zufriedene Nutzer</p>
                  <p className="text-sm text-gray-400">Vertrauen uns für ihre Funnels</p>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="hidden md:flex items-center justify-center">
              <div className="relative w-full h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl blur-2xl"></div>
                <div className="absolute inset-4 bg-slate-800/50 rounded-xl border border-purple-500/30 backdrop-blur-sm flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <TrendingUp className="w-16 h-16 text-purple-400 mx-auto" />
                    <p className="text-gray-300">Konversionsrate</p>
                    <p className="text-4xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
                      +340%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Alles was du brauchst
            </h2>
            <p className="text-xl text-gray-400">
              Professionelle Tools für deine Funnel-Strategie
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Blitzschnell",
                desc: "Erstelle Funnels in Minuten, nicht Tagen"
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Hochkonvertierend",
                desc: "Optimiert für maximale Konversionsraten"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Lead-Management",
                desc: "Verwalte deine Leads intelligent"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Sicher",
                desc: "Enterprise-Grade Sicherheit"
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Analytics",
                desc: "Detaillierte Metriken und Insights"
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Premium Support",
                desc: "Dedizierter Support Team"
              }
            ].map((feature, i) => (
              <Card
                key={i}
                className="bg-slate-800/50 border-purple-500/30 hover:border-purple-500/60 p-6 transition-all hover:shadow-lg hover:shadow-purple-500/20 group"
              >
                <div className="text-purple-400 mb-4 group-hover:text-pink-400 transition">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="max-w-7xl mx-auto px-6 py-20">
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-2xl p-12">
            <h2 className="text-4xl font-bold mb-12">Warum WebFlow?</h2>
            
            <div className="space-y-8">
              {[
                "Verdopple deine Konversionsrate mit bewährten Funnel-Strategien",
                "Automatisiere dein Marketing und spare 10+ Stunden pro Woche",
                "Integriere mit Zapier, Email-Tools und CRM-Systemen",
                "Erhalte detaillierte Analytics und Conversion-Tracking",
                "24/7 Support von unserem Expert-Team"
              ].map((benefit, i) => (
                <div key={i} className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-200">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold mb-12 text-center">Was unsere Kunden sagen</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah M.",
                role: "Marketing Manager",
                text: "WebFlow hat meine Konversionsrate um 340% erhöht. Unglaublich!",
                rating: 5
              },
              {
                name: "Thomas K.",
                role: "E-Commerce Founder",
                text: "Das beste Tool für Funnel-Building. Einfach zu bedienen und sehr mächtig.",
                rating: 5
              },
              {
                name: "Lisa P.",
                role: "Digital Marketer",
                text: "Der Support ist fantastisch und die Ergebnisse sprechen für sich.",
                rating: 5
              }
            ].map((testimonial, i) => (
              <Card
                key={i}
                className="bg-slate-800/50 border-purple-500/30 p-6"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
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
        </section>

        {/* CTA Section */}
        <section id="pricing" className="max-w-7xl mx-auto px-6 py-20">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold mb-4">Bereit zu starten?</h2>
            <p className="text-xl text-white/90 mb-8">
              Tausende Marketer nutzen WebFlow um ihre Funnels zu optimieren
            </p>
            <Button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold flex items-center gap-2 mx-auto transition-all"
            >
              Jetzt kostenlos testen
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-purple-500/20 mt-20 py-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <p className="font-bold mb-4 flex items-center gap-2">
                  <Rocket className="w-5 h-5 text-purple-400" />
                  WebFlow
                </p>
                <p className="text-gray-400 text-sm">
                  Die beste Plattform für Funnel-Building
                </p>
              </div>
              <div>
                <p className="font-semibold mb-4">Produkt</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="#" className="hover:text-white transition">Features</a></li>
                  <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                  <li><a href="#" className="hover:text-white transition">Security</a></li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-4">Unternehmen</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="#" className="hover:text-white transition">Über uns</a></li>
                  <li><a href="#" className="hover:text-white transition">Blog</a></li>
                  <li><a href="#" className="hover:text-white transition">Kontakt</a></li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-4">Legal</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="#" className="hover:text-white transition">Datenschutz</a></li>
                  <li><a href="#" className="hover:text-white transition">Nutzungsbedingungen</a></li>
                  <li><a href="#" className="hover:text-white transition">Impressum</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-purple-500/20 pt-8 text-center text-gray-400 text-sm">
              <p>&copy; 2025 WebFlow. Alle Rechte vorbehalten.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

