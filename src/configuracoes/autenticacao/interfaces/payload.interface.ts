import { Timestamp } from 'rxjs';

export interface PayloadInterface {
  iss: string;
  sub: string;
  aud: string;
  iat: Timestamp<number>;
  exp: Timestamp<number>;
  azp: string;
  gty: string;
  permissions: string[];
}
