import TransferLandingPage from "@/components/TransferLandingPage";

export default function SplitToDubrovnik() {
  return (
    <TransferLandingPage
      origin="Split"
      destination="Dubrovnik"
      distanceKm={230}
      durationMin={210}
      price={280}
      imageUrl="/assets/hero-highway.jpg"
    />
  );
}
