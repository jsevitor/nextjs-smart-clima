export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center py-4 text-footer text-sm">
      <span className="">© 2025 SMART CLIMA.</span>
      <span className="">Todos os direitos reservados.</span>
      <span className="">
        Desenvolvido por{" "}
        <a
          href="https://github.com/jsevitor"
          target="_blank"
          className="text-foreground"
        >
          Vitor Oliveira
        </a>
        .
      </span>
    </footer>
  );
}
