import { useState } from "react";
import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
  HomeIcon,
  CheckBadgeIcon,
  UserIcon,
  BoltIcon,
  Bars3Icon,
  XMarkIcon,
  RectangleStackIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

export default function Header() {
  const [clicked, setClicked] = useState(false);

  function clickHandler() {
    clicked ? setClicked(false) : setClicked(true);
  }

  return (
    <header>
      <div>
        <div
          className={
            "flex m-5 justify-between items-center h-auto " +
            (clicked && "flex-wrap")
          }
        >
          <div
            className={
              clicked
                ? "order-1 flex-bits flex-col mt-5"
                : "hidden sm:flex flex-grow max-w-2xl justify-evenly"
            }
          >
            <HeaderItem title="HOME" Icon={HomeIcon} />
            <HeaderItem title="TRENDING" Icon={BoltIcon} />
            <HeaderItem title="VERIFIED" Icon={CheckBadgeIcon} />
            <HeaderItem title="COLLECTIONS" Icon={RectangleStackIcon} />
            <HeaderItem title="SEARCH" Icon={MagnifyingGlassIcon} />
            <HeaderItem title="ACCOUNT" Icon={UserIcon} />
          </div>

          <Image
            className="object-contain"
            src="https://links.papareact.com/ua6"
            width={200}
            height={100}
          />

          <button className="sm:hidden" onClick={clickHandler}>
            {clicked ? (
              <XMarkIcon className="h-8 mb-1 hover:text-white" />
            ) : (
              <Bars3Icon className="h-8 mb-1 hover:text-white" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
