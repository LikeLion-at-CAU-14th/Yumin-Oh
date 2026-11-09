import Link from "next/link";
import { notFound } from "next/navigation";
import { getAlbum } from "@/data/albums";
import Image from "next/image";
import { Metadata } from "next";

// 과제: generateMetadata로 앨범마다 title, description 다르게 넣기
// 과제: generateMetadata에 openGraph 추가해서 앨범 표지가 링크 미리보기에 뜨게 하기
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const album = getAlbum(id);

  if (!album) {
    return { title: "앨범을 찾을 수 없어요" };
  }

  return {
    title: `${album.title} - ${album.artist}`,
    description: album.description,
    // 링크 미리보기
    openGraph: {
      title: `${album.title} - ${album.artist}`,
      description: album.description,
      images: [album.cover],
    },
  };
}

export default async function AlbumPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const album = getAlbum(id);

  if (!album) {
    notFound();
  }

  return (
    <main className="container">
      <Link href="/" className="back-link">
        ← 목록으로
      </Link>

      <div className="detail">
        {/* 이미지 최적화 */}
        <Image
          src={album.cover}
          alt={`${album.artist}-${album.title} 앨범 표지`}
          width={600}
          height={600}
          className="detail-cover"
        />
        <div className="detail-info">
          <div className="detail-genre">
            {album.genre} · {album.year}
          </div>
          {/* 앨범 제목 div 대신 h1 */}
          <h1 className="detail-title">{album.title}</h1>
          <div className="detail-artist">{album.artist}</div>
          <p className="detail-desc">{album.description}</p>

          <div className="track-heading">수록곡</div>
          <ol className="track-list">
            {album.tracks.map((track) => (
              <li key={track}>{track}</li>
            ))}
          </ol>
        </div>
      </div>
    </main>
  );
}