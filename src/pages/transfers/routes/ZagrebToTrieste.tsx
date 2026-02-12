import TransferLandingPage from "@/components/TransferLandingPage";

const ZagrebToTrieste = () => {
  return (
    <TransferLandingPage
      origin="Zagreb"
      destination="Trieste"
      distanceKm={240}
      durationMin={180}
      price={170}
    />
  );
};

export default ZagrebToTrieste;