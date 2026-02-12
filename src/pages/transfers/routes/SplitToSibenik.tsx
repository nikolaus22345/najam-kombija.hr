import TransferLandingPage from "../../../components/TransferLandingPage";

const SplitToSibenik = () => {
    return (
        <TransferLandingPage
            origin="Split"
            destination="Šibenik"
            distanceKm={85}
            durationMin={75}
            price={100}
        />
    );
};

export default SplitToSibenik;
