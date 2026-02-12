import TransferLandingPage from "@/components/TransferLandingPage";

export default function ZagrebToMakarska() {
  return (
    <TransferLandingPage
      origin="Zagreb"
      destination="Makarska"
      distanceKm={460}
      durationMin={270}
      price={400}
      imageUrl="/assets/hero-highway.jpg"
    />
  );
}