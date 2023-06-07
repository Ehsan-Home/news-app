import Link from "next/link";

const ErrorPage = () => {
  return (
    <>
      <>
        <div className="text-center mt-3">
          <h1 className="display-3" style={{ color: "red" }}>
            Error!
          </h1>
        </div>
        <p className="lead text-center">
          ❌ An unexpected error happened. Please try again later
        </p>
        <div className="text-center">
          <Link
            role="button"
            href="/breakingnews"
            className="btn btn-lg btn-primary"
          >
            Back to home
          </Link>
        </div>
      </>
    </>
  );
};

export default ErrorPage;
