import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/site/Layout";
import { CTAButton } from "@/components/site/CTAButton";
import { Eyebrow } from "@/components/site/Eyebrow";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="min-h-[70vh] flex items-center">
        <div className="editorial-container text-center max-w-2xl mx-auto py-24">
          <Eyebrow>Errore 404</Eyebrow>
          <h1 className="mt-6 serif-display text-display-2xl text-balance">
            La pagina richiesta<br />
            <span className="italic">non è disponibile</span>.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Il documento che stai cercando potrebbe essere stato spostato o rimosso.
          </p>
          <div className="mt-10 flex justify-center">
            <CTAButton to="/">Torna alla home</CTAButton>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
