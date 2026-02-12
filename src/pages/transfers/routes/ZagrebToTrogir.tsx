import TransferLandingPage from "@/components/TransferLandingPage";

export default function ZagrebToTrogir() {
  return (
    <TransferLandingPage
      origin="Zagreb"
      destination="Trogir"
      distanceKm={390}
      durationMin={240}
      price={260}
      imageUrl="/assets/hero-highway.jpg"
    />
  );
}