import RestrauntCard from "./RestrauntCard"

const Shimmer = () => {
    return (
        <div className="list">
            {Array(10).fill("").map((item,index)=>{
                return (
                    <div className="shimmer-card" key={index}></div>
                )
            })}
        </div>
    )
}

export default Shimmer;