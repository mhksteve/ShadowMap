import { GuestGuideClient } from "@/components/guide/guest-guide-client";
import { demoGuide, getDemoGuidePois } from "@/lib/demo-data";

export default async function GuestGuidePage({
  params
}: {
  params: Promise<{ hostId: string }>;
}) {
  const { hostId } = await params;

  return (
    <GuestGuideClient
      hostId={hostId}
      hostName={demoGuide.hostName}
      stayName={demoGuide.stayName}
      location={demoGuide.location}
      summary={demoGuide.summary}
      lastUpdated={demoGuide.lastUpdated}
      pois={getDemoGuidePois()}
    />
  );
}
