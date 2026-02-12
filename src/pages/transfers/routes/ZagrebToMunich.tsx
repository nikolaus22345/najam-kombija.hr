import TransferLandingPage from "../../../components/TransferLandingPage";

const ZagrebToMunich = () => {
    return (
        <TransferLandingPage
            title="Transfer Zagreb to Munich"
            description="Long-distance private transfer from Zagreb to Munich (München). Safe and comfortable journey through Slovenia and Austria to Germany."
            from="Zagreb"
            to="Munich"
            distance="550 km"
            duration="6h"
            price="580 €"
            features={[
                "Long-distance specialist",
                "All border crossings covered",
                "Refreshment stops included",
                "Large luggage capacity"
            ]}
        />
    );
};

export default ZagrebToMunich;
