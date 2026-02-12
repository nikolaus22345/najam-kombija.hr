import TransferLandingPage from "../../../components/TransferLandingPage";

const SplitToTrogir = () => {
    return (
        <TransferLandingPage
            origin="Split"
            destination="Trogir"
            distanceKm={27}
            durationMin={30}
            price={50}
        />
    );
};

export default SplitToTrogir;
