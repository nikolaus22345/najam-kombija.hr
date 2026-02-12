import TransferLandingPage from "@/components/TransferLandingPage";

export default function UmagToZagreb() {
  return (
    <TransferLandingPage
      origin="Zagreb"
      destination="Umag"
      distanceKm={260}
      durationMin={180}
      price={270}
      imageUrl="/assets/hero-highway.jpg"
    />
  );
}
