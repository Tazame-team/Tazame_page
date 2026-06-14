import { CgSpinner } from "react-icons/cg";

const Load_bg = ({ style = "text-4xl md:text-6xl text-primary-light dark:text-primary-dark animate-spin", show_spinner = true, children }) => {
    return (
        <div
            className="
            rounded
    w-full h-full
    flex justify-center items-center
    bg-linear-to-br
    from-gray-50
   
    via-gray-300
  
    to-gray-50
    dark:from-gray-800
    dark:via-gray-700
    dark:to-gray-800
    bg-size-[200%_200%]
    animate-[gradient_0.6s_linear_infinite]
  "
        >
            {show_spinner ? (

                <CgSpinner className={style} />
            ) : (

                <div className="w-full h-full justify-center items-center flex gap-2">
                    {children}
                </div>
            )}
        </div>
    );
};

export default Load_bg;