import { Container } from "@portfolio/ui/primitives/Container";
import { Section } from "@portfolio/ui/primitives/Section";
import { Text } from "@portfolio/ui/primitives/Text";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <Section as="div" className="py-12 md:py-16">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            {/* Copyright */}
            <div>
              <Text as="span" variant="muted" className="mono">
                © {currentYear}
              </Text>
            </div>

            {/* Links */}
            <div className="flex items-center gap-8">
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                GitHub
              </Link>

              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                LinkedIn
              </Link>

              <a
                href="mailto:hello@example.com"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Email
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </footer>
  );
}
