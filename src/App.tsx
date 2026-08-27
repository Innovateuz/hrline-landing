import { useLenis } from "./hooks/useLenis";
import { I18nProvider } from "./i18n";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { PainPoints } from "./components/sections/PainPoints";
import { Attendance } from "./components/sections/Attendance";
import { Onboarding } from "./components/sections/Onboarding";
import { KPISection } from "./components/sections/KPISection";
import { MobileApp } from "./components/sections/MobileApp";
import { Payroll } from "./components/sections/Payroll";
import { FinalCTA } from "./components/sections/FinalCTA";
import { ContactForm } from "./components/sections/ContactForm";

export default function App() {
  useLenis();

  return (
    <I18nProvider>
      <Header />
      <main>
        <Hero />
        <PainPoints />
        <Attendance />
        <Onboarding />
        <KPISection />
        <MobileApp />
        <Payroll />
        <FinalCTA />
        <ContactForm />
      </main>
      <Footer />
    </I18nProvider>
  );
}
