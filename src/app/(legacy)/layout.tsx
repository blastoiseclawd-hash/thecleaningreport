import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

/**
 * Legacy chrome wrapper — mounts the original Tailwind Header + Footer around
 * the pre-template-b pages (homepage stub + trust pages). Phase D6 rebuilds
 * each page with template-b layouts (HomePageLayout, SupportPageLayout) and
 * this group dissolves. Until then, legacy pages render with the old shell.
 */
export default function LegacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
