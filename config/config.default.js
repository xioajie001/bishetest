/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1576225884608_9878';

  // add your middleware config here
  config.middleware = [];
  
  config.api = "mongodb://admin:admin123@59.110.162.236:27017:27017/zxj_db?authSource=admin";

  // 数据库配置
  config.mongoose = {
    client: {
      url: 'mongodb://admin:admin123@59.110.162.236:27017:27017/zxj_db?authSource=admin', 
      options: {
        useNewUrlParser: true,
      },
    },
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};


