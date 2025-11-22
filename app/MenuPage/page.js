import Aboutusnav from '../components/Aboutusnav';
import CommonNavbar from '../components/CommonNavbar';
import Footer from '../components/Footer';
import MainImage from '../components/MainImage';


export default function MenuPage() {
  return (<div>
    <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
/>
   
 <Aboutusnav/>
 <CommonNavbar/>
 <MainImage MainHead={"Menu page"} SubHead={"Menu page"}/>
 <MenuBreakfast/>
<MenuLunch/>
<OrderNow/>
<SeafoodBeverage/>
<Feedback/>
 <Footer/>

 
 
  </div>)
}



  )
}

function MenuBreakfast(){
    return(
        <div className='flex flex-col sm:flex-row  '>
            <img src="https://restan-nextjs.vercel.app/assets/img/banner/10.jpg" className='mt-10 mx-5 sm:h-[600px] sm:ml-20 sm:mt-20'></img>
            <div
      className=" hidden sm:block sm:bg-[#826a45] sm:text-white sm:w-46 sm:h-46 sm:flex flex-col sm:items-center sm:justify-center sm:text-center sm:-ml-20 sm:mt-40  "
      style={{
        clipPath:
          'polygon(45% 1.33975%, 46.5798% .60307%, 48.2635% .15192%, 50% 0%, 51.7365% .15192%, 53.4202% .60307%, 55% 1.33975%, 89.641% 21.3398%, 91.0689% 22.3396%, 92.3015% 23.5721%, 93.3013% 25%, 94.0379% 26.5798%, 94.4891% 28.2635%, 94.641% 30%, 94.641% 70%, 94.4891% 71.7365%, 94.0379% 73.4202%, 93.3013% 75%, 92.3015% 76.4279%, 91.0689% 77.6604%, 89.641% 78.6603%, 55% 98.6603%, 53.4202% 99.3969%, 51.7365% 99.8481%, 50% 100%, 48.2635% 99.8481%, 46.5798% 99.3969%, 45% 98.6603%, 10.359% 78.6603%, 8.93111% 77.6604%, 7.69854% 76.4279%, 6.69873% 75%, 5.96206% 73.4202%, 5.51091% 71.7365%, 5.35898% 70%, 5.35898% 30%, 5.51091% 28.2635%, 5.96206% 26.5798%, 6.69873% 25%, 7.69854% 23.5721%, 8.93111% 22.3396%, 10.359% 21.3398%)',
      }}
    >
      <h3 className="text-orange-400 text-3xl font-bold font-marcellus">Menu</h3>
      <p className="text-white text-[20px] font-marcellus">Breakfast</p>
    </div>



  <div className="bg-white text-black px-20 py-20  ">
      <div className="flex justify-end gap-2 mb-6 sm:ml-100">
        <button className="border border-gray-400 text-gray-600 font-medium px-3 py-1">Half</button>
        <button className="border border-gray-400 text-gray-600 font-medium px-3 py-1">Full</button>
      </div>

      <div className="space-y-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F1.jpg&w=256&q=75" className=" hidden sm:block rounded-full w-25 h-25" />
            <div>
                <div className='flex'>
              <h3 className="font-semibold font-marcellus text-xl flex items-center gap-2">Chicken Alfredo
                <div className='flex flex-col gap-2'> <span className="border-t border-gray-300 flex-1 w-32 "></span>
              <span className="border-t border-gray-300 flex-1 w-32 "></span>
              
              </div>
             
            <p className="text-lg font-bold text-[#8a6a40] ml-5">$44 <span className="ml-2">$85</span></p>
          
              </h3>
              </div>
              <p className="text-gray-600">Ricotta / Goat Cheese / Beetroot</p>
              <p className="text-gray-500 text-sm">Free Drinks</p>
            </div>
          </div>
          
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F2.jpg&w=256&q=75" className="hidden sm:block  rounded-full w-25 h-25" />
            <div>
              <h3 className="font-semibold text-xl flex items-center gap-2 font-marcellus">Fish Chips  <div className='flex flex-col gap-2'> <span className="border-t border-gray-300 flex-1 w-46 "></span>
              <span className="border-t border-gray-300 flex-1 w-46  "></span>
              </div>
              <p className="text-lg font-bold text-[#8a6a40] ml-5">$36 <span className="ml-2">$70</span></p></h3>
              <p className="text-gray-600">Atlantic / Chips / Salad / Tartare</p>
              <p className="text-gray-500 text-sm">Free Drinks</p>
            </div>
          </div>
          
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F3.jpg&w=256&q=75" className="hidden sm:block  rounded-full w-25 h-25" />
            <div>
              <h3 className="font-semibold text-xl flex items-center font-marcellus gap-2">Ebony Fillet Steak  <div className='flex flex-col gap-2'> <span className="border-t border-gray-300 flex-1 w-30 "></span>
              <span className="border-t border-gray-300 flex-1 w-30 "></span>
              </div>
               <p className="text-lg font-bold text-[#8a6a40] ml-4">$44 <span className="ml-2">$85</span></p>
              </h3>
              <p className="text-gray-600">Truffle Mash / Pepper Sauce</p>
              <p className="text-gray-500 text-sm">Free Drinks</p>
            </div>
          </div>
         
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F4.jpg&w=256&q=75" className="hidden sm:block  rounded-full w-25 h-25" />
            <div>
              <h3 className="font-semibold text-xl flex items-center font-marcellus gap-2">Chicken Grill  <div className='flex flex-col gap-2'> <span className="border-t border-gray-300 flex-1 w-37 "></span>
              <span className="border-t border-gray-300 flex-1 w-37 "></span>
              </div>
               <p className="text-lg font-bold text-[#8a6a40] ml-6">$20 <span className="ml-2">$40</span></p>
              </h3>
              <p className="text-gray-600">Ricotta / Goat Cheese / Beetroot</p>
              <p className="text-gray-500 text-sm">Free Drinks</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>


    

        </div>
    )
}


