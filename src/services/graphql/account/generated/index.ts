import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  JSONObject: any;
  Void: any;
};

export type Account = {
  __typename?: "Account";
  accountOpenDate: Scalars["DateTime"];
  apr: Scalars["Float"];
  billingCycleDay: Scalars["Int"];
  chaUrl: Scalars["String"];
  creditLimit: Scalars["Float"];
  currentBalance: Scalars["Float"];
  daysPastDueDate: Scalars["Int"];
  dueAmount: Scalars["Float"];
  dueDate: Scalars["Date"];
  dueDateUtc: Scalars["DateTime"];
  highestCreditUtilised: Scalars["Float"];
  minimumPayment: Scalars["Float"];
  overLimitCredit: Scalars["Float"];
  reason?: Maybe<AccountStatusReason>;
  remainingMinimumPaymentDue: Scalars["Float"];
  remainingStatementBalance: Scalars["Float"];
  statementBalance: Scalars["Float"];
  status?: Maybe<AccountStatus>;
};

export enum AccountStatus {
  Active = "active",
  Closed = "closed",
  Suspended = "suspended",
}

export enum AccountStatusReason {
  Active = "active",
  Bankruptcy = "bankruptcy",
  ChargedOff = "chargedOff",
  CustomerInitiated = "customerInitiated",
  DebtManagementPlan = "debtManagementPlan",
  Deceased = "deceased",
  Delinquent = "delinquent",
  DisasterRecovery = "disasterRecovery",
  DisasterRecoveryCustomerInitiated = "disasterRecoveryCustomerInitiated",
  DisasterRecoveryGenericRestricted = "disasterRecoveryGenericRestricted",
  DisasterRecoveryIssuerInitiated = "disasterRecoveryIssuerInitiated",
  FirstPartyFraud = "firstPartyFraud",
  GenericRestricted = "genericRestricted",
  Hardship = "hardship",
  IssuerInitiated = "issuerInitiated",
  OfacConfirmed = "ofacConfirmed",
  Overlimit = "overlimit",
  PendingBankruptcy = "pendingBankruptcy",
  PendingSettlement = "pendingSettlement",
  ReturnedEmail = "returnedEmail",
  Settled = "settled",
  SuspectedFirstPartyFraud = "suspectedFirstPartyFraud",
  SuspectedOfac = "suspectedOfac",
  SuspectedThirdPartyFraud = "suspectedThirdPartyFraud",
  TermsOfUseViolation = "termsOfUseViolation",
  ThirdPartyFraud = "thirdPartyFraud",
}

export type Address = {
  __typename?: "Address";
  city?: Maybe<Scalars["String"]>;
  country?: Maybe<Scalars["String"]>;
  formattedAddress?: Maybe<Scalars["String"]>;
  googlePlaceId?: Maybe<Scalars["String"]>;
  lat?: Maybe<Scalars["Float"]>;
  line1?: Maybe<Scalars["String"]>;
  line2?: Maybe<Scalars["String"]>;
  lng?: Maybe<Scalars["Float"]>;
  postalCode?: Maybe<Scalars["String"]>;
  rawAddress: Scalars["String"];
  state?: Maybe<Scalars["String"]>;
};

export enum AddressType {
  Residence = "residence",
  Shipping = "shipping",
}

export type ApplicationAddressInput = {
  city: Scalars["String"];
  line1: Scalars["String"];
  line2: Scalars["String"];
  state: Scalars["String"];
  zip: Scalars["String"];
};

export type ApplicationDemographicInput = {
  address: ApplicationAddressInput;
  dateOfBirth: Scalars["String"];
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  ssn: Scalars["String"];
};

export type ApplicationFinancialInfoInput = {
  income: Scalars["Int"];
};

export enum ApplicationStatusEnum {
  Abandoned = "abandoned",
  ApplicantInputRequested = "applicantInputRequested",
  ApprovedProductAbandoned = "approvedProductAbandoned",
  ApprovedProductDeclined = "approvedProductDeclined",
  Duplicate = "duplicate",
  InError = "inError",
  InProgress = "inProgress",
  InReview = "inReview",
  Provisioned = "provisioned",
  Provisioning = "provisioning",
  ProvisioningError = "provisioningError",
  Rejected = "rejected",
}

export type ApplicationSubmittedContext = {
  __typename?: "ApplicationSubmittedContext";
  account?: Maybe<Account>;
  applicationStatus: ApplicationStatusEnum;
};

export enum BankAccountType {
  Checking = "checking",
  Savings = "savings",
}

export type BaseError = Error & {
  __typename?: "BaseError";
  code: Scalars["String"];
  message: Scalars["String"];
};

export type Card = {
  __typename?: "Card";
  activatedAt?: Maybe<Scalars["DateTime"]>;
  cardDesign: Scalars["String"];
  cardNumber: Scalars["String"];
  createdAt: Scalars["DateTime"];
  cvv: Scalars["String"];
  expirationDate: Scalars["String"];
  id: Scalars["String"];
  last4Digits: Scalars["String"];
  physicalCard: Scalars["Boolean"];
  status: CardStatus;
  updatedAt: Scalars["DateTime"];
};

export type CardArt = {
  __typename?: "CardArt";
  backImageUrl: Scalars["String"];
  frontImageUrl: Scalars["String"];
};

export enum CardArtType {
  Hypercard = "hypercard",
  Organization = "organization",
}

export enum CardCancelReason {
  Breach = "breach",
  Lost = "lost",
  Stolen = "stolen",
}

export type CardReplacement = {
  __typename?: "CardReplacement";
  newCard: ShortCard;
  note: Scalars["String"];
  oldCard: ShortCard;
};

export enum CardReplacementReason {
  Fraud = "fraud",
  LostOrStolen = "lostOrStolen",
}

export enum CardStatus {
  Active = "active",
  Canceled = "canceled",
  Closed = "closed",
  Failed = "failed",
  Fraud = "fraud",
  Frozen = "frozen",
  LostOrStolen = "lostOrStolen",
  Pending = "pending",
  ReplacementRequested = "replacementRequested",
  Transferred = "transferred",
}

export type Cardholder = {
  __typename?: "Cardholder";
  cardholderId: Scalars["String"];
  dateOfBirth: Scalars["Date"];
  dislikedRewardRuleIds: Array<Scalars["Int"]>;
  email: Scalars["String"];
  employmentStartDate?: Maybe<Scalars["Date"]>;
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  likedRewardRuleIds: Array<Scalars["Int"]>;
  middleName?: Maybe<Scalars["String"]>;
  nameOnCard?: Maybe<Scalars["String"]>;
  paperlessStatement: Scalars["Boolean"];
  phoneNumber: Scalars["String"];
  referralLink: Scalars["String"];
  residentialAddress: CardholderAddress;
  shippingAddress: CardholderAddress;
  stytchUserId: Scalars["String"];
  userId: Scalars["String"];
};

export type CardholderAddress = {
  __typename?: "CardholderAddress";
  addressLine1: Scalars["String"];
  addressLine2?: Maybe<Scalars["String"]>;
  city: Scalars["String"];
  state: Scalars["String"];
  type: AddressType;
  zip: Scalars["String"];
};

export enum CatalogCategory {
  All = "all",
  Popular = "popular",
  Premium = "premium",
}

export type Category = {
  __typename?: "Category";
  coverImage: Scalars["String"];
  iconImage: Scalars["String"];
  id: Scalars["String"];
  merchantImage: Scalars["String"];
  name: Scalars["String"];
};

export type CreateAchPaymentMethodInput = {
  accountNumber: Scalars["String"];
  accountType: BankAccountType;
  bankName: Scalars["String"];
  name: Scalars["String"];
  routingNumber: Scalars["String"];
};

export type CreateDisputeInput = {
  amount: Scalars["String"];
  merchantContactedDate?: InputMaybe<Scalars["String"]>;
  notes?: InputMaybe<Scalars["String"]>;
  productCancelledDate?: InputMaybe<Scalars["String"]>;
  productReturnedDate?: InputMaybe<Scalars["String"]>;
  reason: DisputeReason;
  transactionId: Scalars["Int"];
};

export type CreateInstantPaymentInput = {
  amount?: InputMaybe<Scalars["String"]>;
  methodId: Scalars["String"];
  type: PaymentType;
};

export enum CreditIndicator {
  Credit = "credit",
  Debit = "debit",
}

export enum DigitalWallet {
  ApplePay = "applePay",
  GooglePay = "googlePay",
}

export type Dispute = {
  __typename?: "Dispute";
  activity?: Maybe<Array<DisputeActivity>>;
  amount: Scalars["String"];
  createdAt?: Maybe<Scalars["DateTime"]>;
  id: Scalars["String"];
  merchantContactedDate?: Maybe<Scalars["Date"]>;
  notes: Scalars["String"];
  productCancelledDate?: Maybe<Scalars["Date"]>;
  productReturnedDate?: Maybe<Scalars["Date"]>;
  reason: DisputeReason;
  resolution?: Maybe<DisputeResolution>;
  resolutionDescription?: Maybe<DisputeResolutionDescription>;
  status: DisputeStatus;
};

export type DisputeActivity = {
  __typename?: "DisputeActivity";
  code: DisputeActivityCode;
  createdAt?: Maybe<Scalars["DateTime"]>;
  details: DisputeActivityDetail;
  id: Scalars["String"];
};

export enum DisputeActivityCode {
  Created = "created",
  CustomerEnquiry = "customerEnquiry",
  EvidenceProvided = "evidenceProvided",
  Initiated = "initiated",
  ReceiveSecondPresentment = "receiveSecondPresentment",
  ReportedCardLost = "reportedCardLost",
  ReportedCardStolen = "reportedCardStolen",
  ReportedFraud = "reportedFraud",
  Resolved = "resolved",
  Reversal = "reversal",
  SendArbitrationChargeback = "sendArbitrationChargeback",
  SendChargebackToMc = "sendChargebackToMC",
  Withdrawn = "withdrawn",
}

export type DisputeActivityDetail = {
  __typename?: "DisputeActivityDetail";
  amount?: Maybe<Scalars["String"]>;
  merchantContactedDate?: Maybe<Scalars["Date"]>;
  notes?: Maybe<Scalars["String"]>;
  oldStatus?: Maybe<DisputeStatus>;
  productCancelledDate?: Maybe<Scalars["Date"]>;
  productReturnedDate?: Maybe<Scalars["Date"]>;
  reason?: Maybe<DisputeReason>;
  transactionAmount?: Maybe<Scalars["String"]>;
  transactionId?: Maybe<Scalars["String"]>;
  transactionMerchantName?: Maybe<Scalars["String"]>;
};

export enum DisputeReason {
  CompromisedCard = "compromisedCard",
  LostCard = "lostCard",
  Other = "other",
  ProductCancelled = "productCancelled",
  ProductDefective = "productDefective",
  ProductNotAsDescribed = "productNotAsDescribed",
  ProductNotReceived = "productNotReceived",
  ProductReturned = "productReturned",
  StolenCard = "stolenCard",
  WrongAmount = "wrongAmount",
}

export enum DisputeResolution {
  Against = "against",
  InFavor = "inFavor",
  Reversal = "reversal",
}

export enum DisputeResolutionDescription {
  LostAndDebitTransaction = "lostAndDebitTransaction",
  LostAndDebitTransactionAndInterest = "lostAndDebitTransactionAndInterest",
  RebilledCurrentDate = "rebilledCurrentDate",
  RebilledPresentmentDate = "rebilledPresentmentDate",
  Won = "won",
  WrittenOffFraud = "writtenOffFraud",
  WrittenOffNonFraud = "writtenOffNonFraud",
}

export enum DisputeStatus {
  Pending = "pending",
  Resolved = "resolved",
  Withdrawn = "withdrawn",
}

export type Employee = {
  __typename?: "Employee";
  address?: Maybe<Address>;
  dateOfBirth?: Maybe<Scalars["DateTime"]>;
  firstName: Scalars["String"];
  id: Scalars["ID"];
  lastName: Scalars["String"];
  organizationId: Scalars["String"];
  phoneNumber?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  workEmail: Scalars["String"];
};

export type EmployeeApplicationStartedContext = {
  __typename?: "EmployeeApplicationStartedContext";
  applicationId: Scalars["String"];
  employee: Employee;
};

export type Error = {
  code: Scalars["String"];
  message: Scalars["String"];
};

export type ExternalMerchant = {
  __typename?: "ExternalMerchant";
  addressDetails?: Maybe<Scalars["String"]>;
  category: Category;
  city?: Maybe<Scalars["String"]>;
  country?: Maybe<Scalars["String"]>;
  coverImage?: Maybe<Scalars["String"]>;
  displayName: Scalars["String"];
  formattedAddress?: Maybe<Scalars["String"]>;
  googleMapUrl?: Maybe<Scalars["String"]>;
  id: Scalars["String"];
  latitude?: Maybe<Scalars["String"]>;
  longitude?: Maybe<Scalars["String"]>;
  merchantType: Scalars["String"];
  name: Scalars["String"];
  phoneNumber?: Maybe<Scalars["String"]>;
  state?: Maybe<Scalars["String"]>;
  streetName?: Maybe<Scalars["String"]>;
  streetNumber?: Maybe<Scalars["String"]>;
  website?: Maybe<Scalars["String"]>;
  zipcode?: Maybe<Scalars["String"]>;
};

export type FeatureFlags = {
  __typename?: "FeatureFlags";
  expenseManagementShown: Scalars["Boolean"];
};

export type GiftCardBrand = {
  __typename?: "GiftCardBrand";
  alwaysShowDisclaimer: Scalars["Boolean"];
  brandKey: Scalars["String"];
  brandName: Scalars["String"];
  description: Scalars["String"];
  disclaimer: Scalars["String"];
  disclaimerInstructions?: Maybe<Scalars["String"]>;
  displayInstructions?: Maybe<Scalars["String"]>;
  effectiveDollarPerPointsValue: Scalars["Float"];
  imageUrl: Scalars["String"];
  /** List of gift card details for the brand */
  items: Array<GiftCardItem>;
  popularityRank: Scalars["Int"];
  shortDescription: Scalars["String"];
  terms: Scalars["String"];
  termsAndConditionsInstructions?: Maybe<Scalars["String"]>;
};

export type GiftCardCatalog = {
  __typename?: "GiftCardCatalog";
  /** List of brands in the catalog */
  brandList: Array<GiftCardBrand>;
  category: CatalogCategory;
  maximumRedemptionValue: Scalars["Float"];
  minimumRedemptionValue: Scalars["Float"];
};

export type GiftCardCreateOrderInputSchema = {
  dollarValue: Scalars["Int"];
  idempotencyKey?: InputMaybe<Scalars["String"]>;
  utid: Scalars["String"];
};

export type GiftCardItem = {
  __typename?: "GiftCardItem";
  faceValue: Scalars["Float"];
  isWholeAmountValueRequired: Scalars["Boolean"];
  pointsValue: Scalars["Float"];
  redemptionInstructions: Scalars["String"];
  rewardName: Scalars["String"];
  rewardType: Scalars["String"];
  utid: Scalars["String"];
  valueType: Scalars["String"];
};

export type GiftCardOrder = {
  __typename?: "GiftCardOrder";
  message?: Maybe<Scalars["String"]>;
  redemptionInstructions?: Maybe<Scalars["String"]>;
  status: Scalars["String"];
};

export type GiftCardWallet = {
  __typename?: "GiftCardWallet";
  brandName: Scalars["String"];
  createdAt: Scalars["DateTime"];
  /** Gift Card credentials */
  credentials: Array<Scalars["JSONObject"]>;
  externalRefID: Scalars["String"];
  faceValue: Scalars["Int"];
  hexColor?: Maybe<Scalars["String"]>;
  imageUrl: Scalars["String"];
};

export type HypercardMerchant = {
  __typename?: "HypercardMerchant";
  id: Scalars["Int"];
  logoImageUrl: Scalars["String"];
};

export type Insurance = {
  __typename?: "Insurance";
  contactNumber?: Maybe<Scalars["String"]>;
  flair: Scalars["String"];
  iconUrl: Scalars["String"];
  longDetails?: Maybe<Scalars["String"]>;
  shortDetails: Scalars["String"];
  title: Scalars["String"];
};

