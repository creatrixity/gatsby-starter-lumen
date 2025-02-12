// @flow strict
import { ICONS } from '../constants';

const getIcon = (name: string) => {
  let iconsMap = {
    twitter: ICONS.TWITTER,
    facebook: ICONS.FACEBOOK,
    github: ICONS.GITHUB,
    vkontakte: ICONS.VKONTAKTE,
    telegram: ICONS.TELEGRAM,
    email: ICONS.EMAIL,
    rss: ICONS.RSS,
    linkedin: ICONS.LINKEDIN,
    instagram: ICONS.INSTAGRAM,
    line: ICONS.LINE,
    linkedin: ICONS.LINKEDIN,
    caretRight: ICONS.CARET_RIGHT,
    logo: ICONS.LOGO,
    rustLogo: ICONS.RUST_LOGO,
  };

  return name in iconsMap ? iconsMap[name] : iconsMap['twitter'];
};

export default getIcon;
