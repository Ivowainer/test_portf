import Image from "next/image";
import Test from "./components/Test";

export default function Home() {
    return (
        <>
            <h1 className="text-black font-bold text-3xl">Hi! Welcome to my portfolio</h1>
            <Test />
        </>
    );
}
