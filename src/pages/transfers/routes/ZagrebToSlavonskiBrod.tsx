import TransferLandingPage from "@/components/TransferLandingPage";

const ZagrebToSlavonskiBrod = () => {
    return (
        <TransferLandingPage
            origin="Zagreb"
            destination="Slavonski Brod"
            distanceKm={200}
            durationMin={150}
            price={160}
        />
    );
};

export default ZagrebToSlavonskiBrod;
