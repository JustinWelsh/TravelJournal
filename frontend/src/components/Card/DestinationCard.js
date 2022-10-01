import {MdLocationOn} from "react-icons/md"
const DestinationCard = (props) => {
    return (
        <>
            <div className="card lg:card-side bg-base-100 shadow-xl w-3/4 px-10">
                <figure><img src={props.imageUrl} alt={`${props.title}-Image`} className={"rounded-2xl shadow-xl"}/></figure>
                <div className="card-body">
                <div className={"flex items-center"}>
                    <MdLocationOn className={"text-[#F55A5A]"}/>
                    <p className={"grow-0"}>{props.location}</p>
                </div>
                    <h1 className="card-title text-6xl py-5">{props.title}</h1>
                    <p className={"text-base"}>{props.startDate} - {props.endDate}</p>
                    <p>{props.description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Edit</button>
                        <button className="btn btn-primary">Delete</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DestinationCard