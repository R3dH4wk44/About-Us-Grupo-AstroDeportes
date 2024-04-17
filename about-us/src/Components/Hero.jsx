


const Hero = () => {
    return (
       <div className=" h-screen flex   items-center bg-black text-white ">
            <div className="container lg:mx-52 mx-10 flex flex-col lg:flex-row justify-evenly items-center gap-4">
                <div className="text-white">
                    <h1 className="text-4xl mb-2">About Us</h1>
                    <p className="mb-2"> We are a team of 5 studients which are working on the 4GeeksAcademy Final Project. We decided tthat we wanted to do it about space.
                    So, why space, you ask? Well, because space is freaking awesome,
                     that's why! From the wonders of the universe to the thrill of exploration, 
                     there's nothing quite like it, and we're here to soak up every cosmic ray.</p>
                </div>
                <img height={500} width={500} className=" rounded-lg" src="https://prd-sc102-cdn.rtx.com/-/media/ca/product-assets/marketing/s/space/space-symposium-graphic_1920x1080.jpg?rev=2a22f490c9c644a5bf69ef3cce59813d" alt="" />
            </div>
       </div>
    )
}

export default Hero;