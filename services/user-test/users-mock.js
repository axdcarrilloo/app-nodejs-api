
const getNewUser = () => ({
  numberCC: '1287965409',
  name: 'Jairo David',
  lastName: 'Malindo',
  email: 'jmalindo@yahoo.es',
  userName: 'jmalindo',
  password: 'jm2b3c',
});

const getUserMock = () => ({
  _id: '66ba9e195040b32929471074',
  numberCC: '1287965409',
  name: 'Jairo David',
  lastName: 'Malindo',
  email: 'jmalindo@yahoo.es',
  userName: 'jmalindo',
  password: 'jm2b3c',
  __v: 0
});

const getAllUsersMock = () => ([
  {
    _id: '66b02c0c615ffab0cd45c8fa',
    numberCC: '1479520498',
    name: 'Isabel',
    lastName: 'Torres',
    email: 'ITorres@yahoo.es',
    userName: 'ITorres',
    password: '1a2b3c',
    __v: 0
  },
  {
    _id: "66b170985433fb97c820e9ef",
    numberCC: '756865645475678667',
    name: 'dfhtjyuoui',
    lastName: 'dfghfdhdfbbdf',
    email: 'sdfgf@hgjgh.com"',
    userName: "arasfdsf",
    password: "75656y",
    __v: 0
  }
]);

module.exports = { getAllUsersMock, getUserMock, getNewUser };
