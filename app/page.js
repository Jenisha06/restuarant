export default function Restan() {
  return (
 
    <div >
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
/>
  <HeroSection/>
  <Booking/>
  <WhyOurRestaurant/>
     <MeetOurChef/>
    <Footer/>
    </div>
  );
}

function HeroSection() {
  return (
    <div className="relative h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/restan.jpg')" }}>
     
      <div className="absolute inset-0 bg-black/50"></div>

      
      <div className="relative z-10 text-white">
       <Header/>
       <Navbar/>
       <Heading/>
       
      </div>
    </div>
  );
}


function Header() {
  return (
    
<div className="flex justify-evenly font-medium  pt-4 border-b border-white pb-3">
  <div className="flex gap-9 ">

      <img src="call-icon.webp" className="h-5"></img>
    <a href="" target="_blank" >
 Phone: +4733378901
</a>
<img src="call-icon.webp" className="h-5"></img>
<a href="" target="_blank" >
  Email:food@restan.com
</a>
</div>
<p><i className="fas fa-map-marker-alt"></i> 175 10h Street, Office 375 Berlin, De 21562</p>


</div>
  );
}

function Navbar() {
  return (
    <div className="flex flex-row justify-between items-center text-white font-semibold text-lg pt-6 px-20 ">
    <div className="flex gap-9">  
    <a href="#home">Home</a>
    <a href="#page">Pages</a>
    <a href="#menu">Menu</a>
    </div>
 
    <img src="restanLogo.webp" className="h-14 "></img>
    <div className="flex gap-9">
    <a href="#blog">Blog</a>
    <a href="#shop">Shop</a>
    <a href="#contact">Contact Us</a>
    </div>
    
    </div>
  )
}
function Heading() {
  return (
    <div>
      <h1 className="text-8xl font-bold text-center mt-46 font-merriweather">Best Restaurant</h1>
      <div className="w-46 h-46 rounded-full   border-2 border-yellow-100 flex items-center justify-center mt-15 mx-auto">
<i class="fas fa-arrow-up-right-from-square text-yellow-100 text-2xl"></i>


      </div>
      
    </div>
  )
}

function Booking() {
  return (

 <div className="relative z-20 flex flex-col mt-40 bg-white w-max">
<div className="flex-row flex gap-10">
    <div className="flex flex-col flex-wrap justify-start pl-30 items-start gap-10 md:flex-row ">
      <div className="bg-white -mt-15  rounded-3xl text-black w-[430px] flex flex-col justify-center items-start p-5 shadow-md -ml-6">
        

<div className="rounded-full bg-[hsla(32,28%,40%,1.00)]  z-60 w-20 h-20 flex items-center justify-center -mt-12 mb-3 ml-4 ">
<img src="https://cdn-icons-png.flaticon.com/512/33/33899.png"
alt="spoon and fork icon"
  className="w-6 h-6 filter invert"
/>
</div>
       
        <h2 className="font-bold self-start text-2xl ml-2 pb-3 pl-3 mt-8 font-playfair">Book a Table</h2>
        <form className="flex-col flex items-start gap-5 text-left pl-5 w-full">
          <input
          type="tel"
          placeholder="Phone"

          className="bg-white outline-gray-500 p-3 border border-gray-300 rounded-sm w-[90%] "
          />

          <input
          type="text"
          placeholder="Name"
          className="bg-white border border-gray-300 rounded-sm outline-gray-500 p-3 w-[90%] "
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
          <button className="bg-[hsla(32,28%,40%,1.00)] hover:bg-black text-white px-4 py-4 rounded-sm w-[50%] font-medium mt-5 mb-8">

            Book A Table
          </button>
          </div>

        </form>
      </div>
    </div>
    
    <div className="text-black font-medium text-3xl mt-45 font-playfair ml-18 ">Our Popular Category

 

        <section className="flex gap-6">
      <div className="bg-gray-500 w-[220px] h-[270px] mt-10 rounded-[5%] relative overflow-hidden">
  <img
    src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F26.jpg&w=1920&q=75"
    className="rounded-2xl w-full h-full object-cover "
  />
  <div className="absolute bottom-2 left-2 text-white ml-2">
    <h2 className="text-[55%] font-bold text-amber-500">Desserts</h2>
    <h1 className="text-lg font-bold text-[70%]">Cheesecake</h1>
  </div>
</div>


 <div className="bg-gray-500 w-[220px] h-[270px] mt-10 rounded-[5%] relative overflow-hidden">
  <img
    src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F27.jpg&w=828&q=75"
    className="rounded-2xl w-full h-full object-cover"
  />
  <div className="absolute bottom-2 left-2 text-white ml-2">
    <h2 className="text-[55%] font-bold text-amber-500">Seafood</h2>
    <h1 className="text-lg font-bold text-[70%]">Salmon fry</h1>
  </div>
</div>


 <div className="bg-gray-500 w-[220px] h-[270px] mt-10 rounded-[5%] relative overflow-hidden">
  <img
    src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F25.jpg&w=828&q=75"
    className="rounded-2xl w-full h-full object-cover"
  />
  <div className="absolute bottom-2 left-2 text-white ml-2">
    <h2 className="text-[55%] font-bold text-amber-500">Main Dishes</h2>
    <h1 className="text-lg font-bold text-[70%]">Chicken Alfredo</h1>
  </div>
</div>

        </section>
    </div>
</div>
    </div>
  );

}


