import Aboutusnav from '../components/Aboutusnav';
import CommonNavbar from '../components/CommonNavbar';
import Footer from '../components/Footer';


export default function Register() {
  return (<div>
    <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
/>
   
 <Aboutusnav/>
 <CommonNavbar/>
 <MainImage/>
<RegisterForm/>
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
    <h1 className="text-5xl font-bold mb-4 font-marcellus">Register Page</h1>
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
function RegisterForm() {
  return (
    <div className="flex w-[85%] mx-auto min-h-screen items-center justify-center gap-9">
     
      <img
        src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F14.jpg&w=1920&q=75"
        alt="Dining"
        className="w-[50%] h-[650px] object-cover "
      />

    
      <div className="w-[45%] bg-white p-8 ">
        <h2 className="text-3xl font-marcellus font-bold text-[#826a45] mb-6">CREATE AN ACCOUNT</h2>
        <p className="text-[15px] text-gray-600 mb-6">
          Enter your details to create a new account
        </p>

        <div className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-3  bg-gray-200 rounded-md text-black"
          />
          <input
            type="password"
            placeholder="Password"
            className="px-4 py-3  bg-gray-200 rounded-md text-black"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="px-4 py-3  bg-gray-200 rounded-md text-black"
          />

          <button className="bg-[#826a45]  text-white font-semibold py-3 text-[17px] rounded-md ">
           REGISTER
          </button>
<h2 className='items-center text-2xl font-marcellus flex justify-center font-semibold pt-4'>Or Register With</h2>
          <div className="flex items-center justify-between mt-4">
          
            <button className=" flex   items-center p-10 w-[240px] border border-gray-300  px-4 py-2 rounded-md gap-3  font-semibold">
             <div className='h-8 w-8 bg-red-500 rounded-full text-white items-center flex justify-center ml-7'>  <i class="fab fa-google"> </i></div> Google</button>

 <button className=" flex   items-center p-10 w-[240px] border border-gray-300  px-4 py-2 rounded-md gap-3  font-semibold">
             <div className='h-8 w-8 bg-[#3b5998] rounded-full text-white items-center flex justify-center ml-7'>  <i class="fab fa-facebook-f"></i></div> Facebook</button>
          </div>

          <p className="text-sm text-center mt-6">
            Already have an account?{" "}
            <a href="#" className="text-red-500 font-semibold">
              Login Now
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
