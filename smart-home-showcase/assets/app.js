(function() {
  'use strict';

  // ========== Device Data ==========
  var roomData = {
    living: [
      { icon:'📺', name:'智能电视', one:'语音搜索、投屏共享、远程控制', tags:['语音控制','投屏','4K'], details:[{t:'语音搜索',d:'说出节目名自动搜索播放'},{t:'手机投屏',d:'手机画面一键投射到大屏'},{t:'远程控制',d:'APP调节音量、频道、开关'},{t:'定时关机',d:'设定时间自动关闭不费电'}]},
      { icon:'💡', name:'智能主灯', one:'无极调光调色温，场景联动', tags:['调光','色温','定时'], details:[{t:'亮度调节',d:'0-100%无极调光，护眼舒适'},{t:'色温切换',d:'暖光3000K到冷光6500K'},{t:'定时开关',d:'设定时间自动亮灯熄灯'},{t:'场景联动',d:'回家自动开灯离家自动关'}]},
      { icon:'🌈', name:'氛围灯带', one:'RGB色彩，音乐律动，营造氛围', tags:['RGB','音乐联动'], details:[{t:'1600万色',d:'自由选择任意颜色'},{t:'音乐律动',d:'随音乐节奏自动变换'},{t:'分区控制',d:'不同区域不同颜色'},{t:'渐变模式',d:'呼吸灯、彩虹、流水等'}]},
      { icon:'❄️', name:'客厅空调', one:'远程预约，精准控温，节能模式', tags:['节能','预约','静音'], details:[{t:'远程预约',d:'下班前提前开启到家即享清凉'},{t:'精准控温',d:'±0.5°C精确温度控制'},{t:'节能模式',d:'AI学习习惯自动优化省电'},{t:'自清洁',d:'自动清洗蒸发器保持出风健康'}]},
      { icon:'🪟', name:'电动窗帘', one:'电机驱动，定时联动，光感调节', tags:['定时','光感','静音'], details:[{t:'定时开合',d:'早上7点自动拉开唤醒'},{t:'光感联动',d:'强光自动拉上保护家具'},{t:'语音控制',d:'说"打开窗帘"即可操作'},{t:'静音电机',d:'低于35分贝不打扰休息'}]},
      { icon:'🤖', name:'扫地机器人', one:'自动规划路径，定时清扫，自动回充', tags:['自动回充','定时','规划'], details:[{t:'激光导航',d:'精确建图规划最优清扫路径'},{t:'定时清扫',d:'每天上班后自动打扫'},{t:'自动回充',d:'电量低自动返回充电'},{t:'远程监控',d:'手机查看清扫进度和地图'}]},
      { icon:'🔊', name:'智能音箱', one:'语音中枢，控制全屋，播放音乐', tags:['语音','中枢','音乐'], details:[{t:'全屋控制',d:'语音控制灯光、空调、窗帘等'},{t:'音乐播放',d:'播放在线音乐和有声书'},{t:'信息查询',d:'天气、时间、新闻即问即答'},{t:'语音通话',d:'家人间免费语音视频通话'}]}
    ],
    bedroom: [
      { icon:'🌙', name:'智能床头灯', one:'暖色夜灯，轻触渐亮渐灭温柔唤醒', tags:['夜灯','渐亮','定时'], details:[{t:'渐亮唤醒',d:'模拟日出缓缓亮起自然醒'},{t:'夜灯模式',d:'超低亮度不刺眼起夜照明'},{t:'色温调节',d:'睡前暖光助眠，晨起冷光提神'},{t:'轻触控制',d:'拍两下灯头即可开关'}]},
      { icon:'❄️', name:'卧室空调', one:'睡眠静音，深夜自动调温避免着凉', tags:['静音','自动调温'], details:[{t:'睡眠曲线',d:'随深夜自动微调温度'},{t:'超静音',d:'低至18分贝不影响睡眠'},{t:'风感优化',d:'柔风不直吹避免着凉'},{t:'APP控制',d:'被窝里不用起身调节'}]},
      { icon:'🪟', name:'遮光窗帘', one:'100%遮光，配合起床时间自动拉开', tags:['遮光','定时'], details:[{t:'全遮光',d:'100%遮光率创造暗室环境'},{t:'定时唤醒',d:'配合床头灯模拟日出'},{t:'双层面料',d:'遮光纱帘一体白天也可用'},{t:'手拉即停',d:'轻拉窗帘自动走到位'}]},
      { icon:'💨', name:'卧室加湿器', one:'目标湿度自动恒定，低噪运行', tags:['恒湿','低噪','大容量'], details:[{t:'目标恒湿',d:'设定湿度自动开启停止'},{t:'静音运行',d:'低于30分贝安睡无忧'},{t:'大容量水箱',d:'一次加水使用整夜'},{t:'水位提醒',d:'水量不足手机推送提醒'}]},
      { icon:'📺', name:'卧室电视', one:'挂壁安装，睡前投屏，定时关闭', tags:['投屏','定时关机'], details:[{t:'壁挂安装',d:'节省空间不占床头柜'},{t:'投屏追剧',d:'手机画面投射到卧室大屏'},{t:'定时关闭',d:'设定时间自动关机不扰眠'},{t:'低蓝光',d:'减少蓝光保护视力助眠'}]},
      { icon:'⌚', name:'睡眠监测仪', one:'无感监测心率呼吸，联动空调调温', tags:['健康监测','联动'], details:[{t:'心率监测',d:'整夜监测心率异常及时提醒'},{t:'呼吸监测',d:'追踪呼吸暂停风险'},{t:'睡眠报告',d:'生成详细睡眠质量分析'},{t:'联动空调',d:'根据体温变化自动调温'}]}
    ],
    kitchen: [
      { icon:'🧊', name:'智能冰箱', one:'食材保质期提醒，远程查看库存', tags:['食材管理','提醒'], details:[{t:'库存查看',d:'手机随时查看冰箱里有什么'},{t:'保质提醒',d:'食材快过期自动推送提醒'},{t:'菜谱推荐',d:'根据库存推荐可做的菜'},{t:'能耗管理',d:'智能调节制冷节省电费'}]},
      { icon:'🔥', name:'智能烤箱', one:'预设菜谱一键烘焙，温度实时监控', tags:['菜谱','安全','远程'], details:[{t:'预设菜谱',d:'内置上百种烘焙模式一键操作'},{t:'温度监控',d:'实时查看炉内温度曲线'},{t:'远程关机',d:'出门忘关可手机远程关闭'},{t:'预约烘烤',d:'设定时间下班回家刚出炉'}]},
      { icon:'🍽️', name:'智能洗碗机', one:'洁净度检测，节能模式，完成通知', tags:['节能','通知'], details:[{t:'洁净检测',d:'传感器检测餐具是否洗净'},{t:'节能节水',d:'AI优化用水量最低仅需9L'},{t:'完成通知',d:'洗完手机推送可以收纳'},{t:'分层洗涤',d:'少量餐具只洗一层更省水'}]},
      { icon:'🔥', name:'燃气报警器', one:'燃气泄漏自动报警，联动关闭阀门', tags:['安全','联动'], details:[{t:'气体检测',d:'检测天然气和一氧化碳'},{t:'声光报警',d:'现场蜂鸣+闪烁灯警示'},{t:'手机推送',d:'不在家也能收到报警'},{t:'联动关阀',d:'自动关闭燃气总阀'}]},
      { icon:'🚿', name:'智能热水器', one:'预约加热，恒温出水，用水统计', tags:['恒温','预约','统计'], details:[{t:'预约加热',d:'设定时间到点就有热水'},{t:'恒温出水',d:'出水温度恒定不变不忽冷忽热'},{t:'用水统计',d:'记录每日用水量用气量'},{t:'安全防护',d:'漏电保护防干烧多重安全'}]},
      { icon:'🪞', name:'智能魔镜', one:'洗漱时显示天气日程，语音交互', tags:['信息','语音','触控'], details:[{t:'天气显示',d:'出门前查看今天穿衣建议'},{t:'日程提醒',d:'今日待办事项不遗漏'},{t:'护肤建议',d:'根据天气推荐护肤方案'},{t:'语音交互',d:'刷牙时语音控制其他设备'}]},
      { icon:'💧', name:'净水器', one:'多级过滤，水质实时监测，滤芯提醒', tags:['健康','提醒','监测'], details:[{t:'多级过滤',d:'PP棉+活性炭+RO反渗透'},{t:'水质监测',d:'TDS值实时显示水质好坏'},{t:'滤芯提醒',d:'滤芯寿命不足推送更换'},{t:'零废水',d:'2:1纯废比减少水资源浪费'}]}
    ],
    security: [
      { icon:'🔒', name:'智能门锁', one:'指纹密码NFC多种开锁，记录推送', tags:['多种解锁','推送'], details:[{t:'指纹解锁',d:'0.3秒快速识别全家可用'},{t:'密码解锁',d:'临时密码给访客一次性使用'},{t:'NFC解锁',d:'手机手表靠近即可开门'},{t:'开锁推送',d:'谁什么时间开的门实时通知'}]},
      { icon:'📹', name:'门口摄像头', one:'可视门铃，人形侦测，夜视对讲', tags:['夜视','对讲','侦测'], details:[{t:'可视门铃',d:'有人按门铃手机远程接听'},{t:'人形侦测',d:'识别逗留人员自动录像'},{t:'红外夜视',d:'全黑环境清晰成像'},{t:'远程对讲',d:'不在家也能和快递员对话'}]},
      { icon:'📷', name:'室内摄像头', one:'看护老人宠物，移动追踪，隐私模式', tags:['看护','隐私','追踪'], details:[{t:'移动追踪',d:'自动跟随拍摄移动目标'},{t:'老人看护',d:'跌倒检测异常行为报警'},{t:'宠物看护',d:'不在家查看宠物动态'},{t:'隐私模式',d:'一键关闭摄像头保护隐私'}]},
      { icon:'🔔', name:'门窗传感器', one:'检测门窗开合，异常打开触发报警', tags:['报警','状态监测'], details:[{t:'开合检测',d:'实时感知门窗开关状态'},{t:'异常报警',d:'离家期间门窗打开立即通知'},{t:'联动布防',d:'离家模式自动启用报警'},{t:'低电量提醒',d:'电池不足提前更换'}]},
      { icon:'💧', name:'水浸传感器', one:'检测漏水溢水，及时通知防止损失', tags:['防水','报警'], details:[{t:'漏水检测',d:'传感器接触水即刻报警'},{t:'溢水检测',d:'洗衣机阳台等溢水监测'},{t:'手机推送',d:'第一时间收到漏水通知'},{t:'联动关阀',d:'配合智能水阀自动关闭'}]}
    ]
  };

  // Scene data
  var sceneData = {
    home: { icon:'🏠', name:'回家模式已激活', sub:'客厅灯光亮起，空调调至 26°C，窗帘自动打开', devices:['💡 智能主灯','🌈 氛围灯带','❄️ 客厅空调','🪟 电动窗帘','🔊 智能音箱'] },
    sleep: { icon:'🌙', name:'睡眠模式已激活', sub:'所有灯光熄灭，卧室空调开启静音模式，窗帘全部关闭', devices:['🌙 床头灯关','🪟 窗帘关','❄️ 空调静音','💨 加湿器开','⌚ 睡眠监测'] },
    movie: { icon:'🎬', name:'观影模式已激活', sub:'主灯关闭，氛围灯调至暖色，窗帘合上，音箱切换影院音效', devices:['💡 主灯关','🌈 暖色氛围','🪟 窗帘关','📺 电视开','🔊 影院音效'] },
    away: { icon:'🚪', name:'离家模式已激活', sub:'所有灯光电器关闭，门锁上锁，摄像头和传感器全部开启', devices:['🔒 门锁上锁','📹 摄像头开','🔔 传感器开','💧 水浸开','🤖 机器人清扫'] }
  };

  // ========== Render Carousels ==========
  function renderCarousel(roomId) {
    var container = document.getElementById('carousel-' + roomId);
    var devices = roomData[roomId];
    container.innerHTML = '';
    devices.forEach(function(dev, idx) {
      var card = document.createElement('div');
      card.className = 'carousel-card';
      card.style.animationDelay = (idx * 0.05) + 's';
      card.innerHTML = '<span class="card-icon">' + dev.icon + '</span>' +
        '<div class="card-name">' + dev.name + '</div>' +
        '<div class="card-one-liner">' + dev.one + '</div>' +
        '<div class="card-features">' + dev.tags.map(function(t){ return '<span class="card-feat">' + t + '</span>'; }).join('') + '</div>';
      card.onclick = function() { toggleExpand(roomId, idx); };
      container.appendChild(card);
    });
  }

  // ========== Room Tab Switch ==========
  var currentExpand = {};

  window.switchRoom = function(roomId) {
    document.querySelectorAll('.room-tab').forEach(function(t) { t.classList.remove('active'); });
    document.querySelector('.room-tab[data-room="' + roomId + '"]').classList.add('active');
    document.querySelectorAll('.room-panel').forEach(function(p) { p.classList.remove('active'); });
    document.getElementById('panel-' + roomId).classList.add('active');
    // Close any open expand
    document.querySelectorAll('.expand-panel').forEach(function(p) { p.classList.remove('open'); });
    document.querySelectorAll('.carousel-card').forEach(function(c) { c.classList.remove('expanded'); });
    currentExpand = {};
  };

  // ========== Expand Panel ==========
  function toggleExpand(roomId, idx) {
    var panel = document.getElementById('expand-' + roomId);
    var key = roomId + '-' + idx;
    var dev = roomData[roomId][idx];

    if (currentExpand[roomId] === idx) {
      panel.classList.remove('open');
      document.querySelectorAll('#carousel-' + roomId + ' .carousel-card').forEach(function(c) { c.classList.remove('expanded'); });
      delete currentExpand[roomId];
      return;
    }

    document.querySelectorAll('#carousel-' + roomId + ' .carousel-card').forEach(function(c) { c.classList.remove('expanded'); });
    var cards = document.querySelectorAll('#carousel-' + roomId + ' .carousel-card');
    if (cards[idx]) cards[idx].classList.add('expanded');

    document.getElementById('expand-icon-' + roomId).textContent = dev.icon;
    document.getElementById('expand-title-' + roomId).textContent = dev.name;

    // Render device demo
    renderDemo(roomId, dev.name);

    var grid = document.getElementById('expand-grid-' + roomId);
    grid.innerHTML = dev.details.map(function(d) {
      return '<div class="expand-item"><div class="expand-item-title">' + d.t + '</div><div class="expand-item-desc">' + d.d + '</div></div>';
    }).join('');

    panel.classList.add('open');
    currentExpand[roomId] = idx;
  }

  // ========== Device Demo Renderers ==========
  var demoMap = {
    '智能电视':   demoTV,
    '智能主灯':   demoLight,
    '氛围灯带':   demoRGB,
    '客厅空调':   demoAC,
    '电动窗帘':   demoCurtain,
    '扫地机器人': demoRobot,
    '智能音箱':   demoSpeaker,
    '智能床头灯': demoNightLight,
    '卧室空调':   demoSleepAC,
    '遮光窗帘':   demoBlackout,
    '卧室加湿器': demoHumidifier,
    '卧室电视':   demoBedTV,
    '睡眠监测仪': demoSleep,
    '智能冰箱':   demoFridge,
    '智能烤箱':   demoOven,
    '智能洗碗机': demoDishwasher,
    '燃气报警器': demoGasAlarm,
    '智能热水器': demoWaterHeater,
    '智能魔镜':   demoMirror,
    '净水器':     demoFilter,
    '智能门锁':   demoLock,
    '门口摄像头': demoDoorCam,
    '室内摄像头': demoIndoorCam,
    '门窗传感器': demoDoorSensor,
    '水浸传感器': demoWaterSensor
  };

  function renderDemo(roomId, name) {
    var el = document.getElementById('demo-' + roomId);
    var fn = demoMap[name];
    if (fn) {
      el.innerHTML = '<div class="demo-label">演示</div>' + fn();
    } else {
      el.innerHTML = '<div class="demo-fallback">点击下方功能项查看详情</div>';
    }
  }

  // --- TV: screen turns on ---
  function demoTV() {
    return '<svg viewBox="0 0 280 90" width="280" height="90"><rect x="40" y="4" width="200" height="68" rx="6" fill="#1a1a24" stroke="var(--rule)" stroke-width="1.5"/><rect x="44" y="8" width="192" height="60" rx="3" fill="#0a0a14"/><rect x="44" y="8" width="192" height="60" rx="3" fill="var(--accent)" opacity="0" style="animation:demo-pulse 2s ease-in-out infinite"/><text x="140" y="44" text-anchor="middle" fill="var(--accent2)" font-size="11" opacity="0.8" style="animation:demo-pulse 2s ease-in-out infinite">▶ 正在播放</text><rect x="128" y="76" width="24" height="10" rx="3" fill="var(--rule)"/></svg>';
  }

  // --- Light: brightness slider ---
  function demoLight() {
    var s = 'var(--accent)';
    return '<svg viewBox="0 0 280 90" width="280" height="90"><circle cx="60" cy="45" r="18" fill="none" stroke="' + s + '" stroke-width="1.5" opacity="0.3"/><circle cx="60" cy="45" r="8" fill="' + s + '" opacity="0.8" style="animation:demo-pulse 2s ease-in-out infinite"/><line x1="90" y1="45" x2="240" y2="45" stroke="var(--rule)" stroke-width="6" rx="3" stroke-linecap="round"/><line x1="90" y1="45" x2="200" y2="45" stroke="' + s + '" stroke-width="6" stroke-linecap="round" style="animation:demo-dash 2s ease-in-out infinite alternate;stroke-dasharray:150;stroke-dashoffset:0"/><text x="250" y="50" fill="var(--muted)" font-size="10">78%</text></svg>';
  }

  // --- RGB strip: color cycling ---
  function demoRGB() {
    return '<svg viewBox="0 0 280 90" width="280" height="90"><rect x="20" y="30" width="240" height="20" rx="10" fill="url(#rgb-grad)"/><defs><linearGradient id="rgb-grad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#ff4d4d"/><stop offset="25%" stop-color="#ffb020"/><stop offset="50%" stop-color="#7cff6b"/><stop offset="75%" stop-color="#6bb5ff"/><stop offset="100%" stop-color="#c86bff"/></linearGradient></defs><circle cx="140" cy="65" r="6" fill="var(--accent)" style="animation:demo-pulse 1.5s ease-in-out infinite"/><text x="140" y="80" text-anchor="middle" fill="var(--muted)" font-size="9">1600万色</text></svg>';
  }

  // --- AC: temperature gauge ---
  function demoAC() {
    return '<svg viewBox="0 0 280 90" width="280" height="90"><text x="30" y="45" fill="var(--ink)" font-size="28" font-weight="700">26°</text><text x="82" y="42" fill="var(--muted)" font-size="10">℃</text><line x1="100" y1="45" x2="240" y2="45" stroke="var(--rule)" stroke-width="4" rx="2" stroke-linecap="round"/><circle cx="180" cy="45" r="10" fill="var(--accent)" style="animation:demo-pulse 2s ease-in-out infinite"/><text x="260" y="50" fill="var(--accent2)" font-size="10">❄</text><text x="30" y="78" fill="var(--muted)" font-size="10">室外 35° → 室内 26°</text></svg>';
  }

  // --- Curtain: panels slide ---
  function demoCurtain() {
    return '<svg viewBox="0 0 280 90" width="280" height="90"><rect x="20" y="5" width="120" height="70" fill="var(--bg3)" rx="4" stroke="var(--rule)" stroke-width="1"/><rect x="20" y="5" width="50" height="70" rx="4" fill="var(--accent-soft)" style="transition:width 2s;animation:curtain-left 2s ease-in-out infinite alternate"/><rect x="140" y="5" width="120" height="70" fill="var(--bg3)" rx="4" stroke="var(--rule)" stroke-width="1"/><rect x="210" y="5" width="50" height="70" rx="4" fill="var(--accent-soft)" style="animation:curtain-right 2s ease-in-out infinite alternate"/><style>@keyframes curtain-left{0%{width:120px;}100%{width:50px;}}@keyframes curtain-right{0%{width:50px;}100%{width:120px;}}</style><text x="140" y="88" text-anchor="middle" fill="var(--muted)" font-size="10">自动开合</text></svg>';
  }

  // --- Robot: scanning path ---
  function demoRobot() {
    return '<svg viewBox="0 0 280 90" width="280" height="90"><rect x="20" y="15" width="240" height="55" rx="6" fill="none" stroke="var(--rule)" stroke-width="1" stroke-dasharray="4"/><circle r="6" fill="var(--accent)" style="animation:demo-robot-path 3s linear infinite"><animateMotion dur="3s" repeatCount="indefinite" path="M30,30 L250,30 L250,68 L30,68 Z"/></circle><text x="140" y="85" text-anchor="middle" fill="var(--muted)" font-size="10">激光导航 · 规划清扫</text></svg>';
  }

  // --- Speaker: sound waves ---
  function demoSpeaker() {
    return '<svg viewBox="0 0 280 90" width="280" height="90"><rect x="40" y="20" width="8" height="50" rx="4" fill="var(--accent)"/><rect x="55" y="28" width="6" height="34" rx="3" fill="var(--accent)" style="animation:demo-wave 1s ease-in-out infinite;transform-origin:center" opacity="0.8"/><rect x="68" y="22" width="6" height="46" rx="3" fill="var(--accent)" style="animation:demo-wave 1s ease-in-out 0.15s infinite;transform-origin:center" opacity="0.8"/><rect x="81" y="16" width="6" height="58" rx="3" fill="var(--accent)" style="animation:demo-wave 1s ease-in-out 0.3s infinite;transform-origin:center" opacity="0.8"/><rect x="94" y="24" width="6" height="42" rx="3" fill="var(--accent2)" style="animation:demo-wave 0.8s ease-in-out 0.1s infinite;transform-origin:center" opacity="0.8"/><rect x="107" y="18" width="6" height="54" rx="3" fill="var(--accent2)" style="animation:demo-wave 0.8s ease-in-out 0.25s infinite;transform-origin:center" opacity="0.8"/><text x="200" y="50" fill="var(--muted)" font-size="10">全屋语音控制</text></svg>';
  }

  // --- Night light: gradual bright ---
  function demoNightLight() {
    return '<svg viewBox="0 0 280 90" width="280" height="90"><circle cx="80" cy="45" r="20" fill="var(--accent)" opacity="0.2" style="animation:demo-pulse 3s ease-in-out infinite"/><circle cx="80" cy="45" r="12" fill="var(--accent)" opacity="0.5" style="animation:demo-pulse 3s ease-in-out infinite"/><circle cx="80" cy="45" r="6" fill="var(--accent)" opacity="0.9" style="animation:demo-pulse 3s ease-in-out infinite"/><text x="130" y="42" fill="var(--ink)" font-size="12">🌅 渐亮唤醒</text><text x="130" y="58" fill="var(--muted)" font-size="10">模拟日出 15 分钟</text></svg>';
  }

  // --- Sleep AC: temp curve ---
  function demoSleepAC() {
    return '<svg viewBox="0 0 280 90" width="280" height="90"><polyline points="20,65 80,50 140,45 200,42 260,40" fill="none" stroke="var(--accent2)" stroke-width="2"/><circle cx="20" cy="65" r="3" fill="var(--accent2)"/><circle cx="80" cy="50" r="3" fill="var(--accent2)"/><circle cx="140" cy="45" r="3" fill="var(--accent2)"/><circle cx="200" cy="42" r="3" fill="var(--accent2)"/><circle cx="260" cy="40" r="3" fill="var(--accent2)"/><text x="280" y="44" fill="var(--accent2)" font-size="9">26°</text><text x="20" y="82" fill="var(--muted)" font-size="9">22:00</text><text x="248" y="82" fill="var(--muted)" font-size="9">06:00</text></svg>';
  }

  // --- Blackout curtain: full dark ---
  function demoBlackout() {
    return '<svg viewBox="0 0 280 90" width="280" height="90"><rect x="50" y="10" width="180" height="60" rx="6" fill="none" stroke="var(--rule)" stroke-width="1"/><rect x="50" y="10" width="180" height="60" rx="6" fill="#000" style="animation:demo-pulse 3s ease-in-out infinite"/><text x="140" y="45" text-anchor="middle" fill="var(--muted)" font-size="10" opacity="0.5">100% 遮光</text><text x="140" y="85" text-anchor="middle" fill="var(--muted)" font-size="10">配合起床时间自动拉开</text></svg>';
  }

  // --- Humidifier: mist rising ---
  function demoHumidifier() {
    return '<svg viewBox="0 0 280 90" width="280" height="90"><rect x="110" y="50" width="40" height="20" rx="4" fill="var(--bg3)" stroke="var(--rule)" stroke-width="1"/><circle cx="120" cy="40" r="5" fill="var(--accent)" opacity="0.4" style="animation:demo-rise 2s ease-out infinite"/><circle cx="135" cy="32" r="6" fill="var(--accent)" opacity="0.35" style="animation:demo-rise 2s ease-out 0.4s infinite"/><circle cx="148" cy="38" r="5" fill="var(--accent)" opacity="0.3" style="animation:demo-rise 2s ease-out 0.8s infinite"/><circle cx="130" cy="28" r="4" fill="var(--accent)" opacity="0.3" style="animation:demo-rise 1.8s ease-out 1.2s infinite"/><text x="180" y="65" fill="var(--accent2)" font-size="11">55%</text><text x="180" y="80" fill="var(--muted)" font-size="10">目标恒湿</text></svg>';
  }

  // --- Bedroom TV: sleep timer ---
  function demoBedTV() {
    return '<svg viewBox="0 0 280 90" width="280" height="90"><rect x="40" y="4" width="200" height="68" rx="6" fill="#1a1a24" stroke="var(--rule)" stroke-width="1.5"/><rect x="44" y="8" width="192" height="60" rx="3" fill="#0a0a14"/><rect x="44" y="8" width="192" height="60" rx="3" fill="var(--accent)" opacity="0.15" style="animation:demo-blink 3s ease-in-out infinite"/><text x="140" y="44" text-anchor="middle" fill="var(--accent3)" font-size="11" style="animation:demo-blink 3s ease-in-out infinite">⏰ 30分钟后自动关机</text><rect x="128" y="76" width="24" height="10" rx="3" fill="var(--rule)"/></svg>';
  }

  // --- Sleep monitor: heart rate wave ---
  function demoSleep() {
    return '<svg viewBox="0 0 280 90" width="280" height="90"><path d="M0,45 L60,45 L75,45 L82,25 L89,65 L96,45 L110,45 L140,45" fill="none" stroke="var(--accent3)" stroke-width="2" stroke-linecap="round" style="animation:demo-dash 2s linear infinite;stroke-dasharray:200;stroke-dashoffset:0"/><text x="190" y="42" fill="var(--ink)" font-size="12">💓 72 bpm</text><text x="190" y="58" fill="var(--muted)" font-size="10">心率监测 · 睡眠报告</text></svg>';
  }

  // --- Fridge: temp display ---
  function demoFridge() {
    return '<svg viewBox="0 0 280 90" width="280" height="90"><rect x="40" y="5" width="60" height="75" rx="6" fill="var(--bg3)" stroke="var(--rule)" stroke-width="1"/><rect x="44" y="10" width="52" height="30" rx="4" fill="#1a2a2a"/><text x="70" y="30" text-anchor="middle" fill="var(--accent2)" font-size="10">4°C</text><rect x="44" y="44" width="52" height="30" rx="4" fill="#1a2a2a"/><text x="70" y="64" text-anchor="middle" fill="var(--accent2)" font-size="10">-18°C</text><text x="130" y="30" fill="var(--ink)" font-size="11">🥛 牛奶 3天后到期</text><text x="130" y="48" fill="var(--accent4)" font-size="10">⚠ 鸡蛋 明天到期</text><text x="130" y="66" fill="var(--muted)" font-size="10">📱 远程查看库存</text></svg>';
  }

  // --- Oven: temperature rising ---
  function demoOven() {
    return '<svg viewBox="0 0 280 90" width="280" height="90"><rect x="40" y="5" width="60" height="70" rx="6" fill="var(--bg3)" stroke="var(--rule)" stroke-width="1"/><rect x="46" y="12" width="48" height="56" rx="4" fill="#1a1212"/><rect x="46" y="12" width="48" height="56" rx="4" fill="var(--accent3)" opacity="0" style="animation:demo-pulse 2s ease-in-out infinite"/><text x="70" y="48" text-anchor="middle" fill="var(--accent4)" font-size="16" font-weight="700">180°</text><text x="130" y="30" fill="var(--ink)" font-size="11">🔥 预热中...</text><text x="130" y="48" fill="var(--accent2)" font-size="10">烘焙模式 · 40分钟</text><text x="130" y="66" fill="var(--muted)" font-size="10">📱 远程关机</text></svg>';
  }

  // --- Dishwasher: water spray ---
  function demoDishwasher() {
    return '<svg viewBox="0 0 280 90" width="280" height="90"><rect x="40" y="5" width="60" height="70" rx="6" fill="var(--bg3)" stroke="var(--rule)" stroke-width="1"/><rect x="46" y="12" width="48" height="56" rx="4" fill="#1a1a24"/><rect x="46" y="12" width="48" height="56" rx="4" fill="var(--accent2)" opacity="0.08" style="animation:demo-pulse 1.5s ease-in-out infinite"/><text x="70" y="48" text-anchor="middle" fill="var(--accent2)" font-size="11">💧 清洗中</text><text x="130" y="30" fill="var(--ink)" font-size="11">🍽️ 节能模式</text><text x="130" y="48" fill="var(--accent2)" font-size="10">仅用 9L 水</text><text x="130" y="66" fill="var(--muted)" font-size="10">📱 完成通知</text></svg>';
  }

  // --- Gas alarm: alert ---
  function demoGasAlarm() {
    return '<svg viewBox="0 0 280 90" width="280" height="90"><circle cx="70" cy="45" r="22" fill="none" stroke="var(--accent3)" stroke-width="2" style="animation:demo-blink 1s ease-in-out infinite"/><text x="70" y="50" text-anchor="middle" fill="var(--accent3)" font-size="16" style="animation:demo-blink 1s ease-in-out infinite">⚠</text><text x="120" y="30" fill="var(--accent3)" font-size="12" style="animation:demo-blink 1s ease-in-out infinite">燃气泄漏！</text><text x="120" y="50" fill="var(--muted)" font-size="10">自动关闭阀门</text><text x="120" y="66" fill="var(--muted)" font-size="10">📱 手机推送报警</text></svg>';
  }

  // --- Water heater: temperature ---
  function demoWaterHeater() {
    return '<svg viewBox="0 0 280 90" width="280" height="90"><rect x="40" y="5" width="50" height="70" rx="25" fill="var(--bg3)" stroke="var(--rule)" stroke-width="1"/><rect x="30" y="25" width="70" height="40" rx="0" fill="var(--accent)" opacity="0.15" style="animation:demo-fill 2s ease-in-out infinite alternate;height:0;transform-origin:bottom"/><text x="65" y="50" text-anchor="middle" fill="var(--ink)" font-size="14" font-weight="700">42°</text><text x="120" y="30" fill="var(--ink)" font-size="11">🚿 预约加热</text><text x="120" y="48" fill="var(--accent2)" font-size="10">恒温出水</text><text x="120" y="66" fill="var(--muted)" font-size="10">📊 用水统计</text></svg>';
  }

  // --- Mirror: weather ---
  function demoMirror() {
    return '<svg viewBox="0 0 280 90" width="280" height="90"><rect x="40" y="5" width="70" height="70" rx="35" fill="var(--bg3)" stroke="var(--rule)" stroke-width="1.5"/><text x="75" y="48" text-anchor="middle" fill="var(--accent)" font-size="20">🪞</text><text x="140" y="28" fill="var(--ink)" font-size="11">🌤 晴 26° 上海</text><text x="140" y="46" fill="var(--muted)" font-size="10">📅 今天 3 个待办事项</text><text x="140" y="64" fill="var(--muted)" font-size="10">🎤 语音控制其他设备</text></svg>';
  }

  // --- Water filter: droplets ---
  function demoFilter() {
    return '<svg viewBox="0 0 280 90" width="280" height="90"><rect x="40" y="5" width="50" height="70" rx="8" fill="var(--bg3)" stroke="var(--rule)" stroke-width="1"/><circle cx="55" cy="30" r="8" fill="var(--accent)" opacity="0.3" style="animation:demo-pulse 2s ease-in-out infinite"/><circle cx="55" cy="48" r="8" fill="var(--accent)" opacity="0.5" style="animation:demo-pulse 2s ease-in-out 0.5s infinite"/><circle cx="55" cy="66" r="8" fill="var(--accent)" opacity="0.7" style="animation:demo-pulse 2s ease-in-out 1s infinite"/><text x="120" y="28" fill="var(--accent2)" font-size="11">TDS 12</text><text x="120" y="46" fill="var(--muted)" font-size="10">RO反渗透过滤</text><text x="120" y="64" fill="var(--muted)" font-size="10">滤芯寿命 87%</text></svg>';
  }

  // --- Door lock: lock/unlock ---
  function demoLock() {
    return '<svg viewBox="0 0 280 90" width="280" height="90"><rect x="60" y="5" width="40" height="50" rx="8" fill="var(--bg3)" stroke="var(--rule)" stroke-width="1.5"/><circle cx="80" cy="32" r="8" fill="none" stroke="var(--accent2)" stroke-width="2" style="animation:demo-spin 3s ease-in-out infinite;transform-origin:80px 32px"/><text x="80" y="55" text-anchor="middle" fill="var(--accent2)" font-size="8">🔓</text><text x="130" y="28" fill="var(--ink)" font-size="11">指纹解锁 0.3秒</text><text x="130" y="46" fill="var(--muted)" font-size="10">🔑 密码 · NFC · 指纹</text><text x="130" y="64" fill="var(--muted)" font-size="10">📱 开锁实时推送</text></svg>';
  }

  // --- Door camera: detection ---
  function demoDoorCam() {
    return '<svg viewBox="0 0 280 90" width="280" height="90"><rect x="30" y="5" width="70" height="55" rx="8" fill="#0a0a14" stroke="var(--rule)" stroke-width="1"/><rect x="36" y="12" width="58" height="42" rx="4" fill="#111"/><rect x="50" y="20" width="30" height="24" rx="2" fill="var(--accent)" opacity="0.15" style="animation:demo-blink 2s ease-in-out infinite"/><text x="65" y="42" text-anchor="middle" fill="var(--accent3)" font-size="7" style="animation:demo-blink 2s ease-in-out infinite">检测到人</text><text x="65" y="68" text-anchor="middle" fill="var(--muted)" font-size="8">📹 红外夜视</text><text x="140" y="28" fill="var(--ink)" font-size="11">📹 可视门铃</text><text x="140" y="46" fill="var(--accent2)" font-size="10">人形侦测 · 远程对讲</text><text x="140" y="64" fill="var(--muted)" font-size="10">📱 手机远程接听</text></svg>';
  }

  // --- Indoor camera: tracking ---
  function demoIndoorCam() {
    return '<svg viewBox="0 0 280 90" width="280" height="90"><rect x="30" y="5" width="70" height="55" rx="8" fill="#0a0a14" stroke="var(--rule)" stroke-width="1"/><rect x="36" y="12" width="58" height="42" rx="4" fill="#111"/><circle cx="65" cy="28" r="4" fill="var(--accent2)" style="animation:demo-scan 2s ease-in-out infinite"/><text x="65" y="68" text-anchor="middle" fill="var(--muted)" font-size="8">🤖 移动追踪</text><text x="140" y="28" fill="var(--ink)" font-size="11">👀 看护模式</text><text x="140" y="46" fill="var(--accent3)" font-size="10">跌倒检测 · 宠物看护</text><text x="140" y="64" fill="var(--muted)" font-size="10">🔒 隐私模式一键关闭</text></svg>';
  }

  // --- Door sensor: open/close ---
  function demoDoorSensor() {
    return '<svg viewBox="0 0 280 90" width="280" height="90"><rect x="40" y="15" width="80" height="50" rx="4" fill="var(--bg3)" stroke="var(--rule)" stroke-width="1"/><rect x="40" y="15" width="40" height="50" rx="4" fill="var(--accent-soft)" style="animation:demo-sensor-open 2s ease-in-out infinite alternate"/><style>@keyframes demo-sensor-open{0%{width:40px;}100%{width:80px;}}</style><text x="80" y="55" text-anchor="middle" fill="var(--accent3)" font-size="9" style="animation:demo-blink 2s ease-in-out infinite">⚠ 门窗打开</text><text x="150" y="35" fill="var(--ink)" font-size="11">🚪 开合检测</text><text x="150" y="53" fill="var(--accent2)" font-size="10">离家自动布防</text><text x="150" y="71" fill="var(--muted)" font-size="10">📱 异常立即报警</text></svg>';
  }

  // --- Water sensor: leak alert ---
  function demoWaterSensor() {
    return '<svg viewBox="0 0 280 90" width="280" height="90"><circle cx="60" cy="40" r="20" fill="none" stroke="var(--accent2)" stroke-width="1.5" opacity="0.3"/><circle cx="60" cy="40" r="8" fill="var(--accent2)" style="animation:demo-pulse 1.5s ease-in-out infinite"/><text x="60" y="68" text-anchor="middle" fill="var(--accent2)" font-size="9">💧 检测中</text><text x="140" y="25" fill="var(--ink)" font-size="11">💧 漏水检测</text><text x="140" y="43" fill="var(--accent3)" font-size="10">接触水即刻报警</text><text x="140" y="61" fill="var(--muted)" font-size="10">🔗 联动关闭水阀</text></svg>';
  }

  // ========== Scene Animation ==========
  window.playScene = function(sceneId) {
    document.querySelectorAll('.scene-step').forEach(function(s) { s.classList.remove('active'); });
    document.querySelector('.scene-step[data-scene="' + sceneId + '"]').classList.add('active');

    var scene = sceneData[sceneId];
    var content = document.getElementById('scene-content');
    content.style.animation = 'none';
    content.offsetHeight; // reflow
    content.style.animation = 'fadeSlideIn 0.4s ease';

    content.innerHTML =
      '<span class="scene-anim-icon">' + scene.icon + '</span>' +
      '<div class="scene-anim-text">' + scene.name + '</div>' +
      '<div class="scene-anim-sub">' + scene.sub + '</div>' +
      '<div class="scene-anim-devices">' +
        scene.devices.map(function(d) { return '<span class="scene-dev-tag">' + d + '</span>'; }).join('') +
      '</div>';
  };

  // ========== Smooth Scroll ==========
  window.navTo = function(id) {
    var el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // Update nav
    document.querySelectorAll('.nav-link').forEach(function(l) { l.classList.remove('active'); });
    var link = document.querySelector('.nav-link[onclick="navTo(\'' + id + '\')"]');
    if (link) link.classList.add('active');
  };

  // ========== Go to Room (quick jump from floorplan) ==========
  // Switch room first (instant), then scroll to devices section
  window.goToRoom = function(roomId) {
    try {
      switchRoom(roomId);
      // Use double rAF to ensure the DOM update has fully applied and the new
      // panel is in the layout before we measure its position
      requestAnimationFrame(function() {
        requestAnimationFrame(function() {
          navTo('rooms');
          showJumpToast(roomId);
        });
      });
    } catch (e) {
      // Fallback: at least try to scroll, so something happens on tap
      navTo('rooms');
    }
  };

  // ========== Jump Toast (visible feedback so user knows tap worked) ==========
  function showJumpToast(roomId) {
    var nameMap = { living: '客厅', bedroom: '卧室', kitchen: '厨卫', security: '安防' };
    var toast = document.getElementById('jump-toast');
    if (!toast) return;
    toast.textContent = '→ 已跳转到 ' + (nameMap[roomId] || roomId) + ' 设备详情';
    toast.classList.remove('show');
    // Force reflow so the animation re-triggers
    void toast.offsetWidth;
    toast.classList.add('show');
    clearTimeout(showJumpToast._t);
    showJumpToast._t = setTimeout(function() { toast.classList.remove('show'); }, 1800);
  }

  // ========== Bind quick-jump cards with addEventListener (in addition to inline onclick) ==========
  // Some mobile browsers (older iOS Safari, WeChat X5) miss inline onclick in
  // dynamically-injected or wrapped contexts. addEventListener is bulletproof.
  function bindQuickCards() {
    var cards = document.querySelectorAll('.room-quickcard');
    cards.forEach(function(card) {
      var room = card.getAttribute('data-room');
      if (!room) return;
      var handler = function(ev) {
        ev.preventDefault();
        ev.stopPropagation();
        goToRoom(room);
      };
      card.addEventListener('click', handler, { passive: false });
      card.addEventListener('touchend', function(ev) {
        // Some embedded webviews dispatch touchend but swallow click; call directly
        if (ev.cancelable) ev.preventDefault();
        goToRoom(room);
      }, { passive: false });
    });
  }

  // ========== Scroll Reveal ==========
  function initReveal() {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(function(el) {
      observer.observe(el);
    });
  }

  // ========== Nav Active on Scroll ==========
  function initNavScroll() {
    var sections = ['hero','floorplan','rooms','scenes','summary'];
    var links = document.querySelectorAll('.nav-link');
    window.addEventListener('scroll', function() {
      var scrollY = window.scrollY + 100;
      var active = 0;
      sections.forEach(function(id, i) {
        var el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) active = i;
      });
      links.forEach(function(l) { l.classList.remove('active'); });
      if (links[active]) links[active].classList.add('active');
    });
  }

  // ========== Init ==========
  renderCarousel('living');
  renderCarousel('bedroom');
  renderCarousel('kitchen');
  renderCarousel('security');
  initReveal();
  initNavScroll();
  bindQuickCards();
})();