export type IntegerCursorPaginationInput = {
  cursor?: InputMaybe<Scalars["Int"]>;
  pageSize?: InputMaybe<Scalars["Int"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  activateCard: MutationActivateCardResult;
  completePhoneNumberUpdate?: Maybe<MutationCompletePhoneNumberUpdateResult>;
  createACHPaymentMethod: MutationCreateAchPaymentMethodResult;
  createDispute: MutationCreateDisputeResult;
  createGiftCardOrder: MutationCreateGiftCardOrderResult;
  createInstantPayment: MutationCreateInstantPaymentResult;
  deletePaymentMethod: MutationDeletePaymentMethodResult;
  hideGiftcardWallet?: Maybe<MutationHideGiftcardWalletResult>;
  redeemPointsForCashback?: Maybe<MutationRedeemPointsForCashbackResult>;
  referColleagues?: Maybe<MutationReferColleaguesResult>;
  registerOfferAnalytic: MutationRegisterOfferAnalyticResult;
  removeAutoPaymentSchedule: MutationRemoveAutoPaymentScheduleResult;
  replaceCard: MutationReplaceCardResult;
  sendOTP: MutationSendOtpResult;
  simulateTransaction: MutationSimulateTransactionResult;
  startEmployeeApplication: MutationStartEmployeeApplicationResult;
  startPhoneNumberUpdate: MutationStartPhoneNumberUpdateResult;
  startWaitlistUserApplication: MutationStartWaitlistUserApplicationResult;
  submitEmployeeApplication: MutationSubmitEmployeeApplicationResult;
  submitFeedback: MutationSubmitFeedbackResult;
  submitWaitlistUserApplication: MutationSubmitWaitlistUserApplicationResult;
  updateCardPin: MutationUpdateCardPinResult;
  updateFreezeStatus: MutationUpdateFreezeStatusResult;
  updateNotificationSettings: MutationUpdateNotificationSettingsResult;
  updateUserAddress: MutationUpdateUserAddressResult;
  updateUserPreferences: MutationUpdateUserPreferencesResult;
  upsertAutoPaymentSchedule: MutationUpsertAutoPaymentScheduleResult;
  withdrawDispute: MutationWithdrawDisputeResult;
};

export type MutationActivateCardArgs = {
  last4Digits: Scalars["String"];
};

export type MutationCompletePhoneNumberUpdateArgs = {
  newPhoneNumber: Scalars["String"];
};

export type MutationCreateAchPaymentMethodArgs = {
  paymentMethodInput: CreateAchPaymentMethodInput;
};

export type MutationCreateDisputeArgs = {
  input: CreateDisputeInput;
};

export type MutationCreateGiftCardOrderArgs = {
  input: GiftCardCreateOrderInputSchema;
};

export type MutationCreateInstantPaymentArgs = {
  input: CreateInstantPaymentInput;
};

export type MutationDeletePaymentMethodArgs = {
  methodId: Scalars["String"];
};

export type MutationHideGiftcardWalletArgs = {
  externalRefID: Scalars["String"];
};

export type MutationRedeemPointsForCashbackArgs = {
  amount: Scalars["Int"];
};

export type MutationReferColleaguesArgs = {
  inviteeEmails: Array<Scalars["String"]>;
};

export type MutationRegisterOfferAnalyticArgs = {
  liked: Scalars["Boolean"];
  rewardRuleId: Scalars["Int"];
};

export type MutationRemoveAutoPaymentScheduleArgs = {
  scheduleId: Scalars["String"];
};

export type MutationReplaceCardArgs = {
  newShippingAddress?: InputMaybe<UpdateCardholderAddressInput>;
  reason: CardReplacementReason;
};

export type MutationSendOtpArgs = {
  phoneNumber: Scalars["String"];
};

export type MutationSimulateTransactionArgs = {
  amount?: InputMaybe<Scalars["Float"]>;
  merchantId?: InputMaybe<Scalars["String"]>;
};

export type MutationStartEmployeeApplicationArgs = {
  code: Scalars["String"];
  testEmail: Scalars["String"];
};

export type MutationStartPhoneNumberUpdateArgs = {
  newPhoneNumber: Scalars["String"];
};

export type MutationSubmitEmployeeApplicationArgs = {
  applicationId: Scalars["String"];
  cardArt?: InputMaybe<CardArtType>;
  demographic: ApplicationDemographicInput;
  financialInfo: ApplicationFinancialInfoInput;
  organizationId: Scalars["String"];
  testEmail: Scalars["String"];
};

export type MutationSubmitFeedbackArgs = {
  feedback: Scalars["String"];
};

export type MutationSubmitWaitlistUserApplicationArgs = {
  applicationId: Scalars["String"];
  demographic: ApplicationDemographicInput;
  financialInfo: ApplicationFinancialInfoInput;
};

export type MutationUpdateCardPinArgs = {
  pin: Scalars["String"];
};

export type MutationUpdateFreezeStatusArgs = {
  shouldFreeze: Scalars["Boolean"];
};

export type MutationUpdateNotificationSettingsArgs = {
  settings: NotificationSettingsInput;
};

export type MutationUpdateUserAddressArgs = {
  address: UpdateCardholderAddressInput;
};

export type MutationUpdateUserPreferencesArgs = {
  paperlessStatement: Scalars["Boolean"];
};

export type MutationUpsertAutoPaymentScheduleArgs = {
  input: UpsertAutoPaymentScheduleInput;
};

export type MutationWithdrawDisputeArgs = {
  disputeId: Scalars["String"];
};

export type MutationActivateCardResult =
  | BaseError
  | MutationActivateCardSuccess
  | ValidationError;

export type MutationActivateCardSuccess = {
  __typename?: "MutationActivateCardSuccess";
  data: Scalars["Boolean"];
};

export type MutationCompletePhoneNumberUpdateResult =
  | BaseError
  | MutationCompletePhoneNumberUpdateSuccess
  | ValidationError;

export type MutationCompletePhoneNumberUpdateSuccess = {
  __typename?: "MutationCompletePhoneNumberUpdateSuccess";
  data: Scalars["Void"];
};

export type MutationCreateAchPaymentMethodResult =
  | BaseError
  | MutationCreateAchPaymentMethodSuccess
  | ValidationError;

export type MutationCreateAchPaymentMethodSuccess = {
  __typename?: "MutationCreateACHPaymentMethodSuccess";
  data: PaymentMethod;
};

export type MutationCreateDisputeResult =
  | BaseError
  | MutationCreateDisputeSuccess
  | ValidationError;

export type MutationCreateDisputeSuccess = {
  __typename?: "MutationCreateDisputeSuccess";
  data: Dispute;
};

export type MutationCreateGiftCardOrderResult =
  | BaseError
  | MutationCreateGiftCardOrderSuccess
  | ValidationError;

export type MutationCreateGiftCardOrderSuccess = {
  __typename?: "MutationCreateGiftCardOrderSuccess";
  data: GiftCardOrder;
};

export type MutationCreateInstantPaymentResult =
  | BaseError
  | MutationCreateInstantPaymentSuccess
  | ValidationError;

export type MutationCreateInstantPaymentSuccess = {
  __typename?: "MutationCreateInstantPaymentSuccess";
  data: PaymentSchedule;
};

export type MutationDeletePaymentMethodResult =
  | BaseError
  | MutationDeletePaymentMethodSuccess
  | ValidationError;

export type MutationDeletePaymentMethodSuccess = {
  __typename?: "MutationDeletePaymentMethodSuccess";
  data: Scalars["Boolean"];
};

export type MutationHideGiftcardWalletResult =
  | BaseError
  | MutationHideGiftcardWalletSuccess
  | ValidationError;

export type MutationHideGiftcardWalletSuccess = {
  __typename?: "MutationHideGiftcardWalletSuccess";
  data: Scalars["Void"];
};

export type MutationRedeemPointsForCashbackResult =
  | BaseError
  | MutationRedeemPointsForCashbackSuccess
  | ValidationError;

export type MutationRedeemPointsForCashbackSuccess = {
  __typename?: "MutationRedeemPointsForCashbackSuccess";
  data: Scalars["Void"];
};

export type MutationReferColleaguesResult =
  | BaseError
  | MutationReferColleaguesSuccess
  | ValidationError;

export type MutationReferColleaguesSuccess = {
  __typename?: "MutationReferColleaguesSuccess";
  data: Scalars["Void"];
};

export type MutationRegisterOfferAnalyticResult =
  | BaseError
  | MutationRegisterOfferAnalyticSuccess
  | ValidationError;

export type MutationRegisterOfferAnalyticSuccess = {
  __typename?: "MutationRegisterOfferAnalyticSuccess";
  data: Scalars["Boolean"];
};

export type MutationRemoveAutoPaymentScheduleResult =
  | BaseError
  | MutationRemoveAutoPaymentScheduleSuccess
  | ValidationError;

export type MutationRemoveAutoPaymentScheduleSuccess = {
  __typename?: "MutationRemoveAutoPaymentScheduleSuccess";
  data: Scalars["Boolean"];
};

export type MutationReplaceCardResult =
  | BaseError
  | MutationReplaceCardSuccess
  | ValidationError;

export type MutationReplaceCardSuccess = {
  __typename?: "MutationReplaceCardSuccess";
  data: CardReplacement;
};

export type MutationSendOtpResult = BaseError | MutationSendOtpSuccess | ValidationError;

export type MutationSendOtpSuccess = {
  __typename?: "MutationSendOTPSuccess";
  data: Scalars["String"];
};

export type MutationSimulateTransactionResult =
  | BaseError
  | MutationSimulateTransactionSuccess
  | ValidationError;

export type MutationSimulateTransactionSuccess = {
  __typename?: "MutationSimulateTransactionSuccess";
  data: Scalars["Boolean"];
};

export type MutationStartEmployeeApplicationResult =
  | BaseError
  | MutationStartEmployeeApplicationSuccess
  | ValidationError;

export type MutationStartEmployeeApplicationSuccess = {
  __typename?: "MutationStartEmployeeApplicationSuccess";
  data: EmployeeApplicationStartedContext;
};

export type MutationStartPhoneNumberUpdateResult =
  | BaseError
  | MutationStartPhoneNumberUpdateSuccess
  | ValidationError;

export type MutationStartPhoneNumberUpdateSuccess = {
  __typename?: "MutationStartPhoneNumberUpdateSuccess";
  data: Scalars["String"];
};

export type MutationStartWaitlistUserApplicationResult =
  | BaseError
  | MutationStartWaitlistUserApplicationSuccess
  | ValidationError;

export type MutationStartWaitlistUserApplicationSuccess = {
  __typename?: "MutationStartWaitlistUserApplicationSuccess";
  data: WaitlistUserApplicationStartedContext;
};

export type MutationSubmitEmployeeApplicationResult =
  | BaseError
  | MutationSubmitEmployeeApplicationSuccess
  | ValidationError;

export type MutationSubmitEmployeeApplicationSuccess = {
  __typename?: "MutationSubmitEmployeeApplicationSuccess";
  data: ApplicationSubmittedContext;
};

export type MutationSubmitFeedbackResult =
  | BaseError
  | MutationSubmitFeedbackSuccess
  | ValidationError;

export type MutationSubmitFeedbackSuccess = {
  __typename?: "MutationSubmitFeedbackSuccess";
  data: Scalars["Boolean"];
};

export type MutationSubmitWaitlistUserApplicationResult =
  | BaseError
  | MutationSubmitWaitlistUserApplicationSuccess
  | ValidationError;

export type MutationSubmitWaitlistUserApplicationSuccess = {
  __typename?: "MutationSubmitWaitlistUserApplicationSuccess";
  data: ApplicationSubmittedContext;
};

export type MutationUpdateCardPinResult =
  | BaseError
  | MutationUpdateCardPinSuccess
  | ValidationError;

export type MutationUpdateCardPinSuccess = {
  __typename?: "MutationUpdateCardPinSuccess";
  data: Scalars["Boolean"];
};

export type MutationUpdateFreezeStatusResult =
  | BaseError
  | MutationUpdateFreezeStatusSuccess
  | ValidationError;

export type MutationUpdateFreezeStatusSuccess = {
  __typename?: "MutationUpdateFreezeStatusSuccess";
  data: Scalars["Boolean"];
};

export type MutationUpdateNotificationSettingsResult =
  | BaseError
  | MutationUpdateNotificationSettingsSuccess
  | ValidationError;

export type MutationUpdateNotificationSettingsSuccess = {
  __typename?: "MutationUpdateNotificationSettingsSuccess";
  data: NotificationSettings;
};

export type MutationUpdateUserAddressResult =
  | BaseError
  | MutationUpdateUserAddressSuccess
  | ValidationError;

export type MutationUpdateUserAddressSuccess = {
  __typename?: "MutationUpdateUserAddressSuccess";
  data: Scalars["Boolean"];
};

export type MutationUpdateUserPreferencesResult =
  | BaseError
  | MutationUpdateUserPreferencesSuccess
  | ValidationError;

export type MutationUpdateUserPreferencesSuccess = {
  __typename?: "MutationUpdateUserPreferencesSuccess";
  data: Scalars["Boolean"];
};

export type MutationUpsertAutoPaymentScheduleResult =
  | BaseError
  | MutationUpsertAutoPaymentScheduleSuccess
  | ValidationError;

export type MutationUpsertAutoPaymentScheduleSuccess = {
  __typename?: "MutationUpsertAutoPaymentScheduleSuccess";
  data: PaymentSchedule;
};

export type MutationWithdrawDisputeResult =
  | BaseError
  | MutationWithdrawDisputeSuccess
  | ValidationError;

export type MutationWithdrawDisputeSuccess = {
  __typename?: "MutationWithdrawDisputeSuccess";
  data: Dispute;
};

export type NotificationSettings = {
  __typename?: "NotificationSettings";
  promotions: Scalars["Boolean"];
  rewards: Scalars["Boolean"];
  transactions: Scalars["Boolean"];
};

export type NotificationSettingsInput = {
  promotions?: InputMaybe<Scalars["Boolean"]>;
  rewards?: InputMaybe<Scalars["Boolean"]>;
  transactions?: InputMaybe<Scalars["Boolean"]>;
};

export type Offer = {
  __typename?: "Offer";
  category?: Maybe<OfferCategory>;
  details: Scalars["String"];
  externalMerchant?: Maybe<ExternalMerchant>;
  flair?: Maybe<OfferFlair>;
  hypercardMerchant?: Maybe<HypercardMerchant>;
  longDetails?: Maybe<Scalars["String"]>;
  restaurantOffer?: Maybe<RestaurantOffer>;
  reward: Scalars["String"];
  rewardRuleId: Scalars["Int"];
  terms?: Maybe<Scalars["String"]>;
  title: Scalars["String"];
};

export enum OfferCategory {
  Dining = "dining",
  KFactor = "kFactor",
  Lifestyle = "lifestyle",
  Wellness = "wellness",
}

export enum OfferFlair {
  New = "new",
  Trending = "trending",
}

export type OffsetPaginationInput = {
  offset?: InputMaybe<Scalars["Int"]>;
  pageSize?: InputMaybe<Scalars["Int"]>;
};

export type Organization = {
  __typename?: "Organization";
  domains: Array<Scalars["String"]>;
  name: Scalars["String"];
};

export type PaymentMethod = {
  __typename?: "PaymentMethod";
  accountLast4Digits: Scalars["String"];
  accountType: BankAccountType;
  bankLogoUrl: Scalars["String"];
  bankName: Scalars["String"];
  id: Scalars["String"];
  name: Scalars["String"];
  routingNumber: Scalars["String"];
  status: PaymentMethodStatus;
};

export enum PaymentMethodStatus {
  Active = "active",
  Deleted = "deleted",
  Invalid = "invalid",
  PendingValidation = "pendingValidation",
  ValidationInProgress = "validationInProgress",
}

export enum PaymentProcessType {
  Ach = "ach",
  Check = "check",
  Manual = "manual",
}

export type PaymentSchedule = {
  __typename?: "PaymentSchedule";
  amount?: Maybe<Scalars["String"]>;
  day?: Maybe<Scalars["Int"]>;
  dayOfMonth?: Maybe<Scalars["String"]>;
  frequency: PaymentScheduleFrequency;
  id: Scalars["String"];
  methodId: Scalars["String"];
  methodType: Scalars["String"];
  nextPaymentAmount?: Maybe<Scalars["Float"]>;
  paymentDate?: Maybe<Scalars["Date"]>;
  reason?: Maybe<Scalars["String"]>;
  status: PaymentScheduleStatus;
  type: PaymentType;
};

export enum PaymentScheduleFrequency {
  DueDate = "dueDate",
  Instant = "instant",
  Monthly = "monthly",
}

export enum PaymentScheduleStatus {
  Active = "active",
  Completed = "completed",
  Deleted = "deleted",
  Failed = "failed",
  Skipped = "skipped",
}

export type PaymentTransaction = {
  __typename?: "PaymentTransaction";
  amountInDollars: Scalars["Float"];
  completedAt?: Maybe<Scalars["DateTime"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  displayDollarAmount: Scalars["String"];
  displayFlair?: Maybe<Scalars["String"]>;
  displayTitle: Scalars["String"];
  frequency?: Maybe<Scalars["String"]>;
  id: Scalars["Int"];
  initiatedAt?: Maybe<Scalars["DateTime"]>;
  paymentProcessType: PaymentProcessType;
  reason?: Maybe<Scalars["String"]>;
  refundedAt?: Maybe<Scalars["DateTime"]>;
  returnedAt?: Maybe<Scalars["DateTime"]>;
  status: PaymentTransactionStatus;
  transactedAt: Scalars["DateTime"];
  type: PaymentTransactionType;
};

export enum PaymentTransactionStatus {
  Cancelled = "cancelled",
  Completed = "completed",
  Initiated = "initiated",
  Processing = "processing",
  Refunded = "refunded",
  Refunding = "refunding",
  Returned = "returned",
  Returning = "returning",
}

export enum PaymentTransactionType {
  Regular = "regular",
  Reversal = "reversal",
}

export enum PaymentType {
  CurrentBalance = "currentBalance",
  FixedAmount = "fixedAmount",
  MinimumPayment = "minimumPayment",
  StatementBalance = "statementBalance",
}

export enum PosType {
  Online = "online",
  Physical = "physical",
  Recurring = "recurring",
  Unknown = "unknown",
}

export type Query = {
  __typename?: "Query";
  account: QueryAccountResult;
  activeAutoPayment?: Maybe<QueryActiveAutoPaymentResult>;
  cardArt: QueryCardArtResult;
  cardholder?: Maybe<QueryCardholderResult>;
  featureFlags: QueryFeatureFlagsResult;
  giftCardCatalog: QueryGiftCardCatalogResult;
  giftCardWallet: QueryGiftCardWalletResult;
  healthCheck: Scalars["String"];
  insurances: QueryInsurancesResult;
  netSavingsThisMonth: QueryNetSavingsThisMonthResult;
  notificationSettings: QueryNotificationSettingsResult;
  offers: QueryOffersResult;
  organization?: Maybe<QueryOrganizationResult>;
  paymentMethods: QueryPaymentMethodsResult;
  pointToDollarConversion: QueryPointToDollarConversionResult;
  primaryCard?: Maybe<QueryPrimaryCardResult>;
  recommendedReferrals: QueryRecommendedReferralsResult;
  referralOffer: QueryReferralOfferResult;
  statement: QueryStatementResult;
  statements: QueryStatementsResult;
  totalPoints?: Maybe<QueryTotalPointsResult>;
  transaction?: Maybe<QueryTransactionResult>;
  transactions: QueryTransactionsResult;
};

export type QueryOffersArgs = {
  category?: InputMaybe<OfferCategory>;
  onlyPerkOffers?: InputMaybe<Scalars["Boolean"]>;
  onlyRestaurantOffers?: InputMaybe<Scalars["Boolean"]>;
  restaurantCity?: InputMaybe<RestaurantCity>;
};

export type QueryPrimaryCardArgs = {
  detokenized?: InputMaybe<Scalars["Boolean"]>;
};

export type QueryRecommendedReferralsArgs = {
  searchText?: InputMaybe<Scalars["String"]>;
};

export type QueryStatementArgs = {
  statementId: Scalars["String"];
};

export type QueryStatementsArgs = {
  pagination?: InputMaybe<StringCursorPaginationInput>;
};

export type QueryTransactionArgs = {
  includeReward?: InputMaybe<Scalars["Boolean"]>;
  transactionId: Scalars["Int"];
};

export type QueryTransactionsArgs = {
  filters?: InputMaybe<TransactionsFilterInput>;
  includeRewards?: InputMaybe<Scalars["Boolean"]>;
  pagination?: InputMaybe<OffsetPaginationInput>;
  sort?: InputMaybe<TransactionsSortInput>;
};

export type QueryAccountResult = BaseError | QueryAccountSuccess | ValidationError;

export type QueryAccountSuccess = {
  __typename?: "QueryAccountSuccess";
  data: Account;
};

export type QueryActiveAutoPaymentResult =
  | BaseError
  | QueryActiveAutoPaymentSuccess
  | ValidationError;

export type QueryActiveAutoPaymentSuccess = {
  __typename?: "QueryActiveAutoPaymentSuccess";
  data: PaymentSchedule;
};

export type QueryCardArtResult = BaseError | QueryCardArtSuccess | ValidationError;

export type QueryCardArtSuccess = {
  __typename?: "QueryCardArtSuccess";
  data: CardArt;
};

export type QueryCardholderResult = BaseError | QueryCardholderSuccess | ValidationError;

export type QueryCardholderSuccess = {
  __typename?: "QueryCardholderSuccess";
  data: Cardholder;
};

export type QueryFeatureFlagsResult =
  | BaseError
  | QueryFeatureFlagsSuccess
  | ValidationError;

export type QueryFeatureFlagsSuccess = {
  __typename?: "QueryFeatureFlagsSuccess";
  data: FeatureFlags;
};

export type QueryGiftCardCatalogResult =
  | BaseError
  | QueryGiftCardCatalogSuccess
  | ValidationError;

export type QueryGiftCardCatalogSuccess = {
  __typename?: "QueryGiftCardCatalogSuccess";
  data: Array<GiftCardCatalog>;
};

export type QueryGiftCardWalletResult =
  | BaseError
  | QueryGiftCardWalletSuccess
  | ValidationError;

export type QueryGiftCardWalletSuccess = {
  __typename?: "QueryGiftCardWalletSuccess";
  data: Array<GiftCardWallet>;
};

export type QueryInsurancesResult = BaseError | QueryInsurancesSuccess | ValidationError;

export type QueryInsurancesSuccess = {
  __typename?: "QueryInsurancesSuccess";
  data: Array<Insurance>;
};

export type QueryNetSavingsThisMonthResult =
  | BaseError
  | QueryNetSavingsThisMonthSuccess
  | ValidationError;

export type QueryNetSavingsThisMonthSuccess = {
  __typename?: "QueryNetSavingsThisMonthSuccess";
  data: Scalars["Float"];
};

export type QueryNotificationSettingsResult =
  | BaseError
  | QueryNotificationSettingsSuccess
  | ValidationError;

export type QueryNotificationSettingsSuccess = {
  __typename?: "QueryNotificationSettingsSuccess";
  data: NotificationSettings;
};

export type QueryOffersResult = BaseError | QueryOffersSuccess | ValidationError;

export type QueryOffersSuccess = {
  __typename?: "QueryOffersSuccess";
  data: Array<Offer>;
};

export type QueryOrganizationResult =
  | BaseError
  | QueryOrganizationSuccess
  | ValidationError;

export type QueryOrganizationSuccess = {
  __typename?: "QueryOrganizationSuccess";
  data: Organization;
};

export type QueryPaymentMethodsResult =
  | BaseError
  | QueryPaymentMethodsSuccess
  | ValidationError;

export type QueryPaymentMethodsSuccess = {
  __typename?: "QueryPaymentMethodsSuccess";
  data: Array<PaymentMethod>;
};

export type QueryPointToDollarConversionResult =
  | BaseError
  | QueryPointToDollarConversionSuccess
  | ValidationError;

export type QueryPointToDollarConversionSuccess = {
  __typename?: "QueryPointToDollarConversionSuccess";
  data: Scalars["Float"];
};

export type QueryPrimaryCardResult =
  | BaseError
  | QueryPrimaryCardSuccess
  | ValidationError;

export type QueryPrimaryCardSuccess = {
  __typename?: "QueryPrimaryCardSuccess";
  data: Card;
};

export type QueryRecommendedReferralsResult =
  | BaseError
  | QueryRecommendedReferralsSuccess
  | ValidationError;

export type QueryRecommendedReferralsSuccess = {
  __typename?: "QueryRecommendedReferralsSuccess";
  data: Array<ReferralEmployee>;
};

export type QueryReferralOfferResult =
  | BaseError
  | QueryReferralOfferSuccess
  | ValidationError;

export type QueryReferralOfferSuccess = {
  __typename?: "QueryReferralOfferSuccess";
  data: Offer;
};

export type QueryStatementResult = BaseError | QueryStatementSuccess | ValidationError;

export type QueryStatementSuccess = {
  __typename?: "QueryStatementSuccess";
  data: Statement;
};

export type QueryStatementsResult = BaseError | QueryStatementsSuccess | ValidationError;

export type QueryStatementsSuccess = {
  __typename?: "QueryStatementsSuccess";
  data: Statements;
};

export type QueryTotalPointsResult =
  | BaseError
  | QueryTotalPointsSuccess
  | ValidationError;

export type QueryTotalPointsSuccess = {
  __typename?: "QueryTotalPointsSuccess";
  data: Scalars["Int"];
};

export type QueryTransactionResult =
  | BaseError
  | QueryTransactionSuccess
  | ValidationError;

export type QueryTransactionSuccess = {
  __typename?: "QueryTransactionSuccess";
  data: Transaction;
};

export type QueryTransactionsResult =
  | BaseError
  | QueryTransactionsSuccess
  | ValidationError;

export type QueryTransactionsSuccess = {
  __typename?: "QueryTransactionsSuccess";
  data: Transactions;
};

export type ReferralEmployee = {
  __typename?: "ReferralEmployee";
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  workEmail: Scalars["String"];
};

export enum RestaurantCity {
  Austin = "austin",
  Miami = "miami",
  Nyc = "nyc",
}

export type RestaurantOffer = {
  __typename?: "RestaurantOffer";
  city: RestaurantCity;
  location: Scalars["String"];
  primaryImageUrl: Scalars["String"];
  secondaryImageUrl: Scalars["String"];
};

export type Reward = {
  __typename?: "Reward";
  amount: Scalars["Float"];
  applicationMethod: RewardApplicationMethod;
  createdAt: Scalars["DateTime"];
  details: Scalars["String"];
  id: Scalars["Int"];
  offer?: Maybe<Offer>;
  rewardDescription: Scalars["String"];
};

export enum RewardApplicationMethod {
  Cashback = "cashback",
  Points = "points",
}

export type ShortCard = {
  __typename?: "ShortCard";
  id: Scalars["String"];
  status: CardStatus;
};

export type Statement = {
  __typename?: "Statement";
  amountDue: Scalars["String"];
  credits: Scalars["String"];
  creditsTotal: Scalars["String"];
  currentBalance: Scalars["String"];
  dueDate: Scalars["DateTime"];
  endDate: Scalars["DateTime"];
  feesTotal: Scalars["String"];
  id: Scalars["String"];
  interestTotal: Scalars["String"];
  minimumAmountDue: Scalars["String"];
  nextStatement: Scalars["DateTime"];
  payments: Scalars["String"];
  paymentsAndCredits: Scalars["String"];
  previousBalance: Scalars["String"];
  previousMinimumAmountDue: Scalars["String"];
  purchaseTotal: Scalars["String"];
  startDate: Scalars["DateTime"];
  statementDate: Scalars["DateTime"];
  statementMinimum: Scalars["String"];
};

export type Statements = {
  __typename?: "Statements";
  count: Scalars["Int"];
  nextCursor?: Maybe<Scalars["String"]>;
  previousCursor?: Maybe<Scalars["String"]>;
  statements: Array<Statement>;
};

export type StringCursorPaginationInput = {
  cursor?: InputMaybe<Scalars["String"]>;
  pageSize?: InputMaybe<Scalars["Int"]>;
};

export type Transaction = {
  __typename?: "Transaction";
  amountInDollars: Scalars["Float"];
  cardLast4Digits?: Maybe<Scalars["String"]>;
  cardholderId: Scalars["String"];
  creditIndicator: CreditIndicator;
  digitalWallet?: Maybe<DigitalWallet>;
  displayDollarAmount: Scalars["String"];
  displayFlair?: Maybe<Scalars["String"]>;
  displayTitle: Scalars["String"];
  dispute?: Maybe<Dispute>;
  externalMerchant?: Maybe<ExternalMerchant>;
  hypercardCategoryIconUrl: Scalars["String"];
  id: Scalars["Int"];
  posType?: Maybe<Scalars["String"]>;
  reward?: Maybe<TransactionReward>;
  settledAt?: Maybe<Scalars["DateTime"]>;
  status: TransactionStatus;
  transactedAt: Scalars["DateTime"];
  transactionLocality?: Maybe<TransactionLocality>;
  type: TransactionType;
};

export type TransactionItem = PaymentTransaction | Transaction;

export enum TransactionLocality {
  International = "international",
  Regular = "regular",
}

export type TransactionReward = {
  __typename?: "TransactionReward";
  cashbackReward?: Maybe<Reward>;
  pointsReward?: Maybe<Reward>;
};

export enum TransactionSortField {
  Amount = "amount",
  TransactedAt = "transactedAt",
}

export enum TransactionStatus {
  Pending = "pending",
  Reversed = "reversed",
  Settled = "settled",
}

export enum TransactionType {
  BankCashback = "bankCashback",
  BankCashbackAdjustment = "bankCashbackAdjustment",
  CashAdvance = "cashAdvance",
  Dispute = "dispute",
  Fee = "fee",
  FeeAdjustment = "feeAdjustment",
  Payment = "payment",
  Refund = "refund",
  Regular = "regular",
}

export type Transactions = {
  __typename?: "Transactions";
  allTransactions: Array<TransactionItem>;
  count: Scalars["Int"];
  hasMore: Scalars["Boolean"];
  nextPageOffset?: Maybe<Scalars["Int"]>;
  paymentTransactions: Array<PaymentTransaction>;
  transactions: Array<Transaction>;
};

export type TransactionsFilterInput = {
  amountLessThan?: InputMaybe<Scalars["Float"]>;
  amountMoreThan?: InputMaybe<Scalars["Float"]>;
  creditIndicator?: InputMaybe<Array<CreditIndicator>>;
  digitalWallet?: InputMaybe<Array<DigitalWallet>>;
  flaggedForReimbursement?: InputMaybe<Scalars["Boolean"]>;
  merchantName?: InputMaybe<Scalars["String"]>;
  settledAfter?: InputMaybe<Scalars["DateTime"]>;
  settledBefore?: InputMaybe<Scalars["DateTime"]>;
  status?: InputMaybe<Array<TransactionStatus>>;
  transactedAfter?: InputMaybe<Scalars["DateTime"]>;
  transactedBefore?: InputMaybe<Scalars["DateTime"]>;
  transactionLocality?: InputMaybe<Array<TransactionLocality>>;
  type?: InputMaybe<Array<TransactionType>>;
};

export type TransactionsSortInput = {
  ascendingDirection: Scalars["Boolean"];
  field: TransactionSortField;
};

export type UpdateCardholderAddressInput = {
  addressLine1: Scalars["String"];
  addressLine2?: InputMaybe<Scalars["String"]>;
  city: Scalars["String"];
  state: Scalars["String"];
  type: AddressType;
  zip: Scalars["String"];
};

export type UpsertAutoPaymentScheduleInput = {
  paymentMethodId: Scalars["String"];
  type: PaymentType;
};

export type ValidationError = Error & {
  __typename?: "ValidationError";
  code: Scalars["String"];
  fieldErrors?: Maybe<Array<ZodFieldError>>;
  message: Scalars["String"];
};

export type WaitlistUser = {
  __typename?: "WaitlistUser";
  address?: Maybe<Address>;
  dateOfBirth: Scalars["DateTime"];
  email: Scalars["String"];
  firstName: Scalars["String"];
  id: Scalars["ID"];
  lastName: Scalars["String"];
  phoneNumber: Scalars["String"];
  ssn: Scalars["String"];
};

export type WaitlistUserApplicationStartedContext = {
  __typename?: "WaitlistUserApplicationStartedContext";
  applicationId: Scalars["String"];
  waitlistUser: WaitlistUser;
};

export type ZodFieldError = {
  __typename?: "ZodFieldError";
  message: Scalars["String"];
  path: Array<Scalars["String"]>;
};

export type SendOtpMutationVariables = Exact<{
  phoneNumber: Scalars["String"];
}>;

export type SendOtpMutation = {
  __typename?: "Mutation";
  sendOTP:
    | { __typename?: "BaseError"; code: string; message: string }
    | { __typename?: "MutationSendOTPSuccess"; data: string }
    | { __typename?: "ValidationError"; code: string; message: string };
};

export type SubmitFeedbackMutationVariables = Exact<{
  feedback: Scalars["String"];
}>;

export type SubmitFeedbackMutation = {
  __typename?: "Mutation";
  submitFeedback:
    | { __typename?: "BaseError"; code: string; message: string }
    | { __typename?: "MutationSubmitFeedbackSuccess"; data: boolean }
    | { __typename?: "ValidationError"; code: string; message: string };
};

export type SubmitUpdateFreezeStatusMutationVariables = Exact<{
  shouldFreeze: Scalars["Boolean"];
}>;

export type SubmitUpdateFreezeStatusMutation = {
  __typename?: "Mutation";
  updateFreezeStatus:
    | { __typename?: "BaseError"; code: string; message: string }
    | { __typename?: "MutationUpdateFreezeStatusSuccess"; data: boolean }
    | { __typename?: "ValidationError"; code: string; message: string };
};

export type SubmitReplaceCardMutationVariables = Exact<{
  newShippingAddress?: InputMaybe<UpdateCardholderAddressInput>;
  reason: CardReplacementReason;
}>;

export type SubmitReplaceCardMutation = {
  __typename?: "Mutation";
  replaceCard:
    | { __typename?: "BaseError"; code: string; message: string }
    | {
        __typename?: "MutationReplaceCardSuccess";
        data: { __typename?: "CardReplacement"; note: string };
      }
    | { __typename?: "ValidationError"; code: string; message: string };
};

export type UpdateNotificationSettingsMutationVariables = Exact<{
  settings: NotificationSettingsInput;
}>;

export type UpdateNotificationSettingsMutation = {
  __typename?: "Mutation";
  updateNotificationSettings:
    | { __typename?: "BaseError"; code: string; message: string }
    | {
        __typename?: "MutationUpdateNotificationSettingsSuccess";
        data: {
          __typename?: "NotificationSettings";
          promotions: boolean;
          rewards: boolean;
          transactions: boolean;
        };
      }
    | { __typename?: "ValidationError"; code: string; message: string };
};

export type UpdateUserAddressMutationVariables = Exact<{
  address: UpdateCardholderAddressInput;
}>;

export type UpdateUserAddressMutation = {
  __typename?: "Mutation";
  updateUserAddress:
    | { __typename?: "BaseError" }
    | { __typename?: "MutationUpdateUserAddressSuccess"; data: boolean }
    | { __typename?: "ValidationError" };
};

export type GetEmploymentStartDateQueryVariables = Exact<{ [key: string]: never }>;

export type GetEmploymentStartDateQuery = {
  __typename?: "Query";
  cardholder?:
    | { __typename?: "BaseError" }
    | {
        __typename?: "QueryCardholderSuccess";
        data: { __typename?: "Cardholder"; employmentStartDate?: any | null };
      }
    | { __typename?: "ValidationError" }
    | null;
};

export type GetAccountDetailsForHomeQueryVariables = Exact<{ [key: string]: never }>;

export type GetAccountDetailsForHomeQuery = {
  __typename?: "Query";
  account:
    | { __typename?: "BaseError" }
    | {
        __typename?: "QueryAccountSuccess";
        data: {
          __typename?: "Account";
          creditLimit: number;
          currentBalance: number;
          dueDateUtc: any;
        };
      }
    | { __typename?: "ValidationError" };
  cardholder?:
    | { __typename?: "BaseError" }
    | {
        __typename?: "QueryCardholderSuccess";
        data: { __typename?: "Cardholder"; firstName: string; lastName: string };
      }
    | { __typename?: "ValidationError" }
    | null;
  paymentMethods:
    | { __typename?: "BaseError" }
    | {
        __typename?: "QueryPaymentMethodsSuccess";
        data: Array<{ __typename?: "PaymentMethod"; id: string }>;
      }
    | { __typename?: "ValidationError" };
  cardArt:
    | { __typename?: "BaseError" }
    | {
        __typename?: "QueryCardArtSuccess";
        data: { __typename?: "CardArt"; backImageUrl: string; frontImageUrl: string };
      }
    | { __typename?: "ValidationError" };
};

export type GetPrimaryCardDataQueryVariables = Exact<{ [key: string]: never }>;

export type GetPrimaryCardDataQuery = {
  __typename?: "Query";
  primaryCard?:
    | { __typename?: "BaseError" }
    | {
        __typename?: "QueryPrimaryCardSuccess";
        data: {
          __typename?: "Card";
          cardNumber: string;
          cvv: string;
          expirationDate: string;
          status: CardStatus;
          id: string;
          last4Digits: string;
        };
      }
    | { __typename?: "ValidationError" }
    | null;
};

export type GetPrimaryCardIdQueryVariables = Exact<{ [key: string]: never }>;

export type GetPrimaryCardIdQuery = {
  __typename?: "Query";
  primaryCard?:
    | { __typename?: "BaseError"; code: string; message: string }
    | {
        __typename?: "QueryPrimaryCardSuccess";
        data: { __typename?: "Card"; id: string };
      }
    | { __typename?: "ValidationError"; code: string; message: string }
    | null;
};

export type GetAccountBalanceQueryVariables = Exact<{ [key: string]: never }>;

export type GetAccountBalanceQuery = {
  __typename?: "Query";
  account:
    | { __typename?: "BaseError" }
    | {
        __typename?: "QueryAccountSuccess";
        data: {
          __typename?: "Account";
          creditLimit: number;
          currentBalance: number;
          dueDateUtc: any;
        };
      }
    | { __typename?: "ValidationError" };
};

export type GetOffersForMembershipQueryVariables = Exact<{
  category?: InputMaybe<OfferCategory>;
}>;

export type GetOffersForMembershipQuery = {
  __typename?: "Query";
  offers:
    | { __typename?: "BaseError" }
    | {
        __typename?: "QueryOffersSuccess";
        data: Array<{
          __typename?: "Offer";
          title: string;
          details: string;
          longDetails?: string | null;
          hypercardMerchant?: {
            __typename?: "HypercardMerchant";
            logoImageUrl: string;
          } | null;
        }>;
      }
    | { __typename?: "ValidationError" };
};

export type GetRestaurantsQueryVariables = Exact<{
  restaurantCity?: InputMaybe<RestaurantCity>;
}>;

export type GetRestaurantsQuery = {
  __typename?: "Query";
  offers:
    | { __typename?: "BaseError" }
    | {
        __typename?: "QueryOffersSuccess";
        data: Array<{
          __typename?: "Offer";
          title: string;
          details: string;
          restaurantOffer?: {
            __typename?: "RestaurantOffer";
            primaryImageUrl: string;
            secondaryImageUrl: string;
            location: string;
            city: RestaurantCity;
          } | null;
        }>;
      }
    | { __typename?: "ValidationError" };
};

export type GetCardholderAddressQueryVariables = Exact<{ [key: string]: never }>;

export type GetCardholderAddressQuery = {
  __typename?: "Query";
  cardholder?:
    | { __typename?: "BaseError"; code: string; message: string }
    | {
        __typename?: "QueryCardholderSuccess";
        data: {
          __typename?: "Cardholder";
          residentialAddress: {
            __typename?: "CardholderAddress";
            addressLine1: string;
            addressLine2?: string | null;
            city: string;
            state: string;
            type: AddressType;
            zip: string;
          };
          shippingAddress: {
            __typename?: "CardholderAddress";
            addressLine1: string;
            addressLine2?: string | null;
            city: string;
            state: string;
            type: AddressType;
            zip: string;
          };
        };
      }
    | { __typename?: "ValidationError"; code: string; message: string }
    | null;
};

export type GetFeatureFlagsQueryVariables = Exact<{ [key: string]: never }>;

export type GetFeatureFlagsQuery = {
  __typename?: "Query";
  featureFlags:
    | { __typename?: "BaseError"; code: string; message: string }
    | {
        __typename?: "QueryFeatureFlagsSuccess";
        data: { __typename?: "FeatureFlags"; expenseManagementShown: boolean };
      }
    | { __typename?: "ValidationError"; code: string; message: string };
};

export type GetNotificationSettingsQueryVariables = Exact<{ [key: string]: never }>;

export type GetNotificationSettingsQuery = {
  __typename?: "Query";
  notificationSettings:
    | { __typename?: "BaseError"; code: string; message: string }
    | {
        __typename?: "QueryNotificationSettingsSuccess";
        data: {
          __typename?: "NotificationSettings";
          promotions: boolean;
          rewards: boolean;
          transactions: boolean;
        };
      }
    | { __typename?: "ValidationError"; code: string; message: string };
};

export type GetUserIdQueryVariables = Exact<{ [key: string]: never }>;

export type GetUserIdQuery = {
  __typename?: "Query";
  cardholder?:
    | { __typename?: "BaseError" }
    | {
        __typename?: "QueryCardholderSuccess";
        data: { __typename?: "Cardholder"; userId: string };
      }
    | { __typename?: "ValidationError" }
    | null;
};

export type CreateGiftCardOrderMutationVariables = Exact<{
  input: GiftCardCreateOrderInputSchema;
}>;

export type CreateGiftCardOrderMutation = {
  __typename?: "Mutation";
  createGiftCardOrder:
    | { __typename?: "BaseError"; code: string; message: string }
    | {
        __typename?: "MutationCreateGiftCardOrderSuccess";
        data: { __typename?: "GiftCardOrder"; status: string; message?: string | null };
      }
    | {
        __typename?: "ValidationError";
        code: string;
        message: string;
        fieldErrors?: Array<{
          __typename?: "ZodFieldError";
          message: string;
          path: Array<string>;
        }> | null;
      };
};

export type HideGiftCardWalletMutationVariables = Exact<{
  input: Scalars["String"];
}>;

export type HideGiftCardWalletMutation = {
  __typename?: "Mutation";
  hideGiftcardWallet?:
    | { __typename?: "BaseError"; code: string; message: string }
    | { __typename?: "MutationHideGiftcardWalletSuccess"; data: any }
    | {
        __typename?: "ValidationError";
        code: string;
        message: string;
        fieldErrors?: Array<{
          __typename?: "ZodFieldError";
          message: string;
          path: Array<string>;
        }> | null;
      }
    | null;
};

export type GetGiftCardCatalogQueryVariables = Exact<{ [key: string]: never }>;

export type GetGiftCardCatalogQuery = {
  __typename?: "Query";
  giftCardCatalog:
    | { __typename?: "BaseError" }
    | {
        __typename: "QueryGiftCardCatalogSuccess";
        data: Array<{
          __typename?: "GiftCardCatalog";
          maximumRedemptionValue: number;
          minimumRedemptionValue: number;
          category: CatalogCategory;
          brandList: Array<{
            __typename?: "GiftCardBrand";
            alwaysShowDisclaimer: boolean;
            brandKey: string;
            brandName: string;
            description: string;
            disclaimer: string;
            terms: string;
            imageUrl: string;
            popularityRank: number;
            effectiveDollarPerPointsValue: number;
            items: Array<{
              __typename?: "GiftCardItem";
              utid: string;
              faceValue: number;
              pointsValue: number;
            }>;
          }>;
        }>;
      }
    | { __typename?: "ValidationError" };
};

export type GetGiftCardWalletQueryVariables = Exact<{ [key: string]: never }>;

export type GetGiftCardWalletQuery = {
  __typename?: "Query";
  giftCardWallet:
    | { __typename?: "BaseError" }
    | {
        __typename: "QueryGiftCardWalletSuccess";
        data: Array<{
          __typename?: "GiftCardWallet";
          brandName: string;
          externalRefID: string;
          hexColor?: string | null;
          imageUrl: string;
          faceValue: number;
          credentials: Array<any>;
          createdAt: any;
        }>;
      }
    | { __typename?: "ValidationError" };
};

export type CreateAchPaymentMethodMutationVariables = Exact<{
  paymentMethodInput: CreateAchPaymentMethodInput;
}>;

export type CreateAchPaymentMethodMutation = {
  __typename?: "Mutation";
  createACHPaymentMethod:
    | { __typename?: "BaseError"; code: string; message: string }
    | {
        __typename?: "MutationCreateACHPaymentMethodSuccess";
        data: { __typename?: "PaymentMethod"; id: string };
      }
    | {
        __typename?: "ValidationError";
        code: string;
        message: string;
        fieldErrors?: Array<{
          __typename?: "ZodFieldError";
          message: string;
          path: Array<string>;
        }> | null;
      };
};

export type CreateInstantPaymentMutationVariables = Exact<{
  paymentMethodInput: CreateInstantPaymentInput;
}>;

export type CreateInstantPaymentMutation = {
  __typename?: "Mutation";
  createInstantPayment:
    | { __typename?: "BaseError"; code: string; message: string }
    | {
        __typename?: "MutationCreateInstantPaymentSuccess";
        data: {
          __typename?: "PaymentSchedule";
          amount?: string | null;
          paymentDate?: any | null;
          methodId: string;
          id: string;
          status: PaymentScheduleStatus;
        };
      }
    | {
        __typename?: "ValidationError";
        code: string;
        message: string;
        fieldErrors?: Array<{
          __typename?: "ZodFieldError";
          message: string;
          path: Array<string>;
        }> | null;
      };
};

export type CreateDueDatePaymentScheduleMutationVariables = Exact<{
  methodId: Scalars["String"];
  type: PaymentType;
}>;

export type CreateDueDatePaymentScheduleMutation = {
  __typename?: "Mutation";
  upsertAutoPaymentSchedule:
    | { __typename?: "BaseError" }
    | {
        __typename?: "MutationUpsertAutoPaymentScheduleSuccess";
        data: { __typename?: "PaymentSchedule"; methodId: string };
      }
    | { __typename?: "ValidationError" };
};

export type DeletePaymentScheduleMutationVariables = Exact<{
  scheduleId: Scalars["String"];
}>;

export type DeletePaymentScheduleMutation = {
  __typename?: "Mutation";
  removeAutoPaymentSchedule:
    | { __typename?: "BaseError" }
    | { __typename?: "MutationRemoveAutoPaymentScheduleSuccess"; data: boolean }
    | { __typename?: "ValidationError" };
};

export type GetCurrentStatementPaymentOptionsQueryVariables = Exact<{
  [key: string]: never;
}>;

export type GetCurrentStatementPaymentOptionsQuery = {
  __typename?: "Query";
  account:
    | { __typename?: "BaseError" }
    | {
        __typename?: "QueryAccountSuccess";
        data: {
          __typename?: "Account";
          currentBalance: number;
          dueAmount: number;
          minimumPayment: number;
        };
      }
    | { __typename?: "ValidationError" };
};

export type GetAchPaymentMethodsQueryVariables = Exact<{ [key: string]: never }>;

export type GetAchPaymentMethodsQuery = {
  __typename?: "Query";
  paymentMethods:
    | { __typename?: "BaseError" }
    | {
        __typename?: "QueryPaymentMethodsSuccess";
        data: Array<{
          __typename?: "PaymentMethod";
          id: string;
          accountLast4Digits: string;
          accountType: BankAccountType;
          bankName: string;
          status: PaymentMethodStatus;
        }>;
      }
    | { __typename?: "ValidationError" };
};

export type GetPaymentSchedulesQueryVariables = Exact<{ [key: string]: never }>;

export type GetPaymentSchedulesQuery = {
  __typename?: "Query";
  activeAutoPayment?:
    | { __typename?: "BaseError" }
    | {
        __typename?: "QueryActiveAutoPaymentSuccess";
        data: {
          __typename?: "PaymentSchedule";
          amount?: string | null;
          id: string;
          status: PaymentScheduleStatus;
          paymentDate?: any | null;
          type: PaymentType;
          methodId: string;
          frequency: PaymentScheduleFrequency;
        };
      }
    | { __typename?: "ValidationError" }
    | null;
};

export type CreateReferColleaguesMutationVariables = Exact<{
  inviteeEmails: Array<Scalars["String"]> | Scalars["String"];
}>;

export type CreateReferColleaguesMutation = {
  __typename?: "Mutation";
  referColleagues?:
    | { __typename?: "BaseError"; code: string; message: string }
    | { __typename?: "MutationReferColleaguesSuccess"; data: any }
    | { __typename?: "ValidationError"; code: string; message: string }
    | null;
};

export type GetReferralOfferCtaTextsQueryVariables = Exact<{ [key: string]: never }>;

export type GetReferralOfferCtaTextsQuery = {
  __typename?: "Query";
  referralOffer:
    | { __typename?: "BaseError"; code: string; message: string }
    | {
        __typename: "QueryReferralOfferSuccess";
        data: { __typename?: "Offer"; reward: string; title: string; details: string };
      }
    | { __typename?: "ValidationError"; code: string; message: string };
};

export type GetRecommendedReferralsQueryVariables = Exact<{
  searchText?: InputMaybe<Scalars["String"]>;
}>;

export type GetRecommendedReferralsQuery = {
  __typename?: "Query";
  recommendedReferrals:
    | { __typename?: "BaseError"; code: string; message: string }
    | {
        __typename?: "QueryRecommendedReferralsSuccess";
        data: Array<{
          __typename?: "ReferralEmployee";
          firstName: string;
          lastName: string;
          workEmail: string;
        }>;
      }
    | { __typename?: "ValidationError"; code: string; message: string };
};

export type GetStatementsQueryVariables = Exact<{ [key: string]: never }>;

export type GetStatementsQuery = {
  __typename?: "Query";
  statements:
    | { __typename?: "BaseError" }
    | {
        __typename: "QueryStatementsSuccess";
        data: {
          __typename?: "Statements";
          statements: Array<{
            __typename?: "Statement";
            startDate: any;
            endDate: any;
            id: string;
            currentBalance: string;
            previousBalance: string;
            paymentsAndCredits: string;
          }>;
        };
      }
    | { __typename?: "ValidationError" };
};

export type CreateRedeemPointsForCashbackMutationVariables = Exact<{
  amount: Scalars["Int"];
}>;

export type CreateRedeemPointsForCashbackMutation = {
  __typename?: "Mutation";
  redeemPointsForCashback?:
    | { __typename?: "BaseError"; code: string; message: string }
    | { __typename?: "MutationRedeemPointsForCashbackSuccess"; data: any }
    | {
        __typename?: "ValidationError";
        code: string;
        message: string;
        fieldErrors?: Array<{
          __typename?: "ZodFieldError";
          message: string;
          path: Array<string>;
        }> | null;
      }
    | null;
};

export type GetTotalPointsQueryVariables = Exact<{ [key: string]: never }>;

export type GetTotalPointsQuery = {
  __typename?: "Query";
  totalPoints?:
    | { __typename?: "BaseError" }
    | { __typename: "QueryTotalPointsSuccess"; data: number }
    | { __typename?: "ValidationError" }
    | null;
};

export type CreateDisputeMutationVariables = Exact<{
  input: CreateDisputeInput;
}>;

export type CreateDisputeMutation = {
  __typename?: "Mutation";
  createDispute:
    | { __typename?: "BaseError"; code: string; message: string }
    | {
        __typename?: "MutationCreateDisputeSuccess";
        data: { __typename?: "Dispute"; id: string };
      }
    | { __typename?: "ValidationError"; code: string; message: string };
};

export type GetTransactionsQueryVariables = Exact<{
  offset?: InputMaybe<Scalars["Int"]>;
  pageSize?: InputMaybe<Scalars["Int"]>;
  merchantName?: InputMaybe<Scalars["String"]>;
  filterType?: InputMaybe<Array<TransactionType> | TransactionType>;
  transactedAfter?: InputMaybe<Scalars["DateTime"]>;
  sort: TransactionsSortInput;
}>;

export type GetTransactionsQuery = {
  __typename?: "Query";
  transactions:
    | { __typename?: "BaseError" }
    | {
        __typename: "QueryTransactionsSuccess";
        data: {
          __typename?: "Transactions";
          hasMore: boolean;
          nextPageOffset?: number | null;
          allTransactions: Array<
            | {
                __typename?: "PaymentTransaction";
                amountInDollars: number;
                type: PaymentTransactionType;
                transactedAt: any;
                displayTitle: string;
                id: number;
                paymentStatus: PaymentTransactionStatus;
              }
            | {
                __typename?: "Transaction";
                transactedAt: any;
                creditIndicator: CreditIndicator;
                amountInDollars: number;
                id: number;
                hypercardCategoryIconUrl: string;
                transactionStatus: TransactionStatus;
                externalMerchant?: {
                  __typename?: "ExternalMerchant";
                  displayName: string;
                } | null;
              }
          >;
        };
      }
    | { __typename?: "ValidationError" };
};

export type GetTransactionByIdQueryVariables = Exact<{
  transactionId: Scalars["Int"];
}>;

export type GetTransactionByIdQuery = {
  __typename?: "Query";
  transaction?:
    | { __typename?: "BaseError" }
    | {
        __typename?: "QueryTransactionSuccess";
        data: {
          __typename?: "Transaction";
          creditIndicator: CreditIndicator;
          amountInDollars: number;
          cardLast4Digits?: string | null;
          transactedAt: any;
          status: TransactionStatus;
          settledAt?: any | null;
          type: TransactionType;
          dispute?: { __typename?: "Dispute"; status: DisputeStatus } | null;
          externalMerchant?: {
            __typename?: "ExternalMerchant";
            displayName: string;
            category: { __typename?: "Category"; name: string };
          } | null;
          reward?: {
            __typename?: "TransactionReward";
            cashbackReward?: {
              __typename?: "Reward";
              rewardDescription: string;
              amount: number;
            } | null;
            pointsReward?: {
              __typename?: "Reward";
              rewardDescription: string;
              amount: number;
            } | null;
          } | null;
        };
      }
    | { __typename?: "ValidationError" }
    | null;
};

export const SendOtpDocument = gql`
  mutation SendOtp($phoneNumber: String!) {
    sendOTP(phoneNumber: $phoneNumber) {
      ... on MutationSendOTPSuccess {
        data
      }
      ... on Error {
        code
        message
      }
    }
  }
`;
export type SendOtpMutationFn = Apollo.MutationFunction<
  SendOtpMutation,
  SendOtpMutationVariables
>;

/**
 * __useSendOtpMutation__
 *
 * To run a mutation, you first call `useSendOtpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendOtpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendOtpMutation, { data, loading, error }] = useSendOtpMutation({
 *   variables: {
 *      phoneNumber: // value for 'phoneNumber'
 *   },
 * });
 */
export function useSendOtpMutation(
  baseOptions?: Apollo.MutationHookOptions<SendOtpMutation, SendOtpMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SendOtpMutation, SendOtpMutationVariables>(
    SendOtpDocument,
    options,
  );
}
export type SendOtpMutationHookResult = ReturnType<typeof useSendOtpMutation>;
export type SendOtpMutationResult = Apollo.MutationResult<SendOtpMutation>;
export type SendOtpMutationOptions = Apollo.BaseMutationOptions<
  SendOtpMutation,
  SendOtpMutationVariables
>;
export const SubmitFeedbackDocument = gql`
  mutation SubmitFeedback($feedback: String!) {
    submitFeedback(feedback: $feedback) {
      ... on MutationSubmitFeedbackSuccess {
        data
      }
      ... on Error {
        code
        message
      }
    }
  }
`;
export type SubmitFeedbackMutationFn = Apollo.MutationFunction<
  SubmitFeedbackMutation,
  SubmitFeedbackMutationVariables
>;

/**
 * __useSubmitFeedbackMutation__
 *
 * To run a mutation, you first call `useSubmitFeedbackMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubmitFeedbackMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [submitFeedbackMutation, { data, loading, error }] = useSubmitFeedbackMutation({
 *   variables: {
 *      feedback: // value for 'feedback'
 *   },
 * });
 */
export function useSubmitFeedbackMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SubmitFeedbackMutation,
    SubmitFeedbackMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SubmitFeedbackMutation, SubmitFeedbackMutationVariables>(
    SubmitFeedbackDocument,
    options,
  );
}
export type SubmitFeedbackMutationHookResult = ReturnType<
  typeof useSubmitFeedbackMutation
>;
export type SubmitFeedbackMutationResult = Apollo.MutationResult<SubmitFeedbackMutation>;
export type SubmitFeedbackMutationOptions = Apollo.BaseMutationOptions<
  SubmitFeedbackMutation,
  SubmitFeedbackMutationVariables
>;
export const SubmitUpdateFreezeStatusDocument = gql`
  mutation SubmitUpdateFreezeStatus($shouldFreeze: Boolean!) {
    updateFreezeStatus(shouldFreeze: $shouldFreeze) {
      ... on MutationUpdateFreezeStatusSuccess {
        data
      }
      ... on BaseError {
        code
        message
      }
      ... on ValidationError {
        code
        message
      }
    }
  }
`;
export type SubmitUpdateFreezeStatusMutationFn = Apollo.MutationFunction<
  SubmitUpdateFreezeStatusMutation,
  SubmitUpdateFreezeStatusMutationVariables
>;

/**
 * __useSubmitUpdateFreezeStatusMutation__
 *
 * To run a mutation, you first call `useSubmitUpdateFreezeStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubmitUpdateFreezeStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [submitUpdateFreezeStatusMutation, { data, loading, error }] = useSubmitUpdateFreezeStatusMutation({
 *   variables: {
 *      shouldFreeze: // value for 'shouldFreeze'
 *   },
 * });
 */
export function useSubmitUpdateFreezeStatusMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SubmitUpdateFreezeStatusMutation,
    SubmitUpdateFreezeStatusMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    SubmitUpdateFreezeStatusMutation,
    SubmitUpdateFreezeStatusMutationVariables
  >(SubmitUpdateFreezeStatusDocument, options);
}
export type SubmitUpdateFreezeStatusMutationHookResult = ReturnType<
  typeof useSubmitUpdateFreezeStatusMutation
