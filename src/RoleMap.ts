import Role from './Role';
import Team from './Team';

export const roleMap = new Map<Role, Team>();

roleMap.set(Role.Servant, Team.Servant);
roleMap.set(Role.Minion, Team.Minion);

roleMap.set(Role.Merlin, Team.Servant);
roleMap.set(Role.Assassin, Team.Minion);

roleMap.set(Role.Percival, Team.Servant);
roleMap.set(Role.Morgana, Team.Minion);

roleMap.set(Role.Oberon, Team.Minion);
roleMap.set(Role.Mordred, Team.Minion);

roleMap.set(Role.BlueLancelot, Team.Servant);
roleMap.set(Role.RedLancelot, Team.Minion);

export default roleMap;
