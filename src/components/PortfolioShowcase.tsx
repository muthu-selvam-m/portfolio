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

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        
        {/* Pharmacy Billing */}
        <div className="group cursor-pointer h-full">
          <div className="glass-panel rounded-2xl overflow-hidden hover:border-primary transition-all duration-500 browser-shadow h-full flex flex-col">
            
            {/* Header Address Bar */}
            <div className="h-8 bg-surface-container-high flex items-center px-4 gap-1.5 border-b border-outline-variant/30 flex-shrink-0">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-outline-variant"></div>
                <div className="w-2 h-2 rounded-full bg-outline-variant"></div>
                <div className="w-2 h-2 rounded-full bg-outline-variant"></div>
              </div>
              <div className="mx-auto bg-surface-container-lowest px-3 py-0.5 rounded text-[9px] font-label-sm text-outline select-none">
                pharmacy-billing-pro.com
              </div>
            </div>
            
            {/* Project Image and Overlay */}
            <div className="relative overflow-hidden aspect-[4/3] flex-grow">
              <Image
                alt="Pharmacy Billing"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdak0L0qm7PP6BRhXv2UxL37bNbFWz2pDJT3PpxvrFLbYtDZJvDieyhuGB9CLVSxLFVtHzPmMei-pNcyPVpKk-9rn4TbU5_9xVeWytffhECvSQ30_cvs-cI6mmLFpjLxAG001tnHXa5WdULypHcEgGKvp5sIS5DTVV8djLV7QQkMZD97_hMQKhMSIZu78NDsTRi1GzmFfSdS76fEJ-2CXP4TEwdnYnchL3KBsfh-Y5PvKBOni5nIhHSyeHbOVeS6916XclH0qI_A"
                width={600}
                height={450}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <div className="text-white">
                  <h3 className="font-headline-sm text-headline-sm font-bold">
                    Pharmacy Billing &amp; Accounting Website
                  </h3>
                  <p className="text-white/80 mt-2 font-body-sm text-sm line-clamp-3">
                    End-to-end pharmaceutical management with inventory tracking and GST reporting.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Food Delivery App */}
        <div className="group cursor-pointer h-full">
          <div className="glass-panel rounded-2xl overflow-hidden hover:border-primary transition-all duration-500 browser-shadow h-full flex flex-col">
            
            {/* Header Address Bar */}
            <div className="h-8 bg-surface-container-high flex items-center px-4 gap-1.5 border-b border-outline-variant/30 flex-shrink-0">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-outline-variant"></div>
                <div className="w-2 h-2 rounded-full bg-outline-variant"></div>
                <div className="w-2 h-2 rounded-full bg-outline-variant"></div>
              </div>
              <div className="mx-auto bg-surface-container-lowest px-3 py-0.5 rounded text-[9px] font-label-sm text-outline select-none">
                fasteat-delivery.com
              </div>
            </div>
            
            {/* Project Image and Overlay */}
            <div className="relative overflow-hidden aspect-[4/3] flex-grow">
              <Image
                alt="Food Delivery App"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                src="/food_delivery.png"
                width={600}
                height={450}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <div className="text-white">
                  <h3 className="font-headline-sm text-headline-sm font-bold">
                    FastEat Food Delivery App
                  </h3>
                  <p className="text-white/80 mt-2 font-body-sm text-sm line-clamp-3">
                    A high-performance food delivery mobile web application featuring restaurant search, interactive menu catalogs, cart checkouts, and live delivery tracking.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Corporate Website */}
        <div className="group cursor-pointer h-full">
          <div className="glass-panel rounded-2xl overflow-hidden hover:border-primary transition-all duration-500 browser-shadow h-full flex flex-col">
            
            {/* Header Address Bar */}
            <div className="h-8 bg-surface-container-high flex items-center px-4 gap-1.5 border-b border-outline-variant/30 flex-shrink-0">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-outline-variant"></div>
                <div className="w-2 h-2 rounded-full bg-outline-variant"></div>
                <div className="w-2 h-2 rounded-full bg-outline-variant"></div>
              </div>
              <div className="mx-auto bg-surface-container-lowest px-3 py-0.5 rounded text-[9px] font-label-sm text-outline select-none">
                corporate-portfolio.com
              </div>
            </div>

            {/* Project Image and Overlay */}
            <div className="relative overflow-hidden aspect-[4/3] flex-grow">
              <Image
                alt="Corporate Website"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDF_qnQ4psTVgab45JefjCWk6wU2EqTIhjYRs5FSYDO_uT5Ge4njMGjE18YnqgzgplNCMLeTgjYB2UtbbrorAC93Y-jIl4lqCWQs_IVq3pBV0xiOy1Ao9hjGZEE6KFZreXLxpQ0soZrOONUiJ_LAQoWQ7xqxyLJj1BoFCKbmTheQcmH8dv09rQaS9qakQ8IdDbzOxZSYytpEwtinPB0KoA1ttkIMdJB5rCGj5KF_lZrlge6dYzbLxy6I6M_ozkgFwVryrpc89K9yQ"
                width={600}
                height={450}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <div className="text-white">
                  <h3 className="font-headline-sm text-headline-sm font-bold">
                    Corporate Portfolio Website
                  </h3>
                  <p className="text-white/80 mt-2 font-body-sm text-sm line-clamp-3">
                    A sleek, professional web presence designed for high-end corporate clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
