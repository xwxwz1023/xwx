<template>
    <div>
        <Header></Header>
        <div class="d-flex justify-content-center login-padding">
    <div class="m-auto login-width" id="login">
        <h5>我的奥迪账号登录</h5>
        <hr/>
        <div class="d-flex justify-content-between align-items-center">
            <div class="font-14">
                <span>*</span>手机/邮箱
            </div>
            <input type="text"/>
        </div>
        <div class="d-flex justify-content-between align-items-center">
            <div class="font-14">
                <span>*</span>密码
            </div>
            <input type="password"/>
        </div>
        <div class=" mt-3 wjmm">

                <div class="font-14 align-items-center d-flex">
                    <img src="../assets/picture/gou.png" alt=""/>
                    记住密码
                </div>
            <div class="d-flex">
                <div>
                    <a href="javascript:">
                        <span>  > </span> 忘记密码
                    </a>
                </div>
                <div class="ml-3">
                    <a href="javascript:">
                        <span>  > </span> 注册账号
                    </a>
                </div>
            </div>
        </div>
        <div class="login-btn  text-right">
            <a href="javascript:">登录 <img src="../assets/picture/loginjt.png" alt=""/></a>
        </div>
        <hr/>
    </div>

</div>
<div class=" bg-hs" id="audi-list">
        <ul class="d-flex list-unstyled row py-5 mx-5">
            <li class="col-3">
                <ul>
                    <li><a href="javascript:">奥迪车型</a></li>
                    <li><a href="javascript:">查看所有奥迪车型</a></li>
                    <li><a href="javascript:">新车在线展厅</a></li>
                </ul>
            </li>
            <li class="col-3">
                <ul>
                    <li><a href="javascript:">奥迪官方认证二手车</a></li>
                    <li><a href="javascript:">销售服务</a></li>
                    <li><a href="javascript:">官方认证</a></li>
                </ul>
            </li>
            <li class="col-3">
                <ul>
                    <li><a href="javascript:">购车工具</a></li>
                    <li><a href="javascript:">限时购车方案</a></li>
                    <li><a href="javascript:">老用户购车</a></li>
                    <li><a href="javascript:">大用户&VIP</a></li>
                    <li><a href="javascript:">贷款服务</a></li>
                    <li><a href="javascript:">保险服务</a></li>
                    <li><a href="javascript:">延长保修服务</a></li>
                    <li><a href="javascript:">在线购车</a></li>
                </ul>
            </li>
            <li class="col-3">
                <ul>
                    <li><a href="javascript:">售后服务</a></li>
                    <li><a href="javascript:">奥迪卓越服务</a></li>
                    <li><a href="javascript:">三包保障服务</a></li>
                    <li><a href="javascript:">维修保养服务</a></li>
                    <li><a href="javascript:">24小时道路救援</a></li>
                    <li><a href="javascript:">原厂备件附件</a></li>
                    <li><a href="javascript:">奥迪移动出行</a></li>
                </ul>
            </li>
            <li class="col-3 mt-5">
                <ul>
                    <li><a href="javascript:">创新科技</a></li>
                    <li><a href="javascript:">奥迪概念车</a></li>
                    <li><a href="javascript:">奥迪设计</a></li>
                    <li><a href="javascript:">奥迪quattro</a></li>
                    <li><a href="javascript:">奥迪驾驶技术</a></li>
                    <li><a href="javascript:">奥迪coonnect互联科技</a></li>
                </ul>
            </li>
            <li class="col-3 mt-5">
                <ul>
                    <li><a href="javascript:">奥迪品牌</a></li>
                    <li><a href="javascript:">奥迪新闻</a></li>
                    <li><a href="javascript:">奥迪体验活动</a></li>
                    <li><a href="javascript:">奥迪车主俱乐部</a></li>
                    <li><a href="javascript:">关于奥迪</a></li>
                    <li><a href="javascript:">责任与贡献</a></li>
                    <li><a href="javascript:">经销商招募</a></li>
                </ul>
            </li>
            <li class="col-3 mt-5">
                <ul>
                    <li><a href="javascript:">联系奥迪</a></li>
                    <li><a href="javascript:">联系我们</a></li>
                    <li><a href="javascript:">预约试驾</a></li>
                    <li><a href="javascript:">联系经销商</a></li>
                    <li><a href="javascript:">索取产品手册</a></li>
                    <li><a href="javascript:">订阅奥迪新闻专递</a></li>
                    <li><a href="javascript:">咨询/投诉/建议</a></li>
                </ul>
            </li>
            <li class="col-3 mt-5">
                <ul>
                    <li><a href="javascript:">相关网站链接</a></li>
                    <li><a href="javascript:">奥迪全球</a></li>
                    <li><a href="javascript:">一汽大众</a></li>
                </ul>
            </li>
        </ul>
</div>
        <Footer></Footer>
    </div>
</template>
<script>
import Header from '../components/head.vue'
import Footer from '../components/footer.vue'
export default {
    data() {
        return {
            
        }
    },
    components:{
        Header,
        Footer
    }
}
</script>
<style  scoped>
@import url('../assets/css/login.css');
</style>