>;
export type SubmitUpdateFreezeStatusMutationResult =
  Apollo.MutationResult<SubmitUpdateFreezeStatusMutation>;
export type SubmitUpdateFreezeStatusMutationOptions = Apollo.BaseMutationOptions<
  SubmitUpdateFreezeStatusMutation,
  SubmitUpdateFreezeStatusMutationVariables
>;
export const SubmitReplaceCardDocument = gql`
  mutation SubmitReplaceCard(
    $newShippingAddress: UpdateCardholderAddressInput
    $reason: CardReplacementReason!
  ) {
    replaceCard(newShippingAddress: $newShippingAddress, reason: $reason) {
      ... on MutationReplaceCardSuccess {
        data {
          note
        }
      }
      ... on BaseError {
        code
        message
      }
      ... on ValidationError {
        code
        message
      }
    }
  }
`;
export type SubmitReplaceCardMutationFn = Apollo.MutationFunction<
  SubmitReplaceCardMutation,
  SubmitReplaceCardMutationVariables
>;

/**
 * __useSubmitReplaceCardMutation__
 *
 * To run a mutation, you first call `useSubmitReplaceCardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubmitReplaceCardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [submitReplaceCardMutation, { data, loading, error }] = useSubmitReplaceCardMutation({
 *   variables: {
 *      newShippingAddress: // value for 'newShippingAddress'
 *      reason: // value for 'reason'
 *   },
 * });
 */
