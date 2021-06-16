import Head from "next/head";
import Image from "next/image";
import Avatar from "../components/Avatar";
import { SearchIcon, ViewGridIcon } from "@heroicons/react/outline";
import { MicrophoneIcon } from "@heroicons/react/solid";
import Footer from "../components/Footer";
import { useRef } from "react";
import { useRouter } from "next/router";

export default function Home() {
  // searchInputRef.current.value = null;
  const router = useRouter();
  const searchInputRef = useRef(null);
  const search = async (event) => {
    event.preventDefault();
    const searchTerm = searchInputRef.current.value;
    if (!searchTerm) return;

    await router.push(`/search?term=${searchTerm}`);
  };

  const searchWithEnter = async (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      const searchTerm = searchInputRef.current.value;
      if (!searchTerm) return;

      await router.push(`/search?term=${searchTerm}`);
    }
    return;
  };
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <Head>
        <title>Google Clone</title>
        <meta name="description" content="Google clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex justify-end w-full h-14 items-center pr-5">
        <div className="flex space-x-4 items-center text-sm">
          <a className="link" href="https://gmail.com">
            Gmail
          </a>
          <a className="link">Images</a>
          <ViewGridIcon className="h-10 w-10 p-2" />
          <Avatar url={"https://coaching.papareact.com/ai9"} />
        </div>
      </header>

      <form className="flex flex-col items-center mt-44 flex-grow w-4/5">
        <Image
          src="/logo.png"
          width={300}
          height={100}
          alt="logo "
          className="h-20"
        />
        <div
          className="flex px-5 py-3 w-full max-w-md my-5 border border-gray-200 rounded-full 
        outline-none hover:shadow-google focus-within:shadow-google sm:max-w-xl lg:max-w-2xl"
        >
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input
            type="name"
            ref={searchInputRef}
            className="flex-grow focus:outline-none"
          />
          <MicrophoneIcon className="h-5 ml-3 text-gray-500" />
        </div>
        <div className="flex flex-col w-1/2 space-y-3 sm:space-x-5 justify-center mt-5 sm:space-y-0 sm:flex-row">
          <button
            onClick={search}
            type="submit"
            className="btn hidden md:inline-flex"
          >
            {/* onKeyDown={searchWithEnter}  */}
            Google Search
          </button>
          <button onClick={search} className="btn hidden md:inline-flex ">
            I'm Feeling Lucky
          </button>
        </div>
      </form>

      <Footer />
    </div>
  );
}
