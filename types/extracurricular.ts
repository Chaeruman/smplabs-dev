export interface ExtracurricularActivity {
  name: string
  description: string
  participants: string
}

export interface ExtracurricularCategory {
  title: string
  icon: string
  color: string
  bgColor: string
  activities: ExtracurricularActivity[]
}
