import { createSender, createSubscriber } from '../channel';
import getCompareIsAllinpanelVersion from './compare-version';

export const getLanguage = createSender('contextLanguage', {});
export const subscribeLanguage = createSubscriber('contextLanguage');
export const getEnvironment = createSender('contextEnvironment', {});
export const getLocale = createSender('contextLocale', {});
export const subscribeLocale = createSubscriber('contextLocale');
export const getAllinpanelVersion = createSender('contextAllinpanelVersion', {});
export const compareIsAllinpanelVersion = getCompareIsAllinpanelVersion(getAllinpanelVersion);
export const getUserInformation = createSender('contextUserInformation', {});
export const getUserTimezone = createSender('contextUserTimezone', {});
export const getAppInformation = createSender('contextAppInformation', {});
export const getModuleInformation = createSender('contextModuleInformation', {});

/**
 * Get the current content language
 */
export type contextLanguage = {
  responseType: {
    systemLanguageId: string,
    languageId: string,
  },
}

/**
 * Get the current environment (development or production)
 */
export type contextEnvironment = {
  responseType: 'development' | 'production' | 'testing',
}

/**
 * Get the current UI locale
 */
export type contextLocale = {
  responseType: {
    locale: string,
    fallbackLocale: string,
  },
}

/**
 * Get the current Allinpanel version
 */
export type contextAllinpanelVersion = {
  responseType: string,
}

/**
 * Get the current app information
 */
export type contextAppInformation = {
  responseType: {
    name: string,
    version: string,
    type: 'app'|'plugin',
  },
}

/**
 * Get the current user information
 */
export type contextUserInformation = {
  responseType: {
    aclRoles: Array<{
      name: string,
      type: string,
      id: string,
      privileges: Array<string>,
    }>,
    active: boolean,
    admin: boolean,
    avatarId: string,
    email: string,
    name: string,
    id: string,
    phoneNumber: string,
    localeId: string,
    title: string,
    type: string,
    username: string,
  },
}

/**
 * Get the user's timezone
 */
export type contextUserTimezone = {
  responseType: string,
}

/**
 * Get all registered module information for the extension
 */
export type contextModuleInformation = {
  responseType: {
    modules: Array<{
      displaySearchBar: boolean,
      heading: string,
      id: string,
      locationId: string,
    }>,
  },
}

export type contextShopId = {
  responseType: string|null,
}