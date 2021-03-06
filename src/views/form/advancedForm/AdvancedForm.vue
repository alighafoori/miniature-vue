<template>
  <page-header-wrapper :content="$t('advancedform.header.content')">
    <a-card class="card" :title="$t('advancedform.card1.title')" :bordered="false">
      <repository-form ref="repository" :showSubmit="false" />
    </a-card>
    <a-card class="card" :title="$t('advancedform.card2.title')" :bordered="false">
      <task-form ref="task" :showSubmit="false" />
    </a-card>

    <!-- table -->
    <a-card>
      <a-table
        :columns="columnsi18n"
        :dataSource="datai18n"
        :pagination="false"
        :loading="memberLoading"
      >
        <template v-for="(col, i) in ['name', 'workId', 'department']" :slot="col" slot-scope="text, record">
          <a-input
            :key="col"
            v-if="record.editable"
            style="margin: -5px 0"
            :value="text"
            :placeholder="columnsi18n[i].title"
            @change="e => handleChange(e.target.value, record.key, col)"
          />
          <template v-else>{{ text }}</template>
        </template>
        <template slot="operation" slot-scope="text, record">
          <template v-if="record.editable">
            <span v-if="record.isNew">
              <a @click="saveRow(record)">{{ $t('advancedform.table.addto') }}</a>
              <a-divider type="vertical" />
              <a-popconfirm :title="$t('advancedform.table.popconfirm.title')" @confirm="remove(record.key)">
                <a>{{ $t('advancedform.table.popconfirm.content') }}</a>
              </a-popconfirm>
            </span>
            <span v-else>
              <a @click="saveRow(record)">{{ $t('advancedform.table.save') }}</a>
              <a-divider type="vertical" />
              <a @click="cancel(record.key)">{{ $t('advancedform.table.cancel') }}</a>
            </span>
          </template>
          <span v-else>
            <a @click="toggle(record.key)">{{ $t('advancedform.table.edit') }}</a>
            <a-divider type="vertical" />
            <a-popconfirm :title="$t('advancedform.table.popconfirm.title')" @confirm="remove(record.key)">
              <a>{{ $t('advancedform.table.popconfirm.content') }}</a>
            </a-popconfirm>
          </span>
        </template>
      </a-table>
      <a-button style="width: 100%; margin-top: 16px; margin-bottom: 8px" type="dashed" icon="plus" @click="newMember">{{ $t('advancedform.table.newrow') }}</a-button>
    </a-card>

    <!-- fixed footer toolbar -->
    <footer-tool-bar :is-mobile="isMobile" :collapsed="sideCollapsed">
      <span class="popover-wrapper">
        <a-popover :title="$t('advancedform.footer.popover.title')" overlayClassName="antd-pro-pages-forms-style-errorPopover" trigger="click" :getPopupContainer="trigger => trigger.parentNode">
          <template slot="content">
            <li v-for="item in errors" :key="item.key" @click="scrollToField(item.key)" class="antd-pro-pages-forms-style-errorListItem">
              <a-icon type="cross-circle-o" class="antd-pro-pages-forms-style-errorIcon" />
              <div class="">{{ item.message }}</div>
              <div class="antd-pro-pages-forms-style-errorField">{{ item.fieldLabel }}</div>
            </li>
          </template>
          <span class="antd-pro-pages-forms-style-errorIcon" v-if="errors.length > 0">
            <a-icon type="exclamation-circle" />{{ errors.length }}
          </span>
        </a-popover>
      </span>
      <a-button type="primary" @click="validate" :loading="loading">{{ $t('advancedform.footer.send') }}</a-button>
    </footer-tool-bar>
  </page-header-wrapper>
</template>

<script>
import RepositoryForm from './RepositoryForm'
import TaskForm from './TaskForm'
import FooterToolBar from '@/components/FooterToolbar'
import { baseMixin } from '@/store/app-mixin'
import { i18nRender } from '@/locales'

const fieldLabels = {
  name: `${i18nRender('advancedform.fieldLabels.name')}`,
  url: `${i18nRender('advancedform.fieldLabels.url')}`,
  owner: `${i18nRender('advancedform.fieldLabels.owner')}`,
  approver: `${i18nRender('advancedform.fieldLabels.approver')}`,
  dateRange: `${i18nRender('advancedform.fieldLabels.dateRange')}`,
  type: `${i18nRender('advancedform.fieldLabels.type')}`,
  name2: `${i18nRender('advancedform.fieldLabels.name2')}`,
  url2: `${i18nRender('advancedform.fieldLabels.url2')}`,
  owner2: `${i18nRender('advancedform.fieldLabels.owner2')}`,
  approver2: `${i18nRender('advancedform.fieldLabels.approver2')}`,
  dateRange2: `${i18nRender('advancedform.fieldLabels.dateRange')}`,
  type2: `${i18nRender('advancedform.fieldLabels.type2')}`
}

