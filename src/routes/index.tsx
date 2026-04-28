import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Gift,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingDown,
  Users,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-growth.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Attention Anatomy — ৩০ দিনে সেলস দ্বিগুণ করার সিস্টেম" },
      {
        name: "description",
        content:
          "CRO-অপ্টিমাইজড ল্যান্ডিং পেজ ফর্মুলা। ৩,০০০+ উদ্যোক্তা ব্যবহার করছেন। ৭ দিনের মানি-ব্যাক গ্যারান্টি।",
      },
      { property: "og:title", content: "৩০ দিনে আপনার সেলস দ্বিগুণ করুন" },
      {
        property: "og:description",
        content: "Bangladeshi market-proven সেলস ফর্মুলা। আজই এনরোল করুন।",
      },
    ],
  }),
  component: LandingPage,
});

// ────────────────────────────────────────────────────────────
// Editable content
// ────────────────────────────────────────────────────────────
const HEADLINE = "৩০ দিনের মধ্যেই আপনার সেলস দ্বিগুণ করার স্টেপ-বাই-স্টেপ সিস্টেম";
const SUBHEADLINE =
  "প্রমাণিত CRO ফ্রেমওয়ার্ক, সাইকোলজিক্যাল সেলস ট্রিগার এবং বাংলাদেশি মার্কেটের জন্য বিশেষভাবে তৈরি ফানেল—একসাথে এক জায়গায়।";
const PRIMARY_CTA = "ফ্রি গিফট পেতে এখনই অর্ডার করুন";
const FINAL_CTA = "আজই এনরোল করুন – সীট সীমিত";

const PAINS = [
  {
    icon: Users,
    title: "ভিজিটর আছে, সেলস নেই",
    body: "ওয়েবসাইটে ট্রাফিক আসছে কিন্তু কনভার্সন হচ্ছে না—কারণটা কী, বুঝতেই পারছেন না।",
  },
  {
    icon: TrendingDown,
    title: "অ্যাড খরচ বাড়ছেই",
    body: "প্রতিদিন বুস্টে টাকা ঢালছেন, কিন্তু ROI দিনদিন কমে যাচ্ছে।",
  },
  {
    icon: Clock,
    title: "টাইম নষ্ট, রেজাল্ট নেই",
    body: "টিউটোরিয়াল দেখে দেখে ক্লান্ত—কিন্তু কোনো সিস্টেম এখনো দাঁড় করাতে পারেননি।",
  },
];

const SOLUTIONS = [
  {
    title: "CRO-Optimized Page Structure",
    body: "প্রতিটি সেকশন সাজানো এমনভাবে, যাতে ভিজিটর স্ক্রল করতে করতেই 'কেনার মুডে' চলে আসে।",
  },
  {
    title: "Psychological Sales Triggers",
    body: "Scarcity, social proof, reciprocity—প্রমাণিত মনস্তাত্ত্বিক ট্রিগার সঠিক জায়গায় বসানো।",
  },
  {
    title: "Bangladeshi Market Formula",
    body: "শুধু থিওরি না—বাংলাদেশি কাস্টমারের আচরণ বিশ্লেষণ করে তৈরি স্পেসিফিক ব্লুপ্রিন্ট।",
  },
];

const TESTIMONIALS = [
  {
    name: "রাকিব হাসান",
    role: "ই-কমার্স উদ্যোক্তা",
    quote:
      "মাত্র ৩ সপ্তাহে আমার অর্ডার সংখ্যা প্রায় ২.৪ গুণ বেড়েছে। ল্যান্ডিং পেজ ফর্মুলাটাই গেম-চেঞ্জার।",
  },
  {
    name: "সুমাইয়া আক্তার",
    role: "অনলাইন কোর্স ক্রিয়েটর",
    quote:
      "আগে কনভার্সন ছিল ১.২%—এই সিস্টেম ফলো করার পর এখন ৪.৮%। পুরোপুরি ফেরত পেলাম ইনভেস্টমেন্ট।",
  },
  {
    name: "তানভীর আহমেদ",
    role: "ডিজিটাল মার্কেটার",
    quote:
      "ক্লায়েন্টদের জন্য এই ফ্রেমওয়ার্ক ইউজ করছি। প্রতিটা প্রজেক্টে রেজাল্ট দিচ্ছে—এক কথায় অসাধারণ।",
  },
];

