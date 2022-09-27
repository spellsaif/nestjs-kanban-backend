import { ConfigService } from '@nestjs/config'

const env = new ConfigService();

export const envConfig = {
    SERVER_PORT: env.get('SERVER_PORT')
}