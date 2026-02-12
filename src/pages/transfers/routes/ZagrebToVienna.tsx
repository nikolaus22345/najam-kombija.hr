import TransferLandingPage from "../../../components/TransferLandingPage";

const ZagrebToVienna = () => {
    return (
        <TransferLandingPage
            title="Transfer Zagreb to Vienna"
            description="Reliable private taxi transfer from Zagreb to Vienna (Wien). Travel to Austria in comfort with our premium vehicles and professional drivers."
            from="Zagreb"
            to="Vienna"
            distance="370 km"
            duration="4h"
            price="380 €"
            features={[
                "International transfer",
                "Highway tolls included",
                "Comfortable long-distance travel",
                "Stops on request"
            ]}
        />
    );
};

export default ZagrebToVienna;
