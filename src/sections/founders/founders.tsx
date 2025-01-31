import { FollowerPointerCard } from "../../componnets/following-pointer/following-pointer";
import { Meteors } from "../../componnets/meteors/meteors";
const TitleComponent = ({ title }: { title: string }) => (
  <div className="flex space-x-2 items-center">
    <p>{title}</p>
  </div>
);

const Founders = () => {
  return (
    <div
      id="our-founder"
      className="z-10 flex flex-col min-h-[16rem] items-center justify-center bg-white"
    >
      <div className="w-full relative h-screen">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-4 h-full overflow-hidden flex flex-col justify-center items-start">
          <div className=" max-w-screen-xl mx-auto">
            <div className="text-center text-white py-2 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold w-full mb-8">
              Our Leader
            </div>
            <div className="flex flex-col items-center justify-center">
              <FollowerPointerCard
                className="z-10"
                title={<TitleComponent title={"Founder"} />}
              >
                <div className="z-10 relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100">
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
              <div></div>
            </div>

            <Meteors number={40} />
          </div>
        </div>
      </div>
    </div>
  );
  //   return (
  //     <div className="relative w-full">
  //       <div className="text-center pt-20 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold underline decoration-wavy decoration-teal-400 mb-20">
  //         Our Torchbearers
  //       </div>
  //       <div className="flex justify-center gap-8 z-20">
  //         <FollowerPointerCard title={<TitleComponent title={"Founder"} />}>
  //           <div className="-z-10 relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100">
  //             <div className="w-full aspect-w-16 aspect-h-10 bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative">
  //               <img
  //                 src={
  //                   "https://images.unsplash.com/photo-1637684666772-1f215bfd0f5d?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  //                 }
  //                 alt="thumbnail"
  //                 className={`group-hover:scale-95 group-hover:rounded-2xl transform object-cover transition duration-200 w-56`}
  //               />
  //             </div>
  //           </div>
  //         </FollowerPointerCard>
  //         <FollowerPointerCard title={<TitleComponent title={"Co-Founder"} />}>
  //           <div className="-z-10 relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100">
  //             <div className="w-full aspect-w-16 aspect-h-10 bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative">
  //               <img
  //                 src={
  //                   "https://plus.unsplash.com/premium_photo-1661765873819-2dd94bd32016?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  //                 }
  //                 alt="thumbnail"
  //                 className={`group-hover:scale-95 group-hover:rounded-2xl transform object-cover transition duration-200  w-56`}
  //               />
  //             </div>
  //           </div>
  //         </FollowerPointerCard>
  //       </div>
  //     </div>
  //   );
};
export default Founders;
