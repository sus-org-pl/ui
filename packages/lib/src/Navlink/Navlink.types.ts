import type { NavSectionElement } from "../NavSection/NavSection.types";

export type NavlinkTarget = string | NavlinkSectionTargetConfig;

export interface NavlinkSectionTargetConfig {
  elements: NavSectionElement[];
  title: string;
}
