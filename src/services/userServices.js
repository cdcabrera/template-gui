import { helpers } from '../common/helpers';

const authorizeUser = () => helpers.noopPromise;

const getLocale = () => {
  const locale = {
    value: process.env.REACT_APP_CONFIG_SERVICE_LOCALES_DEFAULT_LNG,
    key: process.env.REACT_APP_CONFIG_SERVICE_LOCALES_DEFAULT_LNG_DESC
  };

  return new Promise(resolve => {
    if (locale) {
      return resolve({
        data: locale
      });
    }

    return resolve({});
  });
};

const logoutUser = () => helpers.noopPromise;

const userServices = { authorizeUser, getLocale, logoutUser };

export { userServices as default, userServices, authorizeUser, getLocale, logoutUser };
