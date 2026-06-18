import { ImSpinner2 } from "react-icons/im";

const General_button = ({
    texto,
    disable = false,
    evento,
    loading = false,
    size = "text-2xl",
}) => {
    const isDisabled = disable || loading;

    return (
        <button
            disabled={isDisabled}
            onClick={evento}
            type="submit"
            className={`
                w-full p-3 rounded-2xl shadow-md transition-all duration-100
                ring-white text-white

                ${isDisabled
                    ? "bg-gray-400 text-black cursor-not-allowed opacity-80"
                    : "bg-secondary text-black bg-black dark:bg-dark-primary dark:text-dark-texto active:hover:bg-linear-to-r hover:bg-linear-to-r from-primary-light to-primary-light  hover:text-white cursor-pointer hover:scale-101"
                }
            `}
        >
            <div className="flex justify-center items-center gap-2">
                {loading && (
                    <ImSpinner2 className={`${size} animate-spin`} />
                )}

                <span>
                    {loading ? "Procesando..." : texto}
                </span>
            </div>
        </button>
    );
};

export default General_button;