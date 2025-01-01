declare global {
    namespace Telegram {
        interface WebApp {
            theme: 'dark' | 'light';
        }
        interface WebView {}
        interface Utils {}
    }
}

export {};
