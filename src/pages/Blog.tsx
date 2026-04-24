import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { Seo } from "@/components/site/Seo";

const Blog = () => (
  <Layout>
    <Seo
      title="Blog · Diritto Amministrativo, Appalti, Espropri"
      description="Approfondimenti, sentenze commentate e guide pratiche su espropriazioni, appalti pubblici, concorsi e urbanistica. A cura dello Studio Legale Accarino."
      path="/blog"
      noIndex
    />
    <PageHero
      eyebrow="Insights & Aggiornamenti"
      eyebrowSuffix="In arrivo"
      title="Blog dello Studio."
      lead="Approfondimenti, sentenze commentate e guide pratiche su espropriazioni, appalti pubblici, concorsi e urbanistica. Sezione in arrivo."
    />
    <section className="bg-background border-b hairline">
      <div className="editorial-container py-20 lg:py-28 max-w-3xl">
        <p className="font-serif text-2xl text-primary leading-snug">
          Stiamo curando una selezione di articoli firmati dai professionisti
          dello Studio.
        </p>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          Ogni contributo affronta un tema concreto del diritto amministrativo —
          una sentenza recente, una novità normativa, una procedura — con il
          taglio operativo che caratterizza lo Studio.
        </p>
      </div>
    </section>
  </Layout>
);

export default Blog;
