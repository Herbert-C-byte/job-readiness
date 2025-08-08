import Logo from "./assets/Logo.png"

export default function Header() {
  return (
    <>
      <header className="bg-gradient-to-br from-blue-600 via-blue-800 to-blue-900 text-white py-4 px-6 flex justify-between items-center shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src={Logo} className="w-24 sm:w-26" alt="logo" />
          </div>
          <p className="text-white">Deixe-nos ajuda-lo na sua busca profissional</p>
        </div>
      </header>
    </>
  );
}
