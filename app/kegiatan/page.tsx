import ActivitiesHero from "@/components/activities/ActivitiesHero"
import ActivitiesTimeline from "@/components/activities/ActivitiesTimeline"
import UpcomingActivities from "@/components/activities/UpcomingActivities"

export const metadata = {
  title: "Kegiatan - SMP Labschool Jakarta",
  description: "Timeline kegiatan dan program unggulan SMP Labschool Jakarta.",
}

export default function ActivitiesPage() {
  return (
    <div className="pt-16">
      <ActivitiesHero />
      <ActivitiesTimeline />
      <UpcomingActivities />
    </div>
  )
}
