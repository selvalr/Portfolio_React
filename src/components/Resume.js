import Resumeimg from "../assets/resume.jpg";

export default function Resume() {
  const config = {
    links: "",
  };
  return (
    <section id="resume" className="flex flex-col md:flex-row bg-primary px-5">
      <div className="py-5 md:w-1/2 flex justify-center md:justify-end">
        <img src={Resumeimg} className="w-[300px]" />
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="flex flex-col justify-center  text-white">
          <h1 className="text-4xl border-b-2 mb-5 border-[#ffffff] w-[150px] font-bold">
            Resume
          </h1>
          <p className="pb-5">
            You can Review My Resume{" "}
            <a href={config.links} className="btn">
              Download
            </a>{" "}
          </p>
        </div>
      </div>
    </section>
  );
}
