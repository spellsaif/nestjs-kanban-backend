import { BadRequestException, ForbiddenException, Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import e from "express";

import { IUserService } from "src/interfaces";
import { PrismaService } from "src/prisma/prisma.service";
import { UserDetails } from "src/types";



@Injectable()
export class UserService implements IUserService {

    constructor(private prismaService: PrismaService) { }

    async findUserByEmail(email: string) {

        const user = await this.prismaService.user.findUnique({
            where: {
                email
            }
        })

        return user;
    }

    async createUser(userDetails: UserDetails) {

        try {

            const newUser = await this.prismaService.user.create({ data: userDetails });

            return newUser;

        } catch (e) {

            if (e instanceof Prisma.PrismaClientKnownRequestError)
                if (e.code === 'P2002')
                    throw new BadRequestException('Credentials Already Exist!');

        }

    }

}