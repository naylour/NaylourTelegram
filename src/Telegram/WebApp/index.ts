import type { Accelerometer } from "./Accelerometer";
import type { BiometricManager } from "./BiometricManager";
import type { BackButton, BottomButton, PopupButton, SettingsButton } from "./Buttons";
import type { BackButtonClickedCallback, BiometricAuthRequestedCallback, BiometricManagerUpdatedCallback, BiometricTokenUpdatedCallback, ClipboardTextReceivedCallback, ContactRequestedCallback, InvoiceClosedCallback, MainButtonClickedCallback, PopupClosedCallback, QrTextReceivedCallback, ScanQrPopupClosedCallback, SecondaryButtonClickedCallback, SettingsButtonClickedCallback, ThemeChangedCallback, ViewportChangedCallback, WriteAccessRequestedCallback } from "./callbacks";
import type { CloudStorage } from "./CloudStorage";
import type { DeviceOrientation } from "./DeviceOrientation";
import type { Gyroscope } from "./Gyroscope";
import type { HapticFeedback } from "./HapticFeedback";
import type { InitData } from "./InitData";
import type { LocationManager } from "./LocationManager";
import type { RequestContactResponse } from "./requestContact";
import type { ChatType, HomeScreenStatus, InvoiceStatus } from "./Statuses";
import type { ThemeParams } from "./ThemeParams";

