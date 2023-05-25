import { IBeerData } from '../types/types';

export const beerData: Array<IBeerData> = [
  {
    name: 'Blond Ale',
    heading: 'BLOND',
    subheading: 'ALE',
    alc: 6.5,
    amount: 1,
    density: 16.5,
    description:
      'Сварен с использованием бельгийского леденцового сахара. Во вкусе солодовая сладость и мягкий хмелевой профиль. Имеет пряные, фенольные тона характерные для бельгийских элей.',
  },
  {
    name: 'Weizenbock',
    heading: 'WIEZIEN',
    subheading: 'BOCK',
    alc: 7.0,
    amount: 1,
    density: 17.0,
    description:
      'Немецкий пшеничный эль. Во вкусе тона белого хлеба, зерна. А так-же лёгкие гвоздичные ноты. Горечь маленькая.',
  },
  {
    name: 'Венский лагер',
    heading: 'VIENNA',
    subheading: 'LAGGER',
    alc: 5.5,
    amount: 1,
    density: 14.0,
    description:
      'Это полутёмный сорт . Сварен с использованием благородного немецкого хмеля Селект. Профиль насыщенный. Слегка сладковатый.',
  },
  {
    name: 'Американский лагер',
    heading: 'APL',
    alc: 5,
    amount: 1,
    density: 12.5,
    description:
      'Классический немецкий ржаной лагер. Сварен с использованием ржаного ферментированного солода. Во вкусе корочка бородинского хлеба, умеренные ореховые ноты и немножко карамели.',
  },
  {
    name: 'Ржаной лагер',
    heading: 'ROGGEN',
    subheading: 'BEER',
    alc: 5.5,
    amount: 1,
    density: 15.0,
    description:
      'Лёгкий, питкий лагер с хорошей горчинкой. Было сделано сухое охмеление американским хмелем Мозаик.',
  },
];
