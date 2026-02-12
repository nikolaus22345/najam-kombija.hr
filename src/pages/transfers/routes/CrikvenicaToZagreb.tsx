import TransferLandingPage from "@/components/TransferLandingPage";

export default function CrikvenicaToZagreb() {
  return (
    <TransferLandingPage
      origin="Zagreb"
      destination="Crikvenica"
      distanceKm={170}
      durationMin={120}
      price={190}
      imageUrl="/assets/hero-highway.jpg"
    />
  );
}
