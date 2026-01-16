"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HeaderShell } from "@portfolio/ui/primitives/HeaderShell";
import { NavContainer } from "@portfolio/ui/primitives/NavContainer";
import { BrandText } from "@portfolio/ui/primitives/BrandText";

export type NavigationItem = {
  label: string;
  href: string;
};

type HeaderProps = {
  navigation: NavigationItem[];
};

export function Header({ navigation }: HeaderProps) {
  const pathname = usePathname();

  return (
    <HeaderShell>
      <NavContainer>
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="focus:outline-none">
            <BrandText>jovial.</BrandText>
          </Link>

          <ul className="flex items-center gap-8 md:gap-10">
            {navigation.map((item) => {
              const isActive = pathname === item.href;

              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={`text-sm transition-colors duration-200 ${
                      isActive
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </NavContainer>
    </HeaderShell>
  );
}
