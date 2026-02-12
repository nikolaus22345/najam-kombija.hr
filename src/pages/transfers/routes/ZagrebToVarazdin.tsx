import TransferLandingPage from "@/components/TransferLandingPage";

const ZagrebToVarazdin = () => {
  return (
    <TransferLandingPage
      origin="Zagreb"
      destination="Varaždin"
      distanceKm={80}
      durationMin={60}
      price={80}
    />
  );
};

export default ZagrebToVarazdin;