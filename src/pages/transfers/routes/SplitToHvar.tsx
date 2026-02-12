import TransferLandingPage from "../../../components/TransferLandingPage";

const SplitToHvar = () => {
    return (
        <TransferLandingPage
            origin="Split"
            destination="Hvar"
            distanceKm={68}
            durationMin={90}
            price={120}
        />
    );
};

export default SplitToHvar;
