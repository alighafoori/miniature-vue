<template>
  <div>
    <a-row :gutter="24">
      <a-col :sm="24" :md="12" :xl="6" :style="{ marginBottom: '24px' }">
        <chart-card :loading="loading" :title="$t('dashboard.analysis.totalsale.title')" :total="126560 | formatCurrency">
          <a-tooltip :title="$t('dashboard.analysis.totalsale.tooltip.title')" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div>
            <trend flag="up">
              <span slot="term">{{ $t('dashboard.analysis.totalsale.yoy.first') }}</span>
              12%
            </trend>
            <trend flag="down">
              <span slot="term">{{ $t('dashboard.analysis.totalsale.yoy.second') }}</span>
              11%
            </trend>
          </div>
          <template slot="footer">{{ $t('dashboard.analysis.totalsale.avragedaily') }} <span>{{ 234.56 | formatCurrency }} </span></template>
        </chart-card>
      </a-col>
      <a-col :sm="24" :md="12" :xl="6" :style="{ marginBottom: '24px' }">
        <chart-card :loading="loading" :title="$t('dashboard.analysis.views.title')" :total="8846 | NumberFormat">
          <a-tooltip :title="$t('dashboard.analysis.views.tooltip.title')" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div>
            <mini-area />
          </div>
          <template slot="footer">{{ $t('dashboard.analysis.views.footer') }}<span> {{ '1234' | NumberFormat }}</span></template>
        </chart-card>
      </a-col>
      <a-col :sm="24" :md="12" :xl="6" :style="{ marginBottom: '24px' }">
        <chart-card :loading="loading" :title="$t('dashboard.analysis.payments.title')" :total="6560 | NumberFormat">
          <a-tooltip :title="$t('dashboard.analysis.payments.tooltip.title')" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div>
            <mini-bar />
          </div>
          <template slot="footer">{{ $t('dashboard.analysis.payments.footer') }} <span>60%</span></template>
        </chart-card>
      </a-col>
      <a-col :sm="24" :md="12" :xl="6" :style="{ marginBottom: '24px' }">
        <chart-card :loading="loading" :title="$t('dashboard.analysis.effectiveness.title')" total="78%">
          <a-tooltip :title="$t('dashboard.analysis.effectiveness.tooltip.title')" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div>
            <mini-progress color="rgb(19, 194, 194)" :target="80" :percentage="78" height="8px" />
          </div>
          <template slot="footer">
            <trend flag="down" style="margin-right: 16px;">
              <span slot="term">{{ $t('dashboard.analysis.effectiveness.sameweek') }}</span>
              12%
            </trend>
            <trend flag="up">
              <span slot="term">{{ $t('dashboard.analysis.effectiveness.mom') }}</span>
              80%
            </trend>
          </template>
        </chart-card>
      </a-col>
    </a-row>

    <a-card :loading="loading" :bordered="false" :body-style="{padding: '0'}">
      <div class="salesCard">
        <a-tabs default-active-key="1" size="large" :tab-bar-style="tabStyle" tabPosition="top">
          <div class="extra-wrapper" slot="tabBarExtraContent">
            <div class="extra-item">
              <a>{{ $t('dashboard.analysis.date.today') }}</a>
              <a>{{ $t('dashboard.analysis.date.thisweek') }}</a>
              <a>{{ $t('dashboard.analysis.date.thismonth') }}</a>
              <a>{{ $t('dashboard.analysis.date.thisyear') }}</a>
            </div>
            <a-range-picker />
          </div>
          <a-tab-pane loading="true" :tab="$t('dashboard.analysis.sales.title')" key="1">
            <a-row>
              <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24">
                <bar :data="barData" :title="$t('dashboard.analysis.sales.bar.title')" style="direction:ltr" />
              </a-col>
              <a-col :xl="8" :lg="12" :md="12" :sm="24" :xs="24">
                <rank-list :title="$t('dashboard.analysis.sales.rank.title')" :list="rankList"/>
              </a-col>
            </a-row>
          </a-tab-pane>
          <a-tab-pane :tab="$t('dashboard.analysis.views.title')" key="2">
            <a-row>
              <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24">
                <bar :data="barData2" :title="$t('dashboard.analysis.sales.ternd')" />
              </a-col>
              <a-col :xl="8" :lg="12" :md="12" :sm="24" :xs="24">
                <rank-list :title="$t('dashboard.analysis.sales.ranking')" :list="rankList"/>
              </a-col>
            </a-row>
          </a-tab-pane>
        </a-tabs>
      </div>
    </a-card>

    <div class="antd-pro-pages-dashboard-analysis-twoColLayout" :class="!isMobile && 'desktop'">
      <a-row :gutter="24" type="flex" :style="{ marginTop: '24px' }">
        <a-col :xl="12" :lg="24" :md="24" :sm="24" :xs="24">
          <a-card :loading="loading" :bordered="false" :title="$t('dashboard.analysis.search.title')" :style="{ height: '100%' }">
            <a-dropdown :trigger="['click']" placement="bottomLeft" slot="extra">
              <a class="ant-dropdown-link" href="#">
                <a-icon type="ellipsis" />
              </a>
              <a-menu slot="overlay">
                <a-menu-item>
                  <a href="javascript:;">{{ $t('dashboard.analysis.contextmenu.menu1') }}</a>
                </a-menu-item>
                <a-menu-item>
                  <a href="javascript:;">{{ $t('dashboard.analysis.contextmenu.menu2') }}</a>
                </a-menu-item>
              </a-menu>
            </a-dropdown>
            <a-row :gutter="68">
              <a-col :xs="24" :sm="12" :style="{ marginBottom: ' 24px'}">
                <number-info :total="12321" :sub-total="17.1">
                  <span slot="subtitle">
                    <span>{{ $t('dashboard.analysis.search.users.title') }}</span>
                    <a-tooltip :title="$t('dashboard.analysis.search.users.tooltip.title')" slot="action">
                      <a-icon type="info-circle-o" :style="{ marginLeft: '8px' }" />
                    </a-tooltip>
                  </span>
                </number-info>
                <!-- miniChart -->
                <div>
                  <mini-smooth-area :style="{ height: '45px' }" :dataSource="searchUserData()" :scale="searchUserScale" />
                </div>
              </a-col>
              <a-col :xs="24" :sm="12" :style="{ marginBottom: ' 24px'}">
                <number-info :total="2.7" :sub-total="26.2" status="down">
                  <span slot="subtitle">
                    <span>{{ $t('dashboard.analysis.search.capita.title') }}</span>
                    <a-tooltip :title="$t('dashboard.analysis.search.capita.tooltip.title')" slot="action">
                      <a-icon type="info-circle-o" :style="{ marginLeft: '8px' }" />
                    </a-tooltip>
                  </span>
                </number-info>
                <!-- miniChart -->
                <div>
                  <mini-smooth-area :style="{ height: '45px' }" :dataSource="searchUserData()" :scale="searchUserScale" />
                </div>
              </a-col>
            </a-row>
            <div class="ant-table-wrapper">
              <a-table
                row-key="index"
                size="small"
                :columns="searchTableColumns"
                :dataSource="searchData"
                :pagination="{ pageSize: 5 }"
              >
                <span slot="range" slot-scope="text, record">
                  <trend :flag="record.status === 0 ? 'up' : 'down'">
                    {{ text }}%
                  </trend>
                </span>
              </a-table>
            </div>
          </a-card>
        </a-col>
        <a-col :xl="12" :lg="24" :md="24" :sm="24" :xs="24">
          <a-card class="antd-pro-pages-dashboard-analysis-salesCard" :loading="loading" :bordered="false" :title="$t('dashboard.analysis.salescat.title')" :style="{ height: '100%' }">
            <div slot="extra" style="height: inherit;">
              <!-- style="bottom: 12px;display: inline-block;" -->
              <span class="dashboard-analysis-iconGroup">
                <a-dropdown :trigger="['click']" placement="bottomLeft">
                  <a-icon type="ellipsis" class="ant-dropdown-link" />
                  <a-menu slot="overlay">
                    <a-menu-item>
                      <a href="javascript:;">{{ $t('dashboard.analysis.contextmenu.menu1') }}</a>
                    </a-menu-item>
                    <a-menu-item>
                      <a href="javascript:;">{{ $t('dashboard.analysis.contextmenu.menu2') }}</a>
                    </a-menu-item>
                  </a-menu>
                </a-dropdown>
              </span>
              <div class="analysis-salesTypeRadio">
                <a-radio-group defaultValue="a">
                  <a-radio-button value="a">{{ $t('dashboard.analysis.salescat.allchannel') }}</a-radio-button>
                  <a-radio-button value="b">{{ $t('dashboard.analysis.salescat.online') }}</a-radio-button>
                  <a-radio-button value="c">{{ $t('dashboard.analysis.salescat.store') }}</a-radio-button>
                </a-radio-group>
              </div>

            </div>
            <h4>{{ $t('dashboard.analysis.salescat.h4') }}</h4>
            <div>
              <!-- style="width: calc(100% - 240px);" -->
              <div>
                <v-chart :force-fit="true" :height="405" :data="pieData" :scale="pieScale" :style="{ direction: 'ltr' }">
                  <v-tooltip :showTitle="false" dataKey="item*percent" />
                  <v-axis />
                  <!-- position="right" :offsetX="-140" -->
                  <v-legend dataKey="item"/>
                  <v-pie position="percent" color="item" :vStyle="pieStyle" />
                  <v-coord type="theta" :radius="0.75" :innerRadius="0.6" />
                </v-chart>
              </div>

            </div>
          </a-card>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import { i18nRender, currentLang } from '../../locales'
