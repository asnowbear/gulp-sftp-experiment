module.exports = {
  connect: {
    region: 'oss-cn-beijing',
    accessKeyId: '***************',
    accessKeySecret: '***********',
    bucket: 'bucket名称'
  },
  setting: {
    dir: 'dev/tag/',// 发布到 oss 服务器上的地址
    noClean: false,
    force: true,
    quiet: true
  },
  controls: {
    headers: {
      'Cache-Control': 'max-age=' + 60 * 60 * 24 * 365 * 10
    }
  }
}