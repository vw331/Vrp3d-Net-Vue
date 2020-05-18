<!--我的交易-->
<template>
    <div id="myTrade">
        <div class="mytrade_menu">
            <div class="mytrade_menu_list">
                <router-link to="/userCenter/trade/summary">交易汇总</router-link>
                <router-link to="/userCenter/trade/sold">已出售</router-link>
                <router-link to="/userCenter/trade/purchased">已购买</router-link>
                <router-link to="/userCenter/trade/recharge">充值</router-link>
                <router-link to="/userCenter/trade/cash">提现</router-link>
                <router-link to="/userCenter/trade/payment">收支</router-link>
            </div>
            <div class="mytrade_toolbar">
                <el-form :inline="true" :model="queryForm" size="mini">
                    <el-form-item>
                        <el-input placeholder="请输入内容" v-model="queryForm.key"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" icon="el-icon-search"></el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "MyTradeIndex",
        components:{
        },
        data(){
            return {
                queryForm: {
                    key: ''
                }
            }
        },
        methods: {

        }
    } 
</script>

<style lang="scss">
    @import 'src/static/font/index';
    #myTrade {
        width: 100%;
        font-family:$fontFamily;

        .mytrade_menu {
            width: 100%;
            height:66px;
            background:rgba(255,255,255,1);
            border-bottom: 1px solid #eeeeee;
            display: flex;
            justify-content: space-between;
            padding: 0 32px;
            box-sizing: border-box;
        }

        .mytrade_menu_list {
            height: 100%;
            width: auto;
            display: flex;
            align-items: center;

            a{
                display: block;
                height: 100%;
                border-bottom: 2px solid transparent;
                font-size:16px;
                font-family: $fontFamily;
                color:#666666;
                line-height: 66px;
                margin-right: 52px;
                cursor: pointer;

                &.router-link-active{
                    border-color: black;
                    color: black;
                }
            }
            

        }
        
        .mytrade_toolbar {
            height: 100%;
            width: auto;
            display: flex;
            align-items: center;

            .el-form-item {
                margin-bottom: 0;
                margin-right: -1px;

                .el-input__inner, .el-button {
                    border-radius: 0;
                }

                .el-button--primary {
                    background: #136BFD;
                    &:hover {
                        background-color: rgba(19, 107, 253, 0.77);
                    }
                }
                .el-button--mini {
                    padding: 5px 10px;
                    font-size: 16px;
                    .el-icon-search {
                        font-weight: bold;
                    }
                }
            }
        }
    }
</style>