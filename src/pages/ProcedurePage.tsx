import { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { ProcedurePageTemplate } from "@/components/site/ProcedurePageTemplate";
import { getProcedure } from "@/data/procedures";

/**
 * Dynamic page — resolves :slug to a procedure entry.
 * Renders the full editorial template, or sends to /404 if the slug is unknown.
 */
export default function ProcedurePage() {
  // Each procedure is registered as a literal route (/<slug>), so we derive
  // the slug from the current pathname rather than from a route param.
  const { pathname } = useLocation();
  const slug = pathname.replace(/^\/+/, "").split("/")[0];
  const procedure = getProcedure(slug);

  // Always start at the top when navigating between procedures.
  useEffect(() => {
    if (typeof window !== "undefined") window.scrollTo({ top: 0 });
  }, [slug]);

  if (!procedure) return <Navigate to="/404" replace />;

  return <ProcedurePageTemplate procedure={procedure} />;
}