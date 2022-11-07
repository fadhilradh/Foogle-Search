import { GlobeIcon } from "@heroicons/react/solid";

function Footer() {
  return (
    <footer className="grid w-full divide-y-[1px] divide-gray-300 bg-gray-100 text-sm text-[rgba(0,0,0,.54)]">
      <div className="px-8 py-3 bg-[#F2F2F2]">
        <p>Indonesia</p>
      </div>
      <div className="grid grid-cols-1 ">
        <div className="flex justify-center space-x-8 whitespace-nowrap pt-5">
          <p>Settings</p>
          <p>Privacy</p>
          <p>Terms</p>
        </div>
        <div className="flex justify-center space-x-8 p-5">
          <p>Advertising</p>
          <p>Business</p>
          <p>About</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
