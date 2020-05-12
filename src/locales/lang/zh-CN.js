import antd from 'ant-design-vue/es/locale-provider/zh_CN'
import momentCN from 'moment/locale/zh-cn'

const components = {
  antLocale: antd,
  momentName: 'zh-cn',
  momentLocale: momentCN,
  isRtl: false,
  name: 'zh-CN'
}

const locale = {
  'message': '-',
  'menu.home': '主页',
  'menu.dashboard': '仪表盘',
  'menu.dashboard.analysis': '分析页',
  'menu.dashboard.monitor': '监控页',
  'menu.dashboard.workplace': '工作台',
  'menu.forms': '表单页',
  'menu.forms.base': '基础表单',
  'menu.forms.stepform': '分步表单',
  'menu.forms.advanceform': '高级表单',
  'menu.lists': '列表页',
  'menu.lists.tablelist': '查询表格',
  'menu.lists.basiclist': '标准列表',
  'menu.lists.cardlist': '卡片列表',
  'menu.lists.searchlist': '搜索列表',
  'menu.lists.searchlist.articles': '搜索列表（文章）',
  'menu.lists.searchlist.projects': '搜索列表（项目）',
  'menu.lists.searchlist.application': '搜索列表（应用） ',
  'menu.profile': '详情页',
  'menu.profile.basic': '基础详情页',
  'menu.profile.advanced': '高级详情页',
  'menu.result': '结果页',
  'menu.result.success': '成功',
  'menu.result.fail': '失败',
  'menu.exceptions': '异常页',
  'menu.exceptions.403': '403',
  'menu.exceptions.404': '404',
  'menu.exceptions.500': '500',
  'menu.account': '个人页',
  'menu.account.center': '个人中心',
  'menu.account.settings': '个人设置',
  'menu.account.settings.base': '基本设置',
  'menu.account.settings.security': '安全设置',
  'menu.account.settings.custom': '个性化设置',
  'menu.account.settings.binding': '账户绑定',
  'menu.account.settings.notification': '新消息通知',
  'menu.pages': '其他组件',
  'menu.pages.iconselector': 'Icon Selector',
  'menu.pages.lists': '业务布局',
  'menu.pages.treelist': '树目录表格',
  'menu.pages.edittable': '内联编辑表格',
  'menu.pages.userlist': '用户列表',
  'menu.pages.rolelist': '角色列表',
  'menu.pages.systemrole': '角色列表2',
  'menu.pages.permissionlist': '权限列表',
  'basicform.title.label': '标题',
  'basicform.header.content': '表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。',
  'basicform.title.placeholder': '给目标起个名字',
  'basicform.title.error': '给目标起个名字',
  'basicform.startandend.label': '起止日期',
  'basicform.startandend.error': '请选择起止日期',
  'basicform.goaldesc.label': '目标描述',
  'basicform.goaldesc.error': '请输入目标描述',
  'basicform.goaldesc.placeholder': '请输入你阶段性工作目标',
  'basicform.metrics.label': '衡量标准',
  'basicform.metrics.error': '请输入衡量标准',
  'basicform.metrics.placeholder': '请输入衡量标准',
  'basicform.client.label': '客户',
  'basicform.client.error': '请描述你服务的客户',
  'basicform.client.placeholder': '请描述你服务的客户，内部客户直接 @姓名／工号',
  'basicform.reviewers.label': '邀评人',
  'basicform.reviewers.placeholder': '请直接 @姓名／工号，最多可邀请 5 人',
  'basicform.weights.label': '权重',
  'basicform.target.label': '目标公开',
  'basicform.target.help': '客户、邀评人默认被分享',
  'basicform.target.public': '公开',
  'basicform.target.partlypublic': '部分公开',
  'basicform.target.private': '不公开',
  'basicform.target.colleagueone': '同事一',
  'basicform.target.colleaguetwo': '同事二',
  'basicform.target.colleague3': '同事三',
  'basicform.submit.label': '提交',
  'basicform.save.label': '保存',
  'advancedform.fieldLabels.name': '仓库名',
  'advancedform.fieldLabels.url': '仓库域名',
  'advancedform.fieldLabels.owner': '仓库管理员',
  'advancedform.fieldLabels.approver': '审批人',
  'advancedform.fieldLabels.dateRange': '生效日期',
  'advancedform.fieldLabels.type': '仓库类型',
  'advancedform.fieldLabels.name2': '任务名',
  'advancedform.fieldLabels.url2': '任务描述',
  'advancedform.fieldLabels.owner2': '执行人',
  'advancedform.fieldLabels.approver2': '责任人',
  'advancedform.fieldLabels.type2': '任务类型',
  'advancedform.header.content': '高级表单常见于一次性输入和提交大批量数据的场景',
  'advancedform.card1.title': '仓库管理',
  'advancedform.card2.title': '任务管理',
  'advancedform.table.addto': '添加',
  'advancedform.table.popconfirm.title': '是否要删除此行？',
  'advancedform.table.popconfirm.content': '删除',
  'advancedform.table.save': '保存',
  'advancedform.table.cancel': '取消',
  'advancedform.table.edit': '编辑',
  'advancedform.footer.popover.title': '表单校验信息',
  'advancedform.footer.send': '提交',
  'advancedform.table.newrow': '新增成员',
  'advancedform.table.columns.name': '成员姓名',
  'advancedform.table.columns.workId': '工号',
  'advancedform.table.columns.department': '所属部门',
  'advancedform.table.columns.action': '操作',
  'advancedform.table.data1.name': '小明',
  'advancedform.table.data1.department': '行政部',
  'advancedform.table.data2.name': '李莉',
  'advancedform.table.data2.department': 'IT部',
  'advancedform.table.data3.name': '王小帅',
  'advancedform.table.data3.department': '财务部',
  'advancedform.saverow.error': '请填写完整成员信息。',
  'repositoryform.name.placeholder': '请输入仓库名称',
  'repositoryform.name.error': '请输入仓库名称',
  'repositoryform.url.placeholder': '请输入',
  'repositoryform.url.error': '请输入仓库域名',
  'repositoryform.owner.placeholder': '请选择管理员',
  'repositoryform.owner.error': '请选择管理员',
  'repositoryform.owner.opt1': '王同学',
  'repositoryform.owner.opt2': '李同学',
  'repositoryform.owner.opt3': '黄同学',
  'repositoryform.approver.placeholder': '请选择审批员',
  'repositoryform.approver.error': '请选择审批员',
  'repositoryform.approver.opt1': '王晓丽',
  'repositoryform.approver.opt2': '李军',
  'repositoryform.dateRange.error': '李军',
  'repositoryform.type.placeholder': '请选择仓库类型',
  'repositoryform.type.error': '请选择仓库类型',
  'repositoryform.type.opt1': '公开',
  'repositoryform.type.opt2': '私密',
  'repositoryform.url.validatemsg': '需要以 user- 开头',
  'taskform.name2.placeholder': '请输入任务名称',
  'taskform.name2.error': '请输入任务名称',
  'taskform.url2.placeholder': '请输入任务描述',
  'taskform.url2.error': '请输入任务描述',
  'taskform.owner2.placeholder': '请选择执行人',
  'taskform.owner2.opt1': '黄丽丽',
  'taskform.owner2.opt2': '李大刀',
  'taskform.approver2.placeholder': '请选择责任人',
  'taskform.approver2.opt1': '王伟',
  'taskform.approver2.opt2': '李红军',
  'taskform.dateRange2.label': '提醒时间',
  'taskform.dateRange2.error': '请选择提醒时间',
  'repositoryform.type2.placeholder': '请选择任务类型',
  'repositoryform.type2.error': '请选择任务类型',
  'repositoryform.type2.opt1': '定时执行',
  'repositoryform.type2.opt2': '周期执行'
}

export default {
  ...components,
  ...locale
}
