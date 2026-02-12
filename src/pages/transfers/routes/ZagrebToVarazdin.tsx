import TransferLandingPage from "@/components/TransferLandingPage";

export default function ZagrebToVarazdin() {
  return (
    <TransferLandingPage
      origin="Zagreb"
      destination="Varaždin"
      distanceKm={85}
      durationMin={75}
      price={110}
      imageUrl="/assets/hero-highway.jpg"
    />
  );
}