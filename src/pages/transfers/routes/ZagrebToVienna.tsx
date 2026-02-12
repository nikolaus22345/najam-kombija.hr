import TransferLandingPage from "../../../components/TransferLandingPage";

const ZagrebToVienna = () => {
    return (
        <TransferLandingPage
            origin="Zagreb"
            destination="Vienna"
            distanceKm={370}
            durationMin={240}
            price={380}
        />
    );
};

export default ZagrebToVienna;
