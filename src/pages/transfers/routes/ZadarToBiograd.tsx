import TransferLandingPage from "../../../components/TransferLandingPage";

const ZadarToBiograd = () => {
    return (
        <TransferLandingPage
            origin="Zadar"
            destination="Biograd na Moru"
            distanceKm={28}
            durationMin={30}
            price={50}
        />
    );
};

export default ZadarToBiograd;
