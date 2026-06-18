import { ImSpinner2 } from "react-icons/im";

const General_button = ({
    texto,
    disable,
    evento,
    loading = false,
    size = "text-2xl",
}) => {
    return (
        <button
            disabled={disable}
            onClick={evento}
            type="submit"
            className={`
                w-full p-3 rounded-2xl shadow-md transition-all duration-100
                 ring-white bg-black text-white  hover:scale-101 

                ${
                    disable
                        ? "bg-gray-400 text-gray-100 cursor-not-allowed opacity-80"
                        : "bg-secondary dark:bg-dark-primary dark:text-dark-texto active:hover:bg-linear-to-r hover:bg-linear-to-r from-primary-light via-primary-light  to-white hover:text-white cursor-pointer"
                }
            `}
        >
            <div className="flex justify-center items-center gap-2">
                {disable && loading && (
                    <ImSpinner2 className={`${size} animate-spin`} />
                )}

                <span>
                    {disable && loading ? "Procesando..." : texto}
                </span>
            </div>
        </button>
    );
};

export default General_button;