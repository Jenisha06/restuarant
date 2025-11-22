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
 <MeetOurChef />
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
    <h1 className="text-5xl font-bold mb-4 font-marcellus">Restaurant Chef</h1>
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



function MeetOurChef() {
  return (
    <div className="bg-[#ebe9e6] py-20 px-10 text-center pb-30  pt-15">
      <div className="flex items-center justify-center gap-4 mt-25">
      <img src="	https://restan-nextjs.vercel.app/_next/static/media/17.088ee553.png" className="hidden sm:block sm:h-4"></img>
      <p className="text-[#836849] text-2xl font-medium 
      font-merriweather">MASTER CHEFS</p>
      <img src="	https://restan-nextjs.vercel.app/_next/static/media/18.5979b905.png" className="hidden sm:block sm:h-4"></img>

      </div>
    <h1 className="text-4xl sm:text-6xl font-serif font-bold text-black mt-6 mb-9"> Meet Our Special Chefs </h1>


    <div className="flex flex-col sm:flex-row justify-center gap-30 ">

   <div className="flex flex-col items-center mt-5">
  
  <div className="rounded-full border border-gray-800 w-80 h-80 flex items-center justify-center relative">
    <img
      src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F1.jpg&w=1920&q=75"
      className="rounded-full w-72 h-72 object-cover"
      
    />
  </div>

 
  <div className="bg-[#7b5a36] text-white px-10 py-4 text-center font-montserrat clip-ribbon -mt-[110px]">
    <p className="text-2xl font-semibold m-0">Alexander Petllo</p>
    <p className="text-sm tracking-wide mt-1">ASSISTANT CHEF</p>
  </div>
</div>

 <div className="flex flex-col items-center mt-5">
  
  <div className="rounded-full border border-gray-800 w-80 h-80 flex items-center justify-center relative">
    <img
      src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F2.jpg&w=1920&q=75" 
className="rounded-full w-72 h-72 object-cover"
      
    />
  </div>

 
  <div className="bg-[#7b5a36] text-white px-10 py-4 text-center font-montserrat clip-ribbon -mt-[110px]">
    <p className="text-2xl font-semibold m-0">Mendia Juxef</p>
    <p className="text-sm tracking-wide mt-1">BURGER KING</p>
  </div>
</div>

 <div className="flex flex-col items-center mt-5">
  
  <div className="rounded-full border border-gray-800 w-80 h-80 flex items-center justify-center relative">
    <img
       src="	https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F3.jpg&w=1920&q=75" 
      className="rounded-full w-72 h-72 object-cover"
      alt="Alexander Petllo"
    />
  </div>

 
  <div className="bg-[#7b5a36] text-white px-10 py-4 text-center font-montserrat clip-ribbon -mt-[110px]">
    <p className="text-2xl font-semibold m-0">Petro Willaim</p>
    <p className="text-sm tracking-wide mt-1">MAIN CHEF</p>
  </div>
</div>








 

 
    </div>



 <div className="flex flex-col sm:flex-row justify-center gap-30 mt-15">

   <div className="flex flex-col items-center mt-5">
  
  <div className="rounded-full border border-gray-800 w-80 h-80 flex items-center justify-center relative">
    <img
      src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F8.jpg&w=1920&q=75"
      className="rounded-full w-72 h-72 object-cover"
      
    />
  </div>

 
  <div className="bg-[#7b5a36] text-white px-10 py-4 text-center font-montserrat clip-ribbon -mt-[110px]">
    <p className="text-2xl font-semibold m-0">Alexander Petllo</p>
    <p className="text-sm tracking-wide mt-1">ASSISTANT CHEF</p>
  </div>
</div>

 <div className="flex flex-col items-center mt-5">
  
  <div className="rounded-full border border-gray-800 w-80 h-80 flex items-center justify-center relative">
    <img
      src="	https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F9.jpg&w=1920&q=75" 
className="rounded-full w-72 h-72 object-cover"
      
    />
  </div>

 
  <div className="bg-[#7b5a36] text-white px-10 py-4 text-center font-montserrat clip-ribbon -mt-[110px]">
    <p className="text-2xl font-semibold m-0">Mendia Juxef</p>
    <p className="text-sm tracking-wide mt-1">BURGER KING</p>
  </div>
</div>

 <div className="flex flex-col items-center mt-5">
  
  <div className="rounded-full border border-gray-800 w-80 h-80 flex items-center justify-center relative">
    <img
       src="	https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F10.jpg&w=1920&q=75" 
      className="rounded-full w-72 h-72 object-cover"
      alt="Alexander Petllo"
    />
  </div>

 
  <div className="bg-[#7b5a36] text-white px-10 py-4 text-center font-montserrat clip-ribbon -mt-[110px]">
    <p className="text-2xl font-semibold m-0">Petro Willaim</p>
    <p className="text-sm tracking-wide mt-1">MAIN CHEF</p>
  </div>
</div>








 

 
    </div>

 </div>

)
}
