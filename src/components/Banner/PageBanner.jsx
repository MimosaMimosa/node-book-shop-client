import { useLocation } from "react-router-dom";

const PageBanner = ({title}) => {
    const location = useLocation();
    const pathName = location.pathname;
    let image = '';

    switch(pathName){
        case '/categories':
            image = './assets/image/h2_hero1.jpg.webp';
        break;
        case '/orders':
            image = './assets/image/xh2_hero2.jpg.pagespeed.ic.uw-cq9l-93.webp'
        break;
        default:
            image = './assets/image/xh2_hero2.jpg.pagespeed.ic.uw-cq9l-93.webp'
    }
    
    const banner = {
		backgroundImage: `url(${image})`,
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
	};

  return (
    <div className="container">
        <div style={banner} className="h-[350px] flex justify-center items-center">
            <h2 className="text-6xl text-white font-serif">    
                {title}
            </h2>
        </div>
    </div>
  )
}

export default PageBanner