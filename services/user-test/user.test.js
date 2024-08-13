
const mockFindAll = jest.fn();
const { getAllUsersMock, getUserMock } = require('./users-mock');
const UserService = require('../user.service');

jest.mock('../../database/user.database.js', () => jest.fn().mockImplementation(() => ({
  findAll: mockFindAll,
  create: () => {},
})));

describe('Test Users', () => {
  let userSvc;
  beforeEach(() => {
    userSvc = new UserService();
  });

  test('Test GetAllUsers Sucessful', async () => {
    const usersMock = getAllUsersMock();
    mockFindAll.mockResolvedValue(usersMock);

    const users = await userSvc.getAll();
    console.log(users);

    expect(users.length).toEqual(2);
    expect(mockFindAll).toHaveBeenCalled();;
  });
});