export function useSubmitReplaceCardMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SubmitReplaceCardMutation,
    SubmitReplaceCardMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    SubmitReplaceCardMutation,
    SubmitReplaceCardMutationVariables
  >(SubmitReplaceCardDocument, options);
}
export type SubmitReplaceCardMutationHookResult = ReturnType<
  typeof useSubmitReplaceCardMutation
>;
export type SubmitReplaceCardMutationResult =
  Apollo.MutationResult<SubmitReplaceCardMutation>;
export type SubmitReplaceCardMutationOptions = Apollo.BaseMutationOptions<
  SubmitReplaceCardMutation,
  SubmitReplaceCardMutationVariables
>;
export const UpdateNotificationSettingsDocument = gql`
  mutation UpdateNotificationSettings($settings: NotificationSettingsInput!) {
    updateNotificationSettings(settings: $settings) {
      ... on MutationUpdateNotificationSettingsSuccess {
        data {
          promotions
          rewards
          transactions
        }
      }
      ... on BaseError {
        code
        message
      }
      ... on ValidationError {
        code
        message
      }
    }
  }
`;
export type UpdateNotificationSettingsMutationFn = Apollo.MutationFunction<
  UpdateNotificationSettingsMutation,
  UpdateNotificationSettingsMutationVariables
>;

