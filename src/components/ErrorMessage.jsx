import { useRouteError } from "react-router";
const ErrorMessage = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>Oops something went wrong!!!</h1>
      <h2>
        {error.status} {error.statusText}
      </h2>
    </div>
  );
};
export default ErrorMessage;
