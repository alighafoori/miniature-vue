<template>
  <a-card :bordered="false">
    <a-row :gutter="8">
      <a-col :span="5">
        <s-tree
          :dataSource="orgTree"
          :openKeys.sync="openKeys"
          :search="true"
          @click="handleClick"
          @add="handleAdd"
          @titleClick="handleTitleClick"></s-tree>
      </a-col>
      <a-col :span="19">
        <s-table
          ref="table"
          size="default"
          :columns="columns"
          :data="loadData"
          :alert="false"
          :rowSelection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
        >
          <span slot="action" slot-scope="text, record">
            <template v-if="$auth('table.update')">
              <a @click="handleEdit(record)">{{ $t('treelist.edit') }}</a>
              <a-divider type="vertical" />
            </template>
            <a-dropdown>
              <a class="ant-dropdown-link">
                {{ $t('treelist.More ') }} <a-icon type="down" />
              </a>
              <a-menu slot="overlay">
                <a-menu-item>
                  <a href="javascript:;">{{ $t('treelist.Details') }}</a>
                </a-menu-item>
                <a-menu-item v-if="$auth('table.disable')">
                  <a href="javascript:;">{{ $t('treelist.Disable') }}</a>
                </a-menu-item>
                <a-menu-item v-if="$auth('table.delete')">
                  <a href="javascript:;">{{ $t('treelist.delete') }}</a>
                </a-menu-item>
              </a-menu>
            </a-dropdown>
          </span>
        </s-table>
      </a-col>
    </a-row>

    <org-modal ref="modal" @ok="handleSaveOk" @close="handleSaveClose" />
  </a-card>
</template>

<script>
import STree from '@/components/Tree/Tree'
import { STable } from '@/components'
import OrgModal from './modules/OrgModal'
import { getOrgTree, getServiceList } from '@/api/manage'
import { i18nRender } from '@/locales'

export default {
  name: 'TreeList',
  components: {
    STable,
    STree,
    OrgModal
  },
  data () {
    return {
      openKeys: ['key-01'],

      queryParam: {},
      // The load data method must be a Promise object
      loadData: parameter => {
        return getServiceList(Object.assign(parameter, this.queryParam))
          .then(res => {
            return res.result
          })
      },
      orgTree: [],
      selectedRowKeys: [],
      selectedRows: []
    }
  },
  created () {
    getOrgTree().then(res => {
      this.orgTree = res.result
    })
    this.$store.watch(() => this.$store.getters.langObj, () => {
      getOrgTree().then(res => {
      this.orgTree = res.result
    })
    })
  },
  methods: {
    handleClick (e) {
      console.log('handleClick', e)
      this.queryParam = {
        key: e.key
      }
      this.$refs.table.refresh(true)
    },
    handleAdd (item) {
      console.log('add button, item', item)
      this.$message.info(`${i18nRender('treelist.add.message')} ${item.key} - ${item.title} `)
      this.$refs.modal.add(item.key)
    },
    handleTitleClick (item) {
      console.log('handleTitleClick', item)
    },
    titleClick (e) {
      console.log('titleClick', e)
    },
    handleSaveOk () {

    },
    handleSaveClose () {

    },

    onSelectChange (selectedRowKeys, selectedRows) {
      this.selectedRowKeys = selectedRowKeys
      this.selectedRows = selectedRows
    }
  },
  computed: {
      columns () {
        return [
        {
          title: '#',
          dataIndex: 'no'
        },
        {
          title: i18nRender('treelist.column.Member name'),
          dataIndex: 'description'
        },
        {
          title: i18nRender('treelist.column.Logins'),
          dataIndex: 'callNo',
          sorter: true,
          needTotal: true,
          customRender: (text) => text + i18nRender('treelist.customrender')
        },
        {
          title: i18nRender('treelist.column.status'),
          dataIndex: 'status',
          needTotal: true
        },
        {
          title: i18nRender('treelist.column.Update time'),
          dataIndex: 'updatedAt',
          sorter: true
        },
        {
          title: i18nRender('treelist.column.operating'),
          dataIndex: 'action',
          width: '150px',
          scopedSlots: { customRender: 'action' }
        }
      ]
    }
  }
}
</script>

<style lang="less">
  .custom-tree {

    /deep/ .ant-menu-item-group-title {
      position: relative;
      &:hover {
        .btn {
          display: block;
        }
      }
    }

    /deep/ .ant-menu-item {
      &:hover {
        .btn {
          display: block;
        }
      }
    }

    /deep/ .btn {
      display: none;
      position: absolute;
      top: 0;
      right: 10px;
      width: 20px;
      height: 40px;
      line-height: 40px;
      z-index: 1050;

      &:hover {
        transform: scale(1.2);
        transition: 0.5s all;
      }
    }
  }
</style>
