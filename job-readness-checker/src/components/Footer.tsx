export default function Footer() {
  const nameOfTheOwner: string = "Cássio Herbert"  
  
  return(
    <>
      <footer className="bg-gradient-to-b from-blue-600 via-blue-800 to-blue-900 text-white py-3 mt-auto text-center">
        <p className="text-sm">© {new Date().getFullYear()} Job Readiness. {nameOfTheOwner}. Nenhum direito reservado.</p>
      </footer>
    </>
    )
}