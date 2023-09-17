import ModeToggle from "./ModeToggle";

export default function Header() {
  return (
    <nav
      className="flex justify-center sticky inset-0 z-10 h-max w-full max-w-full rounded-none
         border border-white/80 bg-white py-2 px-4 text-white shadow-md backdrop-blur-2xl
         backdrop-saturate-200 md:px-8 md:py-4 transition-all dark:bg-black dark:border-black/80">
      <div className="flex items-center text-gray-900 container justify-start">
        <a
          href="/"
          className="flex items-center mr-4 cursor-pointer py-1.5 font-sans text-base font-medium leading-relaxed text-inherit antialiased dark:text-white">
          Posts
        </a>
      </div>
      <div className="flex items-center gap-6">
        <div className="block p-1 text-gray-800 text-sm font-normal leading-normal antialiased hover:subpixel-antialiased">
          <div className="flex items-center">
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