function WhyOurRestaurant() {
  return (
    <div className="bg-white, mt-20">
    <div className="bg-white -mt-20 flex flex-row p-30 my-15 gap-35 justify-center">
      <div className="flex flex-col w-[23%]  ">
      <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F13.png&w=256&q=75" className="h-26 w-26 mb-8"></img>
      <h2 className="text-2xl font-medium text-black">Quality foods</h2>
      <p className="text-gray-500 py-6 w-[70%]">Belonging sir curiosity discovery extremity yet forfeited prevailed own off. Traveling by introduced of mr terminated.</p>
      </div>


        <div className="flex flex-col w-[23%]">
      <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F14.png&w=256&q=75" className="h-26 w-26 mb-8"></img>
      <h2 className="text-2xl font-medium text-black">Fast Delivery</h2>
      <p className="text-gray-500 py-6 w-[70%]">Belonging sir curiosity discovery extremity yet forfeited prevailed own off. Traveling by introduced of mr terminated.</p>
      </div>


        <div className="flex flex-col w-[23%]">
      <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F15.png&w=256&q=75" className="h-26 w-26 mb-8"></img>
      <h2 className="text-2xl font-medium text-black">Delicious Recipes</h2>
      <p className="text-gray-500 py-6 w-[70%]">Belonging sir curiosity discovery extremity yet forfeited prevailed own off. Traveling by introduced of mr terminated.</p>
      </div>
    </div>
    </div>
  );
}




function MeetOurChef() {
  return (
    <div className="bg-[#ebe9e6] py-20 px-10 text-center pb-100 -mt-20">
      <div className="flex items-center justify-center gap-4">
      <img src="	https://restan-nextjs.vercel.app/_next/static/media/17.088ee553.png" className="h-4"></img>
      <p className="text-[#836849] text-2xl font-medium 
      font-merriweather">MASTER CHEFS</p>
      <img src="	https://restan-nextjs.vercel.app/_next/static/media/18.5979b905.png" className="h-4"></img>

      </div>
    <h1 className="text-6xl font-serif font-bold text-black mt-6 mb-9"> Meet Our Special Chefs </h1>
    <div className="flex flex-row justify-center gap-30 ">

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
 </div>

)
}

