
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
    <OrderCard/>
    <Opening/>
     <MeetOurChef/>
     <NewsAndBlogs/>
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
<i className="fas fa-arrow-up-right-from-square text-yellow-100 text-2xl"></i>


      </div>
      
    </div>
  )
}

function Booking() {
  return (

 <div className="relative z-20 flex flex-col bg-white w-max">
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
    
    <div className="text-black font-medium text-3xl mt-45 font-playfair  ">Our Popular Category

 

        <section className="flex gap-6">
      <div className="bg-gray-500 w-[210px] h-[270px] mt-10 rounded-[5%] relative overflow-hidden">
  <img
    src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F26.jpg&w=1920&q=75"
    className="rounded-2xl w-full h-full object-cover "
  />
  <div className="absolute bottom-2 left-2 text-white ml-2">
    <h2 className="text-[55%] font-bold text-amber-500">Desserts</h2>
    <h1 className="text-lg font-bold text-[70%]">Cheesecake</h1>
  </div>
</div>


 <div className="bg-gray-500 w-[210px] h-[270px] mt-10 rounded-[5%] relative overflow-hidden">
  <img
    src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F27.jpg&w=828&q=75"
    className="rounded-2xl w-full h-full object-cover"
  />
  <div className="absolute bottom-2 left-2 text-white ml-2">
    <h2 className="text-[55%] font-bold text-amber-500">Seafood</h2>
    <h1 className="text-lg font-bold text-[70%]">Salmon fry</h1>
  </div>
</div>


 <div className="bg-gray-500 w-[210px] h-[270px] mt-10 rounded-[5%] relative overflow-hidden">
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
      <div className="flex flex-col w-[20%]  ">
      <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F13.png&w=256&q=75" className="h-26 w-26 mb-8"></img>
      <h2 className="text-2xl font-medium text-black">Quality foods</h2>
      <p className="text-gray-500 py-6 w-[70%]">Belonging sir curiosity discovery extremity yet forfeited prevailed own off. Traveling by introduced of mr terminated.</p>
      </div>


        <div className="flex flex-col w-[20%]">
      <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F14.png&w=256&q=75" className="h-26 w-26 mb-8"></img>
      <h2 className="text-2xl font-medium text-black">Fast Delivery</h2>
      <p className="text-gray-500 py-6 w-[70%]">Belonging sir curiosity discovery extremity yet forfeited prevailed own off. Traveling by introduced of mr terminated.</p>
      </div>


        <div className="flex flex-col w-[20%]">
      <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F15.png&w=256&q=75" className="h-26 w-26 mb-8"></img>
      <h2 className="text-2xl font-medium text-black">Delicious Recipes</h2>
      <p className="text-gray-500 py-6 w-[70%]">Belonging sir curiosity discovery extremity yet forfeited prevailed own off. Traveling by introduced of mr terminated.</p>
      </div>
    </div>
    </div>
  );
}


function OrderCard() {
  return (
    <div className="bg-white -mt-20 -mb-50">
    <div
      className="relative flex items-center justify-between bg-cover bg-center py-24 px-32 overflow-hidden w-[80%] mx-auto my-20 rounded-4xl mb-50"
      style={{
        backgroundImage:
          "url('https://restan-nextjs.vercel.app/assets/img/shape/4.jpg')",
      }}
    >
      <div className="relative w-1/2 flex items-center justify-center">
        <div className="relative">
          <img
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F15.png&w=1080&q=75"
            alt="Main Dish"
            className="w-[330px] rounded-full "
          />
          <div className="absolute -top-10 -right-10 bg-white w-[120px] h-[120px] rounded-full flex flex-col items-center justify-center shadow-md">
            <p className="text-black text-lg font-medium">Save</p>
            <p className="text-black text-3xl font-bold">55%</p>
          </div>

          <img
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F1.png&w=1080&q=75"
            alt="Dish 1"
            className="absolute -top-24 -left-20 w-[170px] rounded-full "
          />

          <img
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F12.png&w=1080&q=75"
            alt="Dish 2"
            className="absolute -bottom-15 -left-10 w-[120px] rounded-full shadow-lg"
          />
        </div>
      </div>

      <div className="w-1/2 pl-16">
     
        <p className="text-black tracking-wide mb-2 text-lg font-medium flex items-center">
          TODAY SPECIAL OFFER <span className="ml-3"> <img src="	https://restan-nextjs.vercel.app/_next/static/media/18.5979b905.png" className="h-4"></img></span>
          
        </p>
        
        <h2 className="text-5xl font-semibold leading-tight mb-5 text-black">
          Explore Irresistible <br /> Promotions!
        </h2>
        <p className="text-gray-800 leading-relaxed mb-8 text-[17px]">
          Contrasted dissimilar get joy you instrument out reasonably. Again
          keeps at no meant stuff. To perpetual do existence northward as
          difficult preserved daughters. Continued at up to zealously necessary.
        </p>
        <button className="bg-[#4c3b2a] text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-[#3b2a1f] transition">
          Order Today
        </button>
      </div>
    </div>
    </div>
  );
}





