<template>
  <a-card :bordered="false">
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="48">
          <a-col :md="8" :sm="24">
            <a-form-item :label="$t('tableedit.Rule number')">
              <a-input placeholder=""/>
            </a-form-item>
          </a-col>
          <a-col :md="8" :sm="24">
            <a-form-item :label="$t('tableedit.status of use')">
              <a-select :placeholder="$t('tableedit.please choose')" default-value="0">
                <a-select-option value="0">{{ $t('tableedit.All') }}</a-select-option>
                <a-select-option value="1">{{ $t('tableedit.shut down') }}</a-select-option>
                <a-select-option value="2">{{ $t('tableedit.Running') }}</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <template v-if="advanced">
            <a-col :md="8" :sm="24">
              <a-form-item :label="$t('tableedit.Calls')">
                <a-input-number style="width: 100%"/>
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="24">
              <a-form-item :label="$t('tableedit.Updated')">
                <a-date-picker style="width: 100%" :placeholder="$t('tableedit.update date')"/>
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="24">
              <a-form-item :label="$t('tableedit.status of use')">
                <a-select :placeholder="$t('tableedit.please choose')" default-value="0">
                  <a-select-option value="0">{{ $t('tableedit.All') }}</a-select-option>
                  <a-select-option value="1">{{ $t('tableedit.shut down') }}</a-select-option>
                  <a-select-option value="2">{{ $t('tableedit.Running') }}</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="24">
              <a-form-item :label="$t('tableedit.status of use')">
                <a-select :placeholder="$t('tableedit.please choose')" default-value="0">
                  <a-select-option value="0">{{ $t('tableedit.All') }}</a-select-option>
                  <a-select-option value="1">{{ $t('tableedit.shut down') }}</a-select-option>
                  <a-select-option value="2">{{ $t('tableedit.Running') }}</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
          </template>
          <a-col :md="!advanced && 8 || 24" :sm="24">
            <span class="table-page-search-submitButtons" :style="advanced && { float: 'right', overflow: 'hidden' } || {} ">
              <a-button type="primary">{{ $t('tableedit.Inquire') }}</a-button>
              <a-button style="margin-left: 8px">{{ $t('tableedit.Reset') }}</a-button>
              <a @click="toggleAdvanced" style="margin-left: 8px">
                {{ advanced ? $t('tableedit.Collapse') : $t('tableedit.Unfold') }}
                <a-icon :type="advanced ? 'up' : 'down'"/>
              </a>
            </span>
          </a-col>
        </a-row>
      </a-form>
    </div>

    <div class="table-operator">
      <a-button type="primary" icon="plus">{{ $t('tableedit.New') }}</a-button>
      <a-dropdown v-if="selectedRowKeys.length > 0">
        <a-menu slot="overlay">
          <a-menu-item key="1"><a-icon type="delete" />{{ $t('tableedit.delete') }}</a-menu-item>
          <!-- lock | unlock -->
          <a-menu-item key="2"><a-icon type="lock" />{{ $t('tableedit.locking') }}</a-menu-item>
        </a-menu>
        <a-button style="margin-left: 8px">
          {{ $t('tableedit.Bulk operations') }} <a-icon type="down" />
        </a-button>
      </a-dropdown>
    </div>
    <!-- v-if="col.scopedSlots" -->
    <s-table
      ref="table"
      size="default"
      :columns="columns"
      :data="loadData"
      :alert="{ show: true, clear: true }"
      :rowSelection="{ selectedRowKeys: this.selectedRowKeys, onChange: this.onSelectChange }"
    >
      <template v-for="(col, index) in columns" :slot="col.dataIndex" slot-scope="text, record">
        <div :key="index">
          <a-input
            v-if="record.editable"
            style="margin: -5px 0"
            :value="text"
            @change="e => handleChange(e.target.value, record.key, col, record)"
          />
          <template v-else>{{ text }}</template>
        </div>
      </template>
      <template slot="action" slot-scope="text, record">
        <div class="editable-row-operations">
          <span v-if="record.editable">
            <a @click="() => save(record)">{{ $t('tableedit.save') }}</a>
            <a-divider type="vertical" />
            <a-popconfirm :title="$t('tableedit.give up')" @confirm="() => cancel(record)">
              <a>{{ $t('tableedit.cancel') }}</a>
            </a-popconfirm>
          </span>
          <span v-else>
            <a class="edit" @click="() => edit(record)">{{ $t('tableedit.modify') }}</a>
            <a-divider type="vertical" />
            <a class="delete" @click="() => del(record)">{{ $t('tableedit.delete') }}</a>
          </span>
        </div>
      </template>
    </s-table>

  </a-card>
