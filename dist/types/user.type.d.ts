import { CreateUserDto } from "src/auth/dtos";
export declare type UserDetails = Omit<CreateUserDto, "confirmPassword">;
