import HeaderTab from "./HeaderTab";
import {
   SearchIcon,
   NewspaperIcon,
   MapIcon,
   PhotographIcon,
   PlayIcon,
   DotsVerticalIcon,
} from "@heroicons/react/outline";

function HeaderTabs() {
   return (
      <div
         className="flex justify-evenly w-full text-sm lg:text-base lg:justify-start 
    lg:space-x-36 lg:pl-48 text-[#5f6368] border-b-[#EBEBEB] border-b"
      >
         <div className="flex space-x-6">
            <HeaderTab Icon={SearchIcon} title="All" selected />
            <HeaderTab
               Icon={PhotographIcon}
               title="Images"
               href="https://images.google.com/"
            />
            <HeaderTab
               Icon={NewspaperIcon}
               title="News"
               href="https://news.google.com/"
            />
            <HeaderTab
               Icon={PlayIcon}
               title="Video"
               href="https://www.youtube.com/"
            />
            <HeaderTab
               Icon={MapIcon}
               title="Map"
               href="https://maps.google.com/"
            />
            <HeaderTab Icon={DotsVerticalIcon} title="More" />
         </div>

         <div className="flex space-x-4">
            <p className="link ">Settings</p>
            <p className="link ">Tools</p>
         </div>
      </div>
   );
}

export default HeaderTabs;
