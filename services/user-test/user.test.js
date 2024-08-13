
const mockUser = jest.fn();
const { getAllUsersMock, getUserMock, getNewUser } = require('./users-mock');
const UserService = require('../user.service');

jest.mock('../../database/user.database.js', () => jest.fn().mockImplementation(() => ({
  findAll: mockUser,
  findByLogin: mockUser,
  create: mockUser
})));

describe('Test Users', () => {
  let userSvc;
  beforeEach(() => {
    userSvc = new UserService();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Test create Sucessful', async () => {
    const userMock = '66ba9e195040b32929471074';
    mockUser.mockResolvedValue(userMock);

    const idUser = await userSvc.register(getNewUser());

    expect(idUser).not.toBeNull();
    expect(idUser).toEqual(userMock);
    expect(mockUser).toHaveBeenCalled();
  });

  test('Test getByUserNameAndPassword Sucessful', async () => {
    const userMock = getUserMock();
    mockUser.mockResolvedValue(userMock);

    const login = {userName: 'jmalindo', password: 'jm2b3c'}
    const user = await userSvc.getByUserNameAndPassword(login);

    expect(user).not.toBeNull();
    expect(user.name).toEqual('Jairo David');
    expect(mockUser).toHaveBeenCalled();
  });

  test('Test GetAllUsers Sucessful', async () => {
    const usersMock = getAllUsersMock();
    mockUser.mockResolvedValue(usersMock);

    const users = await userSvc.getAll();

    expect(users.length > 0).toBeTruthy();
    expect(users.length).toEqual(2);
    expect(mockUser).toHaveBeenCalled();
  });
});
