import ButtonCrop from "../../general/ButtonCrop";

import { LuPencilLine  } from "react-icons/lu";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

const HeaderContent = () => {
    return (
        <div className="flex flex-col items-center gap-7">
            <div className="flex flex-col gap-1 items-center">
                <p className="text-5xl text-center text-gray-800 font-bold leading-snug">{`Ivan Campos Wainer`}</p>
                <p className="text-2xl text-gray-800 font-bold "><span className="text-emerald-500">Backend</span> Developer</p>
            </div>
            <div className="flex w-full justify-between px-10">
                <ButtonCrop text="Blogs" icon={<LuPencilLine />} url="#" /* TODO */ />
                <ButtonCrop text="Github" icon={<FiGithub />} url="https://github.com/Ivowainer" />
                <ButtonCrop text="Github" icon={<FaLinkedinIn />} url="https://www.linkedin.com/in/ivan-campos-wainer/" />
            </div>
            {/* Circle */}
            <div className="absolute top-10 left-10 w-80 h-80 rounded-full flex items-center justify-center shadow-lg filter blur-3xl opacity-75 bg-gradient-to-br from-blue-800 to-sky-600"></div>
        </div>
    );
};

export default HeaderContent;
