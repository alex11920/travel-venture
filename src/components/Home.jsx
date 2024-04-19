import HomeNavbar from "../shared/HomeNavbar";
import backgroundImage from "../assets/Rectangle 1.png";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./styles.css";
import { EffectCoverflow, Pagination } from "swiper/modules";

const Home = () => {
  return (
    <div className="flex justify-center min-h-screen relative">
      {/* navbar section */}
      <div className="absolute top-0 left-0 right-0">
        <HomeNavbar></HomeNavbar>
      </div>

      {/* hero section */}
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="hero-overlay bg-[#000000B2]"></div>
        <div className="text-white relative z-10 flex gap-36 items-center">
          <div className="max-w-lg">
            <h1 className="mb-5 head text-8xl">Cox's bazar</h1>
            <p className="mb-5">
              Cox's Bazar is a city, fishing port, tourism centre and district
              headquarters in southeastern Bangladesh. It is famous mostly for
              its long natural sandy beach, and it ...
            </p>
            <span>
              <Link to="/">
                <button className="btn btn-ghost flex items-center back-yellow px-6 text-black font-medium text-base">
                  Booking{" "}
                  <span className="text-2xl">
                    <FiArrowRight />
                  </span>
                </button>
              </Link>
            </span>
          </div>
          <div className="hidden">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination]}
              className="mySwiper w-[800px]"
            >
              <SwiperSlide>
                <img
                  src="src/assets/Rectangle 1.png"
                  alt="Nature"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent from-30% to-black rounded-3xl"></div>
                <div className="absolute bottom-1 top-96 left-4 text-white text-4xl head p-2">
                  Cox's bazar
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="src/assets/Rectangle 1.png"
                  alt="Nature"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent from-30% to-black rounded-3xl"></div>
                <div className="absolute bottom-1 top-96 left-4 text-white text-4xl head p-2">
                  Cox's bazar
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="src/assets/Rectangle 1.png"
                  alt="Nature"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent from-30% to-black rounded-3xl"></div>
                <div className="absolute bottom-1 top-96 left-4 text-white text-4xl head p-2">
                  Cox's bazar
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="src/assets/Rectangle 1.png"
                  alt="Nature"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent from-30% to-black rounded-3xl"></div>
                <div className="absolute bottom-1 top-96 left-4 text-white text-4xl head p-2">
                  Cox's bazar
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="src/assets/Rectangle 1.png"
                  alt="Nature"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent from-30% to-black rounded-3xl"></div>
                <div className="absolute bottom-1 top-96 left-4 text-white text-4xl head p-2">
                  Cox's bazar
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          {/* form card */}
          <div className="w-96 shadow-2xl rounded-lg bg-base-100">
            <form className="card-body text-black">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#818181] font-medium">
                    Origin
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="Origin"
                  className="input input-bordered border-none bg-[#F2F2F2]"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#818181] font-medium">
                    Destination
                  </span>
                </label>
                <input
                  type="password"
                  placeholder="Destination"
                  className="input input-bordered border-none bg-[#F2F2F2]"
                  required
                />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-[#818181] font-medium">
                      From
                    </span>
                  </label>
                  <input
                    type="date"
                    placeholder="From"
                    className="input input-bordered border-none bg-[#F2F2F2] cursor-pointer"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-[#818181] font-medium">
                      To
                    </span>
                  </label>
                  <input
                    type="date"
                    placeholder="To"
                    className="input input-bordered border-none bg-[#F2F2F2] cursor-pointer"
                    required
                  />
                </div>
              </div>
              <div className="form-control mt-6">
                <Link to="/hotels">
                  <button className="btn btn-ghost back-yellow w-full">
                    Start Booking
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
