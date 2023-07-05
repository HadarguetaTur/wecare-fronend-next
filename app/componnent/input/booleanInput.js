import { useCallback } from "react";
import { AiOutlineCheck } from "react-icons/ai";

const BooleanInput = ({
  title,
  subtitle,
  value,
  onChange,
}) => {
  const onToggle = useCallback(() => {
    onChange(!value);
  }, [onChange, value]);

  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-col">
        <div className="font-medium">{title}</div>
        <div className="font-light text-gray-600">{subtitle}</div>
      </div>
      <div
        onClick={onToggle}
        className={`
          w-10 h-10 rounded-full border-[1px] border-neutral-400 flex items-center justify-center text-neutral-600 cursor-pointer hover:opacity-80 transition
          ${value ? "bg-green-500 font-xl text-white" : ""}
        `}
      >
        <AiOutlineCheck className={`${value ? "bg-green-500 font-xl text-white" : "text-neutral-600"}`}/>
      </div>
    </div>
  );
};

export default BooleanInput;