function Opening() {
  return (
    <div className="bg-white flex justify-start items-center md:flex-row w-full overflow-x-hidden min-h-[800px]">
      <div className="flex justify-start ml-45 h-[350px] w-[500px]">
        <iframe className="w-full max-w-4xl aspect-video shadow-lg"src="https://www.youtube.com/embed/F3zw1Gvn4Mk"></iframe>
      </div>
      <div className="flex flex-col text-black pt-20 bg-white  ml-15 text-3xl font-medium font-mono">
        <h2>Opening Hours</h2>
        <p className="text-xs font-sans pt-3 opacity-50">
          A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails.<br /> 
          The Patio Time Bar opens in the center..
        </p>
        <div className="flex flex-row">

        <div>
          <div className="text-xs pt-3 font-mono leading-loose">
            <div className="flex items-center w-[80%]">
              <span>Sunday to Tuesday:</span>
              <div className="flex-1 border-b-1 ml-2 opacity-[30%]"></div>
              <div>10:00 - 09:00</div>
            </div>

            <div className="flex items-center w-[80%]">
              <span>Wednesday to Thursday:</span>
              <div className="flex-1 border-b-1 ml-2 opacity-[30%]"></div>
              <div>11:30 - 10:30</div>
            </div>

            <div className="flex items-center w-[80%] mb-7">
              <span>Friday & Saturday:</span>
              <div className="flex-1 border-b-1 ml-2 opacity-[30%]"></div>
              <div>10:30 - 12:00</div>
            </div>
            <div className="flex flex-row items-center space-x-3">
            <div className="bg-[#826a45] flex justify-start items-center p-4 rounded-full object-cover h-15 w-15">
              <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F6.png&w=128&q=75" className="h-7"/>
            </div>
            <div className="flex flex-col leading-relaxed">
            <h4 className="text-black font-sans -mt-5 text-sm opacity-[50%]">Call Anytime</h4>
            <p className="justify-start text-xl -mb-4">+964733-378901</p>
            </div></div>
          </div>
        </div>
      </div>
      
        <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshape%2F4.png&w=3840&q=75" className="h-50 opacity-[20%] mt-7"/>
      </div>
    </div>
  );
}






function MeetOurChef() {
  return (
    <div className="bg-[#ebe9e6] py-20 px-10 text-center pb-40 -mt-20 pt-20">
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

function NewsAndBlogs() {
  return (
    <div className="bg-white flex flex-col justify-center mb-50 py-20 px-10 text-center">
       <div className="flex items-center justify-center gap-2">
      <img src="	https://restan-nextjs.vercel.app/_next/static/media/17.088ee553.png" className="h-4"></img>
      <p className="text-[#836849] text-2xl font-medium 
      font-merriweather">NEWS & BLOG</p>
      <img src="	https://restan-nextjs.vercel.app/_next/static/media/18.5979b905.png" className="h-4"></img>

      </div>
    <h1 className="text-5xl font-serif font-bold text-black mt-6 mb-9 items-center"> Our Latest News & Blog </h1>


<div className="flex mx-auto gap-10 justify-center mt-10">
<div className="relative w-[600px]  mx-auto">
  
  <img
    src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F1.jpg&w=1920&q=75"
    className="w-[full] h-[510px] object-cover "
    alt="Blog Image"
  />


  <div className="relative bg-white shadow-md p-8 w-[92%] mx-auto -mt-20 text-left">

    <div className="absolute top-0 right-6 -translate-y-1/2 bg-[#836849]  text-white text-center py-4 px-6 ">
      <p className="text-lg font-bold leading-none">24</p>
      <p className="text-[10px] tracking-wider">DEC</p>
    </div>

   
    <p className="text-sm text-gray-600 tracking-wide mb-2">
      <span className="font-medium">BY MD SOHAG</span> • BURGER , FOOD
    </p>

    <h2 className="text-2xl font-semibold text-black leading-snug mb-4">
      Picked up a Brussels burger<br />Sprouts with ham
    </h2>

    <a
      href="#blog"
      className="flex items-center gap-2 text-[15px] font-medium text-gray-800 hover:text-black"
    >
      READ MORE
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d="M6 2a1 1 0 0 0 0 2h5.586L2.293 13.293a1 1 0 0 0 1.414 1.414L13 5.414V11a1 1 0 0 0 2 0V2H6z" />
      </svg>
    </a>
  </div>
  
</div>
<div className="relative w-[600px] mx-auto">
  
  <img
  src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F2.jpg&w=1920&q=75"
    className="w-[90%] h-[510px] object-cover"
    alt="Blog Image"
  />


  <div className="relative bg-white shadow-md p-8 w-[92%] mx-auto -mt-20 text-left">

    <div className="absolute top-0 right-6 -translate-y-1/2 bg-[#836849]  text-white text-center py-4 px-6">
      <p className="text-lg font-bold leading-none">18</p>
      <p className="text-[10px] tracking-wider">NOV</p>
    </div>

   
    <p className="text-sm text-gray-600 tracking-wide mb-2">
      <span className="font-medium">BY MD SOHAG</span> • BURGER , FOOD
    </p>

    <h2 className="text-2xl font-semibold text-black leading-snug mb-4">
    This prefabricated passive <br />house is highly sustainable
    </h2>

    <a
      href="#blog"
      className="flex items-center gap-2 text-[15px] font-medium text-gray-800 hover:text-black"
    >
      READ MORE
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d="M6 2a1 1 0 0 0 0 2h5.586L2.293 13.293a1 1 0 0 0 1.414 1.414L13 5.414V11a1 1 0 0 0 2 0V2H6z" />
      </svg>
    </a>
  </div>
  
</div>




</div>

</div>
  )
}




function Footer() {
  return(
    <div className="bg-white -mt-50 pt-50">
    <div className="bg-zinc-800 w-full w-auto">
      <div className="ml-46 justify-center items-center h-15 w-[900px] -mt-20 flex">
      <img src="https://restan-nextjs.vercel.app/_next/static/media/8.264d6d61.png"className="-mt-50"/></div>
      <div className="justify-center items-center flex ">
      <div className="bg-[#1B1B1B] h-flex max-w-[900px] mx-auto justify-start p-20 items-center flex pt-15 -mt-30 flex">
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
    </div>
  );
}
