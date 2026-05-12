import Image from "next/image";
import { PROFILE } from "../../constants/profile.constants";
import { ThemeToggle } from "./ThemeToggle";

export function TopNav() {
  return (
    <nav className="flex h-10 w-full items-center justify-between">
      <div className="flex items-center gap-1">
        <Image
          src={PROFILE.icon}
          className="rounded-full max-sm:size-10"
          alt=""
          width={32}
          height={32}
          priority
        />
        <h1 className="text-[15px]">{PROFILE.name}</h1>
      </div>
      <ThemeToggle />
    </nav>
  );
}
