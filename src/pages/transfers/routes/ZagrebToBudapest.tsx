import TransferLandingPage from "@/components/TransferLandingPage";

const ZagrebToBudapest = () => {
  return (
    <TransferLandingPage
      origin="Zagreb"
      destination="Budapest"
      distanceKm={350}
      durationMin={240}
      price={240}
    />
  );
};

export default ZagrebToBudapest;