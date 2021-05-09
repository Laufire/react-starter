import config from "./config";
import { rndString } from "@laufire/utils/random";

const seed = { 
  count: config.countStart,
  refreshID: rndString(4),
}

export default seed;
