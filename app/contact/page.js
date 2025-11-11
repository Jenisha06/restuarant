export default function ContactPage() {
  return (
<div>

<header>
    <div className="bg-[#826A45] dark:bg-[#5c492f] flex flex-col md:flex-row justify-start items-center gap-2 md:gap-6 px-4 py-2 pl-50 pr-50 text-white text-sm md:text-base">
    <img src="call-icon.webp" className="h-4 w-4"/>
    <p className="p-2">Phone: +4733378901</p>
    <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F7.png&w=128&q=75" className="h-4 w-4"/><p className="p-2">Email: food@restan.com</p>
    
<div className="w-full flex justify-end">
  <div className="flex flex-row items-center gap-2">
    <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2Fflag.png&w=128&q=75" className="h-5 w-5"/>
    <p className="text-white dark:text-gray-200 text-sm sm:text-base">English</p>
    <img src="https://cdn-icons-png.flaticon.com/128/2985/2985150.png" className="h-4 w-4 invert"/>
    <div className="border-l border-white pl-4 flex flex-row gap-2">
  <img src="https://cdn-icons-png.flaticon.com/128/20/20837.png" className="invert h-4 w-4"/>
  <img src="https://cdn-icons-png.flaticon.com/128/733/733635.png" className="invert h-4 w-4"/>
  <img src="https://cdn-icons-png.flaticon.com/128/1384/1384028.png" className="invert h-4 w-4"/>
  <img src="https://cdn-icons-png.flaticon.com/128/3128/3128219.png" className="invert h-4 w-4"/>
</div>
  </div>
</div>

    </div>
</header>

<header>
  <div className="bg-black dark:bg-zinc-900 flex flex-col md:flex-row justify-center items-center p-2 md:p-4 border-b-1 border-neutral-400 dark:border-neutral-700">
    <div className="flex-grow flex flex-col md:flex-row justify-center md:justify-center items-center gap-4 p-2 md:p-4 w-full">
      <img src="restanLogo.webp"className="h-8 sm:h-10 md:h-12 object-contain"/>
      <div className="flex gap-7 p-5 pl-20 pr-20 font-semibold text-white">  
    <a href="/">Home</a>
    <a href="#page">Pages</a>
    <a href="#menu">Menu</a>
    <a href="#blog">Blog</a>
    <a href="#shop">Shop</a>
    </div>
    <div className="p-5 bg-white rounded-full">
        <img src="https://cdn-icons-png.flaticon.com/128/1170/1170678.png"className="h-7"/>
    </div>
    <div className="pl-5">
    <button className="bg-black text-white border-white border-1 p-4 hover:bg-white hover:text-black">
        Reservation
    </button>
    </div>
    </div>
  </div>
</header>

<section className="bg-black">
  <div className="relative">
    <img src="https://restan-nextjs.vercel.app/assets/img/shape/5.jpg" className="w-full h-[300px] object-cover"/>
    <div className="absolute inset-0 flex flex-col items-center justify-center p-20 md:p-24 text-white">
        <h1 className="text-5xl">Contact Us</h1>
        <div className="flex flex-row text-sm pt-5">
            <img src="https://cdn-icons-png.flaticon.com/128/20/20176.png" className="invert h-4 pr-1"/>
            <a href="/">Home</a>
            <img src="https://cdn-icons-png.flaticon.com/128/2985/2985179.png" className="invert h-5"/>
            <p>Contact</p>
        </div>
    </div>
    </div>
</section>

<section>
  <div className="bg-white p-6 md:p-20">
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
      
      <div className="flex flex-col items-center justify-center text-center">
        <img 
          src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2Fphone.png&w=640&q=75"
          className="h-16 md:h-20"
        />
        <h4 className="text-black pt-2 text-xl md:text-2xl font-bold">Hotline</h4>
        <p className="text-black text-sm md:text-base">+4733378901</p>
      </div>

      <div className="flex flex-col items-center justify-center text-center">
        <img 
          src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2Fplaceholder.png&w=640&q=75"className="h-16 md:h-20"/>
        <h4 className="text-black pt-2 text-xl md:text-2xl font-bold">Our Location</h4>
        <p className="text-black text-sm md:text-base opacity-60">55 Main Street, The Grand Avenue 2nd <br/>Block, New York City</p>
      </div>

      <div className="flex flex-col items-center justify-center text-center">
        <img 
          src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2Femail.png&w=640&q=75"className="h-16 md:h-20"/>
        <h4 className="text-black pt-2 text-xl md:text-2xl font-bold">Official Email</h4>
        <p className="text-black text-sm md:text-base">info@restan.com</p>
      </div>

    </div>
  </div>
</section>

<section>
    <div className="flex flex-col items-center justify-center gap-4 bg-white p-10 ">
    <div className="bg-white flex flex-row ">
        <img src="https://restan-nextjs.vercel.app/_next/static/media/17.088ee553.png" className="h-4"></img>
    </div>
      <p className="text-[#836849] text-2xl font-medium 
      font-merriweather">KEEP IN TOUCH</p>
      <img src="	https://restan-nextjs.vercel.app/_next/static/media/18.5979b905.png" className="h-4"></img>
      <p className="text-black text-3xl font-bold">Send us a Message</p>
    </div>
</section>

<section>
    <div className="bg-white ">
  <div className="flex flex-col items-center gap-5 text-left px-5 w-full">
    
    <input
      type="text"
      placeholder="Name"
      className="max-w-xs text-gray-500 bg-white border border-gray-300 outline-gray-500 p-1 rounded-sm w-full"
    />
    <input
      type="text"
      placeholder="Email"
      className="max-w-xs text-gray-500 bg-white border border-gray-300 outline-gray-500 p-1 rounded-sm w-full"
    />
    <input
      type="tel"
      placeholder="Phone"
      className="max-w-xs text-gray-500 bg-white border border-gray-300 outline-gray-500 p-1 rounded-sm w-full"
    />
    <input
      type="text"
      placeholder="Your Message"
      className="max-w-xs text-gray-500 bg-white border border-gray-300 outline-gray-500 p-1 rounded-sm w-full"
    />

    <button className="bg-[hsla(32,28%,40%,1.00)] hover:bg-black text-white flex items-center justify-center gap-2 px-4 py-3 rounded-sm w-[50%] font-medium mt-5 mb-8 max-w-xs">
  <img src="https://cdn-icons-png.flaticon.com/128/9333/9333991.png" className="invert h-6" alt="icon"/>
  <span>Get in Touch</span>
</button>

<section className="w-full flex items-center justify-center py-10">
  <div className="w-full px-5">

    <div className="shadow-lg dark:shadow-none">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.080977236561!2d76.35092177502736!3d9.993575673853808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0872b2b9bfb4c3%3A0xdbc5c7e68c3ff12b!2sEmpire%20Mall!5e0!3m2!1sen!2sin!4v1731268000000"
        width="100%"
        height="350"
        allowFullScreen=""
      ></iframe>
    </div>
  </div>
</section>

<section>
  <div className="bg-white flex flex-col md:flex-row justify-start items-center w-full overflow-x-hidden min-h-[800px]">
    <div className="flex justify-center md:justify-start ml-0 md:ml-45 h-[250px] md:h-[350px] w-full md:w-[500px] p-4 md:p-0">
      <iframe
        className="w-full aspect-video shadow-lg"
        src="https://www.youtube.com/embed/F3zw1Gvn4Mk"
      ></iframe>
    </div>

    <div className="flex flex-col text-black pt-10 md:pt-20 bg-white ml-0 md:ml-15 text-2xl md:text-3xl font-medium font-mono px-5 md:px-0 text-center md:text-left">
      <h2>Opening Hours</h2>
      <p className="text-xs font-sans pt-3 opacity-50">
        A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails.
        <br /> The Patio Time Bar opens in the center..
      </p>

      <div className="flex flex-col md:flex-row mt-5">
        <div>
          <div className="text-xs pt-3 font-mono leading-loose">
            <div className="flex flex-col sm:flex-row items-center w-full sm:w-[80%]">
              <span>Sunday to Tuesday:</span>
              <div className="hidden sm:flex flex-1 border-b ml-2 opacity-[30%]"></div>
              <div>10:00 - 09:00</div>
            </div>

            <div className="flex flex-col sm:flex-row items-center w-full sm:w-[80%]">
              <span>Wednesday to Thursday:</span>
              <div className="hidden sm:flex flex-1 border-b ml-2 opacity-[30%]"></div>
              <div>11:30 - 10:30</div>
            </div>

            <div className="flex flex-col sm:flex-row items-center w-full sm:w-[80%] mb-7">
              <span>Friday & Saturday:</span>
              <div className="hidden sm:flex flex-1 border-b ml-2 opacity-[30%]"></div>
              <div>10:30 - 12:00</div>
            </div>

            <div className="flex flex-row items-center space-x-3">
              <div className="bg-[#826a45] flex justify-center items-center p-4 rounded-full h-12 w-12">
                <img
                  src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F6.png&w=128&q=75"
                  className="h-7"
                />
              </div>
              <div className="flex flex-col leading-relaxed text-center md:text-left">
                <h4 className="text-black font-sans text-sm opacity-[50%]">
                  Call Anytime
                </h4>
                <p className="text-xl">+964733-378901</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <img
        src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshape%2F4.png&w=3840&q=75"
        className="h-20 md:h-50 opacity-[20%] mt-7 self-center md:self-start"
      />
    </div>
  </div>
</section>


  </div>
  </div>
</section>

<section>
    <div className="bg-white -mt-50 pt-50">
  <div className="bg-zinc-800 w-full">
    <div className="ml-46 justify-center items-center h-15 w-full sm:w-[900px] -mt-20 flex flex-wrap max-w-full px-4">
      <img
        src="https://restan-nextjs.vercel.app/_next/static/media/8.264d6d61.png"
        className="-mt-10 sm:-mt-50 max-w-full h-auto object-contain"
      />
    </div>

    <div className="justify-center items-center flex px-4">
      <div className="bg-[#1B1B1B] h-flex max-w-[900px] w-full mx-auto justify-start p-5 sm:p-10 md:p-20 items-center flex pt-15 -mt-30 flex-col md:flex-row gap-10">
        <div className="flex justify-start flex-col md:flex-row flex-wrap w-full">
          <div className="flex flex-col text-white mb-6 md:mb-0 md:mr-5 w-full sm:w-auto">
            <div className="border-b md:border-b-0 md:border-r pr-0 md:pr-10 border-gray-400">
              <h2 className="font-mono font-medium text-xl mb-2">About Us</h2>
              <p className="opacity-[70%] text-xs font-thin leading-relaxed mb-4">
                Continued at zealously <br /> necessary is Surrounded sir <br />
                motionless she end literature.<br />
                Gay direction neglected.
              </p>

              <div className="flex flex-row flex-wrap gap-3">
                <div className="bg-[#4e4946ff] h-7 w-7 flex justify-center items-center">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/20/20837.png"
                    className="object-contain invert h-4"
                  />
                </div>
                <div className="bg-[#4e4946ff] h-7 w-7 flex justify-center items-center">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/733/733635.png"
                    className="object-contain invert h-4"
                  />
                </div>
                <div className="bg-[#4e4946ff] h-7 w-7 flex justify-center items-center">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/1384/1384028.png"
                    className="object-contain invert h-4"
                  />
                </div>
                <div className="bg-[#4e4946ff] h-7 w-7 flex justify-center items-center">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/2111/2111532.png"
                    className="object-contain invert h-4"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex color-white flex-col ml-0 md:ml-5 mt-6 md:mt-0 w-full sm:w-auto">
            <h2 className="font-mono font-medium color-white text-xl mb-2 flex-col">
              Contact Info
            </h2>
            <p className="opacity-[70%] text-xs font-thin leading-loose mb-4">
              Company Profile<br />
              About<br />
              Help Center<br />
              Career<br />
              Features<br />
              Contact
            </p>
          </div>

          <div className="flex flex-col ml-0 md:ml-3 mt-6 md:mt-0 w-full sm:w-auto">
            <h2 className="font-mono font-medium text-xl mb-2 color-white">
              Explore
            </h2>
            <div className="text-xs font-thin leading-relaxed mb-4 space-y-4">
              <div className="flex flex-row gap-2 flex-wrap">
                <div className="bg-[#826a45] dark:bg-[#b9925f] h-7 w-7 flex justify-center items-center rounded-[20%]">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/484/484167.png"
                    className="object-contain invert h-4"
                  />
                </div>
                <p className="-mt-1 color-white opacity-70">
                  175 10h Street, Office 375<br /> Berlin, De 21562
                </p>
              </div>

              <div className="flex flex-row gap-2 flex-wrap">
                <div className="bg-[#826a45] h-7 w-7 flex justify-center items-center rounded-[20%]">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/484/484167.png"
                    className="object-contain invert h-4"
                  />
                </div>
                <p className="opacity-70 mt-1 color-white">
                  +123 34598768<br /> +554 34598734
                </p>
              </div>

              <div className="flex flex-row gap-2 flex-wrap">
                <div className="bg-[#826a45] h-7 w-7 flex justify-center items-center rounded-[20%]">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/646/646135.png"
                    className="object-contain invert h-4"
                  />
                </div>
                <p className="opacity-70 mt-1 color-white">food@restan.com</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col ml-0 md:ml-5 mt-6 md:mt-0 w-full sm:w-auto">
            <h2 className="font-mono font-medium text-xl mb-2 flex-col color-white">
              Newsletter
            </h2>
            <p className="opacity-[70%] text-xs font-thin leading-loose mb-4 color-white">
              Join our subscribers list to get the latest news and special
              offers.
            </p>
            <div>
              <input
                type="text"
                placeholder="Your Email"
                className="border-b border-gray-300 outline-gray-500 text-sm border-opacity-[70%] w-full bg-transparent"
              />
              <div className="flex items-center pt-2">
                <input
                  type="checkbox"
                  id="agree"
                  className="h-3 w-3 accent-blue-600"
                />
                <p className="text-xs ml-2">I agree to the Privacy Policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="flex flex-col sm:flex-row justify-start gap-4 sm:gap-12 pt-7 items-center sm:items-start px-4 text-center sm:text-left">
      <img
        src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshape%2F9.png&w=1920&q=75"
        className="h-12 sm:h-16 opacity-[50%]"
      />
      <img src="restanLogo.webp" className="h-8 sm:h-10 mt-3 sm:mt-5" />
      <p className="text-xs sm:text-sm opacity-[90%] sm:ml-auto sm:pr-10 mt-4 sm:mt-7 text-white">
        © Copyright 2025. Restan. All Rights Reserved
      </p>
    </div>
  </div>
</div>

</section>

</div>
  );
}
