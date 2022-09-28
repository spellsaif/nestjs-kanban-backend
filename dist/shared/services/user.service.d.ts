import { IUserService } from "src/interfaces";
import { PrismaService } from "src/prisma/prisma.service";
import { UserDetails } from "src/types";
export declare class UserService implements IUserService {
    private prismaService;
    constructor(prismaService: PrismaService);
    findUserByEmail(email: string): Promise<import("@prisma/client").User>;
    createUser(userDetails: UserDetails): Promise<import("@prisma/client").User>;
}
