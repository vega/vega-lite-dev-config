import { BeemoConfig } from "@beemo/core";

export interface Settings {
  /**
   * Target node.
   */
  node?: boolean;

  /**
   * Support react.
   */
  react?: boolean;

  /**
   * Babel specific configuration.
   */
  babel?: {
    /**
     * Set up babel for Jest.
     */
    jest: boolean
  }
}

export type Config = BeemoConfig<Settings>;
