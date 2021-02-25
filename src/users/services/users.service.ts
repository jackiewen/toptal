import usersDao from '@usersDaos/users.dao';
import { CRUD } from '@commonInterfaces/crud.interface';
import { UserDto } from '@usersDto/users.model';

class UsersService implements CRUD {
    private static instance: UsersService;

    static getInstance(): UsersService {
        if (!UsersService.instance) {
            UsersService.instance = new UsersService();
        }
        return UsersService.instance;
    }

    async create(resource: UserDto) {
        return await usersDao.addUser(resource);
    }

    async deleteById(resourceId: string) {
        return await usersDao.removeUserById(resourceId);
    }

    async list(limit: number, page: number) {
        return await usersDao.getUsers();
    }

    async patchById(resource: UserDto) {
        return await usersDao.patchUserById(resource);
    }

    async readById(resourceId: string) {
        return await usersDao.getUserById(resourceId);
    };

    async updateById(resource: UserDto) {
        return await usersDao.putUserById(resource);
    };

    async getUserByEmail(email: string) {
        return usersDao.getUserByEmail(email);
    }
}

export default UsersService.getInstance();