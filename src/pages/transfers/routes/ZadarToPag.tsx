import TransferLandingPage from "../../../components/TransferLandingPage";

const ZadarToPag = () => {
    return (
        <TransferLandingPage
            origin="Zadar"
            destination="Pag"
            distanceKm={65}
            durationMin={70}
            price={80}
        />
    );
};

export default ZadarToPag;
