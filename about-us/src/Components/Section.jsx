


const Section = ({title, text, uriImg}) => {

    return(

        <div className="w-full flex justify-around items-center min-h-80 bg-gray-200">
            <div className=" flex flex-col justify-center items-center gap-5">
                <h2 className="text-2xl font-bold">{title}</h2>
                <p className=" ">{text}</p>
            </div>
            <div>
                <img className=" rounded-xl " src={uriImg} alt="" width={400} height={400}/>
            </div>
        </div>

    )

};

export default Section;