const BONUSES = [
  { title: "Complete Course Access", value: "৮,৫০০ BDT" },
  { title: "Bonus Template Pack (১২+ ফানেল)", value: "৬,০০০ BDT" },
  { title: "Free 1:1 Consultancy (প্রথম ২০ জন)", value: "৫,৫০০ BDT" },
];

// Countdown target: 7 days from first load (per browser)
const COUNTDOWN_KEY = "aa_deadline_v1";
function getDeadline() {
  if (typeof window === "undefined") return Date.now() + 7 * 24 * 60 * 60 * 1000;
  const stored = window.localStorage.getItem(COUNTDOWN_KEY);
  if (stored) return parseInt(stored, 10);
  const d = Date.now() + 7 * 24 * 60 * 60 * 1000;
  window.localStorage.setItem(COUNTDOWN_KEY, String(d));
  return d;
}

function bn(n: number) {
  const map: Record<string, string> = {
    "0": "০",
    "1": "১",
    "2": "২",
    "3": "৩",
    "4": "৪",
    "5": "৫",
    "6": "৬",
    "7": "৭",
    "8": "৮",
    "9": "৯",
  };
  return String(n)
    .padStart(2, "0")
    .split("")
    .map((c) => map[c] ?? c)
    .join("");
}

function Countdown() {
  const deadline = useMemo(() => getDeadline(), []);
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const diff = Math.max(0, deadline - now);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  const cells = [
    { label: "দিন", value: days },
    { label: "ঘণ্টা", value: hours },
    { label: "মিনিট", value: minutes },
    { label: "সেকেন্ড", value: seconds },
  ];

  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-4">
      {cells.map((c) => (
        <div
          key={c.label}
          className="rounded-xl bg-foreground/95 px-2 py-3 text-center text-primary-foreground shadow-md sm:px-4 sm:py-5"
        >
          <div className="font-mono text-2xl font-bold tabular-nums sm:text-4xl">
            {bn(c.value)}
          </div>
          <div className="mt-1 text-[11px] text-primary-foreground/70 sm:text-xs">
            {c.label}
          </div>
        </div>
      ))}
    </div>
  );
}

function CTAButton({ children, size = "lg" }: { children: React.ReactNode; size?: "lg" | "default" }) {
  return (
    <Button
      size={size}
      className="group h-auto rounded-full bg-gradient-to-r from-primary to-[oklch(0.66_0.2_280)] px-7 py-4 text-base font-semibold shadow-[0_15px_40px_-12px_color-mix(in_oklab,var(--primary)_55%,transparent)] transition-transform hover:scale-[1.02] hover:from-primary hover:to-primary sm:text-lg"
    >
      {children}
      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
    </Button>
  );
}

function LandingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* ───────── Section 01 — HERO ───────── */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{ background: "var(--gradient-hero)" }}
        />
        <div className="pointer-events-none absolute -right-32 -top-32 -z-10 h-96 w-96 rounded-full bg-primary/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-32 -z-10 h-96 w-96 rounded-full bg-[oklch(0.66_0.2_280)]/15 blur-3xl" />

        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
          <div className="flex items-center gap-2 font-bold">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-[oklch(0.66_0.2_280)] text-primary-foreground">
              <Sparkles className="h-5 w-5" />
            </div>
            <span className="text-lg">Attention Anatomy</span>
          </div>
          <div className="hidden items-center gap-2 text-sm text-muted-foreground sm:flex">
            <ShieldCheck className="h-4 w-4 text-[var(--success)]" />
            ৭ দিনের মানি-ব্যাক
          </div>
        </nav>

        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-10 lg:grid-cols-2 lg:pt-16">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary sm:text-sm">
              <Zap className="h-3.5 w-3.5" />
              নতুন ব্যাচ এনরোলমেন্ট চলছে
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              {HEADLINE}
            </h1>
            <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
              {SUBHEADLINE}
            </p>
            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <CTAButton>{PRIMARY_CTA}</CTAButton>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[oklch(0.78_0.17_75)] text-[oklch(0.78_0.17_75)]" />
                  ))}
                </div>
                <span className="font-medium text-foreground">৪.৯/৫</span>
              </div>
              <div>৩,০০০+ উদ্যোক্তা ব্যবহার করছেন</div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/20 to-[oklch(0.66_0.2_280)]/20 blur-2xl" />
            <div className="overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-[var(--shadow-elegant)]">
              <img
                src={heroImage}
                alt="সেলস গ্রোথ ইলাস্ট্রেশন"
                className="aspect-square w-full object-cover"
                loading="eager"
              />
            </div>
            <Card className="absolute -bottom-6 -left-4 hidden gap-1 rounded-2xl border-border/60 bg-card p-4 shadow-[var(--shadow-card)] sm:block">
              <div className="text-xs text-muted-foreground">গত মাসের গড় গ্রোথ</div>
              <div className="text-2xl font-bold text-[var(--success)]">+২১৪%</div>
            </Card>
          </div>
        </div>
      </section>

      {/* ───────── Section 02 — PAIN ───────── */}
      <section className="bg-[var(--warning-soft)]/40">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              ভিজিটর আসছে, কিন্তু সেলস কেন হচ্ছে না?
            </h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              প্রতিদিন অ্যাডে টাকা খরচ হচ্ছে—কিন্তু কিনছে না কেউ। সমস্যাটা প্রোডাক্টে নয়,
              আপনার সেলস ফানেলে।
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {PAINS.map((p) => (
              <Card
                key={p.title}
                className="gap-3 rounded-2xl border-border/60 bg-card p-7 shadow-[var(--shadow-card)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--warning-soft)] text-[var(--warning-foreground)]">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.body}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Section 03 — SOLUTION ───────── */}
      <section>
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
              আমাদের সমাধান
            </div>
            <h2 className="text-3xl font-bold sm:text-4xl">
              যেভাবে আমরা ভিজিটরকে কাস্টমারে রূপান্তর করি
            </h2>
            <p className="mt-4 text-muted-foreground">
              একটা পেজ, তিনটা প্রমাণিত স্তম্ভ—আপনার পুরো ফানেল রি-ডিজাইন।
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {SOLUTIONS.map((s) => (
              <Card
                key={s.title}
                className="gap-3 rounded-2xl border-border/60 p-7 shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-elegant)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.body}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Section 04 — SOCIAL PROOF ───────── */}
      <section className="bg-secondary/60">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="grid gap-6 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:grid-cols-3 sm:p-8">
            {[
              { stat: "৩,০০০+", label: "একটিভ উদ্যোক্তা" },
              { stat: "৪.৯★", label: "গড় কাস্টমার রেটিং" },
              { stat: "৭ দিন", label: "মানি-ব্যাক গ্যারান্টি" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-bold text-primary sm:text-4xl">{s.stat}</div>
                <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>

          <h2 className="mt-16 text-center text-3xl font-bold sm:text-4xl">
            যাঁরা ইতিমধ্যে রেজাল্ট পেয়েছেন
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <Card
                key={t.name}
                className="gap-4 rounded-2xl border-border/60 p-7 shadow-[var(--shadow-card)]"
              >
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[oklch(0.78_0.17_75)] text-[oklch(0.78_0.17_75)]" />
                  ))}
                </div>
                <p className="text-[15px] leading-relaxed text-foreground/90">
                  “{t.quote}”
                </p>
                <div className="mt-2 flex items-center gap-3 border-t border-border/60 pt-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-[oklch(0.66_0.2_280)] font-semibold text-primary-foreground">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Section 05 — OFFER + COUNTDOWN ───────── */}
      <section>
        <div className="mx-auto max-w-4xl px-5 py-20">
          <div className="text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-destructive/10 px-4 py-1.5 text-sm font-medium text-destructive">
              <Clock className="h-3.5 w-3.5" />
              সীট সীমিত — অফার শেষ হবে
            </div>
            <h2 className="text-3xl font-bold sm:text-4xl">
              আজকের স্পেশাল অফার
            </h2>
          </div>

          <div className="mt-8">
            <Countdown />
          </div>

          <Card className="mt-10 gap-0 overflow-hidden rounded-3xl border-2 border-primary/20 p-0 shadow-[var(--shadow-elegant)]">
            <div className="bg-gradient-to-r from-primary to-[oklch(0.66_0.2_280)] p-6 text-center text-primary-foreground">
              <div className="text-sm uppercase tracking-wider opacity-90">যা যা পাচ্ছেন</div>
              <div className="mt-1 text-2xl font-bold">Complete Sales Growth Bundle</div>
            </div>

            <div className="space-y-4 p-7 sm:p-10">
              {BONUSES.map((b) => (
                <div
                  key={b.title}
                  className="flex items-start justify-between gap-4 border-b border-border/60 pb-4 last:border-0 last:pb-0"
                >
                  <div className="flex items-start gap-3">
                    <Gift className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-[15px] font-medium">{b.title}</span>
                  </div>
                  <span className="shrink-0 text-sm font-semibold text-muted-foreground">
                    {b.value}
                  </span>
                </div>
              ))}

              <div className="mt-6 rounded-2xl bg-secondary/70 p-5 text-center">
                <div className="text-sm text-muted-foreground">
                  মোট মূল্য: <span className="line-through">২০,০০০ BDT</span>
                </div>
                <div className="mt-1 text-4xl font-extrabold text-primary sm:text-5xl">
                  ৪,৯৯৯ BDT
                </div>
                <div className="mt-1 text-xs font-medium text-[var(--success)]">
                  ৭৫% ছাড় — শুধু আজকের জন্য
                </div>
              </div>

              <div className="flex flex-col items-center gap-3 pt-2">
                <CTAButton>{PRIMARY_CTA}</CTAButton>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <ShieldCheck className="h-4 w-4 text-[var(--success)]" />
                  ৭ দিনের মধ্যে ১০০% টাকা ফেরত গ্যারান্টি
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* ───────── Section 06 — FINAL CTA + FOOTER ───────── */}
      <section className="relative overflow-hidden bg-foreground text-primary-foreground">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[oklch(0.66_0.2_280)]/40 blur-3xl" />

        <div className="relative mx-auto max-w-3xl px-5 py-20 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            আজই শুরু করুন আপনার গ্রোথ জার্নি
          </h2>
          <p className="mt-4 text-primary-foreground/75">
            অপেক্ষা করার মূল্য অনেক বেশি। প্রতিটা দিন মানে—হারানো সেলস, হারানো কাস্টমার।
          </p>
          <div className="mt-8 flex justify-center">
            <CTAButton>{FINAL_CTA}</CTAButton>
          </div>
          <div className="mt-4 text-xs text-primary-foreground/60">
            ✦ সীট সীমিত ✦ প্রথম ২০ জন পাবেন ফ্রি ১:১ কনসালটেন্সি
          </div>
        </div>

        <footer className="border-t border-primary-foreground/10">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-primary-foreground/60 sm:flex-row">
            <div>© {new Date().getFullYear()} Attention Anatomy. সর্বস্বত্ব সংরক্ষিত।</div>
            <div className="flex gap-5">
              <a href="#" className="hover:text-primary-foreground">Privacy</a>
              <a href="#" className="hover:text-primary-foreground">Terms</a>
              <a href="#" className="hover:text-primary-foreground">Contact</a>
            </div>
          </div>
        </footer>
      </section>
    </main>
  );
}
