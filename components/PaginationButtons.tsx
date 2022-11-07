import { useRouter } from "next/router";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

function PaginationButtons() {
  const router = useRouter();
  const startIndex = Number(router.query.start) || 0;
  return (
    <div className="my-5 flex max-w-lg text-blue-800 justify-around">
      {startIndex >= 10 && (
        <Link
          href={`/search?term=${router.query.term}&start=${startIndex - 10}`}
        >
          <div className="flex flex-col flex-grow items-center cursor-pointer hover:underline ">
            <ChevronLeftIcon className="h-5" />
            <p>Previous</p>
          </div>
        </Link>
      )}

      <Link href={`/search?term=${router.query.term}&start=${startIndex + 10}`}>
        <div className="flex flex-col flex-grow items-center cursor-pointer hover:underline ">
          <ChevronRightIcon className="h-5" />
          <p>Next</p>
        </div>
      </Link>
    </div>
  );
}

export default PaginationButtons;
