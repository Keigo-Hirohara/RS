import { WebhookEvent, WebhookRequestBody } from '@line/bot-sdk';
import { Body, Controller, Post } from '@nestjs/common';
import { ConfigService as NestConfigService } from './config/config.service';

@Controller('linebot')
export class LinebotController {
  constructor(private configService: NestConfigService) {}

  returnMessage =
    '申し訳ありません！個別のメッセージは受け付けておりません(_ _)';

  @Post()
  async handler(@Body() req: WebhookRequestBody) {
    const events: WebhookEvent[] = req.events;
    events.map((event) => {
      if (event.type === 'message') {
        return this.configService
          .createLinebotClient()
          .replyMessage(event.replyToken, {
            type: 'text',
            text: this.returnMessage,
          });
      }
    });
  }
}
