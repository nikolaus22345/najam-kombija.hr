import TransferLandingPage from "@/components/TransferLandingPage";

export default function ZagrebToDubrovnik() {
  return (
    <TransferLandingPage
      origin="Zagreb"
      destination="Dubrovnik"
      distanceKm={600}
      durationMin={360}
      price={500}
      imageUrl="/assets/hero-highway.jpg"
    />
  );
}