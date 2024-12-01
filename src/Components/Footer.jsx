import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-center bg-green-400">
      <footer className=" dark:bg-gray-900">
        <div className="container p-6 mx-auto">
          <div className="lg:flex">
            {/* Logo Section */}
            <div className="w-full -mx-6 lg:w-2/5">
              <div className="px-6">
                <a href="#">
                  <Image
                    className="w-auto h-7"
                    src="https://i.ibb.co.com/mRRwvMJ/logo.png" // Place the logo in the `public/images` folder
                    alt="Logo"
                    width={150}
                    height={50}
                  />
                </a>
                <p className="max-w-sm mt-2 text-gray-500 dark:text-gray-400">
                  Join 31,000+ others and never miss out on new tips, tutorials,
                  and more.
                </p>

                {/* Social Media Links */}
                <div className="flex mt-6 -mx-2">
                  <a
                    href="#"
                    className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                    aria-label="Reddit"
                  >
                    <svg
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="..."></path> {/* Add Reddit SVG Path */}
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                    aria-label="Facebook"
                  >
                    <svg
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="..."></path> {/* Add Facebook SVG Path */}
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                    aria-label="Github"
                  >
                    <svg
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="..."></path> {/* Add GitHub SVG Path */}
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Links Section */}
            <div className="mt-6 lg:mt-0 lg:flex-1">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div>
                  <h3 className="text-gray-700 uppercase dark:text-white">
                    About
                  </h3>
                  <a
                    href="#"
                    className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    Company
                  </a>
                  <a
                    href="#"
                    className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    Community
                  </a>
                  <a
                    href="#"
                    className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    Careers
                  </a>
                </div>
                <div>
                  <h3 className="text-gray-700 uppercase dark:text-white">
                    Blog
                  </h3>
                  <a
                    href="#"
                    className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    Tech
                  </a>
                  <a
                    href="#"
                    className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    Music
                  </a>
                  <a
                    href="#"
                    className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    Videos
                  </a>
                </div>
                {/* Add more sections as needed */}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
