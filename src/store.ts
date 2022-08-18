import { atom } from 'recoil'

export const avatarURL = atom({
  key: 'avatarURL',
  default: '',
});

export const operatingOption = atom({
  key: 'operatingOption',
  default: {
    img: ''
  },
});
