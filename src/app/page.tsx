import ThemeToggle from "./components/ThemeToggle";
import InviteSection from "./components/InviteSection"
export default function Home() {

  return (
    <div className="flex flex-col min-h-dvh w-full items-center justify-center font-sans">
      <nav className="relative top-0 left-0 z-50 px-3 py-2 w-full flex justify-between items-center bg-nav-light dark:bg-nav-dark">
      <b className="animate-wiggle text-text-light dark:text-dark select-none"><span className="text-2xl">Nomad</span> worker community </b>
        <ThemeToggle />
      </nav>
      <main className="z-40 flex w-full min-h-dvh flex-col items-center justify-center p-2 bg-bg-light dark:bg-bg-dark text-text-dark dark:text-text-light">
        <InviteSection />
      </main>
    </div>
  );
}
