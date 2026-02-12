import TransferLandingPage from "@/components/TransferLandingPage";

export default function SenjToZagreb() {
  return (
    <TransferLandingPage
      origin="Zagreb"
      destination="Senj"
      distanceKm={160}
      durationMin={120}
      price={180}
      imageUrl="/assets/hero-highway.jpg"
    />
  );
}
