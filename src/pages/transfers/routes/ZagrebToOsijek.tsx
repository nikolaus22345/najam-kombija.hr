import TransferLandingPage from "@/components/TransferLandingPage";

const ZagrebToOsijek = () => {
  return (
    <TransferLandingPage
      origin="Zagreb"
      destination="Osijek"
      distanceKm={280}
      durationMin={180}
      price={190}
    />
  );
};

export default ZagrebToOsijek;