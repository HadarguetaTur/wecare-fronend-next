import { BiDollar } from "react-icons/bi";

const Input = ({
    id,
    label,
    type,
    disabled,
    formatPrice,
    required,
    register,
    errors,
    options,
    onChangeType,
}) => {
    return (
        <div className="w-full relative">
            {formatPrice && (
                <BiDollar
                    size={24}
                    className="text-neutral-700 absolute top-5 left-2"
                />
            )}


            {type === "select" ? (
                <div className="mb-4">
                    <select
                        id={id}
                        disabled={disabled}
                        {...register(id, { required })}
                        className={`peer w-full p-4 pt-6 font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed
             ${formatPrice ? 'pl-9' : 'pl-4'} h-10 sm:h-12 appearance-none`}
                        defaultValue=""
                        onChange={(e) => { onChangeType(e.target.value) }}
                    >
                        <option value="" disabled>
                            {" "}
                        </option >
                        {options.map((option) => (
                            <option key={option.value} value={option.value} >
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div >
            ) : (

                <input
                    id={id}
                    disabled={disabled}
                    {...register(id, { required })}
                    defaultValue=""
                    type={type}
                    className={`peer w-full p-4 pt-6 font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed
                    ${formatPrice ? 'pl-9' : 'pl-4'} ${type === 'checkbox' ? "form-checkbox rounded-md " : ""}`}
                />
            )}
            <label
                className={`absolute text-md duration-150 transform -translate-y-3 top-5 z-10 origin-[0]
                ${formatPrice ? 'left-9' : 'left-4'}
                 peer-placeholder-shown:scale-100
                 peer-placeholder-shown:translate-y-0
                 peer-focus:scale-75
                 peer-focus:-translate-y-4`}
            >
                {label}
            </label>
        </div>
    );
};

export default Input;
