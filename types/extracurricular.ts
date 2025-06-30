export interface ExtracurricularActivity {
  name: string
  description: string
  participants: string
  instructor?: string
  location?: string
  schedule?: string
}

export interface ExtracurricularCategory {
  title: string
  icon: string
  color: string
  bgColor: string
  activities: ExtracurricularActivity[]
}

export interface ExtracurricularData {
  categories: ExtracurricularCategory[]
}
