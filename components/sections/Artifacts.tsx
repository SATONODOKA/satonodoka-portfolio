import Card from "@/components/ui/Card";

export default function Artifacts() {
  return (
    <section id="contact" className="snap-start min-h-screen flex items-center py-16 md:py-0">
      <div className="container-custom w-full py-12 md:py-0">
        <div className="max-w-2xl mx-auto w-full">
          {/* 見出しと説明 */}
          <div className="text-center mb-10">
            <h2 className="mb-4 text-gray-900">Contact</h2>
            <p className="text-lg text-gray-700">
              ご質問・ご依頼などお気軽にどうぞ
            </p>
          </div>

          {/* 連絡先カード */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* GitHub */}
            <a
              href="https://github.com/SATONODOKA"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl shadow-lg border border-gray-300 p-6 transition-all hover:shadow-xl hover:border-gray-400 flex flex-col items-center text-center group"
            >
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-all group-hover:scale-105">
                  <svg
                    className="w-8 h-8 text-gray-700 group-hover:text-accent transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors tracking-tight">
                  GitHub
                </h3>
                <p className="text-sm text-gray-600">
                  @SATONODOKA
                </p>
            </a>

            {/* Email */}
            <a
              href="mailto:nodoka.sato.bliss@gmail.com"
              className="bg-white rounded-xl shadow-lg border border-gray-300 p-6 transition-all hover:shadow-xl hover:border-gray-400 flex flex-col items-center text-center group"
            >
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-all group-hover:scale-105">
                  <svg
                    className="w-8 h-8 text-gray-700 group-hover:text-accent transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors tracking-tight">
                  Email
                </h3>
                <p className="text-sm text-gray-600 break-all">
                  nodoka.sato.bliss@gmail.com
                </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
