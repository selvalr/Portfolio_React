import Aboutimg from "../assets/about.png";

export default function About() {
  const config = {
    line1:
      "Hi!, My name is Selvamanan. I am a Full Stack Web Developer. I build beautiful Website with React.js and Tailwindcss",
    line2:
      "  I am proficient in Frontend skill like React.js,Reduc,Redux tollkit,Axios,Tailwind CSS,Scss,css3 and manymore...",
    line3: " In backend I know Node.js,Express.js,MongoDB and mongoose",
  };
  return (
    <section className="flex flex-col md:flex-row bg-primary px-5" id="about">
      <div className="py-5 md:w-1/2">
        <img src={Aboutimg} />
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="flex flex-col justify-center  text-white">
          <h1 className="text-4xl border-b-2 mb-5 border-[#ececec] w-[170px] font-bold">
            About Me
          </h1>
          <p className="pb-5">{config.line1}</p>
          <p className="pb-5">{config.line2}</p>
          <p className="pb-5">{config.line3}</p>
        </div>
      </div>
    </section>
  );
}
