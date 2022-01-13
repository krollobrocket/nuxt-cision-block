import path from 'path'

export default function (this: any, moduleOptions: any) {
  const defaultOptions = {
    showImage: false,
    mustHaveImage: false,
    showIntro: true,
    showBody: true,
    articleShowImage: false,
    articleShowIntro: true,
    articleShowBody: true,
    articleShowFiles: true,
    // showFilters: false,
    // filterRegulatoryText: '',
    // filterNonRegulatoryText: '',
    // filterAllText: '',
    // imageStyle: 'DownloadUrl',
    itemType: ['KMK', 'RDV', 'PRM', 'RPT', 'INB', 'NBR'],
    startDate: undefined,
    endDate: undefined,
    useCache: true,
    cacheMax: 60,
    basePath: 'news',
    itemCount: 50,
    itemsPerPage: 0,
    language: undefined,
    categories: undefined,
    keywords: undefined,
    markItem: false,
    regulatoryText: 'Regulatory',
    nonRegulatoryText: 'Non-regulatory',
    displayMode: 1,
    id: undefined,
  }
  const options = Object.assign(
    {},
    defaultOptions,
    this.options.cision,
    moduleOptions
  )
  this.options.router = {
    ...this.options.router,
    extendRoutes(routes: any[], resolve: any) {
      routes.push({
        name: 'news',
        path: `/${options.basePath}/:id`,
        component: resolve(path.resolve(__dirname, 'pages/Article.vue')),
      })
    },
  }
  // How to use this for routes above?
  this.addTemplate({
    fileName: 'cision-block/pages/Article.vue',
    src: path.resolve(__dirname, 'pages/Article.vue'),
  })
  this.addTemplate({
    fileName: 'cision-block/Feed.js',
    src: path.resolve(__dirname, 'Feed.js'),
  })
  this.addTemplate({
    fileName: 'cision-block/FeedItem.js',
    src: path.resolve(__dirname, 'FeedItem.js'),
  })
  this.addTemplate({
    fileName: 'cision-block/PressFeed.vue',
    src: path.resolve(__dirname, 'PressFeed.vue'),
  })
  this.addTemplate({
    fileName: 'cision-block/PressReleaseCard.vue',
    src: path.resolve(__dirname, 'PressReleaseCard.vue'),
  })
  // this.addTemplate({
  //   fileName: 'cision-block/PressFilter.vue',
  //   src: path.resolve(__dirname, 'PressFilter.vue'),
  // })
  // this.addTemplate({
  //   fileName: 'cision-block/Client.js',
  //   src: path.resolve(__dirname, 'Client.js'),
  // })
  this.addTemplate({
    fileName: 'cision-block/CisionBlock.js',
    src: path.resolve(__dirname, 'CisionBlock.js'),
  })
  this.addPlugin({
    src: path.resolve(__dirname, 'Plugin.js'),
    fileName: 'cision-block/Plugin.js',
    ssr: true,
    options,
  })
}
module.exports.meta = require('../package.json')
