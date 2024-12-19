/* eslint-disable react/prop-types */
import { FiArrowRight } from "react-icons/fi"; // Ícone ArrowRight da biblioteca React Icons

const Button = ({ label, ...props }) => {
  return (
    <button
      className="group flex items-center gap-2 px-6 py-3 text-white bg-primary-700 rounded-md font-semibold uppercase text-sm hover:bg-secondary-600 transition-all duration-300"
      {...props}>
      {label}
      <span className="group-hover:translate-x-1 transition-transform duration-300">
        <FiArrowRight size={16} />
      </span>
    </button>
  );
};

export default Button;