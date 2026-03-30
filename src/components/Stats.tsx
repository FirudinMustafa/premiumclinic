interface StatsProps {
  dict: any;
}

export default function Stats({ dict }: StatsProps) {
  const stats = [
    { value: dict.stats.yearsValue, label: dict.stats.years, icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", color: "gold" },
    { value: dict.stats.patientsValue, label: dict.stats.patients, icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z", color: "rose" },
    { value: dict.stats.doctorsValue, label: dict.stats.doctors, icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z", color: "emerald" },
    { value: dict.stats.departmentsValue, label: dict.stats.departments, icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4", color: "sky" },
  ];

  const colorMap: Record<string, { bg: string; text: string; iconBg: string; border: string }> = {
    gold: { bg: "bg-amber-50", text: "text-amber-700", iconBg: "gold-gradient", border: "border-amber-200" },
    rose: { bg: "bg-rose-50", text: "text-rose-600", iconBg: "bg-rose-500", border: "border-rose-200" },
    emerald: { bg: "bg-emerald-50", text: "text-emerald-600", iconBg: "bg-emerald-500", border: "border-emerald-200" },
    sky: { bg: "bg-sky-50", text: "text-sky-600", iconBg: "bg-sky-500", border: "border-sky-200" },
  };

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {stats.map((stat, i) => {
            const colors = colorMap[stat.color];
            return (
              <div key={i} className={`${colors.bg} border ${colors.border} rounded-2xl p-4 sm:p-8 text-center hover:shadow-lg transition-shadow`}>
                <div className={`w-10 h-10 sm:w-14 sm:h-14 ${colors.iconBg} rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-4`}>
                  <svg className="w-5 h-5 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
                  </svg>
                </div>
                <p className={`text-2xl sm:text-4xl font-bold ${colors.text} mb-0.5 sm:mb-1`}>{stat.value}</p>
                <p className="text-xs sm:text-sm text-gray-600">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
