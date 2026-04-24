import { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { ProcedurePageTemplate } from "@/components/site/ProcedurePageTemplate";
import { getProcedure } from "@/data/procedures";

/**
 * Dynamic page — resolves :slug to a procedure entry.
 * Renders the full editorial template, or sends to /404 if the slug is unknown.
 */
export default function ProcedurePage() {
  const { slug } = useParams<{ slug: string }>();
  const procedure = getProcedure(slug);

  // Always start at the top when navigating between procedures.
  useEffect(() => {
    if (typeof window !== "undefined") window.scrollTo({ top: 0 });
  }, [slug]);

  if (!procedure) return <Navigate to="/404" replace />;

  return <ProcedurePageTemplate procedure={procedure} />;
}