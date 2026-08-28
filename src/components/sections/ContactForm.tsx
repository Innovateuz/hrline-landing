import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/Button";
import { Icon } from "../ui/Icon";
import { Reveal } from "../ui/Reveal";
import { CONFIG } from "../../data/config";
import { useI18n } from "../../i18n";

type Fields = {
  name: string;
  company: string;
  phone: string;
  employees: string;
  comment: string;
};

const empty: Fields = {
  name: "",
  company: "",
  phone: "",
  employees: "",
  comment: "",
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Ariza muvaffaqiyatli yuborilganda Google Ads / GA4'ga xabar beramiz.
 * - generate_lead — GA4 standart hodisasi (doim yuboriladi)
 * - conversion   — Google Ads konversiyasi (faqat conversionLabel sozlangan bo'lsa)
 */
function reportLeadConversion(src: string) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", "generate_lead", { source: src || "hrline-sayt" });
  const { conversionId, conversionLabel } = CONFIG.ads;
  if (conversionLabel) {
    window.gtag("event", "conversion", {
      send_to: `${conversionId}/${conversionLabel}`,
    });
  }
}

/**
 * Sahifa URL'idagi manba parametri: ?src= / ?utm_source= / ?source= / ?ref=
 * Har Telegram guruhga alohida link tarqatib (masalan
 * https://hrline.uz/?src=tg-hrchat#contact), lidlar qayerdan kelganini ajratamiz.
 */
function detectSource(): string {
  try {
    const q = new URLSearchParams(window.location.search);
    const raw = (
      q.get("src") ||
      q.get("utm_source") ||
      q.get("source") ||
      q.get("ref") ||
      ""
    )
      .trim()
      .slice(0, 80);
    // Parametr bo'lmasa — sayt formasi ekanini bildiramiz.
    return raw || "hrline-sayt";
  } catch {
    return "hrline-sayt";
  }
}

export function ContactForm() {
  const { t } = useI18n();
  const c = t.contact;
  const [values, setValues] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [source] = useState(detectSource);

  const set = (k: keyof Fields, v: string) => {
    setValues((s) => ({ ...s, [k]: v }));
    setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const validate = () => {
    const e: Partial<Record<keyof Fields, string>> = {};
    if (values.name.trim().length < 2) e.name = c.errors.name;
    if (values.company.trim().length < 2) e.company = c.errors.company;
    const digits = values.phone.replace(/\D/g, "");
    if (digits.length < 7) e.phone = c.errors.phone;
    if (!values.employees.trim()) e.employees = c.errors.employeesRequired;
    else if (Number.isNaN(Number(values.employees.replace(/\s/g, ""))))
      e.employees = c.errors.employeesNumber;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    if (submitting) return;
    if (!validate()) return;

    setSubmitting(true);
    setFormError(null);
    try {
      const res = await fetch(
        `${CONFIG.crm.apiUrl}/lead-forms/p/${CONFIG.crm.formSlug}/submit`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: values.name.trim(),
            phone: values.phone.trim(),
            answers: {
              Kompaniya: values.company.trim(),
              "Xodimlar soni": values.employees.trim(),
              ...(values.comment.trim() ? { Izoh: values.comment.trim() } : {}),
            },
            source,
          }),
        }
      );
      const data = await res.json().catch(() => null);
      if (!res.ok || !data?.success) {
        throw new Error(data?.message || "request failed");
      }
      reportLeadConversion(source);
      setSent(true);
      setValues(empty);
    } catch {
      setFormError(c.errors.network);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[10%] top-0 h-80 w-80 rounded-full bg-brand-200/40 blur-[120px]" />
        <div className="absolute right-[8%] bottom-0 h-80 w-80 rounded-full bg-violet-soft/30 blur-[120px]" />
      </div>

      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1fr] lg:gap-16">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50/70 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                {c.eyebrow}
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 text-h2 font-bold text-ink">{c.title}</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 text-lg leading-relaxed text-ink-muted">
                {c.subtitle}
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 space-y-3">
                {[
                  [c.salesDept, CONFIG.sales],
                  [c.techDept, CONFIG.tech],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="flex items-center gap-3 rounded-2xl border border-mist-200 bg-white p-4"
                  >
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-50 text-brand-600">
                      <Icon name="phone" className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-medium text-ink-muted">{k}</p>
                      <p className="text-sm font-bold text-ink">{v}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="glass relative rounded-3xl p-6 shadow-float sm:p-8">
              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex min-h-[420px] flex-col items-center justify-center text-center"
                  >
                    <span className="grid h-16 w-16 place-items-center rounded-2xl bg-emerald-100 text-emerald-600">
                      <Icon name="check" className="h-8 w-8" />
                    </span>
                    <h3 className="mt-5 text-xl font-bold text-ink">
                      {c.success}
                    </h3>
                    <button
                      onClick={() => setSent(false)}
                      className="mt-4 text-sm font-semibold text-brand-600 hover:underline"
                    >
                      {c.sendAnother}
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={onSubmit}
                    noValidate
                    className="grid gap-4 sm:grid-cols-2"
                  >
                    <Field
                      label={c.fields.name}
                      value={values.name}
                      onChange={(v) => set("name", v)}
                      error={errors.name}
                      autoComplete="name"
                    />
                    <Field
                      label={c.fields.company}
                      value={values.company}
                      onChange={(v) => set("company", v)}
                      error={errors.company}
                      autoComplete="organization"
                    />
                    <Field
                      label={c.fields.phone}
                      value={values.phone}
                      onChange={(v) => set("phone", v)}
                      error={errors.phone}
                      type="tel"
                      autoComplete="tel"
                      placeholder={c.phonePlaceholder}
                    />
                    <Field
                      label={c.fields.employees}
                      value={values.employees}
                      onChange={(v) => set("employees", v)}
                      error={errors.employees}
                      inputMode="numeric"
                    />
                    <div className="sm:col-span-2">
                      <Field
                        label={c.fields.comment}
                        value={values.comment}
                        onChange={(v) => set("comment", v)}
                        textarea
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full"
                        withArrow
                        disabled={submitting}
                      >
                        {submitting ? c.sending : c.submit}
                      </Button>
                      {formError && (
                        <p className="mt-3 text-center text-[13px] font-medium text-rose-500">
                          {formError}
                        </p>
                      )}
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

interface FieldProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  type?: string;
  textarea?: boolean;
  placeholder?: string;
  autoComplete?: string;
  inputMode?: "numeric" | "text";
}

function Field({
  label,
  value,
  onChange,
  error,
  type = "text",
  textarea,
  placeholder,
  autoComplete,
  inputMode,
}: FieldProps) {
  const cls = `w-full rounded-xl border bg-white/80 px-3.5 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-muted/50 focus:border-brand-400 focus:ring-2 focus:ring-brand-100 ${
    error ? "border-rose-300" : "border-mist-200"
  }`;
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-semibold text-ink">{label}</span>
      {textarea ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={3}
          placeholder={placeholder}
          className={`${cls} resize-none`}
        />
      ) : (
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          type={type}
          inputMode={inputMode}
          placeholder={placeholder}
          autoComplete={autoComplete}
          className={cls}
        />
      )}
      {error && (
        <span className="text-[11px] font-medium text-rose-500">{error}</span>
      )}
    </label>
  );
}
