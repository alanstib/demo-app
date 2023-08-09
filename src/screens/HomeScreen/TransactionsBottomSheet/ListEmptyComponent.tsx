import { ScreenSubContainer } from "components/atoms";
import { ErrorUI } from "components/molecules";
import { FilterData } from "./constants";
import { EmptyUI } from "./EmptyUI";
import { LoadingPlaceholder } from "./LoadingPlaceholder";

type ListEmptyComponentProps = {
  loading: boolean;
  error: boolean;
  selectedFilters: FilterData;
  searchTextForQuery: string;
  refetch: () => void;
};

const ListEmptyComponent = ({
  loading,
  error,
  refetch,
  selectedFilters,
  searchTextForQuery,
}: ListEmptyComponentProps) => {
  if (loading) {
    return <LoadingPlaceholder />;
  }

  if (error) {
    return (
      <ScreenSubContainer paddingTop={"$6"} alignItems={"center"}>
        <ErrorUI
          bodyText={"We couldn't load your transactions."}
          handleTryAgain={refetch}
        />
      </ScreenSubContainer>
    );
  }

  return (
    <EmptyUI searchTextForQuery={searchTextForQuery} selectedFilters={selectedFilters} />
  );
};

export { ListEmptyComponent };