function MenuLunch(){
    return(
         <div className='flex flex-row  '>
 <div className="bg-white text-black px-20 py-20  ">
      <div className="flex justify-end gap-2 mb-6 sm:ml-100">
        <button className="border border-gray-400 text-gray-600 font-medium px-3 py-1">Half</button>
        <button className="border border-gray-400 text-gray-600 font-medium px-3 py-1">Full</button>
      </div>

      <div className="space-y-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F6.jpg&w=256&q=75" className="hidden sm:block  rounded-full w-25 h-25" />
            <div>
                <div className='flex'>
              <h3 className="font-semibold font-marcellus text-xl flex items-center gap-2">Brownies
                <div className='flex flex-col gap-2'> <span className="border-t border-gray-300 flex-1 w-45 "></span>
              <span className="border-t border-gray-300 flex-1 w-45 "></span>
              
              </div>
             
            <p className="text-lg font-bold text-[#8a6a40] ml-8">$34 <span className="ml-2">$65</span></p>
          
              </h3>
              </div>
              <p className="text-gray-600">Ricotta / Goat Cheese / Beetroot</p>
              <p className="text-gray-500 text-sm">Free Drinks</p>
            </div>
          </div>
          
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src="	https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F8.jpg&w=256&q=75" className="hidden sm:block  rounded-full w-25 h-25" />
            <div>
              <h3 className="font-semibold text-xl flex items-center gap-2 font-marcellus">Cheesecakes<div className='flex flex-col gap-2'> <span className="border-t border-gray-300 flex-1 w-38 "></span>
              <span className="border-t border-gray-300 flex-1 w-38  "></span>
              </div>
              <p className="text-lg font-bold text-[#8a6a40] ml-6">$36 <span className="ml-2">$70</span></p></h3>
              <p className="text-gray-600">Atlantic / Chips / Salad / Tartare</p>
              <p className="text-gray-500 text-sm">Free Drinks</p>
            </div>
          </div>
          
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src="	https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F7.jpg&w=256&q=75" className="hidden sm:block  rounded-full w-25 h-25" />
            <div>
              <h3 className="font-semibold text-xl flex items-center font-marcellus gap-2">Muffins<div className='flex flex-col gap-2'> <span className="border-t border-gray-300 flex-1 w-48 "></span>
              <span className="border-t border-gray-300 flex-1 w-48 "></span>
              </div>
               <p className="text-lg font-bold text-[#8a6a40] ml-7">$44 <span className="ml-2">$85</span></p>
              </h3>
              <p className="text-gray-600">Truffle Mash / Pepper Sauce</p>
              <p className="text-gray-500 text-sm">Free Drinks</p>
            </div>
          </div>
         
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src="	https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F5.jpg&w=256&q=75" className="hidden sm:block  rounded-full w-25 h-25" />
            <div>
              <h3 className="font-semibold text-xl flex items-center font-marcellus gap-2">Cupcakes <div className='flex flex-col gap-2'> <span className="border-t border-gray-300 flex-1 w-43 "></span>
              <span className="border-t border-gray-300 flex-1 w-43 "></span>
              </div>
               <p className="text-lg font-bold text-[#8a6a40] ml-7">$20 <span className="ml-2">$40</span></p>
              </h3>
              <p className="text-gray-600">Ricotta / Goat Cheese / Beetroot</p>
              <p className="text-gray-500 text-sm">Free Drinks</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>

     <div
      className="hidden sm-block bg-[#826a45] text-white w-46 h-46 sm:flex flex-col items-center justify-center text-center -mr-40 mt-40 "
      style={{
        clipPath:
          'polygon(45% 1.33975%, 46.5798% .60307%, 48.2635% .15192%, 50% 0%, 51.7365% .15192%, 53.4202% .60307%, 55% 1.33975%, 89.641% 21.3398%, 91.0689% 22.3396%, 92.3015% 23.5721%, 93.3013% 25%, 94.0379% 26.5798%, 94.4891% 28.2635%, 94.641% 30%, 94.641% 70%, 94.4891% 71.7365%, 94.0379% 73.4202%, 93.3013% 75%, 92.3015% 76.4279%, 91.0689% 77.6604%, 89.641% 78.6603%, 55% 98.6603%, 53.4202% 99.3969%, 51.7365% 99.8481%, 50% 100%, 48.2635% 99.8481%, 46.5798% 99.3969%, 45% 98.6603%, 10.359% 78.6603%, 8.93111% 77.6604%, 7.69854% 76.4279%, 6.69873% 75%, 5.96206% 73.4202%, 5.51091% 71.7365%, 5.35898% 70%, 5.35898% 30%, 5.51091% 28.2635%, 5.96206% 26.5798%, 6.69873% 25%, 7.69854% 23.5721%, 8.93111% 22.3396%, 10.359% 21.3398%)',
      }}
    >
      <h3 className="text-orange-400 text-3xl font-bold font-marcellus">Menu</h3>
      <p className="text-white text-[20px] font-marcellus">Breakfast</p>
    </div>

<img src="https://restan-nextjs.vercel.app/assets/img/banner/11.jpg" className='hidden sm:block h-[600px] mt-25 ml-20'></img>    



        </div>
    )
}