export interface WebApp {
    /**
     * A string with raw data transferred to the Web App, convenient for
     * validating data. WARNING: Validate data from this field before using it
     * on the bot's server.
     */
    initData: string;
    /**
     * An object with input data transferred to the Web App. WARNING: Data from
     * this field should not be trusted. You should only use data from initData
     * on the bot's server and only after it has been validated.
     */
    initDataUnsafe: InitData;
    /**
     * The version of the Bot API available in the user's Telegram app.
     */
    version: string;
    /**
     * The name of the platform of the user's Telegram app.
     */
    platform: 'android' | 'ios' | 'macos' | 'tdesktop' | 'weba' | 'web';
    /**
     * The color scheme currently used in the Telegram app. Either “light” or
     * “dark”. Also available as the CSS variable var(--tg-color-scheme).
     */
    colorScheme: "light" | "dark";
    /**
     * An object containing the current theme settings used in the Telegram app.
     */
    themeParams: ThemeParams;
    /**
     *  True if the Web App is expanded to the maximum available height.
     *  False, if the Web App occupies part of the screen and can be expanded to the
     *  full height using the expand() method.
     */
    isExpanded: boolean;
    /**
     * The current height of the visible area of the Web App.
     * Also available in CSS as the variable var(--tg-viewport-height).
     *
     * The application can display just the top part of the Web App, with its
     * lower part remaining outside the screen area. From this position, the
     * user can “pull” the Web App to its maximum height, while the bot can do
     * the same by calling the expand() method. As the position of the Web App
     * changes, the current height value of the visible area will be updated in
     * real time.
     *
     * Please note that the refresh rate of this value is not sufficient to
     * smoothly follow the lower border of the window. It should not be used to
     * pin interface elements to the bottom of the visible area. It's more
     * appropriate to use the value of the viewportStableHeight field for this
     * purpose.
     */
    viewportHeight: number;
    /**
     * The height of the visible area of the Web App in its last stable state.
     * Also available in CSS as a variable var(--tg-viewport-stable-height).
     *
     * The application can display just the top part of the Web App, with its
     * lower part remaining outside the screen area. From this position, the
     * user can “pull” the Web App to its maximum height, while the bot can do
     * the same by calling the expand() method. Unlike the value of
     * viewportHeight, the value of viewportStableHeight does not change as the
     * position of the Web App changes with user gestures or during animations.
     * The value of viewportStableHeight will be updated after all gestures and
     * animations are completed and the Web App reaches its final size.
     *
     * Note the event viewportChanged with the passed parameter
     * isStateStable=true, which will allow you to track when the stable state
     * of the height of the visible area changes.
     */
    viewportStableHeight: number;
    /**
     * Current header color in the #RRGGBB format.
     */
    headerColor: string;
    /**
     * Current background color in the #RRGGBB format.
     */
    backgroundColor: string;
    /**
     * Current bottom bar color in the #RRGGBB format.
     */
    bottomBarColor: string;
    /**
     * True, if the confirmation dialog is enabled while the user is trying to
     * close the Web App. False, if the confirmation dialog is disabled.
     */
    isClosingConfirmationEnabled: boolean;
    /**
     * An object for controlling the back button which can be displayed in the
     * header of the Web App in the Telegram interface.
     */
    BackButton: BackButton;
    /**
     * An object for controlling the main button, which is displayed at the
     * bottom of the Web App in the Telegram interface.
     */
    MainButton: BottomButton;
    /**
     * An object for controlling the secondary button,
     * which is displayed at the bottom of the Mini App in the Telegram interface.
     */
    SecondaryButton: BottomButton;
    /**
     * An object for controlling the Settings item in the context menu of the
     * Mini App in the Telegram interface.
     */
    SettingsButton: SettingsButton;
    /**
     * An object for controlling haptic feedback.
     */
    HapticFeedback: HapticFeedback;
    /**
     * An object for controlling cloud storage.
     */
    CloudStorage: CloudStorage;
    /**
     * An object for controlling biometrics on the device.
     */
    BiometricManager: BiometricManager;
    /**
     * An object for accessing accelerometer data on the device.
     */
    Accelerometer: Accelerometer;
    /**
     * An object for accessing device orientation data on the device.
     */
    DeviceOrientation: DeviceOrientation;
    /**
     * An object for accessing gyroscope data on the device.
     */
    Gyroscope: Gyroscope;
    /**
     * An object for controlling location on the device.
     */
    LocationManager: LocationManager;
    /**
     * Returns true if the user's app supports a version of the Bot API that is
     * equal to or higher than the version passed as the parameter.
     */
    isVersionAtLeast(version: string): boolean;
    /**
     * **Bot API 8.0+** A method that requests opening the Mini App in fullscreen mode.
     * Although the header is transparent in fullscreen mode, it is recommended that the Mini App
     * sets the header color using the setHeaderColor method. This color helps determine a contrasting color
     * for the status bar and other UI controls.
     */
    requestFullscreen(): void;
    /**
     * **Bot API 8.0+** A method that requests exiting fullscreen mode.
     */
    exitFullscreen(): void;
    /**
     * **Bot API 8.0+** A method that locks the Mini App’s orientation to its current mode (either portrait or landscape).
     * Once locked, the orientation remains fixed, regardless of device rotation.
     * This is useful if a stable orientation is needed during specific interactions.
     */
    lockOrientation(): void;
    /**
     * **Bot API 8.0+** A method that unlocks the Mini App’s orientation,
     * allowing it to follow the device's rotation freely.
     * Use this to restore automatic orientation adjustments based on the device orientation.
     */
    unlockOrientation(): void;
    /**
     * **Bot API 8.0+** A method that prompts the user to add the Mini App to the home screen.
     * After successfully adding the icon, the homeScreenAdded event will be triggered if supported by the device.
     * Note that if the device cannot determine the installation status,
     * the event may not be received even if the icon has been added.
     */
    addToHomeScreen(): void;
    /**
     * **Bot API 8.0+** A method that checks if adding to the home screen is supported and if the Mini App
     * has already been added. If an optional callback parameter is provided,
     * the callback function will be called with a single argument status, which is a string indicating the home screen status.
     *
     * @param callback Possible values for status are:
     *  - unsupported – the feature is not supported, and it is not possible to add the icon to the home screen,
     *  - unknown – the feature is supported, and the icon can be added, but it is not possible to determine if the icon has already been added,
     *  - added – the icon has already been added to the home screen,
     *  - missed – the icon has not been added to the home screen.
     */
    checkHomeScreenStatus(callback: (status: HomeScreenStatus) => void): void;
    /**
     * A method that sets the app header color in the `#RRGGBB` format. You can
     * also use keywords bg_color and secondary_bg_color.
     */
    // string & {} prevents this from eagerly collapsing into just string
    setHeaderColor(color: "bg_color" | "secondary_bg_color" | (string & {})): void;
    /**
     * A method that sets the app background color in the `#RRGGBB` format or
     * you can use keywords bg_color, secondary_bg_color instead.
     */
    setBackgroundColor(color: "bg_color" | "secondary_bg_color" | "bottom_bar_bg_color" | (string & {})): void;
    /**
     * A method that sets the app's bottom bar color in the #RRGGBB format.
     * You can also use the keywords bg_color, secondary_bg_color and bottom_bar_bg_color.
     */
    setBottomBarColor(color: "bg_color" | "secondary_bg_color" | (string & {})): void;
    /**
     * A method that enables a confirmation dialog while the user is trying to
     * close the Web App.
     */
    enableClosingConfirmation(): void;
    /**
     * A method that disables the confirmation dialog while the user is trying
     * to close the Web App.
     */
    disableClosingConfirmation(): void;
    /**
     * A method that sets the app event handler. Check the list of available
     * events.
     */
    onEvent(eventType: "themeChanged", eventHandler: ThemeChangedCallback): void;
    onEvent(eventType: "mainButtonClicked", eventHandler: MainButtonClickedCallback): void;
    onEvent(eventType: "secondaryButtonClicked", eventHandler: SecondaryButtonClickedCallback): void;
    onEvent(eventType: "backButtonClicked", eventHandler: BackButtonClickedCallback): void;
    onEvent(eventType: "settingsButtonClicked", eventHandler: SettingsButtonClickedCallback): void;
    onEvent(eventType: "popupClosed", eventHandler: PopupClosedCallback): void;
    onEvent(eventType: "viewportChanged", eventHandler: ViewportChangedCallback): void;
    onEvent(eventType: "invoiceClosed", eventHandler: InvoiceClosedCallback): void;
    onEvent(eventType: "qrTextReceived", eventHandler: QrTextReceivedCallback): void;
    onEvent(eventType: "scanQrPopupClosed", eventHandler: ScanQrPopupClosedCallback): void;
    onEvent(eventType: "clipboardTextReceived", eventHandler: ClipboardTextReceivedCallback): void;
    onEvent(eventType: "writeAccessRequested", eventHandler: WriteAccessRequestedCallback): void;
    onEvent(eventType: "contactRequested", eventHandler: ContactRequestedCallback): void;
    onEvent(eventType: "biometricManagerUpdated", eventHandler: BiometricManagerUpdatedCallback): void;
    onEvent(eventType: "biometricAuthRequested", eventHandler: BiometricAuthRequestedCallback): void;
    onEvent(eventType: "biometricTokenUpdated", eventHandler: BiometricTokenUpdatedCallback): void;

