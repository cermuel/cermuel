import { useState } from "react";
import { project } from "./data/project.data";
import { FiArrowUpRight } from "react-icons/fi";
import { Canvas, extend } from "@react-three/fiber";
import {
  useGLTF,
  useTexture,
  Environment,
  Lightformer,
} from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { MeshLineGeometry, MeshLineMaterial } from "meshline";
import Band from "./components/Band";
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
    <main className="w-screen h-screen px-28 py-14 ">
      <section className="w-full h-screen flex flex-col">
        <nav className="flex w-full justify-between items-center h-10">
          <h1 className="logo text-[#d0d3f5fa] font-medium text-xl">{`<Cermuel />`}</h1>

          <img src="/icon.png" className="h-full" alt="" />
        </nav>
        <div className="flex-1 flex justify-between items-start w-full gap-10">
          <div className="max-md:w-full lg:max-w-[50%] space-y-10 md:mt-40">
            <h1 className="text-[#e7e8fb] text-7xl font-bold leading-[105%]">
              Frontend <br /> Developer
            </h1>
            <h3 className="text-[#d0d3f5fa] font-medium text-sm">
              Frontend isn't just what users see, it's what they feel. I build
              both.
            </h3>
            <a
              href="#contact"
              className="text-[#e7e8fb] block text-center w-full border-[1.5px] border-[text-[#e7e8fb] py-4 cursor-pointer hover:bg-[#e7e8fb3A]"
            >
              SAY HELLO
            </a>
          </div>

          <div className="flex-1  top-0 right-0 w-screen h-screen">
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
          </div>
        </div>
      </section>
      <section className="w-full h-screen pt-10">
        <div className="text-[#d0d3f5fa] font-medium text-lg underline w-full text-center flex items-center justify-center underline-offset-4 gap-4">
          {selectedTab == tabs[0] ? (
            <p>My Projects</p>
          ) : (
            <p>Work for Clients / Company</p>
          )}
        </div>
        <div className="flex flex-1 items-center md:gap-40">
          <div className="w-[20%] flex flex-col">
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
          <div className="max-h-[80vh] flex-1 overflow-y-scroll ">
            {selectedTab == tabs[0] ? (
              <div className="flex-1 flex flex-wrap gap-8 py-20 justify-center overflow-y-scroll">
                {project.projects.map((project: any, index: number) => (
                  <div
                    key={index}
                    className="w-full group max-w-[300px] flex flex-col justify-between aspect-square bg-[#16161b] p-8 relative overflow-hidden transition-all duration-300"
                  >
                    <div className="flex flex-col gap-5">
                      <h1 className="logo hover:scale-[101%] transition-all duration-150 text-lg text-[#e7e8fb]">
                        {project.title}
                      </h1>
                      <h2 className="logo hover:scale-[101%] transition-all duration-150 text-xs uppercase text-[#e7e8fbda]">
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
              <div className="grid grid-cols-2 h-full flex-1 gap-4 py-20 place-items-center pl-20 duration-300 transition-all">
                {project.works.map((work: any, index: number) => (
                  <div
                    key={index}
                    className={`${
                      index % 2 && "mt-10" // Keep it conditional if you need different margins
                    } col-span-1 max-w-[500px] group w-full opacity-80 hover:opacity-100 hover:scale-120 flex flex-col justify-between h-full bg-[#16161b] p-8 relative overflow-hidden transition-all duration-300`}
                  >
                    <div className="flex flex-col gap-5">
                      <h1 className="logo hover:scale-[101%] transition-all duration-150 text-lg text-[#e7e8fb]">
                        {work.title}
                      </h1>
                      <h2 className="logo hover:scale-[101%] transition-all duration-150 text-xs uppercase text-[#e7e8fbda]">
                        {work.stack}
                      </h2>
                      <p className="logo hover:scale-[101%] transition-all duration-150 text-xs text-[#e7e8fb9a]">
                        {work.description}
                      </p>
                    </div>
                    <a
                      target="_blank"
                      href={work.link}
                      className="text-sm flex gap-1 items-center text-[#e7e8fb] opacity-60 hover:opacity-100"
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
      <section className="w-full pt-10 pb-40" id="contact">
        <h1 className="text-[#e7e8fb] text-5xl logo font-bold leading-[105%]">
          Don't be a stranger
        </h1>
        <h3 className="text-[#d0d3f5fa] font-medium text-sm my-10">
          CONNECT WITH ME ONLINE
        </h3>
        <ul className="flex items-center gap-5">
          <li className="relative group overflow-hidden">
            <a
              href="mailto:samuelobasi2005@gmail.com"
              className="flex gap-1 items-center text-[#e7e8fb] text-sm"
            >
              <MdOutlineMarkEmailUnread size={20} />
              Email
            </a>
            <div className="absolute bottom-0 left-[-100%] group-hover:left-0 translate-all duration-300 w-full h-[1px] bg-[#e7e8fb]"></div>
          </li>
          <li className="relative group overflow-hidden">
            <a
              href="https://github.com/cermuel"
              target="_blank"
              className="flex gap-1 items-center text-[#e7e8fb] text-sm"
            >
              <FaGithub size={18} />
              Github
            </a>
            <div className="absolute bottom-0 left-[-100%] group-hover:left-0 translate-all duration-300 w-full h-[1px] bg-[#e7e8fb]"></div>
          </li>
          <li className="relative group overflow-hidden">
            <a
              href="https://www.linkedin.com/in/ngene-samuel-obasi/"
              target="_blank"
              className="flex gap-1 items-center text-[#e7e8fb] text-sm"
            >
              <FaLinkedin size={20} />
              LinkedIn
            </a>
            <div className="absolute bottom-0 left-[-100%] group-hover:left-0 translate-all duration-300 w-full h-[1px] bg-[#e7e8fb]"></div>
          </li>
          <li className="relative group overflow-hidden">
            <a
              href="/files/resume.pdf"
              target="_blank"
              className="flex gap-[3px] items-center text-[#e7e8fb] text-sm"
            >
              <IoDocumentAttachOutline size={20} />
              Resume
            </a>
            <div className="absolute bottom-0 left-[-100%] group-hover:left-0 translate-all duration-300 w-full h-[1px] bg-[#e7e8fb]"></div>
          </li>
        </ul>
      </section>
      <section className="w-full border-t border-t-[#d0d3f5fa] py-10 flex items-center justify-between">
        <h1 className="text-[#d0d3f5]">
          {" "}
          Ngene Samuel Obasi &copy; {new Date().getFullYear()}
        </h1>
        <a
          href="mailto:samuelobasi2005@gmail.com"
          className="underline text-[#d0d3f5]"
        >
          samuelobasi2005@gmail.com
        </a>
      </section>
    </main>
  );
}

export default App;
