import { ImageName, Images } from "assets/images";

const getImageSource = (imageName: ImageName) => Images[imageName];

export { getImageSource };
