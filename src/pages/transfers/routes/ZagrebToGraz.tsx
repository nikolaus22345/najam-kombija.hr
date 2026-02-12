import TransferLandingPage from "../../../components/TransferLandingPage";

const ZagrebToGraz = () => {
    return (
        <TransferLandingPage
            title="Transfer Zagreb to Graz"
            description="Direct private transfer from Zagreb to Graz, Austria. Enjoy a smooth ride to Graz city center or Graz Airport."
            from="Zagreb"
            to="Graz"
            distance="185 km"
            duration="2h 15min"
            price="240 €"
            features={[
                "Airport or City transfer",
                "Austrian vignette included",
                "Safe and reliable",
                "Business class available"
            ]}
        />
    );
};

export default ZagrebToGraz;
