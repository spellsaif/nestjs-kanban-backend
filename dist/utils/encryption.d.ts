export declare function hashPassword(password: string): Promise<string>;
export declare function comparePassword(password: string, encryptedPassword: string): Promise<boolean>;
