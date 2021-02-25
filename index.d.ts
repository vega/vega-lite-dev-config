import { ConfigFile } from "@beemo/core";

export interface Settings {
  /**
   * Target node.
   */
  node?: boolean;

  /**
   * Support react.
   */
  react?: boolean;
}

export type Config = Partial<ConfigFile<Settings>>;
