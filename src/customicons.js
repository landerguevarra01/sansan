// CustomIcons.js
import { createIcon } from "@chakra-ui/react";
import fbicon from "./assets/Icons/facebook.svg";
import igicon from "./assets/Icons/instagram.svg";
import beicon from "./assets/Icons/behance.svg";

export const FbIcon = createIcon({
  displayName: "FbIcon",
  viewBox: "0 0 24 24",
  path: <path fill="currentColor" d={fbicon} />,
});

export const IgIcon = createIcon({
  displayName: "IgIcon",
  viewBox: "0 0 24 24",
  path: <path fill="currentColor" d={igicon} />,
});

export const BeIcon = createIcon({
  displayName: "BeIcon",
  viewBox: "0 0 24 24",
  path: <path fill="currentColor" d={beicon} />,
});
