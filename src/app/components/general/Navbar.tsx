import Image from "next/image"

const Navbar = () => {
  return (
    <nav className="flex justify-between fixed top-0 left-0 w-full z-10 px-10 mt-6">
        <div className="w-1/3">
            <Image src="/logo.png" className="w-[12%] h-full" width={1920} height={1080} alt="Logo Ivan Campos Wainer Navbar" />
        </div>
        <p>Test Text</p>
    </nav>
  )
}

export default Navbar