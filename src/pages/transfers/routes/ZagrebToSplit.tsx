import TransferLandingPage from "@/components/TransferLandingPage";

const ZagrebToSplit = () => {
  return (
    <TransferLandingPage
      origin="Zagreb"
      destination="Split"
      distanceKm={380}
      durationMin={240}
      price={250}
      imageUrl="/assets/hero-highway.jpg" // Placeholder until specific image is added
    />
  );
};

export default ZagrebToSplit;
