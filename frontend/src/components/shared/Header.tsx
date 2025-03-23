import Image from "next/image";
import Container from "./Container";
import Link from "next/link";
import Menu from "./Menu";

export default function Header() {
  return (
    <header className="w-full flex items-center h-16 bg-black/50">
      <Container className="flex-1 flex justify-between items-center">
        <div className="flex items-center gap-10">
          <Link href="/" className="hidden sm:block">
            <Image src="/logo.svg" alt="Logo" width={80} height={0} />
          </Link>
          <Menu />
        </div>
        <div className="hidden sm:flex items-center">
          <Link
            href="https://www.linkedin.com/in/rafaelsrocha/"
            target="_blank"
            className="bg-blue-500 rounded-full px-7 py-1 text-sm font-bold"
          >
            Linkedin Profile
          </Link>
        </div>
      </Container>
    </header>
  );
}
