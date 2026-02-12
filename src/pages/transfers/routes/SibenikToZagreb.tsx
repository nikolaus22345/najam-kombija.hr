import TransferLandingPage from "@/components/TransferLandingPage";

export default function SibenikToZagreb() {
  return (
    <TransferLandingPage
      origin="Zagreb"
      destination="Šibenik"
      distanceKm={340}
      durationMin={210}
      price={300}
      imageUrl="/assets/hero-highway.jpg"
    />
  );
}
