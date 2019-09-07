<template>
    <div>
        <Header></Header>
        <div id="page">
    <h1 class="font-h1">全部车型</h1>
    <div>
        <div class="sx">
            <span class="ml-5">筛选</span>
        </div>
        <div class="row car-margin position-relative">
            <div class="d-flex flex-column col-3">
                    <img src="../assets/picture/cars/a3.svg"  class="xh" alt=""/>
                    <img src="../assets/picture/cars/2018.png" class="xhcar"  alt=""/>
            </div>
            <div class=" col-3 p-0">
                <div class="d-flex flex-column mr-2 bg-white">
                    <div class="height-100 pt-4 mx-3"><h6 class="font-weight-bold">奥迪A3 Sportback</h6></div>
                    <div><img src="../assets/picture/cars/2018(1).png" class="w-100" alt=""/></div>
                    <a href="javascript:" class="my-4 mx-3">查看车型信息</a>
                </div>
            </div>
            <div class=" col-3 p-0">
                <div class="d-flex flex-column mr-2 bg-white">
                    <div class="height-100 mx-3 pt-4"><h6 class="font-weight-bold">奥迪A3 Sportback</h6></div>
                    <div><img src="../assets/picture/cars/2018(2).png" class="w-100" alt=""/></div>
                    <a href="javascript:" class="my-4 mx-3">查看车型信息</a>
                </div>
            </div>
            <div class=" col-3 p-0">
                <div class="d-flex flex-column mr-2 bg-white">
                    <div class="height-100 pt-4 mx-3"><h6 class="font-weight-bold">奥迪A3 Sportback</h6></div>
                    <div><img src="../assets/picture/cars/2018(3).png" class="w-100" alt=""/></div>
                    <a href="javascript:" class="my-4 mx-3">查看车型信息</a>
                </div>
            </div>
            <div class=" col-3 p-0 mt-3">
                <div class="d-flex flex-column mr-2 bg-white">
                    <div class="height-100 pt-4 mx-3"><h6 class="font-weight-bold">奥迪A3 Sportback</h6></div>
                    <div><img src="../assets/picture/cars/2018(4).png" class="w-100" alt=""/></div>
                    <a href="javascript:" class="my-4 mx-3">查看车型信息</a>
                </div>
            </div>
            <div class=" col-3 p-0 mt-3">
                <div class="d-flex flex-column mr-2 bg-white">
                    <div class="height-100 pt-4 mx-3"><h6 class="font-weight-bold">奥迪A3 Sportback</h6></div>
                    <div><img src="../assets/picture/cars/2018(5).png" class="w-100" alt=""/></div>
                    <a href="javascript:" class="my-4 mx-3">查看车型信息</a>
                </div>
            </div>
        </div>
    </div>
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
@import url('../assets/css/cars.css');
</style>