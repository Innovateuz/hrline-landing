import type { Dict } from "./ru";

export const en: Dict = {
  code: "en",
  label: "EN",
  name: "English",

  meta: {
    title: "HRline — Workforce Management System",
    description:
      "HRline is a premium platform for managing and monitoring employees: Face ID attendance, KPIs, onboarding, a mobile app and automated payroll.",
  },

  brand: {
    descriptor: "Workforce management system",
    badge: "Enterprise HR platform · 2026",
  },

  nav: {
    features: "Features",
    attendance: "Attendance",
    kpi: "KPI",
    app: "App",
    salary: "Payroll",
  },

  cta: {
    contact: "Contact us",
    leaveRequest: "Leave a request",
    viewFeatures: "See the features",
    contactSales: "Contact sales",
  },

  hero: {
    h1Lead: "Workforce",
    h1Accent: "management platform",
    subtitle: "HRline — a platform to manage and monitor your employees.",
    stats: { total: "total", atWork: "at work", absent: "absent" },
  },

  dashboard: {
    online: "Online",
    employeesToday: "Employees today",
    total: "total",
    atWork: "At work",
    absent: "Absent",
    attendanceWeek: "Attendance · week",
    attendanceLabel: "Attendance",
    shift: "Shift",
    earnedToday: "Earned today",
    salaryCalculated: "Payroll calculated",
    employeesAdded: "+12 employees",
    thisWeek: "this week",
    kpiShort: "KPI 87%",
    companyAverage: "company average",
  },

  roster: [
    { name: "Anna Ivanova", role: "Design" },
    { name: "Dmitry Kovalev", role: "Sales" },
    { name: "Maria Sokolova", role: "HR" },
    { name: "Igor Petrov", role: "Development" },
  ],

  units: {
    currency: "sum",
    hours: "hours",
    hoursShort: "h",
    sec: "sec",
  },

  painPoints: {
    eyebrow: "Challenges",
    title: "The core people challenges every business runs into",
    subtitle:
      "When managing employees turns into manual work, the business loses time, money and control.",
    items: [
      {
        title: "Lateness and early leaving",
        text: "A direct loss of working hours and a drop in discipline.",
      },
      {
        title: "High turnover",
        text: "Constant spending on sourcing, hiring and training newcomers.",
      },
      {
        title: "Manual tracking",
        text: "Management time wasted and a high risk of calculation errors.",
      },
      {
        title: "Staff qualification",
        text: "Process mistakes and low quality of work due to a lack of skills.",
      },
      {
        title: "Payroll disputes",
        text: "Trust erodes because of delays or opaque bonuses.",
      },
      {
        title: "Motivation and performance",
        text: "Duties done for the sake of form, with no initiative or focus on results.",
      },
    ],
  },

  attendance: {
    eyebrow: "Attendance",
    title: "Employee attendance control",
    cards: [
      {
        title: "FACE ID terminal",
        points: [
          "Recognition right on the terminal",
          "Automatic check-in / check-out logging",
          "Cloud integration — data online",
          "Works locally even when the internet drops",
        ],
      },
      {
        title: "Phone & Tablet",
        points: [
          "An app for employees",
          "One-tap check-in",
          "Face recognition",
          "Geolocation check",
          "Great for field staff and couriers",
        ],
      },
    ],
    feature: {
      badge: "Liveness detection",
      title: "Face recognition",
      text: "The technology reliably identifies the employee. The system can't be fooled by a photo or video — only a live face is recognised.",
      highlight:
        "If someone is late, the manager instantly gets a Telegram notification.",
    },
    terminal: {
      name: "HRline Terminal",
      idle: "Step up to the terminal",
      verifiedName: "Anna Ivanova",
      status: "Present",
    },
    telegram: {
      app: "Telegram",
      message: "Late: Maria S. — 09:15, HR department",
    },
  },

  onboarding: {
    eyebrow: "Onboarding",
    title: "Onboarding system and candidate selection",
    steps: [
      {
        title: "From a form to a candidate database",
        text: "Share a form link — responses land in the list with a status automatically.",
      },
      {
        title: "Adaptation plan per department",
        text: "A dedicated plan per department or employee — no login required, via a personal link.",
      },
      {
        title: "The whole journey under control",
        text: "From application to onboarding — every employee's progress is visible to the manager.",
      },
    ],
  },

  kpi: {
    eyebrow: "KPI",
    title: "Rolling out KPIs and tuning them",
    subtitle: "Transparent metrics. Fair assessment. Clear motivation.",
    items: [
      {
        title: "Each role, its own metric — a fair comparison",
        text: "Different metrics for different departments.",
      },
      {
        title: "4 calculation formulas by task type — a realistic score",
        text: "Based on growth, quality, volume or deadlines.",
      },
      {
        title: "Ready-made templates — launch in minutes",
        text: "Sales, warehouse, call centre and couriers — out of the box.",
      },
      {
        title: "Deadline and proof inside the task — no need to take anyone's word",
        text: "Completion facts are recorded.",
      },
      {
        title: "Task status visible in real time",
        text: "Full transparency.",
      },
      {
        title: "Bonus tied to points upfront",
        text: "Employees know what for and how much.",
      },
    ],
    widgets: {
      metrics: ["Sales", "Logistics", "Support"],
      formulas: ["Growth", "Quality", "Volume", "Deadlines"],
      formulaPrefix: "ƒ",
      templates: ["Sales", "Warehouse", "Call centre", "Couriers", "Marketing"],
      templatesLaunch: "+ launch in 2 min",
      deadline: "Deadline",
      deadlineValue: "by 17:00, today",
      proofAttached: "Proof attached · 2 files",
      status: ["In progress", "In review", "Done"],
      score: "Score 92 of 100",
      bonus: "Bonus +540,000 sum",
    },
  },

  mobileApp: {
    eyebrow: "App",
    title: "Everything an employee needs — in one app",
    questions: [
      {
        title: "How much have you earned so far?",
        text: "Check in and out with one tap — hours and pay recalculated instantly.",
      },
      {
        title: "Forgot what you have to do today?",
        text: "Tasks with photo confirmation and geolocation.",
      },
      {
        title: "Can't remember how much you worked?",
        text: "Attendance, bonus and penalty history in one place.",
      },
      {
        title: "Is taking leave slow and full of paperwork?",
        text: "Request leave from your phone in a minute.",
      },
    ],
    screens: ["Home", "Attendance", "Payroll", "Tasks", "Leave"],
    screen: {
      earnedMonth: "Earned this month",
      shiftActive: "Shift active",
      checkIn: "Check in",
      todayTasks: "Today's tasks",
      attendanceHistory: "Attendance history",
      leave: "Leave",
      forMonth: "this month",
      onTime: "On time",
      onTimeValue: "21 days",
      late: "Late",
      lateValue: "1 day",
      overtime: "Overtime",
      overtimeValue: "6 h",
      absences: "Absences",
      totalPayable: "Total payable",
      forAugust: "for August",
      worked: "Worked",
      workedValue: "184 hours",
      penalties: "Penalties",
      bonus: "Bonus",
      downloadPdf: "Download PDF",
      taskOpen: "Open the store",
      taskPhoto: "Photo of the display",
      taskReport: "Stock report",
      photoGeo: "Photo + geolocation",
      daysAvailable: "Days available",
      from: "From",
      to: "To",
      dateFrom: "12 September 2026",
      dateTo: "21 September 2026",
      submitRequest: "Submit request",
    },
  },

  payroll: {
    eyebrow: "Payroll",
    title: "Automated payroll calculation",
    cards: [
      {
        title: "Payroll without Excel, formulas or a calculator",
        text: "The system does the maths.",
      },
      {
        title: "Late — but still on full pay?",
        text: "Penalties are counted by the minute and deducted automatically.",
      },
      {
        title: "Payroll calculated in seconds",
        text: "Check-ins, check-outs, hours and penalties add up to a final amount. Download a PDF or print a payslip.",
      },
    ],
    slip: {
      title: "Payroll",
      period: "August 2026",
      name: "Anna Ivanova",
      accrued: "Accrued",
      worked: "Worked",
      workedValue: "184 hours",
      penalties: "Penalties",
      bonus: "Bonus",
      total: "Total",
      downloadPdf: "Download PDF",
      printSlip: "Print payslip",
      calcTook: "Calculation took",
      calcValue: "1.4 sec",
    },
  },

  finalCta: {
    title: "Get started today!",
    subtitle: "Take full control of your workforce with HRline.",
    primaryCta: "Leave a request",
    secondaryCta: "Contact sales",
    atWork: "At work",
    kpiShort: "KPI 87%",
  },

  contact: {
    eyebrow: "Request",
    title: "Leave a request",
    subtitle:
      "Tell us about your team — we'll show how HRline solves your challenges.",
    success: "Thank you! We'll get in touch with you shortly.",
    sendAnother: "Send another request",
    submit: "Send request",
    phonePlaceholder: "+998 __ ___ __ __",
    salesDept: "Sales team",
    techDept: "Tech support",
    fields: {
      name: "Name",
      company: "Company",
      phone: "Phone",
      employees: "Number of employees",
      comment: "Comment",
    },
    errors: {
      name: "Enter your name",
      company: "Enter your company",
      phone: "Enter a valid phone number",
      employeesRequired: "Enter the number",
      employeesNumber: "Numbers only",
    },
  },

  footer: {
    description:
      "Workforce management system. Management, attendance, KPIs, payroll and onboarding in one platform.",
    telegramBot: "Telegram bot",
    downloadApp: "Download the app",
    sections: "Sections",
    contacts: "Contacts",
    salesDept: "Sales team",
    techDept: "Tech support",
    madeFor: "Built for modern teams",
    copyright: "© 2026 HRline. All rights reserved.",
  },
};
