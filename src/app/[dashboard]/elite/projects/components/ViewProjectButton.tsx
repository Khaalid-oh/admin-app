// src/components/dashboard/ViewProjectsButton.tsx
"use client";
import { useRouter } from "next/navigation";

export default function ViewProjectsButton() {
  const router = useRouter();
  return (
    <button
      className="bg-blue-600 text-white px-4 py-2 rounded"
      onClick={() => router.push("/elite/projects/projects_")}
    >
      View Projects
    </button>
  );
}
