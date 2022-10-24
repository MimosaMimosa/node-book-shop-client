import PageBanner from "../../components/Bannder/PageBanner"
import AddHomeOutlinedIcon from '@mui/icons-material/AddHomeOutlined';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Contact = () => {
  return (
    <div className="container">
      <PageBanner
        title='Contact'
      />
      <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d122212.63010976679!2d96.2168931!3d16.8191766!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smm!4v1666323702499!5m2!1sen!2smm" className="w-[100%] mt-[100px]" height="450" style={{ border:0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Map"></iframe>
      <div className="flex mt-12 justify-between">
        <div className="flex-auto w-[75%]">
          <h3 className="text-3xl font-serif">Get In Touch</h3>
          <form className="mt-5 w-[90%]">
            <textarea name="" id="" rows="6" className="w-full border-gray-200" placeholder="Enter Message"></textarea>
            <div className="flex justify-between my-5">
              <input type="text" className="w-[49%] border-gray-200 p-3" placeholder="Enter your name"/>
              <input type="text" className="w-[49%] border-gray-200 p-3" placeholder="Email"/>
            </div>
            <input type="text" className="w-full border-gray-200 p-3" placeholder="Enter Subject"/>
            <button className="px-10 py-4 mt-12 text-red-600 border border-red-500">Send</button>
          </form>
        </div>
        <div className="flex-auto w-[20%]">
          <div className="flex pt-10">
            <AddHomeOutlinedIcon style={{ fontSize:'40px',color: '#8f9195' }} />
            <div className="pl-3">
              <span className="text-black-100 font-serif">Buttonwood, California.</span><br/>
              <span className="text-gray-400">Rosemead, CA 91770</span>
            </div>
          </div>

          <div className="flex pt-10">
            <PhoneIphoneIcon style={{ fontSize:'40px',color: '#8f9195' }} />
            <div className="pl-3">
              <span className="text-black-100 font-serif">+1 253 565 2365</span><br/>
              <span className="text-gray-400">Mon to Fri 9am to 6pm</span>
            </div>
          </div>


          <div className="flex pt-10">
            <MailOutlineIcon style={{ fontSize:'40px', color: '#8f9195' }} />
            <div className="pl-3">
              <span className="text-black-100 font-serif">support@colorlib.com</span><br/>
              <span className="text-gray-400">Send us your query anytime!</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
