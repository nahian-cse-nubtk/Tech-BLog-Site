import SignOut from "@/compnents/Buttons/SignOut";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";

import Image from "next/image";
import Link from "next/link";

const Navbar = async () => {
  const session = await getServerSession(authOptions);
  console.log(session)

  const links = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/allBlogs">All Blogs</Link>
      </li>
      <li>
        <Link href="/recentBlogs">Recent Blogs</Link>
      </li>
      <li>
        <Link href="/createBlog">Create Blog</Link>
      </li>

      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            aria-label="Open navigation menu"
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>

        <a className="btn btn-ghost text-xl">Tech Today</a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className=" navbar-end">
        {session?.user? (
          <div>
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className=" m-1">
                <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <Image width={50} height={50}
                  src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
              >
                <li>
                  <SignOut></SignOut>
                </li>

              </ul>
            </div>
          </div>
        ) : (
          <>
            <Link href="/login" className="btn mr-3 btn-primary">
              Login
            </Link>
            <Link href="/register" className="btn btn-primary">
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
