(function() {
  'use strict';

  // Device state
  var devices = {
    light: { on: true, value: 80 },
    ambient: { on: true, value: 40 },
    ac: { on: true, value: 26 },
    curtain: { on: false, value: 0 },
    lock: { on: true },
    camera: { on: true },
    robot: { on: false },
    humidifier: { on: true, value: 60 }
  };

  var sceneConfigs = {
    home: {
      light: { on: true, value: 90 },
      ambient: { on: true, value: 60 },
      ac: { on: true, value: 26 },
      curtain: { on: true, value: 100 },
      lock: { on: true },
      camera: { on: true },
      robot: { on: false },
      humidifier: { on: true, value: 55 }
    },
    away: {
      light: { on: false, value: 0 },
      ambient: { on: false, value: 0 },
      ac: { on: false, value: 26 },
      curtain: { on: false, value: 0 },
      lock: { on: true },
      camera: { on: true },
      robot: { on: true },
      humidifier: { on: false, value: 60 }
    },
    sleep: {
      light: { on: false, value: 0 },
      ambient: { on: true, value: 15 },
      ac: { on: true, value: 27 },
      curtain: { on: false, value: 0 },
      lock: { on: true },
      camera: { on: true },
      robot: { on: false },
      humidifier: { on: true, value: 65 }
    },
    movie: {
      light: { on: false, value: 0 },
      ambient: { on: true, value: 25 },
      ac: { on: true, value: 25 },
      curtain: { on: false, value: 0 },
      lock: { on: true },
      camera: { on: true },
      robot: { on: false },
      humidifier: { on: false, value: 60 }
    }
  };

  // Clock
  function updateClock() {
    var now = new Date();
    var h = String(now.getHours()).padStart(2, '0');
    var m = String(now.getMinutes()).padStart(2, '0');
    document.getElementById('clock').textContent = h + ':' + m;

    var days = ['日','一','二','三','四','五','六'];
    var dateStr = now.getFullYear() + '年' + (now.getMonth()+1) + '月' + now.getDate() + '日 星期' + days[now.getDay()];
    document.getElementById('date').textContent = dateStr;
  }

  // Activity log
  function addActivity(text) {
    var list = document.getElementById('activity-list');
    var item = document.createElement('div');
    item.className = 'activity-item';
    var now = new Date();
    var time = String(now.getHours()).padStart(2, '0') + ':' + String(now.getMinutes()).padStart(2, '0');
    item.innerHTML = '<span class="activity-time">' + time + '</span><span class="activity-text">' + text + '</span>';
    list.insertBefore(item, list.firstChild);
    while (list.children.length > 8) {
      list.removeChild(list.lastChild);
    }
  }

  // Toggle device
  window.toggleDevice = function(id) {
    var dev = devices[id];
    dev.on = !dev.on;
    renderDevice(id);
    var names = {
      light: '智能主灯', ambient: '氛围灯带', ac: '客厅空调',
      curtain: '智能窗帘', lock: '智能门锁', camera: '门口摄像头',
      robot: '扫地机器人', humidifier: '智能加湿器'
    };
    var state = dev.on ? '已开启' : '已关闭';
    if (id === 'lock') state = dev.on ? '已上锁' : '已解锁';
    if (id === 'robot') state = dev.on ? '开始清扫' : '已暂停';
    addActivity(names[id] + ' <span>' + state + '</span>');
  };

  // Update slider
  window.updateSlider = function(id, value) {
    devices[id].value = parseInt(value);
    if (!devices[id].on) {
      devices[id].on = true;
    }
    renderDevice(id);
  };

  // Render device card
  function renderDevice(id) {
    var dev = devices[id];
    var card = document.getElementById('card-' + id);
    var toggle = document.getElementById('toggle-' + id);
    var status = document.getElementById('status-' + id);

    if (dev.on) {
      card.classList.add('on');
      toggle.classList.add('on');
    } else {
      card.classList.remove('on');
      toggle.classList.remove('on');
    }

    // Status text
    switch(id) {
      case 'light':
        status.textContent = dev.on ? '已开启 · 亮度 ' + dev.value + '%' : '已关闭';
        document.getElementById('slider-light').value = dev.value;
        break;
      case 'ambient':
        var tempLabel = dev.value < 30 ? '暖光' : dev.value < 70 ? '自然光' : '冷光';
        status.textContent = dev.on ? '已开启 · ' + tempLabel : '已关闭';
        document.getElementById('slider-ambient').value = dev.value;
        break;
      case 'ac':
        status.textContent = dev.on ? '制冷中 · ' + dev.value + '°C' : '已关闭';
        document.getElementById('slider-ac').value = dev.value;
        break;
      case 'curtain':
        status.textContent = dev.on ? '已开启 ' + dev.value + '%' : '已关闭';
        document.getElementById('curtain-bar').style.width = dev.value + '%';
        document.getElementById('curtain-label').textContent = dev.on ? '开启 ' + dev.value + '%' : '已关闭';
        break;
      case 'lock':
        status.textContent = dev.on ? '已上锁' : '未上锁';
        var ind = document.getElementById('lock-indicator');
        if (dev.on) {
          ind.className = 'lock-status locked';
          ind.innerHTML = '<span>🔐</span> 门已安全上锁';
        } else {
          ind.className = 'lock-status unlocked';
          ind.innerHTML = '<span>🔓</span> 门未上锁';
        }
        break;
      case 'camera':
        status.textContent = dev.on ? '监控中' : '已休眠';
        var badge = card.querySelector('.camera-live-badge');
        if (badge) badge.style.display = dev.on ? 'flex' : 'none';
        break;
      case 'robot':
        status.textContent = dev.on ? '清扫中' : '待机中';
        var rInd = document.getElementById('robot-indicator');
        var rText = document.getElementById('robot-text');
        if (dev.on) {
          rInd.classList.add('active');
          rText.textContent = '正在清扫客厅';
        } else {
          rInd.classList.remove('active');
          rText.textContent = '等待指令';
        }
        break;
      case 'humidifier':
        status.textContent = dev.on ? '运行中 · 目标' + dev.value + '%' : '已关闭';
        document.getElementById('slider-humidifier').value = dev.value;
        break;
    }
  }

  // Apply scene
  window.applyScene = function(scene) {
    var config = sceneConfigs[scene];
    if (!config) return;

    // Update active button
    document.querySelectorAll('.scene-btn').forEach(function(btn) {
      btn.classList.remove('active');
    });
    document.querySelector('.scene-btn[data-scene="' + scene + '"]').classList.add('active');

    // Apply config
    Object.keys(config).forEach(function(id) {
      devices[id].on = config[id].on;
      if (config[id].value !== undefined) {
        devices[id].value = config[id].value;
      }
      renderDevice(id);
    });

    var sceneNames = { home: '回家模式', away: '离家模式', sleep: '睡眠模式', movie: '观影模式' };
    addActivity('已切换至 <span>' + sceneNames[scene] + '</span>');
  };

  // Simulate environment changes
  function simulateEnv() {
    var temp = 24 + Math.floor(Math.random() * 4);
    var hum = 50 + Math.floor(Math.random() * 15);
    var pm = 20 + Math.floor(Math.random() * 30);
    var power = (0.8 + Math.random() * 1.5).toFixed(1);
    document.getElementById('env-temp').textContent = temp + '°C';
    document.getElementById('env-humidity').textContent = hum + '%';
    document.getElementById('env-pm').textContent = pm;
    document.getElementById('env-power').textContent = power + 'kW';
  }

  // Init
  updateClock();
  setInterval(updateClock, 1000);
  setInterval(simulateEnv, 10000);
  simulateEnv();

  // Initial render
  Object.keys(devices).forEach(renderDevice);
})();