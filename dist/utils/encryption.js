"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.comparePassword = exports.hashPassword = void 0;
const bcrypt = require("bcrypt");
const salt = 10;
async function hashPassword(password) {
    return bcrypt.hash(password, salt);
}
exports.hashPassword = hashPassword;
async function comparePassword(password, encryptedPassword) {
    return bcrypt.compare(password, encryptedPassword);
}
exports.comparePassword = comparePassword;
//# sourceMappingURL=encryption.js.map