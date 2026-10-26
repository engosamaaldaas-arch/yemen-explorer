
import Link from "next/link";
import { notFound } from "next/navigation";
import { destinations } from "@/lib/destinations";

export const instant = false;

type Props = {
  params: Promise<{ id: string }>;
};

export default async function DestinationPage({ params }: Props) {
  const { id } = await params;
  const destination = destinations.find((item) => item.id === id);

  if (!destination) {
    notFound();
  }

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-stone-50 text-stone-900"
    >
      <header className="border-b border-stone-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-5">
          <Link
            href="/"
            className="text-xl font-extrabold text-emerald-800"
          >
            Yemen Explorer
          </Link>

          <Link
            href="/"
            className="rounded-full border border-stone-300 px-5 py-2 text-sm font-semibold hover:bg-stone-100"
          >
            العودة للرئيسية
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-5 py-10">
        <section className="mb-8">
          <p className="mb-3 font-semibold text-emerald-700">
            {destination.symbol} {destination.category} ·{" "}
            {destination.location}
          </p>

          <h1 className="mb-4 text-3xl font-extrabold md:text-5xl">
            {destination.name}
          </h1>

          <p className="max-w-3xl text-lg leading-9 text-stone-600">
            {destination.description}
          </p>
        </section>

        <div className="overflow-hidden rounded-3xl bg-stone-200 shadow-sm">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={destination.image}
            alt={destination.name}
            className="h-[300px] w-full object-cover md:h-[480px]"
          />
        </div>

        <section className="mt-10">
          <h2 className="mb-5 text-2xl font-extrabold">
            أبرز المعالم السياحية
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {destination.attractions.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm"
              >
                <span className="mb-3 block text-2xl">📍</span>
                <h3 className="font-bold">{item}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-stone-200 bg-white p-6 md:p-8">
          <h2 className="mb-5 text-2xl font-extrabold">
            أنشطة يمكنك القيام بها
          </h2>

          <ul className="space-y-4">
            {destination.activities.map((item) => (
              <li key={item} className="flex gap-3 leading-8">
                <span className="text-emerald-700">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-6 rounded-3xl bg-emerald-50 p-6 md:p-8">
          <h2 className="mb-5 text-2xl font-extrabold">
            نصائح قبل الزيارة
          </h2>

          <ul className="space-y-4">
            {destination.tips.map((item) => (
              <li key={item} className="flex gap-3 leading-8">
                <span>💡</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-10">
          <Link
            href="/"
            className="inline-flex rounded-full bg-emerald-800 px-7 py-3 font-bold text-white transition hover:bg-emerald-900"
          >
            استكشف وجهات أخرى
          </Link>
        </div>
      </div>

      <footer className="mt-10 border-t border-stone-200 py-6 text-center text-sm text-stone-500">
        © {new Date().getFullYear()} Yemen Explorer — اكتشف اليمن
      </footer>
    </main>
  );
}
