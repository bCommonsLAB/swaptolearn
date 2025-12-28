import { Button, useMediaQuery } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { RxChevronDown } from "react-icons/rx";

// Custom Hook für Navbar-Logik
// Verwaltet den State für Mobile-Menü und Dropdown-Menü
const useRelume = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 991px)");
  
  // Toggle-Funktion für Mobile-Menü
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  
  // Dropdown-Menü auf Mobile öffnen/schließen
  const openOnMobileDropdownMenu = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  
  // Dropdown-Menü auf Desktop öffnen (bei Hover)
  const openOnDesktopDropdownMenu = () => {
    !isMobile && setIsDropdownOpen(true);
  };
  
  // Dropdown-Menü auf Desktop schließen (bei Mouse Leave)
  const closeOnDesktopDropdownMenu = () => {
    !isMobile && setIsDropdownOpen(false);
  };
  
  // Animation States für Mobile-Menü
  const animateMobileMenu = isMobileMenuOpen ? "open" : "close";
  const animateMobileMenuButtonSpan = isMobileMenuOpen
    ? ["open", "rotatePhase"]
    : "closed";
  
  // Animation States für Dropdown-Menü
  const animateDropdownMenu = isDropdownOpen ? "open" : "close";
  const animateDropdownMenuIcon = isDropdownOpen ? "rotated" : "initial";
  
  return {
    toggleMobileMenu,
    openOnDesktopDropdownMenu,
    closeOnDesktopDropdownMenu,
    openOnMobileDropdownMenu,
    animateMobileMenu,
    animateMobileMenuButtonSpan,
    animateDropdownMenu,
    animateDropdownMenuIcon,
  };
};

