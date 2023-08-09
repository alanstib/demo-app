import { Body1, Body3 } from "components/atoms";
import { Spacer, XStack, YStack } from "tamagui";

type StepType = "increasing" | "decreasing";

type SquareProps = { stepType: StepType; startOpacity: number; index: number };

const TOTAL_SQUARE_INDICES_PER_ROW = 10;

const getOpacity = (startOpacity: number, index: number, stepType: StepType) => {
  const stepValue = 1 / (TOTAL_SQUARE_INDICES_PER_ROW * 2);
  const offset = index;
  const valueOffset = stepValue * offset;
  const opacity =
    stepType === "increasing" ? startOpacity + valueOffset : startOpacity - valueOffset;

  return opacity;
};

const MultiplierDescription = ({ description }: { description: "1X" | "2X" | "3X" }) => {
  const TextComponent = description === "2X" ? Body1 : Body3;
  const height = description === "2X" ? "$6" : "$4";
  const fontWeight = description === "2X" ? "500" : "300";
  const color = description === "2X" ? "$white" : "$white50";

  return (
    <YStack alignItems={"center"}>
      <YStack width={"$2"} height={height} backgroundColor={color} />
      <Spacer size={"$2"} />
      <TextComponent fontWeight={fontWeight} color={color}>
        {description}
      </TextComponent>
    </YStack>
  );
};

const Square = ({ startOpacity, stepType, index }: SquareProps) => (
  <YStack
    opacity={getOpacity(startOpacity, index, stepType)}
    width={"$1"}
    height={"$1"}
    backgroundColor={"$white"}
  />
);

const Squares = (props: Pick<SquareProps, "startOpacity" | "stepType">) => (
  <>
    {Array.from({ length: TOTAL_SQUARE_INDICES_PER_ROW }).map((_, index) => (
      <Square {...props} index={index} key={index} />
    ))}
  </>
);

const PointsWheel = () => (
  <XStack justifyContent={"space-between"} width={"$full"}>
    <Squares stepType={"increasing"} startOpacity={0} />
    <MultiplierDescription description={"1X"} />
    <Squares stepType={"increasing"} startOpacity={0.5} />
    <MultiplierDescription description={"2X"} />
    <Squares stepType={"decreasing"} startOpacity={1} />
    <MultiplierDescription description={"3X"} />
    <Squares stepType={"decreasing"} startOpacity={0.5} />
  </XStack>
);

export { PointsWheel };
