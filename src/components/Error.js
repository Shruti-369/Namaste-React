import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);
  return (
    <div>       
        <h1> Oops!!!</h1>
        <h2> Something went wrong. Please try again later. </h2>
        <h3>{err.status}:{err.statusTest}</h3>
    </div>
  );
}

export default Error;