<template>
    <footer>
        <div class="ft-1">
            <p>Việt Nam</p>
        </div>
        <div class="ft-2">
            <div class="ft-2-left">
                <a href="#">Giới Thiệu</a>
                <a href="#">Quảng Cáo</a>
                <a href="#">Doanh Nghiệp</a>
                <a href="#">Cách Hoạt Động Của Tìm Kiếm</a>
            </div>
            <div class="ft-2-right">
                <a href="#">Quyền Riêng Tư</a>
                <a href="#">Điều Khoản</a>
                <div class="menu-setting">
                    <button>Cài Đặt</button>
                    <div class="menu-setting-content">
                        <ul>
                            <li><a href="#">Cài đặt tìm kiếm</a></li>
                            <li><a href="#">Tìm kiếm nâng cao</a></li>
                            <li><a href="#">Dữ liệu của bạn trong tìm kiếm</a></li>
                            <li><a href="#">Nhật ký tìm kiếm</a></li>
                            <li><a href="#">Trợ giúp tìm kiếm</a></li>
                            <li><a href="#">Gửi phản hồi</a></li>
                            <li><button>Giao diện tối:</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>

</script>

<style lang="scss" scoped>
    footer{
        position: absolute;
        background-color:#171717;
        bottom: 0;
        width: 100%;
        right: 0;
        left: 0;
        .ft-1{
            padding: 0 30px;
            border-bottom: 1px solid #3c4043;
            font-size: 15px;
            color: #9aa0a6;
        }
        .ft-2{
            display: flex;
            justify-content: space-between;
            padding: 0 20px;
            position: relative;
            .ft-2-left{
                padding: 15px 0;
                a{
                    color: #9aa0a6;
                    text-decoration: none;
                    padding: 15px;
                    font-size: 14px;
                }
            }
            .ft-2-right{
                //position: relative;
                display: flex;
                align-items: center;
                a{
                    color: #9aa0a6;
                    text-decoration: none;
                    padding: 15px;
                    font-size: 14px;
                }
                .menu-setting{
                    .menu-setting-content{
                        position: absolute;
                        
                        bottom: 49px;
                        right: 0;
                        background-color: black;
                        ul{
                            list-style: none;
                        }
                    }
                }
            }
        }   
    }
</style>