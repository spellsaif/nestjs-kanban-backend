import { Exclude } from "class-transformer";

export class UserSerializer {
    id: number;
    email: string;
    username: string;

    @Exclude()
    password: string;
}