
const TeamMember = (props) => {
    return (
        <div className="flex flex-col justify-start items-center border shadow-sm rounded-xl">
            <img  className=" rounded-t-xl w-full object-contain" src={props.img} alt="" />
            <h6 className=" text-xl font-bold px-5 py-2">{props.name}</h6>
            <p className="px-5 py-2 text-center">{props.description}</p>
            

        </div>
    )
}

export default TeamMember;