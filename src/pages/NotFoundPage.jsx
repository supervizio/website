import { Link } from "react-router-dom";
import Seo from "../components/ui/Seo";

export default function NotFoundPage() {
  return (
    <>
      <Seo path="/404" />
      <section
        className="page-header-glow relative pt-[calc(72px+4rem)] pb-16 text-center min-h-[60vh] flex items-center"
        aria-labelledby="not-found-heading"
      >
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h1 className="text-[8rem] mb-4 leading-none">
            <span className="text-gradient">404</span>
          </h1>
          <h2
            id="not-found-heading"
            className="text-4xl font-bold tracking-tight"
          >
            Page not found
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed max-w-[640px] mt-4 mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>
          <div className="flex gap-4 justify-center flex-wrap mt-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white text-base font-semibold rounded-2xl shadow-accent-sm hover:bg-accent-hover hover:shadow-accent-lg hover:-translate-y-px transition-all duration-200 no-underline"
            >
              &larr; Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
