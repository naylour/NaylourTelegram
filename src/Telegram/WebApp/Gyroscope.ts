/**
 * This object provides access to gyroscope data on the device.
 *
 * All these methods return the Gyroscope object so they can be chained.
*/
export interface Gyroscope {
    /** Indicates whether gyroscope tracking is currently active. */
    isStarted: boolean;

    /** The current rotation rate around the X-axis, measured in rad/s. */
    x: number;

    /** The current rotation rate around the Y-axis, measured in rad/s. */
    y: number;

    /** The current rotation rate around the Z-axis, measured in rad/s. */
    z: number;

    /**
     * **Bot API 8.0+** Starts tracking gyroscope data using params of type GyroscopeStartParams.
     * If an optional callback parameter is provided, the callback function will be called with
     * a boolean indicating whether tracking was successfully started.
     */
    start(params: GyroscopeStartParams, callback?: (status: boolean) => void): void;

    /**
     * **Bot API 8.0+** Stops tracking gyroscope data. If an optional callback parameter is provided,
     * the callback function will be called with a boolean indicating whether tracking was successfully stopped.
     */
    stop(callback: () => void): void;
}

/** This object defines the parameters for starting gyroscope tracking. */
export interface GyroscopeStartParams {
    /**
     * The refresh rate in milliseconds, with acceptable values ranging from 20 to 1000.
     * Set to 1000 by default. Note that refresh_rate may not be supported on all platforms,
     * so the actual tracking frequency may differ from the specified value.
     */
    refresh_rate?: number;
}
