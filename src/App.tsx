import { useState } from "react";
import { project } from "./data/project.data";
import { FiArrowUpRight } from "react-icons/fi";
import { extend } from "@react-three/fiber";
import {
  useGLTF,
  useTexture,
  // Environment,
  // Lightformer,
} from "@react-three/drei";
import { MeshLineGeometry, MeshLineMaterial } from "meshline";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { IoDocumentAttachOutline } from "react-icons/io5";

extend({ MeshLineGeometry, MeshLineMaterial });
useGLTF.preload("/assets/3d/new.glb");
useGLTF.preload("/assets/3d/newcard.glb");
useGLTF.preload("/assets/images/cermuel.JPEG");
useTexture.preload("/assets/images/cermuel.JPEG");

function App() {
  const tabs = ["PROJECTS", "WORKS"];
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  return (
    <main className="w-screen h-screen lg:px-28 md:px-20 px-4 py-14 ">
      <section className="w-full lg:h-screen flex flex-col">
        <nav className="flex w-full justify-between items-center h-10">
          <h1 className="logo text-[#d0d3f5fa] font-medium md:text-xl ">{`<Cermuel />`}</h1>

          <img src="/icon.png" className="h-[80%] md:h-full" alt="" />
        </nav>
        <div className="flex-1 max-lg:pt-20 flex flex-wrap justify-between items-center w-full gap-10">
          <div className="w-full lg:max-w-[50%] space-y-5 md:space-y-10">
            <h1 className="text-[#e7e8fb] uppercase tracking-tighter md:text-5xl text-3xl lg:text-8xl font-bold leading-[100%] lg:leading-[80%]">
              Frontend <br className="max-lg:hidden" />
              <span className="lg:pl-10 text-[#d0d3f5fa]">Engineer</span>
            </h1>
            <h3 className="text-[#d0d3f5fa] font-medium text-xs md:text-sm">
              Hi! I'm Samuel. A creative Frontend Engineer with 3+ years of
              experience in building high-performance, scalable, and responsive
              web solutions.
            </h3>
            <a
              href="#contact"
              className="text-[#e7e8fb] block text-center w-full border-[1.5px] border-[text-[#e7e8fb] py-3 max-md:text-sm md:py-4 hover:text-black duration-300 cursor-pointer hover:bg-[#d0d3f5fa]"
            >
              SAY HELLO
            </a>
          </div>
          <div className="flex lg:flex-col max-lg:self-center max-lg:w-full  max-lg:justify-center lg:items-end gap-10">
            <div className="flex flex-col items-center md:items-end">
              <h1 className="font-bold text-2xl md:text-5xl text-[#d0d3f5fa]">
                3<span className="md:text-2xl text-base">+</span>
              </h1>
              <p className="max-md:text-sm text-gray-500">
                Years of Experience
              </p>
            </div>
            <div className="flex flex-col items-center md:items-end">
              <h1 className="font-bold text-2xl md:text-5xl text-[#d0d3f5fa]">
                10<span className="md:text-2xl text-base">+</span>
              </h1>
              <p className="max-md:text-sm text-gray-500">Completed Projects</p>
            </div>
            <div className="flex flex-col items-center md:items-end">
              <h1 className="font-bold text-2xl md:text-5xl text-[#d0d3f5fa]">
                800k<span className="md:text-2xl text-base">+</span>
              </h1>
              <p className="max-md:text-sm text-gray-500">Hours worked</p>
            </div>
          </div>
          {/* <div className="flex-1 lg:block hidden top-0 right-0 w-screen h-screen">
            <Canvas
              camera={{ position: [0, 0, 15], fov: 25 }}
              style={{
                backgroundColor: "transparent", // Transparent background
                flex: 1,
              }}
            >
              <ambientLight intensity={Math.PI} />
              <Physics
                debug={false}
                interpolate
                gravity={[0, -40, 0]}
                timeStep={1 / 60}
              >
                <Band />
              </Physics>
              <Environment background blur={0.75}>
                <Lightformer
                  intensity={2}
                  color="white"
                  position={[0, -1, 5]}
                  rotation={[0, 0, Math.PI / 3]}
                  scale={[100, 0.1, 1]}
                />
                <Lightformer
                  intensity={3}
                  color="white"
                  position={[-1, -1, 1]}
                  rotation={[0, 0, Math.PI / 3]}
                  scale={[100, 0.1, 1]}
                />
                <Lightformer
                  intensity={10}
                  color="white"
                  position={[1, 1, 1]}
                  rotation={[0, 0, Math.PI / 3]}
                  scale={[100, 0.1, 1]}
                />
                <Lightformer
                  intensity={3}
                  color="white"
                  position={[-10, 0, 14]}
                  rotation={[0, Math.PI / 2, Math.PI / 3]}
                  scale={[100, 10, 1]}
                />
              </Environment>
            </Canvas>
          </div> */}
        </div>
      </section>
      <section className="w-full md:h-screen md:pt-10 pt-28">
        <div className="text-[#d0d3f5fa] font-medium text-sm md:text-lg underline w-full text-center flex items-center justify-center underline-offset-4 gap-4">
          {selectedTab == tabs[0] ? (
            <p>My Projects</p>
          ) : (
            <p>Work for Clients / Company</p>
          )}
        </div>
        <div className="w-full flex md:hidden gap-4 mt-10">
          {tabs.map((tab: string, index: number) => (
            <div
              key={index}
              onClick={() => setSelectedTab(tab)}
              className={`flex ${
                selectedTab == tab ? "text-white flex-1" : "w-28"
              }  gap-2 max-md:text-xs font-medium text-gray-500 group duration-300 h-10 hover:text-white hover:flex-1 transition-all items-center cursor-pointer`}
            >
              <div
                className={`flex-1 h-[1px] bg-gray-500 transition-all  group-hover:bg-white group-hover:flex-1 ${
                  selectedTab == tab && "bg-white flex-1"
                }`}
              ></div>
              <p>{tab}</p>
            </div>
          ))}
          <a
            target="_blank"
            href="https://github.com/cermuel"
            className="flex w-28 gap-2 font-medium max-md:text-xs text-gray-500 group h-10 hover:text-white hover:flex-1 transition-all items-center cursor-pointer"
          >
            <div
              className={`flex-1 h-[1px] bg-gray-500 transition-all duration-300 group-hover:bg-white group-hover:w-28`}
            ></div>
            <p>SEE MORE</p>
          </a>
        </div>
        <div className="flex flex-1 max-md:flex-col items-center md:gap-40">
          <div className="w-[20%] flex flex-col max-md:hidden">
            {tabs.map((tab: string, index: number) => (
              <div
                key={index}
                onClick={() => setSelectedTab(tab)}
                className="flex gap-2 font-medium text-gray-500 group hover:text-white transition-all p-4 items-center cursor-pointer"
              >
                <div
                  className={`w-20 h-[1px] bg-gray-500 transition-all duration-300 group-hover:bg-white group-hover:w-28 ${
                    selectedTab == tab && "bg-white w-28"
                  }`}
                ></div>
                <p>{tab}</p>
              </div>
            ))}
            <a
              target="_blank"
              href="https://github.com/cermuel"
              className="flex gap-2 font-medium text-gray-500 group hover:text-white transition-all p-4 items-center cursor-pointer"
            >
              <div
                className={`w-20 h-[1px] bg-gray-500 transition-all duration-300 group-hover:bg-white group-hover:w-28`}
              ></div>
              <p>SEE MORE</p>
            </a>
          </div>

          <div className="md:max-h-[80vh] w-full md:flex-1 overflow-y-scroll ">
            {selectedTab == tabs[0] ? (
              <div className="flex-1 md:flex md:flex-wrap gap-8 md:py-20 py-10 md:justify-center overflow-y-scroll grid grid-cols-1 place-items-center">
                {project.projects.map((project: any, index: number) => (
                  <div
                    key={index}
                    className="w-full group md:max-w-[300px] flex flex-col justify-between aspect-square bg-[#16161b] p-6 md:p-8 relative overflow-hidden transition-all duration-300"
                  >
                    <div className="flex flex-col md:gap-5 gap-3">
                      <h1 className="logo hover:scale-[101%] transition-all duration-150 max-md:font-medium md:text-lg text-[#e7e8fb]">
                        {project.title}
                      </h1>
                      <h2 className="logo hover:scale-[101%] transition-all duration-150 text-[10px] md:text-xs uppercase text-[#e7e8fbda]">
                        {project.stack}
                      </h2>
                      <p className="logo hover:scale-[101%] transition-all duration-150 text-xs text-[#e7e8fb9a]">
                        {project.description}
                      </p>
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      className="text-sm flex gap-1 items-center text-[#e7e8fb] opacity-80 hover:opacity-100"
                    >
                      <FiArrowUpRight color="#e7e8fb" /> LIVE
                    </a>
                    <div className="line absolute bottom-0 left-[-100%] h-[2px] bg-[#e7e8fb] w-full group-hover:left-0 transition-all duration-300"></div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-2 h-full flex-1 md:gap-4 gap-2 md:py-20 py-10 place-items-center md:pl-20 duration-300 transition-all">
                {project.works.map((work: any, index: number) => (
                  <div
                    key={index}
                    className={`${
                      index % 2 && "mt-10" // Keep it conditional if you need different margins
                    } col-span-1 max-w-[500px] group w-full opacity-80 hover:opacity-100 hover:max-md:scale-[110%] hover:scale-120 flex flex-col justify-between h-full bg-[#16161b] p-8 relative overflow-hidden transition-all duration-300`}
                  >
                    <div className="flex flex-col md:gap-5 gap-3">
                      <h1 className="logo hover:scale-[101%] transition-all duration-150 max-md:font-medium md:text-lg text-[#e7e8fb]">
                        {work.title}
                      </h1>
                      <h2 className="logo hover:scale-[101%] transition-all duration-150 text-[10px] md:text-xs uppercase text-[#e7e8fbda]">
                        {work.stack}
                      </h2>
                      <p className="logo hover:scale-[101%] transition-all duration-150 text-xs text-[#e7e8fb9a]">
                        {work.description}
                      </p>
                    </div>
                    <a
                      href={work.link}
                      target="_blank"
                      className="text-sm flex gap-1 items-center text-[#e7e8fb] opacity-80 hover:opacity-100"
                    >
                      <FiArrowUpRight color="#e7e8fb" /> LIVE
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
      <section className="w-full md:pt-10 py-28 md:pb-40" id="contact">
        <h1 className="text-[#e7e8fb] md:text-5xl text-3xl lg:text-7xl logo font-bold leading-[105%]">
          Don't be a stranger
        </h1>
        <h3 className="text-[#d0d3f5fa] font-medium text-xs md:text-sm my-6 md:my-10">
          CONNECT WITH ME ONLINE
        </h3>
        <ul className="flex items-center gap-5">
          <li className="relative group overflow-hidden">
            <a
              href="mailto:samuelobasi2005@gmail.com"
              className="flex sm:gap-1 gap-[2px] items-center text-[#e7e8fb] text-xs md:text-sm"
            >
              <MdOutlineMarkEmailUnread className="text-base sm:text-[20px]" />
              Email
            </a>
            <div className="absolute bottom-0 left-[-100%] group-hover:left-0 translate-all duration-300 w-full h-[1px] bg-[#e7e8fb]"></div>
          </li>
          <li className="relative group overflow-hidden">
            <a
              href="https://github.com/cermuel"
              target="_blank"
              className="flex gap-1 items-center text-[#e7e8fb]  text-xs md:text-sm"
            >
              <FaGithub className="text-sm sm:text-lg" />
              Github
            </a>
            <div className="absolute bottom-0 left-[-100%] group-hover:left-0 translate-all duration-300 w-full h-[1px] bg-[#e7e8fb]"></div>
          </li>
          <li className="relative group overflow-hidden">
            <a
              href="https://www.linkedin.com/in/ngene-samuel-obasi/"
              target="_blank"
              className="flex gap-1 items-center text-[#e7e8fb]  text-xs md:text-sm"
            >
              <FaLinkedin className="text-base sm:text-[20px]" />
              LinkedIn
            </a>
            <div className="absolute bottom-0 left-[-100%] group-hover:left-0 translate-all duration-300 w-full h-[1px] bg-[#e7e8fb]"></div>
          </li>
          <li className="relative group overflow-hidden">
            <a
              href="/files/resume-u.pdf"
              target="_blank"
              className="flex gap-[3px] items-center text-[#e7e8fb]  text-xs md:text-sm"
            >
              <IoDocumentAttachOutline className="text-sm sm:text-[20px]" />
              Resume
            </a>
            <div className="absolute bottom-0 left-[-100%] group-hover:left-0 translate-all duration-300 w-full h-[1px] bg-[#e7e8fb]"></div>
          </li>
        </ul>
      </section>
      <section className="w-full border-t border-t-[#d0d3f5fa] py-10 flex items-center justify-between">
        <h1 className="text-[#d0d3f5] max-[500px]:text-xs text-sm font-medium">
          Ngene Samuel <span className="max-md:hidden">Obasi</span> &copy;{" "}
          {new Date().getFullYear()}
        </h1>
        <a
          href="mailto:samuelobasi2005@gmail.com"
          className="underline text-[#d0d3f5] max-[500px]:text-[10px] text-xs md:text-base"
        >
          samuelobasi2005@gmail.com
        </a>
      </section>
    </main>
  );
}

export default App;
