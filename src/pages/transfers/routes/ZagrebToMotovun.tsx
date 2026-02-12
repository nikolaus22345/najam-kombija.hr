import TransferLandingPage from "@/components/TransferLandingPage";

export default function ZagrebToMotovun() {
  return (
    <TransferLandingPage
      origin="Zagreb"
      destination="Motovun"
      distanceKm={260}
      durationMin={180}
      price={240}
      imageUrl="/assets/hero-highway.jpg"
    />
  );
}