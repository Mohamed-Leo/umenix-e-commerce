import banner1 from "../../assets/banner_1_1.webp";
import banner2 from "../../assets/banner_1_2 .webp";
import banner3 from "../../assets/banner_1_3.webp";
import { Navigation, EffectFade, Pagination } from "swiper/modules";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../assets/img1.jpeg";
import img2 from "../../assets/img2.jpeg";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// Import Swiper styles
import "swiper/css";
const Hero = () => {
  return (
    <div className="bg-white md:mt-10">
      <div className="container mx-auto">
        <div className="flex gap-2 sm:flex-col md:flex-row lg:flex-row ss:flex-col xs:flex-col ">
          <div className="md:w-2/3 w-full sm:h-full">
            <Swiper
              className="relative rounded-lg"
              modules={[Navigation, EffectFade, Pagination]}
              spaceBetween={50}
              slidesPerView={1}
              effect={"fade"}
              pagination={{ clickable: true }}
               //  scrollbar={{ draggable: true }}
              navigation={{
                nextEl: ".btn-next-slide",
                prevEl: ".btn-prev-slide",
              }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              <SwiperSlide>
                <div className="relative">
                  <img src={banner1} className="h-[60vh]" alt="banner1" />
                  <div className="absolute top-[25%] left-[3rem] flex flex-col gap-2 pl-[30px]">
                    <h3
                      data-aos="fade-left"
                      data-aos-offset="200"
                      data-aos-delay="50"
                      data-aos-duration="1000"
                      className="text-yellow-300 text-sm font-bold"
                    >
                      Top Trending
                    </h3>
                    <p
                      data-aos="fade-right"
                      data-aos-offset="200"
                      data-aos-delay="50"
                      data-aos-duration="1000"
                      className="text-3xl text-white"
                    >
                      Trending
                    </p>
                    <p
                      data-aos="zoom-in"
                      data-aos-offset="200"
                      data-aos-delay="50"
                      data-aos-duration="1000"
                      className="text-white text-3xl"
                    >
                      Your New Style
                    </p>
                    <span 
                    data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    className="text-white text-md">
                      Limted Time:online Only!
                    </span>
                    <button
                      data-aos="fade-up"
                      data-aos-offset="200"
                      data-aos-delay="100"
                      data-aos-duration="2000"
                      className="bg-white hover:bg-blue-600  w-[150px] h-[50px] text-slate-900 rounded-full"
                    >
                      Shop now
                    </button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative ">
                  <img src={banner2} alt="banner2" className="h-[60vh]" />

                  <div className="absolute top-[25%] left-[3rem] flex flex-col gap-3 pl-[30px]">
                    <h3
                      data-aos="fade-left"
                      data-aos-offset="300"
                      data-aos-delay="100"
                      data-aos-duration="1000"
                      className="text-yellow-300 text-sm font-bold"
                    >
                      New Arrivals
                    </h3>
                    <p
                      data-aos="fade-left"
                      data-aos-offset="200"
                      data-aos-delay="50"
                      data-aos-duration="1000"
                      className="text-3xl text-white"
                    >
                      Apple
                    </p>
                    <p
                      data-aos="fade-right"
                      data-aos-offset="200"
                      data-aos-delay="50"
                      data-aos-duration="1000"
                      className="text-white text-3xl"
                    >
                      Top AirPods Pro
                    </p>
                    <span className="text-white text-md">
                      Limted Time:online Only!
                    </span>
                    <button
                      data-aos="fade-up"
                      data-aos-offset="200"
                      data-aos-delay="50"
                      data-aos-duration="1000"
                      className="bg-white hover:bg-blue-600  w-[150px] h-[50px] text-slate-900 rounded-full mt-5 "
                    >
                      Shop now
                    </button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative">
                  <img src={banner3} alt="banner2" className="h-[60vh]" />
                  <div className="absolute top-[25%] left-[3rem] flex flex-col gap-3 pl-[30px]">
                    <h3
                      data-aos="fade-right"
                      data-aos-offset="300"
                      data-aos-delay="100"
                      data-aos-duration="1000"
                      className="text-yellow-300 text-sm font-bold"
                    >
                      New Arrivals
                    </h3>
                    <p
                      data-aos="fade-left"
                      data-aos-offset="200"
                      data-aos-delay="50"
                      data-aos-duration="1000"
                      className="text-3xl text-white"
                    >
                      Apple
                    </p>
                    <p
                      data-aos="fade-right"
                      data-aos-offset="200"
                      data-aos-delay="50"
                      data-aos-duration="1000"
                      className="text-white text-3xl"
                    >
                      Top AirPods Pro
                    </p>
                    <span className="text-white text-md">
                      Limted Time:online Only!
                    </span>
                    <button
                      data-aos="fade-up"
                      data-aos-offset="200"
                      data-aos-delay="50"
                      data-aos-duration="1000"
                      className="bg-white hover:bg-blue-600  w-[150px] h-[50px] text-slate-900 rounded-full mt-5"
                    >
                      Shop now
                    </button>
                  </div>
                </div>
              </SwiperSlide>
              <div className="top-[45%] absolute right-[1rem] z-10 btn-next-slide w-[50px] h-[50px] rounded-full bg-gray-300  hover:bg-white flex items-center justify-center">
                <MdOutlineKeyboardArrowRight className="text-3xl" />
              </div>
              <div className="top-[45%] absolute left-[1rem] z-10 btn-prev-slide w-[50px] h-[50px] rounded-full bg-gray-300  hover:bg-white  flex items-center justify-center">
                <MdOutlineKeyboardArrowLeft className="text-3xl" />
              </div>
            </Swiper>
          </div>
          <div className="md:w-1/3 flex md:flex-col sm:flex-row gap-1">
            <div className=" relative group duration-300">
              <img className="md:h-[29vh]  group-hover:scale-105 duration-300 transform" src={img1}  />
              <div className="flex flex-col absolute top-[40px] left-[3rem]">
                <h3 className="text-white text-2xl sm:text-lg font-medium">Top Offer</h3>
                <span className="text-yellow-500 text-2xl">
                  Ipad Pro<span className="text-white">128GB</span>
                </span>
                <p className="text-white mt-4 text-sm">
                  Discount 20% on poducts
                </p>
              </div>
            </div>
            <div className="relative group duration-300">
              <img src={img2} className="md:h-[30vh] sm:h-[32vh] group-hover:scale-105 duration-300 transform" />
              <div className="flex flex-col absolute top-[40px] left-[3rem]">
                <h3 className="text-white text-2xl font-medium">Gamepad</h3>
                <span className="text-yellow-500 text-2xl">
                  Sport Edition<span className="text-white">2022</span>
                </span>
                <p className="text-white mt-4 text-sm">
                  Best Choice Of The Year
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
