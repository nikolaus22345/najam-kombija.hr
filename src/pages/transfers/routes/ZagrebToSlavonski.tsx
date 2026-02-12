import TransferLandingPage from "@/components/TransferLandingPage";

export default function ZagrebToSlavonski() {
  return (
    <TransferLandingPage
      origin="Zagreb"
      destination="Slavonski Brod"
      distanceKm={190}
      durationMin={110}
      price={200}
      imageUrl="/assets/hero-highway.jpg"
    />
  );
}