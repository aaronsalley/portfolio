import { RootStateOrAny } from 'react-redux';
import { AnyAction } from 'redux';
import packageJson from '../../../package.json';
import bhphotovideo from '../../data/bhphotovideo';
import davincian from '../../data/davincian';
import intry from '../../data/intry';
import lumifi from '../../data/lumifi';
// import mtfmusicals from '../../data/mtfmusicals';

const initialState: RootStateOrAny = {
  pages: [],
  projects: [
    bhphotovideo,
    intry,
    davincian,
    // mtfmusicals,
    lumifi,
  ],
  menus: {
    SiteNav: {
      aaronsalley: [
        {
          url: '/projects',
          title: 'Projects',
        },
        {
          url: '/about',
          title: 'About',
        },
        // {
        //   url: '/resume',
        //   title: 'Résumé',
        // },
      ],
      disruptv: [
        {
          url: '/projects',
          title: 'Projects',
        },
        {
          url: '/about',
          title: 'About',
        },
        {
          url: '/contact',
          title: 'Contact',
        },
      ],
    },
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
  browser: '',
  colorScheme: '',
  homepage: packageJson.homepage,
};

const reducer = (state = initialState, action: AnyAction): RootStateOrAny => {
  switch (action.type) {
    case 'SET_COLOR_SCHEME':
      return {
        ...state,
        colorScheme: action.payload,
      };
    case 'SET_BROWSER':
      return {
        ...state,
        browser: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
