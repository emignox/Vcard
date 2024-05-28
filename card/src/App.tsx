import { FaJs, FaReact, FaGitAlt, FaFigma } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiBootstrap } from "react-icons/si";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#064E3B]  p-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-3xl flex flex-col transform transition-transform duration-300 hover:scale-105">
        <img
          className="w-full h-64 md:h-96 opacity-95 object-cover transition-opacity duration-500 hover:opacity-80"
          src="/DSC00739.JPG"
          alt="V-Card Image"
        />
        <div className="p-6 flex flex-col justify-between flex-grow">
          <h2 className="text-4xl font-bold text-gray-800 mb-2 ">
            Polizzotto Emanuele
          </h2>
          <h3 className="text-2xl font-semibold  text-gray-700 mb-2 ">
            Front-end Developer
          </h3>
          <p className="text-gray-600 ">
            Specializing in modern front-end technologies, I build user-friendly
            and responsive websites and applications.
          </p>
          <div className="mt-4">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Skills</h4>
            <ul className="flex flex-wrap gap-3  text-gray-600">
              <li className="flex items-center space-x-2">
                <FaJs className="text-yellow-500" /> <span>JavaScript</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaReact className="text-blue-500" /> <span>React.js</span>
              </li>
              <li className="flex items-center space-x-2">
                <SiNextdotjs className="text-black" /> <span>Next.js</span>
              </li>
              <li className="flex items-center space-x-2">
                <SiTailwindcss className="text-teal-500" />{" "}
                <span>Tailwind CSS</span>
              </li>
              <li className="flex items-center space-x-2">
                <SiBootstrap className="text-purple-600" />{" "}
                <span>Bootstrap</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaGitAlt className="text-red-500" /> <span>Git</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaFigma className="text-purple-400" /> <span>Figma</span>
              </li>
            </ul>
          </div>
          <div className="mt-6 flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-4">
            <button className="bg-indigo-500 text-white px-6 py-3 rounded-lg shadow-md transition-transform transform hover:scale-110 hover:bg-indigo-600">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/emanuele-polizzotto-37ba961a2/"
                className="flex items-center space-x-2"
              >
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>
            </button>

            <button className="bg-black text-white px-6 py-3 rounded-lg shadow-md transition-transform transform hover:scale-110 hover:bg-gray-800">
              <a
                target="_blank"
                href="https://github.com/emignox"
                className="flex items-center space-x-2"
              >
                <FaGithub />
                <span>GitHub</span>
              </a>
            </button>

            <button className="bg-red-500 text-white px-6 py-3 rounded-lg shadow-md transition-transform transform hover:scale-110 hover:bg-red-600">
              <a
                href="mailto:emanuele971@icloud.com"
                className="flex items-center space-x-2"
              >
                <FaEnvelope />
                <span>Email</span>
              </a>
            </button>
            <button className="bg-teal-500 text-white px-6 py-3 rounded-lg shadow-md transition-transform transform hover:scale-110 hover:bg-teal-600">
              <a
                target="_blank"
                href="https://emignox.github.io/portfolio/#/scroll"
              >
                Portfolio
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
