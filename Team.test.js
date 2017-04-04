import Team from './Team';
import Player from './Player';


test('player tracks his team', () => {
  const t = new Team();
  const p = new Player();
  t.addPlayer(p);
  expect(p.team).toBe(t);
});

test('adding nonplayer fails', () => {
  const t = new Team();
  expect(() => t.addPlayer(new Team())).toThrow(TypeError);
});

test('adding player to new team removes from old', () => {
  const o = new Team();
  const n = new Team();
  const p = new Player();
  o.addPlayer(p);
  expect(p.team).toBe(o);
  expect(o.containsPlayer(p)).toBeTruthy();
  n.addPlayer(p);
  expect(p.team).toBe(n);
  expect(o.containsPlayer(p)).toBeFalsy();
});

test('removing a player from a team leaves player on no team', () => {
  const t = new Team();
  const p = new Player();
  t.addPlayer(p);
  t.removePlayer(p);
  expect(p.team).toBe(null);
});

test('removing a player from a team he isn\'t on does nothing', () => {
  const o = new Team();
  const n = new Team();
  const p = new Player();
  o.addPlayer(p);
  n.removePlayer(p);
  expect(p.team).toBe(o);
  expect(o.containsPlayer(p));
});
