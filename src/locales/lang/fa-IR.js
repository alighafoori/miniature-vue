import antdEnUS from 'ant-design-vue/es/locale-provider/fa_IR'
import momentEU from 'moment/locale/eu'

const components = {
  antLocale: antdEnUS,
  momentName: 'fa',
  momentLocale: momentEU,
  isRtl: true,
  name: 'fa-IR',
  currency: 'IRR',
  currencyFomatter: function (num) {
    return new Intl.NumberFormat(this.name).format(num) + ' تومان'
  },
  dateFormatter: function (date) {
    return date.toLocaleDateString(this.name)
  },
  isoCode: 'fa'
}

const locale = {
  'message': '-',
  'menu.home': 'خانه',
  'menu.dashboard': 'میزکار',
  'menu.dashboard.analysis': 'آمار',
  'menu.dashboard.monitor': 'نظارت',
  'menu.dashboard.workplace': 'محل کار',
  'menu.forms': 'فرم‌ها',
  'menu.forms.base': 'فرم معمولی',
  'menu.forms.stepform': 'فرم مرحله‌ای',
  'menu.forms.advanceform': 'فرم پیشرفته',
  'menu.lists': 'جدول لیستی',
  'menu.lists.tablelist': 'جدول',
  'menu.lists.basiclist': 'لیست پایه',
  'menu.lists.cardlist': 'لیست کارتی',
  'menu.lists.searchlist': 'لیست جستجو',
  'menu.lists.searchlist.articles': 'جستجوی مقاله',
  'menu.lists.searchlist.projects': 'جستجوی پروژه',
  'menu.lists.searchlist.application': 'جستجوی برنامه',
  'menu.profile': 'پروفایل',
  'menu.profile.basic': 'پروفایل معمولی',
  'menu.profile.advanced': 'پروفایل پیشرفته',
  'menu.result': 'پیام',
  'menu.result.success': 'پیام موفق',
  'menu.result.fail': 'پیام ناموفق',
  'menu.exceptions': 'خطاها',
  'menu.exceptions.403': '403',
  'menu.exceptions.404': '404',
  'menu.exceptions.500': '500',
  'menu.account': 'حساب کاربری',
  'menu.account.center': 'حساب کاربری وسط‌چین',
  'menu.account.settings': 'تنظیمات حساب کاربری',
  'menu.account.settings.base': 'تنظیمات پایه‌ای',
  'menu.account.settings.security': 'تنظیمات امنیتی',
  'menu.account.settings.custom': 'تنظیمات اختصاصی',
  'menu.account.settings.binding': 'تنظیمات انقیادی',
  'menu.account.settings.notification': 'تنظیمات اعلان‌ها',
  'menu.pages': 'صفحات',
  'menu.pages.iconselector': 'انتخاب آیکن',
  'menu.pages.lists': 'لیست‌ها',
  'menu.pages.treelist': 'لیست درختی',
  'menu.pages.edittable': 'لیست قابل ویرایش',
  'menu.pages.userlist': 'لیست کاربران',
  'menu.pages.rolelist': 'لیست نقش‌ها',
  'menu.pages.systemrole': 'نقش سیستمی',
  'menu.pages.permissionlist': 'لیست اختیارات',
  'basicform.title.label': 'عنوان',
  'basicform.header.content': 'از صفحات فرم برای جمع آوری یا تأیید اطلاعات از کاربران استفاده می شود. فرم های معمولی در سناریوهای فرم با تعداد کمی از داده ها رایج هستند.',
  'basicform.title.placeholder': 'لطفاً عنوان را وارد کنید',
  'basicform.title.error': 'لطفاً عنوان را وارد کنید',
  'basicform.startandend.label': 'تاریخ های شروع و پایان',
  'basicform.startandend.error': 'لطفا تاریخ های شروع و پایان را انتخاب کنید',
  'basicform.goaldesc.label': 'توضیحات هدف',
  'basicform.goaldesc.error': 'لطفاً توضیحات هدف را وارد کنید',
  'basicform.goaldesc.placeholder': 'لطفا اهداف کاری خود را وارد کنید',
  'basicform.metrics.label': 'متریک',
  'basicform.metrics.error': 'لطفاً یک متریک وارد کنید',
  'basicform.metrics.placeholder': 'لطفاً یک متریک وارد کنید',
  'basicform.client.label': 'مشتری',
  'basicform.client.error': 'لطفاً مشتریان را وارد نمایید',
  'basicform.client.placeholder': 'لطفاً مشتریان را وارد نمایید @نام / شناسه کار',
  'basicform.reviewers.label': 'داوران دعوت شده',
  'basicform.reviewers.placeholder': 'لطفاً به طور مستقیم @NAME ، حداکثر 5 نفر را می توان دعوت کرد',
  'basicform.weights.label': 'وزن',
  'basicform.target.label': 'هدف را انتخاب کنید',
  'basicform.target.help': 'مشتریان و داوران دعوت شده به طور پیش فرض مشترک هستند',
  'basicform.target.public': 'عمومی',
  'basicform.target.partlypublic': 'تا حدی عمومی',
  'basicform.target.private': 'خصوصی',
  'basicform.target.colleagueone': 'یک همکار',
  'basicform.target.colleaguetwo': 'همکار دوم',
  'basicform.target.colleague3': 'همکار سوم',
  'basicform.submit.label': 'ارسال',
  'basicform.save.label': 'ذخیره',
  'advancedform.fieldLabels.name': 'نام انبار',
  'advancedform.fieldLabels.url': 'نام دامنه انبار',
  'advancedform.fieldLabels.owner': 'مدیر انبار',
  'advancedform.fieldLabels.approver': 'تأییدکننده',
  'advancedform.fieldLabels.dateRange': 'تاریخ کار',
  'advancedform.fieldLabels.type': 'نوع انبار',
  'advancedform.fieldLabels.name2': 'نام کار',
  'advancedform.fieldLabels.url2': 'شرح وظیفه',
  'advancedform.fieldLabels.owner2': 'مجری',
  'advancedform.fieldLabels.approver2': 'مسئول',
  'advancedform.fieldLabels.type2': 'نوع کار',
  'advancedform.header.content': 'فرم های پیشرفته معمولاً برای وارد کردن و ارسال مقادیر زیادی از داده ها به طور همزمان استفاده می شود',
  'advancedform.card1.title': 'مدیریت انبار',
  'advancedform.card2.title': 'مدیریت وظیفه',
  'advancedform.table.addto': 'اضافه کنید',
  'advancedform.table.popconfirm.title': 'آیا می خواهید این خط را حذف کنید؟',
  'advancedform.table.popconfirm.content': 'حذف',
  'advancedform.table.save': 'ذخیره',
  'advancedform.table.cancel': 'انصراف',
  'advancedform.table.edit': 'ویرایش',
  'advancedform.footer.popover.title': 'اطلاعات تأیید فرم',
  'advancedform.footer.send': 'ارسال',
  'advancedform.table.newrow': 'عضو جدید',
  'advancedform.table.columns.name': 'نام عضو',
  'advancedform.table.columns.workId': 'شماره شغل',
  'advancedform.table.columns.department': 'دپارتمان',
  'advancedform.table.columns.action': 'عملیات',
  'advancedform.table.data1.name': 'كومي',
  'advancedform.table.data1.department': 'اداره اجرایی',
  'advancedform.table.data2.name': 'لی لی',
  'advancedform.table.data2.department': 'بخش فناوری اطلاعات',
  'advancedform.table.data3.name': 'وانگ شیاوشوای',
  'advancedform.table.data3.department': 'دارایی',
  'advancedform.saverow.error': 'لطفا اطلاعات کامل عضو را پر کنید.',
  'repositoryform.name.placeholder': 'لطفا نام انبار را وارد کنید',
  'repositoryform.name.error': 'لطفا نام انبار را وارد کنید',
  'repositoryform.url.placeholder': 'لطفا وارد کنید',
  'repositoryform.url.error': 'لطفا نام دامنه انبار را وارد کنید',
  'repositoryform.owner.placeholder': 'لطفاً یک مدیر انتخاب کنید',
  'repositoryform.owner.error': 'لطفاً یک مدیر انتخاب کنید',
  'repositoryform.owner.opt1': 'همکلاسی وانگ',
  'repositoryform.owner.opt2': 'همکلاسی لی',
  'repositoryform.owner.opt3': 'همکلاسی هوانگ',
  'repositoryform.approver.placeholder': 'لطفاً یک ناظر را انتخاب کنید',
  'repositoryform.approver.error': 'لطفاً یک ناظر را انتخاب کنید',
  'repositoryform.approver.opt1': 'وانگ شیائولی',
  'repositoryform.approver.opt2': 'لی جون',
  'repositoryform.dateRange.error': 'لطفا تاریخ را انتخاب کنید',
  'repositoryform.type.placeholder': 'لطفا نوع انبار را انتخاب کنید',
  'repositoryform.type.error': 'لطفا نوع انبار را انتخاب کنید',
  'repositoryform.type.opt1': 'عمومی',
  'repositoryform.type.opt2': 'خصوصی',
  'repositoryform.url.validatemsg': 'نیاز به شروع با user-',
  'taskform.name2.placeholder': 'لطفاً نام کار را وارد کنید',
  'taskform.name2.error': 'لطفاً نام کار را وارد کنید',
  'taskform.url2.placeholder': 'لطفاً شرح وظیفه را وارد کنید',
  'taskform.url2.error': 'لطفاً شرح وظیفه را وارد کنید',
  'taskform.owner2.placeholder': 'لطفاً یک مجری انتخاب کنید',
  'taskform.owner2.opt1': 'هوانگ لیلی',
  'taskform.owner2.opt2': 'لی دادائو',
  'taskform.approver2.placeholder': 'لطفا شخص مسئول را انتخاب کنید',
  'taskform.approver2.opt1': 'وانگ وی',
  'taskform.approver2.opt2': 'هانگجون لی',
  'taskform.dateRange2.label': 'تاریخ یادآوری',
  'taskform.dateRange2.error': 'لطفاً یک تاریخ یادآوری را انتخاب کنید',
  'repositoryform.type2.placeholder': 'لطفاً نوع کار را انتخاب کنید',
  'repositoryform.type2.error': 'لطفاً نوع کار را انتخاب کنید',
  'repositoryform.type2.opt1': 'فقط یکبار اجرا',
  'repositoryform.type2.opt2': 'اجرای دوره ای',
  'dashboard.analysis.totalsale.title': 'کل فروش',
  'dashboard.analysis.totalsale.tooltip.title': 'توضیحات شاخص',
  'dashboard.analysis.totalsale.yoy.first': 'YOY',
  'dashboard.analysis.totalsale.yoy.second': 'YOY',
  'dashboard.analysis.totalsale.avragedaily': 'متوسط ​​فروش روزانه',
  'dashboard.analysis.views.title': 'بازدیدها',
  'dashboard.analysis.views.tooltip.title': 'توضیحات شاخص',
  'dashboard.analysis.views.footer': 'بازدیدهای روزانه',
  'dashboard.analysis.payments.title': 'تعداد پرداخت ها',
  'dashboard.analysis.payments.tooltip.title': 'توضیحات شاخص',
  'dashboard.analysis.payments.footer': 'نرخ تبدیل',
  'dashboard.analysis.effectiveness.title': 'اثربخشی عملیاتی',
  'dashboard.analysis.effectiveness.tooltip.title': 'توضیحات شاخص',
  'dashboard.analysis.effectiveness.sameweek': 'همان هفته',
  'dashboard.analysis.effectiveness.mom': 'MOM',
  'dashboard.analysis.sales.title': 'فروش',
  'dashboard.analysis.sales.bar.title': 'رتبه بندی فروش',
  'dashboard.analysis.sales.rank.title': 'رتبه بندی فروش فروشگاه',
  'dashboard.analysis.date.today': 'امروز',
  'dashboard.analysis.date.thisweek': 'این هفته',
  'dashboard.analysis.date.thismonth': 'این ماه',
  'dashboard.analysis.date.thisyear': 'امسال',
  'dashboard.analysis.sales.ternd': 'روند فروش',
  'dashboard.analysis.sales.ranking': 'رتبه بندی فروش فروشگاه',
  'dashboard.analysis.search.title': 'جستجوی محبوب آنلاین',
  'dashboard.analysis.contextmenu.menu1': 'عملیات یک',
  'dashboard.analysis.contextmenu.menu2': 'عملیات دو',
  'dashboard.analysis.search.users.title': 'کاربران را جستجو کنید',
  'dashboard.analysis.search.users.tooltip.title': 'توضیحات شاخص',
  'dashboard.analysis.search.capita.title': 'جستجو برای سرانه',
  'dashboard.analysis.search.capita.tooltip.title': 'توضیحات شاخص',
  'dashboard.analysis.salescat.title': 'درصد دسته فروش',
  'dashboard.analysis.salescat.allchannel': 'همه کانالها',
  'dashboard.analysis.salescat.online': 'آنلاین',
  'dashboard.analysis.salescat.store': 'فروشگاه',
  'dashboard.analysis.salescat.h4': 'حراجی',
  'dashboard.searchData': 'واژه',
  'dashboard.searchTableColumns.index': 'شماره',
  'dashboard.searchTableColumns.keyword': 'واژه',
  'dashboard.searchTableColumns.count': 'تعداد',
  'dashboard.searchTableColumns.range': 'بازه',
  'dashboard.data.month': 'ماه',
  'dashboard.rankList.part1': 'اگرت',
  'dashboard.rankList.part2': 'رتبه',
  'dashboard.searchUserScale.alias1': 'زمان',
  'dashboard.searchUserScale.alias2': 'شماره کاربر',
  'dashboard.sourceData.item1': 'لوازم خانگی',
  'dashboard.sourceData.item2': 'الکل',
  'dashboard.sourceData.item3': 'مراقبت های بهداشتی',
  'dashboard.sourceData.item4': 'کیف های لباس',
  'dashboard.sourceData.item5': 'محصولات مادر و کودک',
  'dashboard.sourceData.item6': 'دیگر',
  'miniarea.scale.title': 'زمان',
  'workplace.user.description': 'توسعه دهنده فرانت ',
  'workplace.user.numItems': 'تعداد اقلام',
  'workplace.user.ranking': 'رتبه',
  'workplace.user.visit': 'بازدید',
  'workplace.projects.title': 'پروژه در حال انجام',
  'workplace.projects.allitems': 'همه موارد',
  'workplace.dynamic.title': 'پویا',
  'workplace.dynamic.in': 'که در',
  'workplace.quickstart.title': 'شروع سریع / ناوبری آسان',
  'workplace.quickstart.opt1': 'عملیات یک',
  'workplace.quickstart.opt2': 'عملیات دو',
  'workplace.quickstart.opt3': 'عملیات سه',
  'workplace.quickstart.opt4': 'عملیات چهار',
  'workplace.quickstart.opt5': 'عملیات پنج',
  'workplace.quickstart.opt6': 'عملیات شش',
  'workplace.quickstart.addto': 'اضافه کردن',
  'workplace.index.title': 'XX فهرست',
  'workplace.team.title': 'تیم',
  'workplace.radar.personal': 'شخصی',
  'workplace.radar.team': 'تیم',
  'workplace.radar.departmant': 'دپارتمان',
  'stepform.content': 'یک کار فرم طولانی یا ناآشنا را به چند مرحله تقسیم کنید تا کاربر از طریق آن راهنمایی کند.',
  'stepform.step1': 'اطلاعات انتقال را پر کنید',
  'stepform.step2': 'اطلاعات انتقال را تأیید کنید',
  'stepform.step3': 'انجام دادن',
  'stepform1.payment.account': 'حساب پرداخت',
  'stepform1.payment.account.error': 'حساب پرداخت باید پر شود',
  'stepform1.receiver': 'حسابهای دریافتنی',
  'stepform1.method.alipay': 'آلیپای',
  'stepform1.method.wechat': 'WeChat',
  'stepform1.receiver.error': 'حساب جمع آوری باید پر شود',
  'stepform1.payee.name': 'نام گیرنده',
  'stepform1.payee.name.error': 'نام گیرنده باید بررسی شود',
  'stepform1.amount': 'مقدار انتقال',
  'stepform1.amount.error': 'مبلغ انتقال باید پر شود',
  'stepform1.nextstep': 'گام بعدی',
  'stepform1.explanation': 'توضیح',
  'stepform1.explanation.title': 'انتقال پول به حساب Alipay',
  'stepform1.explanation.body': 'در صورت لزوم می توانید سوالات متداول در مورد محصول را در اینجا قرار دهید. در صورت لزوم می توانید سوالات متداول در مورد محصول را در اینجا قرار دهید. در صورت لزوم می توانید سوالات متداول در مورد محصول را در اینجا قرار دهید.',
  'stepform1.explanation2.title': 'انتقال به کارت بانکی',
  'stepform1.explanation2.body': 'در صورت لزوم می توانید سوالات متداول در مورد محصول را در اینجا قرار دهید. در صورت لزوم می توانید سوالات متداول در مورد محصول را در اینجا قرار دهید. در صورت لزوم می توانید سوالات متداول در مورد محصول را در اینجا قرار دهید.',
  'stepform2.alert.message': 'پس از تأیید انتقال ، وجوه مستقیم به حساب طرف مقابل واریز می شود و قابل برگشت نیست.',
  'stepform2.payment.account': 'حساب پرداخت',
  'stepform2.receiver': 'حسابهای دریافتنی',
  'stepform2.payee.name': 'نام گیرنده',
  'stepform2.amount': 'مقدار انتقال',
  'stepform2.password': 'رمز عبور',
  'stepform2.password.error': 'لطفا رمز ورود را وارد کنید',
  'stepform2.submit': 'ارسال',
  'stepform2.previous': 'قبلی',
  'stepform3.result.title': 'عملیات موفقیت آمیز',
  'stepform3.result.subtitle': 'انتظار می رود ظرف دو ساعت وارد شود',
  'stepform3.account': 'حساب پرداخت:',
  'stepform3.receiver': 'حساب های دریافتنی:',
  'stepform3.payee.name': 'نام گیرنده:',
  'stepform3.payee.name.value': 'هوی یه',
  'stepform3.amount': 'مقدار انتقال:',
  'stepform3.currency': 'یوان',
  'stepform3.finish': 'چرخش دیگری بساز',
  'stepform3.toOrderList': 'مشاهده صورتحساب',
  'tablelist.Rule number': 'شماره قانون',
  'tablelist.status of use': 'وضعیت استفاده',
  'tablelist.please choose': 'لطفا انتخاب کنید',
  'tablelist.All': 'همه',
  'tablelist.shut down': 'خاموش',
  'tablelist.Running': 'در حال دویدن',
  'tablelist.Calls': 'تماس می گیرد',
  'tablelist.Updated': 'به روز شده',
  'tablelist.Please enter the update date': 'لطفا تاریخ بروزرسانی را وارد کنید',
  'tablelist.Inquire': 'جویا شدن',
  'tablelist.Reset': 'تنظیم مجدد',
  'tablelist.Collapse': 'سقوط - فروپاشی',
  'tablelist.Unfold': 'آشکار شد',
  'tablelist.New': 'جدید',
  'tablelist.Open': 'باز کن',
  'tablelist.delete': 'حذف',
  'tablelist.locking': 'قفل کردن',
  'tablelist.Bulk operations': 'عملیات فله ',
  'tablelist.edit': 'ویرایش کنید',
  'tablelist.More ': 'بیشتر  ',
  'tablelist.Details': 'جزئیات',
  'tablelist.Disable': 'غیرفعال کردن',
  'basiclist.My to-do': 'کارهای من',
  'basiclist.Tasks': 'وظایف',
  'basiclist.Average': 'میانگین زمان پردازش کار در این هفته',
  'basiclist.minute': 'دقیقه',
  'basiclist.TasksWeek': 'وظایف این هفته به پایان رسید',
  'basiclist.Pc': 'آ',
  'basiclist.Standard list': 'لیست استاندارد',
  'basiclist.All': 'همه',
  'basiclist.processing': 'در حال پردازش',
  'basiclist.Waiting': 'در انتظار',
  'basiclist.Add to': 'اضافه کردن به',
  'basiclist.edit': 'ویرایش کنید',
  'basiclist.delete': 'حذف',
  'basiclist.More': 'بیشتر',
  'basiclist.Starting time': 'زمان شروع',
  'tablelistview.Rule number': 'شماره قانون',
  'tablelistview.status of use': 'وضعیت استفاده',
  'tablelistview.please choose': 'لطفا انتخاب کنید',
  'tablelistview.All': 'همه',
  'tablelistview.shut down': 'خاموش',
  'tablelistview.Running': 'در حال دویدن',
  'tablelistview.Calls': 'تماس می گیرد',
  'tablelistview.Updated': 'به روز شده',
  'tablelistview.Please enter the update date': 'لطفا تاریخ بروزرسانی را وارد کنید',
  'tablelistview.Inquire': 'جویا شدن',
  'tablelistview.Reset': 'تنظیم مجدد',
  'tablelistview.Collapse': 'سقوط - فروپاشی',
  'tablelistview.Unfold': 'آشکار شد',
  'tablelistview.New': 'جدید',
  'tablelistview.Open': 'باز کن',
  'tablelistview.delete': 'حذف',
  'tablelistview.locking': 'قفل کردن',
  'tablelistview.Bulk operations': 'عملیات فله ',
  'tablelistview.Configuration': 'پیکربندی',
  'tablelistview.Subscribe to alarm': 'اشتراک در زنگ',
  'tablelistview.Online': 'برخط',
  'tablelistview.abnormal': 'غیرطبیعی',
  'tablelistview.description': 'شرح',
  'tablelistview.Service calls': 'خدمات تماس',
  'tablelistview.Times': 'بار',
  'tablelistview.status': 'وضعیت',
  'tablelistview.Update time': 'زمان بروزرسانی کنید',
  'tablelistview.operating': 'عملیاتی',
  'tablelistview.Subscriptionsuccessful': 'اشتراک موفقیت آمیز است))',
  'tablelistview.Subscriptionfailed': 'اشتراک ناموفق بود ، این قانون بسته است',
  'table.render.alert.title': 'جمع',
  'table.render.alert.span': 'انتخاب شده',
  'table.render.clear': 'پاک',
  'cardlist.header.content': 'طرح پاراگراف: Platform Design Service Ant Gold ant.design ، با حداقل بار کار ، یکپارچه به اکوسیستم سرویس مورچه گلد متصل می شود ، و راه حل های تجربه ای را ارائه می دهد که طراح و توسعه را شامل می شود.',
  'cardlist.newBtn': 'محصول جدید',
  'cardlist.dataSource.content': 'در فرآیند تحقیق و توسعه محصولات مرحله میانی ، مشخصات مختلفی از طراحی و روش های اجرایی ظاهر می شود ، اما اغلب بسیاری از صفحات و مؤلفه های مشابه وجود دارد .این اجزای مشابه به مجموعه ای از مشخصات استاندارد تقسیم می شوند.',
  'cardlist.tabList.tab1': 'شروع سریع',
  'cardlist.tabList.tab2': 'معرفی محصول',
  'cardlist.tabList.tab3': 'اسناد محصول',
  'cardlist.testfun': 'شروع سریع کلیک شد!',
  'searchlayout.enterbutton': 'جستجو',
  'searchlayout.article': 'مقاله',
  'searchlayout.project': 'پروژه',
  'searchlayout.application': 'کاربرد',
  'search.article.catagory.Category': 'دسته بندی',
  'search.article.catagory.Category 1': 'دسته 1',
  'search.article.catagory.Category 2': 'دسته 2',
  'search.article.catagory.Category 3': 'دسته 3',
  'search.article.catagory.Category 4': 'دسته 4',
  'search.article.catagory.Category 5': 'دسته 5',
  'search.article.catagory.Category 6': 'دسته 6',
  'search.article.catagory.Category 7': 'دسته 7',
  'search.article.catagory.Category 8': 'دسته 8',
  'search.article.catagory.Category 9': 'دسته 9',
  'search.article.catagory.Category 10': 'دسته 10',
  'search.article.Select onwer': 'گزینه onwer را انتخاب کنید',
  'search.article.Just look at your own': 'فقط به خودتان نگاه کنید',
  'search.article.Other options': 'گزینه های دیگر',
  'search.article.active user': 'کاربر فعال',
  'search.article.Unlimited': 'نامحدود',
  'search.article.Li San': 'لی سان',
  'search.article.Praise of': 'ستایش از',
  'search.article.excellent': 'عالی',
  'search.article.Design language': 'زبان طراحی',
  'search.article.Ant Financial': 'مورچه مالی',
  'search.article.load more': 'بارگذاری بیشتر',
  'search.article.Myself': 'خودم',
  'search.article.Wu Jiahao': 'وو جیهائو',
  'search.article.Zhou Xingxing': 'ژو زینگکسینگ',
  'search.article.Zhao Liying': 'ژائو لیینگ',
  'search.article.Yao Ming': 'یائو مینگ',
  'articlelistcontent.posted on': 'نوشته شده در',
  'search.project.normal': 'معمولی',
  'search.project.Wang Zhaojun': 'وانگ ژائوون',
  'search.project.Author': 'نویسنده',
  'search.aplication.download': 'دانلود',
  'search.aplication.shareit': 'همرسانی',
  'cardinfo.activeUser': 'کاربران فعال',
  'cardinfo.newUser': 'کاربر جدید',
  'basicprofile.refund application': 'برنامه بازپرداخت',
  'basicprofile.Pickup number': 'شماره وانت',
  'basicprofile.status': 'وضعیت',
  'basicprofile.Picked up': 'برداشت',
  'basicprofile.Sales order number': 'شماره سفارش فروش',
  'basicprofile.Child order': 'سفارش کودک',
  'basicprofile.User Info': 'اطلاعات کاربر',
  'basicprofile.username': 'نام کاربری',
  'basicprofile.Fu Xiaoxiao': 'فو شیائوکسیو',
  'basicprofile.contact number': 'شماره تماس',
  'basicprofile.Commonly used express': 'معمولاً از اکسپرس استفاده می شود',
  'basicprofile.Rookie storage': 'ذخیره تازه کار',
  'basicprofile.Pickup address': 'آدرس وانت',
  'basicprofile.address': 'شماره 18 ، جاده Wantang ، منطقه Xihu ، شهر Hangzhou ، استان ژجیانگ',
  'basicprofile.Remarks': 'ملاحظات',
  'basicprofile.no': 'نه',
  'basicprofile.Returned goods': 'کالاهای برگشتی',
  'basicprofile.Return progress': 'پیشرفت را برگردانید',
  'basicprofile.Product Number': 'شماره محصول',
  'basicprofile.product name': 'نام محصول',
  'basicprofile.barcode': 'بارکد',
  'basicprofile.unit price': 'قیمت واحد',
  'basicprofile.Quantity / piece)': 'مقدار / قطعه)',
  'basicprofile.Amount': 'میزان',
  'basicprofile.Mineral water 550ml': 'آب معدنی 550 میلی لیتر',
  'basicprofile.Herbal tea 300ml': 'چای گیاهی 300 میلی لیتر',
  'basicprofile.Delicious potato chips': 'چیپس سیب زمینی خوشمزه',
  'basicprofile.Especially delicious egg rolls': 'مخصوصاً خوشمزه های تخم مرغ',
  'basicprofile.time': 'زمان',
  'basicprofile.Current progress': 'پیشرفت فعلی',
  'basicprofile.Operator ID': 'شناسه اپراتور',
  'basicprofile.time consuming': 'زمان بر',
  'basicprofile.contact clients': 'با مشتریان تماس بگیرید',
  'basicprofile.Pickup ID1234': 'وانت ID1234',
  'basicprofile.Pickup Departure': 'عزیمت وانت',
  'basicprofile.Pick up the order': 'سفارش را برداشت',
  'basicprofile.Application approved': 'برنامه تأیید شد',
  'basicprofile.system': 'سیستم',
  'basicprofile.Initiate': 'درخواست بازگشت را شروع کنید',
  'basicprofile.user': 'کاربر',
  'basicprofile.processing': 'در حال پردازش',
  'basicprofile.carry out': 'انجام دادن',
  'basicprofile.failure': 'شکست',
  'advancedprofile.Number': 'شماره: 234231029431',
  'advancedprofile.founder': 'موسس',
  'advancedprofile.Qu Lili': 'کو لیلی',
  'advancedprofile.Ordering Products': 'سفارش محصولات',
  'advancedprofile.service': 'سرویس',
  'advancedprofile.Creation time': 'زمان ایجاد',
  'advancedprofile.Related documents': 'مدارک مربوطه',
  'advancedprofile.effective date': 'تاریخ اجرا',
  'advancedprofile.Remarks': 'ملاحظات',
  'advancedprofile.confirm': 'لطفاً طی دو روز کاری تأیید کنید',
  'advancedprofile.operating': 'عملیاتی',
  'advancedprofile.Main operation': 'عملیات اصلی',
  'advancedprofile.status': 'وضعیت',
  'advancedprofile.Pending': 'در انتظار',
  'advancedprofile.order amount': 'مقدار سفارش',
  'advancedprofile.Process progress': 'پیشرفت روند',
  'advancedprofile.Create project': 'ایجاد پروژه',
  'advancedprofile.Departmental': 'امتحان مقدماتی دپارتمان',
  'advancedprofile.Financial review': 'بررسی مالی',
  'advancedprofile.carry out': 'انجام دادن',
  'advancedprofile.User Info': 'اطلاعات کاربر',
  'advancedprofile.username': 'نام کاربری',
  'advancedprofile.Fu Xiaoxiao': 'فو شیائوکسیو',
  'advancedprofile.member card number': 'شماره کارت عضو',
  'advancedprofile.ID card': 'کارت شناسایی',
  'advancedprofile.contact details': 'جزئیات تماس',
  'advancedprofile.contact address': 'آدرس تماس',
  'advancedprofile.address': 'تقاطع جاده Gongzhuan ، جاده Huanggushan ، منطقه Xihu ، Hangzhou ، استان ژجیانگ',
  'advancedprofile.Information Group': 'گروه اطلاعات',
  'advancedprofile.XX data': 'داده های XX',
  'advancedprofile.The data update time': 'زمان بروزرسانی داده ها',
  'advancedprofile.Multi-layer information group': 'گروه اطلاعات چند لایه',
  'advancedprofile.Group name': 'اسم گروه',
  'advancedprofile.principal': 'مدیر',
  'advancedprofile.Lin Dongdong': 'لین دونگ دونگ',
  'advancedprofile.Character code': 'کد شخصیت',
  'advancedprofile.Department': 'دپارتمان',
  'advancedprofile.Company-YY Department': 'شرکت-گروه YY',
  'advancedprofile.expire date': 'تاریخ انقضا',
  'advancedprofile.description': 'شرح',
  'advancedprofile.description.content': 'این توضیحات بسیار طولانی ، بسیار طولانی ، بسیار طولانی ، بسیار طولانی ، بسیار طولانی ، بسیار طولانی ، بسیار طولانی ، بسیار طولانی ، بسیار طولانی ، بسیار طولانی ، بسیار طولانی ...',
  'advancedprofile.scientific name': 'نام علمی',
  'advancedprofile.Annual': 'تاکهای سالانه ؛ ساقه ها و شاخه های آن ضخیم و دارای لبه های واضح است. ضخیم ها ضخیم تر هستند ..',
  'advancedprofile.User call history in the past six months': 'سابقه تماس کاربر در شش ماه گذشته',
  'advancedprofile.No data': 'اطلاعاتی وجود ندارد',
  'advancedprofile.Details': 'جزئیات',
  'advancedprofile.rule': 'قانون',
  'advancedprofile.Operation log one': 'عملیات ثبت یک',
  'advancedprofile.Operation log two': 'عملیات ثبت دو',
  'advancedprofile.Operation log three': 'عملیات ورود به سیستم سه',
  'advancedprofile.Operation type': 'نوع عمل',
  'advancedprofile.Operator': 'اپراتور',
  'advancedprofile.Results of the': 'نتایج از',
  'advancedprofile.Operating time': 'زمان کار',
  'advancedprofile.Ordering relationship effective': 'برقراری ارتباط موثر است',
  'advancedprofile.Reason for failure': 'دلیل عدم موفقیت',
  'advancedprofile.Departmental Preliminary Examination': 'امتحان مقدماتی دپارتمان',
  'advancedprofile.Zhou Maomao': 'ژو مائوئو',
  'advancedprofile.Submit Order': 'ثبت درخواست',
  'advancedprofile.Great': 'عالی',
  'advancedprofile.Create Order': 'ایجاد سفارش',
  'advancedprofile.Sweaty teeth': 'دندانهای عرق دار',
  'advancedprofile.success': 'موفقیت',
  'advancedprofile.turn down': 'رد کردن',
  'success.Back to list': 'بازگشت به لیست',
  'success.View project': 'مشاهده پروژه',
  'success.print': 'چاپ',
  'success.project name': 'نام پروژه',
  'success.ProjectID': 'شماره پروژه',
  'success.principal': 'مدیر',
  'success.Who is Qu Lili?': 'کو لیلی کیست؟',
  'success.Effective': 'زمان موثر',
  'success.Create project': 'ایجاد پروژه',
  'success.Qu Lili': 'کو لیلی',
  'success.Departmental': 'امتحان مقدماتی دپارتمان',
  'success.Zhou Maomao': 'ژو مائوئو',
  'success.Hurry': 'عجله',
  'success.Financial review': 'بررسی مالی',
  'success.carry out': 'انجام دادن',
  'success.title': 'با موفقیت انجام شد',
  'success.description': 'صفحه نتایج ارسال برای بازخورد نتایج پردازش یک سری از کارهای عملیاتی استفاده می شود. اگر فقط یک عمل ساده است ، از بازخورد سریع جهانی پیام استفاده کنید. این قسمت متن می تواند دستورالعمل های تکمیلی ساده را نشان دهد. در صورت نیاز به نمایش "اسناد" ، منطقه خاکستری زیر می تواند محتوای پیچیده تری را ارائه دهد.',
  'error.Back': 'بازگشت به اصلاح',
  'error.content': 'محتوایی که ارسال کردید دارای خطاهای زیر است:',
  'error.frozen': 'حساب شما یخ زده است',
  'error.Thawnow': 'الان ذوب شده',
  'error.eligible': 'حساب شما هنوز واجد شرایط نیست',
  'error.upgrade': 'بلافاصله ارتقا دهید',
  'error.title': 'ارسال ناموفق بود ',
  'error.description': 'لطفا قبل از ارسال دوباره اطلاعات زیر را بررسی و اصلاح کنید. ',
  '403.content': 'متأسفیم ، شما به این صفحه دسترسی ندارید.',
  '403.Back': 'بازگشت به صفحه اول',
  '404.content': 'متأسفیم ، صفحه‌ای که بازدید کردید وجود ندارد.',
  '500.content': 'متأسفیم ، سرور خطایی را گزارش می دهد.',
  'accountcenter.bio': 'در برابر تنوع تحمل کنید ، مدارا یک فضیلت است',
  'accountcenter.Interaction': 'کارشناس تعامل',
  'accountcenter.group': 'Ant Financial-XX گروه تجاری XY - بخش پلت فرم XY - بخش فناوری XY-UED',
  'accountcenter.Province': 'استان ژجیانگ',
  'accountcenter.Hangzhou': 'هانگزو',
  'accountcenter.label': 'برچسب',
  'accountcenter.team': 'تیم',
  'accountcenter.tag.thoughtful': 'بسیار متفکر',
  'accountcenter.tag.Focus': 'روی طراحی متمرکز شوید',
  'accountcenter.tag.Spicy': 'تند ~',
  'accountcenter.tag.Longlegs': 'لنگ دراز',
  'accountcenter.tag.Chuanmeizi': 'چوانمایزی',
  'accountcenter.tag.Heinabaichuan': 'هاینابیچوان',
  'accountcenter.tab.Article': 'مقاله(8)',
  'accountcenter.tab.Application': 'برنامه(8)',
  'accountcenter.tab.Project': 'پروژه(8)',
  'accountcenter.page.activeuser': 'کاربر فعال',
  'accountcenter.page.Tenthousand': 'هزار',
  'accountcenter.page.Newusers': 'کاربران جدید',
  'accountcenter.article.Design language': 'زبان طراحی',
  'accountcenter.article.Ant Financial': 'مورچه مالی',
  'accountcenter.article.load more': 'بارگذاری بیشتر',
  'accountsetting.nickname': 'نام مستعار',
  'accountsetting.yourselfname': 'به خودتان یک اسم بدهید',
  'accountsetting.e-mail': 'پست الکترونیک',
  'accountsetting.Encryption': 'رمزگذاری',
  'accountsetting.Connectionpassword': 'رمز عبور اتصال',
  'accountsetting.loginpassword': 'رمز عبور ورود',
  'accountsetting.password': 'کلمه عبور',
  'accountsetting.submit': 'ارسال',
  'accountsetting.save': 'صرفه جویی',
  'accountsetting.bio': 'درباره من',
  'accountsetting.bio.placeholder': 'تو تنها نیستی.',
  'accountsetting.basicsettings': 'تنظیمات پایه',
  'accountsetting.SecuritySettings': 'تنظیمات امنیتی',
  'accountsetting.personalise': 'شخصی سازی',
  'accountsetting.Accountbinding': 'الزام آور بودن حساب',
  'accountsetting.Newmessagenotification': 'اطلاع رسانی پیام جدید',
  'accountsetting.security.password': 'رمز عبور حساب کاربری',
  'accountsetting.security.passwordstrength': 'قدرت رمز عبور فعلی',
  'accountsetting.security.Strong': 'قوی',
  'accountsetting.security.modify': 'تغییر',
  'accountsetting.security.Secret': 'تلفن امنیتی مخفی',
  'accountsetting.security.Phone': 'تلفن محدود است',
  'accountsetting.security.SecurityQuestion': 'سوال امنیتی',
  'accountsetting.security.issue': 'هیچ مسئله امنیتی مخفی وجود ندارد ، که می تواند به طور موثر از امنیت حساب محافظت کند',
  'accountsetting.security.Setup': 'برپایی',
  'accountsetting.security.Backup email': 'ایمیل پشتیبان',
  'accountsetting.security.Mailbox bound': 'صندوق پستی محدود شد',
  'accountsetting.security.device': 'دستگاه',
  'accountsetting.security.Unbound MFA device': 'دستگاه بی سیم MFA ، پس از اتصال ، می توانید تأیید دوم را انجام دهید',
  'accountsetting.security.Binding': 'الزام آور',
  'accountsetting.security.MFA equipment': 'تجهیزات MFA',
  'accountsetting.security.info': 'این یک پیام عادی است',
  'accountsetting.security.success': 'این پیام موفقیت است',
  'accountsetting.security.error': 'این یک پیام خطاست',
  'accountsetting.security.warning': 'این پیام هشدار است',
  'accountsetting.custom.Stylecolor': 'رنگ سبک',
  'accountsetting.custom.Overall': 'تنظیم رنگ کلی سبک',
  'accountsetting.custom.Dark': 'تاریک',
  'accountsetting.custom.white': 'سفید',
  'accountsetting.custom.Themecolor': 'رنگ تم',
  'accountsetting.custom.Pagestyle': 'تطبیق رنگ صفحه صفحه:',
  'settingconfig.dusk': 'غروب',
  'settingconfig.volcanic': 'آتشفشانی',
  'settingconfig.Sunset': 'غروب خورشید',
  'settingconfig.Mingqing': 'مینگ کینگ',
  'settingconfig.Aurora green': 'شفق سبز',
  'settingconfig.Daybreak': 'Daybreak Blue (پیش فرض)',
  'settingconfig.Geek Blue': 'گیک آبی',
  'settingconfig.Sauce purple': 'سس بنفش',
  'settingconfig.loading': 'تغییر موضوع!',
  'avatarmodal.Modify avatar': 'نماد را تغییر دهید',
  'avatarmodal.Select Image': 'تصویر را انتخاب کنید',
  'avatarmodal.save': 'ذخیره',
  'avatarmodal.finish.success': 'با موفقیت بارگذاری شد',
  'avatarmodal.ok.success': 'بارگیری موفق آواتار'
}

export default {
  ...components,
  ...locale
}
