import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsDribbble,
} from "react-icons/bs";

export default function FooterCom() {
  return (
    <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white">
      <Footer
        container
        className="border border-t-8 border-teal-500 bg-transparent"
      >
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid w-full justify-between sm:flex md:grid-cols-1">
            <div className="mt-5 ml-5">
              <Link
                to="/"
                className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
              >
                <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                  Daily-Biz
                </span>
                
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <Footer.Title title="About" className="text-white" />
                <Footer.LinkGroup col>
                  <Footer.Link
                    href="/about"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white"
                  >
                    Daily-Biz 
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Follow us" className="text-white" />
                <Footer.LinkGroup col>
                  <Footer.Link
                    href="https://www.github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white"
                  >
                    Github
                  </Footer.Link>
                  <Footer.Link
                    target="_blank"
                    href="https://www.Discord.com/"
                    className="text-white"
                  >
                    Discord
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Legal" className="text-white" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#" className="text-white">
                    Privacy Policy
                  </Footer.Link>
                  <Footer.Link href="#" className="text-white">
                    Terms &amp; Conditions
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider className="border-gray-300" />
          <div className="w-full sm:flex sm:items-center sm:justify-between mt-3">
            <Footer.Copyright
              href="#"
              by="Daily-Biz"
              year={new Date().getFullYear()}
              className="text-white"
            />
            <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
              <Footer.Icon
                href="https://www.facebook.com/"
                icon={BsFacebook}
                className="text-white"
              />
              <Footer.Icon
                href="https://www.instagram.com/"
                icon={BsInstagram}
                className="text-white"
              />
              <Footer.Icon
                href="https://www.x.com/"
                icon={BsTwitter}
                className="text-white"
              />
              <Footer.Icon
                href="https://github.com/"
                icon={BsGithub}
                className="text-white"
              />
              <Footer.Icon href="#" icon={BsDribbble} className="text-white" />
            </div>
          </div>
        </div>
      </Footer>
    </div>
  );
}
