import Aboutusnav from '../components/Aboutusnav';
import CommonNavbar from '../components/CommonNavbar';
import Footer from '../components/Footer';
import MainImage from '../components/MainImage';



export default function ContactPage() {
  return (<div>
    <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
/>
   
 <Aboutusnav/>
 <CommonNavbar/>
  <MainImage MainHead={"Contact Page"} SubHead={"Contact page"}/>
 <SendMessage/>
 <ContactForm/>
 <Map/>
 <Opening/>
 <Footer/>

 
 
  </div>)
}



function SendMessage() {
  return (
    <div className=" relative sm:w-full flex  flex-col sm:flex-row justify-center items-center py-20">
      
      <img
        src="https://restan-nextjs.vercel.app/_next/static/media/map.4bceacab.png"
        className="absolute w-full h-full object-cover"
      />

   
      <div className="relative z-10 flex flex-col sm:flex-row sm:gap-20 ">

        <div className="w-[95%] bg-white/70 sm:w-[30%] rounded-2xl px-12 py-10 text-center border border-gray-200">
          <img
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2Fphone.png&w=640&q=75"
            className="mx-auto mb-4 w-20"
          />
          <h2 className="text-2xl font-semibold">Hotline</h2>
          <p className="mt-2 text-gray-700">+4733378901</p>
        </div>

        <div className="w-[95%]  bg-white/70 sm:w-[30%]  rounded-2xl px-12 py-10 text-center border border-gray-200">
          <img
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2Fplaceholder.png&w=640&q=75"
            className="mx-auto mb-4 w-20"
          />
          <h2 className="text-2xl font-semibold">Our Location</h2>
          <p className="mt-2 text-gray-700">
            55 Main Street, The Grand Avenue 2nd Block, New York City
          </p>
        </div>

      
        <div className="w-[95%] bg-white/70 sm:w-[30%]  rounded-2xl px-12 py-10 text-center border border-gray-200">
          <img
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2Femail.png&w=640&q=75"
            className="mx-auto mb-4 w-20"
          />
          <h2 className="text-2xl font-semibold">Official Email</h2>
          <p className="mt-2 text-gray-700">info@restan.com</p>
        </div>

      </div>
    </div>
  );
}


function ContactForm() {
  return (
    <div className="w-[90%] mx-auto flex justify-center py-20">
      <div className="sm:w-[80%]  bg-white shadow-xl rounded-3xl p-10 md:p-16">

        
        <div className="text-center mb-10">
          <p className=" text-[15px] sm:text-[20px] font-marcellus font-bold  text-[#8A6E46] flex items-center justify-center gap-3">

            <img src="https://restan-nextjs.vercel.app/_next/static/media/17.088ee553.png" className='w-[120px]'></img>
            KEEP IN TOUCH
            <img src="https://restan-nextjs.vercel.app/_next/static/media/18.5979b905.png" className='w-[120px]'></img>
          </p>

          <h1 className="text-4xl sm:text-5xl font-semibold font-marcellus mt-4">
            Send us a Message
          </h1>
        </div>

       
        <form className="flex flex-col gap-6">

          <input
            type="text"
            placeholder="Name"
            className="w-full bg-[#f3f3f3] rounded-md p-5 outline-none text-[18px] text-black"
          />

          <div className="flex flex-row gap-6">
            <input
              type="email"
              placeholder="Email*"
              className="w-full bg-[#f3f3f3] rounded-md p-5 outline-none text-[18px]"
            />
            <input
              type="text"
              placeholder="Phone"
              className="w-full bg-[#f3f3f3] rounded-md p-5 outline-none text-[18px]"
            />
          </div>

          <textarea
            placeholder="Your Message *"
            rows="6"
            className="w-full bg-[#f3f3f3] rounded-md p-4 outline-none text-[18px]"
          ></textarea>

          <button className="bg-[#816640] text-white px-8 py-4 rounded-md w-[200px] flex items-center justify-center gap-2 font-semibold">
            <i class="fa fa-paper-plane"></i>
            Get In Touch
          </button>
        </form>

      </div>
    </div>
  );
}

function Map(){
  return(
  <div>
<section className="w-full flex items-center justify-center py-10">
  <div className="w-full px-5">

    <div className="shadow-lg dark:shadow-none">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.080977236561!2d76.35092177502736!3d9.993575673853808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0872b2b9bfb4c3%3A0xdbc5c7e68c3ff12b!2sEmpire%20Mall!5e0!3m2!1sen!2sin!4v1731268000000"
        width="100%"
        height="500"
        allowFullScreen=""
      ></iframe>
    </div>
  </div>
</section>
</div>
  )
}

function Opening() {
  return (
     <div className='mx-[5vh] mt-[100px] sm:mx-[16vh] h-[700px]'> 
            <h2 className='hidden sm:block text-[#04000b] sm:opacity-10 font-marcellus sm:text-9xl sm:font-semibold ml-15'>RESTAN</h2>
            <div className="flex flex-col  sm:flex-row">
<div className="w-[400px] h-[380px]  relative sm:w-[696px] sm:h-[392px] sm:pb-[65%] overflow-hidden sm:ml-15 ">
      <iframe
        src="https://www.youtube.com/embed/F3zw1Gvn4Mk?autoplay=1&loop=1&playlist=F3zw1Gvn4Mk&controls=0&preload=metadata&enablejsapi=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1"
        title="Mr Fox Restaurant Promo Video"
        
      
        className="absolute top-0 left-0 w-full h-[50%]"
       
      />
    </div>

 <div className=" w-full py-6  bg-white sm:-mt-[50px] sm:-ml-[100px] text-black sm:w-[570px] h-max sm:py-15 flex flex-col justify-center items-start px-15 shadow-md z-10 ">
 

  <h2 className="text-3xl font-bold mb-3 font-marcellus">Opening Hours</h2>
  <p className="text-[14px] mb-6 leading-relaxed text-gray-600 ">
    A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails. The Patio Time Bar opens in the center..
  </p>

  <div className="space-y-2 text-[15px]  font-semibold">
   <p>Sunday to Tuesday:<span className="text-gray-500 "> ______________________ </span>10:00 - 09:00</p> 
    <p>Wednesday to Thursday:<span className="text-gray-500 "> ______________________ </span> 11:30 - 10:30</p>
    <p>Friday & Saturday:<span className="text-gray-500 "> ______________________ </span> 10:30 - 12:00</p>
  </div>

  <div className="sm:mt-6 flex items-center">
    <div className="bg-[#826a45] rounded-full h-15 w-15 flex items-center justify-center ">
      <img src="	https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F6.png&w=128&q=75" className="h-10 w-10 "></img>
    </div>
    <div className="flex flex-col ml-5">
    <p className="text-gray-500 text-sm">Call Anytime</p>
    <p className="text-[15px] font-bold text-[#04000b] font-marcellus">+964733-378901</p>
    </div>
  </div>
</div>

    </div>
    

        </div>
  );
}





