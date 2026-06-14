import { useState } from "react";
import Image from "next/image";

import Load_bg from "../loading/load_bg";

const Next_image = ({ src, alt = "Image", object = "object-contain" }) => {
    const [loaded, setLoaded] = useState(false);

    return (
        <div className="relative w-full h-full">
            {!loaded && <Load_bg />}

            <Image
                src={src}
                alt={alt}
                fill
                className={`${object} transition-opacity w-full h-full duration-300 ${loaded ? "opacity-100" : "opacity-0"
                    }`}
                onLoad={() => setLoaded(true)}
            />
        </div>
    );
};

export default Next_image;


