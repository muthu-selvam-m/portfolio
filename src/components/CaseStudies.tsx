import React from "react";
import Image from "next/image";

export default function CaseStudies() {
  const cases = [
    {
      type: "Enterprise Software",
      year: "2026",
      title: "Pharmacy Billing & Accounting System",
      description:
        "A comprehensive solution for pharmaceutical retailers to manage inventory, track expiry dates, and automate GST-compliant invoicing with a Django backend and Angular frontend.",
      tags: ["Angular", "Django", "PostgreSQL"],
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDn6roY5j7ZnF8AICqAIKkCqRj_XDm23iEtI8FDog9i9wd7Sqo8PaysHO_5SeLts98QGZER9mh3-ok786GssO11-IELvZB2da_DzWHl18DK06LB6-m7T-a5ppmE4iAoBWBL6RTDmXSh_Ps3ZBMtRBfdGssfC9lL2ccqgJVJASOYoyaO58rvim81QXoZM_FWBY9MYeQ7ov-mdCi9vImfbK_GIV5Fwl69MKID9dPqhAHojbdI3ujSNJGIFyE0ItTkG6asRBxvdEmv9w",
      reverse: false,
    },
  ];

  return (
    <section className="py-section-gap bg-surface w-full">
      <div className="max-w-container-max mx-auto px-margin-x">
        
        {/* Title */}
        <div className="mb-stack-lg text-center">
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            In-Depth Case Studies
          </h2>
        </div>

        {/* Case Studies list */}
        <div className="space-y-gutter">
          {cases.map((project, i) => (
            <div
              key={i}
              className={`glass-panel p-8 rounded-3xl flex flex-col ${
                project.reverse ? "md:flex-row-reverse" : "md:flex-row"
              } gap-stack-lg items-center bg-surface-container/40`}
            >
              {/* Image side */}
              <div className="w-full md:w-1/2">
                <div className="rounded-2xl overflow-hidden border border-outline-variant/30 aspect-video relative">
                  <Image
                    alt={project.title}
                    className="w-full h-full object-cover"
                    src={project.image}
                    width={600}
                    height={340}
                  />
                </div>
              </div>

              {/* Info side */}
              <div className="w-full md:w-1/2 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm uppercase text-primary tracking-widest font-semibold">
                    {project.type}
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                    {project.year}
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md font-bold text-on-surface">
                  {project.title}
                </h3>
                <p className="text-on-surface-variant font-body-md leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-surface-variant text-on-surface-variant rounded-full font-label-sm text-label-sm font-medium border border-outline-variant/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
