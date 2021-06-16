import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import Avatar from "./Avatar";
import HeaderTabs from "./HeaderTabs";

function SearchPageHeader() {
  const router = useRouter();
  const searchInputRef = useRef(null);
  const search = (event) => {
    event.preventDefault();

    const term = searchInputRef.current.value;
    if (!term) return;
    router.push(`/search?term=${term}`);
  };
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex flex-col w-full p-6 items-center sm:items-start">
        <div className="flex w-full justify-center sm:justify-start mb-3">
          <div className="flex-1 sm:hidden"></div>
          <Image
            className="cursor-pointer flex-1 "
            src="/logo.png"
            width={120}
            height={30}
            onClick={() => router.push("/")}
          />
          <div className="flex-1 flex justify-end ">
            <Avatar className="" url={"/fadhil.jpeg"} />
          </div>
        </div>

        <form
          className="flex sm:ml-36 md:ml-10 sm:justify-start w-full flex-grow max-w-3xl items-center border border-gray-300 
        rounded-full px-6 py-3 sm:mr-5 shadow-google"
        >
          <input
            type="text"
            ref={searchInputRef}
            className="flex-grow focus:outline-none"
            defaultValue={router.query.term}
          />
          <XIcon
            className="h-7 text-gray-300 cursor-pointer transition duration-100 transform hover:scale-125 sm:mr-3"
            onClick={() => (searchInputRef.current.value = "")}
          />
          <MicrophoneIcon className="h-7 text-blue-500 hidden sm:flex border-l-2 pl-3 border-l-gray-400" />
          <SearchIcon className="h-7 text-blue-500 ml-3 hidden sm:inline-flex" />
          <button className="hidden" type="submit" onClick={search} />
        </form>
      </div>
      <HeaderTabs />
    </header>
  );
}

export default SearchPageHeader;
