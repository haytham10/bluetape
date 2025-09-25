'use client';

import { motion } from 'framer-motion';
import { CheckCircle, XCircle, AlertTriangle, FileText, Bell, BarChart3, Shield, Calendar } from 'lucide-react';
import { itemVariants } from './animations';

// Reusable window control component
const WindowControl = ({ color, hoverColor }: { color: string; hoverColor: string }) => (
  <motion.div 
    className={`w-3 h-3 ${color} rounded-full cursor-pointer ${hoverColor}`}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  />
);

// Reusable stat card component
const StatCard = ({ bgGradient, borderColor, icon: Icon, iconColor, value, label }: {
  bgGradient: string;
  borderColor: string;
  icon: React.ComponentType<{ className?: string }>;
  iconColor: string;
  value: string;
  label: string;
}) => (
  <motion.div 
    className={`${bgGradient} rounded-xl p-4 border ${borderColor} text-center`}
    whileHover={{ scale: 1.02 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Icon className={`w-6 h-6 ${iconColor} mx-auto mb-2`} />
    <div className={`text-2xl font-bold ${iconColor} mb-1`}>{value}</div>
    <p className="text-xs text-slate-600">{label}</p>
  </motion.div>
);

// Reusable feature badge component
const FeatureBadge = ({ bgColor, borderColor, textColor, icon: Icon, label }: {
  bgColor: string;
  borderColor: string;
  textColor: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}) => (
  <div className={`${bgColor} border ${borderColor} ${textColor} px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5`}>
    <Icon className="w-3 h-3" />
    {label}
  </div>
);

// Reusable compliance item component
const ComplianceItem = ({ borderColor, date, dateStyle, title, status, statusStyle, opacity = "" }: {
  borderColor: string;
  date: string;
  dateStyle: string;
  title: string;
  status: React.ReactNode;
  statusStyle: string;
  opacity?: string;
}) => (
  <motion.div 
    className={`bg-white rounded-lg p-3 border-l-3 ${borderColor} hover:shadow-sm transition-all duration-300 ${opacity}`}
    whileHover={{ x: 2 }}
  >
    <div className="flex items-center justify-between">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <div className={dateStyle}>{date}</div>
          <span className={`text-sm font-medium ${title.includes('line-through') ? 'text-slate-600 line-through' : 'text-slate-800'}`}>
            {title.replace(' line-through', '')}
          </span>
        </div>
      </div>
      <div className={statusStyle}>
        {status}
      </div>
    </div>
  </motion.div>
);

export function DashboardPreview() {
  return (
    <motion.div className="mb-16 relative" variants={itemVariants}>
      {/* Backdrop */}
      <div className="absolute inset-0 -m-8">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-white/30 to-orange-50/40 rounded-2xl blur-2xl opacity-60" />
      </div>
      
      {/* Window container */}
      <motion.div
        className="relative max-w-3xl mx-auto bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden"
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        {/* Window header */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-700 px-4 py-3 flex items-center justify-between border-b border-slate-600/50">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg relative">
              <Shield className="w-4 h-4 text-white" />
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 border-2 border-slate-800 rounded-full" />
            </div>
            <div className="text-left">
              <h1 className="text-sm font-semibold text-white">Steve Miller&apos;s Dashboard</h1>
              <p className="text-xs text-slate-300 text-left">Miller Construction Co.</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <WindowControl color="bg-red-500" hoverColor="hover:bg-red-400" />
            <WindowControl color="bg-yellow-500" hoverColor="hover:bg-yellow-400" />
            <WindowControl color="bg-green-500" hoverColor="hover:bg-green-400" />
          </div>
        </div>

        {/* Main content */}
        <div className="p-6">
          {/* Stats grid */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <StatCard 
              bgGradient="bg-gradient-to-br from-red-50 to-orange-50"
              borderColor="border-red-100"
              icon={AlertTriangle}
              iconColor="text-red-600"
              value="3"
              label="Expiring Soon"
            />
            <StatCard 
              bgGradient="bg-gradient-to-br from-emerald-50 to-green-50"
              borderColor="border-emerald-100"
              icon={CheckCircle}
              iconColor="text-emerald-600"
              value="12"
              label="Active"
            />
            <StatCard 
              bgGradient="bg-gradient-to-br from-blue-50 to-indigo-50"
              borderColor="border-blue-100"
              icon={BarChart3}
              iconColor="text-blue-600"
              value="100%"
              label="Compliant"
            />
          </div>

          {/* Feature badges */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <FeatureBadge bgColor="bg-blue-50" borderColor="border-blue-200" textColor="text-blue-700" icon={Bell} label="Auto Reminders" />
            <FeatureBadge bgColor="bg-emerald-50" borderColor="border-emerald-200" textColor="text-emerald-700" icon={FileText} label="Document Storage" />
            <FeatureBadge bgColor="bg-orange-50" borderColor="border-orange-200" textColor="text-orange-700" icon={Calendar} label="Smart Tracking" />
          </div>

          {/* Compliance items */}
          <div className="bg-gradient-to-b from-slate-50 to-white rounded-xl p-4 border border-slate-200">
            <h3 className="text-sm font-semibold text-slate-800 flex items-center gap-2 mb-3">
              <FileText className="w-4 h-4" />
              Recent Activity
            </h3>
            
            <div className="space-y-2">
              <ComplianceItem 
                borderColor="border-l-red-500"
                date="Oct 15"
                dateStyle="bg-red-100 text-red-700 px-2 py-0.5 rounded text-xs font-medium"
                title="Plumbing Permit #12345"
                status={<><AlertTriangle className="w-3 h-3" />Expiring</>}
                statusStyle="bg-red-100 text-red-700 px-2 py-1 rounded-lg text-xs font-bold flex items-center gap-1"
              />
              <ComplianceItem 
                borderColor="border-l-emerald-500"
                date="Dec 30"
                dateStyle="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-xs font-medium"
                title="Building Permit #98765"
                status={<><CheckCircle className="w-3 h-3" />Active</>}
                statusStyle="bg-emerald-100 text-emerald-700 px-2 py-1 rounded-lg text-xs font-bold flex items-center gap-1"
              />
              <ComplianceItem 
                borderColor="border-l-gray-400"
                date="Aug 01"
                dateStyle="bg-gray-100 text-gray-600 px-2 py-0.5 rounded text-xs font-medium"
                title="Electrical License #22233 line-through"
                status={<><XCircle className="w-3 h-3" />Expired</>}
                statusStyle="bg-gray-200 text-gray-700 px-2 py-1 rounded-lg text-xs font-bold flex items-center gap-1"
                opacity="opacity-75"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