    /** A method that deletes a previously set event handler. */
    offEvent(eventType: "themeChanged", eventHandler: ThemeChangedCallback): void;
    offEvent(eventType: "mainButtonClicked", eventHandler: MainButtonClickedCallback): void;
    offEvent(eventType: "backButtonClicked", eventHandler: BackButtonClickedCallback): void;
    offEvent(eventType: "settingsButtonClicked", eventHandler: SettingsButtonClickedCallback): void;
    offEvent(eventType: "popupClosed", eventHandler: PopupClosedCallback): void;
    offEvent(eventType: "viewportChanged", eventHandler: ViewportChangedCallback): void;
    offEvent(eventType: "invoiceClosed", eventHandler: InvoiceClosedCallback): void;
    offEvent(eventType: "qrTextReceived", eventHandler: QrTextReceivedCallback): void;
    offEvent(eventType: "scanQrPopupClosed", eventHandler: ScanQrPopupClosedCallback): void;
    offEvent(eventType: "clipboardTextReceived", eventHandler: ClipboardTextReceivedCallback): void;
    offEvent(eventType: "writeAccessRequested", eventHandler: WriteAccessRequestedCallback): void;
    offEvent(eventType: "contactRequested", eventHandler: ContactRequestedCallback): void;
    offEvent(eventType: "biometricManagerUpdated", eventHandler: BiometricManagerUpdatedCallback): void;
    offEvent(eventType: "biometricAuthRequested", eventHandler: BiometricAuthRequestedCallback): void;
    offEvent(eventType: "biometricTokenUpdated", eventHandler: BiometricTokenUpdatedCallback): void;

