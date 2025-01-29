import Link from "next/link";

export default function StudentInfo() {
  return (
    <main>
      <h1 class="text-slate-50">James Baes</h1>
      <Link href="https://github.com/JamesBaes/cprg306-assignments.git" 
            class="text-slate-50">
        https://github.com
      </Link>
    </main>
  );
}
