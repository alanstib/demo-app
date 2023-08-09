import { TransactionType } from "services/graphql/generated";

const dropDownGradientColors = ["#3E3E3E", "#1F1F1F"];

type SortId = "recent" | "oldest" | "highest" | "lowest";
type FilterId = TransactionType.Dispute | "last-12-months";
type FilterOrSortId = SortId | FilterId;

const sortSelectionData = [
  {
    id: "recent" as SortId,
    text: "Recent - Old",
    isSelected: true,
  },
  {
    id: "oldest" as SortId,
    text: "Old - Recent",
    isSelected: false,
  },
  {
    id: "highest" as SortId,
    text: "Amount (highest)",
    isSelected: false,
  },
  {
    id: "lowest" as SortId,
    text: "Amount (lowest)",
    isSelected: false,
  },
];

const filterSelectionData = [
  {
    id: "last-12-months" as FilterId,
    text: "Last 12 months",
    isSelected: false,
  },
  {
    id: TransactionType.Dispute as FilterId,
    text: "Disputes",
    isSelected: false,
  },
];

const DEFAULT_SORTING_ID: SortId = "recent";

const filterAndSortSelectionData = [...sortSelectionData, ...filterSelectionData];

type FilterData = typeof filterSelectionData;
type SortData = typeof sortSelectionData;
type FilterAndSortData = typeof filterAndSortSelectionData;

export {
  dropDownGradientColors,
  sortSelectionData,
  filterSelectionData,
  filterAndSortSelectionData,
  DEFAULT_SORTING_ID,
};

export type { SortId, FilterId, FilterOrSortId, FilterAndSortData, FilterData, SortData };
