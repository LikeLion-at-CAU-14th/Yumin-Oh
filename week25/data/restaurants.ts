// data/restaurants.ts
export type Restaurant = {
  id: number;
  name: string;
  category: string;
  emoji: string;
  menu: string;
  price: number;
  comment: string;
};

export const restaurants: Restaurant[] = [
  {
    id: 1,
    name: "샤브토랑",
    category: "일식",
    emoji: "🥬",
    menu: "샤브샤브",
    price: 7900,
    comment: "속 편한 가성비 맛집",
  },
  {
    id: 2,
    name: "은희네 닭떡볶이",
    category: "한식",
    emoji: "🫕",
    menu: "닭떡볶이",
    price: 18000,
    comment: "매콤달콤 따뜻한 맛",
  },
  {
    id: 3,
    name: "기꾸스시",
    category: "일식",
    emoji: "🍣",
    menu: "기꾸초밥",
    price: 12000,
    comment: "신선한 초밥과 다양한 메뉴",
  },
  {
    id: 4,
    name: "잭슨피자",
    category: "양식",
    emoji: "🍕",
    menu: "바질 페스토 피자",
    price: 13800,
    comment: "향긋한 바질 페스토와 부드러운 치즈",
  },
  {
    id: 5,
    name: "봉평면옥",
    category: "한식",
    emoji: "🍜",
    menu: "들기름 막국수",
    price: 12000,
    comment: "고소하고 깔끔한 맛!",
  },
  {
    id: 6,
    name: "춘리 마라탕",
    category: "중식",
    emoji: "🍲",
    menu: "마라탕",
    price: 8000,
    comment: "자극적인 맛이 땡길 때",
  },
];
