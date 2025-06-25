import Image from "next/image"

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-4">
      <div className="container mx-auto text-center">
        <div className="mb-2">
          <Image
            src="/logo-smp-labschool.png"
            alt="SMP Labschool Jakarta"
            width={60}
            height={60}
            className="rounded-full"
          />
        </div>
        <p className="text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} SMP Labschool Jakarta. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
