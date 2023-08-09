import { RestaurantLoadingPlaceholder } from "components/molecules";
import { Placeholder, Progressive } from "rn-placeholder";
import { Spacer } from "tamagui";

const LoadingPlaceholder = () => (
  <Placeholder Animation={Progressive}>
    <RestaurantLoadingPlaceholder />
    <Spacer size={"$7"} />
    <RestaurantLoadingPlaceholder />
  </Placeholder>
);

export { LoadingPlaceholder };
