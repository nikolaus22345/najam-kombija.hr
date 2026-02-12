import TransferLandingPage from "@/components/TransferLandingPage";

const ZagrebToTisno = () => {
  return (
    <TransferLandingPage
      origin="Zagreb"
      destination="Tisno"
      distanceKm={340}
      durationMin={225}
      price={230}
    />
  );
};

export default ZagrebToTisno;