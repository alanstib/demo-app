import { AspectImage } from "../images";

type LogoWithWordmarkProps = {
  width?: number;
};

const LogoWithWordmark = ({ width = 200 }: LogoWithWordmarkProps) => (
  <AspectImage width={width} imageName={"logo-with-wordmark"} />
);

export { LogoWithWordmark };
