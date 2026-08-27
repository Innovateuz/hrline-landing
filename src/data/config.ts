/** Language-independent values: numbers, contacts, section anchors. */

export const CONFIG = {
  color: "#6366F1",
  website: "www.hrline.uz",
  websiteUrl: "http://www.hrline.uz",
  sales: "(50) 075 55 77",
  tech: "(99) 599 66 77",

  hero: { total: 441, atWork: 389, absent: 52 },

  dashboardBars: [62, 78, 54, 88, 71, 94, 66],
  weekBars: [70, 90, 60, 100, 80, 95, 50],

  payroll: {
    base: 4_850_000,
    hours: 184,
    penalty: -120_000,
    bonus: 450_000,
    total: 5_180_000,
  },

  attendance: { time: "09:02" },
};

export const NAV = [
  { key: "features", href: "#pain-points" },
  { key: "attendance", href: "#attendance" },
  { key: "kpi", href: "#kpi" },
  { key: "app", href: "#mobile-app" },
  { key: "salary", href: "#payroll" },
] as const;

/** 4 850 000 → "4 850 000" (non-breaking spaces). */
export const formatNum = (n: number) =>
  Math.abs(Math.round(n))
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
