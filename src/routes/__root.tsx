import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Attention Anatomy — ৩০ দিনে সেলস দ্বিগুণ করার সিস্টেম" },
      {
        name: "description",
        content:
          "CRO-অপ্টিমাইজড ল্যান্ডিং পেজ ও সাইকোলজিক্যাল সেলস ট্রিগার ব্যবহার করে ৩০ দিনের মধ্যেই আপনার সেলস দ্বিগুণ করুন।",
      },
      { name: "author", content: "Attention Anatomy" },
      { property: "og:title", content: "Attention Anatomy — ৩০ দিনে সেলস দ্বিগুণ করার সিস্টেম" },
      {
        property: "og:description",
        content: "Bangladeshi market-proven ফানেল ফর্মুলা। ৩,০০০+ উদ্যোক্তা ব্যবহার করছেন।",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Attention Anatomy — ৩০ দিনে সেলস দ্বিগুণ করার সিস্টেম" },
      { name: "description", content: "Conversion Compass builds high-converting landing pages using proven sales psychology and a CRO-optimized structure." },
      { property: "og:description", content: "Conversion Compass builds high-converting landing pages using proven sales psychology and a CRO-optimized structure." },
      { name: "twitter:description", content: "Conversion Compass builds high-converting landing pages using proven sales psychology and a CRO-optimized structure." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/7501d533-d774-47fd-96ad-e3a28dfa9b30/id-preview-2ed23789--72468025-31cd-495f-9bba-0d1ac110c602.lovable.app-1777338213865.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/7501d533-d774-47fd-96ad-e3a28dfa9b30/id-preview-2ed23789--72468025-31cd-495f-9bba-0d1ac110c602.lovable.app-1777338213865.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
