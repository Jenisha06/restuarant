export default function PopularCategoryCard({ image, category, name}) {
 
 
    return (
     <div className="bg-gray-500 sm:w-[210px] sm:h-[270px] mt-7 rounded-[5%] relative overflow-hidden">
    <img
      src={image}
      className="rounded-2xl w-full h-full object-cover "
    />
    <div className="absolute bottom-2 left-2 text-white ml-2">
      <h2 className="sm:text-[40%] font-bold text-amber-500">{category}</h2>
      <h1 className="text-lg font-bold sm:text-[60%]">{name}</h1>
    </div>
  </div>
  );
}