/**
 * __useUpdateNotificationSettingsMutation__
 *
 * To run a mutation, you first call `useUpdateNotificationSettingsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateNotificationSettingsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateNotificationSettingsMutation, { data, loading, error }] = useUpdateNotificationSettingsMutation({
 *   variables: {
 *      settings: // value for 'settings'
 *   },
 * });
 */
export function useUpdateNotificationSettingsMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateNotificationSettingsMutation,
    UpdateNotificationSettingsMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateNotificationSettingsMutation,
    UpdateNotificationSettingsMutationVariables
  >(UpdateNotificationSettingsDocument, options);
}
export type UpdateNotificationSettingsMutationHookResult = ReturnType<
  typeof useUpdateNotificationSettingsMutation
>;
export type UpdateNotificationSettingsMutationResult =
  Apollo.MutationResult<UpdateNotificationSettingsMutation>;
export type UpdateNotificationSettingsMutationOptions = Apollo.BaseMutationOptions<
  UpdateNotificationSettingsMutation,
  UpdateNotificationSettingsMutationVariables
>;
export const UpdateUserAddressDocument = gql`
  mutation UpdateUserAddress($address: UpdateCardholderAddressInput!) {
    updateUserAddress(address: $address) {
      ... on MutationUpdateUserAddressSuccess {
        data
      }
    }
  }
`;
export type UpdateUserAddressMutationFn = Apollo.MutationFunction<
  UpdateUserAddressMutation,
  UpdateUserAddressMutationVariables
>;

