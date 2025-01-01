import type { Utils } from './Telegram/Utils';
import type { WebApp } from './Telegram/WebApp';
import type { WebView } from './Telegram/WebView';

declare global {
    interface Telegram {
        WebApp: WebApp;
        WebView: WebView;
        Utils: Utils;
    }

    interface Window {
        Telegram: Telegram;
    }
}

export {};
