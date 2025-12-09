import config from "./config.js";

function createLink(heroName, text = url) {
  return `\x1b[4m\x1b]8;;${config.HERO_URL}/${heroName}\x1b\\${text}\x1b]8;;\x1b\\\x1b[0m`;
}

function createHero(hero) {
  return {
    ...hero,

    logPos(pos) {
      console.log(
        `${createLink(this.npc, this.displayName)} - ${(hero[`pos ${pos} winrate`] * 100).toFixed(2)}%`,
      );
    },

    getPosWinrate(pos) {
      return hero[`pos ${pos} winrate`];
    },

    getPosMatches(pos) {
      return hero[`pos ${pos} matches`];
    },
  };
}

function handleHeroesArrayByPos(heroes, pos) {
  return heroes
    .map((hero) => createHero(hero))
    .filter((hero) => hero.getPosMatches(pos) > 500)
    .sort((a, b) => b.getPosWinrate(pos) - a.getPosWinrate(pos));
}

export { createHero, handleHeroesArrayByPos };
