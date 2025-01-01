import '.';
import { BROWSER } from 'esm-env';
import {
    setContext as _setContext,
    getContext as _getContext,
} from 'svelte';

class TelegramObject {
    WebApp = $state() as Telegram['WebApp'];
    Utils = $state() as Telegram['Utils'];
    WebView = $state() as Telegram['WebView'];

    constructor() {
        if (BROWSER && window.Telegram) {
            this.WebApp = window.Telegram.WebApp;
            this.WebView = window.Telegram.WebView;
            this.Utils = window.Telegram.Utils;
        }

        this.WebApp.HapticFeedback.impactOccurred('heavy')
    }
}

export const
    TELEGRAM_CONTEXT_KEY = Symbol('NAYLOUR_TELEGRAM_CONTEXT_KEY'),
    setContext = () => _setContext(TELEGRAM_CONTEXT_KEY, new TelegramObject()),
    getContext = (): ReturnType<typeof setContext> => _getContext(TELEGRAM_CONTEXT_KEY);