/**
 * __useUpdateUserAddressMutation__
 *
 * To run a mutation, you first call `useUpdateUserAddressMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserAddressMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserAddressMutation, { data, loading, error }] = useUpdateUserAddressMutation({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useUpdateUserAddressMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateUserAddressMutation,
    UpdateUserAddressMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateUserAddressMutation,
    UpdateUserAddressMutationVariables
  >(UpdateUserAddressDocument, options);
}
export type UpdateUserAddressMutationHookResult = ReturnType<
  typeof useUpdateUserAddressMutation
>;
export type UpdateUserAddressMutationResult =
  Apollo.MutationResult<UpdateUserAddressMutation>;
export type UpdateUserAddressMutationOptions = Apollo.BaseMutationOptions<
  UpdateUserAddressMutation,
  UpdateUserAddressMutationVariables
>;
export const GetEmploymentStartDateDocument = gql`
  query GetEmploymentStartDate {
    cardholder @persist {
      ... on QueryCardholderSuccess {
        data {
          employmentStartDate
        }
      }
    }
  }
`;

/**
 * __useGetEmploymentStartDateQuery__
 *
 * To run a query within a React component, call `useGetEmploymentStartDateQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEmploymentStartDateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEmploymentStartDateQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetEmploymentStartDateQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetEmploymentStartDateQuery,
    GetEmploymentStartDateQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetEmploymentStartDateQuery,
    GetEmploymentStartDateQueryVariables
  >(GetEmploymentStartDateDocument, options);
}
export function useGetEmploymentStartDateLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetEmploymentStartDateQuery,
    GetEmploymentStartDateQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetEmploymentStartDateQuery,
    GetEmploymentStartDateQueryVariables
  >(GetEmploymentStartDateDocument, options);
}
export type GetEmploymentStartDateQueryHookResult = ReturnType<
  typeof useGetEmploymentStartDateQuery
>;
export type GetEmploymentStartDateLazyQueryHookResult = ReturnType<
  typeof useGetEmploymentStartDateLazyQuery
>;
export type GetEmploymentStartDateQueryResult = Apollo.QueryResult<
  GetEmploymentStartDateQuery,
  GetEmploymentStartDateQueryVariables
>;
export const GetAccountDetailsForHomeDocument = gql`
  query GetAccountDetailsForHome {
    account {
      ... on QueryAccountSuccess {
        data {
          creditLimit
          currentBalance
          dueDateUtc
        }
      }
    }
    cardholder {
      ... on QueryCardholderSuccess {
        data {
          firstName
          lastName
        }
      }
    }
    paymentMethods {
      ... on QueryPaymentMethodsSuccess {
        data {
          id
        }
      }
    }
    cardArt {
      ... on QueryCardArtSuccess {
        data {
          backImageUrl
          frontImageUrl
        }
      }
    }
  }
`;

/**
 * __useGetAccountDetailsForHomeQuery__
 *
 * To run a query within a React component, call `useGetAccountDetailsForHomeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAccountDetailsForHomeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAccountDetailsForHomeQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAccountDetailsForHomeQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetAccountDetailsForHomeQuery,
    GetAccountDetailsForHomeQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetAccountDetailsForHomeQuery,
    GetAccountDetailsForHomeQueryVariables
  >(GetAccountDetailsForHomeDocument, options);
}
export function useGetAccountDetailsForHomeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAccountDetailsForHomeQuery,
    GetAccountDetailsForHomeQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetAccountDetailsForHomeQuery,
    GetAccountDetailsForHomeQueryVariables
  >(GetAccountDetailsForHomeDocument, options);
}
export type GetAccountDetailsForHomeQueryHookResult = ReturnType<
  typeof useGetAccountDetailsForHomeQuery
>;
export type GetAccountDetailsForHomeLazyQueryHookResult = ReturnType<
  typeof useGetAccountDetailsForHomeLazyQuery
>;
export type GetAccountDetailsForHomeQueryResult = Apollo.QueryResult<
  GetAccountDetailsForHomeQuery,
  GetAccountDetailsForHomeQueryVariables
>;
export const GetPrimaryCardDataDocument = gql`
  query GetPrimaryCardData {
    primaryCard(detokenized: true) @persist {
      ... on QueryPrimaryCardSuccess {
        data {
          cardNumber
          cvv
          expirationDate
          status
          id
          last4Digits
        }
      }
    }
  }
`;

/**
 * __useGetPrimaryCardDataQuery__
 *
 * To run a query within a React component, call `useGetPrimaryCardDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPrimaryCardDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPrimaryCardDataQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPrimaryCardDataQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetPrimaryCardDataQuery,
    GetPrimaryCardDataQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetPrimaryCardDataQuery, GetPrimaryCardDataQueryVariables>(
    GetPrimaryCardDataDocument,
    options,
  );
}
export function useGetPrimaryCardDataLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPrimaryCardDataQuery,
    GetPrimaryCardDataQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetPrimaryCardDataQuery, GetPrimaryCardDataQueryVariables>(
    GetPrimaryCardDataDocument,
    options,
  );
}
export type GetPrimaryCardDataQueryHookResult = ReturnType<
  typeof useGetPrimaryCardDataQuery
>;
export type GetPrimaryCardDataLazyQueryHookResult = ReturnType<
  typeof useGetPrimaryCardDataLazyQuery
>;
export type GetPrimaryCardDataQueryResult = Apollo.QueryResult<
  GetPrimaryCardDataQuery,
  GetPrimaryCardDataQueryVariables
>;
export const GetPrimaryCardIdDocument = gql`
  query GetPrimaryCardId {
    primaryCard(detokenized: false) {
      ... on QueryPrimaryCardSuccess {
        data {
          id
        }
      }
      ... on BaseError {
        code
        message
      }
      ... on ValidationError {
        code
        message
      }
    }
  }
`;

/**
 * __useGetPrimaryCardIdQuery__
 *
 * To run a query within a React component, call `useGetPrimaryCardIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPrimaryCardIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPrimaryCardIdQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPrimaryCardIdQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetPrimaryCardIdQuery,
    GetPrimaryCardIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetPrimaryCardIdQuery, GetPrimaryCardIdQueryVariables>(
    GetPrimaryCardIdDocument,
    options,
  );
}
export function useGetPrimaryCardIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPrimaryCardIdQuery,
    GetPrimaryCardIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetPrimaryCardIdQuery, GetPrimaryCardIdQueryVariables>(
    GetPrimaryCardIdDocument,
    options,
  );
}
export type GetPrimaryCardIdQueryHookResult = ReturnType<typeof useGetPrimaryCardIdQuery>;
export type GetPrimaryCardIdLazyQueryHookResult = ReturnType<
  typeof useGetPrimaryCardIdLazyQuery
>;
export type GetPrimaryCardIdQueryResult = Apollo.QueryResult<
  GetPrimaryCardIdQuery,
  GetPrimaryCardIdQueryVariables
>;
export const GetAccountBalanceDocument = gql`
  query GetAccountBalance {
    account {
      ... on QueryAccountSuccess {
        data {
          creditLimit
          currentBalance
          dueDateUtc
        }
      }
    }
  }
`;

/**
 * __useGetAccountBalanceQuery__
 *
 * To run a query within a React component, call `useGetAccountBalanceQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAccountBalanceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAccountBalanceQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAccountBalanceQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetAccountBalanceQuery,
    GetAccountBalanceQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAccountBalanceQuery, GetAccountBalanceQueryVariables>(
    GetAccountBalanceDocument,
    options,
  );
}
export function useGetAccountBalanceLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAccountBalanceQuery,
    GetAccountBalanceQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetAccountBalanceQuery, GetAccountBalanceQueryVariables>(
    GetAccountBalanceDocument,
    options,
  );
}
export type GetAccountBalanceQueryHookResult = ReturnType<
  typeof useGetAccountBalanceQuery
>;
export type GetAccountBalanceLazyQueryHookResult = ReturnType<
  typeof useGetAccountBalanceLazyQuery
>;
export type GetAccountBalanceQueryResult = Apollo.QueryResult<
  GetAccountBalanceQuery,
  GetAccountBalanceQueryVariables
>;
export const GetOffersForMembershipDocument = gql`
  query GetOffersForMembership($category: OfferCategory) {
    offers(category: $category) {
      ... on QueryOffersSuccess {
        data {
          title
          details
          longDetails
          hypercardMerchant {
            logoImageUrl
          }
        }
      }
    }
  }
`;

/**
 * __useGetOffersForMembershipQuery__
 *
 * To run a query within a React component, call `useGetOffersForMembershipQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOffersForMembershipQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOffersForMembershipQuery({
 *   variables: {
 *      category: // value for 'category'
 *   },
 * });
 */
export function useGetOffersForMembershipQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetOffersForMembershipQuery,
    GetOffersForMembershipQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetOffersForMembershipQuery,
    GetOffersForMembershipQueryVariables
  >(GetOffersForMembershipDocument, options);
}
export function useGetOffersForMembershipLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetOffersForMembershipQuery,
    GetOffersForMembershipQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetOffersForMembershipQuery,
    GetOffersForMembershipQueryVariables
  >(GetOffersForMembershipDocument, options);
}
export type GetOffersForMembershipQueryHookResult = ReturnType<
  typeof useGetOffersForMembershipQuery
>;
export type GetOffersForMembershipLazyQueryHookResult = ReturnType<
  typeof useGetOffersForMembershipLazyQuery
>;
export type GetOffersForMembershipQueryResult = Apollo.QueryResult<
  GetOffersForMembershipQuery,
  GetOffersForMembershipQueryVariables
>;
export const GetRestaurantsDocument = gql`
  query GetRestaurants($restaurantCity: RestaurantCity) {
    offers(restaurantCity: $restaurantCity, onlyRestaurantOffers: true) {
      ... on QueryOffersSuccess {
        data {
          title
          details
          restaurantOffer {
            primaryImageUrl
            secondaryImageUrl
            location
            city
          }
        }
      }
    }
  }
`;

/**
 * __useGetRestaurantsQuery__
 *
 * To run a query within a React component, call `useGetRestaurantsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRestaurantsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRestaurantsQuery({
 *   variables: {
 *      restaurantCity: // value for 'restaurantCity'
 *   },
 * });
 */
export function useGetRestaurantsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetRestaurantsQuery,
    GetRestaurantsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetRestaurantsQuery, GetRestaurantsQueryVariables>(
    GetRestaurantsDocument,
    options,
  );
}
export function useGetRestaurantsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetRestaurantsQuery,
    GetRestaurantsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetRestaurantsQuery, GetRestaurantsQueryVariables>(
    GetRestaurantsDocument,
    options,
  );
}
export type GetRestaurantsQueryHookResult = ReturnType<typeof useGetRestaurantsQuery>;
export type GetRestaurantsLazyQueryHookResult = ReturnType<
  typeof useGetRestaurantsLazyQuery
>;
export type GetRestaurantsQueryResult = Apollo.QueryResult<
  GetRestaurantsQuery,
  GetRestaurantsQueryVariables
>;
export const GetCardholderAddressDocument = gql`
  query GetCardholderAddress {
    cardholder {
      ... on QueryCardholderSuccess {
        data {
          residentialAddress {
            addressLine1
            addressLine2
            city
            state
            type
            zip
          }
          shippingAddress {
            addressLine1
            addressLine2
            city
            state
            type
            zip
          }
        }
      }
      ... on BaseError {
        code
        message
      }
      ... on ValidationError {
        code
        message
      }
    }
  }
`;

/**
 * __useGetCardholderAddressQuery__
 *
 * To run a query within a React component, call `useGetCardholderAddressQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCardholderAddressQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCardholderAddressQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCardholderAddressQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetCardholderAddressQuery,
    GetCardholderAddressQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetCardholderAddressQuery, GetCardholderAddressQueryVariables>(
    GetCardholderAddressDocument,
    options,
  );
}
export function useGetCardholderAddressLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCardholderAddressQuery,
    GetCardholderAddressQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetCardholderAddressQuery,
    GetCardholderAddressQueryVariables
  >(GetCardholderAddressDocument, options);
}
export type GetCardholderAddressQueryHookResult = ReturnType<
  typeof useGetCardholderAddressQuery
>;
export type GetCardholderAddressLazyQueryHookResult = ReturnType<
  typeof useGetCardholderAddressLazyQuery
>;
export type GetCardholderAddressQueryResult = Apollo.QueryResult<
  GetCardholderAddressQuery,
  GetCardholderAddressQueryVariables
>;
export const GetFeatureFlagsDocument = gql`
  query GetFeatureFlags {
    featureFlags {
      ... on QueryFeatureFlagsSuccess {
        data {
          expenseManagementShown
        }
      }
      ... on BaseError {
        code
        message
      }
      ... on ValidationError {
        code
        message
      }
    }
  }
`;

/**
 * __useGetFeatureFlagsQuery__
 *
 * To run a query within a React component, call `useGetFeatureFlagsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFeatureFlagsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFeatureFlagsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetFeatureFlagsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetFeatureFlagsQuery,
    GetFeatureFlagsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetFeatureFlagsQuery, GetFeatureFlagsQueryVariables>(
    GetFeatureFlagsDocument,
    options,
  );
}
export function useGetFeatureFlagsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetFeatureFlagsQuery,
    GetFeatureFlagsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetFeatureFlagsQuery, GetFeatureFlagsQueryVariables>(
    GetFeatureFlagsDocument,
    options,
  );
}
export type GetFeatureFlagsQueryHookResult = ReturnType<typeof useGetFeatureFlagsQuery>;
export type GetFeatureFlagsLazyQueryHookResult = ReturnType<
  typeof useGetFeatureFlagsLazyQuery
>;
export type GetFeatureFlagsQueryResult = Apollo.QueryResult<
  GetFeatureFlagsQuery,
  GetFeatureFlagsQueryVariables
>;
export const GetNotificationSettingsDocument = gql`
  query GetNotificationSettings {
    notificationSettings {
      ... on QueryNotificationSettingsSuccess {
        data {
          promotions
          rewards
          transactions
        }
      }
      ... on BaseError {
        code
        message
      }
      ... on ValidationError {
        code
        message
      }
    }
  }
`;

/**
 * __useGetNotificationSettingsQuery__
 *
 * To run a query within a React component, call `useGetNotificationSettingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNotificationSettingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNotificationSettingsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetNotificationSettingsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetNotificationSettingsQuery,
    GetNotificationSettingsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetNotificationSettingsQuery,
    GetNotificationSettingsQueryVariables
  >(GetNotificationSettingsDocument, options);
}
export function useGetNotificationSettingsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetNotificationSettingsQuery,
    GetNotificationSettingsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetNotificationSettingsQuery,
    GetNotificationSettingsQueryVariables
  >(GetNotificationSettingsDocument, options);
}
export type GetNotificationSettingsQueryHookResult = ReturnType<
  typeof useGetNotificationSettingsQuery
>;
export type GetNotificationSettingsLazyQueryHookResult = ReturnType<
  typeof useGetNotificationSettingsLazyQuery
>;
export type GetNotificationSettingsQueryResult = Apollo.QueryResult<
  GetNotificationSettingsQuery,
  GetNotificationSettingsQueryVariables
>;
export const GetUserIdDocument = gql`
  query GetUserId {
    cardholder {
      ... on QueryCardholderSuccess {
        data {
          userId
        }
      }
    }
  }
`;

/**
 * __useGetUserIdQuery__
 *
 * To run a query within a React component, call `useGetUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserIdQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserIdQuery(
  baseOptions?: Apollo.QueryHookOptions<GetUserIdQuery, GetUserIdQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetUserIdQuery, GetUserIdQueryVariables>(
    GetUserIdDocument,
    options,
  );
}
export function useGetUserIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetUserIdQuery, GetUserIdQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetUserIdQuery, GetUserIdQueryVariables>(
    GetUserIdDocument,
    options,
  );
}
export type GetUserIdQueryHookResult = ReturnType<typeof useGetUserIdQuery>;
export type GetUserIdLazyQueryHookResult = ReturnType<typeof useGetUserIdLazyQuery>;
export type GetUserIdQueryResult = Apollo.QueryResult<
  GetUserIdQuery,
  GetUserIdQueryVariables
>;
export const CreateGiftCardOrderDocument = gql`
  mutation CreateGiftCardOrder($input: GiftCardCreateOrderInputSchema!) {
    createGiftCardOrder(input: $input) {
      ... on MutationCreateGiftCardOrderSuccess {
        data {
          status
          message
        }
      }
      ... on ValidationError {
        code
        fieldErrors {
          message
          path
        }
        message
      }
      ... on BaseError {
        code
        message
      }
    }
  }
`;
export type CreateGiftCardOrderMutationFn = Apollo.MutationFunction<
  CreateGiftCardOrderMutation,
  CreateGiftCardOrderMutationVariables
>;

/**
 * __useCreateGiftCardOrderMutation__
 *
 * To run a mutation, you first call `useCreateGiftCardOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateGiftCardOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createGiftCardOrderMutation, { data, loading, error }] = useCreateGiftCardOrderMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateGiftCardOrderMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateGiftCardOrderMutation,
    CreateGiftCardOrderMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateGiftCardOrderMutation,
    CreateGiftCardOrderMutationVariables
  >(CreateGiftCardOrderDocument, options);
}
export type CreateGiftCardOrderMutationHookResult = ReturnType<
  typeof useCreateGiftCardOrderMutation
>;
export type CreateGiftCardOrderMutationResult =
  Apollo.MutationResult<CreateGiftCardOrderMutation>;
export type CreateGiftCardOrderMutationOptions = Apollo.BaseMutationOptions<
  CreateGiftCardOrderMutation,
  CreateGiftCardOrderMutationVariables
>;
export const HideGiftCardWalletDocument = gql`
  mutation HideGiftCardWallet($input: String!) {
    hideGiftcardWallet(externalRefID: $input) {
      ... on MutationHideGiftcardWalletSuccess {
        data
      }
      ... on ValidationError {
        code
        fieldErrors {
          message
          path
        }
        message
      }
      ... on BaseError {
        code
        message
      }
    }
  }
`;
export type HideGiftCardWalletMutationFn = Apollo.MutationFunction<
  HideGiftCardWalletMutation,
  HideGiftCardWalletMutationVariables
>;

/**
 * __useHideGiftCardWalletMutation__
 *
 * To run a mutation, you first call `useHideGiftCardWalletMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useHideGiftCardWalletMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [hideGiftCardWalletMutation, { data, loading, error }] = useHideGiftCardWalletMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useHideGiftCardWalletMutation(
  baseOptions?: Apollo.MutationHookOptions<
    HideGiftCardWalletMutation,
    HideGiftCardWalletMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    HideGiftCardWalletMutation,
    HideGiftCardWalletMutationVariables
  >(HideGiftCardWalletDocument, options);
}
export type HideGiftCardWalletMutationHookResult = ReturnType<
  typeof useHideGiftCardWalletMutation
>;
export type HideGiftCardWalletMutationResult =
  Apollo.MutationResult<HideGiftCardWalletMutation>;
export type HideGiftCardWalletMutationOptions = Apollo.BaseMutationOptions<
  HideGiftCardWalletMutation,
  HideGiftCardWalletMutationVariables
>;
export const GetGiftCardCatalogDocument = gql`
  query GetGiftCardCatalog {
    giftCardCatalog {
      ... on QueryGiftCardCatalogSuccess {
        __typename
        data {
          brandList {
            alwaysShowDisclaimer
            brandKey
            brandName
            description
            disclaimer
            terms
            imageUrl
            items {
              utid
              faceValue
              pointsValue
            }
            popularityRank
            effectiveDollarPerPointsValue
          }
          maximumRedemptionValue
          minimumRedemptionValue
          category
        }
      }
    }
  }
`;

/**
 * __useGetGiftCardCatalogQuery__
 *
 * To run a query within a React component, call `useGetGiftCardCatalogQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGiftCardCatalogQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGiftCardCatalogQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetGiftCardCatalogQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetGiftCardCatalogQuery,
    GetGiftCardCatalogQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetGiftCardCatalogQuery, GetGiftCardCatalogQueryVariables>(
    GetGiftCardCatalogDocument,
    options,
  );
}
export function useGetGiftCardCatalogLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetGiftCardCatalogQuery,
    GetGiftCardCatalogQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetGiftCardCatalogQuery, GetGiftCardCatalogQueryVariables>(
    GetGiftCardCatalogDocument,
    options,
  );
}
export type GetGiftCardCatalogQueryHookResult = ReturnType<
  typeof useGetGiftCardCatalogQuery
>;
export type GetGiftCardCatalogLazyQueryHookResult = ReturnType<
  typeof useGetGiftCardCatalogLazyQuery
>;
export type GetGiftCardCatalogQueryResult = Apollo.QueryResult<
  GetGiftCardCatalogQuery,
  GetGiftCardCatalogQueryVariables
>;
export const GetGiftCardWalletDocument = gql`
  query GetGiftCardWallet {
    giftCardWallet {
      ... on QueryGiftCardWalletSuccess {
        __typename
        data {
          brandName
          externalRefID
          hexColor
          imageUrl
          faceValue
          credentials
          createdAt
        }
      }
    }
  }
`;

/**
 * __useGetGiftCardWalletQuery__
 *
 * To run a query within a React component, call `useGetGiftCardWalletQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGiftCardWalletQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGiftCardWalletQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetGiftCardWalletQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetGiftCardWalletQuery,
    GetGiftCardWalletQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetGiftCardWalletQuery, GetGiftCardWalletQueryVariables>(
    GetGiftCardWalletDocument,
    options,
  );
}
export function useGetGiftCardWalletLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetGiftCardWalletQuery,
    GetGiftCardWalletQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetGiftCardWalletQuery, GetGiftCardWalletQueryVariables>(
    GetGiftCardWalletDocument,
    options,
  );
}
export type GetGiftCardWalletQueryHookResult = ReturnType<
  typeof useGetGiftCardWalletQuery
>;
export type GetGiftCardWalletLazyQueryHookResult = ReturnType<
  typeof useGetGiftCardWalletLazyQuery
>;
export type GetGiftCardWalletQueryResult = Apollo.QueryResult<
  GetGiftCardWalletQuery,
  GetGiftCardWalletQueryVariables
>;
export const CreateAchPaymentMethodDocument = gql`
  mutation CreateACHPaymentMethod($paymentMethodInput: CreateACHPaymentMethodInput!) {
    createACHPaymentMethod(paymentMethodInput: $paymentMethodInput) {
      ... on MutationCreateACHPaymentMethodSuccess {
        data {
          id
        }
      }
      ... on ValidationError {
        code
        fieldErrors {
          message
          path
        }
        message
      }
      ... on BaseError {
        code
        message
      }
      ... on Error {
        code
        message
      }
    }
  }
`;
export type CreateAchPaymentMethodMutationFn = Apollo.MutationFunction<
  CreateAchPaymentMethodMutation,
  CreateAchPaymentMethodMutationVariables
>;

/**
 * __useCreateAchPaymentMethodMutation__
 *
 * To run a mutation, you first call `useCreateAchPaymentMethodMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAchPaymentMethodMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAchPaymentMethodMutation, { data, loading, error }] = useCreateAchPaymentMethodMutation({
 *   variables: {
 *      paymentMethodInput: // value for 'paymentMethodInput'
 *   },
 * });
 */
export function useCreateAchPaymentMethodMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateAchPaymentMethodMutation,
    CreateAchPaymentMethodMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateAchPaymentMethodMutation,
    CreateAchPaymentMethodMutationVariables
  >(CreateAchPaymentMethodDocument, options);
}
export type CreateAchPaymentMethodMutationHookResult = ReturnType<
  typeof useCreateAchPaymentMethodMutation
>;
export type CreateAchPaymentMethodMutationResult =
  Apollo.MutationResult<CreateAchPaymentMethodMutation>;
export type CreateAchPaymentMethodMutationOptions = Apollo.BaseMutationOptions<
  CreateAchPaymentMethodMutation,
  CreateAchPaymentMethodMutationVariables
>;
export const CreateInstantPaymentDocument = gql`
  mutation CreateInstantPayment($paymentMethodInput: CreateInstantPaymentInput!) {
    createInstantPayment(input: $paymentMethodInput) {
      ... on MutationCreateInstantPaymentSuccess {
        data {
          amount
          paymentDate
          methodId
          id
          status
        }
      }
      ... on ValidationError {
        code
        fieldErrors {
          message
          path
        }
        message
      }
      ... on BaseError {
        code
        message
      }
      ... on Error {
        code
        message
      }
    }
  }
`;
export type CreateInstantPaymentMutationFn = Apollo.MutationFunction<
  CreateInstantPaymentMutation,
  CreateInstantPaymentMutationVariables
>;

/**
 * __useCreateInstantPaymentMutation__
 *
 * To run a mutation, you first call `useCreateInstantPaymentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateInstantPaymentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createInstantPaymentMutation, { data, loading, error }] = useCreateInstantPaymentMutation({
 *   variables: {
 *      paymentMethodInput: // value for 'paymentMethodInput'
 *   },
 * });
 */
export function useCreateInstantPaymentMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateInstantPaymentMutation,
    CreateInstantPaymentMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateInstantPaymentMutation,
    CreateInstantPaymentMutationVariables
  >(CreateInstantPaymentDocument, options);
}
export type CreateInstantPaymentMutationHookResult = ReturnType<
  typeof useCreateInstantPaymentMutation
>;
export type CreateInstantPaymentMutationResult =
  Apollo.MutationResult<CreateInstantPaymentMutation>;
export type CreateInstantPaymentMutationOptions = Apollo.BaseMutationOptions<
  CreateInstantPaymentMutation,
  CreateInstantPaymentMutationVariables
>;
export const CreateDueDatePaymentScheduleDocument = gql`
  mutation CreateDueDatePaymentSchedule($methodId: String!, $type: PaymentType!) {
    upsertAutoPaymentSchedule(input: { paymentMethodId: $methodId, type: $type }) {
      ... on MutationUpsertAutoPaymentScheduleSuccess {
        data {
          methodId
        }
      }
    }
  }
`;
export type CreateDueDatePaymentScheduleMutationFn = Apollo.MutationFunction<
  CreateDueDatePaymentScheduleMutation,
  CreateDueDatePaymentScheduleMutationVariables
>;

/**
 * __useCreateDueDatePaymentScheduleMutation__
 *
 * To run a mutation, you first call `useCreateDueDatePaymentScheduleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDueDatePaymentScheduleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDueDatePaymentScheduleMutation, { data, loading, error }] = useCreateDueDatePaymentScheduleMutation({
 *   variables: {
 *      methodId: // value for 'methodId'
 *      type: // value for 'type'
 *   },
 * });
 */
export function useCreateDueDatePaymentScheduleMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateDueDatePaymentScheduleMutation,
    CreateDueDatePaymentScheduleMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateDueDatePaymentScheduleMutation,
    CreateDueDatePaymentScheduleMutationVariables
  >(CreateDueDatePaymentScheduleDocument, options);
}
export type CreateDueDatePaymentScheduleMutationHookResult = ReturnType<
  typeof useCreateDueDatePaymentScheduleMutation
>;
export type CreateDueDatePaymentScheduleMutationResult =
  Apollo.MutationResult<CreateDueDatePaymentScheduleMutation>;
export type CreateDueDatePaymentScheduleMutationOptions = Apollo.BaseMutationOptions<
  CreateDueDatePaymentScheduleMutation,
  CreateDueDatePaymentScheduleMutationVariables
>;
export const DeletePaymentScheduleDocument = gql`
  mutation DeletePaymentSchedule($scheduleId: String!) {
    removeAutoPaymentSchedule(scheduleId: $scheduleId) {
      ... on MutationRemoveAutoPaymentScheduleSuccess {
        data
      }
    }
  }
`;
export type DeletePaymentScheduleMutationFn = Apollo.MutationFunction<
  DeletePaymentScheduleMutation,
  DeletePaymentScheduleMutationVariables
>;

/**
 * __useDeletePaymentScheduleMutation__
 *
 * To run a mutation, you first call `useDeletePaymentScheduleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePaymentScheduleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePaymentScheduleMutation, { data, loading, error }] = useDeletePaymentScheduleMutation({
 *   variables: {
 *      scheduleId: // value for 'scheduleId'
 *   },
 * });
 */
export function useDeletePaymentScheduleMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeletePaymentScheduleMutation,
    DeletePaymentScheduleMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeletePaymentScheduleMutation,
    DeletePaymentScheduleMutationVariables
  >(DeletePaymentScheduleDocument, options);
}
export type DeletePaymentScheduleMutationHookResult = ReturnType<
  typeof useDeletePaymentScheduleMutation
>;
export type DeletePaymentScheduleMutationResult =
  Apollo.MutationResult<DeletePaymentScheduleMutation>;
export type DeletePaymentScheduleMutationOptions = Apollo.BaseMutationOptions<
  DeletePaymentScheduleMutation,
  DeletePaymentScheduleMutationVariables
>;
export const GetCurrentStatementPaymentOptionsDocument = gql`
  query GetCurrentStatementPaymentOptions {
    account {
      ... on QueryAccountSuccess {
        data {
          currentBalance
          dueAmount
          minimumPayment
        }
      }
    }
  }
`;

/**
 * __useGetCurrentStatementPaymentOptionsQuery__
 *
 * To run a query within a React component, call `useGetCurrentStatementPaymentOptionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCurrentStatementPaymentOptionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCurrentStatementPaymentOptionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCurrentStatementPaymentOptionsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetCurrentStatementPaymentOptionsQuery,
    GetCurrentStatementPaymentOptionsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetCurrentStatementPaymentOptionsQuery,
    GetCurrentStatementPaymentOptionsQueryVariables
  >(GetCurrentStatementPaymentOptionsDocument, options);
}
export function useGetCurrentStatementPaymentOptionsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCurrentStatementPaymentOptionsQuery,
    GetCurrentStatementPaymentOptionsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetCurrentStatementPaymentOptionsQuery,
    GetCurrentStatementPaymentOptionsQueryVariables
  >(GetCurrentStatementPaymentOptionsDocument, options);
}
export type GetCurrentStatementPaymentOptionsQueryHookResult = ReturnType<
  typeof useGetCurrentStatementPaymentOptionsQuery
>;
export type GetCurrentStatementPaymentOptionsLazyQueryHookResult = ReturnType<
  typeof useGetCurrentStatementPaymentOptionsLazyQuery
>;
export type GetCurrentStatementPaymentOptionsQueryResult = Apollo.QueryResult<
  GetCurrentStatementPaymentOptionsQuery,
  GetCurrentStatementPaymentOptionsQueryVariables
>;
export const GetAchPaymentMethodsDocument = gql`
  query GetACHPaymentMethods {
    paymentMethods {
      ... on QueryPaymentMethodsSuccess {
        data {
          id
          accountLast4Digits
          accountType
          bankName
          status
        }
      }
    }
  }
`;

/**
 * __useGetAchPaymentMethodsQuery__
 *
 * To run a query within a React component, call `useGetAchPaymentMethodsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAchPaymentMethodsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAchPaymentMethodsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAchPaymentMethodsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetAchPaymentMethodsQuery,
    GetAchPaymentMethodsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAchPaymentMethodsQuery, GetAchPaymentMethodsQueryVariables>(
    GetAchPaymentMethodsDocument,
    options,
  );
}
export function useGetAchPaymentMethodsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAchPaymentMethodsQuery,
    GetAchPaymentMethodsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetAchPaymentMethodsQuery,
    GetAchPaymentMethodsQueryVariables
  >(GetAchPaymentMethodsDocument, options);
}
export type GetAchPaymentMethodsQueryHookResult = ReturnType<
  typeof useGetAchPaymentMethodsQuery
>;
export type GetAchPaymentMethodsLazyQueryHookResult = ReturnType<
  typeof useGetAchPaymentMethodsLazyQuery
>;
export type GetAchPaymentMethodsQueryResult = Apollo.QueryResult<
  GetAchPaymentMethodsQuery,
  GetAchPaymentMethodsQueryVariables
>;
export const GetPaymentSchedulesDocument = gql`
  query GetPaymentSchedules {
    activeAutoPayment {
      ... on QueryActiveAutoPaymentSuccess {
        data {
          amount
          id
          status
          paymentDate
          type
          methodId
          frequency
        }
      }
    }
  }
`;

/**
 * __useGetPaymentSchedulesQuery__
 *
 * To run a query within a React component, call `useGetPaymentSchedulesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPaymentSchedulesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPaymentSchedulesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPaymentSchedulesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetPaymentSchedulesQuery,
    GetPaymentSchedulesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetPaymentSchedulesQuery, GetPaymentSchedulesQueryVariables>(
    GetPaymentSchedulesDocument,
    options,
  );
}
export function useGetPaymentSchedulesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPaymentSchedulesQuery,
    GetPaymentSchedulesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetPaymentSchedulesQuery, GetPaymentSchedulesQueryVariables>(
    GetPaymentSchedulesDocument,
    options,
  );
}
export type GetPaymentSchedulesQueryHookResult = ReturnType<
  typeof useGetPaymentSchedulesQuery
>;
export type GetPaymentSchedulesLazyQueryHookResult = ReturnType<
  typeof useGetPaymentSchedulesLazyQuery
>;
export type GetPaymentSchedulesQueryResult = Apollo.QueryResult<
  GetPaymentSchedulesQuery,
  GetPaymentSchedulesQueryVariables
>;
export const CreateReferColleaguesDocument = gql`
  mutation CreateReferColleagues($inviteeEmails: [String!]!) {
    referColleagues(inviteeEmails: $inviteeEmails) {
      ... on MutationReferColleaguesSuccess {
        data
      }
      ... on BaseError {
        code
        message
      }
      ... on ValidationError {
        code
        message
      }
    }
  }
`;
export type CreateReferColleaguesMutationFn = Apollo.MutationFunction<
  CreateReferColleaguesMutation,
  CreateReferColleaguesMutationVariables
>;

/**
 * __useCreateReferColleaguesMutation__
 *
 * To run a mutation, you first call `useCreateReferColleaguesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateReferColleaguesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createReferColleaguesMutation, { data, loading, error }] = useCreateReferColleaguesMutation({
 *   variables: {
 *      inviteeEmails: // value for 'inviteeEmails'
 *   },
 * });
 */
export function useCreateReferColleaguesMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateReferColleaguesMutation,
    CreateReferColleaguesMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateReferColleaguesMutation,
    CreateReferColleaguesMutationVariables
  >(CreateReferColleaguesDocument, options);
}
export type CreateReferColleaguesMutationHookResult = ReturnType<
  typeof useCreateReferColleaguesMutation
>;
export type CreateReferColleaguesMutationResult =
  Apollo.MutationResult<CreateReferColleaguesMutation>;
export type CreateReferColleaguesMutationOptions = Apollo.BaseMutationOptions<
  CreateReferColleaguesMutation,
  CreateReferColleaguesMutationVariables
>;
export const GetReferralOfferCtaTextsDocument = gql`
  query GetReferralOfferCTATexts {
    referralOffer {
      ... on BaseError {
        code
        message
      }
      ... on ValidationError {
        code
        message
      }
      ... on QueryReferralOfferSuccess {
        __typename
        data {
          reward
          title
          details
        }
      }
    }
  }
`;

/**
 * __useGetReferralOfferCtaTextsQuery__
 *
 * To run a query within a React component, call `useGetReferralOfferCtaTextsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetReferralOfferCtaTextsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetReferralOfferCtaTextsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetReferralOfferCtaTextsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetReferralOfferCtaTextsQuery,
    GetReferralOfferCtaTextsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetReferralOfferCtaTextsQuery,
    GetReferralOfferCtaTextsQueryVariables
  >(GetReferralOfferCtaTextsDocument, options);
}
export function useGetReferralOfferCtaTextsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetReferralOfferCtaTextsQuery,
    GetReferralOfferCtaTextsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetReferralOfferCtaTextsQuery,
    GetReferralOfferCtaTextsQueryVariables
  >(GetReferralOfferCtaTextsDocument, options);
}
export type GetReferralOfferCtaTextsQueryHookResult = ReturnType<
  typeof useGetReferralOfferCtaTextsQuery
>;
export type GetReferralOfferCtaTextsLazyQueryHookResult = ReturnType<
  typeof useGetReferralOfferCtaTextsLazyQuery
>;
export type GetReferralOfferCtaTextsQueryResult = Apollo.QueryResult<
  GetReferralOfferCtaTextsQuery,
  GetReferralOfferCtaTextsQueryVariables
>;
export const GetRecommendedReferralsDocument = gql`
  query GetRecommendedReferrals($searchText: String) {
    recommendedReferrals(searchText: $searchText) {
      ... on BaseError {
        code
        message
      }
      ... on ValidationError {
        code
        message
      }
      ... on QueryRecommendedReferralsSuccess {
        data {
          firstName
          lastName
          workEmail
        }
      }
    }
  }
`;

/**
 * __useGetRecommendedReferralsQuery__
 *
 * To run a query within a React component, call `useGetRecommendedReferralsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRecommendedReferralsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRecommendedReferralsQuery({
 *   variables: {
 *      searchText: // value for 'searchText'
 *   },
 * });
 */
export function useGetRecommendedReferralsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetRecommendedReferralsQuery,
    GetRecommendedReferralsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetRecommendedReferralsQuery,
    GetRecommendedReferralsQueryVariables
  >(GetRecommendedReferralsDocument, options);
}
export function useGetRecommendedReferralsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetRecommendedReferralsQuery,
    GetRecommendedReferralsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetRecommendedReferralsQuery,
    GetRecommendedReferralsQueryVariables
  >(GetRecommendedReferralsDocument, options);
}
export type GetRecommendedReferralsQueryHookResult = ReturnType<
  typeof useGetRecommendedReferralsQuery
