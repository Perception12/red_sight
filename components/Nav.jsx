"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";

const Nav = () => {
  const { data: session } = useSession();

  const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <nav className="w-full flex-between mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          alt="Promptopia Logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">RedSight</p>
      </Link>

      {/* Desktop Navigation */}
      <div className="sm:flex hidden">
        {session?.user ? (
          <div className="flex gap-3 md:gap-5">
            <button type="button" onClick={() => signOut({callbackUrl: "/login"})} className="outline_btn">
              Sign Out
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative">
        {session?.user ? (
          <div className="flex">
            {toggleDropdown && (
              <div className="dropdown">
                <button
                  type="button"
                  className="w-full mt-5 black_btn"
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
};

export default Nav;
