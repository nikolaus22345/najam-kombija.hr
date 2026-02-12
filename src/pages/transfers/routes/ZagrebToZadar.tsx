import TransferLandingPage from "@/components/TransferLandingPage";

export default function ZagrebToZadar() {
  return (
    <TransferLandingPage
      origin="Zagreb"
      destination="Zadar"
      distanceKm={290}
      durationMin={180}
      price={220}
      imageUrl="/assets/hero-highway.jpg"
    />
  );
}