import TransferLandingPage from "@/components/TransferLandingPage";

const ZagrebToMilan = () => {
  return (
    <TransferLandingPage
      origin="Zagreb"
      destination="Milan"
      distanceKm={620}
      durationMin={420}
      price={430}
    />
  );
};

export default ZagrebToMilan;