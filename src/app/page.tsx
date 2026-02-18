import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-32 px-8 bg-white dark:bg-black font-sans">
      <h1 className="text-3xl font-semibold text-black dark:text-zinc-50 text-center mb-6">
        XianMa
      </h1>
      <p className="text-lg text-zinc-600 dark:text-zinc-400 text-center mb-12 max-w-md">
        AI-powered student behavior analysis and insights platform
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="https://vercel.com/new"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 w-full md:w-[158px] items-center justify-center gap-2 rounded-full bg-black text-white hover:bg-gray-800 transition-colors"
        >
          <Image
            className="dark:invert"
            src="/vercel.svg"
            alt="Vercel logomark"
            width={16}
            height={16}
          />
          Deploy Now
        </a>
        <a
          href="https://nextjs.org/docs"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 w-full md:w-[158px] items-center justify-center rounded-full border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
        >
          Documentation
        </a>
      </div>
    </main>
  );
}
