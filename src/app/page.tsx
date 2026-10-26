

"use client";

import Link from "next/link";
import { destinations } from "@/lib/destinations";
import { useMemo, useState } from "react";



const categories = ["الكل", "تاريخي", "طبيعي", "بحري", "تراثي", "جبلي"];

export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("الكل");
 const [favorites, setFavorites] = useState<string[]>([]);
  const [menuOpen, setMenuOpen] = useState(false);

  const filteredDestinations = useMemo(() => {
    const query = search.trim().toLowerCase();

    return destinations.filter((place) => {
      const matchesCategory =
        category === "الكل" || place.category === category;

      const matchesSearch =
        !query ||
        `${place.name} ${place.region} ${place.category} ${place.description}`
          .toLowerCase()
          .includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  
function toggleFavorite(id: string) {
  setFavorites((current) =>
    current.includes(id)
      ? current.filter((item) => item !== id)
      : [...current, id]
  );
}


  return (
    <main
      dir="rtl"
      className="min-h-screen bg-[#faf9f6] text-[#23352d]"
    >
      {/* شريط التنقل */}
      <header className="sticky top-0 z-50 border-b border-[#e8e5dc] bg-[#faf9f6]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#234a38] text-2xl text-[#e8c995]">
              ✳
            </span>
            <span>
              <span className="block text-lg font-black tracking-tight">
                اكتشف اليمن
              </span>
              <span
                dir="ltr"
                className="block text-[10px] font-semibold tracking-[0.2em] text-[#8a806d]"
              >
                YEMEN EXPLORER
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-semibold lg:flex">
            <a href="#home" className="text-[#b4874d]">
              الرئيسية
            </a>
            <a href="#destinations" className="transition hover:text-[#b4874d]">
              الوجهات السياحية
            </a>
            <a href="#about" className="transition hover:text-[#b4874d]">
              عن اليمن
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#destinations"
              className="hidden rounded-full bg-[#234a38] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#183628] sm:inline-flex"
            >
              اكتشف الأماكن
            </a>

            <button
              type="button"
              aria-label="فتح القائمة"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#e4e0d6] text-xl lg:hidden"
            >
              {menuOpen ? "×" : "☰"}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="flex flex-col gap-4 border-t border-[#e8e5dc] px-6 py-5 text-sm font-semibold lg:hidden">
            <a href="#home" onClick={() => setMenuOpen(false)}>
              الرئيسية
            </a>
            <a href="#destinations" onClick={() => setMenuOpen(false)}>
              الوجهات السياحية
            </a>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              عن اليمن
            </a>
          </nav>
        )}
      </header>

      {/* الواجهة الرئيسية */}
      <section id="home" className="px-4 pt-5 sm:px-6 lg:px-8">
        <div
          className="relative mx-auto flex min-h-[540px] max-w-7xl items-center overflow-hidden rounded-[2rem] bg-[#203a2d] bg-cover bg-center sm:min-h-[620px]"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(18,37,28,.15), rgba(18,37,28,.88)), url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=90')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#172d22]/70 via-transparent to-black/10" />

          <div className="relative z-10 w-full max-w-3xl px-6 py-16 text-white sm:px-12 lg:px-16">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm backdrop-blur-md">
              <span className="text-[#e9c98e]">✦</span>
              أرض الحضارة والتاريخ والجمال
            </div>

            <h1 className="text-4xl font-black leading-[1.35] tracking-tight sm:text-6xl lg:text-7xl">
              اكتشف اليمن،
              <br />
              <span className="text-[#e9c98e]">حكاية لا تُنسى</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/85 sm:text-lg sm:leading-9">
              من المدن التاريخية العريقة إلى الجزر الساحرة والجبال الخضراء،
              ابدأ رحلتك لاكتشاف كنوز اليمن ومعالمه الفريدة.
            </p>

            <a
              href="#destinations"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#e9c98e] px-7 py-4 font-extrabold text-[#23352d] transition hover:bg-white"
            >
              اكتشف الوجهات
              <span aria-hidden="true">←</span>
            </a>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/25 pt-6 text-sm text-white/80">
              <span>✦ تاريخ عريق</span>
              <span>✦ طبيعة متنوعة</span>
              <span>✦ تراث أصيل</span>
            </div>
          </div>

          <div className="absolute bottom-7 left-7 hidden rounded-2xl border border-white/20 bg-black/20 p-4 text-white backdrop-blur-md md:block">
            <p className="text-xs text-white/70">وجهتك القادمة</p>
            <p className="mt-1 font-bold">اليمن · اكتشاف بلا حدود</p>
          </div>
        </div>
      </section>

      {/* البحث */}
      <section className="relative z-20 mx-auto -mt-7 max-w-5xl px-5 sm:px-8">
        <div className="grid gap-4 rounded-2xl border border-[#ece8df] bg-white p-4 shadow-xl shadow-[#263a2e]/5 sm:grid-cols-[1fr_auto] sm:items-center sm:p-5">
          <div className="flex items-center gap-4 px-2">
            <span className="text-2xl text-[#b4874d]" aria-hidden="true">
              ⌕
            </span>
            <div className="flex-1">
              <label
                htmlFor="destination-search"
                className="mb-1 block text-xs font-bold text-[#8b8b7d]"
              >
                أين تريد أن تذهب؟
              </label>
              <input
                id="destination-search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="ابحث عن مدينة أو معلم سياحي..."
                className="w-full bg-transparent py-1 text-sm outline-none placeholder:text-[#aaa99f] sm:text-base"
              />
            </div>
          </div>

          <a
            href="#destinations"
            className="rounded-xl bg-[#234a38] px-7 py-4 text-center text-sm font-bold text-white transition hover:bg-[#183628]"
          >
            ابحث عن وجهتك
          </a>
        </div>
      </section>

      {/* الوجهات السياحية */}
      <section
        id="destinations"
        className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28"
      >
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-extrabold tracking-wide text-[#b4874d]">
              وجهات تستحق الاكتشاف
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              اختر مغامرتك القادمة
            </h2>
            <p className="mt-4 max-w-xl leading-8 text-[#7b8077]">
              تعرّف على تنوع الوجهات اليمنية، من عبق التاريخ إلى سحر الطبيعة.
            </p>
          </div>

          <span className="text-sm text-[#7b8077]">
            {filteredDestinations.length} وجهات معروضة
          </span>
        </div>

        {/* تصفية الوجهات */}
        <div className="mt-9 flex flex-wrap gap-3">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              aria-pressed={category === item}
              className={`rounded-full border px-5 py-3 text-sm font-bold transition ${
                category === item
                  ? "border-[#234a38] bg-[#234a38] text-white"
                  : "border-[#e5e1d7] bg-white text-[#666c61] hover:border-[#234a38]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* بطاقات الوجهات */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredDestinations.map((place) => (
            <article
              key={place.id}
              className="group overflow-hidden rounded-2xl border border-[#ebe7de] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#23352d]/10"
            >
              <div className="relative h-60 overflow-hidden bg-[#e7e3d8]">
                <div
                  role="img"
                  aria-label={`صورة استرشادية لوجهة ${place.name}`}
                  className="h-full w-full bg-cover bg-center transition duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url("${place.image}")` }}
                />

                <span className="absolute right-4 top-4 rounded-full bg-white/95 px-3 py-2 text-xs font-bold text-[#234a38]">
                  {place.category}
                </span>

                <button
                  type="button"
                  onClick={() => toggleFavorite(place.id)}
                  aria-label={
                    favorites.includes(place.id)
                      ? `إزالة ${place.name} من المفضلة`
                      : `إضافة ${place.name} إلى المفضلة`
                  }
                  aria-pressed={favorites.includes(place.id)}
                  className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-xl transition hover:scale-110"
                >
                  <span
                    className={
                      favorites.includes(place.id)
                        ? "text-red-500"
                        : "text-[#74776f]"
                    }
                  >
                    {favorites.includes(place.id) ? "♥" : "♡"}
                  </span>
                </button>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#9a8666]">
                  <span>{place.symbol}</span>
                  {place.region}
                </div>

                <h3 className="mt-3 text-xl font-extrabold">{place.name}</h3>

                <p className="mt-3 min-h-[56px] text-sm leading-7 text-[#777d73]">
                  {place.description}
                </p>

                <div className="mt-5 border-t border-[#eeeae2] pt-4">
                 
              <Link
                href={`/destinations/${place.id}`}
                className="inline-flex items-center justify-center rounded-full bg-[#234a38] px-5 py-3 font-bold text-white transition hover:bg-[#183628]"
               >
                   اكتشف الوجهة
              </Link>

                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredDestinations.length === 0 && (
          <div className="mt-8 rounded-2xl border border-dashed border-[#d8d4c9] bg-white px-6 py-16 text-center">
            <p className="text-xl font-extrabold">لم نعثر على وجهة مطابقة</p>
            <p className="mt-3 text-sm text-[#777d73]">
              جرّب اسمًا آخر أو اختر تصنيفًا مختلفًا.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearch("");
                setCategory("الكل");
              }}
              className="mt-5 rounded-full bg-[#234a38] px-6 py-3 text-sm font-bold text-white"
            >
              عرض جميع الوجهات
            </button>
          </div>
        )}
      </section>

      {/* نبذة عن المشروع */}
      <section id="about" className="bg-[#234a38] px-5 py-20 text-white sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-bold text-[#e9c98e]">
              حكاية أرض عريقة
            </p>
            <h2 className="mt-4 text-3xl font-black leading-relaxed sm:text-4xl">
              اليمن أكثر من وجهة،
              <br />
              إنه عالم من الحكايات.
            </h2>
          </div>
          <div>
            <p className="leading-9 text-white/80">
              نهدف إلى تقديم دليل سياحي رقمي يساعد الزوار على التعرف على
              تاريخ اليمن وتنوعه الطبيعي والثقافي، ويجمع معلومات الوجهات
              في تجربة واحدة سهلة الاستخدام.
            </p>
            <a
              href="#destinations"
              className="mt-6 inline-flex items-center gap-3 font-bold text-[#e9c98e] hover:text-white"
            >
              ابدأ الاستكشاف
              <span aria-hidden="true">←</span>
            </a>
          </div>
        </div>
      </section>

      {/* تذييل الصفحة */}
      <footer className="bg-[#192f24] px-5 py-8 text-white/70 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-extrabold text-white">اكتشف اليمن</p>
            <p className="mt-1 text-xs">Yemen Explorer</p>
          </div>
          <p>دليل سياحي رقمي للتعريف بجمال اليمن وتراثه.</p>
          <p dir="ltr">© 2026 Yemen Explorer</p>
        </div>
      </footer>
    </main>
  );
}
