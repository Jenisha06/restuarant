
import MeetOurChef from '../components/MeetOurChef';
import Opening from '../components/Opening';
import Footer from '../components/Footer';
import CommonNavbar from '../components/CommonNavbar';


export default function AboutUsPage() {
  return (<div>
    <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
/>
   
 <Aboutusnav/>
 <CommonNavbar/>
 <MainImage/>
 <Partners/>
 <Invite/>
  <MeetOurChef />
  <Opening/>
  <Footer/>
 
  </div>)
}

function Aboutusnav() {
  return (
         <div className="hidden sm:flex  sm:font-medium  sm:pt-4  sm:pb-3 sm:bg-[hsl(32,28%,40%)] sm:text-white">
  <div className="flex gap-3 justify-center items-center ml-25">

      <img src="call-icon.webp" className="h-5 "></img>
    <a href="" target="_blank"  >
 Phone: +4733378901
</a>
<img src="	https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F7.png&w=64&q=75
" className="h-5 ml-5"></img>
<a href="" target="_blank" >
  Email:food@restan.com
</a>
</div>
<div className="flex gap-3 items-center ml-145 border-r border-white pr-8">
  <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2Fflag.png&w=64&q=75" className="h-6"></img>
  <p  className="text-white">English 
    <i className="fa fa-chevron-down text-[15px] px-1.5 text-white  "></i>
    
  </p>
 

</div>
<div className="flex gap-4 ml-6 text-white items-center text-lg">
  <i class="fab fa-facebook-f" ></i>
  <i class="fab fa-twitter"></i>
  <i class="fab fa-youtube"></i>
  <i class="fab fa-linkedin-in"></i>
</div>

    </div>
  )
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
    <h1 className="text-5xl font-bold mb-4 font-marcellus">About Us</h1>
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

function Partners() {
  return (
<div className="relative w-full h-64 mt-28 mb-28 flex items-center justify-center">
 
  <img
    src="https://restan-nextjs.vercel.app/assets/img/shape/1.png"
    alt="Decorative Background"
    className="absolute  w-full h-80 object-cover "
  />


  <div className="absolute  flex flex-col justify-center items-center text-center text-black">
   
    <div className="flex items-center  mb-25">
      <img
        src="https://restan-nextjs.vercel.app/_next/static/media/17.088ee553.png"
        alt="Left Icon"
        className="hidden sm:block sm:h-4 sm:mr-2"
      />
      <p className="font-marcellus text-[20px] text-[#836849] font-semibold ">
        OUR TRUSTED 8K HAPPY PARTNER
      </p>
      <img
        src="https://restan-nextjs.vercel.app/_next/static/media/18.5979b905.png"
        alt="Right Icon"
        className="hidden sm:block sm:h-4 sm:ml-2"
      />
    </div>

    <div className="  flex mx-5  justify-items-center items-center sm:mx-40 gap-16">
      <img
        src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F1.png&w=1080&q=75"
        alt="Partner 1"
        className="h-30"
      />
      <img
        src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F2.png&w=1080&q=75"
        alt="Partner 2"
        className="h-30"
      />
      <img
        src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F5.png&w=1080&q=75"
        alt="Partner 3"
        className="h-30"
      />
      <img
        src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F4.png&w=1080&q=75"
        alt="Partner 4"
        className="h-30"
      />
      <img
        src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F1.png&w=1080&q=75"
        alt="Partner 5"
        className="h-30"
      />
    </div>
  </div>
</div>


  )
}

function Invite() {
  return (
   <div className="relative flex flex-col lg:flex-row items-center  bg-[#f9f7f3] py-20 px-6 ">

 
  <div className="relative flex gap-6 mb-30 sm:ml-30">
    <img
      src="https://restan-nextjs.vercel.app/assets/img/about/2.jpg"
      
      className="w-full h-[500px] sm:w-[380px] sm:h-[480px] sm:object-cover "
    />
    <img
      src="https://restan-nextjs.vercel.app/assets/img/about/3.jpg"
     
      className="hidden sm:block sm:w-[380px] sm:h-[480px] sm:object-cover  "
    />
  </div>

  
  <div className="   sm:absolute sm:right-0 sm:top-1/2  bg-white sm:-mt-45 sm:mr-30 p-10 sm:max-w-xl lg:max-w-2xl">
    <div className="flex items-center gap-2 mb-3">
      <p className="text-[#836849] font-semibold text-[17px] ">ABOUT US</p>
      <img
        src="https://restan-nextjs.vercel.app/_next/static/media/18.5979b905.png"
        alt="divider icon"
        className="h-4"
      />
    </div>

    <h2 className="text-[#1c1c1c] text-5xl font-marcellus font-bold leading-snug mb-6">
      We Invite You <br /> To Visit Our Restaurant
    </h2>

    <p className="text-gray-500 text-sm mb-8 leading-relaxed">
      A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails.
      The Patio Time Bar opens in the center of Florence. The only bar inspired
      by the 1960s, it will give you an experience that you'll have a hard time
      forgetting.
    </p>

    <button className="bg-[#836849] text-white text-lg font-medium px-8 py-3  hover:bg-black transition duration-300">
      Discover More
    </button>
  </div>
</div>

  )
}





