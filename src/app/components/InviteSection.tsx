import Link from "next/link";
export default function InviteSection() {

    return (
        <section className="max-w-md h-full p-1 flex justify-center items-center flex-col">
            <h1 className="text-2xl font-bold text-center mb-3">Hiring | Working</h1>
            <p className="text-center mb-6 p-2">Join our Nomad worker community on Discord to connect with fellow nomads, share experiences, and explore job opportunities worldwide!</p>
            <button className="p-3 rounded bg-indigo-600 dark:bg-bg-light text-white dark:text-text-dark font-bold w-fit cursor-pointer transition-all animate-joindiscord">
                <Link href="https://discord.gg/nutPzTSdeu" target="_blank">Join nomad discord</Link>
            </button>
        </section>
    )
}