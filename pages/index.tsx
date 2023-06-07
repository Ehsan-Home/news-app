import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

export default function BreakingNewsPage() {
  return (
    <>
      {/* <img
        src={img}
        class="mx-auto d-block mt-3"
        width={150}
        height={150}
        alt="GitHub logo"
      ></img> */}
      <div className="text-center mt-3">
        <h1 className="display-3" style={{ color: "#0d6efd" }}>
          <TypeAnimation
            sequence={[
              "InfoSphere",
              2000,
              "Dive into business",
              1000,
              "Dive into sports",
              1000,
              "Dive into tech",
              1000,
              "InfoSphere",
            ]}
            wrapper="span"
            cursor={true}
            repeat={0}
          />
        </h1>
      </div>
      <p className="lead text-center">
        📰 Empowering Minds with Real-Time News
      </p>
      <p className="text-center text-secondary">
        Introducing InfoSphere, an innovative news web app designed to keep you
        informed and engaged in a rapidly evolving world. InfoSphere leverages
        cutting-edge technology to deliver real-time news updates, ensuring you
        never miss a beat. With its sleek and intuitive interface, InfoSphere
        provides a seamless browsing experience, allowing you to effortlessly
        navigate through a wide range of topics, from politics and business to
        science and entertainment. Whether you&apos;re a news enthusiast, a
        professional seeking the latest trends, or simply looking to stay
        informed, InfoSphere is your go-to destination for staying ahead in an
        interconnected global society. Embrace the power of knowledge and embark
        on a transformative journey with InfoSphere.
      </p>
      <div className="d-flex justify-content-center">
        <div className="p-2">
          <Link
            role="button"
            href="/breakingnews"
            className="btn btn-lg btn-primary"
          >
            Breaking News
          </Link>
        </div>
        <div className="p-2">
          <Link role="button" href="/search" className="btn btn-lg btn-dark">
            Search
          </Link>
        </div>
      </div>
      <div className="text-secondary text-center my-4">
        {new Date().getFullYear()} @
        <a href="https://ehsanghasaei.netlify.app/">Ehsan Ghasaei</a>
      </div>
    </>
  );
}
