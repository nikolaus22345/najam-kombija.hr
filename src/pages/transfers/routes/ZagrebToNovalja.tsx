import TransferLandingPage from "@/components/TransferLandingPage";

export default function ZagrebToNovalja() {
  return (
    <TransferLandingPage
      origin="Zagreb"
      destination="Novalja"
      distanceKm={230}
      durationMin={210}
      price={260}
      imageUrl="/assets/hero-highway.jpg"
    />
  );
}