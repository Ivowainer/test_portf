import Link from "next/link";

const ButtonCrop = ({ text, icon, url }: { text: string, icon: React.ReactNode, url: string }) => {
    return (
        <Link href={url} target="_blank" className="flex items-center justify-center text-sm gap-2 text-gray-400 border-2 border-gray-400 px-6 py-[0.35rem] rounded-md">
            {icon}
            {text}
        </Link>
    );
};

export default ButtonCrop;
