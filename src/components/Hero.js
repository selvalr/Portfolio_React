import heroImage from "../assets/hero.png";
import { FaSquareXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";
export default function Hero() {
  const config = {
    subtitle: "Im a Full-stack developer",
    social: {
      x: "https://x.com/selva_lr",
      linkedin: "https://www.linkedin.com/in/selvamanan/",
      github: "https://github.com/selvalr",
    },
  };
  return (
    <section className="flex flex-col md:flex-row px-5 py-32 bg-secondry justify-center ">
      <div className="md:w-1/2 flex flex-col">
        <h1 className=" text-white text-6xl font-hero-font">
          Hi,
          <br /> Im SELVAMANAN <span className="text-black">R</span>
          <p className="text-2xl">{config.subtitle}</p>
        </h1>
        <div className="flex py-10">
          <a
            href={config.social.x}
            target="blank"
            className="pr-5 hover:text-white"
          >
            <FaSquareXTwitter size={40} />
          </a>
          <a
            href={config.social.linkedin}
            target="blank"
            className="pr-5 hover:text-white"
          >
            <FaLinkedin size={40} />
          </a>
          <a
            href={config.social.github}
            target="blank"
            className="hover:text-white"
          >
            <FaGithub size={40} />
          </a>
        </div>
      </div>
      <img src={heroImage} className="md:w-1/3" />
    </section>
  );
}
