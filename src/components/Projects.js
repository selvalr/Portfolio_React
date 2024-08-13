import ecomme from "../assets/ecommerce-websites.jpg";
import foodcom from "../assets/food-ecommerce.jpg";
import webblock from "../assets/website-blog.jpg";

export default function Projects() {
  const config = {
    projects: [
      {
        image: ecomme,
        descrption: "A Ecommerce Website. Built with MERN Stack.",
        link: "",
      },
      {
        image: foodcom,
        descrption: "Food Ecommerce website like Swiggy,Build With react",
        link: "",
      },
      {
        image: webblock,
        descrption: "Basic Blog Website . Build With Next JS and MongoDB",
        link: "",
      },
    ],
  };
  return (
    <section
      id="projects"
      className="flex p-20 flex-col justify-center bg-secondry text-white"
    >
      <div className="w-full">
        <div className="flex flex-col px-5 py-5">
          <h1 className="text-4xl border-b-4 border-primary mb-5 w-[140px] font-bold">
            Projects
          </h1>
          <p>
            Thease are some of my best projects.I have Build thease with
            React,MERN and vanilla css . Check them out.
          </p>
        </div>
      </div>
      <div className="w-full">
        <div className="flex flex-col md:flex-row px-5 gap-5">
          {config.projects.map((project) => (
            <div className="relative">
              <img
                className="h-[300px] w-[500px]"
                src={project.image}
                alt="comm"
              />
              <div className="project-des">
                <p className="text-center px-10 py-20">{project.descrption}</p>

                <div className="flex justify-center">
                  <a className="btn" href={project.link}>
                    view Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
