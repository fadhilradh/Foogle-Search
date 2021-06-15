import Head from "next/head";
import Image from "next/image";
import Avatar from "../components/Avatar";
import { ViewGridIcon } from "@heroicons/react/outline";

export default function Home() {
  return (
    <div>
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
          <a>Images</a>
          {/* Icon */}
          <ViewGridIcon className="h-10 w-10 p-2" />
          {/* Avatar */}
          <Avatar url={"https://coaching.papareact.com/ai9"} />
        </div>
      </header>

      {/* Body */}

      {/* Footer */}
    </div>
  );
}
