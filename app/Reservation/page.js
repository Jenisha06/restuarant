import Aboutusnav from '../components/Aboutusnav';
import CommonNavbar from '../components/CommonNavbar';
import Footer from '../components/Footer';
import MainImage from '../components/MainImage';


export default function Reservation() {
  return (<div>
    <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
/>
   
 <Aboutusnav/>
 <CommonNavbar/>
  <MainImage MainHead={"Reservation"} SubHead={"Reservation"}/>
 <Booking/>
 
 <Footer/>

 
 
  </div>)
}




function Booking(){
    return(
        <div className=' mt-20 sm:ml-35'> 
            <h2 className='hidden sm:block sm:text-[#04000b] sm:opacity-10 font-marcellus sm:text-9xl sm:font-semibold sm:ml-15'>RESTAN</h2>
            <div className='sm:flex sm:flex-row'>
<div className="w-[500px]  relative sm:w-[780px] h-[500px] sm:pb-[56.25%]  sm:ml-15 ">
      <iframe
        src="https://www.youtube.com/embed/F3zw1Gvn4Mk?autoplay=1&loop=1&playlist=F3zw1Gvn4Mk&controls=0&preload=metadata&enablejsapi=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1"
        title="Mr Fox Restaurant Promo Video"
        
      
        className="absolute top-0 left-0 w-full h-[60%]"
       
      />
    </div>

  <div className="bg-white sm:-mt-15 sm:-ml-25   text-black sm:w-[550px] sm:h-[700px] flex flex-col justify-center items-start p-3 shadow-md  z-10">
        


       
        <h2 className="font-bold self-start text-5xl mb-10 ml-2 pb-3 pl-3 font-marcellus">Book a Table</h2>
        <form className="flex-col flex items-start gap-5 text-left pl-5 w-full">
          <input
          type="tel"
          placeholder="Phone"

          className="bg-white outline-gray-500 p-4 border border-gray-300 rounded-sm w-[90%] "
          />

         

          <select className=" p-4 text-gray-950 border border-gray-300 rounded-sm w-[90%]">

          <option value="1">1 Person</option>
          <option value="2">2 Person</option>
          <option value="3">3 Person</option>
          <option value="4">4 Person</option>
          <option value="5">5 Person</option>
          </select>

          <input
          type="date"
          placeholder="Date"
          className="bg-white p-4 text-gray-500 outline-gray-500 border border-gray-300 rounded-sm w-[90%]"
          />

          <select className="border border-gray-300 rounded-sm w-[90%] p-4 text-gray-950">

          <option value="1">10:00 PM</option>
          <option value="2">11:00 PM</option>
          <option value="3">12:00 PM</option>
          <option value="4">1:00 PM</option>
          <option value="5">2:00 PM</option>
          </select>


          <div className="flex justify-center items-center w-full">
          <button className="bg-[#836849] hover:bg-black text-white px-5 py-5 rounded-sm w-[50%] font-medium mt-5 mb-8">

            Book A Table
          </button>
          </div>

        </form>
      </div>
    </div>

        </div>
    )
}


