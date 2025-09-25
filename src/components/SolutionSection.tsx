import React from 'react';
import { Shield, Zap, Building, Upload, Bell, DollarSign } from 'lucide-react';
import MacWindowFrame from './MacWindowFrame';

const SolutionSection: React.FC = () => (
  <section id="solution" className="py-24 bg-white">
    <div className="container">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">Your Compliance Command Center</h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">BlueTape eliminates compliance headaches with <span className="font-semibold text-blue-700">automated tracking</span>, <span className="font-semibold text-blue-700">smart alerts</span>, and <span className="font-semibold text-blue-700">organized document management</span> built specifically for contractors.</p>
      </div>
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-8">
        
        {/* How It Works Section - Vertical Layout */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 flex flex-col">
          <h3 className="text-2xl font-bold text-gray-900 mb-10 text-center">How BlueTape Keeps You Covered</h3>
          <div className="flex flex-col md:flex-row items-stretch justify-between gap-8 md:gap-6 mb-8">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center flex-1">
              <div className="flex flex-col items-center">
                <div className="relative flex items-center justify-center mb-4">
                  <span className="absolute -top-3 left-1 bg-blue-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center text-lg shadow-md z-10">1</span>
                  <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center">
                    <Upload className="text-blue-600" size={40} />
                  </div>
                </div>
                <div className="min-h-[56px] flex items-end">
                  <h4 className="font-bold text-gray-900 text-lg mb-2">Upload Your Permits Once</h4>
                </div>
              </div>
              <p className="text-gray-600 text-sm">Upload license/permit info in minutes — ditch binders, sticky notes, and spreadsheets.</p>
            </div>
            {/* Step 2 */}
            <div className="flex flex-col items-center text-center flex-1">
              <div className="flex flex-col items-center">
                <div className="relative flex items-center justify-center mb-4">
                  <span className="absolute -top-3 left-1 bg-yellow-500 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center text-lg shadow-md z-10">2</span>
                  <div className="w-20 h-20 bg-yellow-100 rounded-2xl flex items-center justify-center">
                    <Bell className="text-yellow-600" size={40} />
                  </div>
                </div>
                <div className="min-h-[56px] flex items-end">
                  <h4 className="font-bold text-gray-900 text-lg mb-2">We Track the Deadlines</h4>
                </div>
              </div>
              <p className="text-gray-600 text-sm">We watch every license and permit for you and send reminders 90, 30, & 7 days out.</p>
            </div>
            {/* Step 3 */}
            <div className="flex flex-col items-center text-center flex-1">
              <div className="flex flex-col items-center">
                <div className="relative flex items-center justify-center mb-4">
                  <span className="absolute -top-3 left-1 bg-green-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center text-lg shadow-md z-10">3</span>
                  <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center">
                    <DollarSign className="text-green-600" size={40} />
                  </div>
                </div>
                <div className="min-h-[56px] flex items-end">
                  <h4 className="font-bold text-gray-900 text-lg mb-2">No Fines, No Delays</h4>
                </div>
              </div>
              <p className="text-gray-600 text-sm">Avoid $2,000+ fines, save 24+ hours/month, and finish jobs faster.</p>
            </div>
          </div>
          <div className="flex justify-center mt-2">
            <a href="#waitlist" className="btn-primary text-base font-semibold px-8 py-3" aria-label="Jump to waitlist form">Save Me From Fines →</a>
          </div>
        </div>
        <MacWindowFrame title="Dashboard Preview">
          <div className="space-y-6">
            <div className="card bg-white rounded-xl shadow-md border border-gray-100 p-5 flex flex-col gap-2">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2"><Shield className="text-blue-600" size={22} /><span className="font-semibold text-gray-900">Business License</span></div>
                <span className="inline-flex items-center h-7 px-3 rounded-full bg-yellow-100 text-yellow-800 text-sm font-semibold shadow-sm leading-none">Expires in 30 days</span>
              </div>
              <div className="text-sm text-gray-500">City of Austin &bull; Expires: March 15, 2025</div>
            </div>
            <div className="card bg-white rounded-xl shadow-md border border-gray-100 p-5 flex flex-col gap-2">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2"><Zap className="text-orange-500" size={22} /><span className="font-semibold text-gray-900">Electrical License</span></div>
                <span className="inline-flex items-center h-7 px-3 rounded-full bg-green-100 text-green-800 text-sm font-semibold shadow-sm leading-none">Active</span>
              </div>
              <div className="text-sm text-gray-500">State of Texas &bull; Expires: June 22, 2025</div>
            </div>
            <div className="card bg-white rounded-xl shadow-md border border-gray-100 p-5 flex flex-col gap-2">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2"><Building className="text-green-600" size={22} /><span className="font-semibold text-gray-900">Building Permit #2024-0156</span></div>
                <span className="inline-flex items-center h-7 px-3 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold shadow-sm leading-none">In Progress</span>
              </div>
              <div className="text-sm text-gray-500">1234 Oak Street &bull; Expires: April 10, 2025</div>
            </div>
          </div>
        </MacWindowFrame>
      </div>
    </div>
  </section>
);

export default SolutionSection;
