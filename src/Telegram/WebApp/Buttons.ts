/**
 * This object controls the main button, which is displayed at the bottom of the
 * Web App in the Telegram interface.
 */
export interface BottomButton {
    /** Current button text. Set to CONTINUE by default. */
    text: string;
    /** Current button color. Set to themeParams.button_color by default. */
    color: string;
    /**
     * Current button text color. Set to themeParams.button_text_color by
     * default.
     */
    textColor: string;
    /** Shows whether the button is visible. Set to false by default. */
    isVisible: boolean;
    /** Shows whether the button is active. Set to true by default. */
    isActive: boolean;
    /** Shows whether the button has a shine effect. Set to false by default. */
    hasShineEffect: boolean;
    /**
     * Position of the secondary button. Not defined for the main button.
     * It applies only if both the main and secondary buttons are visible. Set to left by default.
     * Supported values:
     *  - left, displayed to the left of the main button,
     *  - right, displayed to the right of the main button,
     *  - top, displayed above the main button,
     *  - bottom, displayed below the main button.
     */
    position?: "left" | "right" | "top" | "bottom";
    /** Readonly. Shows whether the button is displaying a loading indicator. */
    isProgressVisible: boolean;
    /** A method to set the button text. */
    setText(text: string): BottomButton;
    /**
     * A method that sets the button press event handler. An alias for
     * Telegram.WebApp.onEvent('mainButtonClicked', callback)
     */
    onClick(callback: () => void): BottomButton;
    /** A method that deletes a previously set handler */
    offClick(callback: () => void): BottomButton;
    /**
     * A method to make the button visible. Note that opening the Web App from
     * the attachment menu hides the main button until the user interacts with
     * the Web App interface.
     */
    show(): BottomButton;
    /** A method to hide the button. */
    hide(): BottomButton;
    /** A method to enable the button. */
    enable(): BottomButton;
    /** A method to disable the button. */
    disable(): BottomButton;
    /**
     * A method to show a loading indicator on the button. It is recommended to
     * display loading progress if the action tied to the button may take a long
     * time. By default, the button is disabled while the action is in progress.
     * If the parameter leaveActive=true is passed, the button remains enabled.
     */
    showProgress(leaveActive?: boolean): BottomButton;
    /** A method to hide the loading indicator. */
    hideProgress(): BottomButton;
    /**
     * A method to set the button parameters. The params parameter is an object
     * containing one or several fields that need to be changed:
     * - text - button text;
     * - color - button color;
     * - text_color - button text color;
     * - is_active - enable the button;
     * - is_visible - show the button.
     */
    setParams(params: MainButtonParams): BottomButton;
}

export interface MainButtonParams {
    /** button text */
    text?: string;
    /** button color */
    color?: string;
    /** button text color */
    text_color?: string;
    /** enable shine effect */
    has_shine_effect?: boolean;
    /** position of the secondary button */
    position?: "left" | "right" | "top" | "bottom";
    /** enable the button */
    is_active?: boolean;
    /** show the button */
    is_visible?: boolean;
}

/**
 * This object controls the Settings item in the context menu of the Mini App in
 * the Telegram interface.
 */
export interface SettingsButton {
    /**
     * Shows whether the context menu item is visible. Set to false by default.
     */
    isVisible: boolean;
    /**
     * **Bot API 7.0+** A method that sets the press event handler for the
     * Settings item in the context menu. An alias for
     * `Telegram.WebApp.onEvent('settingsButtonClicked', callback)`
     */
    onClick(callback: () => void): SettingsButton;
    /**
     * **Bot API 7.0+** A method that removes the press event handler from the
     * Settings item in the context menu. An alias for
     * `Telegram.WebApp.offEvent('settingsButtonClicked', callback)`
     */
    offClick(callback: () => void): SettingsButton;
    /**
     * **Bot API 7.0+** A method to make the Settings item in the context menu
     * visible.
     */
    show(): SettingsButton;
    /**
     * **Bot API 7.0+** A method to hide the Settings item in the context menu.
     */
    hide(): SettingsButton;
}


/**
 * This object describes the native popup button.
 */
export type PopupButton =
    & {
        /**
         * Identifier of the button, 0-64 characters. Set to empty string by
         * default. If the button is pressed, its id is returned in the callback
         * and the popupClosed event.
         */
        id?: string;
        /**
         * Type of the button. Set to default by default. Can be one of these
         * values:
         * - `default`, a button with the default style,
         * - `ok`, a button with the localized text “OK”,
         * - `close`, a button with the localized text “Close”,
         * - `cancel`, a button with the localized text “Cancel”,
         * - `destructive`, a button with a style that indicates a destructive
         *   action (e.g. “Remove”, “Delete”, etc.).
         */
        type?: "default" | "ok" | "close" | "cancel" | "destructive";
        /**
         * The text to be displayed on the button, 0-64 characters. Required if
         * type is default or destructive. Irrelevant for other types.
         */
        text?: string;
    }
    & (
        | {
            type: "default" | "destructive";
            text: string;
        }
        | {
            type: "ok" | "close" | "cancel";
            text?: string;
        }
    );

/**
 * This object controls the back button, which can be displayed in the header of
 * the Web App in the Telegram interface.
 */
export interface BackButton {
    /**
     * Shows whether the button is visible. Set to false by default.
     */
    isVisible: boolean;
    /**
     * A method that sets the button press event handler. An alias for
     * Telegram.WebApp.onEvent('backButtonClicked', callback)
     */
    onClick(callback: () => void): BackButton;
    /**
     *  A method that removes the button press event handler. An alias for
     *  Telegram.WebApp.offEvent('backButtonClicked', callback)
     */
    offClick(callback: () => void): BackButton;
    /**
     * A method to make the button active and visible.
     */
    show(): void;
    /**
     * A method to hide the button.
     */
    hide(): void;
}
