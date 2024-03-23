import { useRouteError } from "react-router-dom";

const Error = () => {

    const  err = useRouteError();
    return (
        <div>
            <h2>Oops Something Broke!!!</h2>
            <h3>We are working on it....</h3>
            <h4>{err.status}</h4>
        </div>
    )
}

export default Error;