import TransferLandingPage from "../../../components/TransferLandingPage";

const SplitToKorcula = () => {
    return (
        <TransferLandingPage
            origin="Split"
            destination="Korčula"
            distanceKm={145}
            durationMin={180}
            price={180}
        />
    );
};

export default SplitToKorcula;
