import { ReactNode } from "react";
import { PanelLeft } from "lucide-react";
import { Layout } from "./Layout";
import { ProceduresSidebar } from "./ProceduresSidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

/**
 * Layout wrapper for the procedure index and individual procedure pages.
 * Adds a collapsible navigation sidebar grouped by audience → practice area
 * while preserving the global Navbar / Footer chrome from the base Layout.
 *
 * The SidebarTrigger is rendered inside a slim, always-visible bar at the
 * top of the content area so users can always toggle the sidebar — even
 * when it is fully collapsed to its icon rail.
 */
export const ProceduresLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Layout>
      <SidebarProvider defaultOpen>
        <div className="flex w-full min-h-[calc(100vh-200px)]">
          <ProceduresSidebar />
          <SidebarInset className="bg-background">
            {/* Always-visible trigger bar so the sidebar can be toggled
                regardless of its collapsed/expanded state. */}
            <div className="sticky top-20 lg:top-[116px] z-30 flex items-center gap-3 border-b hairline bg-background/85 backdrop-blur-md px-4 lg:px-6 h-12">
              <SidebarTrigger className="-ml-1">
                <PanelLeft className="h-4 w-4" />
              </SidebarTrigger>
              <span aria-hidden className="h-4 w-px bg-border" />
              <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground font-semibold">
                Indice procedure
              </span>
            </div>
            <div>{children}</div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </Layout>
  );
};