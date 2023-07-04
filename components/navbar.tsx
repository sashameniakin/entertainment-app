"use client";

import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col justify-between bg-secBlue w-24 h-screen items-center my-8 ml-8 rounded-[20px]">
      <section className="flex flex-col items-center gap-20 mt-9">
        <Image src="./images/logo.svg" alt="logo" width="32" height="25" />
        <aside className="flex flex-col items-center gap-11">
          <Link href="/">
            <Image
              src={`${
                pathname == "/"
                  ? "./images/nav/icon-nav-home-active.svg"
                  : "./images/nav/icon-nav-home.svg"
              }`}
              alt="home"
              width="20"
              height="20"
            />
          </Link>
          <Link href="/movies">
            <Image
              src={`${
                pathname.startsWith("/movies")
                  ? "./images/nav/icon-nav-movies-active.svg"
                  : "./images/nav/icon-nav-movies.svg"
              }`}
              alt="movies"
              width="20"
              height="20"
            />
          </Link>
          <Link href="/series">
            <Image
              src={`${
                pathname.startsWith("/series")
                  ? "./images/nav/icon-nav-tv-series-active.svg"
                  : "./images/nav/icon-nav-tv-series.svg"
              }`}
              alt="tv-series"
              width="20"
              height="20"
            />
          </Link>
          <Link href="/bookmarked">
            <Image
              src={`${
                pathname.startsWith("/bookmarked")
                  ? "./images/nav/icon-nav-bookmark-active.svg"
                  : "./images/nav/icon-nav-bookmark.svg"
              }`}
              alt="bookmark"
              width="17"
              height="20"
            />
          </Link>
        </aside>
      </section>
      <Image
        src="/images/image-avatar.png"
        alt="avatar"
        width="40"
        height="40"
        className="mb-8"
      />
    </nav>
  );
};
export default Navbar;
