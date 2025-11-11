export default function Opening() {
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

