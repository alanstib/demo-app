import { styled, H1, H2, H3, H4 } from "tamagui";

const Header1 = styled(H1, {
  name: "Header1",
  size: "$7",
  fontWeight: "400",
});

const Header2 = styled(H2, {
  name: "Header2",
  size: "$6",
  fontWeight: "400",
});

const Header3 = styled(H3, {
  name: "Header3",
  size: "$5",
  fontWeight: "500",
});

const Header4 = styled(H4, {
  name: "Header4",
  size: "$4",
  fontWeight: "700",
  fontFamily: "$body",
});

export { Header1, Header2, Header3, Header4 };
