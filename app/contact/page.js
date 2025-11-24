export default function ContactPage() {
  return (
<div>

<header>
    <div className="bg-[#826A45] dark:bg-[#5c492f] flex flex-col md:flex-row justify-start items-center gap-2 md:gap-6 px-4 py-2 pl-50 pr-50 text-white text-sm md:text-base overflow-x-hidden">
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
  <div className="bg-white dark:bg-zinc-900 p-6 md:p-20">
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
      
      <div className="flex flex-col items-center justify-center text-center">
        <img 
          src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2Fphone.png&w=640&q=75"
          className="h-16 md:h-20"
        />
        <h4 className="text-black dark:text-white pt-2 text-xl md:text-2xl font-bold">Hotline</h4>
        <p className="text-black dark:text-white text-sm md:text-base">+4733378901</p>
      </div>

      <div className="flex flex-col items-center justify-center text-center">
        <img 
          src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2Fplaceholder.png&w=640&q=75"className="h-16 md:h-20"/>
        <h4 className="text-black dark:text-white pt-2 text-xl md:text-2xl font-bold">Our Location</h4>
        <p className="text-black dark:text-white text-sm md:text-base opacity-60">55 Main Street, The Grand Avenue 2nd <br/>Block, New York City</p>
      </div>

      <div className="flex flex-col items-center justify-center text-center">
        <img 
          src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2Femail.png&w=640&q=75"className="h-16 md:h-20"/>
        <h4 className="text-black dark:text-white pt-2 text-xl md:text-2xl font-bold">Official Email</h4>
        <p className="text-black dark:text-white text-sm md:text-base">info@restan.com</p>
      </div>

    </div>
  </div>
</section>

<section>
    <div className="flex flex-col items-center justify-center gap-4 bg-white dark:bg-zinc-900 p-10  ">
    <div className="bg-white dark:bg-zinc-900 flex flex-row ">
        <img src="https://restan-nextjs.vercel.app/_next/static/media/17.088ee553.png" className="h-4"></img>
    </div>
      <p className="text-[#836849] text-2xl font-medium 
      font-merriweather">KEEP IN TOUCH</p>
      <img src="	https://restan-nextjs.vercel.app/_next/static/media/18.5979b905.png" className="h-4"></img>
      <p className="text-black text-3xl font-bold dark:text-white">Send us a Message</p>
    </div>
</section>

<section>
    <div className="bg-white dark:bg-zinc-900">
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
  <div className='dark:bg-zinc-900 mx-[5vh] mt-[100px] sm:mx-[16vh] h-[700px]'> 
            <h2 className='hidden sm:block text-[#04000b] sm:opacity-10 font-marcellus sm:text-9xl sm:font-semibold ml-15 dark:text-[#1C1C1C]'>RESTAN</h2>
            <div className="flex flex-col-reverse  sm:flex-row">
<div className="w-[400px] h-[380px]  relative sm:w-[696px] sm:h-[392px] sm:pb-[65%] overflow-hidden sm:ml-15 ">
      <iframe
        src="https://www.youtube.com/embed/F3zw1Gvn4Mk?autoplay=1&loop=1&playlist=F3zw1Gvn4Mk&controls=0&preload=metadata&enablejsapi=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1"
        title="Mr Fox Restaurant Promo Video"
        
      
        className="absolute top-0 left-0 w-full h-[50%]"
       
      />
    </div>

 <div className=" w-full py-6  bg-white sm:-mt-[50px] sm:-ml-[100px] text-black sm:w-[570px] h-max sm:py-15 flex flex-col justify-center items-start px-15 shadow-md z-10 dark:bg-[#1C1C1C] dark:text-white">
 

  <h2 className="text-3xl font-bold mb-3 font-marcellus">Opening Hours</h2>
  <p className="text-[14px] mb-6 leading-relaxed text-gray-600  dark:text-zinc-400 ">
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
    <p className="text-gray-500 text-sm  dark:text-white">Call Anytime</p>
    <p className="text-[15px] font-bold text-[#04000b] font-marcellus  dark:text-white">+964733-378901</p>
    </div>
  </div>
</div>

    </div>
    

        </div>
</section>


  </div>
  </div>
</section>


    <div className="bg-white dark:bg-zinc-900 text-gray-800 dark:text-gray-200 pt-12 px-6 md:px-12 pt-70 -mt-70">
      <div className="bg-zinc-800 w-full">
        <div className="ml-0 sm:ml-46 justify-center items-center h-15 w-full sm:w-[900px] -mt-10 sm:-mt-20 flex" />
        <div className="justify-center items-center flex">
          <div className="bg-[#1B1B1B] w-full sm:max-w-[900px] mx-auto justify-start p-6 sm:p-20 items-center flex flex-col sm:flex-row pt-10 sm:pt-15 -mt-10 sm:-mt-30">
            <div className="flex flex-col sm:flex-row justify-start w-full">
              <div className="flex flex-col text-white mb-6 sm:mb-0">
                <div className=" sm:border-r sm:pr-10 border-gray-400 pb-4 sm:pb-0">
                  <h2 className="font-marcellus font-medium text-xl mb-2">About Us</h2>
                  <p className="opacity-70 text-xs font-marcellus leading-relaxed mb-4">
                    Continued at zealously <br /> necessary is Surrounded sir <br />
                    motionless she end literature.<br />
                    Gay direction neglected.
                  </p>
                  <div className="flex flex-row gap-3">
                    <div className="bg-[#4e4946ff] h-7 w-7 flex justify-center items-center">
                      <img src="https://cdn-icons-png.flaticon.com/128/20/20837.png" className="object-contain invert h-4" />
                    </div>
                    <div className="bg-[#4e4946ff] h-7 w-7 flex justify-center items-center">
                      <img src="https://cdn-icons-png.flaticon.com/128/733/733635.png" className="object-contain invert h-4" />
                    </div>
                    <div className="bg-[#4e4946ff] h-7 w-7 flex justify-center items-center">
                      <img src="https://cdn-icons-png.flaticon.com/128/1384/1384028.png" className="object-contain invert h-4" />
                    </div>
                    <div className="bg-[#4e4946ff] h-7 w-7 flex justify-center items-center">
                      <img src="https://cdn-icons-png.flaticon.com/128/2111/2111532.png" className="object-contain invert h-4" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col mt-6 sm:mt-0 sm:ml-5">
                <h2 className="font-marcellus font-medium text-xl mb-2 text-white">Contact Info</h2>
                <p className="opacity-70 text-xs font-thin leading-loose mb-4 text-white">
                  Company Profile<br />About<br />Help Center<br />Career<br />Features<br />Contact
                </p>
              </div>

              <div className="flex flex-col mt-6 sm:mt-0 sm:ml-3">
                <h2 className="font-marcellus font-medium text-xl mb-2 text-white">Explore</h2>
                <div className="text-xs font-thin leading-relaxed mb-4">
                  <div className="flex flex-row gap-2">
                    <div className="bg-[#826a45] h-7 w-7 flex justify-center items-center rounded-[20%]">
                      <img src="https://cdn-icons-png.flaticon.com/128/484/484167.png" className="object-contain invert h-4" />
                    </div>
                    <p className="opacity-70 text-white font-marcellus">175 10h Street, Office 375<br /> Berlin, De 21562</p>
                  </div>

                  <div className="flex flex-row gap-2 mt-4">
                    <div className="bg-[#826a45] h-7 w-7 flex justify-center items-center rounded-[20%]">
                      <img src="https://cdn-icons-png.flaticon.com/128/484/484167.png" className="object-contain invert h-4" />
                    </div>
                    <p className="opacity-70 text-white font-marcellus">+123 34598768<br /> +554 34598734</p>
                  </div>

                  <div className="flex flex-row gap-2 mt-4">
                    <div className="bg-[#826a45] h-7 w-7 flex justify-center items-center rounded-[20%]">
                      <img src="https://cdn-icons-png.flaticon.com/128/646/646135.png" className="object-contain invert h-4" />
                    </div>
                    <p className="opacity-70 text-white font-marcellus">food@restan.com</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col mt-6 sm:mt-0 sm:ml-5">
                <h2 className="font-mono font-medium text-xl mb-2 text-white font-marcellus">Newsletter</h2>
                <p className="opacity-70 text-xs font-marcellus leading-loose mb-4 text-white">
                  Join our subscribers list to get the latest news and special offers.
                </p>
                <input
                  type="text"
                  placeholder="Your Email"
                  className="border-b border-gray-300 outline-gray-500 text-white text-sm border-opacity-[70%] w-full sm:w-[90%]"
                />
                <div className="flex items-center pt-2">
                  <input type="checkbox" id="agree" className="h-3 w-3 accent-blue-600" />
                  <p className="text-xs text-white ml-2 font-marcellus">I agree to the Privacy Policy</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center sm:justify-start gap-6 sm:gap-12 pt-7 items-center sm:items-start text-center sm:text-left">
          <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshape%2F9.png&w=1920&q=75" className="h-20 opacity-50" />
          <img src="restanLogo.webp" className="h-12 mt-5" />
          <p className="text-sm font-marcellus mt-4 sm:mt-7 opacity-90 sm:ml-auto sm:pr-10">© Copyright 2025. Restan. All Rights Reserved</p>
        </div>
      </div>
    </div>



</div>
  );
}
