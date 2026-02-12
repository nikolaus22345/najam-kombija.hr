import TransferLandingPage from "../../../components/TransferLandingPage";

const ZagrebToPorec = () => {
    return (
        <TransferLandingPage
            origin="Zagreb"
            destination="Poreč"
            distanceKm={240}
            durationMin={180}
            price={160}
        />
    );
};

export default ZagrebToPorec;
