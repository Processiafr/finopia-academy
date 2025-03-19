"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  Calendar,
  MapPin,
  Coins,
  Coffee,
  Gamepad2,
  Utensils,
  TreePine,
  Award,
  ChevronRight,
  ArrowRight,
  Sparkles,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import RegistrationForm from "@/components/registration-form"
import NewsletterForm from "@/components/newsletter-form"

export default function LandingPage() {
  const [activeSection, setActiveSection] = useState<string>("hero")
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Fonction pour gérer le défilement animé
  const scrollToSection = (sectionId: string, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
    }
    
    const section = document.getElementById(sectionId)
    if (section) {
      // Ajout d'une classe pour indiquer que le défilement est en cours
      document.body.classList.add("is-scrolling");
      
      // Position actuelle et position cible
      const startPosition = window.scrollY;
      const targetPosition = section.getBoundingClientRect().top + window.scrollY;
      
      // Animation de défilement fluide avec une durée personnalisée
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
      
      // Mise à jour de la section active
      setActiveSection(sectionId);
      
      // Suppression de la classe après l'animation
      setTimeout(() => {
        document.body.classList.remove("is-scrolling");
      }, 1000); // Durée approximative de l'animation
    }
  }

  return (
    <div className="min-h-screen bg-white text-gray-800 overflow-hidden font-primary">
      {/* Floating navigation */}
      <div className="fixed top-10 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 bg-white shadow-lg rounded-full">
        <nav className="flex gap-6 text-sm font-medium">
          <a
            href="#hero"
            className={cn("transition-colors hover:text-[#20a29d]", activeSection === "hero" && "text-[#20a29d]")}
            onClick={(e) => scrollToSection("hero", e)}
          >
            Home
          </a>
          <a
            href="#teasing"
            className={cn("transition-colors hover:text-[#20a29d]", activeSection === "teasing" && "text-[#20a29d]")}
            onClick={(e) => scrollToSection("teasing", e)}
          >
            Game
          </a>
          <a
            href="#gallery"
            className={cn("transition-colors hover:text-[#20a29d]", activeSection === "gallery" && "text-[#20a29d]")}
            onClick={(e) => scrollToSection("gallery", e)}
          >
            Galerie
          </a>
          <a
            href="#schedule"
            className={cn("transition-colors hover:text-[#20a29d]", activeSection === "schedule" && "text-[#20a29d]")}
            onClick={(e) => scrollToSection("schedule", e)}
          >
            Programme
          </a>
          <a
            href="#register"
            className={cn("transition-colors hover:text-[#20a29d]", activeSection === "register" && "text-[#20a29d]")}
            onClick={(e) => scrollToSection("register", e)}
          >
            Inscription
          </a>
        </nav>
      </div>

      {/* Animated background elements */}
      <div className="fixed inset-0 z-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#20a29d] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-[#e0b43c] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-40 left-1/3 w-72 h-72 bg-[#20a29d] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen pt-44 pb-20 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white z-0"></div>

        {/* Logo header */}
        <div className="absolute top-6 left-6 z-20">
          <div className="relative h-16 w-auto">
            <Image
              src="/Logo FINOPIA Academy.png"
              alt="Finopia Academy Logo"
              width={200}
              height={100}
              className="h-auto"
            />
          </div>
        </div>

        <div className="container relative mx-auto px-4 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              className="lg:col-span-7 z-10"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-title mb-5 leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#20a29d] to-[#f2c14e]">
                  Former vos équipes grâce à la pédagogie par le jeu
                </span>
              </h1>

              <p className="text-subtitle mb-8 text-gray-600">
                Venez vivre une expérience immersive et innovante pour redynamiser la formation et la montée en compétence de vos équipes.
              </p>

              <p className="text-body mb-8 text-gray-600">
                <span className="font-semibold">Finopia Academy</span> vous propose un business game immersif pour développer les compétences de vos équipes en finance et supply chain.
              </p>

              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-3 text-gray-700">Nos bénéfices :</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="mt-1 text-[#20a29d]"><ChevronRight className="w-4 h-4" /></div>
                    <p className="text-body text-gray-600">Apprentissage des concepts théoriques à travers une simulation en entreprise</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 text-[#20a29d]"><ChevronRight className="w-4 h-4" /></div>
                    <p className="text-body text-gray-600">Développement des softs skills</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 text-[#20a29d]"><ChevronRight className="w-4 h-4" /></div>
                    <p className="text-body text-gray-600">Engagement et motivation de vos collaborateurs</p>
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-3 text-gray-700">Notre méthode de formation se décline pour :</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="mt-1 text-[#f2c14e]"><ChevronRight className="w-4 h-4" /></div>
                    <p className="text-body text-gray-600">Les métiers de la Finance</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 text-[#f2c14e]"><ChevronRight className="w-4 h-4" /></div>
                    <p className="text-body text-gray-600">Les métiers de la Supply Chain</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 text-[#f2c14e]"><ChevronRight className="w-4 h-4" /></div>
                    <p className="text-body text-gray-600">Les métiers de la Gestion de projet</p>
                  </li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button
                  className="group relative overflow-hidden bg-gradient-to-r from-[#20a29d] to-[#f2c14e] rounded-full px-8 py-6 text-white font-medium text-lg hover:shadow-lg transition-all duration-300 font-primary"
                  onClick={(e) => scrollToSection("register", e)}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Inscrivez-vous <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>

                <Button
                  className="group relative overflow-hidden bg-gradient-to-r from-[#20a29d] to-[#f2c14e] rounded-full px-8 py-6 text-white font-medium text-lg hover:shadow-lg transition-all duration-300 font-primary"
                  onClick={(e) => scrollToSection("teasing", e)}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Découvrir le jeu <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-5 relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative">
                <div className="absolute inset-0 -left-5 -top-5 bg-gradient-to-r from-[#20a29d]/20 to-[#f2c14e]/20 rounded-2xl rotate-3 opacity-70"></div>
                <div className="absolute inset-0 -right-5 -bottom-5 bg-gradient-to-r from-[#f2c14e]/20 to-[#20a29d]/20 rounded-2xl -rotate-3 opacity-70"></div>
                <div className="relative bg-white p-8 rounded-2xl border border-gray-100 shadow-xl">
                  <Image
                    src="/team.jpg?height=400&width=500"
                    alt="Business Game"
                    width={500}
                    height={400}
                    className="rounded-lg w-full h-auto"
                  />
                  <div className="mt-6 flex items-center justify-between">
                    <div>
                      <h4 className="font-bold mb-1 text-gray-800 font-primary">30 AVRIL 2025</h4>
                      <p className="text-gray-600 text-sm font-secondary">La Possession</p>
                    </div>
                    <div className="bg-gray-100 px-4 py-2 rounded-full">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#20a29d] to-[#f2c14e] font-medium font-primary">
                        200 €
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-6 h-6 rotate-90 text-gray-400" />
        </div>
      </section>

      {/* Teasing Section */}
      <section id="teasing" className="relative py-20 z-10">
        <div className="absolute inset-0 bg-gray-50 skew-y-3 z-0"></div>
        <div className="container relative mx-auto px-4 z-10 pt-16">
          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px bg-gradient-to-r from-[#20a29d] to-transparent flex-grow"></div>
              <span className="text-[#20a29d] uppercase tracking-wider text-sm font-semibold font-primary">
                Notre approche pédagogique
              </span>
              <div className="h-px bg-gradient-to-l from-[#20a29d] to-transparent flex-grow"></div>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-gray-800 font-primary">
              <span className="inline-block relative">
                Relevez le défi
                <div className="absolute -top-6 -right-6">
                  <Sparkles className="w-5 h-5 text-[#f2c14e]" />
                </div>
              </span>
            </h2>

            <div className="bg-white backdrop-blur-sm border border-gray-100 rounded-2xl p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 h-40 w-40 bg-gradient-to-br from-[#20a29d]/20 to-[#f2c14e]/20 blur-2xl rounded-full transform translate-x-1/2 -translate-y-1/2"></div>

              <p className="text-xl italic text-gray-700 mb-8 relative z-10 font-text">
                Imaginez-vous aux commandes d'un projet ambitieux. Tout commence bien, votre plan est solide, vos
                ressources sont prêtes… Mais soudain, les imprévus surgissent : délais serrés, conflits internes, budget
                sous pression. Saurez-vous garder le cap ?
              </p>

              <div className="relative z-10 bg-gradient-to-r from-[#20a29d]/10 to-transparent p-5 rounded-xl mb-8 border-l-4 border-[#20a29d]">
                <div className="flex items-start gap-4">
                  <div className="bg-[#20a29d]/20 p-2 rounded-lg">
                    <Sparkles className="w-6 h-6 text-[#20a29d]" />
                  </div>
                  <p className="text-xl font-medium text-[#20a29d] font-primary">
                    Analysez vos indicateurs. Anticipez les risques. Prenez les bonnes décisions.
                  </p>
                </div>
              </div>

              <p className="text-gray-700 mb-8 relative z-10 font-text">
                Dans un environnement dynamique et immersif, chaque choix que vous ferez impactera le succès du projet.
                Leadership, communication, gestion des crises… Aurez-vous l'étoffe d'un véritable chef de projet ?
              </p>

              <div className="relative z-10 flex items-center gap-5 mb-3 bg-gradient-to-r from-[#f2c14e]/10 to-transparent p-5 rounded-xl border-l-4 border-[#f2c14e]">
                <div className="bg-[#f2c14e]/20 p-2 rounded-lg">
                  <Gamepad2 className="w-6 h-6 text-[#f2c14e]" />
                </div>
                <p className="text-xl font-medium text-[#f2c14e] font-primary">
                  Relevez le défi. Faites l'expérience du management de projet comme jamais auparavant !
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Notre Approche Section */}
      <section id="notre-approche" className="relative py-20 z-10">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-title mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#20a29d] to-[#f2c14e]">
                Notre Approche
              </span>
            </h2>
            <p className="text-subtitle mb-8">
              Une méthodologie éprouvée pour des résultats concrets
            </p>
            <p className="text-body text-gray-600">
              Notre business game combine théorie et pratique pour une expérience d'apprentissage optimale. Les participants sont immergés dans des scénarios réalistes où ils doivent prendre des décisions stratégiques en temps réel.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="relative py-20 z-10">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-title mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#20a29d] to-[#f2c14e]">
                Galerie
              </span>
            </h2>
            <p className="text-subtitle mb-8">
              Découvrez notre business game en images
            </p>
            <p className="text-body text-gray-600">
              Plongez dans l'atmosphère de nos sessions précédentes et visualisez l'engagement des participants.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <GalleryItem
              src="/lean1.JPEG"
              alt="Workshop collaboratif"
              title="Workshop collaboratif"
              description="Séance de brainstorming et d'idéation"
            />
            <GalleryItem
              src="/totebag.JPEG"
              alt="Présentation des résultats"
              title="Présentation des résultats"
              description="Analyse des performances d'équipe"
            />
            <GalleryItem
              src="/lean2.JPEG"
              alt="Networking"
              title="Networking"
              description="Échanges entre professionnels"
            />
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="relative py-20 z-10">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px bg-gradient-to-r from-[#20a29d] to-transparent flex-grow"></div>
              <span className="text-[#20a29d] uppercase tracking-wider text-sm font-semibold font-primary">
                Programme
              </span>
              <div className="h-px bg-gradient-to-l from-[#20a29d] to-transparent flex-grow"></div>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-gray-800 font-primary">
              Déroulé de la journée
            </h2>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-16 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#20a29d] via-[#f2c14e] to-[#20a29d]"></div>

              {/* Schedule items */}
              <div className="space-y-12">
                <TimelineItem
                  time="9h"
                  title="Accueil et petit déjeuner"
                  icon={<Coffee className="w-6 h-6" />}
                  color="teal"
                />

                <TimelineItem
                  time="10h"
                  title="Lancement du business game"
                  icon={<Gamepad2 className="w-6 h-6" />}
                  color="yellow"
                />

                <TimelineItem time="13h" title="Déjeuner" icon={<Utensils className="w-6 h-6" />} color="teal" />

                <TimelineItem
                  time="15h"
                  title="Entre défis et ambitions, construisez votre arbre à souhait pour 2025"
                  icon={<TreePine className="w-6 h-6" />}
                  color="yellow"
                />

                <TimelineItem
                  time="17h"
                  title="Clôture de la journée"
                  icon={<Award className="w-6 h-6" />}
                  color="teal"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="relative py-16 z-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Date Card */}
            <InfoCard icon={<Calendar className="w-10 h-10" />} title="Date" value="30/04/2025" color="teal" />

            {/* Location Card */}
            <InfoCard
              icon={<MapPin className="w-10 h-10" />}
              title="Lieu"
              value="142 Chem. Boeuf Mort, La Possession 97419, La Réunion"
              color="yellow"
            />

            {/* Price Card */}
            <InfoCard icon={<Coins className="w-10 h-10" />} title="Tarif" value="200€" color="teal" />
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="register" className="relative py-20 z-10">
        <div className="absolute inset-0 bg-gray-50 -skew-y-3 z-0"></div>
        <div className="container relative mx-auto px-4 z-10 pt-16">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-10">
              <h2 className="text-title mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#20a29d] to-[#f2c14e]">
                  Inscription
                </span>
              </h2>
              <p className="text-subtitle mb-8">
                Réservez votre place dès maintenant
              </p>
              <p className="text-body text-gray-600 mb-10">
                Complétez le formulaire ci-dessous pour vous inscrire à notre prochain business game. Les places sont limitées, ne tardez pas !
              </p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#20a29d]/20 via-[#f2c14e]/20 to-[#20a29d]/20 rounded-2xl blur-xl"></div>
              <div className="relative bg-white backdrop-blur-sm border border-gray-100 rounded-2xl p-8 shadow-xl">
                <RegistrationForm />
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-700 mb-2 font-secondary">
                Pour plus de renseignement sur le déroulé de la journée, n'hésitez pas à contacter :
              </p>
              <p className="text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#20a29d] to-[#f2c14e] font-primary">
                Emmanuelle RAMAYE – 06 93 832 503
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative py-16 z-10 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto bg-gradient-to-r from-[#20a29d] to-[#f2c14e] rounded-2xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-primary">
                  Restez informé de nos prochains événements
                </h3>
                <p className="text-white/90 mb-6 font-secondary">
                  Inscrivez-vous à notre newsletter pour recevoir en avant-première nos actualités et invitations.
                </p>
              </div>
              <div className="md:w-1/2">
                <NewsletterForm />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-10 z-10 border-t border-gray-200 bg-white">
        <div className="container mx-auto px-4 flex flex-col items-center justify-center">
          <div className="flex items-center gap-4 mb-6">
            <div className="relative h-20 w-auto">
              <Image
                src="/Logo FINOPIA Academy.png"
                alt="Finopia Academy Logo"
                width={240}
                height={120}
                className="h-auto"
              />
            </div>
          </div>

          <div className="flex flex-col items-center gap-2">
            <p className="text-sm text-gray-500 font-secondary text-center">
              {new Date().getFullYear()} Finopia Academy. Tous droits réservés.
            </p>
            <div className="flex gap-6 text-sm text-gray-500 justify-center mt-2">
              <a href="https://finopia.fr/mentions-legales/" target="_blank" rel="noopener noreferrer" className="hover:text-[#20a29d] transition-colors">
                Mentions légales
              </a>
              <a href="https://finopia.fr/politique-de-confidentialite/" target="_blank" rel="noopener noreferrer" className="hover:text-[#20a29d] transition-colors">
                Politique de confidentialité
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Component for timeline items
function TimelineItem({ time, title, icon, color }: { time: string; title: string; icon: React.ReactNode; color: "teal" | "yellow" }) {
  const bgColor = color === "teal" ? "bg-[#20a29d]" : "bg-[#f2c14e]"
  const textColor = color === "teal" ? "text-[#20a29d]" : "text-[#f2c14e]"

  return (
    <motion.div
      className="flex items-start gap-8 relative"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div
        className={`w-8 h-8 rounded-full flex-shrink-0 ${bgColor} flex items-center justify-center text-white relative z-10`}
      >
        {icon}
      </div>

      <div className="bg-white backdrop-blur-sm rounded-xl border border-gray-100 p-6 flex-grow shadow-md">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-2">
          <span className={`text-xl font-bold ${textColor} font-primary`}>{time}</span>
          <h3 className="text-xl font-semibold text-gray-800 font-primary">{title}</h3>
        </div>
      </div>
    </motion.div>
  )
}

// Component for info cards
function InfoCard({ icon, title, value, color }: { icon: React.ReactNode; title: string; value: string; color: "teal" | "yellow" }) {
  const textColor = color === "teal" ? "text-[#20a29d]" : "text-[#f2c14e]"
  const bgColor = color === "teal" ? "bg-[#20a29d]/10" : "bg-[#f2c14e]/10"
  const borderColor = color === "teal" ? "border-[#20a29d]" : "border-[#f2c14e]"

  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="relative bg-white backdrop-blur-sm border border-gray-100 rounded-xl p-8 h-full flex flex-col shadow-md hover:shadow-lg transition-shadow">
        <div className={`w-16 h-16 ${textColor} mb-5 flex items-center justify-center ${bgColor} rounded-full`}>
          {icon}
        </div>
        <h3 className="text-subtitle font-primary mb-3 text-gray-800">{title}</h3>
        <p className="text-body text-gray-700">{value}</p>
      </div>
    </motion.div>
  )
}

// Component for gallery items
function GalleryItem({ src, alt, title, description }: { src: string; alt: string; title: string; description: string }) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="aspect-w-16 aspect-h-9 overflow-hidden">
        <Image
          src={src || "/lean1.jpeg"}
          alt={alt}
          width={600}
          height={400}
          className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <h3 className="text-subtitle text-white font-primary mb-2">{title}</h3>
        <p className="text-body text-gray-200">{description}</p>
      </div>
    </motion.div>
  )
}
