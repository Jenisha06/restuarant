import Aboutusnav from '../components/Aboutusnav';
import CommonNavbar from '../components/CommonNavbar';
import Footer from '../components/Footer';


export default function ChefPage() {
  return (<div>
    <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
/>
   
 <Aboutusnav/>
 <CommonNavbar/>
 <MainImage/>
 <ChefCard/>
 <Details/>
 <Footer/>

 
 
  </div>)
}



function MainImage() {
  return (
 <div className="relative w-full h-96">
 
  <img
    src="https://restan-nextjs.vercel.app/assets/img/shape/5.jpg"
    alt="About Us Background"
    className="absolute inset-0 w-full h-full object-cover"
  />



  
  <div className="relative z-20 flex flex-col justify-center items-center h-full text-white text-center">
    <h1 className="text-5xl font-bold mb-4 font-marcellus">Chef Details</h1>
    <div className="flex items-center font-medium text-sm">
      <i className="fas fa-home text-white text-base "></i>
      <p className="ml-2">Home</p>
      <i className="fa fa-chevron-right text-white text-xs px-1.5 "></i>
      <p>about-us</p>
    </div>
  </div>
</div>


  )
}

function ChefCard() {
  return (
    <div className="bg-[#ebe9e6] flex justify-center items-center py-20 px-10">
      <div className=" sm:flex  rounded-3xl  max-w-6xl w-full">
        <img
          src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F1.jpg&w=828&q=75"
        
          className="w-[95%] sm:w-1/2 sm:object-cover rounded-3xl"
        />
        <div className="sm:w-1/2 px-14 py-12 flex flex-col justify-center">
          <h1 className="text-4xl font-marcellus font-semibold mb-4">
            Alexander Petllo
          </h1>
          <p className="text-gray-600 mb-10 leading-relaxed">
            Bring to the table win-win survival strategies to ensure proactive
            domination. At the end of the day, going forward, a new normal that
            has evolved from.
          </p>

          <div className="space-y-4 mb-10">
            <div className="flex items-center gap-3">
              <div className="bg-white p-3 rounded-md ">
                <i className="fas fa-map-marker-alt "></i>
              </div>
              <span className="text-gray-700 text-[15px]">
                175 10h Street, Office 375 Berlin, De 21562
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-white p-3 rounded-md ">
                <i className="fas fa-envelope "></i>
              </div>
              <span className="text-gray-700 text-[15px]">
                alexander@digital.com
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-white p-3 rounded-md ">
                <i className="fas fa-phone-alt "></i>
              </div>
              <span className="text-gray-700 text-[15px]">
                +44-20-7328-4499
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="bg-[#826a45] text-white text-[15px] font-medium px-10 py-3 rounded-full hover:bg-black transition-all duration-300">
              Contact Me
            </button>
            <div className="bg-[#1b1b1b] w-12 h-12 flex justify-center items-center rounded-full">
              <i className="fas fa-share-alt text-white"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


function Details(){
  return (
    <div className='ml-10 flex flex-col sm:flex-row mt-20 sm:ml-25'>
      <div className='mb-15 flex flex-col sm:mb-25 '>
       <h3 className="text-3xl font-marcellus font-semibold mb-7 ">Education</h3>
<div className=' border-l'>
  <div className='flex flex-row items-center '>
 <div className='rounded-full h-4 w-4  border-[#836849] border-2 -ml-2 bg-white'></div>
  <h2 className='font-marcellus text-[20px] font-semibold mb-2 ml-5 '>Residential College</h2>
  </div>
  <p className='font-marcellus mb-2  ml-5'>BA Honours - Biology</p>
  <p className="text-gray-500 mb-7  ml-5">2004 - 2008</p>
  

 
   <div className='flex flex-row items-center '>
 <div className='rounded-full h-4 w-4  border-[#836849] border-2 -ml-2 bg-white'></div>
  <h2 className='font-marcellus text-[20px] font-semibold mb-2 ml-5 '>Univeristy of lowa</h2>
  </div>
  <p className='font-marcellus mb-2  ml-5'>Master's degree - Macroeconomics</p>
  <p className="text-gray-500 mb-2  ml-5">2009 - 2012</p>
</div>
</div>




 <div className='mb-15 flex flex-col sm:mb-25 sm:ml-25 '>
       <h3 className="text-3xl font-marcellus font-semibold mb-7 ">Experience</h3>
<div className=' border-l'>
  <div className='flex flex-row items-center '>
 <div className='rounded-full h-4 w-4  border-[#836849] border-2 -ml-2 bg-white'></div>
  <h2 className='font-marcellus text-[20px] font-semibold mb-2 ml-5 '>Senior Chef</h2>
  </div>
  <p className='font-marcellus mb-2  ml-5'>Dubai Arab Hotel</p>
  <p className="text-gray-500 mb-7  ml-5">31 Aug,2013</p>
  

 
   <div className='flex flex-row items-center '>
 <div className='rounded-full h-4 w-4  border-[#836849] border-2 -ml-2 bg-white'></div>
  <h2 className='font-marcellus text-[20px] font-semibold mb-2 ml-5 '>Master of Restaurant</h2>
  </div>
  <p className='font-marcellus mb-2  ml-5'>Muskaan Food Factory</p>
  <p className="text-gray-500 mb-2  ml-5">12 Dec 2018</p>
</div>
</div>


<div className='flex flex-col sm:ml-45'>
  <h2 className='text-3xl font-marcellus font-semibold mb-7 '>Personal Skills</h2>
  <p className='font-marcellus text-[17px] font-bold mb-4'>Fast Food </p>
  <div className='flex'>
  <div className='w-110 h-[5px] bg-[#836849] mt-5 rounded-2xl mb-7'></div>
  <div className='w-8 h-6 bg-black text-white text-sm items-center flex justify-center font-medium rounded-[5px] -mt-2'>88%</div>
  </div>
  
  <p className='font-marcellus text-[17px] font-bold mb-4'>Sea Food </p>
  <div className='flex'>
  <div className='w-130 h-[5px] bg-[#836849] mt-5 rounded-2xl mb-7'></div>
 <div className='w-8 h-6 bg-black text-white text-sm items-center flex justify-center font-medium rounded-[5px] -mt-2'>95%</div>
</div>
  <p className='font-marcellus text-[17px] font-bold mb-4'>Drinks & Juice </p>
  <div className='flex'>
  <div className='w-100 h-[5px] bg-[#836849] mt-5 rounded-2xl mb-7'></div>
   <div className='w-8 h-6 bg-black text-white text-sm items-center flex justify-center font-medium rounded-[5px] -mt-2'>80%</div>
   </div>
</div>

    </div>
  )

}

