import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import img from "../images/news-image.png";

export default function BreakingNewsPage() {
  return (
    <>
      <div className="text-center">
        <Image src={img} alt="news image"></Image>
      </div>
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
        <strong style={{ color: "green" }}>
          {" "}
          Next.js server and client side rendering
        </strong>{" "}
        to deliver real-time news updates, ensuring you never miss a beat in
        wide range of topics, from politics to entertainment.
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
