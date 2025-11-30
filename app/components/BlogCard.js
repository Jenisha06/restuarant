export default function BlogCard(image , Date , Month , ByName) {
  return (
    <div>
      <div className="  relative sm:w-[600px]  sm:mx-auto">
  
  <img
    src={image}
    className="sm:w-[full] sm:h-[510px] object-cover "
    alt="Image"
  />


  <div className="relative bg-white shadow-md p-8 w-[92%] mx-auto -mt-20 text-left  dark:text-white dark:bg-[#1C1C1C] ">

    <div className="absolute top-0 right-6 -translate-y-1/2 bg-[#836849]  text-white text-center py-4 px-6 ">
      <p className="text-lg font-bold leading-none ">{Date}</p>
      <p className="text-[10px] tracking-wider">{Month}</p>
    </div>

   
    <p className="text-sm text-gray-600 tracking-wide mb-2 dark:text-white">
      <span className="font-medium dark:text-white">{ByName}</span> • BURGER , FOOD
    </p>

    <h2 className="text-2xl font-semibold text-black leading-snug mb-4 dark:text-white">
      Picked up a Brussels burger<br />Sprouts with ham
    </h2>

    <a
      href="#blog"
      className="flex items-center gap-2 text-[15px] font-medium text-gray-800 hover:text-black dark:text-white"
    >
      READ MORE
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d="M6 2a1 1 0 0 0 0 2h5.586L2.293 13.293a1 1 0 0 0 1.414 1.414L13 5.414V11a1 1 0 0 0 2 0V2H6z" />
      </svg>
    </a>
  </div>
  
</div>
    </div>

)
}
