import TransferLandingPage from "@/components/TransferLandingPage";

export default function ZagrebToRijeka() {
  return (
    <TransferLandingPage
      origin="Zagreb"
      destination="Rijeka"
      distanceKm={160}
      durationMin={120}
      price={180}
      imageUrl="/assets/hero-highway.jpg"
    />
  );
}