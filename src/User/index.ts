import { User } from "../database/Models";

export type UserType = {
  name: string;
  email: string;
};

export const getAllUsers = async () => {
  try {
    const getAllUsers = await User.findAll();
    return getAllUsers;
  } catch (err) {
    console.log(err);
  }
};

export const getUserById = async (id: string) => {
  try {
    const getAllUsers = await User.findOne({
      where: {
        id,
      },
    });
    return getAllUsers;
  } catch (err) {
    console.log(err);
  }
};

export const createUser = async (userInfo: UserType) => {
  try {
    const createUser = await User.create(userInfo);
    return createUser;
  } catch (err) {
    console.log(err);
  }
};

export const deleteUser = async (id: string) => {
  try {
    const removeUser = await User.destroy({
      where: {
        id,
      },
    });
    return removeUser;
  } catch (err) {
    console.log(err);
  }
};

export const updateUser = async (user: UserType, id: string) => {
  try {
    const updateUser = await User.update(user, { where: { id } });
    return updateUser;
  } catch (err) {
    console.log(err);
  }
};
