import TransferLandingPage from "@/components/TransferLandingPage";

const ZagrebToBihac = () => {
  return (
    <TransferLandingPage
      origin="Zagreb"
      destination="Bihać"
      distanceKm={180}
      durationMin={135}
      price={150}
    />
  );
};

export default ZagrebToBihac;