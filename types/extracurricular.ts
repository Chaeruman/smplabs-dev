export interface ExtracurricularActivity {
  name: string
  description: string
  participants: string
  benefit?: string | null
  cover?: string | null
  about?: string | null
}

export interface ExtracurricularCategory {
  title: string
  icon: string
  color: string
  bgColor: string
  activities: ExtracurricularActivity[]
}

export type ExtracurricularData = ExtracurricularCategory[]
