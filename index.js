#!/usr/bin/env node

import config from "./config.js";
import { parseCliArgs } from "./cli.js";
import apiService from "./apiService.js";
import { handleHeroesArrayByPos } from "./heroes.js";

const flags = parseCliArgs();
const pos = flags.pos;

(async function main() {
  const api = apiService(config.PRO_TRACKER_PATH);

  const heroes = handleHeroesArrayByPos(await api.getHeroes(), pos);

  heroes.map((hero) => hero.logPos(pos));
})();
