import Player from './Player';

test('player initially has no made FGs', () => {
  const p = new Player();
  expect(p.made["2"]).toBe(0);
});

test('player initially has no made 3 pt shots', () => {
  const p = new Player();
  expect(p.made["3"]).toBe(0);
});

test('player initially has no made FTs', () => {
  const p = new Player();
  expect(p.made["1"]).toBe(0);
});

test('player initially has no FG attempts', () => {
  const p = new Player();
  expect(p.attempted["2"]).toBe(0);
});

test('player initially has no 3 pt attempts', () => {
  const p = new Player();
  expect(p.attempted["3"]).toBe(0);
});

test('player initially has no FT attempts', () => {
  const p = new Player();
  expect(p.attempted["1"]).toBe(0);
});

test('player initialty has zero points', () => {
  const p = new Player();
  expect(p.points).toBe(0);
});

test('FGs works properly', () => {
  const p = new Player();

  p.make("2");
  expect(p.attempted["2"]).toBe(1);
  expect(p.made["2"]).toBe(1);
  expect(p.points).toBe(2);

  p.miss("2");
  expect(p.attempted["2"]).toBe(2);
  expect(p.made["2"]).toBe(1);
  expect(p.points).toBe(2);

  p.make("2");
  expect(p.attempted["2"]).toBe(3);
  expect(p.made["2"]).toBe(2);
  expect(p.points).toBe(4);
});

test('3 pts works properly', () => {
  const p = new Player();

  p.make("3");
  expect(p.attempted["3"]).toBe(1);
  expect(p.made["3"]).toBe(1);
  expect(p.points).toBe(3);

  p.miss("3");
  expect(p.attempted["3"]).toBe(2);
  expect(p.made["3"]).toBe(1);
  expect(p.points).toBe(3);

  p.make("3");
  expect(p.attempted["3"]).toBe(3);
  expect(p.made["3"]).toBe(2);
  expect(p.points).toBe(6);
});

test('FTs works properly', () => {
  const p = new Player();

  p.make("1");
  expect(p.attempted["1"]).toBe(1);
  expect(p.made["1"]).toBe(1);
  expect(p.points).toBe(1);

  p.miss("1");
  expect(p.attempted["1"]).toBe(2);
  expect(p.made["1"]).toBe(1);
  expect(p.points).toBe(1);

  p.make("1");
  expect(p.attempted["1"]).toBe(3);
  expect(p.made["1"]).toBe(2);
  expect(p.points).toBe(2);
});
