/**
 * 网站配置文件
 */

const config = {
  appName: 'Anx',
  appLogo: 'https://www.gin-vue-admin.com/img/logo.png',
  showViteLogo: true,
  logs: [],
}

export const viteLogo = (env) => {
  if (config.showViteLogo) {
    const chalk = require('chalk')
    console.log(
      chalk.green(
        `> 欢迎使用anx 工业软件系统`
      )
    )
    console.log('\n')
  }
}

export default config