import {
  ChartCard,
  MiniArea,
  MiniBar,
  MiniProgress,
  RankList,
  Bar,
  Trend,
  NumberInfo,
  MiniSmoothArea
} from '@/components'
import { baseMixin } from '@/store/app-mixin'

const barData = []
const barData2 = []

for (let i = 0; i < 12; i += 1) {
  barData.push({
    x: `${i + 1} `,
    y: Math.floor(Math.random() * 1000) + 200
  })
  barData2.push({
    x: `${i + 1} `,
    y: Math.floor(Math.random() * 1000) + 200
  })
}
// '白鹭岛 ' + (i + 1) + ' 号店',
const rankList = []
for (let i = 0; i < 7; i++) {
  rankList.push({
    name: (i + 1).toString(),
    total: 1234.56 - i * 100
  })
}
// .format('YYYY-MM-DD')
const searchUserData = []
for (let i = 0; i < 7; i++) {
  searchUserData.push({
    x: moment().add(i, 'days').toDate(),
    y: Math.ceil(Math.random() * 10)
  })
}
const searchUserScale = [
  {
    dataKey: 'x',
    alias: 'dashboard.searchUserScale.alias1'
  },
  {
    dataKey: 'y',
    alias: 'dashboard.searchUserScale.alias2',
    min: 0,
    max: 10
  }]

