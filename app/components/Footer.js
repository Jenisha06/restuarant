export default function Footer() {
  return (
    <div className="bg-[#1B1B1B] pt-20 pb-10">
    
      <div className="flex justify-center -mt-16">
        <img
          src="https://restan-nextjs.vercel.app/_next/static/media/8.264d6d61.png"
          alt="wave pattern"
          className="w-[900px]"
        />
      </div>

    
      <div className="max-w-[1100px] mx-auto grid grid-cols-4 gap-12 text-white pt-10 border-t border-zinc-700">

      
        <div>
          <h2 className="text-2xl font-semibold mb-4">About Us</h2>
          <p className="text-sm opacity-70 leading-relaxed mb-6">
            Continued at zealously necessary is Surrounded sir <br />
            motionless she end literature. <br />
            Gay direction neglected.
          </p>
          <div className="flex gap-3">
            <div className="bg-[#4e4946ff] h-8 w-8 flex justify-center items-center">
              <img src="https://cdn-icons-png.flaticon.com/128/20/20837.png" className="h-4 invert" />
            </div>
            <div className="bg-[#4e4946ff] h-8 w-8 flex justify-center items-center">
              <img src="https://cdn-icons-png.flaticon.com/128/733/733635.png" className="h-4 invert" />
            </div>
            <div className="bg-[#4e4946ff] h-8 w-8 flex justify-center items-center">
              <img src="https://cdn-icons-png.flaticon.com/128/1384/1384028.png" className="h-4 invert" />
            </div>
            <div className="bg-[#4e4946ff] h-8 w-8 flex justify-center items-center">
              <img src="https://cdn-icons-png.flaticon.com/128/2111/2111532.png" className="h-4 invert" />
            </div>
          </div>
        </div>

       
        <div>
          <h2 className="text-2xl font-semibold mb-4">Explore</h2>
          <ul className="space-y-2 text-sm opacity-70">
            <li>Company Profile</li>
            <li>About</li>
            <li>Help Center</li>
            <li>Career</li>
            <li>Features</li>
            <li>Contact</li>
          </ul>
        </div>

        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Contact Info</h2>
          <div className="flex items-start gap-3 mb-4">
            <div className="bg-[#826a45] h-8 w-8 flex justify-center items-center rounded-md">
              <img src="https://cdn-icons-png.flaticon.com/128/484/484167.png" className="h-4 invert" />
            </div>
            <p className="text-sm opacity-70">
              175 10h Street, Office 375 <br /> Berlin, De 21562
            </p>
          </div>
          <div className="flex items-start gap-3 mb-4">
            <div className="bg-[#826a45] h-8 w-8 flex justify-center items-center rounded-md">
              <img src="https://cdn-icons-png.flaticon.com/128/724/724664.png" className="h-4 invert" />
            </div>
            <p className="text-sm opacity-70">
              +123 34598768 <br /> +554 34598734
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-[#826a45] h-8 w-8 flex justify-center items-center rounded-md">
              <img src="https://cdn-icons-png.flaticon.com/128/646/646135.png" className="h-4 invert" />
            </div>
            <p className="text-sm opacity-70">food@restan.com</p>
          </div>
        </div>

       
        <div>
          <h2 className="text-2xl font-semibold mb-4">Newsletter</h2>
          <p className="text-sm opacity-70 mb-4">
            Join our subscribers list to get the latest news and special offers.
          </p>
          <input
            type="text"
            placeholder="Your Email"
            className="w-full bg-transparent border-b border-gray-400 text-sm pb-2 outline-none"
          />
          <div className="flex items-center mt-3">
            <input type="checkbox" id="agree" className="h-3 w-3 accent-[#826a45]" />
            <label htmlFor="agree" className="text-xs ml-2 opacity-80">
              I agree to the Privacy Policy
            </label>
          </div>
        </div>
      </div>

     
      <div className="max-w-[1100px] mx-auto flex justify-between items-center pt-10 border-t border-zinc-700 mt-10 text-sm opacity-90">
        <div className="flex items-center gap-4">
          <img
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshape%2F9.png&w=1920&q=75"
            className="h-10 opacity-70"
          />
          <img src="restanLogo.webp" alt="Restan logo" className="h-10" />
        </div>
        <p>© Copyright 2025. Restan. All Rights Reserved</p>
      </div>
    </div>
  );
}


