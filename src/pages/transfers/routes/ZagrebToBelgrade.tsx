import TransferLandingPage from "@/components/TransferLandingPage";

const ZagrebToBelgrade = () => {
  return (
    <TransferLandingPage
      origin="Zagreb"
      destination="Belgrade"
      distanceKm={380}
      durationMin={240}
      price={250}
    />
  );
};

export default ZagrebToBelgrade;