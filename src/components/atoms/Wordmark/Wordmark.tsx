import { AspectImage } from "../images";

type WordmarkProps = {
  width?: number;
};

const Wordmark = ({ width = 200 }: WordmarkProps) => (
  <AspectImage width={width} imageName={"wordmark"} />
);

export { Wordmark };
