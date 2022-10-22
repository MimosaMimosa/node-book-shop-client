import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";

const Banner = () => {
	const banner = {
		backgroundImage: "url(./assets/image/bander.webp)",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
	};

	const banner2 = {
		backgroundImage: "url(https://preview.colorlib.com/theme/abcbook/assets/img/hero/xh1_hero1.jpg.pagespeed.ic.aHLabdmv-n.webp)",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
	}

	const banner3 = {
		backgroundImage: "url(https://preview.colorlib.com/theme/abcbook/assets/img/hero/xh1_hero3.jpg.pagespeed.ic.3strDT5vVA.webp)",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
	}


	return (
		<div className='bg-pink-soft'>
			<div className='container place-content-center text-center items-center'>
				<Swiper
					modules={[EffectFade, Autoplay]}
					effect='fade'
					autoplay={{
						delay: 3000,
					}}
					loop={true}
				>
					<SwiperSlide>
						<div style={banner} className='p-40 text-white'>
							<button className='rounded-3xl bg-white py-2 px-5 text-gray-400 text-sm mb-6'>
								Science Fiction
							</button>
							<h2 className='text-6xl font-serif leading-[70px]'>
								The History
								<br />
								of Phipino
							</h2>
							<button className='rounded-3xl bg-red-600 py-3 px-10 mt-8'>
								Browse Store
							</button>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div style={banner2} className='p-40 text-white'>
							<button className='rounded-3xl bg-white py-2 px-5 text-gray-400 text-sm mb-6'>
								Science Fiction
							</button>
							<h2 className='text-6xl font-serif leading-[70px]'>
								The History
								<br />
								of Phipino
							</h2>
							<button className='rounded-3xl bg-red-600 py-3 px-10 mt-8'>
								Browse Store
							</button>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div style={banner3} className='p-40 text-white'>
							<button className='rounded-3xl bg-white py-2 px-5 text-gray-400 text-sm mb-6'>
								Science Fiction
							</button>
							<h2 className='text-6xl font-serif leading-[70px]'>
								The History
								<br />
								of Phipino
							</h2>
							<button className='rounded-3xl bg-red-600 py-3 px-10 mt-8'>
								Browse Store
							</button>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
};

export default Banner;
