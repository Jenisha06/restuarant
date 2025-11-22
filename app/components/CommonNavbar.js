'use client';
import { useState } from 'react';
import Link from 'next/link';

import { useRouter } from 'next/navigation';
export default function CommonNavbar() {
    const router = useRouter();
   
  
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };
  
    
    const navigateAndClose = (path) => {
      router.push(path);
      setIsMobileMenuOpen(false); 
    };
    
  return (


    <div className="h-27 sm:bg-black sm:border-b sm:border-white/40 sm:items-center sm:flex ">

{/*mobile responsive*/}
      <div className=" w-full  flex justify-around   gap-[85px] p-2 px-4 md:hidden">
       
        <button onClick={toggleMobileMenu} className="focus:outline-none z-40">
          <i className="fa fa-bars text-[#04000b] text-2xl ml-5  "></i>
        </button>

       
        <img
          src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo.png&w=1920&q=75"
          className="h-[55px] "
        />
        
        <div className="w-6"></div> 
      </div>

     
      <div
        className={`fixed top-0 left-0 w-80 h-full   bg-white text-black shadow-lg z-200 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        
        <div className="flex justify-between items-center px-4 py-6 border-b border-gray-200">
          <img 
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo.png&w=1920&q=75" 
            alt="Restan Logo" 
            className="h-15 text-black" 
          />
          <button onClick={toggleMobileMenu} className="text-black  focus:outline-none">
           
           <i className="fa fa-times fa-bars "></i>
          
          </button>
        </div>

      
        <ul className="text-black font-medium">
        
          <li className="py-3 border-b border-gray-200 px-4">
            <a href="#home" onClick={() => navigateAndClose("/")} className="flex justify-between items-center text-[17px] font-medium">
              Home <i className="fa fa-chevron-right text-base"></i>
            </a>
          </li>

          
          <li className="py-3 border-b border-gray-200">
            <a className="flex justify-between items-center text-[17px] font-medium px-4">
              Pages <i className="fa fa-chevron-right text-base"></i>
            </a>
            
            <ul className="ml-6 py-2  text-[1rem]">
              <li className='py-2 px-4 border-b border-gray-100'>
                <a onClick={() => navigateAndClose("/AboutUs")} className="block cursor-pointer">About Us</a>
              </li>
              <li className='py-2 px-4 border-b border-gray-100'>
                <a onClick={() => navigateAndClose("/Chef")} className="block cursor-pointer">Chef</a>
              </li>

               <li className='py-2 px-4 border-b border-gray-100'>
                <a onClick={() => navigateAndClose("/ChefDetails")} className="block cursor-pointer">Chef Details</a>
              </li>
              
              <li className='py-2 px-4 border-b border-gray-100'>
                <a onClick={() => navigateAndClose("/Login")} className="block cursor-pointer">Login</a>
              </li>

               <li className='py-2 px-4 border-b border-gray-100'>
                <a onClick={() => navigateAndClose("/Register")} className="block cursor-pointer">Register</a>
              </li>

                <li className='py-2 px-4  '>
                <a onClick={() => navigateAndClose("/Reservation")} className="block cursor-pointer">Reservation</a>
              </li>
            </ul>
          </li>

          
          <li className="py-3 border-b border-gray-200  px-4">
            <a onClick={() => navigateAndClose("/MenuPage")} className="flex justify-between items-center text-[17px] font-medium cursor-pointer">
              Menu <i className="fa fa-chevron-right text-base"></i>
            </a>
          </li>
          
          <li className="py-3 border-b border-gray-200 px-4">
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-[17px] font-medium">Contact Us</a>
          </li>
        </ul>
      </div>








<img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=750&q=75" className="h-16 ml-23 items-center"></img>
<div className="hidden sm:flex sm:gap-8 sm:ml-60 sm:text-lg sm:font-medium">
      <a href="#home" className="text-white " >Home
      <i className="fa fa-chevron-down text-[15px] px-1.5 text-white  "></i>

    </a>


      <div className="group relative inline-block">
  
  <a onClick={() => {
    router.push("/")
  }}  className="flex items-center text-white">
Pages
    <i className="fa fa-chevron-down text-[15px] px-1.5 "></i>
  </a>


  <div className="absolute  left-0 mt-2 w-70 ml-10  bg-white text-black rounded opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-300 z-20">
    <ul className="py-4 ml-5 text-[16px]">
<li>
  <a onClick={() => {
    router.push("/AboutUs")
  }} className="block px-4 py-2 cursor-pointer">
  About Us
</a>
</li>

      <li><a onClick={() => {
    router.push("/Chef")
  }} className="block px-4 py-2 ">Chef</a></li>
      <li><a onClick={() => {
    router.push("/ChefDetails")
  }}  className="block px-4 py-2 ">Chef Details</a></li>
      <li><a onClick={() => {
    router.push("/Reservation")
  }} className="block px-4 py-2 ">Reservation</a></li>
      <li><a onClick={() => {
    router.push("/ContactUsButton")
  }} className="block px-4 py-2 ">Contact us</a></li>
        <li><a onClick={() => {
    router.push("/Register")
  }} className="block px-4 py-2 ">Register</a></li>
          <li><a onClick={() => {
    router.push("/Login")
  }}  className="block px-4 py-2 ">Login</a></li>
           
    </ul>
  </div>
</div>

     <a a onClick={() => {
    router.push("/MenuPage")
  }}  className="text-white " >Menu
      <i className="fa fa-chevron-down text-[15px] px-1.5 text-white  "></i>

    </a>



     <a a onClick={() => {
    router.push("/BlogStandard")
  }} className="text-white " >Blog
      <i className="fa fa-chevron-down text-[15px] px-1.5 text-white  "></i>

    </a>



     <a a onClick={() => {
    router.push("/Shop")
  }} className="text-white " >Shop
      <i className="fa fa-chevron-down text-[15px] px-1.5 text-white  "></i>

    </a>
</div>
<div className="flex flex-row">
  <div className="bg-white h-13 w-13 rounded-full ml-39 items-center flex justify-center">
   <i class="fas fa-shopping-cart text-black text-xl"></i>

  </div>
  <a  a onClick={() => {
    router.push("/Reservation")
  }} className="text-white  font-medium border-2 ml-6 py-3 px-14">Reservation</a>

</div>
    </div>
  )
}
