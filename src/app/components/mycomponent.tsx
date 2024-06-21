import Link from "next/link";
import Image from "next/image";

const MyComponent = () => {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <header className="px-4 lg:px-6 h-14 flex items-center shadow-lg">
        <Link href="#" className="flex items-center justify-center transform hover:scale-105 transition-transform duration-300" prefetch={false}>
          <MountainIcon className="h-6 w-6 text-white" />
          <span className="sr-only">Stock Stash</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          {['Home', 'About', 'Contact', 'User'].map((item) => (
            <Link key={item} href="#" className="text-sm font-medium hover:underline underline-offset-4 transform hover:scale-105 transition-transform duration-300" prefetch={false}>
              {item}
            </Link>
          ))}
        </nav>
      </header>
      <main className="flex-1">
        <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 overflow-hidden">
          <video className="absolute top-0 left-0 w-full h-full object-cover z-0" autoPlay loop muted>
            <source src="/7101912-uhd_2560_1440_25fps.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="relative z-10 container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
                    Welcome to Stock Stash.
                  </h1>
                  <p className="max-w-[600px] text-white md:text-xl">
                    We provide high-quality products and services to our customers.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow-lg transform hover:scale-105 hover:bg-blue-700 transition-transform duration-300"
                    prefetch={false}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
              <div className="relative mx-auto aspect-w-16 aspect-h-9 aspect-video overflow-hidden rounded-xl shadow-xl sm:w-full lg:order-last lg:aspect-square">
                <Image
                  src="/pexels-rostislav-5011647.jpg"
                  layout="fill"
                  objectFit="cover"
                  alt="Hero"
                  className="object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-white/10">
        <p className="text-xs text-white/70">&copy; 2024 Stock Stash. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4 transform hover:scale-105 transition-transform duration-300" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 transform hover:scale-105 transition-transform duration-300" prefetch={false}>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
};

export default MyComponent;

const MountainIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
};
