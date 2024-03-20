const AboutMe = () => {
    return (
        <div className="grid grid-cols-2 grid-rows-2 h-full gap-x-24"> {/* grid grid-cols-2 grid-rows-2 h-full gap-x-60 */}
            <div className="">
                <p className="text-5xl font-bold text-blue-500 mb-2">About me</p>
                <p className="text-blue-900 text-sm">I started by creating Minecraft plugins (in java) for my server. In the middle of high school, I began training in web technologies and then dedicated myself to the backend. Currently a LCC student (Computer Science, UNR). If I had to give a summary about myself, it would definitely be: programming, friends, music and coffee.</p>
            </div>
            <div className="text-sm row-start-2 row-end-3 col-start-2 col-end-3">
                <p className="text-5xl font-bold text-blue-500 mb-2">My way</p>
                <p className="break-words text-blue-900">{`I had the opportunity to meet colleagues through programming communities; Sometimes they helped me, other times I did it. I always liked to practice and learn with other people. At the end of 2023 I participated in my university's programming contest (FCEIA) with 3 friends.`}
                    <br />
                    At the end of 2022, I did my first freelance job (Selva Amazonica) with a friend, who I met in these communities.
                </p>
            </div>
        </div>
    );
};

export default AboutMe;
