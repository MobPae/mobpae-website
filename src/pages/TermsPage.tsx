import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export function TermsPage() {
  return (
    <main className="min-h-screen bg-soft text-dark">
      <Navbar />

      <section className="mx-auto max-w-4xl px-6 py-16">
        <Link to="/" className="text-sm font-semibold text-primary">
          ← Back to home
        </Link>

        <div className="mt-8 rounded-[2rem] bg-white p-8 shadow-soft">
          <p className="font-semibold text-primary">MobPae</p>
          <h1 className="mt-3 text-4xl font-bold">Terms & Conditions</h1>
          <p className="mt-4 text-sm text-slate-600">Last updated: 2026</p>

          <div className="mt-8 space-y-6 leading-8 text-slate-700">
            <p>
              These Terms & Conditions govern the use of the MobPae website. By
              accessing this website, you agree to use it responsibly and
              lawfully.
            </p>

            <section>
              <h2 className="text-xl font-bold text-dark">Website use</h2>
              <p className="mt-2">
                The content on this website is provided for general product
                information. It may be updated or changed without prior notice.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-dark">Enquiries</h2>
              <p className="mt-2">
                Submitting an enquiry does not create a contract or guarantee
                service availability. Our team may contact you to understand
                your requirements.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-dark">Limitation</h2>
              <p className="mt-2">
                MobPae is not liable for losses arising from website misuse,
                temporary unavailability, or reliance on general website
                content.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-dark">Contact</h2>
              <p className="mt-2">
                For terms-related questions, contact us at support@mobpae.com.
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
