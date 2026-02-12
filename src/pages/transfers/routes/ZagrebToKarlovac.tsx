import TransferLandingPage from "@/components/TransferLandingPage";

export default function ZagrebToKarlovac() {
  return (
    <TransferLandingPage
      origin="Zagreb"
      destination="Karlovac"
      distanceKm={55}
      durationMin={45}
      price={80}
      imageUrl="/assets/hero-highway.jpg"
    />
  );
}