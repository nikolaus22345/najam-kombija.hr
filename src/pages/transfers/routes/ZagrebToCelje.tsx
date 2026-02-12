import TransferLandingPage from "@/components/TransferLandingPage";

const ZagrebToCelje = () => {
  return (
    <TransferLandingPage
      origin="Zagreb"
      destination="Celje"
      distanceKm={110}
      durationMin={90}
      price={100}
    />
  );
};

export default ZagrebToCelje;