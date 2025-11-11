import Aboutusnav from '../components/Aboutusnav';
import CommonNavbar from '../components/CommonNavbar';
import Footer from '../components/Footer';


export default function ChefPage() {
  return (<div>
    <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
/>
   
 <Aboutusnav/>
 <CommonNavbar/>
 <MainImage/>
 <Booking/>
 
 <Footer/>

 
 
  </div>)
}

function MainImage() {
  return (
 <div className="relative w-full h-96">
 
  <img
    src="https://restan-nextjs.vercel.app/assets/img/shape/5.jpg"
    alt="About Us Background"
    className="absolute inset-0 w-full h-full object-cover"
  />



  
  <div className="relative z-20 flex flex-col justify-center items-center h-full text-white text-center">
    <h1 className="text-5xl font-bold mb-4 font-marcellus">Online Reservation</h1>
    <div className="flex items-center font-medium text-sm">
      <i className="fas fa-home text-white text-base "></i>
      <p className="ml-2">Home</p>
      <i className="fa fa-chevron-right text-white text-xs px-1.5 "></i>
      <p>about-us</p>
    </div>
  </div>
</div>


  )
}

function Booking(){
    return(
        <div className='mb-5 mt-20 '> 
            <h2 className='text-[#04000b] opacity-10 font-marcellus text-9xl font-semibold ml-15'>RESTAN</h2>
            <div className='flex flex-row'>
<div className="relative w-[696px] h-[392px] pb-[56.25%] overflow-hidden ml-15 ">
      <iframe
        src="https://www.youtube.com/embed/F3zw1Gvn4Mk?autoplay=1&loop=1&playlist=F3zw1Gvn4Mk&controls=0&preload=metadata&enablejsapi=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1"
        title="Mr Fox Restaurant Promo Video"
        
      
        className="absolute top-0 left-0 w-full h-[50%]"
       
      />
    </div>

  <div className="bg-white -mt-15 -ml-25   text-black w-[550px] h-[650px] flex flex-col justify-center items-start p-3 shadow-md  z-10">
        


       
        <h2 className="font-bold self-start text-4xl ml-2 pb-3 pl-3 font-marcellus">Book a Table</h2>
        <form className="flex-col flex items-start gap-5 text-left pl-5 w-full">
          <input
          type="tel"
          placeholder="Phone"

          className="bg-white outline-gray-500 p-3 border border-gray-300 rounded-sm w-[90%] "
          />

         

          <select className=" p-3 text-gray-950 border border-gray-300 rounded-sm w-[90%]">

          <option value="1">1 Person</option>
          <option value="2">2 Person</option>
          <option value="3">3 Person</option>
          <option value="4">4 Person</option>
          <option value="5">5 Person</option>
          </select>

          <input
          type="date"
          placeholder="Date"
          className="bg-white p-3 text-gray-500 outline-gray-500 border border-gray-300 rounded-sm w-[90%]"
          />

          <select className="border border-gray-300 rounded-sm w-[90%] p-3 text-gray-950">

          <option value="1">10:00 PM</option>
          <option value="2">11:00 PM</option>
          <option value="3">12:00 PM</option>
          <option value="4">1:00 PM</option>
          <option value="5">2:00 PM</option>
          </select>


          <div className="flex justify-center items-center w-full">
          <button className="bg-[#836849] hover:bg-black text-white px-4 py-4 rounded-sm w-[50%] font-medium mt-5 mb-8">

            Book A Table
          </button>
          </div>

        </form>
      </div>
    </div>

        </div>
    )
}