// Hauptkomponente für die Navbar
// Enthält die komplette Navigation mit Mobile- und Desktop-Varianten
export function Navbar7() {
  const useActive = useRelume();
  
  return (
    <section
      id="relume"
      className="relative z-[999] flex min-h-16 w-full items-center border-b border-border-primary bg-background-primary px-[5%] md:min-h-18"
    >
      <div className="mx-auto flex size-full max-w-full items-center justify-between">
        {/* Logo */}
        <a href="#">
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/logo-image.svg"
            alt="Logo image"
          />
        </a>
        
        {/* Desktop Navigation */}
        <div className="absolute hidden h-screen overflow-auto border-b border-border-primary bg-background-primary px-[5%] pb-24 pt-4 md:pb-0 lg:static lg:ml-6 lg:flex lg:h-auto lg:flex-1 lg:items-center lg:justify-between lg:border-none lg:bg-none lg:px-0 lg:pt-0">
          <div className="flex flex-col items-center lg:flex-row">
            {/* Hauptnavigation Links */}
            <a
              href="#"
              className="relative block w-auto py-3 text-md lg:inline-block lg:px-4 lg:py-6 lg:text-base"
            >
              Über uns
            </a>
            <a
              href="#"
              className="relative block w-auto py-3 text-md lg:inline-block lg:px-4 lg:py-6 lg:text-base"
            >
              Mitmachen
            </a>
            <a
              href="#"
              className="relative block w-auto py-3 text-md lg:inline-block lg:px-4 lg:py-6 lg:text-base"
            >
              Workshops
            </a>
            
            {/* Dropdown-Menü "Mehr" */}
            <div
              onMouseEnter={useActive.openOnDesktopDropdownMenu}
              onMouseLeave={useActive.closeOnDesktopDropdownMenu}
            >
              <button
                className="relative flex w-full items-center justify-between whitespace-nowrap py-3 text-md lg:w-auto lg:justify-start lg:gap-2 lg:px-4 lg:py-6 lg:text-base"
                onClick={useActive.openOnMobileDropdownMenu}
              >
                <span>Mehr</span>
                <motion.span
                  animate={useActive.animateDropdownMenuIcon}
                  variants={{
                    rotated: { rotate: 180 },
                    initial: { rotate: 0 },
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <RxChevronDown />
                </motion.span>
              </button>
              
              {/* Dropdown-Menü Inhalt */}
              <AnimatePresence>
                <motion.nav
                  variants={{
                    open: {
                      opacity: 1,
                      height: "var(--height-open, auto)",
                      display: "block",
                    },
                    close: {
                      opacity: 0,
                      height: "var(--height-close, 0)",
                      display: "none",
                    },
                  }}
                  animate={useActive.animateDropdownMenu}
                  initial="close"
                  exit="close"
                  transition={{ duration: 0.2 }}
                  className="bottom-auto left-0 top-full w-full min-w-full max-w-full overflow-hidden bg-background-primary lg:absolute lg:w-screen lg:border-b lg:border-border-primary lg:px-[5%] lg:[--height-close:auto]"
                >
                  <div className="mx-auto flex size-full max-w-full items-center justify-between">
                    <div className="flex w-full flex-col lg:flex-row">
                      {/* Dropdown-Grid mit 4 Spalten */}
                      <div className="grid flex-1 grid-cols-1 content-start items-start gap-x-8 gap-y-6 py-4 md:grid-cols-2 md:py-8 lg:auto-cols-fr lg:grid-cols-4 lg:content-stretch lg:items-stretch lg:gap-y-0">
                        {/* Spalte 1: Erste Schritte */}
                        <div className="grid auto-cols-fr grid-cols-1 grid-rows-[max-content_max-content_max-content_max-content_max-content] gap-y-2 md:gap-y-4">
                          <h4 className="text-sm font-semibold leading-[1.3]">
                            Erste Schritte
                          </h4>
                          <a
                            href="#"
                            className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                          >
                            <div className="flex size-6 flex-col items-center justify-center">
                              <img
                                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                alt="Icon 1"
                                className="shrink-0"
                              />
                            </div>
                            <div className="flex flex-col items-start justify-center">
                              <h5 className="font-semibold">Startseite</h5>
                              <p className="hidden text-sm md:block">
                                Erfahre, worum es bei Swap2Learn geht
                              </p>
                            </div>
                          </a>
                          <a
                            href="#"
                            className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                          >
                            <div className="flex size-6 flex-col items-center justify-center">
                              <img
                                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                alt="Icon 2"
                                className="shrink-0"
                              />
                            </div>
                            <div className="flex flex-col items-start justify-center">
                              <h5 className="font-semibold">
                                Über SwapToLearn
                              </h5>
                              <p className="hidden text-sm md:block">
                                Lerne die Geschichte und Mission hinter dem
                                Projekt
                              </p>
                            </div>
                          </a>
                          <a
                            href="#"
                            className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                          >
                            <div className="flex size-6 flex-col items-center justify-center">
                              <img
                                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                alt="Icon 3"
                                className="shrink-0"
                              />
                            </div>
                            <div className="flex flex-col items-start justify-center">
                              <h5 className="font-semibold">Mitmachen</h5>
                              <p className="hidden text-sm md:block">
                                Entdecke, wie du Teil dieser Bewegung wirst
                              </p>
                            </div>
                          </a>
                          <a
                            href="#"
                            className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                          >
                            <div className="flex size-6 flex-col items-center justify-center">
                              <img
                                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                alt="Icon 4"
                                className="shrink-0"
                              />
                            </div>
                            <div className="flex flex-col items-start justify-center">
                              <h5 className="font-semibold">Workshops</h5>
                              <p className="hidden text-sm md:block">
                                Finde Termine und lerne gemeinsam mit anderen
                              </p>
                            </div>
                          </a>
                        </div>
                        
                        {/* Spalte 2: Ressourcen */}
                        <div className="grid auto-cols-fr grid-cols-1 grid-rows-[max-content_max-content_max-content_max-content_max-content] gap-y-2 md:gap-y-4">
                          <h4 className="text-sm font-semibold leading-[1.3]">
                            Ressourcen
                          </h4>
                          <a
                            href="#"
                            className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                          >
                            <div className="flex size-6 flex-col items-center justify-center">
                              <img
                                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                alt="Icon 5"
                                className="shrink-0"
                              />
                            </div>
                            <div className="flex flex-col items-start justify-center">
                              <h5 className="font-semibold">FAQ</h5>
                              <p className="hidden text-sm md:block">
                                Antworten auf häufig gestellte Fragen
                              </p>
                            </div>
                          </a>
                          <a
                            href="#"
                            className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                          >
                            <div className="flex size-6 flex-col items-center justify-center">
                              <img
                                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                alt="Icon 6"
                                className="shrink-0"
                              />
                            </div>
                            <div className="flex flex-col items-start justify-center">
                              <h5 className="font-semibold">Kontakt</h5>
                              <p className="hidden text-sm md:block">
                                Erreiche uns und stelle deine Fragen
                              </p>
                            </div>
                          </a>
                          <a
                            href="#"
                            className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                          >
                            <div className="flex size-6 flex-col items-center justify-center">
                              <img
                                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                alt="Icon 7"
                                className="shrink-0"
                              />
                            </div>
                            <div className="flex flex-col items-start justify-center">
                              <h5 className="font-semibold">Community</h5>
                              <p className="hidden text-sm md:block">Galerie</p>
                            </div>
                          </a>
                          <a
                            href="#"
                            className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                          >
                            <div className="flex size-6 flex-col items-center justify-center">
                              <img
                                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                alt="Icon 8"
                                className="shrink-0"
                              />
                            </div>
                            <div className="flex flex-col items-start justify-center">
                              <h5 className="font-semibold">
                                Schaue Fotos und Geschichten aus unseren
                                Projekten
                              </h5>
                              <p className="hidden text-sm md:block">
                                Testimonials
                              </p>
                            </div>
                          </a>
                        </div>
                        
                        {/* Spalte 3: Testimonials */}
                        <div className="grid auto-cols-fr grid-cols-1 grid-rows-[max-content_max-content_max-content_max-content_max-content] gap-y-2 md:gap-y-4">
                          <h4 className="text-sm font-semibold leading-[1.3]">
                            Höre von Menschen, die bereits teilgenommen haben
                          </h4>
                          <a
                            href="#"
                            className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                          >
                            <div className="flex size-6 flex-col items-center justify-center">
                              <img
                                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                alt="Icon 9"
                                className="shrink-0"
                              />
                            </div>
                            <div className="flex flex-col items-start justify-center">
                              <h5 className="font-semibold">Unterstützung</h5>
                              <p className="hidden text-sm md:block">Partner</p>
                            </div>
                          </a>
                          <a
                            href="#"
                            className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                          >
                            <div className="flex size-6 flex-col items-center justify-center">
                              <img
                                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                alt="Icon 10"
                                className="shrink-0"
                              />
                            </div>
                            <div className="flex flex-col items-start justify-center">
                              <h5 className="font-semibold">
                                Erfahre mehr über unsere Zusammenarbeit
                              </h5>
                              <p className="hidden text-sm md:block">Spenden</p>
                            </div>
                          </a>
                          <a
                            href="#"
                            className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                          >
                            <div className="flex size-6 flex-col items-center justify-center">
                              <img
                                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                alt="Icon 11"
                                className="shrink-0"
                              />
                            </div>
                            <div className="flex flex-col items-start justify-center">
                              <h5 className="font-semibold">
                                Unterstütze das Projekt finanziell
                              </h5>
                              <p className="hidden text-sm md:block">
                                Weitere Infos
                              </p>
                            </div>
                          </a>
                          <a
                            href="#"
                            className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                          >
                            <div className="flex size-6 flex-col items-center justify-center">
                              <img
                                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                alt="Icon 12"
                                className="shrink-0"
                              />
                            </div>
                            <div className="flex flex-col items-start justify-center">
                              <h5 className="font-semibold">Blog</h5>
                              <p className="hidden text-sm md:block">
                                Lese aktuelle Beiträge und Neuigkeiten
                              </p>
                            </div>
                          </a>
                        </div>
                        
                        {/* Spalte 4: Impressum */}
                        <div className="grid auto-cols-fr grid-cols-1 grid-rows-[max-content_max-content_max-content_max-content_max-content] gap-y-2 md:gap-y-4">
                          <h4 className="text-sm font-semibold leading-[1.3]">
                            Impressum
                          </h4>
                          <a
                            href="#"
                            className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                          >
                            <div className="flex size-6 flex-col items-center justify-center">
                              <img
                                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                alt="Icon 13"
                                className="shrink-0"
                              />
                            </div>
                            <div className="flex flex-col items-start justify-center">
                              <h5 className="font-semibold">
                                Rechtliche Informationen
                              </h5>
                              <p className="hidden text-sm md:block">
                                Datenschutz
                              </p>
                            </div>
                          </a>
                          <a
                            href="#"
                            className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                          >
                            <div className="flex size-6 flex-col items-center justify-center">
                              <img
                                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                alt="Icon 14"
                                className="shrink-0"
                              />
                            </div>
                            <div className="flex flex-col items-start justify-center">
                              <h5 className="font-semibold">
                                Wie wir deine Daten schützen
                              </h5>
                              <p className="hidden text-sm md:block">
                                Bedingungen
                              </p>
                            </div>
                          </a>
                          <a
                            href="#"
                            className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                          >
                            <div className="flex size-6 flex-col items-center justify-center">
                              <img
                                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                alt="Icon 15"
                                className="shrink-0"
                              />
                            </div>
                            <div className="flex flex-col items-start justify-center">
                              <h5 className="font-semibold">
                                Nutzungsbedingungen lesen
                              </h5>
                              <p className="hidden text-sm md:block">Sitemap</p>
                            </div>
                          </a>
                          <a
                            href="#"
                            className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                          >
                            <div className="flex size-6 flex-col items-center justify-center">
                              <img
                                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                alt="Icon 16"
                                className="shrink-0"
                              />
                            </div>
                            <div className="flex flex-col items-start justify-center">
                              <h5 className="font-semibold">
                                Übersicht aller Seiten
                              </h5>
                              <p className="hidden text-sm md:block">
                                Alle Seiten erkunden
                              </p>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Call-to-Action Bereich im Dropdown */}
                  <div className="relative mb-6 flex w-full flex-col items-start justify-between p-6 sm:items-center lg:mb-0 lg:flex-row lg:px-0 lg:py-4">
                    <div className="absolute -left-[50vw] -right-[50vw] bottom-0 top-0 w-[200vw] bg-background-secondary" />
                    <div className="relative mb-4 grid auto-cols-fr grid-cols-[max-content] grid-rows-[auto_auto] items-center gap-x-2 gap-y-4 lg:mb-0 lg:flex lg:items-center">
                      <p>
                        Bereit zu starten?
                        <a href="#" className="ml-1 underline">
                          Jetzt anmelden
                        </a>
                      </p>
                    </div>
                    <div className="relative flex w-full flex-col gap-6 sm:w-auto sm:flex-row">
                      <Button
                        title="Suche"
                        variant="link"
                        size="link"
                        image={{
                          src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
                          alt: "Button icon 1",
                        }}
                      >
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                          alt="Button icon 1"
                          className="size-6 shrink-0"
                        />
                        Suche
                      </Button>
                      <Button
                        title="Menü"
                        variant="link"
                        size="link"
                        image={{
                          src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
                          alt: "Button icon 2",
                        }}
                      >
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                          alt="Button icon 2"
                          className="size-6 shrink-0"
                        />
                        Menü
                      </Button>
                    </div>
                  </div>
                </motion.nav>
              </AnimatePresence>
            </div>
            
            {/* Action Buttons */}
            <div className="flex items-center gap-4">
              <Button title="Schließen" variant="secondary" size="sm">
                Schließen
              </Button>
              <Button title="Öffnen" size="sm">
                Öffnen
              </Button>
            </div>
          </div>
          
          {/* Mobile Menu Toggle Button */}
          <button
            className="-mr-2 flex size-12 cursor-pointer flex-col items-center justify-center lg:hidden"
            onClick={useActive.toggleMobileMenu}
          >
            {/* Hamburger Icon - obere Linie */}
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-black"
              animate={useActive.animateMobileMenuButtonSpan}
              variants={{
                open: { translateY: 8, transition: { delay: 0.1 } },
                rotatePhase: { rotate: -45, transition: { delay: 0.2 } },
                closed: {
                  translateY: 0,
                  rotate: 0,
                  transition: { duration: 0.2 },
                },
              }}
            />
            {/* Hamburger Icon - mittlere Linie */}
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-black"
              animate={useActive.animateMobileMenu}
              variants={{
                open: { width: 0, transition: { duration: 0.1 } },
                closed: {
                  width: "1.5rem",
                  transition: { delay: 0.3, duration: 0.2 },
                },
              }}
            />
            {/* Hamburger Icon - untere Linie */}
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-black"
              animate={useActive.animateMobileMenuButtonSpan}
              variants={{
                open: { translateY: -8, transition: { delay: 0.1 } },
                rotatePhase: { rotate: 45, transition: { delay: 0.2 } },
                closed: {
                  translateY: 0,
                  rotate: 0,
                  transition: { duration: 0.2 },
                },
              }}
            />
          </button>
        </div>
        
        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          <motion.div
            variants={{ open: { height: "100dvh" }, close: { height: "auto" } }}
            animate={useActive.animateMobileMenu}
            initial="close"
            exit="close"
            className="absolute left-0 right-0 top-full w-full overflow-hidden lg:hidden"
            transition={{ duration: 0.4 }}
          >
            <motion.div
              variants={{ open: { y: 0 }, close: { y: "-100%" } }}
              animate={useActive.animateMobileMenu}
              initial="close"
              exit="close"
              transition={{ duration: 0.4 }}
              className="absolute left-0 right-0 top-0 block h-dvh overflow-auto border-b border-border-primary bg-background-primary px-[5%] pb-8 pt-4"
            >
              <div className="flex flex-col">
                {/* Mobile Navigation Links */}
                <a href="#" className="block py-3 text-md">
                  Link One
                </a>
                <a href="#" className="block py-3 text-md">
                  Link Two
                </a>
                <a href="#" className="block py-3 text-md">
                  Link Three
                </a>
                
                {/* Mobile Dropdown */}
                <div>
                  <button
                    className="relative flex w-full items-center justify-between whitespace-nowrap py-3 text-md lg:w-auto lg:justify-start lg:gap-2 lg:px-4 lg:py-6 lg:text-base"
                    onClick={useActive.openOnMobileDropdownMenu}
                  >
                    <span>Link Four</span>
                    <motion.span
                      animate={useActive.animateDropdownMenuIcon}
                      variants={{
                        rotated: { rotate: 180 },
                        initial: { rotate: 0 },
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <RxChevronDown />
                    </motion.span>
                  </button>
                  
                  {/* Mobile Dropdown Content (vereinfacht) */}
                  <AnimatePresence>
                    <motion.nav
                      variants={{
                        open: {
                          opacity: 1,
                          height: "var(--height-open, auto)",
                          display: "block",
                        },
                        close: {
                          opacity: 0,
                          height: "var(--height-close, 0)",
                          display: "none",
                        },
                      }}
                      animate={useActive.animateDropdownMenu}
                      initial="close"
                      exit="close"
                      transition={{ duration: 0.2 }}
                      className="bottom-auto left-0 top-full w-full min-w-full max-w-full overflow-hidden bg-background-primary lg:absolute lg:w-screen lg:border-b lg:border-border-primary lg:px-[5%] lg:[--height-close:auto]"
                    >
                      {/* Vereinfachte Mobile Dropdown Inhalte */}
                      <div className="mx-auto flex size-full max-w-full items-center justify-between">
                        <div className="flex w-full flex-col lg:flex-row">
                          <div className="grid flex-1 grid-cols-1 content-start items-start gap-x-8 gap-y-6 py-4 md:grid-cols-2 md:py-8 lg:auto-cols-fr lg:grid-cols-4 lg:content-stretch lg:items-stretch lg:gap-y-0">
                            {/* Mobile Dropdown Spalten - vereinfacht */}
                            <div className="grid auto-cols-fr grid-cols-1 grid-rows-[max-content_max-content_max-content_max-content_max-content] gap-y-2 md:gap-y-4">
                              <h4 className="text-sm font-semibold leading-[1.3]">
                                Page group one
                              </h4>
                              <a
                                href="#"
                                className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                              >
                                <div className="flex size-6 flex-col items-center justify-center">
                                  <img
                                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                    alt="Icon 1"
                                    className="shrink-0"
                                  />
                                </div>
                                <div className="flex flex-col items-start justify-center">
                                  <h5 className="font-semibold">Page One</h5>
                                  <p className="hidden text-sm md:block">
                                    Lorem ipsum dolor sit amet consectetur elit
                                  </p>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.nav>
                  </AnimatePresence>
                </div>
                
                {/* Mobile Action Buttons */}
                <div className="mt-6 flex flex-col gap-4">
                  <Button title="Button" variant="secondary" size="sm">
                    Button
                  </Button>
                  <Button title="Button" size="sm">
                    Button
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

