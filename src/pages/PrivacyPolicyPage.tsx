import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-soft text-dark">
      <Navbar />

      <section className="mx-auto max-w-4xl px-6 py-16">
        <Link to="/" className="text-sm font-semibold text-primary">
          ← Back to home
        </Link>

        <div className="mt-8 rounded-[2rem] bg-white p-8 shadow-soft">
          <p className="font-semibold text-primary">MobPae</p>
          <h1 className="mt-3 text-4xl font-bold">Privacy Policy</h1>
          <p className="mt-4 text-sm text-slate-500">Last updated: 2026</p>

          <div className="mt-8 space-y-6 leading-8 text-slate-600">
            <p>
              MobPae respects your privacy. This Privacy Policy explains how we
              may collect, use, and protect information submitted through our
              website and enquiry forms.
            </p>

            <section>
              <h2 className="text-xl font-bold text-dark">
                Information we collect
              </h2>
              <p className="mt-2">
                We may collect company name, contact name, email address, phone
                number, employee count, and message details when you submit an
                enquiry.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-dark">
                How we use information
              </h2>
              <p className="mt-2">
                We use submitted information to contact you, understand your
                requirements, provide product information, and improve our
                services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-dark">Data protection</h2>
              <p className="mt-2">
                We take reasonable steps to protect submitted information from
                unauthorized access, misuse, or disclosure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-dark">Contact</h2>
              <p className="mt-2">
                For privacy-related questions, contact us at support@mobpae.com.
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
