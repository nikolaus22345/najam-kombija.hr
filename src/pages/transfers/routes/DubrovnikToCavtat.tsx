import TransferLandingPage from "../../../components/TransferLandingPage";

const DubrovnikToCavtat = () => {
    return (
        <TransferLandingPage
            origin="Dubrovnik"
            destination="Cavtat"
            distanceKm={20}
            durationMin={25}
            price={45}
        />
    );
};

export default DubrovnikToCavtat;
