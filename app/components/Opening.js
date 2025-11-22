


export default function Opening() {
  return (
     <div className='mx-[5vh] mt-[100px] sm:mx-[16vh] h-[700px] mb-[50px]'> 
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

