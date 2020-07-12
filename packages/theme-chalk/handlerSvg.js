/*
 * @Author: Mark
 * @Date: 2020-07-12 21:16:49
 * @LastEditors: Mark
 * @LastEditTime: 2020-07-13 01:54:22
 * @Description: 分组svg
 */

const path = require('path')
const fs = require('fs')

function getSvg() {
  const data = {
    outline: [],
    sharp: [],
    filled: [],
    logo: []
  }
  const dirs = fs.readdirSync(path.resolve(__dirname, './src/svg/'))
  // 写出json
  dirs
    .filter((item) => item !== '.DS_Store')
    .forEach((key) => {
      fs.readdirSync(path.resolve(__dirname, './src/svg/' + key)).forEach(
        (item) => {
          if (key === 'filled' && item.includes('logo')) {
            data.logo.push(item.replace(/\.svg/, ''))
          } else {
            data[key].push(item.replace(/\.svg/, ''))
          }
        }
      )
    })
  fs.writeFileSync(__dirname + '/icon.json', JSON.stringify(data))
  // 分组函数
  for (const item of dirs) {
    if (item.includes('outline') && !item.includes('.DS_Store')) {
      data.outline.push(item)
    } else if (item.includes('sharp') && !item.includes('.DS_Store')) {
      data.sharp.push(item)
    } else {
      if (!item.includes('.DS_Store') && item.includes('logo')) {
        data.logo.push(item)
      }
    }
  }

  for (const key of Object.keys(data)) {
    for (const item of data[key]) {
      fs.rename(
        `${__dirname}/src/svg/${item}`,
        `${__dirname}/src/svg/${key}/${item}`,
        (err) => {
          console.log(err)
        }
      )
    }
  }
}
getSvg()
