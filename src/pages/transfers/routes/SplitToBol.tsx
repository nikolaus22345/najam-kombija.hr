import TransferLandingPage from "../../../components/TransferLandingPage";

const SplitToBol = () => {
    return (
        <TransferLandingPage
            origin="Split"
            destination="Bol (Brač)"
            distanceKm={55}
            durationMin={90}
            price={110}
        />
    );
};

export default SplitToBol;
