import Logo from "../assets/Logo.png"

export default function Footer() {
  const nameOfTheOwner: string = "Cássio Herbert"  
  
  return(
    <>
      <footer className="bg-gradient-to-b from-blue-600 via-blue-800 to-blue-900 text-white py-3 mt-auto text-center">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <img src={Logo} className="w-24 sm:w-26" alt="logo" />
          <p className="text-sm">© {new Date().getFullYear()} Job Readiness. {nameOfTheOwner}. Nenhum direito reservado.</p>
        </div>
      </footer>
    </>
    )
}