export default {
  name: 'AdvancedForm',
  mixins: [baseMixin],
  components: {
    FooterToolBar,
    RepositoryForm,
    TaskForm
  },
  data () {
    return {
      loading: false,
      memberLoading: false,
      // table
      columns: [
        {
          title: 'advancedform.table.columns.name',
          dataIndex: 'name',
          key: 'name',
          width: '20%',
          scopedSlots: { customRender: 'name' }
        },
        {
          title: 'advancedform.table.columns.workId',
          dataIndex: 'workId',
          key: 'workId',
          width: '20%',
          scopedSlots: { customRender: 'workId' }
        },
        {
          title: 'advancedform.table.columns.department',
          dataIndex: 'department',
          key: 'department',
          width: '40%',
          scopedSlots: { customRender: 'department' }
        },
        {
          title: 'advancedform.table.columns.action',
          key: 'action',
          scopedSlots: { customRender: 'operation' }
        }
      ],
      data: [
        {
          key: '1',
          name: 'advancedform.table.data1.name',
          workId: '001',
          editable: false,
          department: 'advancedform.table.data1.department'
        },
        {
          key: '2',
          name: 'advancedform.table.data2.name',
          workId: '002',
          editable: false,
          department: 'advancedform.table.data2.department'
        },
        {
          key: '3',
          name: 'advancedform.table.data3.name',
          workId: '003',
          editable: false,
          department: 'advancedform.table.data3.department'
        }
      ],

      errors: []
    }
  },
  computed: {
    datai18n () {
     return this.data.map(x => Object.assign({}, x, { name: i18nRender(x.name), department: i18nRender(x.department) }))
    },
    columnsi18n () {
      return this.columns.map(x => Object.assign({}, x, { title: i18nRender(x.title) }))
    }
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault()
    },
    newMember () {
      const length = this.data.length
      this.data.push({
        key: length === 0 ? '1' : (parseInt(this.data[length - 1].key) + 1).toString(),
        name: '',
        workId: '',
        department: '',
        editable: true,
        isNew: true
      })
    },
    remove (key) {
      const newData = this.data.filter(item => item.key !== key)
      this.data = newData
    },
    saveRow (record) {
      this.memberLoading = true
      const { key, name, workId, department } = record
      if (!name || !workId || !department) {
        this.memberLoading = false
        this.$message.error(`${i18nRender('advancedform.saverow.error')}`)
        return
      }
      // 模拟网络请求、卡顿 800ms
      new Promise((resolve) => {
        setTimeout(() => {
          resolve({ loop: false })
        }, 800)
      }).then(() => {
        const target = this.data.find(item => item.key === key)
        target.editable = false
        target.isNew = false
        this.memberLoading = false
      })
    },
    toggle (key) {
      const target = this.data.find(item => item.key === key)
      target._originalData = { ...target }
      target.editable = !target.editable
    },
    getRowByKey (key, newData) {
      const data = this.data
      return (newData || data).find(item => item.key === key)
    },
    cancel (key) {
      const target = this.data.find(item => item.key === key)
      Object.keys(target).forEach(key => { target[key] = target._originalData[key] })
      target._originalData = undefined
    },
    handleChange (value, key, column) {
      const newData = [...this.data]
      const target = newData.find(item => key === item.key)
      if (target) {
        target[column] = value
        this.data = newData
      }
    },

    // 最终全页面提交
    validate () {
      const { $refs: { repository, task }, $notification } = this
      const repositoryForm = new Promise((resolve, reject) => {
        repository.form.validateFields((err, values) => {
          if (err) {
            reject(err)
            return
          }
          resolve(values)
        })
      })
      const taskForm = new Promise((resolve, reject) => {
        task.form.validateFields((err, values) => {
          if (err) {
            reject(err)
            return
          }
          resolve(values)
        })
      })

      // clean this.errors
      this.errors = []
      Promise.all([repositoryForm, taskForm]).then(values => {
        $notification['error']({
          message: 'Received values of form:',
          description: JSON.stringify(values)
        })
      }).catch(() => {
        const errors = Object.assign({}, repository.form.getFieldsError(), task.form.getFieldsError())
        const tmp = { ...errors }
        this.errorList(tmp)
      })
    },
    errorList (errors) {
      if (!errors || errors.length === 0) {
        return
      }
      this.errors = Object.keys(errors)
        .filter(key => errors[key])
        .map(key => ({
          key: key,
          message: errors[key][0],
          fieldLabel: fieldLabels[key]
        }))
    },
    scrollToField (fieldKey) {
      const labelNode = document.querySelector(`label[for="${fieldKey}"]`)
      if (labelNode) {
        labelNode.scrollIntoView(true)
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .card{
    margin-bottom: 24px;
  }
  .popover-wrapper {
    /deep/ .antd-pro-pages-forms-style-errorPopover .ant-popover-inner-content {
      min-width: 256px;
      max-height: 290px;
      padding: 0;
      overflow: auto;
    }
  }
  .antd-pro-pages-forms-style-errorIcon {
    user-select: none;
    color: #f5222d;
    cursor: pointer;
  }
  [dir=rtl] .antd-pro-pages-forms-style-errorIcon{
      margin-left: 24px;
      i {
          margin-left: 4px;
    }
    }
    [dir=ltr] .antd-pro-pages-forms-style-errorIcon{
      margin-right: 24px;
      i {
          margin-right: 4px;
    }
    }
  .antd-pro-pages-forms-style-errorListItem {
    padding: 8px 16px;
    list-style: none;
    border-bottom: 1px solid #e8e8e8;
    cursor: pointer;
    transition: all .3s;

    &:hover {
      background: #e6f7ff;
    }
    .antd-pro-pages-forms-style-errorIcon {
      float: left;
      margin-top: 4px;
      margin-right: 12px;
      padding-bottom: 22px;
      color: #f5222d;
    }
    .antd-pro-pages-forms-style-errorField {
      margin-top: 2px;
      color: rgba(0,0,0,.45);
      font-size: 12px;
    }
  }
</style>
