import { DisputeReason } from "services/graphql/generated";

const DISPUTE_REASON_TITLES: Record<DisputeReason, string> = {
  [DisputeReason.CompromisedCard]: "Compromised Card",
  [DisputeReason.LostCard]: "Lost Card",
  [DisputeReason.Other]: "Other",
  [DisputeReason.ProductCancelled]: "Product Cancelled",
  [DisputeReason.ProductDefective]: "Product Defective",
  [DisputeReason.ProductNotAsDescribed]: "Product Not as Described",
  [DisputeReason.ProductNotReceived]: "Product Not Received",
  [DisputeReason.ProductReturned]: "Product Returned",
  [DisputeReason.StolenCard]: "Stolen Card",
  [DisputeReason.WrongAmount]: "Wrong Amount",
};

export { DISPUTE_REASON_TITLES };
