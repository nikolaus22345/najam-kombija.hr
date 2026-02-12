import TransferLandingPage from "@/components/TransferLandingPage";

const ZagrebToSisak = () => {
  return (
    <TransferLandingPage
      origin="Zagreb"
      destination="Sisak"
      distanceKm={55}
      durationMin={45}
      price={70}
    />
  );
};

export default ZagrebToSisak;