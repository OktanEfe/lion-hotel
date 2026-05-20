import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import PageTransition from "@/components/layout/PageTransition";

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <PageTransition>
      <Navbar />
      <div className="page-enter">{children}</div>
      <Footer />
    </PageTransition>
  );
}
