import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";
import { Logo } from "@/components/shared/logo";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About Us", href: "#about" },
  { label: "Careers", href: "#careers" },
];

const contactItems = [
  {
    icon: Mail,
    label: "contact@catalystanalytics.io",
    href: "mailto:contact@catalystanalytics.io",
  },
  {
    icon: Phone,
    label: "+1 (469) 712-4672",
    href: "tel:+14697124672",
  },
  {
    icon: MapPin,
    label: "5511 Parkcrest Dr, Suite 103, Austin, TX 78731",
    href: "https://maps.google.com",
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background/95 text-muted-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:py-12">
        {/* Top row: logo, nav, social */}
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Logo */}
          <div className="flex justify-center sm:justify-start">
            <Logo />
          </div>

          {/* Center nav */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social icons box */}
          <div className="flex justify-center sm:justify-end">
            <div className="inline-flex items-center gap-2 rounded-2xl border border-border/80 bg-background/80 px-2 py-2 shadow-sm">
              <SocialIconButton ariaLabel="Facebook">
                <Facebook className="h-4 w-4" />
              </SocialIconButton>
              <SocialIconButton ariaLabel="Twitter">
                <Twitter className="h-4 w-4" />
              </SocialIconButton>
              <SocialIconButton ariaLabel="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </SocialIconButton>
            </div>
          </div>
        </div>

        {/* Middle row: contact info */}
        <div className="flex flex-col items-center justify-between gap-4 text-[11px] sm:flex-row sm:text-xs">
          {contactItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary"
            >
              <item.icon className="h-4 w-4 text-primary" />
              <span className="border-b border-border/60 pb-0.5">
                {item.label}
              </span>
            </a>
          ))}
        </div>

        {/* Bottom row: legal */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-border/40 pt-4 text-[11px] sm:flex-row sm:text-xs">
          <p className="text-center">
            © {new Date().getFullYear()} Catalyst Analytics. All rights
            reserved.
          </p>

          <div className="flex items-center gap-4">
            <Link
              href="#privacy"
              className="hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#terms"
              className="hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIconButton({
  children,
  ariaLabel,
}: {
  children: React.ReactNode;
  ariaLabel: string;
}) {
  return (
    <button
      aria-label={ariaLabel}
      className="
        flex h-9 w-9 items-center justify-center
        rounded-[14px]
        bg-linear-to-b from-muted/40 via-background to-background
        text-primary
        shadow-[0_10px_30px_rgba(0,0,0,0.25)]
        transition-transform hover:-translate-y-px
      "
    >
      {children}
    </button>
  );
}
