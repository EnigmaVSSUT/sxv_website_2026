import Image from "next/image";
import { clubs } from "@/utils/clubData";

export default function ClubsPage() {
  return (
    <section className="min-h-screen bg-black px-6 py-24 text-white">
      {/* PAGE HEADING */}
      <div className="mb-20 text-center">
        <h1 className="text-4xl font-bold tracking-wide">
          ORGANIZING CLUBS & SOCIETIES
        </h1>
        <p className="mt-4 text-gray-400">
          Explore the vibrant student communities of our college
        </p>
      </div>

      {/*MASONRY LAYOUT  */}
      <div className="columns-1 gap-8 sm:columns-2 lg:columns-3">
        {clubs.map((club) => (
          <div key={club.id} className="mb-8 break-inside-avoid">
            {/*  CUSTOM CARD (not imported) */}
            <div className="group relative overflow-hidden rounded-[32px] bg-[#0B0F19]">
              {/* IMAGE */}
              <div className="relative w-full">
                <Image
                  src={club.image.trim()}
                  alt={club.name}
                  width={600}
                  height={800}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-black/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* CONTENT */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  {/* NAME (always visible) */}
                  <h3 className="text-lg font-semibold tracking-wide">
                    {club.name}
                  </h3>

                  {/* DESCRIPTION (appears on hover) */}
                  <p className="mt-2 text-sm text-gray-300 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    {club.description}
                  </p>
                </div>

                {/* CURVED AMBIENT GLOW */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-indigo-500/20 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-60" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
