exports.install = function (Vue, options) { 
    let localHost = window.location.host;
    let apiPath = '';
    let linkHref = '';

    //签吧全局变量
    Vue.prototype.cloudyState = false;
    //神州云全局变量
    // Vue.prototype.cloudyState = true;

    if(localHost == 'localhost:8085' || localHost == '192.168.22.212:8085') { //本地环境
        apiPath = "/api/";  
        linkHref = 'http://localhost:8080/';
    }else {
        apiPath = "/";                  //生产环境 
        linkHref = '/';
    }

    Vue.prototype.linkHref = linkHref;
    Vue.prototype.apiPath = apiPath;

    /**get请求 */
    Vue.prototype.httpGet=function(url,data,success){
        this.$http.get(apiPath+url+"?data="+new Date().getTime(),
            {
                params:data,
                headers: {'X-Requested-With':'XMLHttpRequest'}
            }).then(success).catch(function(err){console.log(err)})
    };

    /**post请求 */
    Vue.prototype.httpPost=function(url,data,success){
        this.$http({
            method:"POST",
            url:apiPath + url,
            data:data,
            headers: {'X-Requested-With': 'XMLHttpRequest'},
        }).then(success).catch(function(err){console.log(err)})
    };
    /*公共模态框*/
    Vue.prototype.modelCommonTip=function(msg,time,topClass){
        let Time = arguments[1] || 1500;
        let CLASS = arguments[2] || '';
        this.$store.dispatch('changeModel',{
            state:true,
            context:msg,
            topClass:CLASS
        })
        setTimeout(()=>{
            this.$store.dispatch('changeModel',{
                state:false,
                context:'',
                topClass:''
            })
        },Time)
    }
    /*公共弹框*/
    Vue.prototype.alertCommonTip=function(msg){
        if(msg == "login.timeout"){
            msg = "用户登录已过期";
        }
        if(msg == "permission.error"){
            msg = "没有权限操作";
        }
        if(msg == "param.error"){
            msg = "提交的参数错误，无法进行操作";
        }
        if(msg == "not.allow"){
            msg = "不允许操作";
        }
        if(msg == "not.allow.record.existed"){
            msg = "这个标识记录已经存在，不允许再添加";
        }
        if(msg == 'fail'){
            msg = "操作失败";
        }
        if(msg == 'not.exist'){
            msg = "数据不存在";
        }
        if(msg == 'error'){
            msg="服务器异常";
        }
        if(msg == 'invalid.data'){
            msg=" 无法识别数据";
        }
        if(msg == 'exist.collegue'){
            msg="该手机号码为同事，不能添加为联系人";
        }
        if(msg == 'same.contact'){
            msg="已添加过此手机号码的联系人";
        }
        if(msg == 'Exist.Company.Partners'){
            msg = "已添加过此合作伙伴";
        }
        /*文档列表的提示 */
        if(msg == 'LOCKED'){
            msg="该文档其他用户正在签署，请等候"
        }
        if(msg == 'NO_TURN'){
            msg="未轮到你签署哦"
        }
        if(msg == 'NO_RIGHT'){
            msg="对不起，您没有签署该文档的权限"
        }
        if(msg == 'NO_VIEW_RIGHT'){
            msg="对不起，您没有查看文档的权限"
        }
        if(msg == 'OVERDUE'){
            msg="对不起，文档已过期"
        }
        this.showAlertData = {
            title:'温馨提示',
            showAlert:true,
            context:msg,
            autoClose:true
        }
    };

    /* 判断当前用户登录信息是否已过期 */
    Vue.prototype.getLoginData=function(name){
       let That = Vue;
        Vue.prototype.httpGet('cus/account/getCurAccount',{},function(response){
          let result = response.data;
          let Link = null;
          if(Vue.prototype.cloudyState){
              Link = 'https://www.bigfintax.com/login.jsp'
          }else{
              Link = Vue.prototype.linkHref+'logout'
          }
          if(!result.meta.success){
                Vue.prototype.httpGet('logoutWithoutPage',{},(response)=>{})
                setTimeout(function(){
                    window.location.href=Link;
                },300)
                return false;
          }else{
              //console.log("已登录")
                if(result.data.accType != 0){
                    if(name == 'statistics_detail' || name == 'statistics_count' || name== 'log_operation'){   
                        Vue.prototype.httpGet('logoutWithoutPage',{},(response)=>{})
                        setTimeout(function(){
                            window.location.href=Link;
                        },300)
                        return false;
                    }
                }
            }
          
        })
    }

    /* 设置定时器判断用户是否登录中 */
    Vue.prototype.TimerLogin = null;

    /**获取站内未读信息 */
    Vue.prototype.countUnreadMessage = function(store){
        this.httpGet(this.URL.countUnreadMessage,{},(response)=>{
            var result = response.data;
            if(result.meta.success){
                store.dispatch("changeCountLetter",result.data);
            }
        })
    }
    /* 数组包含对象去重 */
    Vue.prototype.unique3 = function(arr,field) {   //field  以对象中的什么字段去重
        var hash = {};
        arr = arr.reduce(function(item, next) {
            hash[next[field]] ? '' : hash[next[field]] = true && item.push(next);
            return item
        }, [])
        return arr;
    }
    /*数组不包含对象去重*/
    Vue.prototype.unique1 = function(arr){
        var res = [];
        var json = {};
        for(var i = 0; i < arr.length; i++){
            if(!json[arr[i]]){
            res.push(arr[i]);
            json[arr[i]] = 1;
            }
        }
        return res;
    }
    /*
    * 获取当前时间和一个月
    */
    Vue.prototype.getDataFn = function(n){ //n为1表示一周，为30表示一个月
        var nowdate = new Date();
        var Y = nowdate.getFullYear();
        var M = (nowdate.getMonth()+1) < 10 ? "0"+ (nowdate.getMonth()+1) : (nowdate.getMonth()+1);
        var D = nowdate.getDate();
        var currentdate = Y+'-'+M+'-'+D;
        // nowdate.setMonth(nowdate.getMonth()-1);
    
        nowdate.setDate(nowdate.getDate() - n);
        var y = nowdate.getFullYear();
        var m = (nowdate.getMonth()+1) < 10 ? "0"+ (nowdate.getMonth()+1) : (nowdate.getMonth()+1);
        var d = nowdate.getDate();
        var formatwdate = y+'-'+m+'-'+d;        
        return {
            "formatwdate":formatwdate,
            "currentdate":currentdate
        }
    }

    /*获取url的参数值 */
    Vue.prototype.getUrlPara= function(str,_url){
        var reg = new RegExp("(^|&)" + str + "=([^&]*)(&|$)", "i");
        var hrefIndex = window.location.href.indexOf('?');
        //var search = _url ? _url.split('?')[1] : window.location.search.substr(1);
        var search = _url ? _url.split('?')[1] :  window.location.href.substr(hrefIndex+1);
        var par = search.match(reg);
        var str = par ? decodeURIComponent(par[2]) : '';
        return str;
    }
    /*输入框验证 */
    Vue.prototype.validatePlugin = function(obj){
        var _input = obj.find('input');
        for(var i = 0; i<_input.length;i++){
            var _inputName = $(_input[i]).attr('name');
            var _value = $(_input[i]).val();
            switch (_inputName){
                case 'username':
                    if(this.validateQb.isEmpty(_value)){
                        // this.alertCommonTip("用户名不能为空");
                        this.modelCommonTip('用户名不能为空');
                        return false;
                    }
                    break;
                case 'phone':
                    if(this.validateQb.isEmpty(_value)){
                        // this.alertCommonTip("手机号码不能为空");
                        this.modelCommonTip('手机号码不能为空');
                        return false;
                    }
                    if(!this.validateQb.isPhone(_value)){
                        // this.alertCommonTip("手机号码格式不正确");
                        this.modelCommonTip('手机号码格式不正确');
                        return false;
                    }
                    break;
                case 'email':
                    if(this.validateQb.isEmpty(_value)){
                        // this.alertCommonTip("邮箱不能为空");
                        this.modelCommonTip('邮箱不能为空');
                        return false;
                    }
                    if(!this.validateQb.isEmail(_value)){
                        // this.alertCommonTip("邮箱码格式不正确");
                        this.modelCommonTip('邮箱格式不正确');
                        return false;
                    }
                    break;
                default:
                    break;
            }
        }
        return true;
    }
}
