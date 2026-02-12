import TransferLandingPage from "@/components/TransferLandingPage";

const ZagrebToMurter = () => {
    return (
        <TransferLandingPage
            origin="Zagreb"
            destination="Murter"
            distanceKm={340}
            durationMin={225}
            price={230}
        />
    );
};

export default ZagrebToMurter;
