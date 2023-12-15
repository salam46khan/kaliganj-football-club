
const Banner = () => {
    return (
        <div className="py-16 min-h-[500px] px-3 bg-red-300">
            <div className="container mx-auto flex  flex-col-reverse md:flex-row items-center">
                <div className="w-full mt-5 h-full p-4 md:w-1/2">
                    <h1 className="font-TitleText text-5xl uppercase text-white">Kaliganj Football Club</h1>
                    <p className="text-slate-500">Our vision is to be recognized as a premier football club,  consistently striving for excellence on and off the field</p>
                    <div className="mt-3">
                        <button className=" py-2 px-5 overflow-hidden relative group cursor-pointer border-2 font-medium border-white">
                            <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                            <span className="relative text-white transition duration-300 group-hover:text-red-300 ease">
                                Learn More
                            </span>
                        </button>
                        <button className="my-btn ml-4">
                            
                            <span>hi world</span>
                        </button>
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex justify-center items-center">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis provident earum sed, a repellat ratione molestiae ducimus eligendi sunt deleniti quas excepturi fugiat? Corrupti obcaecati, nulla sapiente optio maxime laborum, ut nostrum cumque exercitationem cum voluptas accusantium tenetur? Aliquid inventore incidunt enim nam suscipit commodi! Quas, saepe eligendi hic earum error aliquam repudiandae! Dolor excepturi qui maxime placeat cupiditate provident iure in error obcaecati dignissimos dolores, neque, ducimus debitis repellendus dolore. Expedita obcaecati quod facilis voluptatum quaerat neque dignissimos nostrum officia, maxime fugit explicabo velit deleniti quisquam recusandae ipsam consequuntur perspiciatis at iusto esse odit possimus? Maiores at quibusdam adipisci?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint natus ut vero, eius autem ducimus excepturi corporis reiciendis in. Id odio veniam tenetur tempore cum. Cumque, quidem corrupti? Delectus quisquam mollitia voluptatibus doloremque officia quibusdam dignissimos veniam expedita maxime hic?
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Banner;