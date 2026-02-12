import TransferLandingPage from "@/components/TransferLandingPage";

const ZagrebToKarlovac = () => {
  return (
    <TransferLandingPage
      origin="Zagreb"
      destination="Karlovac"
      distanceKm={55}
      durationMin={45}
      price={70}
    />
  );
};

export default ZagrebToKarlovac;