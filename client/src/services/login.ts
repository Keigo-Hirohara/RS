import { liff } from '@line/liff';

export function login() {
  if (liff.isLoggedIn) {
    liff.login();
  }
}
