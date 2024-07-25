import { FollowerPointerCard } from "../../componnets/following-pointer/following-pointer";
import TextReveal from "../../componnets/text-reveal/text-reveal";

type Props = {};

const AboutUS = () => {
  return (
    <div className="z-10 flex flex-col min-h-[16rem] items-center justify-center  bg-white dark:bg-black">
      <TextReveal
        heading={
          <div className="pt-20 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold underline decoration-wavy decoration-teal-400">
            About us
          </div>
        }
        text="Smridhi Tech, founded in 2023 by industry veteran Deepak Luthra and a team of former IBM employees, aims to help businesses achieve their goals by integrating the right technology from the start.
      Deepak, with over 29 years of experience, is committed to the UN's goal of quality education. Smridhi Tech focuses on providing growth opportunities for working professionals and aspiring college students."
      />
      <div className="pt-20 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold underline decoration-wavy decoration-teal-400 mb-20">
        Our Torchbearers
      </div>
      <div className="max-w-screen-lg mx-auto flex justify-center gap-4">
        <FollowerPointerCard title={<TitleComponent title={"Founder"} />}>
          <div className="-z-10 relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100">
            <div className="w-full aspect-w-16 aspect-h-10 bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative">
              <img
                src={
                  "https://images.unsplash.com/photo-1637684666772-1f215bfd0f5d?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                alt="thumbnail"
                className={`group-hover:scale-95 group-hover:rounded-2xl transform object-cover transition duration-200 w-56`}
              />
            </div>
          </div>
        </FollowerPointerCard>
        <FollowerPointerCard title={<TitleComponent title={"Co-Founder"} />}>
          <div className="-z-10 relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100">
            <div className="w-full aspect-w-16 aspect-h-10 bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative">
              <img
                src={
                  "https://plus.unsplash.com/premium_photo-1661765873819-2dd94bd32016?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                alt="thumbnail"
                className={`group-hover:scale-95 group-hover:rounded-2xl transform object-cover transition duration-200  w-56`}
              />
            </div>
          </div>
        </FollowerPointerCard>
      </div>
    </div>
  );
};

export default AboutUS;

const TitleComponent = ({ title }: { title: string }) => (
  <div className="flex space-x-2 items-center">
    <p>{title}</p>
  </div>
);
