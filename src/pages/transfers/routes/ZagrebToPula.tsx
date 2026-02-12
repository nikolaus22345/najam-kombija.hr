import TransferLandingPage from "@/components/TransferLandingPage";

export default function ZagrebToPula() {
  return (
    <TransferLandingPage
      origin="Zagreb"
      destination="Pula"
      distanceKm={270}
      durationMin={210}
      price={250}
      imageUrl="/assets/hero-highway.jpg"
    />
  );
}