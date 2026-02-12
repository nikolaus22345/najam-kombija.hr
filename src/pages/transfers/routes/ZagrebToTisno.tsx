import TransferLandingPage from "@/components/TransferLandingPage";

export default function ZagrebToTisno() {
  return (
    <TransferLandingPage
      origin="Zagreb"
      destination="Tisno"
      distanceKm={330}
      durationMin={210}
      price={290}
      imageUrl="/assets/hero-highway.jpg"
    />
  );
}