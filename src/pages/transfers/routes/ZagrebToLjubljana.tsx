import TransferLandingPage from "../../../components/TransferLandingPage";

const ZagrebToLjubljana = () => {
    return (
        <TransferLandingPage
            title="Transfer Zagreb to Ljubljana"
            description="Book a comfortable private transfer from Zagreb to Ljubljana (Slovenia). Professional drivers, door-to-door service, and fixed prices."
            from="Zagreb"
            to="Ljubljana"
            distance="143 km"
            duration="1h 45min"
            price="160 €"
            features={[
                "Cross-border transfer",
                "Slovenian vignette included",
                "Door-to-door service",
                "English speaking driver"
            ]}
        />
    );
};

export default ZagrebToLjubljana;
