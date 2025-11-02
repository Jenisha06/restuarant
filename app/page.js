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
     
      <div className="absolute inset-0 bg-black/40"></div>

      
      <div className="relative z-10 text-white">
       <Header/>
      </div>
    </div>
  );
}


function Header() {
  return (
    
<div className="flex justify-evenly font-medium  pt-4">
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