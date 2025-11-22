export default function Footer() {
  return (
    <div className="bg-white text-gray-800 mt-15 dark:text-gray-200 pt-12 px-6 md:px-12 pt-70 -mt-70">
      <div className="bg-zinc-800 w-full">
        <div className="ml-0 sm:ml-46 justify-center items-center h-15 w-full sm:w-[900px] -mt-10 sm:-mt-20 flex" />
        <div className="justify-center items-center flex">
          <div className="bg-[#1B1B1B] w-full sm:max-w-[900px] mx-auto justify-start p-6 sm:p-20 items-center flex flex-col sm:flex-row pt-10 sm:pt-15 -mt-10 sm:-mt-30">
            <div className="flex flex-col sm:flex-row justify-start w-full">
              <div className="flex flex-col text-white mb-6 sm:mb-0">
                <div className="border-b sm:border-r sm:pr-10 border-gray-400 pb-4 sm:pb-0">
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
  );
}
