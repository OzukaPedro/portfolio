import ThemeToggle from "./ThemeToggle";

type LinkProps = {
  href: string;
  label: string;
};
export default function Header() {
  const Links: LinkProps[] = [
    { href: "", label: "Inicio" },
    { href: "#about", label: "Sobre" },
    { href: "#expercience", label: "Experiencia" },
    { href: "#projects", label: "Projetos" },
    { href: "#contact", label: "Contato" },
  ];
  return (
    <header className="fixed top-0 left-0 w-full bg-background text-primary-text flex items-center justify-around p-8">
      <h1 className="text-2xl font-bold">Pedro Campagnoli</h1>

      <div className="flex gap-10">
        {Links.map((link) => (
            <a
            className="hover:brightness-150 dark:hover:brightness-80 transition-all duration-300"
            href={link.href} key={link.href}>{link.label}
            </a>
          ))
        }
      </div>
      <ThemeToggle />
    </header>
  );
}
