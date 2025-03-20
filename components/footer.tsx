import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-950 py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-xl font-bold">Wanderlust</h3>
            <p className="mb-4 text-gray-400">
              Creating unforgettable travel experiences since 2010. Our mission is to help you discover the world your
              way.
            </p>
            <div className="flex space-x-4">
              {["twitter", "facebook", "instagram", "youtube"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-white transition-colors hover:bg-primary"
                >
                  <span className="sr-only">{social}</span>
                  <div className="h-4 w-4"></div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-medium">Destinations</h4>
            <ul className="space-y-2 text-gray-400">
              {["Europe", "Asia", "Africa", "North America", "South America", "Australia"].map((item) => (
                <li key={item}>
                  <Link href="/destinations" className="transition-colors hover:text-white">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-medium">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/about" className="transition-colors hover:text-white">
                  About Us
                </Link>
              </li>
              {["Careers", "Blog", "Press", "Gift Cards", "Magazine"].map((item) => (
                <li key={item}>
                  <a href="#" className="transition-colors hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-medium">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/contact" className="transition-colors hover:text-white">
                  Contact Us
                </Link>
              </li>
              {["FAQ", "Terms & Conditions", "Privacy Policy", "Cookie Policy", "Sitemap"].map((item) => (
                <li key={item}>
                  <a href="#" className="transition-colors hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Wanderlust Travel. All rights reserved.</p>
          <p className="mt-2">
            <span className="mx-2">•</span>
            <a href="#" className="hover:text-gray-400">
              Terms
            </a>
            <span className="mx-2">•</span>
            <a href="#" className="hover:text-gray-400">
              Privacy
            </a>
            <span className="mx-2">•</span>
            <a href="#" className="hover:text-gray-400">
              Cookies
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

