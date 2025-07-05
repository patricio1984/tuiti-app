export type FakeUserInfo = {
  bio: string;
  birthDate: string;
  location: string;
  joinedDate: Date;
  following: number;
  followers: number;
  followedByYou: boolean;
  colors: [string, string, string];
};

export const fakeUserInfo: Record<number, FakeUserInfo> = {
  1: {
    bio: 'Vivir, esa será mi mayor aventura (Peter Pan) Egresada de la UDMC🔸',
    birthDate: '13 de diciembre',
    location: 'Tangamandapio',
    joinedDate: new Date(2014, 4, 1),
    following: 1251,
    followers: 9165,
    followedByYou: false,
    colors: ['indigo-500', 'purple-500', 'pink-500'],
  },
  2: {
    bio: 'Amante de la programación y el mate ☕️💻',
    birthDate: '20 de marzo',
    location: 'Rosario',
    joinedDate: new Date(2017, 10, 12),
    following: 320,
    followers: 750,
    followedByYou: true,
    colors: ['cyan-500', 'blue-500', 'sky-500'],
  },
  3: {
    bio: 'Cocinera autodidacta y fan del cine independiente.',
    birthDate: '8 de julio',
    location: 'Valencia',
    joinedDate: new Date(2018, 2, 21),
    following: 902,
    followers: 1402,
    followedByYou: false,
    colors: ['yellow-500', 'orange-500', 'red-500'],
  },
  4: {
    bio: 'Diseñadora UX con alma de ilustradora ✏️',
    birthDate: '25 de septiembre',
    location: 'Montevideo',
    joinedDate: new Date(2020, 0, 5),
    following: 500,
    followers: 980,
    followedByYou: true,
    colors: ['rose-400', 'fuchsia-500', 'violet-500'],
  },
  5: {
    bio: 'Explorando la vida un paso a la vez.',
    birthDate: '17 de noviembre',
    location: 'Bariloche',
    joinedDate: new Date(2016, 6, 15),
    following: 180,
    followers: 320,
    followedByYou: false,
    colors: ['green-400', 'emerald-500', 'teal-500'],
  },
  6: {
    bio: 'Músico de corazón, desarrollador por accidente 🎶💻',
    birthDate: '3 de mayo',
    location: 'Mendoza',
    joinedDate: new Date(2019, 9, 10),
    following: 765,
    followers: 1300,
    followedByYou: true,
    colors: ['amber-500', 'lime-500', 'green-500'],
  },
  7: {
    bio: 'Runner, gamer, soñador.',
    birthDate: '1 de enero',
    location: 'Córdoba',
    joinedDate: new Date(2021, 3, 9),
    following: 400,
    followers: 670,
    followedByYou: false,
    colors: ['blue-500', 'indigo-500', 'purple-500'],
  },
  8: {
    bio: 'Lectora serial de ciencia ficción 👽',
    birthDate: '29 de octubre',
    location: 'La Plata',
    joinedDate: new Date(2015, 11, 22),
    following: 520,
    followers: 1050,
    followedByYou: true,
    colors: ['slate-500', 'zinc-500', 'gray-500'],
  },
  9: {
    bio: 'Estudiante de filosofía y poeta de medianoche 🌓',
    birthDate: '14 de junio',
    location: 'Salta',
    joinedDate: new Date(2013, 8, 3),
    following: 240,
    followers: 410,
    followedByYou: false,
    colors: ['pink-400', 'rose-500', 'red-600'],
  },
  10: {
    bio: 'Me gusta romper cosas y después arreglarlas. DevOps 🛠️',
    birthDate: '5 de febrero',
    location: 'Neuquén',
    joinedDate: new Date(2022, 5, 11),
    following: 110,
    followers: 275,
    followedByYou: true,
    colors: ['orange-500', 'amber-500', 'yellow-400'],
  },
};
