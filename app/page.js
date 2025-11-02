export default function Restan() {
  return (
 
    <div >
      <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
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
    </div>
  )
}