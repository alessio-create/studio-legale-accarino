import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1.75rem",
      screens: { "2xl": "1320px" },
    },
    extend: {
      fontFamily: {
        serif: ["Libre Baskerville", "Georgia", "serif"],
        sans: ["Source Sans 3", "Source Sans Pro", "Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-2xl": ["clamp(2.25rem, 6.5vw, 6rem)", { lineHeight: "1.05", letterSpacing: "-0.025em" }],
        "display-xl": ["clamp(1.875rem, 5vw, 4.25rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(1.625rem, 3.5vw, 3rem)", { lineHeight: "1.18", letterSpacing: "-0.015em" }],
        "display-md": ["clamp(1.5rem, 2vw, 1.875rem)", { lineHeight: "1.3" }],
        "label-sm": ["0.75rem", { lineHeight: "1.2", letterSpacing: "0.16em" }],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          glow: "hsl(var(--primary-glow))",
          deep: "hsl(var(--primary-deep))",
        },
        gold: {
          DEFAULT: "hsl(var(--gold))",
          foreground: "hsl(var(--gold-foreground))",
          soft: "hsl(var(--gold-soft))",
          deep: "hsl(var(--gold-deep))",
        },
        brand: {
          blue: {
            DEFAULT: "hsl(var(--brand-blue))",
            900: "hsl(var(--brand-blue-900))",
            700: "hsl(var(--brand-blue-700))",
            500: "hsl(var(--brand-blue-500))",
            300: "hsl(var(--brand-blue-300))",
            100: "hsl(var(--brand-blue-100))",
            50:  "hsl(var(--brand-blue-50))",
          },
          yellow: {
            DEFAULT: "hsl(var(--brand-yellow))",
            500: "hsl(var(--brand-yellow-500))",
            400: "hsl(var(--brand-yellow-400))",
            300: "hsl(var(--brand-yellow-300))",
            200: "hsl(var(--brand-yellow-200))",
            100: "hsl(var(--brand-yellow-100))",
            50:  "hsl(var(--brand-yellow-50))",
          },
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        live: {
          DEFAULT: "hsl(var(--live))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        surface: {
          DEFAULT: "hsl(var(--surface))",
          dim: "hsl(var(--surface-dim))",
          container: "hsl(var(--surface-container))",
          "container-low": "hsl(var(--surface-container-low))",
          "container-high": "hsl(var(--surface-container-high))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) + 2px)",
        sm: "calc(var(--radius) + 0px)",
      },
      backgroundImage: {
        "gradient-navy": "var(--gradient-navy)",
        "gradient-gold-line": "var(--gradient-gold-line)",
      },
      boxShadow: {
        elegant: "var(--shadow-elegant)",
        lift: "var(--shadow-lift)",
        "inset-gold": "var(--shadow-inset-gold)",
      },
      keyframes: {
        "accordion-down": { from: { height: "0" }, to: { height: "var(--radix-accordion-content-height)" } },
        "accordion-up": { from: { height: "var(--radix-accordion-content-height)" }, to: { height: "0" } },
        "ticker": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "mega-in": {
          "0%": { opacity: "0", transform: "translateY(-8px) scale(0.985)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        "mega-item-in": {
          "0%": { opacity: "0", transform: "translateY(6px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "live-pulse": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.55", transform: "scale(1.35)" },
        },
        "review-in": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "review-out": {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(-6px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.25s ease-out",
        "accordion-up": "accordion-up 0.25s ease-out",
        "ticker": "ticker 40s linear infinite",
        "mega-in": "mega-in 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
        "mega-item-in": "mega-item-in 0.45s cubic-bezier(0.22, 1, 0.36, 1) both",
        "live-pulse": "live-pulse 1.8s ease-in-out infinite",
        "review-in": "review-in 0.55s cubic-bezier(0.22, 1, 0.36, 1) both",
        "review-out": "review-out 0.35s ease-in both",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
