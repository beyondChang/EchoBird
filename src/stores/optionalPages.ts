import type { AppSettings } from '../api/types';

export const OPTIONAL_PAGE_SETTINGS = {
  localLlm: 'localLlmEnabled',
} as const;

export type OptionalPage = keyof typeof OPTIONAL_PAGE_SETTINGS;
export type OptionalPages = Record<OptionalPage, boolean>;

export const optionalPagesFromSettings = (settings: AppSettings): OptionalPages => ({
  localLlm: settings.localLlmEnabled !== false,
});
