



export default function MainImage({MainHead , SubHead}) {
  return (
 <div className="relative w-full h-96">
 
  <img
    src="https://restan-nextjs.vercel.app/assets/img/shape/5.jpg"
    alt="About Us Background"
    className="absolute inset-0 w-full h-full object-cover"
  />



  
  <div className="relative z-20 flex flex-col justify-center items-center h-full text-white text-center">
    <h1 className="text-5xl font-bold mb-4 font-marcellus">{MainHead}</h1>
    <div className="flex items-center font-medium text-sm">
      <i className="fas fa-home text-white text-base "></i>
      <p className="ml-2">Home</p>
      <i className="fa fa-chevron-right text-white text-xs px-1.5 "></i>
      <p>{SubHead}</p>
    </div>
  </div>
</div>


  )
}
