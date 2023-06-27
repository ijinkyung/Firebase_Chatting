import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const currentUser = atom({
  key: 'currentUser',
  default: '',
  effects_UNSTABLE: [persistAtom],
});
