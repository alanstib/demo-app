import { styled, Paragraph } from "tamagui";

const Body1 = styled(Paragraph, {
  name: "Body1",
  size: "$3",
  fontWeight: "500",
});

const Body2 = styled(Paragraph, {
  name: "Body2",
  size: "$2",
  fontWeight: "400",
});

const Body3 = styled(Paragraph, {
  name: "Body2",
  size: "$1",
});

export { Body1, Body2, Body3 };
