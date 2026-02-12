import TransferLandingPage from "@/components/TransferLandingPage";

export default function ZagrebToOsijek() {
  return (
    <TransferLandingPage
      origin="Zagreb"
      destination="Osijek"
      distanceKm={280}
      durationMin={180}
      price={230}
      imageUrl="/assets/hero-highway.jpg"
    />
  );
}