import TransferLandingPage from "@/components/TransferLandingPage";

const ZagrebToPassau = () => {
  return (
    <TransferLandingPage
      origin="Zagreb"
      destination="Passau"
      distanceKm={480}
      durationMin={330}
      price={340}
    />
  );
};

export default ZagrebToPassau;