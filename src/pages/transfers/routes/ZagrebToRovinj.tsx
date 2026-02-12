import TransferLandingPage from "@/components/TransferLandingPage";

export default function ZagrebToRovinj() {
  return (
    <TransferLandingPage
      origin="Zagreb"
      destination="Rovinj"
      distanceKm={250}
      durationMin={180}
      price={260}
      imageUrl="/assets/hero-highway.jpg"
    />
  );
}