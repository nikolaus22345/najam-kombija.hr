import TransferLandingPage from "../../../components/TransferLandingPage";

const ZagrebToGraz = () => {
    return (
        <TransferLandingPage
            origin="Zagreb"
            destination="Graz"
            distanceKm={185}
            durationMin={135}
            price={240}
        />
    );
};

export default ZagrebToGraz;
