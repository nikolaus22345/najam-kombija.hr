import TransferLandingPage from "@/components/TransferLandingPage";

export default function ZagrebToOpatija() {
  return (
    <TransferLandingPage
      origin="Zagreb"
      destination="Opatija"
      distanceKm={175}
      durationMin={135}
      price={190}
      imageUrl="/assets/hero-highway.jpg"
    />
  );
}