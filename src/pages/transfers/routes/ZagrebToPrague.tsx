import TransferLandingPage from "@/components/TransferLandingPage";

const ZagrebToPrague = () => {
  return (
    <TransferLandingPage
      origin="Zagreb"
      destination="Prague"
      distanceKm={680}
      durationMin={480}
      price={480}
    />
  );
};

export default ZagrebToPrague;