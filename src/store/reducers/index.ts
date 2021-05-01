import { RootStateOrAny } from 'react-redux';
import { AnyAction } from 'redux';

const initialState: RootStateOrAny = {
  pages: [],
  projects: [],
  menus: {
    SiteNav: [
      {
        url: '/projects',
        title: 'Projects',
      },
      {
        url: '/about',
        title: 'About',
      },
      {
        url: '/resume',
        title: 'Résumé',
      },
    ],
    SocialMenu: [
      {
        url: 'https://www.linkedin.com/in/aaronsalley',
        title: 'LinkedIn',
      },
      {
        url: 'https://github.com/aaronsalley',
        title: 'Github',
      },
      {
        url: 'https://www.instagram.com/aaronsalleyhim/',
        title: 'Instagram',
      },
      {
        url: 'https://twitter.com/aaronsalley',
        title: 'Twitter',
      },
    ],
  },
};

const reducer = (state = initialState, action: AnyAction): RootStateOrAny => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