    /**
     * A method used to send data to the bot. When this method is called, a
     * service message is sent to the bot containing the data data of the length
     * up to 4096 bytes, and the Web App is closed. See the field web_app_data
     * in the class Message.
     *
     * This method is only available for Web Apps launched via a Keyboard
     * button.
     */
    sendData(data: string): void;
    /**
     * A method that inserts the bot's username and the specified inline query
     * in the current chat's input field. Query may be empty, in which case only
     * the bot's username will be inserted. If an optional choose_chat_types
     * parameter was passed, the client prompts the user to choose a specific
     * chat, then opens that chat and inserts the bot's username and the
     * specified inline query in the input field. You can specify which types of
     * chats the user will be able to choose from. It can be one or more of the
     * following types: users, bots, groups, channels.
     */
    switchInlineQuery(query: string, choose_chat_types?: Array<ChatType>): void;
    /**
     * A method that opens a link in an external browser. The Web App will not
     * be closed. If the optional options parameter is passed with the field
     * @param try_instant_view the link will be opened in Instant View mode if
     * possible.
     *
     * Note that this method can be called only in response to user interaction
     * with the Web App interface (e.g. a click inside the Web App or on the
     * main button)
     */
    openLink(url: string, options?: { try_instant_view?: boolean }): void;
    /**
     * A method that opens a telegram link inside Telegram app. The Web App will
     * be closed.
     */
    openTelegramLink(url: string): void;
    /**
     * A method that opens an invoice using the link url. The Web App will
     *  receive the event invoiceClosed when the invoice is closed. If an
     *  optional callback parameter was passed, the callback function will be
     *  called and the invoice status will be passed as the first argument.
     */
    openInvoice(
        url: string,
        callback: (status: InvoiceStatus) => void,
    ): void;
    /**
     * A method that shows a native popup described by the params argument of
     * the type PopupParams. The Web App will receive the event popupClosed when
     * the popup is closed. If an optional callback parameter was passed, the
     * callback function will be called and the field id of the pressed button
     * will be passed as the first argument.
     */
    showPopup(params: PopupParams, callback?: (button_id: string) => void): void;
    /**
     * A method that shows message in a simple alert with a 'Close' button. If
     * an optional callback parameter was passed, the callback function will be
     * called when the popup is closed.
     */
    showAlert(message: string, callback?: () => void): void;
    /**
     * A method that shows message in a simple confirmation window with 'OK' and
     * 'Cancel' buttons. If an optional callback parameter was passed, the
     * callback function will be called when the popup is closed and the first
     * argument will be a boolean indicating whether the user pressed the 'OK'
     * button.
     */
    showConfirm(message: string, callback?: (ok: boolean) => void): void;
    /**
     * A method that shows a native popup for scanning a QR code described by
     * the params argument of the type ScanQrPopupParams. The Web App will
     * receive the event qrTextReceived every time the scanner catches a code
     * with text data. If an optional callback parameter was passed, the
     * callback function will be called and the text from the QR code will be
     * passed as the first argument. Returning true inside this callback
     * function causes the popup to be closed. Starting from **Bot API 7.7**,
     * the Mini App will receive the scanQrPopupClosed event if the user closes
     * the native popup for scanning a QR code.
     */
    showScanQrPopup(params: ScanQrPopupParams, callback?: (data: string) => void): void;
    /**
     * A method that closes the native popup for scanning a QR code opened with
     * the showScanQrPopup method. Run it if you received valid data in the
     * event qrTextReceived.
     */
    closeScanQrPopup(): void;
    /** A method that opens the native story editor with the media specified in
     * the media_url parameter as an HTTPS URL. An optional params argument of
     * the type StoryShareParams describes additional sharing settings. */
    shareToStory(media_url: string, params?: StoryShareParams): void;
    /**
     * A method that requests text from the clipboard. The Web App will receive
     * the event clipboardTextReceived. If an optional callback parameter was
     * passed, the callback function will be called and the text from the
     * clipboard will be passed as the first argument.
     *
     * Note: this method can be called only for Web Apps launched from the
     * attachment menu and only in response to a user interaction with the Web
     * App interface (e.g. a click inside the Web App or on the main button).
     */
    readTextFromClipboard(callback?: (data: string | null) => void): void;
    /**
     * A method that shows a native popup requesting permission for the bot to
     * send messages to the user.
     *
     * @param callback If an optional callback parameter was passed, the
     * callback function will be called when the popup is closed and the first
     * argument will be a boolean indicating whether the user granted this
     * access.
     */
    requestWriteAccess(callback?: (success: boolean) => void): void;
    /**
     * A method that shows a native popup prompting the user for their phone
     * number.
     *
     * @param callback If an optional callback parameter was passed, the
     * callback function will be called when the popup is closed and the first
     * argument will be a boolean indicating whether the user shared its phone
     * number. The second argument, contingent upon success, will be an object
     * detailing the shared contact information or a cancellation response.
     */
    requestContact(
        callback?: (success: boolean, response: RequestContactResponse) => void,
    ): void;
    /**
     * A method that informs the Telegram app that the Web App is ready to be
     * displayed. It is recommended to call this method as early as possible, as
     * soon as all essential interface elements are loaded. Once this method is
     * called, the loading placeholder is hidden and the Web App is shown. If
     * the method is not called, the placeholder will be hidden only when the
     * page is fully loaded.
     */
    ready(): void;
    /**
     * A method that expands the Web App to the maximum available height. To
     * find out if the Web App is expanded to the maximum height, refer to the
     * value of the Telegram.WebApp.isExpanded parameter
     */
    expand(): void;
    /** A method that closes the Web App. */
    close(): void;
    /**
     * `True`, if vertical swipes to close or minimize the Mini App are enabled.
     * `False`, if vertical swipes to close or minimize the Mini App are
     * disabled. In any case, the user will still be able to minimize and close
     * the Mini App by swiping the Mini App's header.
     */
    isVerticalSwipesEnabled: boolean;
    /**
     * **Bot API 7.7+** A method that enables vertical swipes to close or
     * minimize the Mini App. For user convenience, it is recommended to always
     * enable swipes unless they conflict with the Mini App's own gestures.
     */
    enableVerticalSwipes(): void;
    /**
     * **Bot API 7.7+** A method that disables vertical swipes to close or
     * minimize the Mini App. This method is useful if your Mini App uses swipe
     * gestures that may conflict with the gestures for minimizing and closing
     * the app.
     */
    disableVerticalSwipes(): void;

