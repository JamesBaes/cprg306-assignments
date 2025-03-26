import Link from "next/link";

export default function RootPage() {
  return (
    <>
      <main className="bg-black h-screen">
        <h1 className="text-slate-50 text-5xl font-semibold text-center">CPRG 306: Web Development 2 - Assignments</h1>
        <Link href="/week-2" className="text-slate-50 text-2xl text-center">
          <p>Week 2 Assignment</p>
        </Link>
        <Link href="/week-3" className="text-slate-50 text-2xl text-center">
          <p>Week 3 Assignment</p>
        </Link>
        <Link href="/week-4" className="text-slate-50 text-2xl text-center">
          <p>Week 4 Assignment</p>
        </Link>
        <Link href="/week-5" className="text-slate-50 text-2xl text-center">
          <p>Week 5 Assignment</p>
        </Link>
        <Link href="/week-6" className="text-slate-50 text-2xl text-center">
          <p>Week 6 Assignment</p>
        </Link>
        <Link href="/week-7" className="text-slate-50 text-2xl text-center">
          <p>Week 7 Assignment</p>
        </Link>
        <Link href="/week-8" className="text-slate-50 text-2xl text-center">
          <p>Week 8 Assignment</p>
        </Link>
        <Link href="/week-9" className="text-slate-50 text-2xl text-center">
          <p>Week 9 Assignment</p>
        </Link>
      </main>
    </>
  );
}
