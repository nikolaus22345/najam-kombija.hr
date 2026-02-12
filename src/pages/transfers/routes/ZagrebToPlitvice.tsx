import TransferLandingPage from "@/components/TransferLandingPage";

export default function ZagrebToPlitvice() {
  return (
    <TransferLandingPage
      origin="Zagreb"
      destination="Plitvice Lakes"
      distanceKm={140}
      durationMin={120}
      price={160}
      imageUrl="/assets/hero-highway.jpg"
    />
  );
}
