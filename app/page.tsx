'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, AlertCircle, Loader2, FileText, Clock, Shield, Calendar, X, Search, Plus, Upload, Check, ChevronDown, ChevronUp } from 'lucide-react';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    trade: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Validate form data
      if (!formData.name.trim() || !formData.email.trim() || !formData.trade.trim()) {
        throw new Error('Please fill in all fields');
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error('Please enter a valid email address');
      }

      // Simulate API call - Replace with actual Supabase integration
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Supabase integration would go here:
      // const { data, error } = await supabase
      //   .from('waitlist')
      //   .insert([
      //     {
      //       name: formData.name,
      //       email: formData.email,
      //       trade: formData.trade,
      //       created_at: new Date().toISOString()
      //     }
      //   ]);
      // 
      // if (error) throw error;

      setIsSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "Is this another complicated software I have to learn?",
      answer: "No. We designed BlueTape to be incredibly simple. If you can use email, you can use BlueTape. The goal is to save you time, not create more work."
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We use industry-standard encryption and secure cloud hosting to protect your sensitive compliance information."
    },
    {
      question: "What does it cost?",
      answer: "The planned price for our Basic tier is $49/month. By joining the waitlist, you'll get a 50% discount on that for your first three months as a thank you for being an early supporter."
    },
    {
      question: "What if I just have a few licenses to track?",
      answer: "BlueTape is perfect for that. It's built for everyone from the solo operator to the small crew. Even tracking just one or two critical items can save you from a massive fine."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Background image simulation - construction site */}
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full bg-gradient-to-br from-blue-900/20 to-orange-900/20"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          {/* Logo */}
          <div className="flex items-center justify-center mb-8">
            <div className="w-12 h-12 bg-[#0A4C9A] rounded-lg flex items-center justify-center relative overflow-hidden mr-3">
              <div className="absolute inset-0 opacity-30">
                <div className="w-full h-full" style={{
                  backgroundImage: `
                    linear-gradient(to right, white 1px, transparent 1px),
                    linear-gradient(to bottom, white 1px, transparent 1px)
                  `,
                  backgroundSize: '4px 4px'
                }}></div>
              </div>
              <span className="text-white font-bold text-2xl relative z-10" style={{ fontFamily: 'Montserrat, sans-serif' }}>B</span>
            </div>
            <span className="text-2xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              BlueTape
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Stop Losing Money on Permit Fines and Missed Renewals
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
            BlueTape is the compliance toolkit for contractors that automates your tracking, sends renewal alerts, and keeps all your documents in one place. Stop the paperwork chaos and get back to building.
          </p>

          <div className="space-y-4">
            <Button
              onClick={() => document.getElementById('signup-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#FF7A00] hover:bg-[#FF7A00]/90 text-white font-bold py-4 px-8 text-lg rounded-lg transition-all duration-200 transform hover:scale-105"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Get Early Access
            </Button>
            <p className="text-sm text-gray-300" style={{ fontFamily: 'Inter, sans-serif' }}>
              Join the waitlist for 50% off your first 3 months. No credit card required.
            </p>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#212529] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Does This Look Familiar?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-white shadow-xl border-0 text-center p-8">
              <CardHeader>
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-red-600" />
                  <AlertCircle className="w-4 h-4 text-red-600 absolute translate-x-2 -translate-y-2" />
                </div>
                <CardTitle className="text-2xl text-[#212529] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  The "Oh Sh*t" Moment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-lg leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  That sinking feeling when you realize a critical permit expired yesterday. Now the job is on hold, the client is angry, and you're facing a $1,000 fine.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-xl border-0 text-center p-8">
              <CardHeader>
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-red-600" />
                  <X className="w-4 h-4 text-red-600 absolute translate-x-2 -translate-y-2" />
                </div>
                <CardTitle className="text-2xl text-[#212529] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  The Spreadsheet of Doom
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-lg leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Juggling a dozen different expiration dates for your crew's licenses in a messy spreadsheet that's never up to date and impossible to read on your phone.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-xl border-0 text-center p-8">
              <CardHeader>
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-red-600" />
                </div>
                <CardTitle className="text-2xl text-[#212529] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  The Paperwork Pile-Up
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-lg leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Wasting hours digging through your truck or office for that one certificate of insurance the inspector needs to see right now.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#212529] mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Your Compliance Headaches, Solved.
              </h2>
              <p className="text-xl text-gray-600 mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
                BlueTape is a simple, no-nonsense tool built for one job: to make sure you never miss a compliance deadline again.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#212529] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Prevent Costly Fines
                    </h3>
                    <p className="text-gray-600 text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Get automatic email and SMS alerts 30, 14, and 7 days before any permit or license expires.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#212529] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Stay Organized & Audit-Ready
                    </h3>
                    <p className="text-gray-600 text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Store all your compliance documents—permits, licenses, insurance certs—securely in one place, accessible from the field or the office.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#212529] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Save Hours of Admin Work
                    </h3>
                    <p className="text-gray-600 text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Ditch the spreadsheets and paper files. Manage everything in a simple dashboard that takes 5 minutes to learn.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#212529] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Look Professional
                    </h3>
                    <p className="text-gray-600 text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Give clients and inspectors the information they need, when they need it, right from your phone.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Dashboard Mockup */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-[#212529]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    BlueTape Dashboard
                  </h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                    <div className="flex items-center space-x-3">
                      <AlertCircle className="w-6 h-6 text-red-600" />
                      <div>
                        <p className="font-semibold text-[#212529]" style={{ fontFamily: 'Inter, sans-serif' }}>
                          Electrical License #EL-2024-8847
                        </p>
                        <p className="text-sm text-red-600 font-medium">Expires in 3 days!</p>
                      </div>
                    </div>
                    <span className="text-red-600 font-bold text-sm bg-red-100 px-3 py-1 rounded-full">URGENT</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                    <div className="flex items-center space-x-3">
                      <Clock className="w-6 h-6 text-yellow-600" />
                      <div>
                        <p className="font-semibold text-[#212529]" style={{ fontFamily: 'Inter, sans-serif' }}>
                          Building Permit #BP-2024-1847
                        </p>
                        <p className="text-sm text-yellow-600 font-medium">Expires in 15 days</p>
                      </div>
                    </div>
                    <span className="text-yellow-600 font-bold text-sm bg-yellow-100 px-3 py-1 rounded-full">SOON</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                      <div>
                        <p className="font-semibold text-[#212529]" style={{ fontFamily: 'Inter, sans-serif' }}>
                          General Contractor License
                        </p>
                        <p className="text-sm text-green-600 font-medium">Expires in 8 months</p>
                      </div>
                    </div>
                    <span className="text-green-600 font-bold text-sm bg-green-100 px-3 py-1 rounded-full">GOOD</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                    <div className="flex items-center space-x-3">
                      <Shield className="w-6 h-6 text-blue-600" />
                      <div>
                        <p className="font-semibold text-[#212529]" style={{ fontFamily: 'Inter, sans-serif' }}>
                          Workers' Comp Certificate
                        </p>
                        <p className="text-sm text-blue-600 font-medium">Updated 2 days ago</p>
                      </div>
                    </div>
                    <span className="text-blue-600 font-bold text-sm bg-blue-100 px-3 py-1 rounded-full">CURRENT</span>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600 font-medium">Compliance Score</span>
                    <span className="font-bold text-2xl text-green-600">92%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
                    <div className="bg-green-500 h-3 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#212529] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Get Set Up in Minutes
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-[#0A4C9A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Plus className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#FF7A00] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>1</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#212529] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Add Your Items
              </h3>
              <p className="text-gray-600 text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
                Quickly enter your permits and licenses. Set the expiration dates.
              </p>
            </div>

            <div className="text-center">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-[#0A4C9A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Upload className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#FF7A00] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>2</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#212529] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Upload Your Docs
              </h3>
              <p className="text-gray-600 text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
                Snap a photo or upload a PDF of each document and attach it.
              </p>
            </div>

            <div className="text-center">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-[#0A4C9A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#FF7A00] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>3</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#212529] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Relax
              </h3>
              <p className="text-gray-600 text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
                BlueTape monitors everything and alerts you automatically. You focus on the job.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="signup-form" className="py-20 bg-gradient-to-br from-[#212529] to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Stop Letting Paperwork Run Your Business
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              Be one of the first to use BlueTape and lock in a 50% discount for your first three months. We're looking for a small group of contractors to help us shape the future of this tool. Enter your info to get on the early access list.
            </p>
          </div>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 shadow-2xl max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl text-white mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Secure Your Spot
              </CardTitle>
              <CardDescription className="text-gray-300 text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
                Join the waitlist for 50% off your first 3 months
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isSuccess ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-20 h-20 text-green-400 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    You're In!
                  </h3>
                  <p className="text-gray-300 text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Check your email to verify your account and join the waitlist. We'll be in touch soon with your early access details.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name" className="text-white font-semibold text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        className="mt-2 bg-white/10 border-white/30 text-white placeholder:text-gray-400 focus:border-[#FF7A00] focus:ring-[#FF7A00] text-lg py-3"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                        disabled={isLoading}
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-white font-semibold text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email address"
                        className="mt-2 bg-white/10 border-white/30 text-white placeholder:text-gray-400 focus:border-[#FF7A00] focus:ring-[#FF7A00] text-lg py-3"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                        disabled={isLoading}
                      />
                    </div>

                    <div>
                      <Label htmlFor="trade" className="text-white font-semibold text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Your Trade
                      </Label>
                      <Input
                        id="trade"
                        name="trade"
                        type="text"
                        value={formData.trade}
                        onChange={handleInputChange}
                        placeholder="e.g., Electrician, Plumber, General Contractor"
                        className="mt-2 bg-white/10 border-white/30 text-white placeholder:text-gray-400 focus:border-[#FF7A00] focus:ring-[#FF7A00] text-lg py-3"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                        disabled={isLoading}
                      />
                    </div>
                  </div>

                  {error && (
                    <div className="flex items-center space-x-3 text-red-300 bg-red-900/30 p-4 rounded-lg border border-red-500/30">
                      <AlertCircle className="w-6 h-6 flex-shrink-0" />
                      <p className="text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>{error}</p>
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-[#FF7A00] hover:bg-[#FF7A00]/90 text-white font-bold py-4 px-8 text-xl rounded-lg transition-all duration-200 transform hover:scale-105"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-6 h-6 mr-3 animate-spin" />
                        Securing Your Spot...
                      </>
                    ) : (
                      'Secure My Spot'
                    )}
                  </Button>

                  <p className="text-sm text-gray-400 text-center" style={{ fontFamily: 'Inter, sans-serif' }}>
                    We respect your privacy and will only email you about BlueTape's launch.
                  </p>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#212529] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Questions? We've Got Answers.
            </h2>
          </div>
          
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <Card key={index} className="border-2 border-gray-200 hover:border-[#0A4C9A] transition-colors duration-200">
                <CardHeader 
                  className="cursor-pointer"
                  onClick={() => toggleFaq(index)}
                >
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl text-[#212529] text-left" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {faq.question}
                    </CardTitle>
                    {expandedFaq === index ? (
                      <ChevronUp className="w-6 h-6 text-[#0A4C9A] flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-[#0A4C9A] flex-shrink-0" />
                    )}
                  </div>
                </CardHeader>
                {expandedFaq === index && (
                  <CardContent className="pt-0">
                    <p className="text-gray-600 text-lg leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {faq.answer}
                    </p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#212529] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#0A4C9A] rounded-lg flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                  <div className="w-full h-full" style={{
                    backgroundImage: `
                      linear-gradient(to right, white 1px, transparent 1px),
                      linear-gradient(to bottom, white 1px, transparent 1px)
                    `,
                    backgroundSize: '3px 3px'
                  }}></div>
                </div>
                <span className="text-white font-bold text-lg relative z-10" style={{ fontFamily: 'Montserrat, sans-serif' }}>B</span>
              </div>
              <span className="text-2xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                BlueTape
              </span>
            </div>
          </div>
          <div className="text-center">
            <p className="text-gray-400 text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
              © 2024 BlueTape. Built for contractors, by people who understand the trade.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}