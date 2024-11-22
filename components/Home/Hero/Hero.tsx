import Socials from "@/components/Shared/Socials";
import NextImage from "next/image";
import AvatarJPG from "public/static/images/avatar.jpeg";

const Hero = (): JSX.Element => {
  return (
    <div className="flex flex-col-reverse md:flex-row md:justify-between md:space-y-0">
      <div className="mt-8 flex flex-col justify-center space-y-4 md:mt-0 md:w-2/3">
        <h1 className="will-change-opacity text-5xl font-bold will-change-transform">
          Ishwar B Balappanwar
        </h1>
        <h2 className="will-change-opacity text-lg font-medium text-gray-400 will-change-transform">
          IIIT Hyderabad • Undergrad Researcher @ Precog • Research Intern @ Microsoft Research • SWE Intern @ Microsoft
        </h2>
        <p className="text-md will-change-opacity text-lg text-gray-300 will-change-transform">
        Hello! I'm Ishwar Balappanawar, a final year B.Tech student at the International Institute of Information Technology Hyderabad (IIIT-H), pursuing Computer Science and Engineering.
        <br></br><br></br>
My research interests lie at the intersection of Machine Learning, Computer Vision, and Natural Language Processing, with a particular focus on knowledge-infused learning and model interpretability. Currently, Im working as an Undergraduate Researcher at the Precog Research Lab, CCSS, IIIT Hyderabad, where Im exploring innovative approaches to enhance model understanding and reasoning capabilities.
        </p>
        <Socials className="!mt-12" />
      </div>
      <div className="will-change-opacity relative h-32 w-32 overflow-hidden rounded-full will-change-transform">
        <NextImage
          src={AvatarJPG}
          layout="fill"
          placeholder="blur"
          alt="Anish De"
        />
      </div>
    </div>
  );
};

export default Hero;