function Footer() {
  return(
    <div className="bg-zinc-800 w-full -mt-30">
      <div className="justify-center items-center flex ">
      <div className="bg-zinc-900 h-flex max-w-[900px] min-w-[900px] justify-start p-20 items-center flex pt-15 -mt-10">
        <div className="flex justify-start flex-row">
          <div className="flex flex-col text-white">
          <div className="border-r pr-10 border-gray-400">
          <h2 className="font-mono font-medium text-xl -mr-10 mb-2">About Us</h2>
            <p className="opacity-[70%] text-xs font-thin -mr-10 leading-relaxed mb-4">Continued at zealously <br /> necessary is Surrounded sir <br/>
            motionless she end literature.<br />
            Gay direction neglected.</p>

            <div className="flex-row flex gap-3">
            <div className="bg-[#4e4946ff] h-7 w-7 flex justify-center flex-row items-center">
            <img src="https://cdn-icons-png.flaticon.com/128/20/20837.png" className="object-contain invert h-4"/>
            </div>
            <div className="bg-[#4e4946ff] h-7 w-7 flex justify-center flex-row items-center">
            <img src="https://cdn-icons-png.flaticon.com/128/733/733635.png" className="object-contain invert h-4"/>
            </div>
            <div className="bg-[#4e4946ff] h-7 w-7 flex justify-center flex-row items-center">
            <img src="https://cdn-icons-png.flaticon.com/128/1384/1384028.png" className="object-contain invert h-4"/>
            </div>
            <div className="bg-[#4e4946ff] h-7 w-7 flex justify-center flex-row items-center">
            <img src="https://cdn-icons-png.flaticon.com/128/2111/2111532.png" className="object-contain invert h-4"/>
            </div>
            </div>   
          </div>
          </div>

<div className="flex flex-col ml-5">
  <h2 className="font-mono font-medium text-xl ml-7 mb-2 flex-col">Contact Info</h2>
  <p className="opacity-[70%] text-xs font-thin ml-5 leading-loose mb-4">Company Profile<br />About<br/>Help Center<br/>Career<br/>Features<br/>Contact</p>
  </div>

  <div className="flex flex-col ml-3">
  <h2 className="font-mono font-medium text-xl ml-7 mb-2">Explore</h2>
  <div className="text-xs font-thin ml-7 leading-relaxed mb-4">
    

    <div className="flex flex-row gap-2">
    <div className="bg-[#826a45] h-7 w-7 flex justify-center items-center rounded-[20%]">
    <img src="https://cdn-icons-png.flaticon.com/128/484/484167.png" className="object-contain invert h-4"/>
    </div>
      <p className="-mt-1 opacity-70">175 10h Street, Office 375<br/> Berlin, De 21562</p>
    </div>

<div className="flex flex-row gap-2">
    <div className="bg-[#826a45] h-7 w-7 flex justify-center items-center mt-5 rounded-[20%]">
    <img src="https://cdn-icons-png.flaticon.com/128/484/484167.png" className="object-contain invert h-4"/>
    </div>
      <p className="opacity-70 mt-4">+123 34598768<br/> +554 34598734</p>
    </div>

<div className="flex flex-row gap-2">
    <div className="bg-[#826a45] h-7 w-7 flex justify-center items-center mt-5 rounded-[20%]">
    <img src="https://cdn-icons-png.flaticon.com/128/646/646135.png" className="object-contain invert h-4"/>
    </div>
      <p className="opacity-70 mt-6">food@restan.com</p>
    </div>

  </div>
  
  </div>
<div className="flex flex-col ml-5">
  <h2 className="font-mono font-medium text-xl ml-7 mb-2 flex-col">Newsletter</h2>
  <p className="opacity-[70%] text-xs font-thin ml-7 leading-loose mb-4">Join our subscribers list to get the latest news and special offers.</p>
  <div className="">
    <input
          type="text"
          placeholder="Your Email"
          className="border-b border-gray-300 outline-gray-500 ml-5 text-sm border-opacity-[70%] w-[90%] "
          />
<div className="flex items-center pt-2">
  <input type="checkbox" id="agree" className="h-3 w-3 ml-5 accent-blue-600"/>
  <p className="text-xs ml-2">I agree to the Privacy Policy</p>
</div>
  </div>
  </div>
        </div>
        </div>
      </div>


      <div className="flex flex-row justify-start gap-12 pt-7 items-start">
        <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshape%2F9.png&w=1920&q=75" className="h-25 opacity-[50%]"/>
        <img src="restanLogo.webp" className="h-12 mt-5"></img>
        <p className="ml-auto flex-right pr-10 text-sm mt-7 opacity-[90%]">© Copyright 2025. Restan. All Rights Reserved</p>
      </div>
    </div>
  );
}
