import TransferLandingPage from "../../../components/TransferLandingPage";

const SplitToPrimosten = () => {
    return (
        <TransferLandingPage
            origin="Split"
            destination="Primošten"
            distanceKm={55}
            durationMin={50}
            price={70}
        />
    );
};

export default SplitToPrimosten;
