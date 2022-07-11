import { RichMenu } from '@line/bot-sdk';

export const richmenuObject = (): RichMenu => ({
  size: {
    width: 2500,
    height: 1686,
  },
  selected: false,
  name: 'Nice richmenu',
  chatBarText: 'Tap to open',
  areas: [
    {
      bounds: {
        x: 0,
        y: 0,
        width: 2500,
        height: 1686,
      },
      action: {
        type: 'postback',
        data: 'action=buy&itemid=123',
      },
    },
  ],
});
