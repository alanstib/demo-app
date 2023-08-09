import { OfferLoadingPlaceholder } from "components/molecules";
import { Placeholder, Progressive } from "rn-placeholder";

const LoadingPlaceholder = () => (
  <Placeholder Animation={Progressive}>
    <OfferLoadingPlaceholder />
    <OfferLoadingPlaceholder />
    <OfferLoadingPlaceholder />
    <OfferLoadingPlaceholder />
  </Placeholder>
);

export { LoadingPlaceholder };
