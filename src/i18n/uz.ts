import type { Dict } from "./ru";

export const uz: Dict = {
  code: "uz",
  label: "UZ",
  name: "Oʻzbekcha",

  meta: {
    title: "HRline — Xodimlarni boshqarish tizimi",
    description:
      "HRline — xodimlarni boshqarish va nazorat qilish uchun premium platforma: Face ID davomat, KPI, onboarding, mobil ilova va maoshni avtomatik hisoblash.",
  },

  brand: {
    descriptor: "Xodimlarni boshqarish tizimi",
    badge: "Enterprise HR platforma · 2026",
  },

  nav: {
    features: "Imkoniyatlar",
    attendance: "Davomat",
    kpi: "KPI",
    app: "Ilova",
    salary: "Maosh",
  },

  cta: {
    contact: "Bogʻlanish",
    leaveRequest: "Ariza qoldirish",
    viewFeatures: "Imkoniyatlarni koʻrish",
    contactSales: "Savdo boʻlimi bilan bogʻlanish",
  },

  hero: {
    h1Lead: "Xodimlarni",
    h1Accent: "boshqarish platformasi",
    subtitle:
      "HRline — xodimlarni boshqarish va nazorat qilish platformasi.",
    stats: { total: "jami", atWork: "ishda", absent: "yoʻq" },
  },

  dashboard: {
    online: "Onlayn",
    employeesToday: "Bugungi xodimlar",
    total: "jami",
    atWork: "Ishda",
    absent: "Yoʻq",
    attendanceWeek: "Davomat · hafta",
    attendanceLabel: "Davomat",
    shift: "Smena",
    earnedToday: "Bugun ishlab topildi",
    salaryCalculated: "Maosh hisoblandi",
    employeesAdded: "+12 xodim",
    thisWeek: "shu hafta",
    kpiShort: "KPI 87%",
    companyAverage: "kompaniya boʻyicha oʻrtacha",
  },

  roster: [
    { name: "Anna Ivanova", role: "Dizayn" },
    { name: "Dmitriy Kovalyov", role: "Savdo" },
    { name: "Mariya Sokolova", role: "HR" },
    { name: "Igor Petrov", role: "Dasturlash" },
  ],

  units: {
    currency: "soʻm",
    hours: "soat",
    hoursShort: "soat",
    sec: "soniya",
  },

  painPoints: {
    eyebrow: "Muammolar",
    title: "Biznesning xodimlar bilan bogʻliq asosiy muammolari",
    subtitle:
      "Xodimlarni boshqarish qoʻl mehnatiga aylanganda, biznes vaqt, pul va nazoratni yoʻqotadi.",
    items: [
      {
        title: "Kechikish va erta ketish",
        text: "Ish vaqtining bevosita yoʻqolishi va intizomning pasayishi.",
      },
      {
        title: "Yuqori kadrlar almashinuvi",
        text: "Izlash, yollash va yangi xodimlarni oʻqitishga doimiy xarajatlar.",
      },
      {
        title: "Qoʻlda hisob-kitob",
        text: "Rahbariyat vaqtining sarflanishi va hisoblashda xatoliklar xavfi yuqori.",
      },
      {
        title: "Kadrlar malakasi",
        text: "Koʻnikmalar yetishmasligidan jarayonlardagi xatolar va past sifat.",
      },
      {
        title: "Maosh boʻyicha nizolar",
        text: "Kechikishlar yoki noaniq bonuslar tufayli ishonchning pasayishi.",
      },
      {
        title: "Motivatsiya va samaradorlik",
        text: "Tashabbussiz va natijaga qaratilmagan, faqat rasmiy bajarilgan vazifalar.",
      },
    ],
  },

  attendance: {
    eyebrow: "Davomat",
    title: "Xodimlar davomatini nazorat qilish",
    cards: [
      {
        title: "FACE ID terminal",
        points: [
          "Aniqlash toʻgʻridan-toʻgʻri terminalda",
          "Kelish/ketishni avtomatik qayd etish",
          "Bulut bilan integratsiya — maʼlumotlar onlayn",
          "Internet uzilganda ham lokal ishlaydi",
        ],
      },
      {
        title: "Telefon va Planshet",
        points: [
          "Xodimlar uchun ilova",
          "Bir tegishda belgilash",
          "Yuzni aniqlash",
          "Geolokatsiyani tekshirish",
          "Sohaviy xodimlar va kuryerlar uchun qulay",
        ],
      },
    ],
    feature: {
      badge: "Liveness detection",
      title: "Yuzni aniqlash",
      text: "Texnologiya xodimni aniq taniydi. Tizimni foto yoki video bilan aldab boʻlmaydi — faqat tirik yuz aniqlanadi.",
      highlight:
        "Kechikkanda rahbar darhol Telegram orqali bildirishnoma oladi.",
    },
    terminal: {
      name: "HRline Terminal",
      idle: "Terminalga yaqinlashing",
      verifiedName: "Anna Ivanova",
      status: "Hozir",
    },
    telegram: {
      app: "Telegram",
      message: "Kechikish: Mariya S. — 09:15, HR boʻlimi",
    },
  },

  onboarding: {
    eyebrow: "Onboarding",
    title: "Onboarding tizimi va nomzodlarni tanlash",
    steps: [
      {
        title: "Anketadan nomzodlar bazasigacha",
        text: "Formaga havola — anketa oʻzi status bilan roʻyxatga tushadi.",
      },
      {
        title: "Boʻlimlar boʻyicha moslashuv rejasi",
        text: "Har bir boʻlim yoki xodim uchun alohida reja — tizimga kirmasdan, shaxsiy havola orqali.",
      },
      {
        title: "Butun yoʻl nazorat ostida",
        text: "Arizadan moslashuvgacha — har bir xodimning jarayoni rahbarga koʻrinadi.",
      },
    ],
  },

  kpi: {
    eyebrow: "KPI",
    title: "KPI joriy etish va uni sozlash",
    subtitle: "Shaffof koʻrsatkichlar. Halol baholash. Tushunarli motivatsiya.",
    items: [
      {
        title: "Har bir rolga oʻz metrikasi — halol taqqoslash",
        text: "Turli boʻlimlar uchun turli metrikalar.",
      },
      {
        title: "Vazifa turiga qarab 4 hisoblash formulasi — real baho",
        text: "Oʻsish, sifat, hajm yoki muddatga bogʻliq.",
      },
      {
        title: "Tayyor shablonlar — bir necha daqiqada ishga tushirish",
        text: "Savdo, ombor, call-markaz va kuryerlar — qutidan chiqishi bilan.",
      },
      {
        title: "Vazifada muddat va dalil — soʻzga ishonish shart emas",
        text: "Bajarilish faktlari qayd etiladi.",
      },
      {
        title: "Vazifa holati real vaqtda koʻrinadi",
        text: "Toʻliq shaffoflik.",
      },
      {
        title: "Bonus ballarga oldindan bogʻlangan",
        text: "Xodim nima uchun va qancha ekanini biladi.",
      },
    ],
    widgets: {
      metrics: ["Savdo", "Logistika", "Qoʻllab-quvvatlash"],
      formulas: ["Oʻsish", "Sifat", "Hajm", "Muddatlar"],
      formulaPrefix: "ƒ",
      templates: ["Savdo boʻlimi", "Ombor", "Call-markaz", "Kuryerlar", "Marketing"],
      templatesLaunch: "+ 2 daqiqada ishga tushirish",
      deadline: "Muddat",
      deadlineValue: "bugun, 17:00 gacha",
      proofAttached: "Dalil biriktirildi · 2 fayl",
      status: ["Ishda", "Tekshiruvda", "Tayyor"],
      score: "Ball 92 / 100",
      bonus: "Bonus +540 000 soʻm",
    },
  },

  mobileApp: {
    eyebrow: "Ilova",
    title: "Xodim uchun hamma narsa — bitta ilovada",
    questions: [
      {
        title: "Hozircha qancha ishlab topdingiz?",
        text: "Bir tegishda kelish va ketish — soatlar va maosh bir zumda qayta hisoblanadi.",
      },
      {
        title: "Bugun nima qilish kerakligini unutdingizmi?",
        text: "Foto tasdiq va geolokatsiyali vazifalar.",
      },
      {
        title: "Qancha ishlaganingizni eslay olmayapsizmi?",
        text: "Davomat, bonus va jarimalar tarixi bitta joyda.",
      },
      {
        title: "Taʼtil — bu uzoq va qogʻozbozlikmi?",
        text: "Telefondan bir daqiqada taʼtil arizasi.",
      },
    ],
    screens: ["Asosiy", "Davomat", "Maosh", "Vazifalar", "Taʼtil"],
    screen: {
      earnedMonth: "Shu oyda ishlab topildi",
      shiftActive: "Smena faol",
      checkIn: "Kelishni belgilash",
      todayTasks: "Bugungi vazifalar",
      attendanceHistory: "Davomat tarixi",
      leave: "Taʼtil",
      forMonth: "shu oyda",
      onTime: "Oʻz vaqtida",
      onTimeValue: "21 kun",
      late: "Kechikish",
      lateValue: "1 kun",
      overtime: "Qoʻshimcha ish",
      overtimeValue: "6 soat",
      absences: "Kelmaganlar",
      totalPayable: "Toʻlanadigan jami",
      forAugust: "avgust uchun",
      worked: "Ishlangan",
      workedValue: "184 soat",
      penalties: "Jarimalar",
      bonus: "Bonus",
      downloadPdf: "PDF yuklab olish",
      taskOpen: "Savdo nuqtasini ochish",
      taskPhoto: "Vitrina surati",
      taskReport: "Qoldiqlar hisoboti",
      photoGeo: "Foto + geolokatsiya",
      daysAvailable: "Mavjud kunlar",
      from: "Dan",
      to: "Gacha",
      dateFrom: "2026-yil 12-sentabr",
      dateTo: "2026-yil 21-sentabr",
      submitRequest: "Ariza yuborish",
    },
  },

  payroll: {
    eyebrow: "Maosh",
    title: "Maoshni avtomatik hisoblash",
    cards: [
      {
        title: "Excel, formulalar va kalkulyatorsiz maosh",
        text: "Tizim oʻzi hisoblaydi.",
      },
      {
        title: "Kechikdi — lekin maosh baribir toʻlaqmi?",
        text: "Jarimalar daqiqama-daqiqa hisoblanadi va avtomatik ushlab qolinadi.",
      },
      {
        title: "Maosh hisobi bir necha soniyada",
        text: "Kelish, ketish, soatlar va jarimalar tayyor summaga yigʻiladi. PDF yuklab olish yoki chek chop etish.",
      },
    ],
    slip: {
      title: "Maosh",
      period: "2026-yil avgust",
      name: "Anna Ivanova",
      accrued: "Hisoblandi",
      worked: "Ishlangan",
      workedValue: "184 soat",
      penalties: "Jarimalar",
      bonus: "Bonus",
      total: "Jami",
      downloadPdf: "PDF yuklab olish",
      printSlip: "Chek chop etish",
      calcTook: "Hisob-kitob",
      calcValue: "1.4 soniya",
    },
  },

  finalCta: {
    title: "Bugundan joriy eting!",
    subtitle: "HRline bilan xodimlarni toʻliq nazoratga oling.",
    primaryCta: "Ariza qoldirish",
    secondaryCta: "Savdo boʻlimi bilan bogʻlanish",
    atWork: "Ishda",
    kpiShort: "KPI 87%",
  },

  contact: {
    eyebrow: "Ariza",
    title: "Ariza qoldirish",
    subtitle:
      "Jamoangiz haqida gapirib bering — HRline vazifalaringizni qanday hal qilishini koʻrsatamiz.",
    success: "Rahmat! Tez orada siz bilan bogʻlanamiz.",
    sendAnother: "Yana bitta ariza yuborish",
    submit: "Ariza yuborish",
    phonePlaceholder: "+998 __ ___ __ __",
    salesDept: "Savdo boʻlimi",
    techDept: "Texnik boʻlim",
    fields: {
      name: "Ism",
      company: "Kompaniya",
      phone: "Telefon",
      employees: "Xodimlar soni",
      comment: "Izoh",
    },
    errors: {
      name: "Ismingizni kiriting",
      company: "Kompaniyani kiriting",
      phone: "Toʻgʻri telefon raqamini kiriting",
      employeesRequired: "Sonini kiriting",
      employeesNumber: "Faqat raqam",
    },
  },

  footer: {
    description:
      "Xodimlarni boshqarish tizimi. Boshqaruv, davomat, KPI, maosh va onboarding — bitta platformada.",
    telegramBot: "Telegram-bot",
    downloadApp: "Ilovani yuklab olish",
    sections: "Boʻlimlar",
    contacts: "Kontaktlar",
    salesDept: "Savdo boʻlimi",
    techDept: "Texnik boʻlim",
    madeFor: "Zamonaviy jamoalar uchun yaratilgan",
    copyright: "© 2026 HRline. Barcha huquqlar himoyalangan.",
  },
};
