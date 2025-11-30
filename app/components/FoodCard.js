 export default function FoodCard({image ,  rating , count , mrp , discountPrize , ItemName}) {
 
 
    return (
 <div className="w-100  bg-white rounded-2xl shadow-md overflow-hidden ">
    <img
      src={image}
      alt="food"
      className="w-full h-70 object-cover"
    />

    <div className="p-4 dark:bg-[#1C1C1C]  ">
      <div className="flex items-center justify-between mb-2 ">
        <div className="flex items-center text-gray-700 text-sm ">
          <span className="text-yellow-500 mr-1"><i class="fas fa-star"></i></span>
          <span className="font-semibold ">{rating}</span>
          <span className="ml-1 text-gray-500 dark:text-white">({count})</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className=" text-gray-400 text-sm line-through dark:text-white">{mrp}</span>
          <span className="text-gray-800 font-semibold dark:text-white">{discountPrize}</span>
        </div>
      </div>

      <h3 className="text-[22px] font-marcellus font-semibold text-gray-900 mb-1 dark:text-white">
       {ItemName}
      </h3>
      <p className="text-gray-600  font-marcellus text-[16px] mb-4 dark:text-white">
        4 Chicken Legs <span className="text-[#826a45] text-[20px]">•</span> Chili Sauce <span className="text-[#826a45] text-[20px]">•</span> Soft Drinks
      </p>

      <button className="w-full border border-gray-300 hover:bg-[#826a45] hover:text-white text-gray-900 font-medium py-3 rounded-full flex items-center justify-center gap-2  dark:text-white">
        <i class="fas fa-shopping-cart"></i> Add to Cart
      </button>
    </div>
  </div>
    );
}
