<template>
    <section class="body">
        <div class="body-logo">
            <img src="../assets/img/google-logo.png" alt="">
        </div>
        <div class="body-search">
            <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
            <input id="input-search" type="text">
            <div class="keyboard-img">
                <span ><img  src="tia.png" tia_disable_swap="true" tia_field_name="q" jsname="JyIpdf" data-atf="0" data-frt="0" tia_property="web"></span>
                <span><svg focusable="false" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg"><rect fill="none" height="192" width="192"></rect><g><circle fill="#4285f4" cx="96" cy="104.15" r="28"></circle><path fill="#ea4335" d="M160,72v40.15V136c0,1.69-0.34,3.29-0.82,4.82v0v0c-1.57,4.92-5.43,8.78-10.35,10.35h0v0 c-1.53,0.49-3.13,0.82-4.82,0.82H66l16,16h50h12c4.42,0,8.63-0.9,12.46-2.51c3.83-1.62,7.28-3.96,10.17-6.86 c1.45-1.45,2.76-3.03,3.91-4.74c2.3-3.4,3.96-7.28,4.81-11.44c0.43-2.08,0.65-4.24,0.65-6.45v-12V96.15V84l-6-19l-10.82,2.18 C159.66,68.71,160,70.31,160,72z"></path><path fill="#4285f4" d="M32,72c0-1.69,0.34-3.29,0.82-4.82c1.57-4.92,5.43-8.78,10.35-10.35C44.71,56.34,46.31,56,48,56 h96c1.69,0,3.29,0.34,4.82,0.82c0,0,0,0,0,0L149,45l-17-5l-16-16h-13.44H96h-6.56H76L60,40H48c-17.67,0-32,14.33-32,32v12v20l16,16 V72z"></path><path fill="#34a853" d="M144,40h-12l16.83,16.83c1.23,0.39,2.39,0.93,3.47,1.59c2.16,1.32,3.97,3.13,5.29,5.29 c0.66,1.08,1.2,2.24,1.59,3.47v0L176,84V72C176,54.33,161.67,40,144,40z"></path><path fill="#fbbc04" d="M48,168h39.89l-16-16H48c-8.82,0-16-7.18-16-16v-23.89l-16-16V136C16,153.67,30.33,168,48,168z"></path></g></svg></span>

            </div>
        </div>
        <div class="body-btn">
            <a href="#">Tìm trên google</a>
            <a href="https://www.google.com/doodles">Xem trang đầu tiên tìm được</a>
        </div>
        <div class="body-change-langue">
            <span>Google có các thứ tiêng : 
                <a href="#">English</a>
                <a href="#">Français</a>
                <a href="#">繁體中文</a>
            </span>
        </div>
    </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.body{
        display: grid;
        justify-content: center;
        align-items: center;
        .body-logo{
            position: relative;
            display: flex;
            justify-content: center;
            img{
                object-fit: cover;
                
                display: block;
                min-height: 92px;
                max-height: 92px;
            }
        }//Body logo

        .body-search{
            position: relative;
            display: flex;
            height: 44px;
            background: #202124;
            border: 1px solid #5f6368;
            box-shadow: none;
            border-radius: 24px;
            width: 638px;
            max-width: 584px;
            align-items: center;
            margin: 20px;
            svg{
                width: 24px;
                height: 24px;
                padding: 0 16px ;
                fill: #9aa0a6;

            }
            input{
                background-color:transparent ;
                border: none;
                width: 75%;
            }
            input:focus{
                outline: none;
            }
            .keyboard-img{
                display: flex;
                span:first-child{
                    background: url('//www.gstatic.com/inputtools/images/tia.png') no-repeat center;
                    img{
                        visibility: hidden;
                    }
                }
            }
        }
        .body-btn{
            display: flex;
            justify-content: center;
            a{
                background-color: #303134;
                text-decoration: none;
                border: 1px solid #303134;
                border-radius: 4px;
                color: #e8eaed;
                font-family: arial,sans-serif;
                font-size: 14px;
                margin: 11px 4px;
                padding: 5px 20px;
                line-height: 27px;
                text-align: center;
                cursor: pointer;
                user-select: none;
                &:hover{
                    box-shadow: 0 1px 3px rgba(23,23,23,0.24);
                    background-color: #303134;
                    border: 1px solid #5f6368;
                    color: #e8eaed;
                  } 
            }
        }
        .body-change-langue{
            display: flex;
            justify-content: center;
            font-size: 14px;
            span{
                color: #fff;
                a{
                    text-decoration: none;
                    &:hover{
                        text-decoration: underline;
                    }
                }
            }
        }

    }
</style>