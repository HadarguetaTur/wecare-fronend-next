
const CategoryBox=({icon,label,selected})=>{
    return(
        <div
        className={`flex flex-col items-center justify-center gap-2 p-2  border-b-2 hover:text-neutral-800 transition cursor-pointer ${selected?'border-b-neutral-800':'border-transparent'} ${selected?'text-pink-500':'text-neutral-500'}`}       
        >
          {icon}
          <div className="text-xs text-center text-gray-500 ">
            {label}
          </div>

        </div>
    );
}
export default CategoryBox