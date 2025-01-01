import './index.d';
import { setContext as _setContext, getContext as _getContext } from 'svelte';
class TelegramObject {
    WebApp = $state();
    WebView = $state();
    Utils = $state();
}
export const TELEGRAM_CONTEXT_KEY = Symbol('NAYLOUR_TELEGRAM_CONTEXT_KEY'), setContext = () => _setContext(TELEGRAM_CONTEXT_KEY, new TelegramObject()), getContext = () => _getContext(TELEGRAM_CONTEXT_KEY);
