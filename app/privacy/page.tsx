'use client';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-semibold mb-6">Privacy Policy</h1>
        <p className="text-gray-300 mb-4">
          Your privacy matters to us. This policy describes how BlueTape collects, uses, and protects your information when you join our waitlist or use our website.
        </p>
        <p className="text-gray-400 mb-2">We commit to:</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-300">
          <li>Only collecting the information necessary to provide updates and improve our service.</li>
          <li>Storing your data securely and restricting access.</li>
          <li>Never selling your personal information.</li>
        </ul>
        <p className="text-gray-500 mt-8 text-sm">Updated: {new Date().getFullYear()}</p>
      </div>
    </main>
  );
}
