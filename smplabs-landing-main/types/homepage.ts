export interface HomepageData {
  siswa: number
  prestasi: number
  program: string
  guru: number
  news: NewsItem[]
}

export interface NewsItem {
  id: number
  title: string
  excerpt: string
  date: string
  image: string
  category: string
}
