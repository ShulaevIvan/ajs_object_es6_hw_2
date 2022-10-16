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

export default function extractItems(obj) {
  const resultArr = [];
  const { special: specialArr } = obj;
  specialArr.forEach((item) => {
    let { description } = item;
    const {
      id, name, icon,
    } = item;
    const resultObj = {
      id, name, description, icon,
    };
    if (description === undefined) {
      description = 'описание недоступно';
      Object.defineProperty(resultObj, 'description', {
        enumerable: false,
      });
    } else {
      Object.defineProperty(resultObj, 'description', {
        enumerable: true,
      });
    }
    resultArr.push(resultObj);
  });
  return resultArr;
}

console.log(extractItems(character));
