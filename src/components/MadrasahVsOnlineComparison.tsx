import React from "react";
import Link from "next/link";
import { Check, X, Sparkles, Clock, ShieldCheck, HeartHandshake, Car, Users, Calendar } from "lucide-react";
import { PRICING_PLANS } from "@/lib/academyFacts";

export default function MadrasahVsOnlineComparison() {
  const comparisonRows = [
    {
      metric: "1-on-1 Dedicated Attention",
      icon: Users,
      localMadrasah: "2 to 3 minutes per student (teacher divided among 20–30 noisy kids)",
      noorpathOnline: "100% private 1-on-1 (full 30 minutes focused exclusively on your child)",
      localPositive: false,
      onlinePositive: true,
    },
    {
      metric: "Daily Travel & Commute Time",
      icon: Car,
      localMadrasah: "40–60 minutes lost in traffic, parking rush, and bad winter weather",
      noorpathOnline: "0 minutes commute. Join instantly from the comfort and warmth of your home",
      localPositive: false,
      onlinePositive: true,
    },
    {
      metric: "Parent Supervision & Peace of Mind",
      icon: ShieldCheck,
      localMadrasah: "Wait in parking lot or leave child unattended in crowded hall",
      noorpathOnline: "Sit comfortably beside your child or monitor lessons with complete safeguarding",
      localPositive: false,
      onlinePositive: true,
    },
    {
      metric: "Female Tutors for Girls & Sisters",
      icon: HeartHandshake,
      localMadrasah: "Rare or unavailable in most Western weekend schools and masjids",
      noorpathOnline: "Available on demand — certified female Quran scholars & Hafizas",
      localPositive: false,
      onlinePositive: true,
    },
    {
      metric: "Flexible Scheduling & Rescheduling",
      icon: Calendar,
      localMadrasah: "Rigid fixed schedule; missed classes due to sickness or exams are lost",
      noorpathOnline: "Choose times that fit your family schedule; easily reschedule with prior notice",
      localPositive: false,
      onlinePositive: true,
    },
    {
      metric: "Progress Tracking & Reports",
      icon: Clock,
      localMadrasah: "Rarely any written progress reports or individual feedback",
      noorpathOnline: "Digital Parent Portal with lesson notes, Tajweed mastery tracking, and attendance",
      localPositive: false,
      onlinePositive: true,
    },
  ];

  return (
    <section
      className="madrasah-vs-online-section my-12"
      aria-labelledby="comparison-heading"
    >
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-center max-w-[820px] mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles size={13} className="text-amber-500" />
            Decision Guide for Parents
          </div>
          <h2
            id="comparison-heading"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.7rem, 4vw, 2.3rem)",
              color: "var(--charcoal)",
              fontWeight: 700,
              lineHeight: 1.25,
              marginBottom: 12,
            }}
          >
            Local Mosque Madrasah vs. <span style={{ color: "var(--emerald)" }}>NoorPath 1-on-1 Online</span>
          </h2>
          <p style={{ color: "var(--muted)", fontSize: "1rem", lineHeight: 1.6 }}>
            Why hundreds of families in the UK, USA, Canada, Australia, and Europe choose NoorPath&apos;s private live classes over traditional crowded weekend schools.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm bg-white mb-8">
          <table className="w-full text-left border-collapse min-w-[640px]">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/70">
                <th className="py-4 px-5 text-sm font-bold text-slate-700 w-1/3">
                  Key Learning Factor
                </th>
                <th className="py-4 px-5 text-sm font-bold text-slate-500 w-1/3 border-l border-slate-200 bg-slate-100/50">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-400"></span>
                    Traditional Mosque / Madrasah
                  </div>
                </th>
                <th className="py-4 px-5 text-sm font-bold text-emerald-800 w-1/3 border-l border-emerald-100 bg-emerald-50/60">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse"></span>
                    NoorPath 1-on-1 Live Online
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {comparisonRows.map((row, idx) => {
                const IconComponent = row.icon;
                return (
                  <tr key={idx} className="hover:bg-slate-50/40 transition-colors">
                    <td className="py-4 px-5 font-semibold text-slate-800">
                      <div className="flex items-center gap-2.5">
                        <span className="p-1.5 rounded-lg bg-emerald-50 text-emerald-700">
                          <IconComponent size={16} />
                        </span>
                        <span>{row.metric}</span>
                      </div>
                    </td>
                    <td className="py-4 px-5 text-slate-600 border-l border-slate-100 bg-slate-50/20">
                      <div className="flex items-start gap-2">
                        <X size={16} className="text-red-500 shrink-0 mt-0.5" />
                        <span>{row.localMadrasah}</span>
                      </div>
                    </td>
                    <td className="py-4 px-5 text-slate-800 font-medium border-l border-emerald-100/60 bg-emerald-50/15">
                      <div className="flex items-start gap-2">
                        <Check size={16} className="text-emerald-600 font-bold shrink-0 mt-0.5" />
                        <span className="text-emerald-950">{row.noorpathOnline}</span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Cost & Travel Time Savings Calculator Banner */}
        <div
          className="p-6 md:p-8 rounded-2xl border"
          style={{
            background: "linear-gradient(135deg, rgba(10, 110, 79, 0.05) 0%, rgba(212, 160, 23, 0.08) 100%)",
            borderColor: "rgba(10, 110, 79, 0.2)",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2">
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.25rem",
                  color: "var(--charcoal)",
                  fontWeight: 700,
                  marginBottom: 6,
                }}
              >
                💡 Save $100+/Month on Travel Costs & 12+ Hours in the Car
              </h3>
              <p style={{ color: "var(--slate)", fontSize: "0.92rem", lineHeight: 1.6 }}>
                Driving to a local weekend mosque 3 days a week costs an average of $80–$140/month in petrol, wear-and-tear, plus hours sitting in cold parking lots. NoorPath classes start at just <strong>${PRICING_PLANS[0].monthlyPriceUsd}/month</strong> with 100% dedicated 1-on-1 tutoring from your living room.
              </p>
            </div>
            <div className="text-center md:text-right">
              <Link
                href="/free-quran-classes-online"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white shadow-md transition-all hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, var(--emerald) 0%, #0d7f5c 100%)",
                  boxShadow: "0 4px 14px rgba(10, 110, 79, 0.3)",
                }}
              >
                <span>Book Free 30-Min Trial</span>
                <span className="text-amber-300">→</span>
              </Link>
              <div className="text-xs text-slate-500 mt-2">
                No credit card • Free evaluation
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
