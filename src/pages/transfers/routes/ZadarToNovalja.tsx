import TransferLandingPage from "../../../components/TransferLandingPage";

const ZadarToNovalja = () => {
    return (
        <TransferLandingPage
            origin="Zadar"
            destination="Novalja (Pag)"
            distanceKm={85}
            durationMin={90}
            price={100}
        />
    );
};

export default ZadarToNovalja;
