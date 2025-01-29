import Link from "next/link";

export default function RootPage() {
  return (
    <>
      <main class="bg-black h-screen">
        <h1 class="text-slate-50 text-5xl font-semibold">CPRG 306: Web Development 2 - Assignments</h1>
        <Link href="/week-2" class="text-slate-50 text-2xl">
          <br></br>Week 2 Assignment
        </Link>
      </main>
    </>
  );
}
