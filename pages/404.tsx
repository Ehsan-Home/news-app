import Link from "next/link";

const NotFoundPage = () => {
  return (
    <>
      <div className="text-center mt-3">
        <h1 className="display-3" style={{ color: "#0d6efd" }}>
          Page Not Found!
        </h1>
      </div>
      <p className="lead text-center">
        🤔 The content your are looking for does not exist
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
  );
};

export default NotFoundPage;
