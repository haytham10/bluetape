import React from 'react';

interface MacWindowFrameProps {
  children: React.ReactNode;
  title?: string;
}

const MacWindowFrame: React.FC<MacWindowFrameProps> = ({ children, title }) => (
  <div className="bg-white rounded-xl shadow-elevated border border-gray-200 overflow-hidden" style={{ maxWidth: 900 }}>
    <div className="flex items-center justify-between px-4 py-2 bg-gray-50 border-b border-gray-200">
      <span className="text-gray-500 text-sm font-medium">{title}</span>
      <div className="flex items-center gap-2 ml-3">
        <span className="w-3 h-3 rounded-full bg-red-400 border border-red-300"></span>
        <span className="w-3 h-3 rounded-full bg-yellow-300 border border-yellow-200"></span>
        <span className="w-3 h-3 rounded-full bg-green-400 border border-green-300"></span>
      </div>
    </div>
    <div className="bg-gradient-to-b from-gray-50 to-white p-6">
      {children}
    </div>
  </div>
);

export default MacWindowFrame;
