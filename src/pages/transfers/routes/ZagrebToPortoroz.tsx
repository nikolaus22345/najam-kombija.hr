import TransferLandingPage from "@/components/TransferLandingPage";

const ZagrebToPortoroz = () => {
  return (
    <TransferLandingPage
      origin="Zagreb"
      destination="Portorož"
      distanceKm={260}
      durationMin={195}
      price={180}
    />
  );
};

export default ZagrebToPortoroz;