"use client";
import Link from "next/link";

// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";
 
export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  
  const login = async () => {
    await gitHubSignIn();
  };

  const logout = async () => {
    await firebaseSignOut();
  };

  return (
    <main className="bg-indigo-800 p-5 min-h-screen">
      <h1 className="font-mono font-extrabold text-4xl text-center text-white">Week 9</h1>
      <div className="flex justify-center font-mono text-center text-xl text-white">
        {user ? (
          <div>
            <br/>
            <h2 className="text-2xl font-bold italic">Welcome, {user.displayName || "User"}!</h2>
            <p>Click <Link className="hover:text-slate-300 hover:underline" href="/week-9/shopping-list">here</Link> to view the Shopping list.</p>
            <br/>
            

            <br/>
            <br/>
            <button className="bg-yellow-500 w-36 h-10 rounded-lg border-2 border-black hover:bg-yellow-600 active:bg-red-600" onClick={logout}>Logout</button>
          </div>
        ) : (
          <div>
            <br/>
            <button className="bg-yellow-500 w-64 h-10 rounded-lg border-2 border-black hover:bg-yellow-600 active:bg-red-600" onClick={login}>Login with GitHub</button>
          </div>
        )}
      </div>
    </main>
  );
};