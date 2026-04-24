import { Layout } from "@/components/site/Layout";
import { Eyebrow } from "@/components/site/Eyebrow";
import { Seo } from "@/components/site/Seo";

const Blog = () => (
  <Layout>
    <Seo
      title="Blog · Diritto Amministrativo, Appalti, Espropri"
      description="Approfondimenti, sentenze commentate e guide pratiche su espropriazioni, appalti pubblici, concorsi e urbanistica. A cura dello Studio Legale Accarino."
      path="/blog"
      noIndex
    />
    <section className="editorial-container py-32">
      <Eyebrow>Insights & Aggiornamenti</Eyebrow>
      <h1 className="font-serif text-5xl md:text-6xl text-primary leading-tight mt-6 max-w-3xl">
        Blog dello Studio
      </h1>
      <p className="text-lg text-muted-foreground mt-6 max-w-2xl leading-relaxed">
        Approfondimenti, sentenze commentate e guide pratiche su espropriazioni,
        appalti pubblici, concorsi e urbanistica. Sezione in arrivo.
      </p>
      <div className="mt-12 h-px w-24 bg-gold" />
    </section>
  </Layout>
);

export default Blog;
