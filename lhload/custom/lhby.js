const LHADRURL = "https://kh108gm.kkd666.com/lhby/longhuangbuyu.apk"; // 安卓
const LHIOSURL = "itms-services://?action=download-manifest&url=https://kh108gm.kkd666.com/lhby/lhby.plist"; // iOS

// 备用
const LHSPARE = "";
const APPEAR = false;

isWechatBrowser();

isShowSpare();

function isShowSpare() {
    const ua = navigator.userAgent;
    const iOSType = ua.indexOf('iphone') > -1 || ua.indexOf('ipad') > -1 || ua.indexOf('Mac OS X') > -1;
    if (iOSType && APPEAR) {
        $("#lhbyquick").show();
    } else {
        $("#lhbyquick").hide();
    }
}

const $btnDown = $('#download');
$btnDown.click(function () {
    deviceType("");
});

const $btnDownquick = $('#downquick');
$btnDownquick.click(function () {
    deviceType("spare");
});

$('.lhbymask').click(function () {
});

function isWechatBrowser() {
    const ua = window.navigator.userAgent.toLocaleLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger' || ua.match(/ QQ\//i) == " qq\/") {
        $('.lhbymask').show();
        $('.showbg').hide();
    } else {
        $('.lhbymask').hide();
        $('.showbg').show();
    }
}

function deviceType(v) {
    //   alert("正在马不停蹄的处理，请稍等片刻！");
    //   return;
    const u = navigator.userAgent;
    const AdrType = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1 || u.indexOf('android') > -1 || u.indexOf('linux') > -1 || u.indexOf('Windows') > -1;
    const iOSType = u.indexOf('iphone') > -1 || u.indexOf('ipad') > -1 || !!u.match(/AppleWebKit.*Mobile.*/) || u.indexOf('Mac OS X') > -1;
    if (AdrType) {
        window.location.href = LHADRURL;
    } else if (iOSType) {
        //	alert("正在马不停蹄的处理，请稍等片刻！");
        //	return;
        if (v == "spare") {
            window.location.href = LHSPARE;
        } else {
            window.location.href = LHIOSURL;
        }
    }
}