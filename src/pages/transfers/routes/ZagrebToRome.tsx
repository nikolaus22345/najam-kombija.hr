import TransferLandingPage from "@/components/TransferLandingPage";

const ZagrebToRome = () => {
  return (
    <TransferLandingPage
      origin="Zagreb"
      destination="Rome"
      distanceKm={850}
      durationMin={600}
      price={600}
    />
  );
};

export default ZagrebToRome;