const searchTableColumns = [
  {
    dataIndex: 'index',
    title: 'dashboard.searchTableColumns.index',
    width: 90
  },
  {
    dataIndex: 'keyword',
    title: 'dashboard.searchTableColumns.keyword'
  },
  {
    dataIndex: 'count',
    title: 'dashboard.searchTableColumns.count'
  },
  {
    dataIndex: 'range',
    title: 'dashboard.searchTableColumns.range',
    align: 'right',
    sorter: (a, b) => a.range - b.range,
    scopedSlots: { customRender: 'range' }
  }
]
const searchData = []
for (let i = 0; i < 50; i += 1) {
  searchData.push({
    index: i + 1,
    keyword: '',
    count: Math.floor(Math.random() * 1000),
    range: Math.floor(Math.random() * 100),
    status: Math.floor((Math.random() * 10) % 2)
  })
}

const DataSet = require('@antv/data-set')

const sourceData = [
  { item: 'dashboard.sourceData.item1', count: 32.2 },
  { item: 'dashboard.sourceData.item2', count: 21 },
  { item: 'dashboard.sourceData.item3', count: 17 },
  { item: 'dashboard.sourceData.item4', count: 13 },
  { item: 'dashboard.sourceData.item5', count: 9 },
  { item: 'dashboard.sourceData.item6', count: 7.8 }
]

