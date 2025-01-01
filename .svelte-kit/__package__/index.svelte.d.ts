import './index.d';
declare class TelegramObject {
    WebApp: Telegram.WebApp;
    WebView: Telegram.WebView;
    Utils: Telegram.Utils;
}
export declare const TELEGRAM_CONTEXT_KEY: unique symbol, setContext: () => TelegramObject, getContext: () => ReturnType<typeof setContext>;
export {};