    /**
     * **Bot API 8.0+** True, if the Mini App is currently active. False, if the Mini App is minimized.
     */
    isActive: boolean;
    /**
     * True, if the Mini App is currently being displayed in fullscreen mode.
     */
    isFullscreen: boolean;

    /**
     * True, if the Mini App’s orientation is currently locked. False, if orientation changes freely based on the device’s rotation.
     */
    isOrientationLocked: boolean;

    /**
     * An object representing the device's safe area insets, accounting for system UI elements like notches or navigation bars.
     */
    safeAreaInset: SafeAreaInset;

    /**
     * An object representing the safe area for displaying content within the app, free from overlapping Telegram UI elements.
     */
    contentSafeAreaInset: ContentSafeAreaInset;
}


/**
 * This object represents the content-defined safe area insets,
 * providing padding values to ensure content remains within visible boundaries, avoiding overlap with Telegram UI elements.
 */
export interface ContentSafeAreaInset {
    /**
     * The top inset in pixels, representing the space to avoid at the top of the content area.
     * Also available as the CSS variable var(--tg-content-safe-area-inset-top).
     */
    top: number;
    /**
     * The bottom inset in pixels, representing the space to avoid at the bottom of the content area.
     * Also available as the CSS variable var(--tg-content-safe-area-inset-bottom).
     */
    bottom: number;
    /**
     * The left inset in pixels, representing the space to avoid on the left side of the content area.
     * Also available as the CSS variable var(--tg-content-safe-area-inset-left).
     */
    left: number;
    /**
     * The right inset in pixels, representing the space to avoid on the right side of the content area.
     * Also available as the CSS variable var(--tg-content-safe-area-inset-right).
     */
    right: number;
}

/**
 * This object describes the native popup.
 */
export interface PopupParams {
    /**
     * The text to be displayed in the popup title, 0-64 characters.
     */
    title?: string;
    /**
     * The message to be displayed in the body of the popup, 1-256 characters.
     */
    message: string;
    /**
     * List of buttons to be displayed in the popup, 1-3 buttons. Set to
     * [{“type”:“close”}] by default.
     */
    buttons?: PopupButton[];
}

/**
 * This object describes the native popup for scanning QR codes.
 */
export interface ScanQrPopupParams {
    /**
     * The text to be displayed under the 'Scan QR' heading, 0-64 characters.
     */
    text?: string;
}


/**
 * This object represents the system-defined safe area insets, providing padding values to ensure content remains within visible boundaries,
 * avoiding overlap with system UI elements like notches or navigation bars.
 */
export interface SafeAreaInset {
    /**
     * The top inset in pixels, representing the space to avoid at the top of the screen.
     * Also available as the CSS variable var(--tg-safe-area-inset-top).
     */
    top: number;
    /**
     * The bottom inset in pixels, representing the space to avoid at the bottom of the screen.
     * Also available as the CSS variable var(--tg-safe-area-inset-bottom).
     */
    bottom: number;
    /**
     * 	The left inset in pixels, representing the space to avoid on the left side of the screen.
     * Also available as the CSS variable var(--tg-safe-area-inset-left).
     */
    left: number;
    /**
     * The right inset in pixels, representing the space to avoid on the right side of the screen.
     * Also available as the CSS variable var(--tg-safe-area-inset-right).
     */
    right: number;
}

export interface StoryShareParams {
    /** The caption to be added to the media, 0-200 characters for regular users
     * and 0-2048 characters for premium subscribers. */
    text?: string;
    /** An object that describes a widget link to be included in the story. Note
     * that only premium subscribers can post stories with links. */
    widget_link?: StoryWidgetLink;
}

/** This object describes a widget link to be included in the story. */
export interface StoryWidgetLink {
    /** The URL to be included in the story. */
    url: string;
    /** The name to be displayed for the widget link, 0-48 characters. */
    name?: string;
}
