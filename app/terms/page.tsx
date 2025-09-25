'use client';

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-semibold mb-6">Terms of Service</h1>
        <p className="text-gray-300 mb-4">
          These Terms of Service govern your access to and use of BlueTape. By accessing or using our website, you agree to be bound by these terms.
        </p>
        <p className="text-gray-400 mb-2">Key points:</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-300">
          <li>BlueTape is currently in a pre-launch phase and features may change.</li>
          <li>We do not share your data with third parties without your consent.</li>
          <li>All trademarks and logos are the property of their respective owners.</li>
        </ul>
        <p className="text-gray-500 mt-8 text-sm">Updated: {new Date().getFullYear()}</p>
      </div>
    </main>
  );
}
