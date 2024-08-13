import Resumeimg from "../assets/resume.jpg";

export default function Contact() {
  const config = {
    email: "selvamanan369@gmail.com",
    phone: "9585988369",
  };
  return (
    <section
      id="contact"
      className="flex flex-col bg-secondry px-5 py-32 text-white"
    >
      <div className="flex flex-col items-center">
        <h1 className="text-4xl border-b-2  mb-5 border-primary w-[150px] font-bold">
          Contact
        </h1>
        <p className="pb-5">
          If you want to discuss more in detail, please contact me
        </p>
        <p className="py-2">
          <span>Email:</span>
          {config.email}
        </p>
        <p className="py-2">
          <span>Phone:</span>
          {config.phone}
        </p>
      </div>
    </section>
  );
}
