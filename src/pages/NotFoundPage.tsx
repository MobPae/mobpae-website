import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export function NotFoundPage() {
  return (
    <main className="min-h-screen bg-soft text-dark">
      <Navbar />

      <section className="mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center px-6 py-20 text-center">
        <p className="font-semibold text-primary">404</p>
        <h1 className="mt-3 text-5xl font-bold">Page not found</h1>
        <p className="mt-5 max-w-xl leading-8 text-slate-600">
          The page you are looking for does not exist or may have been moved.
        </p>

        <Link
          to="/"
          className="mt-8 rounded-full bg-primary px-7 py-3 font-semibold text-white shadow-soft"
        >
          Go back home
        </Link>
      </section>

      <Footer />
    </main>
  );
}