function OrderNow() {
  return (
    <div className='bg-black mt-15 mb-25 flex justify-center items-center h-120'>
   
      <div className="text-white max-w-xl">
        <h1 className=" text-4xl sm:text-6xl font-bold font-marcellus mb-6 leading-tight">
          30 MINUTES <br /> DELIVERY!
        </h1>
        <p className="text-gray-300 mb-8 leading-relaxed">
          A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails. The
          Patio Time Bar opens in the center of Florence. The only bar inspired by
          the 1960s, it will give you an experience that you'll have a hard time
          forgetting.
        </p>
        <button className="bg-[#826a45] text-white font-semibold py-3 px-8 rounded-none  flex items-center gap-2">
          <i className="fas fa-shopping-cart"></i> Order Now
        </button>
      </div>
      <img
        src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F11.png&w=750&q=75"
       
        className=" hidden sm:block w-[370px] ml-30 mt-60 md:w-[420px]  "
      />

     
   
    </div>
  )
}


function SeafoodBeverage(){
  return(
    <div className='flex flex-col sm:flex-row'>
      <div className="bg-white text-black px-20 py-20 w-[50%] ">

 
         <div className="flex items-center justify-center gap-2">
      <img src="	https://restan-nextjs.vercel.app/_next/static/media/17.088ee553.png" className="hidden sm:block h-4"></img>
      <p className="text-[#836849] text-[20px] font-semibold
      font-marcellus hidden sm:block ">Fresh From Ocean</p>
      <img src="	https://restan-nextjs.vercel.app/_next/static/media/18.5979b905.png" className="hidden sm:block h-4"></img>


      </div>
      <h1 className='font-marcellus text-4xl items-center flex justify-center font-semibold mt-4'>Seafood</h1>


      <div className="flex justify-end gap-2 mb-6 ml-100">
        <button className="border border-gray-400 text-gray-600 font-medium px-3 py-1">Half</button>
        <button className="border border-gray-400 text-gray-600 font-medium px-3 py-1">Full</button>
      </div>

      <div className="space-y-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F6.jpg&w=256&q=75" className="hidden sm:block rounded-full w-25 h-25" />
            <div>
                <div className='flex'>
              <h3 className="font-semibold font-marcellus text-xl flex items-center gap-2">Salmon Fry
                <div className='flex flex-col gap-2'> <span className="border-t border-gray-300 flex-1 w-45 "></span>
              <span className="border-t border-gray-300 flex-1 w-45 "></span>
              
              </div>
             
            <p className="text-lg font-bold text-[#8a6a40] ml-8">$34 <span className="ml-2">$65</span></p>
          
              </h3>
              </div>
              <p className="text-gray-600">Ricotta / Goat Cheese / Beetroot</p>
              <p className="text-gray-500 text-sm">Free Drinks</p>
            </div>
          </div>
          
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src="	https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F8.jpg&w=256&q=75" className="hidden sm:block rounded-full w-25 h-25" />
            <div>
              <h3 className="font-semibold text-xl flex items-center gap-2 font-marcellus">Pangasius or Basa<div className='flex flex-col gap-2'> <span className="border-t border-gray-300 flex-1 w-38 "></span>
              <span className="border-t border-gray-300 flex-1 w-38  "></span>
              </div>
              <p className="text-lg font-bold text-[#8a6a40] ml-6">$36 <span className="ml-2">$70</span></p></h3>
              <p className="text-gray-600">Atlantic / Chips / Salad / Tartare</p>
              <p className="text-gray-500 text-sm">Free Drinks</p>
            </div>
          </div>
          
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src="	https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F7.jpg&w=256&q=75" className="hidden sm:block rounded-full w-25 h-25" />
            <div>
              <h3 className="font-semibold text-xl flex items-center font-marcellus gap-2">Clams<div className='flex flex-col gap-2'> <span className="border-t border-gray-300 flex-1 w-48 "></span>
              <span className="border-t border-gray-300 flex-1 w-48 "></span>
              </div>
               <p className="text-lg font-bold text-[#8a6a40] ml-7">$44 <span className="ml-2">$85</span></p>
              </h3>
              <p className="text-gray-600">Truffle Mash / Pepper Sauce</p>
              <p className="text-gray-500 text-sm">Free Drinks</p>
            </div>
          </div>
         
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src="	https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F5.jpg&w=256&q=75" className="hidden sm:block rounded-full w-25 h-25" />
            <div>
              <h3 className="font-semibold text-xl flex items-center font-marcellus gap-2">Red Crab<div className='flex flex-col gap-2'> <span className="border-t border-gray-300 flex-1 w-43 "></span>
              <span className="border-t border-gray-300 flex-1 w-43 "></span>
              </div>
               <p className="text-lg font-bold text-[#8a6a40] ml-7">$20 <span className="ml-2">$40</span></p>
              </h3>
              <p className="text-gray-600">Ricotta / Goat Cheese / Beetroot</p>
              <p className="text-gray-500 text-sm">Free Drinks</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>





    <div className="bg-white text-black px-20 py-20 w-[50%] ">


 
         <div className="flex items-center justify-center gap-2">
      <img src="	https://restan-nextjs.vercel.app/_next/static/media/17.088ee553.png" className="hidden sm:block h-4"></img>
      <p className="text-[#836849] text-[20px] font-semibold
      font-marcellus hidden sm:block ">Drinks and wine</p>
      <img src="	https://restan-nextjs.vercel.app/_next/static/media/18.5979b905.png" className="hidden sm:block h-4"></img>

      </div>
      <h1 className='font-marcellus text-4xl items-center flex justify-center font-semibold mt-4'>Beverage</h1>


      <div className="flex justify-end gap-2 mb-6 ml-100">
        <button className="border border-gray-400 text-gray-600 font-medium px-3 py-1">Half</button>
        <button className="border border-gray-400 text-gray-600 font-medium px-3 py-1">Full</button>
      </div>

      <div className="space-y-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F6.jpg&w=256&q=75" className="hidden sm:block rounded-full w-25 h-25" />
            <div>
                <div className='flex'>
              <h3 className="font-semibold font-marcellus text-xl flex items-center gap-2">Wine
                <div className='flex flex-col gap-2'> <span className="border-t border-gray-300 flex-1 w-45 "></span>
              <span className="border-t border-gray-300 flex-1 w-45 "></span>
              
              </div>
             
            <p className="text-lg font-bold text-[#8a6a40] ml-8">$34 <span className="ml-2">$65</span></p>
          
              </h3>
              </div>
              <p className="text-gray-600">Ricotta / Goat Cheese / Beetroot</p>
              <p className="text-gray-500 text-sm">Free Drinks</p>
            </div>
          </div>
          
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src="	https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F8.jpg&w=256&q=75" className=" hidden sm:block rounded-full w-25 h-25" />
            <div>
              <h3 className="font-semibold text-xl flex items-center gap-2 font-marcellus">Coffee<div className='flex flex-col gap-2'> <span className="border-t border-gray-300 flex-1 w-38 "></span>
              <span className="border-t border-gray-300 flex-1 w-38  "></span>
              </div>
              <p className="text-lg font-bold text-[#8a6a40] ml-6">$36 <span className="ml-2">$70</span></p></h3>
              <p className="text-gray-600">Atlantic / Chips / Salad / Tartare</p>
              <p className="text-gray-500 text-sm">Free Drinks</p>
            </div>
          </div>
          
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src="	https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F7.jpg&w=256&q=75" className="hidden sm:block rounded-full w-25 h-25" />
            <div>
              <h3 className="font-semibold text-xl flex items-center font-marcellus gap-2">Hot chocolate<div className='flex flex-col gap-2'> <span className="border-t border-gray-300 flex-1 w-48 "></span>
              <span className="border-t border-gray-300 flex-1 w-48 "></span>
              </div>
               <p className="text-lg font-bold text-[#8a6a40] ml-7">$44 <span className="ml-2">$85</span></p>
              </h3>
              <p className="text-gray-600">Truffle Mash / Pepper Sauce</p>
              <p className="text-gray-500 text-sm">Free Drinks</p>
            </div>
          </div>
         
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src="	https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F5.jpg&w=256&q=75" className="hidden sm:block rounded-full w-25 h-25" />
            <div>
              <h3 className="font-semibold text-xl flex items-center font-marcellus gap-2">Milk Shake<div className='flex flex-col gap-2'> <span className="border-t border-gray-300 flex-1 w-43 "></span>
              <span className="border-t border-gray-300 flex-1 w-43 "></span>
              </div>
               <p className="text-lg font-bold text-[#8a6a40] ml-7">$20 <span className="ml-2">$40</span></p>
              </h3>
              <p className="text-gray-600">Ricotta / Goat Cheese / Beetroot</p>
              <p className="text-gray-500 text-sm">Free Drinks</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>


    </div>
  )
}



