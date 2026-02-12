import TransferLandingPage from "@/components/TransferLandingPage";

const ZagrebToNovalja = () => {
  return (
    <TransferLandingPage
      origin="Zagreb"
      destination="Novalja"
      distanceKm={320}
      durationMin={210}
      price={220}
    />
  );
};

export default ZagrebToNovalja;