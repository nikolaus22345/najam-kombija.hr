import TransferLandingPage from "@/components/TransferLandingPage";

export default function ZagrebToSisak() {
  return (
    <TransferLandingPage
      origin="Zagreb"
      destination="Sisak"
      distanceKm={60}
      durationMin={60}
      price={90}
      imageUrl="/assets/hero-highway.jpg"
    />
  );
}