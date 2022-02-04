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
      const term = searchInputRef.current.value;
      if (!term) return;

      await router.push(`/search?term=${term}`);
   };

   const searchWithEnter = async (event) => {
      if (event.keyCode === 13) {
         event.preventDefault();
         const term = searchInputRef.current.value;
         if (!term) return;

         await router.push(`/search?term=${term}`);
      }
      return;
   };
   return (
      <div className="flex flex-col h-screen items-center justify-center">
         <Head>
            <title>Foogle Search</title>
            <meta name="description" content="Foogle" />
            <link rel="icon" href="/google-header.jpeg" />
         </Head>

         <header className="flex justify-end w-full h-14 items-center pr-5">
            <div className="flex space-x-4 items-center text-sm">
               <a className="link" href="https://gmail.com">
                  Fmail
               </a>
               <a className="link" href="https://images.google.com/">
                  Images
               </a>
               <ViewGridIcon className="h-10 w-10 p-2" />
               <Avatar url={"/fadhil.jpeg"} />
            </div>
         </header>

         <form className="flex flex-col items-center mt-24 flex-grow w-11/12">
            <img
               src="/logo-parody.png"
               alt="logo "
               className="h-20 w-52 sm:h-24 sm:w-56"
            />
            <div
               className="flex items-center px-4 py-2 w-full max-w-lg my-5 border border-gray-200 rounded-full 
        outline-none hover:shadow-google focus-within:shadow-google sm:max-w-xl "
            >
               <SearchIcon className="h-5 mr-3 text-gray-400" />
               <input
                  type="name"
                  ref={searchInputRef}
                  className="flex-grow focus:outline-none"
               />
               <MicrophoneIcon className="hidden sm:inline-flex h-5 ml-3 text-gray-500" />
            </div>
            <div className="flex flex-col w-1/2 space-y-3 sm:space-x-5 justify-center  sm:space-y-0 sm:flex-row">
               <button
                  onClick={search}
                  type="submit"
                  className="btn hidden md:inline-flex text-gray-700 font-normal"
               >
                  Foogle Search
               </button>
            </div>
         </form>

         <Footer />
      </div>
   );
}
