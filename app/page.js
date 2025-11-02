export default function Restan() {
  return (
 
    <div >
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
/>
  <HeroSection/>
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
       <Booking/>
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
<p><i class="fas fa-map-marker-alt"></i> 175 10h Street, Office 375 Berlin, De 21562</p>


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

 <div className="relative z-20 flex flex-col -mt-2 ">
<div className="flex-row flex gap-10">
    <div className="flex flex-col flex-wrap justify-start pl-30 items-start gap-10 md:flex-row ">
      <div className="bg-white -mt-1  rounded-3xl text-black w-[430px] flex flex-col justify-center items-start p-5 shadow-md">
        


<div className="rounded-full bg-[hsla(32,28%,40%,1.00)]  z-60 w-20 h-20 flex items-center justify-center -mt-12 mb-3 ml-4 ">
<img src="https://cdn-icons-png.flaticon.com/512/33/33899.png"
alt="spoon and fork icon"
  className="w-6 h-6 filter invert"
/>
</div>
       
        <h2 className="font-bold self-start text-2xl ml-2 pb-3 pl-3 mt-8">Book a Table</h2>
        <form className="flex-col flex items-start gap-5 text-left pl-5 w-full">
          <input
          type="tel"
          placeholder="Phone"

          className="bg-white outline-gray-500 p-3 border border-gray-300 rounded-sm w-[90%] "
          />

          <input
          type="text"
          placeholder="Name"
          className="bg-white border border-gray-300 rounded-sm  outline-gray-500 p-3 w-[90%] "
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
    <div className="text-black font-medium text-3xl mt-20">Our Popular Category
        <section>
          <div className="bg-gray-500 w-[200px] h-[250px] mt-10 rounded-[5%]">
            <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F26.jpg&w=1920&q=75" className="rounded-[10%]"/>
            
          </div>
        </section>
    </div>
</div>
    </div>
  );

}