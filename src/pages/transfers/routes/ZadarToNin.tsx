import TransferLandingPage from "../../../components/TransferLandingPage";

const ZadarToNin = () => {
    return (
        <TransferLandingPage
            origin="Zadar"
            destination="Nin"
            distanceKm={17}
            durationMin={20}
            price={40}
        />
    );
};

export default ZadarToNin;
