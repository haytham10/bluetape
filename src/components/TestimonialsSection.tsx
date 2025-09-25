import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "BlueTape texted me about a license that was gonna lapse while I was elbow-deep in a 400-amp panel. Dodged a $2,500 fine, bought the crew lunch instead.",
    name: "Mike Rodriguez",
    company: "Rodriguez Electrical Services"
  },
  {
    quote: "Permit renewal used to be me crawling around the van at 11 p.m. looking for paperwork. Now it’s just a text and a click.",
    name: "Sarah Chen",
    company: "Chen Construction LLC"
  },
  {
    quote: "Don’t have to think about it anymore—software just barks when something’s due. One less headache, one less fine.",
    name: "David Thompson",
    company: "Thompson Plumbing Co."
  }
];

const TestimonialsSection: React.FC = () => (
  <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
    <div className="container">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text">Contractors Love BlueTape</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, idx) => (
          <div key={idx} className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-yellow-400 fill-current hover:scale-110 transition-transform duration-200" size={20} style={{ animationDelay: `${i * 0.1}s` }} />
              ))}
            </div>
            <p className="text-gray-600 mb-4">"{t.quote}"</p>
            <div className="font-semibold group-hover:text-blue-600 transition-colors duration-200">{t.name}</div>
            <div className="text-gray-500 text-sm">{t.company}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
