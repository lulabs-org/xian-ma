/*
 * @Author: Mingxuan songmingxuan936@gmail.com
 * @Date: 2026-02-20 21:12:25
 * @LastEditors: Mingxuan songmingxuan936@gmail.com
 * @LastEditTime: 2026-02-23 21:02:13
 * @FilePath: /xian-ma/src/app/page.tsx
 * @Description:
 *
 * Copyright (c) 2026 by ${git_name_email}, All Rights Reserved.
 */
import Link from "next/link";
import { LoginModal } from "@/src/components/login-modal";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center py-32 px-8 bg-white font-sans">
      <h1 className="text-3xl font-semibold text-black text-center mb-6">
        XianMa
      </h1>
      <p className="text-lg text-zinc-600 text-center mb-12">
        AI-powered student behavior analysis and insights platform
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <LoginModal>
          <button className="flex h-12 w-full md:w-[158px] items-center justify-center gap-2 rounded-full bg-black text-white hover:bg-gray-800 transition-colors">
            Sign in
          </button>
        </LoginModal>
        <a
          href="https://nextjs.org/docs"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 w-full md:w-[158px] items-center justify-center rounded-full border border-black/10 hover:bg-black/5 transition-colors"
        >
          Sign up
        </a>
      </div>
    </main>
  );
}
