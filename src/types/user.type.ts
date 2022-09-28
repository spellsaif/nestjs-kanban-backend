import { CreateUserDto } from "src/auth/dtos";

export type UserDetails = Omit<CreateUserDto, "confirmPassword">;