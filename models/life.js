let life = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0]
];

const get = () => life;
const set = newLife => {
  life = newLife;
};

module.exports = { get, set };
