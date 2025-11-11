
export default function CommonNavbar() {
  return (
    <div className="h-27 bg-black border-b border-white items-center flex ">
<img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=750&q=75" className="h-16 ml-23 items-center"></img>
<div className="flex gap-8 ml-60 text-lg font-medium">
      <a href="#home" className="text-white " >Home
      <i className="fa fa-chevron-down text-[15px] px-1.5 text-white  "></i>

    </a>


     <a href="#home" className="text-white " >Pages
      <i className="fa fa-chevron-down text-[15px] px-1.5 text-white  "></i>

    </a>


     <a href="#home" className="text-white " >Menu
      <i className="fa fa-chevron-down text-[15px] px-1.5 text-white  "></i>

    </a>



     <a href="#home" className="text-white " >Blog
      <i className="fa fa-chevron-down text-[15px] px-1.5 text-white  "></i>

    </a>



     <a href="#home" className="text-white " >Shop
      <i className="fa fa-chevron-down text-[15px] px-1.5 text-white  "></i>

    </a>
</div>
<div className="flex flex-row">
  <div className="bg-white h-13 w-13 rounded-full ml-39 items-center flex justify-center">
   <i class="fas fa-shopping-cart text-black text-xl"></i>

  </div>
  <button className="text-white  font-medium border-2 ml-6 py-3 px-14">Reservation</button>

</div>
    </div>
  )
}
