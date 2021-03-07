import { Permissions } from './permissions';

export interface Role {
  id: number;
  name: string;
  permissions: Permissions[];
}
