import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const roomNum = atom({
  key: 'roomNum',
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

export const roomTitleStr = atom({
  key: 'roomTitleStr',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

export const docsNum = atom({
  key: 'docsNum',
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

export const modalState = atom({
  key: 'modalState',
  default: false,
});
