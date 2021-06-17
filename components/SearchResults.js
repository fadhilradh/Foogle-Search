import PaginationButtons from "./PaginationButtons";

function SearchResults({ results }) {
  return (
    <div
      className="mx-auto w-full text-sm px-3 sm:pl-[5%] 
    md:pl-[14%] lg:text-base lg:pl-40 mt-5 ml-6"
    >
      <p className="text-[#70757a]">
        About {results?.searchInformation?.formattedTotalResults} results (
        {results?.searchInformation?.formattedSearchTime} seconds)
      </p>

      {results.items?.map((result) => (
        <div key={result.link} className="max-w-xl mt-8">
          <div className="mb-1 group">
            <a href={result.link} className="text-sml mb-1 line-clamp-1">
              {result.formattedUrl}
            </a>
            <a href={result.link} className="">
              <h2 className="truncate text-xl text-[#1a0dab] group-hover:underline">
                {result.title}
              </h2>
            </a>
          </div>
          <div className="lg:text-[14px] text-[#4d5156] line-clamp-2">
            {result.snippet}
          </div>
        </div>
      ))}

      <PaginationButtons />
    </div>
  );
}

export default SearchResults;