>;
export type GetRecommendedReferralsLazyQueryHookResult = ReturnType<
  typeof useGetRecommendedReferralsLazyQuery
>;
export type GetRecommendedReferralsQueryResult = Apollo.QueryResult<
  GetRecommendedReferralsQuery,
  GetRecommendedReferralsQueryVariables
>;
export const GetStatementsDocument = gql`
  query GetStatements {
    statements {
      ... on QueryStatementsSuccess {
        __typename
        data {
          statements {
            startDate
            endDate
            id
            currentBalance
            previousBalance
            paymentsAndCredits
          }
        }
      }
    }
  }
`;

/**
 * __useGetStatementsQuery__
 *
 * To run a query within a React component, call `useGetStatementsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStatementsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStatementsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetStatementsQuery(
  baseOptions?: Apollo.QueryHookOptions<GetStatementsQuery, GetStatementsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetStatementsQuery, GetStatementsQueryVariables>(
    GetStatementsDocument,
    options,
  );
}
export function useGetStatementsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetStatementsQuery,
    GetStatementsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetStatementsQuery, GetStatementsQueryVariables>(
    GetStatementsDocument,
    options,
  );
}
export type GetStatementsQueryHookResult = ReturnType<typeof useGetStatementsQuery>;
export type GetStatementsLazyQueryHookResult = ReturnType<
  typeof useGetStatementsLazyQuery
>;
export type GetStatementsQueryResult = Apollo.QueryResult<
  GetStatementsQuery,
  GetStatementsQueryVariables
>;
export const CreateRedeemPointsForCashbackDocument = gql`
  mutation CreateRedeemPointsForCashback($amount: Int!) {
    redeemPointsForCashback(amount: $amount) {
      ... on MutationRedeemPointsForCashbackSuccess {
        data
      }
      ... on ValidationError {
        code
        fieldErrors {
          message
          path
        }
        message
      }
      ... on BaseError {
        code
        message
      }
    }
  }
`;
export type CreateRedeemPointsForCashbackMutationFn = Apollo.MutationFunction<
  CreateRedeemPointsForCashbackMutation,
  CreateRedeemPointsForCashbackMutationVariables
>;

/**
 * __useCreateRedeemPointsForCashbackMutation__
 *
 * To run a mutation, you first call `useCreateRedeemPointsForCashbackMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRedeemPointsForCashbackMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRedeemPointsForCashbackMutation, { data, loading, error }] = useCreateRedeemPointsForCashbackMutation({
 *   variables: {
 *      amount: // value for 'amount'
 *   },
 * });
 */
export function useCreateRedeemPointsForCashbackMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateRedeemPointsForCashbackMutation,
    CreateRedeemPointsForCashbackMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateRedeemPointsForCashbackMutation,
    CreateRedeemPointsForCashbackMutationVariables
  >(CreateRedeemPointsForCashbackDocument, options);
}
export type CreateRedeemPointsForCashbackMutationHookResult = ReturnType<
  typeof useCreateRedeemPointsForCashbackMutation
>;
export type CreateRedeemPointsForCashbackMutationResult =
  Apollo.MutationResult<CreateRedeemPointsForCashbackMutation>;
export type CreateRedeemPointsForCashbackMutationOptions = Apollo.BaseMutationOptions<
  CreateRedeemPointsForCashbackMutation,
  CreateRedeemPointsForCashbackMutationVariables
>;
export const GetTotalPointsDocument = gql`
  query GetTotalPoints {
    totalPoints {
      ... on QueryTotalPointsSuccess {
        __typename
        data
      }
    }
  }
`;

/**
 * __useGetTotalPointsQuery__
 *
 * To run a query within a React component, call `useGetTotalPointsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTotalPointsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTotalPointsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTotalPointsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetTotalPointsQuery,
    GetTotalPointsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetTotalPointsQuery, GetTotalPointsQueryVariables>(
    GetTotalPointsDocument,
    options,
  );
}
export function useGetTotalPointsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetTotalPointsQuery,
    GetTotalPointsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetTotalPointsQuery, GetTotalPointsQueryVariables>(
    GetTotalPointsDocument,
    options,
  );
}
export type GetTotalPointsQueryHookResult = ReturnType<typeof useGetTotalPointsQuery>;
export type GetTotalPointsLazyQueryHookResult = ReturnType<
  typeof useGetTotalPointsLazyQuery
>;
export type GetTotalPointsQueryResult = Apollo.QueryResult<
  GetTotalPointsQuery,
  GetTotalPointsQueryVariables
>;
export const CreateDisputeDocument = gql`
  mutation CreateDispute($input: CreateDisputeInput!) {
    createDispute(input: $input) {
      ... on MutationCreateDisputeSuccess {
        data {
          id
        }
      }
      ... on Error {
        code
        message
      }
    }
  }
`;
export type CreateDisputeMutationFn = Apollo.MutationFunction<
  CreateDisputeMutation,
  CreateDisputeMutationVariables
>;

/**
 * __useCreateDisputeMutation__
 *
 * To run a mutation, you first call `useCreateDisputeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDisputeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDisputeMutation, { data, loading, error }] = useCreateDisputeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateDisputeMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateDisputeMutation,
    CreateDisputeMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateDisputeMutation, CreateDisputeMutationVariables>(
    CreateDisputeDocument,
    options,
  );
}
export type CreateDisputeMutationHookResult = ReturnType<typeof useCreateDisputeMutation>;
export type CreateDisputeMutationResult = Apollo.MutationResult<CreateDisputeMutation>;
export type CreateDisputeMutationOptions = Apollo.BaseMutationOptions<
  CreateDisputeMutation,
  CreateDisputeMutationVariables
>;
export const GetTransactionsDocument = gql`
  query GetTransactions(
    $offset: Int
    $pageSize: Int
    $merchantName: String
    $filterType: [TransactionType!]
    $transactedAfter: DateTime
    $sort: TransactionsSortInput!
  ) {
    transactions(
      pagination: { offset: $offset, pageSize: $pageSize }
      includeRewards: true
      filters: {
        merchantName: $merchantName
        type: $filterType
        transactedAfter: $transactedAfter
      }
      sort: $sort
    ) {
      ... on QueryTransactionsSuccess {
        __typename
        data {
          hasMore
          nextPageOffset
          allTransactions {
            ... on PaymentTransaction {
              amountInDollars
              type
              transactedAt
              paymentStatus: status
              displayTitle
              id
            }
            ... on Transaction {
              transactedAt
              creditIndicator
              amountInDollars
              id
              transactionStatus: status
              hypercardCategoryIconUrl
              externalMerchant {
                displayName
              }
            }
          }
        }
      }
    }
  }
`;

/**
 * __useGetTransactionsQuery__
 *
 * To run a query within a React component, call `useGetTransactionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTransactionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTransactionsQuery({
 *   variables: {
 *      offset: // value for 'offset'
 *      pageSize: // value for 'pageSize'
 *      merchantName: // value for 'merchantName'
 *      filterType: // value for 'filterType'
 *      transactedAfter: // value for 'transactedAfter'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useGetTransactionsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetTransactionsQuery,
    GetTransactionsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetTransactionsQuery, GetTransactionsQueryVariables>(
    GetTransactionsDocument,
    options,
  );
}
export function useGetTransactionsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetTransactionsQuery,
    GetTransactionsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetTransactionsQuery, GetTransactionsQueryVariables>(
    GetTransactionsDocument,
    options,
  );
}
export type GetTransactionsQueryHookResult = ReturnType<typeof useGetTransactionsQuery>;
export type GetTransactionsLazyQueryHookResult = ReturnType<
  typeof useGetTransactionsLazyQuery
>;
export type GetTransactionsQueryResult = Apollo.QueryResult<
  GetTransactionsQuery,
  GetTransactionsQueryVariables
>;
export const GetTransactionByIdDocument = gql`
  query GetTransactionById($transactionId: Int!) {
    transaction(transactionId: $transactionId, includeReward: true) {
      ... on QueryTransactionSuccess {
        data {
          dispute {
            status
          }
          creditIndicator
          amountInDollars
          cardLast4Digits
          transactedAt
          externalMerchant {
            category {
              name
            }
            displayName
          }
          reward {
            cashbackReward {
              rewardDescription
              amount
            }
            pointsReward {
              rewardDescription
              amount
            }
          }
          status
          settledAt
          type
        }
      }
    }
  }
`;

/**
 * __useGetTransactionByIdQuery__
 *
 * To run a query within a React component, call `useGetTransactionByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTransactionByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTransactionByIdQuery({
 *   variables: {
 *      transactionId: // value for 'transactionId'
 *   },
 * });
 */
export function useGetTransactionByIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetTransactionByIdQuery,
    GetTransactionByIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetTransactionByIdQuery, GetTransactionByIdQueryVariables>(
    GetTransactionByIdDocument,
    options,
  );
}
export function useGetTransactionByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetTransactionByIdQuery,
    GetTransactionByIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetTransactionByIdQuery, GetTransactionByIdQueryVariables>(
    GetTransactionByIdDocument,
    options,
  );
}
export type GetTransactionByIdQueryHookResult = ReturnType<
  typeof useGetTransactionByIdQuery
>;
export type GetTransactionByIdLazyQueryHookResult = ReturnType<
  typeof useGetTransactionByIdLazyQuery
>;
export type GetTransactionByIdQueryResult = Apollo.QueryResult<
  GetTransactionByIdQuery,
  GetTransactionByIdQueryVariables
>;

export interface PossibleTypesResultData {
  possibleTypes: {
    [key: string]: string[];
  };
}
const result: PossibleTypesResultData = {
  possibleTypes: {
    Error: ["BaseError", "ValidationError"],
    MutationActivateCardResult: [
      "BaseError",
      "MutationActivateCardSuccess",
      "ValidationError",
    ],
    MutationCompletePhoneNumberUpdateResult: [
      "BaseError",
      "MutationCompletePhoneNumberUpdateSuccess",
      "ValidationError",
    ],
    MutationCreateACHPaymentMethodResult: [
      "BaseError",
      "MutationCreateACHPaymentMethodSuccess",
      "ValidationError",
    ],
    MutationCreateDisputeResult: [
      "BaseError",
      "MutationCreateDisputeSuccess",
      "ValidationError",
    ],
    MutationCreateGiftCardOrderResult: [
      "BaseError",
      "MutationCreateGiftCardOrderSuccess",
      "ValidationError",
    ],
    MutationCreateInstantPaymentResult: [
      "BaseError",
      "MutationCreateInstantPaymentSuccess",
      "ValidationError",
    ],
    MutationDeletePaymentMethodResult: [
      "BaseError",
      "MutationDeletePaymentMethodSuccess",
      "ValidationError",
    ],
    MutationHideGiftcardWalletResult: [
      "BaseError",
      "MutationHideGiftcardWalletSuccess",
      "ValidationError",
    ],
    MutationRedeemPointsForCashbackResult: [
      "BaseError",
      "MutationRedeemPointsForCashbackSuccess",
      "ValidationError",
    ],
    MutationReferColleaguesResult: [
      "BaseError",
      "MutationReferColleaguesSuccess",
      "ValidationError",
    ],
    MutationRegisterOfferAnalyticResult: [
      "BaseError",
      "MutationRegisterOfferAnalyticSuccess",
      "ValidationError",
    ],
    MutationRemoveAutoPaymentScheduleResult: [
      "BaseError",
      "MutationRemoveAutoPaymentScheduleSuccess",
      "ValidationError",
    ],
    MutationReplaceCardResult: [
      "BaseError",
      "MutationReplaceCardSuccess",
      "ValidationError",
    ],
    MutationSendOTPResult: ["BaseError", "MutationSendOTPSuccess", "ValidationError"],
    MutationSimulateTransactionResult: [
      "BaseError",
      "MutationSimulateTransactionSuccess",
      "ValidationError",
    ],
    MutationStartEmployeeApplicationResult: [
      "BaseError",
      "MutationStartEmployeeApplicationSuccess",
      "ValidationError",
    ],
    MutationStartPhoneNumberUpdateResult: [
      "BaseError",
      "MutationStartPhoneNumberUpdateSuccess",
      "ValidationError",
    ],
    MutationStartWaitlistUserApplicationResult: [
      "BaseError",
      "MutationStartWaitlistUserApplicationSuccess",
      "ValidationError",
    ],
    MutationSubmitEmployeeApplicationResult: [
      "BaseError",
      "MutationSubmitEmployeeApplicationSuccess",
      "ValidationError",
    ],
    MutationSubmitFeedbackResult: [
      "BaseError",
      "MutationSubmitFeedbackSuccess",
      "ValidationError",
    ],
    MutationSubmitWaitlistUserApplicationResult: [
      "BaseError",
      "MutationSubmitWaitlistUserApplicationSuccess",
      "ValidationError",
    ],
    MutationUpdateCardPinResult: [
      "BaseError",
      "MutationUpdateCardPinSuccess",
      "ValidationError",
    ],
    MutationUpdateFreezeStatusResult: [
      "BaseError",
      "MutationUpdateFreezeStatusSuccess",
      "ValidationError",
    ],
    MutationUpdateNotificationSettingsResult: [
      "BaseError",
      "MutationUpdateNotificationSettingsSuccess",
      "ValidationError",
    ],
    MutationUpdateUserAddressResult: [
      "BaseError",
      "MutationUpdateUserAddressSuccess",
      "ValidationError",
    ],
    MutationUpdateUserPreferencesResult: [
      "BaseError",
      "MutationUpdateUserPreferencesSuccess",
      "ValidationError",
    ],
    MutationUpsertAutoPaymentScheduleResult: [
      "BaseError",
      "MutationUpsertAutoPaymentScheduleSuccess",
      "ValidationError",
    ],
    MutationWithdrawDisputeResult: [
      "BaseError",
      "MutationWithdrawDisputeSuccess",
      "ValidationError",
    ],
    QueryAccountResult: ["BaseError", "QueryAccountSuccess", "ValidationError"],
    QueryActiveAutoPaymentResult: [
      "BaseError",
      "QueryActiveAutoPaymentSuccess",
      "ValidationError",
    ],
    QueryCardArtResult: ["BaseError", "QueryCardArtSuccess", "ValidationError"],
    QueryCardholderResult: ["BaseError", "QueryCardholderSuccess", "ValidationError"],
    QueryFeatureFlagsResult: ["BaseError", "QueryFeatureFlagsSuccess", "ValidationError"],
    QueryGiftCardCatalogResult: [
      "BaseError",
      "QueryGiftCardCatalogSuccess",
      "ValidationError",
    ],
    QueryGiftCardWalletResult: [
      "BaseError",
      "QueryGiftCardWalletSuccess",
      "ValidationError",
    ],
    QueryInsurancesResult: ["BaseError", "QueryInsurancesSuccess", "ValidationError"],
    QueryNetSavingsThisMonthResult: [
      "BaseError",
      "QueryNetSavingsThisMonthSuccess",
      "ValidationError",
    ],
    QueryNotificationSettingsResult: [
      "BaseError",
      "QueryNotificationSettingsSuccess",
      "ValidationError",
    ],
    QueryOffersResult: ["BaseError", "QueryOffersSuccess", "ValidationError"],
    QueryOrganizationResult: ["BaseError", "QueryOrganizationSuccess", "ValidationError"],
    QueryPaymentMethodsResult: [
      "BaseError",
      "QueryPaymentMethodsSuccess",
      "ValidationError",
    ],
    QueryPointToDollarConversionResult: [
      "BaseError",
      "QueryPointToDollarConversionSuccess",
      "ValidationError",
    ],
    QueryPrimaryCardResult: ["BaseError", "QueryPrimaryCardSuccess", "ValidationError"],
    QueryRecommendedReferralsResult: [
      "BaseError",
      "QueryRecommendedReferralsSuccess",
      "ValidationError",
    ],
    QueryReferralOfferResult: [
      "BaseError",
      "QueryReferralOfferSuccess",
      "ValidationError",
    ],
    QueryStatementResult: ["BaseError", "QueryStatementSuccess", "ValidationError"],
    QueryStatementsResult: ["BaseError", "QueryStatementsSuccess", "ValidationError"],
    QueryTotalPointsResult: ["BaseError", "QueryTotalPointsSuccess", "ValidationError"],
    QueryTransactionResult: ["BaseError", "QueryTransactionSuccess", "ValidationError"],
    QueryTransactionsResult: ["BaseError", "QueryTransactionsSuccess", "ValidationError"],
    TransactionItem: ["PaymentTransaction", "Transaction"],
  },
};
export default result;
