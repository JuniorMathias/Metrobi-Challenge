export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-900 text-white">
      {/* Logo */}
      <div className="text-xl font-bold">Logo</div>
      
      {/* Links */}
      <nav className="hidden md:flex space-x-6">
        <a href="#" className="hover:text-gray-400">Home</a>
        <a href="#" className="hover:text-gray-400">Sobre</a>
        <a href="#" className="hover:text-gray-400">Serviços</a>
        <a href="#" className="hover:text-gray-400">Contato</a>
        <a href="#" className="hover:text-gray-400">Blog</a>
      </nav>
      
      {/* Botão */}
      <button className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-500">Login</button>
    </header>
  );
}
