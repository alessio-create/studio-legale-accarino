import { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Building2,
  Landmark,
  LayoutGrid,
  Scale,
  Users,
  type LucideIcon,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { getGroupedProcedures, type Procedure } from "@/data/procedures";

/** Maps a practice area to a representative icon for the sidebar group. */
const practiceAreaIcon: Record<Procedure["practiceArea"], LucideIcon> = {
  Espropriazioni: Landmark,
  "Urbanistica ed Edilizia": Scale,
  "Appalti Pubblici": Building2,
  "Attività della Pubblica Amministrazione": Users,
  "Diritto amministrativo": LayoutGrid,
};

/**
 * Procedure-area sidebar — groups procedures by audience → practice area,
 * highlights the current route, keeps the active branch open by default,
 * and shrinks to an icon-only rail when collapsed (so the trigger in the
 * header can always toggle it back).
 */
export const ProceduresSidebar = () => {
  const grouped = useMemo(() => getGroupedProcedures(), []);
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (slug: string) => currentPath === `/${slug}`;
  const isIndexActive = currentPath === "/procedure";

  return (
    <Sidebar collapsible="icon" className="border-r hairline">
      <SidebarHeader className="border-b hairline mt-20 lg:mt-[116px]">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              isActive={isIndexActive}
              tooltip="Tutte le procedure"
              className="font-serif"
            >
              <Link to="/procedure">
                <LayoutGrid className="h-4 w-4 text-gold-deep" />
                {!collapsed && <span>Tutte le procedure</span>}
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        {grouped.map((bucket) => (
          <SidebarGroup key={bucket.audience}>
            {!collapsed && (
              <SidebarGroupLabel className="text-[10px] uppercase tracking-[0.22em] text-gold-deep font-semibold">
                {bucket.audience}
              </SidebarGroupLabel>
            )}
            <SidebarGroupContent>
              <SidebarMenu>
                {bucket.groups.map((group) => {
                  const Icon = practiceAreaIcon[group.practiceArea];
                  const hasActive = group.items.some((p) => isActive(p.slug));
                  return (
                    <Collapsible
                      key={group.practiceArea}
                      defaultOpen={hasActive}
                      className="group/collapsible"
                    >
                      <SidebarMenuItem>
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton
                            tooltip={group.practiceArea}
                            className="font-medium"
                          >
                            <Icon className="h-4 w-4 text-gold-deep" />
                            {!collapsed && (
                              <>
                                <span className="flex-1 text-left">
                                  {group.practiceArea}
                                </span>
                                <ChevronDown className="h-3.5 w-3.5 text-muted-foreground transition-transform group-data-[state=open]/collapsible:rotate-180" />
                              </>
                            )}
                          </SidebarMenuButton>
                        </CollapsibleTrigger>

                        {!collapsed && (
                          <CollapsibleContent>
                            <SidebarMenuSub>
                              {group.items.map((p) => (
                                <SidebarMenuSubItem key={p.slug}>
                                  <SidebarMenuSubButton
                                    asChild
                                    isActive={isActive(p.slug)}
                                  >
                                    <Link to={`/${p.slug}`}>
                                      <span className="line-clamp-2 leading-snug">
                                        {p.title}
                                      </span>
                                    </Link>
                                  </SidebarMenuSubButton>
                                </SidebarMenuSubItem>
                              ))}
                            </SidebarMenuSub>
                          </CollapsibleContent>
                        )}
                      </SidebarMenuItem>
                    </Collapsible>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      {!collapsed && (
        <SidebarFooter className="border-t hairline">
          <Link
            to="/contatti"
            className="flex items-center gap-2 px-2 py-2 text-[11px] uppercase tracking-[0.2em] text-gold-deep font-semibold hover:text-primary transition-colors"
          >
            <span aria-hidden className="w-6 h-px bg-gold" />
            Risposta in 48h
          </Link>
        </SidebarFooter>
      )}
    </Sidebar>
  );
};