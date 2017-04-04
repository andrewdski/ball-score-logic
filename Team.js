import Player from './Player';

export default class Team {
  constructor() {
	this.players = [];
  }

  addPlayer(p) {
	if (! (p instanceof Player)) {
	  throw new TypeError("argument to addPlayer not a Player");
	}
	if (p.team) {
	  p.team.removePlayer(p);
	}
	this.players.push(p);
	p.team = this;
  }

  removePlayer(p) {
	if (p.team == this) {
	  p.team.players = p.team.players.filter((e) => e !== p);
	  p.team = null;
	}
  }

  containsPlayer(p) {
	return this.players.reduce((n, e) => (e == p ? n + 1 : n), 0);
  }
};
