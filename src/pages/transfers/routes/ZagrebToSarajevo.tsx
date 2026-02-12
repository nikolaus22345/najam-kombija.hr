import TransferLandingPage from "@/components/TransferLandingPage";

const ZagrebToSarajevo = () => {
  return (
    <TransferLandingPage
      origin="Zagreb"
      destination="Sarajevo"
      distanceKm={400}
      durationMin={270}
      price={270}
    />
  );
};

export default ZagrebToSarajevo;