import React from "react";
import Image from "next/image";

export default function PortfolioShowcase() {
  return (
    <section className="py-section-gap max-w-container-max mx-auto px-margin-x" id="projects">
      {/* Title */}
      <div className="mb-stack-lg">
        <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">Projects</h2>
        <p className="text-on-surface-variant font-body-md mt-2">
          Specializing in business-critical systems and enterprise web solutions.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        
        {/* Pharmacy Billing (Large, span 8) */}
        <div className="md:col-span-8 group cursor-pointer">
          <div className="glass-panel rounded-2xl overflow-hidden hover:border-primary transition-all duration-500 browser-shadow h-full flex flex-col">
            
            {/* Header Address Bar */}
            <div className="h-10 bg-surface-container-high flex items-center px-6 gap-2 border-b border-outline-variant/30 flex-shrink-0">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-outline-variant"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-outline-variant"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-outline-variant"></div>
              </div>
              <div className="mx-auto bg-surface-container-lowest px-4 py-0.5 rounded text-[10px] font-label-sm text-outline select-none">
                pharmacy-billing-pro.com
              </div>
            </div>
            
            {/* Project Image and Overlay */}
            <div className="relative overflow-hidden aspect-video flex-grow">
              <Image
                alt="Pharmacy Billing"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdak0L0qm7PP6BRhXv2UxL37bNbFWz2pDJT3PpxvrFLbYtDZJvDieyhuGB9CLVSxLFVtHzPmMei-pNcyPVpKk-9rn4TbU5_9xVeWytffhECvSQ30_cvs-cI6mmLFpjLxAG001tnHXa5WdULypHcEgGKvp5sIS5DTVV8djLV7QQkMZD97_hMQKhMSIZu78NDsTRi1GzmFfSdS76fEJ-2CXP4TEwdnYnchL3KBsfh-Y5PvKBOni5nIhHSyeHbOVeS6916XclH0qI_A"
                width={800}
                height={450}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                <div className="text-white">
                  <h3 className="font-headline-md text-headline-md font-bold">
                    Pharmacy Billing &amp; Accounting Website
                  </h3>
                  <p className="text-white/80 mt-2 font-body-md">
                    End-to-end pharmaceutical management with inventory tracking and GST reporting.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Business Management (Medium, span 4) */}
        <div className="md:col-span-4 group cursor-pointer">
          <div className="glass-panel rounded-2xl overflow-hidden hover:border-primary transition-all duration-500 h-full border border-outline-variant/30 flex flex-col justify-between">
            <div className="h-10 bg-surface-container-high flex items-center px-6 border-b border-outline-variant/30 flex-shrink-0">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-outline-variant"></div>
                <div className="w-2 h-2 rounded-full bg-outline-variant"></div>
              </div>
            </div>
            
            <div className="overflow-hidden flex-grow relative aspect-square md:aspect-auto md:h-64">
              <Image
                alt="Business Platform"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWB_WPfAJUJr26jRNoovZOByzfjMHMMRHx8qj_fR_Iownt0mkyRaQkkhRE8kJ8BTZFO7gqpSJBpAUb35khYALDShth4O0yZKQR0-qoD5DGHkPlnmNr18DKIwTdNY2uWQ1tTyGMuzlV2c9qm4qGIgfQwHN7qzx-ZhoeW4tr2vH5aY-_Zah-z3IoDwYmrkmJ3e8Hjil-msp_HBMsU7lY6U9ZCeWH9GtUirfZI2sNQcsMnsrrmtpDXi2n4yR6cR2ngqDsxPlrku4gQw"
                width={400}
                height={450}
              />
            </div>
            
            <div className="p-6 bg-surface-container/60 border-t border-outline-variant/20 flex-shrink-0">
              <h3 className="font-nav-item font-bold text-on-surface">
                Business Management Platform
              </h3>
            </div>
          </div>
        </div>

        {/* Food Delivery App (Large, span 8) */}
        <div className="md:col-span-8 group cursor-pointer">
          <div className="glass-panel rounded-2xl overflow-hidden hover:border-primary transition-all duration-500 browser-shadow h-full flex flex-col">
            
            {/* Header Address Bar */}
            <div className="h-10 bg-surface-container-high flex items-center px-6 gap-2 border-b border-outline-variant/30 flex-shrink-0">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-outline-variant"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-outline-variant"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-outline-variant"></div>
              </div>
              <div className="mx-auto bg-surface-container-lowest px-4 py-0.5 rounded text-[10px] font-label-sm text-outline select-none">
                fasteat-delivery.com
              </div>
            </div>
            
            {/* Project Image and Overlay */}
            <div className="relative overflow-hidden aspect-video flex-grow">
              <Image
                alt="Food Delivery App"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src="/food_delivery.png"
                width={800}
                height={450}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                <div className="text-white">
                  <h3 className="font-headline-md text-headline-md font-bold">
                    FastEat Food Delivery App
                  </h3>
                  <p className="text-white/80 mt-2 font-body-md">
                    A high-performance food delivery mobile web application featuring restaurant search, interactive menu catalogs, cart checkouts, and live delivery tracking.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Analytics Dashboard (Medium, span 4) */}
        <div className="md:col-span-4 group cursor-pointer">
          <div className="glass-panel rounded-2xl overflow-hidden hover:border-primary transition-all duration-500 h-full flex flex-col justify-between">
            <div className="aspect-square relative overflow-hidden flex-grow">
              <Image
                alt="Analytics Dashboard"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCCMaI7UzHSJU0LwlAz0HTxE9qbPp9Osn3MpAFhFFq4grkQSrO_KVkSFil9U7Zr4j3GhtKNU88CzBOfhfVla-EOKus-cw6GGag-3uxMcKTUQgqg0Y1wRuQUVobbNlvEdQ5pALNYeUESfWV1bVDROVjO4QmH57QwnfMQKjRoOFcDOA-iQqISiS3VuwfjS6oP_OdR1S2X0KP6VDaQ-f3NUgcwquQnry__mlvEYOcmMjgDwXkVFAGGP4EAhFgp2elgBjoqVkmhTMEHw"
                width={400}
                height={400}
              />
              <div className="absolute top-4 left-4 bg-tertiary text-white text-[10px] px-2 py-1 rounded font-sans font-semibold uppercase tracking-widest">
                Analytics
              </div>
            </div>
            <div className="p-4 bg-surface-container/60 border-t border-outline-variant/10 flex-shrink-0">
              <p className="font-nav-item text-on-surface font-semibold">
                Analytics Dashboard
              </p>
            </div>
          </div>
        </div>

        {/* Corporate Website (span 6) */}
        <div className="md:col-span-6 group cursor-pointer">
          <div className="glass-panel rounded-2xl overflow-hidden hover:border-primary transition-all duration-500 h-full flex flex-col justify-between">
            <div className="aspect-video relative overflow-hidden flex-grow">
              <Image
                alt="Corporate Website"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDF_qnQ4psTVgab45JefjCWk6wU2EqTIhjYRs5FSYDO_uT5Ge4njMGjE18YnqgzgplNCMLeTgjYB2UtbbrorAC93Y-jIl4lqCWQs_IVq3pBV0xiOy1Ao9hjGZEE6KFZreXLxpQ0soZrOONUiJ_LAQoWQ7xqxyLJj1BoFCKbmTheQcmH8dv09rQaS9qakQ8IdDbzOxZSYytpEwtinPB0KoA1ttkIMdJB5rCGj5KF_lZrlge6dYzbLxy6I6M_ozkgFwVryrpc89K9yQ"
                width={600}
                height={340}
              />
              <div className="absolute top-4 left-4 bg-primary text-white text-[10px] px-2 py-1 rounded font-sans font-semibold uppercase tracking-widest">
                Corporate
              </div>
            </div>
            <div className="p-6 bg-surface-container/60 border-t border-outline-variant/10 flex-shrink-0">
              <p className="font-nav-item text-on-surface font-semibold text-center md:text-left">
                Corporate Portfolio Website
              </p>
            </div>
          </div>
        </div>

        {/* Admin Panel (span 6) */}
        <div className="md:col-span-6 group cursor-pointer">
          <div className="glass-panel rounded-2xl overflow-hidden hover:border-primary transition-all duration-500 h-full flex flex-col justify-between">
            <div className="aspect-video relative overflow-hidden flex-grow">
              <Image
                alt="Admin Panel"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjVGV4d_dno2PYfWy5wjT8XU-rAMCwwsQV7eo3b8LF_ru7qfNvGt08WnYhp0HKcsOBwz-1FgFXWXRuaMv1AsWernAOkNl49bB1zibSbzWOXt9CEotK4efRBuIQCIl_vLGuo0vsKcBHIEPbey0RaY1YAXL4sT23DthGhExe19MW1GJHNP2QCh8jx_qma6BsoXihWBOqXCPEsloIjd_rcKwwv0LElHaSfP_f1nkdoPReF-GuaYvTc-BGoC97f8O8J7r_Wv5mpZup9g"
                width={600}
                height={340}
              />
              <div className="absolute top-4 left-4 bg-secondary text-white text-[10px] px-2 py-1 rounded font-sans font-semibold uppercase tracking-widest">
                Management
              </div>
            </div>
            <div className="p-6 bg-surface-container/60 border-t border-outline-variant/10 flex-shrink-0">
              <p className="font-nav-item text-on-surface font-semibold text-center md:text-left">
                Admin Management Panel
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