function Feedback() {
  return (
    <div className="bg-[#ebe9e6] py-20 px-10 flex flex-col items-center font-marcellus">
      
      <div className="text-center mb-10 ">
         <div className="flex items-center justify-center gap-2">
      <img src="	https://restan-nextjs.vercel.app/_next/static/media/17.088ee553.png" className="h-4"></img>
      <p className="text-[#836849] text-[20px] font-semibold
      font-merriweather">HAPPY CUSTOMERS</p>
      <img src="	https://restan-nextjs.vercel.app/_next/static/media/18.5979b905.png" className="h-4"></img>

      </div>
        <h2 className="text-4xl font-semibold text-[#0a0a0a] mt-3">
          Our Customers Feedback
        </h2>
      </div>

      
      <div className="flex flex-col lg:flex-row items-center gap-10 max-w-6xl">
    
        <div className="relative">
          <img
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F4.jpg&w=256&q=75"
            alt="main"
            className="w-[400px] h-[400px] object-cover shadow-md"
            style={{
              clipPath:
                'polygon(45% 1.33975%, 46.5798% .60307%, 48.2635% .15192%, 50% 0%, 51.7365% .15192%, 53.4202% .60307%, 55% 1.33975%, 89.641% 21.3398%, 91.0689% 22.3396%, 92.3015% 23.5721%, 93.3013% 25%, 94.0379% 26.5798%, 94.4891% 28.2635%, 94.641% 30%, 94.641% 70%, 94.4891% 71.7365%, 94.0379% 73.4202%, 93.3013% 75%, 92.3015% 76.4279%, 91.0689% 77.6604%, 89.641% 78.6603%, 55% 98.6603%, 53.4202% 99.3969%, 51.7365% 99.8481%, 50% 100%, 48.2635% 99.8481%, 46.5798% 99.3969%, 45% 98.6603%, 10.359% 78.6603%, 8.93111% 77.6604%, 7.69854% 76.4279%, 6.69873% 75%, 5.96206% 73.4202%, 5.51091% 71.7365%, 5.35898% 70%, 5.35898% 30%, 5.51091% 28.2635%, 5.96206% 26.5798%, 6.69873% 25%, 7.69854% 23.5721%, 8.93111% 22.3396%, 10.359% 21.3398%)',
            }}
          />

          
          <img
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F6.jpg&w=256&q=75"
            className="absolute top-[-25px] right-10 w-[85px] h-[85px] rounded-full border-4 border-[#ebe9e6] mt-15"
          />
          <img
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F7.jpg&w=256&q=75"
            className="absolute mb-25 -mr-25 bottom-[-25px] right-20 w-[100px] h-[100px] rounded-full border-4 border-[#ebe9e6] "
          />
          <img
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F5.jpg&w=256&q=75"
            className="absolute ml-50 bottom-[-25px] left-10 w-[95px] h-[95px] rounded-full border-4 border-[#ebe9e6] shadow-md"
          />
        </div>

      
        <div className="max-w-xl text-center ml-15 lg:text-left">
          <div className="text-yellow-500 text-[15px] mb-2">
            <i className="fas fa-star"></i> <i className="fas fa-star"></i>{" "}
            <i className="fas fa-star"></i> <i className="fas fa-star"></i>{" "}
            <i className="fas fa-star"></i>{" "}
            <span className="text-gray-500 ml-4">(5/5)</span>
          </div>

          <h3 className="text-3xl font-semibold mb-4 text-[#0a0a0a]">
            The best food ever
          </h3>
          <p className="text-[#5a5a5a] font-sans sm:text-[17px] leading-8 mb-3">
            “Targeting consultation discover apartments. Indulgence off under
            folly death wrote cause her way spite. Plan upon yet way get cold
            spot its week. Almost do am or limits hearts. Resolve parties but
            why she shewing.”
          </p>
          <p className='mb-3'>______________________________________________________________________</p>

          <div>
            <h4 className="font-semibold text-[#0a0a0a] text-lg">
              Matthew J. Wyman
            </h4>
            <p className="text-[#836849] font-medium ">
              SENIOR CONSULTANT
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}





