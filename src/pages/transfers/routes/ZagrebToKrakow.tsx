import TransferLandingPage from "@/components/TransferLandingPage";

const ZagrebToKrakow = () => {
  return (
    <TransferLandingPage
      origin="Zagreb"
      destination="Krakow"
      distanceKm={620}
      durationMin={450}
      price={450}
    />
  );
};

export default ZagrebToKrakow;