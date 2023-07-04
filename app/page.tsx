import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-full mt-16 mx-9">
      <section className=" flex gap-6 w-full">
        <Image
          src="./images/icon-search.svg"
          alt="search"
          width="32"
          height="32"
        />
        <input
          className="bg-mainBlue w-full text-HeadingM opacity-50 text-pureWhite"
          type="text"
          placeholder="Search for movies or TV series"
        />
      </section>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none"></div>
      </div>
    </main>
  );
}
