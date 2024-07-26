import "./App.css";
import {
  Image,
  VStack,
  Text,
  Box,
  HStack,
  Link,
  useBreakpointValue,
} from "@chakra-ui/react";

import "@fontsource/anton";

import sansanlogo from "./assets/sansanlogo.png";
import redarrow from "./assets/redarrow.png";
import blackarrow from "./assets/blackarrow.png";
import laptop from "./assets/laptop.png";

import fbicon from "./assets/Icons/facebook.svg";
import igicon from "./assets/Icons/instagram.svg";
import beicon from "./assets/Icons/behance.svg";

function App() {
  const Stack = useBreakpointValue({ base: VStack, md: HStack });
  return (
    <div className="App">
      <header className="App-header">
        <img src={redarrow} alt="" class="leftarrow" />
        <img src={blackarrow} alt="" class="rightarrow" />
        <Box mt={[-24, 0, 0]}>
          <VStack color="black" zIndex="1">
            <Image
              src={sansanlogo}
              alt="sansanlogo"
              w={[100, 140, 140]}
              mb={[10, 0, 0]}
            />
            <Stack gap={{ base: "0px", md: "0px", lg: "38px" }}>
              <Text
                fontSize={{ base: "80px", md: "150px", lg: "150px" }}
                fontFamily="Anton"
                textAlign="center"
              >
                KEEP YOUR
              </Text>
              <Text
                fontSize={{ base: "80px", md: "150px", lg: "150px" }}
                fontFamily="Anton"
                mt={{ base: "-35px", md: "0px", lg: "0px" }}
                textAlign="center"
              >
                EYES OPENs
              </Text>
            </Stack>
            <Image
              src={laptop}
              alt="laptop"
              zIndex="1"
              mt={{ base: "-45px", md: "0px", lg: "-110px" }}
              w={[490, 0, 754]}
            />
            <Box w={[344, 0, 700]}>
              <Text
                fontSize={{ base: "16px", md: "0px", lg: "22px" }}
                fontFamily="Anton"
              >
                SANSAN'S WEBSITE IS LAUNCHING SOON
              </Text>
              <Text fontSize={{ base: "14px", md: "0px", lg: "22px" }}>
                Be the first to explore! We're Working hard to bring you a fresh
                and engaging online experience.
              </Text>
            </Box>
          </VStack>
        </Box>
        <Box mt={{ base: "-20px", md: "0px", lg: "50px" }}>
          <Box
            position="absolute"
            bottom={{ base: "6%", md: "0" }}
            left={{ base: "50%", md: "0" }}
            transform={{ base: "translateX(-50%)", md: "none" }}
            p="20px"
          >
            <HStack>
              <Link href="https://www.facebook.com/sanagustinjayson.creatives">
                <Image
                  src={fbicon}
                  alt="facebook"
                  boxSize={{ base: "34px", md: "47px" }}
                />
              </Link>
              <Link href="https://www.instagram.com/sanagustinjayson.creatives/">
                <Image
                  src={igicon}
                  alt="instagram"
                  boxSize={{ base: "34px", md: "47px" }}
                />
              </Link>
              <Link href="https://www.behance.net/jaysonsanagu2">
                <Image
                  src={beicon}
                  alt="behance"
                  boxSize={{ base: "34px", md: "47px" }}
                />
              </Link>
            </HStack>
          </Box>
        </Box>
      </header>
    </div>
  );
}

export default App;
