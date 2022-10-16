import destructFunc from '../js/destructFunc';

test('test destructFunc', () => {
  const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
        // <- обратите внимание, описание "засекречено"
      },
      {
        id: 10,
        name: 'test',
        icon: 'http://...',
        description: 'test 2',
      },
    ],
  };
  const reult = destructFunc(character);
  const matchObj = [
    {
      id: 8,
      name: 'Двойной выстрел',
      description: 'Двойной выстрел наносит двойной урон',
      icon: 'http://...',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
    },
    {
      id: 10,
      name: 'test',
      description: 'test 2',
      icon: 'http://...',
    },
  ];
  expect(reult).toMatchObject(matchObj);
});
