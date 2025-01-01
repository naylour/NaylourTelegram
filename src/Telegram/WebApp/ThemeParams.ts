export interface ThemeParams {
    /**
     * Background color in the `#RRGGBB` format.
     * Also available as the CSS variable `var(--tg-theme-bg-color)`.
     */
    bg_color?: string;
    /**
     * Main text color in the `#RRGGBB` format.
     * Also available as the CSS variable `var(--tg-theme-text-color)`.
     */
    text_color?: string;
    /**
     * Hint text color in the `#RRGGBB` format.
     * Also available as the CSS variable `var(--tg-theme-hint-color)`.
     */
    hint_color?: string;
    /**
     * Link color in the `#RRGGBB` format.
     * Also available as the CSS variable `var(--tg-theme-link-color)`.
     */
    link_color?: string;
    /**
     * Button color in the `#RRGGBB` format.
     * Also available as the CSS variable `var(--tg-theme-button-color)`.
     */
    button_color?: string;
    /**
     * Button text color in the `#RRGGBB` format.
     * Also available as the CSS variable `var(--tg-theme-button-text-color)`.
     */
    button_text_color?: string;
    /**
     * **Bot API 6.1+** Secondary background color in the `#RRGGBB` format.
     * Also available as the CSS variable `var(--tg-theme-secondary-bg-color)`.
     */
    secondary_bg_color?: string;
    /**
     * **Bot API 7.0+** Header background color in the `#RRGGBB` format.
     * Also available as the CSS variable `var(--tg-theme-header-bg-color)`.
     */
    header_bg_color?: string;
    /**
     * **Bot API 7.10+** Bottom background color in the #RRGGBB format.
     * Also available as the CSS variable var(--tg-theme-bottom-bar-bg-color).
     */
    bottom_bar_bg_color?: string;
    /**
     * **Bot API 7.0+** Accent text color in the `#RRGGBB` format.
     * Also available as the CSS variable `var(--tg-theme-accent-text-color)`.
     */
    accent_text_color?: string;
    /**
     * **Bot API 7.0+** Background color for the section in the `#RRGGBB` format.
     * It is recommended to use this in conjunction with *secondary_bg_color*.
     * Also available as the CSS variable `var(--tg-theme-section-bg-color)`.
     */
    section_bg_color?: string;
    /**
     * **Bot API 7.0+** Header text color for the section in the `#RRGGBB` format.
     * Also available as the CSS variable `var(--tg-theme-section-header-text-color)`.
     */
    section_header_text_color?: `#${string}`;
    /**
     * **Bot API 7.6+** Section separator color in the `#RRGGBB` format.
     * Also available as the CSS variable `var(--tg-theme-section-separator-color)`.
     */
    section_separator_color?: string;
    /**
     * **Bot API 7.0+** Subtitle text color in the `#RRGGBB` format.
     *  Also available as the CSS variable `var(--tg-theme-subtitle-text-color)`.
     */
    subtitle_text_color?: string;
    /**
     * **Bot API 7.0+** Text color for destructive actions in the `#RRGGBB` format.
     * Also available as the CSS variable `var(--tg-theme-destructive-text-color)`.
     */
    destructive_text_color?: string;
}
