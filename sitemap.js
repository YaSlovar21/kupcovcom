const dateNow = (new Date()).toString();

const {dataForSitemap} = require('./raschets'); 
const {tis} = require('./tis');
const {bpages} = require('./bpages');
const {rpages} = require('./rpages'); // примеры расчётов по средам

module.exports.paths = [
    {
      path: '/',
      lastmod: dateNow,
      priority: 1,
      changefreq: 'monthly'
    },
    {
      path: '/plastinchatye-teploobmenniki/',
      lastmod: dateNow,
      priority: 1,
      changefreq: 'monthly'
    },
    {
      path: '/plastinchatye-teploobmenniki/raschets/',
      lastmod: dateNow,
      priority: 1,
      changefreq: 'monthly'
    },
    {
      path: '/plastinchatye-teploobmenniki/catalog/',
      lastmod: dateNow,
      priority: 1,
      changefreq: 'monthly'
    },
    {
      path: '/raschet-i-podbor-teploobmennika/',
      lastmod: dateNow,
      priority: 1,
      changefreq: 'monthly'
    },
    {
      path: '/raschet-teplovogo-punkta/',
      lastmod: dateNow,
      priority: 1,
      changefreq: 'monthly'
    },
    {
      path: '/blochnye-teplovye-punkty/',
      lastmod: dateNow,
      priority: 1,
      changefreq: 'monthly'
    },
    {
      path: '/blochnye-teplovye-punkty/schemes/',
      lastmod: dateNow,
      priority: 1,
      changefreq: 'monthly'
    },
    {
      path: '/blochnye-teplovye-punkty/schemes/vvoda.html',
      lastmod: dateNow,
      priority: 1,
      changefreq: 'monthly'
    },
    {
      path: '/blochnye-teplovye-punkty/schemes/so-nezav.html',
      lastmod: dateNow,
      priority: 1,
      changefreq: 'monthly'
    },
    {
      path: '/blochnye-teplovye-punkty/schemes/so-zav.html',
      lastmod: dateNow,
      priority: 1,
      changefreq: 'monthly'
    },
    {
      path: '/blochnye-teplovye-punkty/schemes/gvs-odn.html',
      lastmod: dateNow,
      priority: 1,
      changefreq: 'monthly'
    },
    {
      path: '/blochnye-teplovye-punkty/schemes/gvs-two-step.html',
      lastmod: dateNow,
      priority: 1,
      changefreq: 'monthly'
    },
    {
      path: '/blochnye-teplovye-punkty/schemes/gvs-reserve.html',
      lastmod: dateNow,
      priority: 1,
      changefreq: 'monthly'
    },
    {
      path: '/blochnye-teplovye-punkty/proektirovshchikam/',
      lastmod: dateNow,
      priority: 1,
      changefreq: 'monthly'
    },
    {
      path: '/blochnye-teplovye-punkty/proektirovshchikam/poyasnitelnaya-zapiska-k-proektu-teplovogo-punkta.html',
      lastmod: dateNow,
      priority: 1,
      changefreq: 'monthly'
    },
    {
      path: '/blochnye-teplovye-punkty/proektirovshchikam/principialnaya-skhema-teplovogo-punkta.html',
      lastmod: dateNow,
      priority: 1,
      changefreq: 'monthly'
    },
    {
      path: '/blochnye-teplovye-punkty/proektirovshchikam/rasstanovka-blokov-teplovogo-punkta.html',
      lastmod: dateNow,
      priority: 1,
      changefreq: 'monthly'
    },
    {
      path: '/blochnye-teplovye-punkty/proektirovshchikam/specifikaciya-oborudovaniya-teplovogo-punkta.html',
      lastmod: dateNow,
      priority: 1,
      changefreq: 'monthly'
    },
    {
      path: '/blochnye-teplovye-punkty/proektirovshchikam/listy-podbora-teploobmennikov-i-nasosov.html',
      lastmod: dateNow,
      priority: 1,
      changefreq: 'monthly'
    },
    {
      path: '/about/',
      lastmod: dateNow,
      priority: 1,
      changefreq: 'monthly'
    },
    {
      path: '/info/',
      lastmod: dateNow,
      priority: 1,
      changefreq: 'monthly'
    },
    // 3 страницы доков
    {
      path: '/contacts.html',
      lastmod: dateNow,
      priority: 1,
      changefreq: 'monthly'
    },
    // ------------------------------файлы------------------------------
    {
      path: '/documents/katalog-blochnyh-teplovyh-punktov.pdf',
      lastmod: dateNow,
      priority: 0.6,
      changefreq: 'monthly'
      },
     {
      path: '/documents/list-podbora-teploobmennikov-i-nasosov.pdf',
      lastmod: dateNow,
      priority: 0.6,
      changefreq: 'monthly'
      },
     {
      path: '/documents/oprosnyy-list-dlya-btp-teplovogo-punkta.docx',
      lastmod: dateNow,
      priority: 0.6,
      changefreq: 'monthly'
      },
     {
      path: '/documents/oprosnyy-list-dlya-podbora-teploobmennika-basseyn.doc',
      lastmod: dateNow,
      priority: 0.6,
      changefreq: 'monthly'
      },
     {
      path: '/documents/oprosnyy-list-dlya-podbora-teploobmennika-moloko.doc',
      lastmod: dateNow,
      priority: 0.6,
      changefreq: 'monthly'
      },
     {
      path: '/documents/oprosnyy-list-dlya-podbora-teploobmennika-pasterizaciya-ohlazhdenie.doc',
      lastmod: dateNow,
      priority: 0.6,
      changefreq: 'monthly'
      },
     {
      path: '/documents/oprosnyy-list-dlya-podbora-teploobmennika-pivnoe-suslo.doc',
      lastmod: dateNow,
      priority: 0.6,
      changefreq: 'monthly'
      },
     {
      path: '/documents/oprosnyy-list-dlya-podbora-teploobmennika.doc',
      lastmod: dateNow,
      priority: 0.6,
      changefreq: 'monthly'
      },
     {
      path: '/documents/poyasnitelnaya-zapiska-k-proektu-teplovogo-punkta.pdf',
      lastmod: dateNow,
      priority: 0.6,
      changefreq: 'monthly'
      },
     {
      path: '/documents/primer-podbora-teplovogo-punkta.pdf',
      lastmod: dateNow,
      priority: 0.6,
      changefreq: 'monthly'
      },
     {
      path: '/documents/primer-principialnoy-skhemy-teplovogo-punkta.pdf',
      lastmod: dateNow,
      priority: 0.6,
      changefreq: 'monthly'
      },
     {
      path: '/documents/primer-rasstanovki-blokov-teplovogo-punkta.pdf',
      lastmod: dateNow,
      priority: 0.6,
      changefreq: 'monthly'
      },
     {
      path: '/documents/sp-510-teplovye-punkty-i-sistemy-vnutrennego-teplosnabzheniya.pdf',
      lastmod: dateNow,
      priority: 0.6,
      changefreq: 'monthly'
      },
     {
      path: '/documents/specifikaciya-oborudovaniya-teplovogo-punkta.pdf',
      lastmod: dateNow,
      priority: 0.6,
      changefreq: 'monthly'
      },
     {
      path: '/documents/termoblok-catalog.pdf',
      lastmod: dateNow,
      priority: 0.6,
      changefreq: 'monthly'
      },
].concat( dataForSitemap.map((item)=>{
  return {
    path: `/plastinchatye-teploobmenniki/raschets/${item}.html`,
    lastmod: dateNow,
    priority: 0.7,
    changefreq: 'monthly'
  }
})).concat( tis.map((item)=> {
  return {
    path: item.pagePath,
    lastmod: dateNow,
    priority: 0.6,
    changefreq: 'monthly',
  }
})).concat( bpages.map((item)=> {
  return {
    path: `/${item.fileName}`,
    lastmod: dateNow,
    priority: 0.7,
    changefreq: 'monthly'
  }
})).concat( rpages.map((item)=> {
  return {
    path: `/${item.linkPath}`,
    lastmod: dateNow,
    priority: 0.8,
    changefreq: 'monthly'
  }
}));