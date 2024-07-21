import Link from "next/link";
import Intro from "./components/Intro";
import GithubIcon from "./components/social/Github";
import LinkedInIcon from "./components/social/LinkedIn";
import TwitterIcon from "./components/social/Twitter";
import InstagramIcon from "./components/social/Instagram";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div className="bg-green-950/80 p-8">
      <div className="md:flex relative min-h-screen items-center max-w-screen-xl mx-auto w-full">
        <div className="fixed left-5 hidden md:flex md:flex-col md:shrink-0 h-screen w-28 items-center">
          <div className="w-1 sm:h-60 h-30 bg-gradient-to-t from-[#c7ff5e]" />
          <div className="w-2 h-2 rounded-full bg-[#c7ff5e]" />
          <div className="text-green-100">
            <ul className="h-52 flex flex-col justify-between items-center my-2 py-2 mx-auto px-auto [&_li:hover]:text-yellow-100">
              <li>
                <Link href="https://github.com/emetos05">
                  <GithubIcon />
                </Link>
              </li>
              <li>
                <Link href="https://linkedin.com/in/danielemehin">
                  <LinkedInIcon />
                </Link>
              </li>
              <li>
                <Link href="">
                  <TwitterIcon />
                </Link>
              </li>
              <li>
                <Link href="">
                  <InstagramIcon />
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-2 h-2 rounded-full bg-[#c7ff5e]" />
          <div className="w-1 sm:h-60 h-30 bg-gradient-to-b from-[#c7ff5e]" />
        </div>
        <main className="md:flex md:flex-col md:w-full max-w-7xl min-h-screen md:px-36 text-yellow-100">
          <div>
            <h1 className="mb-4">Hi, I'm</h1>
          </div>
          <div>
            <h2 className="text-[#c7ff5e] text-4xl sm:text-6xl">Dan Emehin.</h2>
          </div>
          <div>
            <h3 className="green-100 text-4xl sm:text-6xl">
              I piece things together.
            </h3>{" "}
          </div>
          <div>
            <p className="mt-10 text-green-100">
              I'm a software engineer focused on building connected apps.
            </p>
          </div>
          <Intro />
          <Experience />
          <Projects />
        </main>
        <div className="fixed right-5 hidden md:flex md:flex-col md:shrink-0 h-screen w-28 items-center">
          <div className="w-1 sm:h-60 h-30 bg-gradient-to-t from-[#c7ff5e]" />
          <div className="w-2 h-2 rounded-full bg-[#c7ff5e]" />
          <div className="h-52 flex flex-col items-center my-2 py-2 mx-auto px-auto text-green-100 hover:text-yellow-100">
            <Link
              href="mailto:dan.emehin@gmail.com"
              className="[writing-mode:tb]">
              dan.emehin@gmail.com
            </Link>
          </div>
          <div className="w-2 h-2 rounded-full bg-[#c7ff5e]" />
          <div className="w-1 sm:h-60 h-30 bg-gradient-to-b from-[#c7ff5e]" />
        </div>
      </div>
    </div>
  );
}
