/**
 * This object provides access to accelerometer data on the device.
 *
 * All these methods return the Accelerometer object so they can be chained.
 */
export interface Accelerometer {
    /**
     * Indicates whether accelerometer tracking is currently active.
     */
    isStarted: boolean;
    /**
     * The current acceleration in the X-axis, measured in m/s².
     */
    x: number;
    /**
     * The current acceleration in the Y-axis, measured in m/s².
     */
    y: number;
    /**
     * The current acceleration in the Z-axis, measured in m/s².
     */
    z: number;
    /**
     * **Bot API 8.0+** Starts tracking accelerometer data using params of type AccelerometerStartParams.
     * If an optional callback parameter is provided, the callback function will be called with
     *  a boolean indicating whether tracking was successfully started.
     */
    start(params: AccelerometerStartParams, callback: () => void): void;
    /**
     * **Bot API 8.0+** Stops tracking accelerometer data. If an optional callback parameter is provided,
     * the callback function will be called with a boolean indicating whether tracking was successfully stopped.
     */
    stop(callback: () => void): void;
}

/**
 * This object defines the parameters for starting accelerometer tracking.
 */
interface AccelerometerStartParams {
    /**
     * Optional. The refresh rate in milliseconds, with acceptable values ranging from 20 to 1000.
     * Set to 1000 by default. Note that refresh_rate may not be supported on all platforms,
     * so the actual tracking frequency may differ from the specified value.
     */
    refresh_rate?: number;
}
