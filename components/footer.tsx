export default function Footer() {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Burgers By Lalo - Todos los derechos
          reservados
        </p>
      </div>
    </footer>
  );
}
