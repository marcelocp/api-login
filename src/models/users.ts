type iUser = {
  id?: string,
  name: string,
  username: string,
  email: string,
  createdAt: Date,
}

class Users {
  users: iUser;
  constructor(users: iUser) {
    this.users = users;
  }
}

export default Users;
