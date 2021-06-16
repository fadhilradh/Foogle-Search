import Head from "next/head";
import SearchPageHeader from "../components/SearchPageHeader";
import HeaderTabs from "../components/HeaderTabs";

function Search() {
  return (
    <div>
      <Head>
        <title>Google Search</title>
      </Head>

      <SearchPageHeader />
      <HeaderTabs />

      <div></div>
    </div>
  );
}

export default Search;
