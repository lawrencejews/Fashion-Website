import { useTheme, Box, Typography } from "@mui/material";
import { shades } from "../../theme";


const Footer = () => {

  const { palette: { neutral } } = useTheme();

  return (
    <Box mt="70px" p="40px 0" backgroundColor={neutral.light}>
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box width="clamp(20%, 30%, 40%)">
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            color={shades.secondary[500]}>
            FASHION SHOP
          </Typography>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit vero impedit atque nesciunt odio molestias, minima voluptatem voluptatibus laboriosam similique numquam natus quia sapiente repellendus magni eos porro quod nemo.
          </div>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">About Us</Typography>
          <Typography fontWeight="bold" mb="30px">Careers</Typography>
          <Typography fontWeight="bold" mb="30px">Our Stories</Typography>
          <Typography fontWeight="bold" mb="30px">Terms & Conditions</Typography>
          <Typography fontWeight="bold" mb="30px">Privacy Policy</Typography>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">Customer Care</Typography>
          <Typography fontWeight="bold" mb="30px">Help Center</Typography>
          <Typography fontWeight="bold" mb="30px">Track Your Order</Typography>
          <Typography fontWeight="bold" mb="30px">Corporate & Bulk Purchasing</Typography>
          <Typography fontWeight="bold" mb="30px">Returns & Refunds</Typography>
        </Box>

        <Box width="clamp(20%, 25%, 30%)">
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            >
            Contact Us
          </Typography>
          <Typography fontWeight="bold" mb="30px">Seoul, South Korea</Typography>
          <Typography fontWeight="bold" mb="30px">Email: something@gmail.com</Typography>
          <Typography fontWeight="bold" mb="30px">(222)333-3333</Typography>
        </Box>

      </Box>
    </Box>
  )
}

export default Footer;