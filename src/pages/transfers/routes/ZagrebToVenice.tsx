import TransferLandingPage from "@/components/TransferLandingPage";

const ZagrebToVenice = () => {
  return (
    <TransferLandingPage
      origin="Zagreb"
      destination="Venice"
      distanceKm={420}
      durationMin={300}
      price={300}
    />
  );
};

export default ZagrebToVenice;