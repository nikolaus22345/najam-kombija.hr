import TransferLandingPage from "../../../components/TransferLandingPage";

const SplitToOmis = () => {
    return (
        <TransferLandingPage
            origin="Split"
            destination="Omiš"
            distanceKm={25}
            durationMin={30}
            price={50}
        />
    );
};

export default SplitToOmis;
