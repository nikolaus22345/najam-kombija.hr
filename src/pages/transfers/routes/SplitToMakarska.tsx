import TransferLandingPage from "../../../components/TransferLandingPage";

const SplitToMakarska = () => {
    return (
        <TransferLandingPage
            origin="Split"
            destination="Makarska"
            distanceKm={65}
            durationMin={60}
            price={80}
        />
    );
};

export default SplitToMakarska;
