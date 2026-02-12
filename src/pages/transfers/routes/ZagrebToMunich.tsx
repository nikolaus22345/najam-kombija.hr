import TransferLandingPage from "../../../components/TransferLandingPage";

const ZagrebToMunich = () => {
    return (
        <TransferLandingPage
            origin="Zagreb"
            destination="Munich"
            distanceKm={550}
            durationMin={360}
            price={580}
        />
    );
};

export default ZagrebToMunich;
