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
      'Блонд эль. Сварен с использованием бельгийского леденцового сахара. Во вкусе солодовая сладость и мягкий хмелевой профиль. Имеет пряные, фенольные тона характерные для бельгийских элей.',
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
    name: 'Vienna lager',
    heading: 'VIENNA',
    subheading: 'LAGER',
    alc: 5.5,
    amount: 1,
    density: 14.0,
    description:
      'Венский лагер. Это полутёмный сорт . Сварен с использованием благородного немецкого хмеля Селект. Профиль насыщенный. Слегка сладковатый.',
  },
  {
    name: 'American lager',
    heading: 'AMERICAN PALE',
    subheading: 'LAGER',
    alc: 5,
    amount: 1,
    density: 12.5,
    description:
      'Американский лагер. Классический немецкий ржаной лагер. Сварен с использованием ржаного ферментированного солода.',
  },
  {
    name: 'Roggen lager',
    heading: 'ROGGEN',
    subheading: 'LAGER',
    alc: 5.5,
    amount: 1,
    density: 15.0,
    description:
      'Ржаной лагер. Лёгкий, питкий лагер с хорошей горчинкой. Было сделано сухое охмеление американским хмелем Мозаик.',
  },
];