</template>

<script>
import { STable } from '@/components'
import { currentLang, i18nRender } from '@/locales'

export default {
  name: 'TableList',
  components: {
    STable
  },
  data () {
    return {
      // Advanced Search Expand / Close
      advanced: false,
      // Query parameters
      queryParam: {},
      // The load data method must be a Promise object
      loadData: parameter => {
        const url = `/${currentLang.isoCode}/service`
        return this.$http.get(url, {
          params: Object.assign(parameter, this.queryParam)
        }).then(res => {
          return res.result
        })
      },

      selectedRowKeys: [],
      selectedRows: []
    }
  },
  methods: {

    handleChange (value, key, column, record) {
      console.log(value, key, column)
      record[column.dataIndex] = value
    },
    edit (row) {
      row.editable = true
      // row = Object.assign({}, row)
    },
    // eslint-disable-next-line
    del (row) {
      this.$confirm({
        title: i18nRender('tableedit.delconfirm.title'),
        content: `${i18nRender('tableedit.delconfirm.content1')} ${row.no} ${i18nRender('tableedit.delconfirm.content2')}`,
        okText: i18nRender('tableedit.delconfirm.ok'),
        okType: 'danger',
        cancelText: i18nRender('tableedit.delconfirm.cancel'),
        onOk () {
          console.log('OK')
          // Call the delete interface here
          return new Promise((resolve, reject) => {
            setTimeout(Math.random() > 0.5 ? resolve : reject, 1000)
          }).catch(() => console.log('Oops errors!'))
        },
        onCancel () {
          console.log('Cancel')
        }
      })
    },
    save (row) {
      row.editable = false
    },
    cancel (row) {
      row.editable = false
    },

    onSelectChange (selectedRowKeys, selectedRows) {
      this.selectedRowKeys = selectedRowKeys
      this.selectedRows = selectedRows
    },
    toggleAdvanced () {
      this.advanced = !this.advanced
    }
  },
  watch: {
    /*
      'selectedRows': function (selectedRows) {
        this.needTotalList = this.needTotalList.map(item => {
          return {
            ...item,
            total: selectedRows.reduce( (sum, val) => {
              return sum + val[item.dataIndex]
            }, 0)
          }
        })
      }
      */
  },
  computed: {
    columns () {
      return [
        {
          title: i18nRender('tableedit.Rule number'),
          dataIndex: 'no',
          width: 90
        },
        {
          title: i18nRender('tableedit.description'),
          dataIndex: 'description',
          scopedSlots: { customRender: 'description' }
        },
        {
          title: i18nRender('tableedit.Service calls'),
          dataIndex: 'callNo',
          width: '150px',
          sorter: true,
          needTotal: true,
          scopedSlots: { customRender: 'callNo' }
          // customRender: (text) => text + ' 次'
        },
        {
          title: i18nRender('tableedit.status'),
          dataIndex: 'status',
          width: '100px',
          needTotal: true,
          scopedSlots: { customRender: 'status' }
        },
        {
          title: i18nRender('tableedit.Update time'),
          dataIndex: 'updatedAt',
          width: '200px',
          sorter: true,
          scopedSlots: { customRender: 'updatedAt' }
        },
        {
          table: i18nRender('tableedit.operating'),
          dataIndex: 'action',
          width: '120px',
          scopedSlots: { customRender: 'action' }
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
  .search {
    margin-bottom: 54px;
  }

  .fold {
    width: calc(100% - 216px);
    display: inline-block
  }

  .operator {
    margin-bottom: 18px;
  }

  @media screen and (max-width: 900px) {
    .fold {
      width: 100%;
    }
  }
</style>
