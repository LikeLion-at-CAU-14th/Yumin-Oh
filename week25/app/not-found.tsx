import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center gap-6 py-16 text-center">
      <p className="text-6xl">🍽️</p>
      <h1 className="text-3xl font-bold">이 맛집은 도감에 없어요</h1>
      <p className="text-gray-600">주소가 잘못됐거나 사라진 페이지예요.</p>
      <Link
        href="/restaurants"
        className="rounded-full bg-orange-500 px-6 py-3 font-bold text-white hover:bg-orange-600"
      >
        맛집 목록으로 가기
      </Link>
    </div>
  );
}