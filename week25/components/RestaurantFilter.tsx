"use client";

import { useState } from "react";
import Link from "next/link";
import { restaurants } from "@/data/restaurants";


const categories = ["전체", ...new Set(restaurants.map((r) => r.category))];

export default function RestaurantFilter() {
  const [selected, setSelected] = useState("전체");

  const filtered =
    selected === "전체"
      ? restaurants
      : restaurants.filter((r) => r.category === selected);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelected(category)}
            className={
              selected === category
                ? "cursor-pointer rounded-full bg-orange-500 px-4 py-2 font-bold text-white"
                : "cursor-pointer rounded-full border border-orange-500 px-4 py-2 font-bold text-orange-500"
            }
          >
            {category}
          </button>
        ))}
      </div>

      <ul className="grid grid-cols-2 gap-4">
        {filtered.map((restaurant) => (
          <li key={restaurant.id}>
            <Link
              href={`/restaurants/${restaurant.id}`}
              className="flex flex-col gap-2 rounded-2xl bg-white p-6 shadow-sm hover:shadow-md"
            >
              <span className="text-4xl">{restaurant.emoji}</span>
              <span className="text-lg font-bold">{restaurant.name}</span>
              <span className="text-sm text-gray-500">
                {restaurant.category} · {restaurant.menu}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}