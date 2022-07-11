import { Injectable } from '@nestjs/common';
import { Client } from '@line/bot-sdk';
import { ConfigService as NestConfigService } from '@nestjs/config';
import { richmenuObject } from './services/richmenu';

@Injectable()
export class ConfigService {
  createLinebotClient() {
    const configService = new NestConfigService();
    const tokens = {
      channelAccessToken: configService.get<string>('CHANNEL_ACCESS_TOKEN'),
      channelSecret: configService.get<string>('CHANNEL_SECRET'),
    };
    const client = new Client(tokens);
    client.createRichMenu(richmenuObject());
    return client;
  }
}
