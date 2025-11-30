export default function WhythisRestaurant({ image, alt_text , heading , para}) {
 
 
    return (
    <div>
           <img
            src={image}
            alt={alt_text}
            className="h-28 w-28  mb-6"
          />
          <h2 className="text-2xl font-semibold text-black mb-4 dark:text-white font-marcellus">{heading}</h2>
          <p className="text-gray-500 text-sm max-w-xs dark:text-white ">
            {para}
          </p>
    </div>
  );
}
