export default class Player {
  constructor() {
	this.attempted = { "1": 0, "2": 0, "3": 0 };
	this.made = { "1": 0, "2": 0, "3": 0 };
	this.points = 0;
	this.team = null;
  }

  make(type) {
	++this.attempted[type];
	++this.made[type];
	this.points += Number(type);
  }

  miss(type) {
	++this.attempted[type];
  }
};
