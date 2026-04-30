"use client";

import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const footerLinks = [
    { h: "Product", l: ["School ERP", "Learning LMS", "Analytics", "Mobile App", "Integrations"] },
    { h: "Company", l: ["About", "Customers", "Careers", "Press", "Contact"] },
    { h: "Resources", l: ["Blog", "Help Center", "Webinars", "Case Studies", "Security"] },
  ];

  return (
    <footer style={{ background: "var(--iq-dark)", color: "#fff", marginTop: 20, paddingTop: 40 }}>
      <div className="iq-container py-20 mt-10 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "var(--iq-accent)" }}>
              <GraduationCap size={20} color="#001b29" />
            </div>
            <span className="iq-display text-[20px]">intelQI</span>
          </div>
          <p className="mt-5 text-[14px] max-w-sm" style={{ color: "rgba(255,255,255,.65)" }}>
            The unified School ERP &amp; LMS platform trusted by progressive institutions across India.
          </p>
          
          {/* Social Media Links - Optional */}
         
        </div>
        
        {footerLinks.map(c => (
          <div key={c.h} className="md:col-span-2">
            <div className="text-[12px] uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,.5)" }}>
              {c.h}
            </div>
            <ul className="space-y-2.5">
              {c.l.map(x => (
                <li key={x}>
                  <a 
                    href="#" 
                    className="text-[14px] transition-colors hover:text-white" 
                    style={{ color: "rgba(255,255,255,.7)" }}
                  >
                    {x}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        
        <div className="md:col-span-2">
          <div className="text-[12px] uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,.5)" }}>
            Contact
          </div>
          <ul className="space-y-3 text-[14px]" style={{ color: "rgba(255,255,255,.7)" }}>
            <li className="flex items-start gap-2">
              <Mail size={14} className="mt-0.5 shrink-0" /> hello@intelqi.com
            </li>
            <li className="flex items-start gap-2">
              <Phone size={14} className="mt-0.5 shrink-0" /> +91 80 4567 8900
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={14} className="mt-0.5 shrink-0" /> Bengaluru, India
            </li>
          </ul>
        </div>
      </div>
      
      <div className="border-t mt-5 pt-5 pb-5" style={{ borderColor: "rgba(255,255,255,.08)" }}>
        <div className="iq-container py-5 flex flex-wrap justify-between gap-3 text-[13px]" style={{ color: "rgba(255,255,255,.55)" }}>
          <div>© {new Date().getFullYear()} intelQI Technologies. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;