const pieScale = [{
  dataKey: 'percent',
  min: 0,
  formatter: '.0%'
}]

export default {
  name: 'Analysis',
  mixins: [baseMixin],
  components: {
    ChartCard,
    MiniArea,
    MiniBar,
    MiniProgress,
    RankList,
    Bar,
    Trend,
    NumberInfo,
    MiniSmoothArea
  },
  data () {
    return {
      loading: true,
      //
      pieScale,
      pieStyle: {
        stroke: '#fff',
        lineWidth: 1
      }
    }
  },
  created () {
    setTimeout(() => {
      this.loading = !this.loading
    }, 1000)
  },
  computed: {
    searchData () {
      return searchData.map(x => Object.assign({}, x, { keyword: `${i18nRender('dashboard.searchData')}-${x.index}` }))
    },
    searchTableColumns () {
      return searchTableColumns.map(x => Object.assign({}, x, { title: `${i18nRender(x.title)}` }))
    },
    barData () {
      return barData.map(obj => Object.assign({}, obj, { x: obj.x + i18nRender('dashboard.data.month') }))
    },
    barData2 () {
      return barData2.map(obj => Object.assign({}, obj, { x: obj.x + i18nRender('dashboard.data.month') }))
    },
    rankList () {
      return rankList.map(x => Object.assign({}, x, { name: `${i18nRender('dashboard.rankList.part1')} ${x.name} ${i18nRender('dashboard.rankList.part2')}` }))
    },
    searchUserScale () {
      return searchUserScale.map(x => Object.assign({}, x, { alias: i18nRender(x.alias) }))
    },
    sourceData () {
      return sourceData.map(x => Object.assign({}, x, { item: `${i18nRender(x.item)}` }))
    },
    pieData () {
      const dv = new DataSet.View().source(this.sourceData)
      dv.transform({
        type: 'percent',
        field: 'count',
        dimension: 'item',
        as: 'percent'
      })
      return dv.rows
    },
    tabStyle () {
      if (currentLang.isRtl) {
        return { marginBottom: '24px', paddingRight: '16px' }
      } else {
        return { marginBottom: '24px', paddingLeft: '16px' }
      }
    }
  },
  methods: {
    searchUserData () {
      console.log('wtf')
      return searchUserData.map(obj => Object.assign({}, obj, { x: currentLang.dateFormatter ? currentLang.dateFormatter(obj.x) : moment(obj.x).format('YYYY-MM-DD') }))
    }
  }
}
</script>

<style lang="less" scoped>
  .extra-wrapper {
    line-height: 55px;
    padding-right: 24px;

    .extra-item {
      display: inline-block;
      margin-right: 24px;

      a {
        margin-left: 24px;
      }
    }
  }

  .antd-pro-pages-dashboard-analysis-twoColLayout {
    position: relative;
    display: flex;
    display: block;
    flex-flow: row wrap;
  }

  .antd-pro-pages-dashboard-analysis-salesCard {
    height: calc(100% - 24px);
    /deep/ .ant-card-head {
      position: relative;
    }
  }

  .dashboard-analysis-iconGroup {
    i {
      margin-left: 16px;
      color: rgba(0,0,0,.45);
      cursor: pointer;
      transition: color .32s;
      color: black;
    }
  }
  .analysis-salesTypeRadio {
    position: absolute;
    right: 54px;
    bottom: 12px;
  }
  [dir='rtl']{
    .analysis-salesTypeRadio {
     left: 54px;
    }
  }
</style>
