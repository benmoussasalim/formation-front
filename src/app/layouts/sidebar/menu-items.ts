import {RouteInfo} from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [

  {
    path: '',
    title: 'Personnes',
    icon: 'mdi mdi-dots-horizontal',
    class: 'nav-small-cap',
    extralink: true,
    submenu: []
  },
  {
    path: '/app/personnes/candidat',
    title: 'Candidats',
    icon: 'icon-Student-Male',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/app/personnes/formateur',
    title: 'Formateurs',
    icon: 'icon-Teacher',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/app/personnes/user',
    title: 'Utilisateurs',
    icon: ' icon-User',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '',
    title: 'Fonctionalités',
    icon: 'mdi mdi-dots-horizontal',
    class: 'nav-small-cap',
    extralink: true,
    submenu: []
  },
  {
    path: '/app/features/formation',
    title: 'Formations',
    icon: 'fas fa-book',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '',
    title: 'Paramètrages',
    icon: 'mdi mdi-dots-horizontal',
    class: 'nav-small-cap',
    extralink: true,
    submenu: []
  },
  {
    path: '/app/settings/salle',
    title: 'Salles',
    icon: 'sl-icon-login',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/app/settings/theme',
    title: 'Thèmes',
    icon: ' sl-icon-book-open',
    class: '',
    extralink: false,
    submenu: []
  },
];
