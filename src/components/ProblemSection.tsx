import React from 'react';
import { DollarSign, Clock, FileText } from 'lucide-react';

const ProblemSection: React.FC = () => (
  <section id="problem" className="py-20 bg-gray-50">
    <div className="container">
      <div className="text-center mb-16">
        <h2 className="section-title">The Hidden Cost of Manual Compliance</h2>
        <p className="subtext">You're running a business, not a paperwork factory. Yet compliance tracking consumes your time and threatens your bottom line.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="card">
          <div className="bg-red-100 p-3 rounded-full w-fit mb-4 group-hover:bg-red-200 transition-colors duration-200"><DollarSign className="text-red-600" size={32} /></div>
          <h3 className="text-xl font-semibold mb-3 group-hover:text-red-600 transition-colors duration-200">Expensive Fines</h3>
          <p className="text-gray-600">Missed renewal deadlines result in fines ranging from $500 to $5,000+, eating into your project profits.</p>
        </div>
        <div className="card">
          <div className="bg-orange-100 p-3 rounded-full w-fit mb-4 group-hover:bg-orange-200 transition-colors duration-200"><Clock className="text-orange-600" size={32} /></div>
          <h3 className="text-xl font-semibold mb-3 group-hover:text-orange-600 transition-colors duration-200">Stop-Work Orders</h3>
          <p className="text-gray-600">Expired permits lead to work stoppages, delaying projects and damaging client relationships.</p>
        </div>
        <div className="card">
          <div className="bg-yellow-100 p-3 rounded-full w-fit mb-4 group-hover:bg-yellow-200 transition-colors duration-200"><FileText className="text-yellow-600" size={32} /></div>
          <h3 className="text-xl font-semibold mb-3 group-hover:text-yellow-600 transition-colors duration-200">Paperwork Chaos</h3>
          <p className="text-gray-600">Spreadsheets and paper files make tracking multiple licenses and permits across projects a nightmare.</p>
        </div>
      </div>
    </div>
  </section>
);

export default ProblemSection;
