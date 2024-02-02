import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className="flex flex-col w-1/2 items-center m-auto p-4"
    >
      <img
        src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDRwZTY5dXR3YWhvbHI5ZjgycWpnOGw4ZjZlY3VqZDQ1NDVmaDE4eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/UoeaPqYrimha6rdTFV/giphy.gif"
        alt=""
      />
      <p>
        Error Message: <i>{error.statusText || error.message}</i>
      </p>
      <button className="btn btn-accent">
        <Link to="/">Go to Home</Link>
      </button>
    </div>
  );
}
