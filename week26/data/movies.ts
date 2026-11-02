export interface Movie {
  id: number;
  title: string;
  year: number;
  genre: string;
  director: string;
  description: string;
  image: string;
}

export const movies: Movie[] = [
  {
    id: 1,
    title: '겨울왕국',
    year: 2013,
    genre: '애니메이션, 판타지',
    director: '크리스 벅, 제니퍼 리',
    description:
      '얼음 마법의 힘을 지닌 엘사와 동생 안나의 이야기입니다.\n영원한 겨울에 갇힌 왕국을 구하기 위해 자매가 서로를 향한 사랑을 확인해 갑니다.',
    image: '/posters/frozen.jpg',
  },
  {
    id: 2,
    title: '스크림',
    year: 1996,
    genre: '공포, 스릴러',
    director: '웨스 크레이븐',
    description:
      '작은 마을에서 가면을 쓴 살인마가 연쇄 살인을 벌이는 이야기입니다.\n공포 영화의 규칙을 알고 있는 십대들이 정체를 알 수 없는 범인에게 쫓깁니다.',
    image: '/posters/scream.jpg',
  },
  {
    id: 3,
    title: '군체',
    year: 2026,
    genre: '좀비, 액션',
    director: '연상호',
    description:
      '정체불명의 감염 사태로 봉쇄된 건물 안, 고립된 생존자들의 이야기입니다.\n집단으로 진화하는 감염자들에 맞서 살아남기 위한 사투를 그립니다.',
    image: '/posters/colony.jpg',
  },
  {
    id: 4,
    title: '중경상림',
    year: 1994,
    genre: '로맨스, 드라마',
    director: '왕가위',
    description:
      '홍콩을 배경으로 서로 다른 두 남녀의 만남과 사랑을 그린 이야기입니다.\n도시의 쓸쓸함과 사랑의 순간을 감각적으로 담아냅니다.',
    image: '/posters/chungking express.jpg',
  },
  {
    id: 5,
    title: '듄',
    year: 2021,
    genre: 'SF',
    director: '드니 빌뇌브',
    description:
      '사막 행성 아라키스를 둘러싼 거대한 운명과 갈등을 그린 이야기입니다.\n한 청년이 자신의 운명을 받아들이며 성장해가는 과정을 담고 있습니다.',
    image: '/posters/dune.jpg',
  },
  {
    id: 6,
    title: '프로젝트 헤일메리',
    year: 2026,
    genre: 'SF, 드라마',
    director: '필 로드, 크리스토퍼 밀러',
    description:
      '기억을 잃은 채 우주 한복판에서 홀로 깨어난 남자의 이야기입니다.\n인류를 구할 마지막 임무를 수행하며 뜻밖의 동료를 만나게 됩니다.',
    image: '/posters/project-hail-mary.jpg',
  },
];