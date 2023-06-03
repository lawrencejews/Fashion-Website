import { Box, Typography, IconButton, useMediaQuery } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { shades } from "../../theme";

// import all image from assets folder
const importAll = (r) => r.keys().reduce((acc, item) => {
  acc[item.replace("./", "")] = r(item);
  return acc;
}, {});

const heroTextureImports = importAll(
  require.context("../../assets", false, /\.(png|jpe?g|svg)$/)
);


const MainCarousel = () =>  {
  return (
    <div>MainCarousel</div>
  )
}

export default MainCarousel