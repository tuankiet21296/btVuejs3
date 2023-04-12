<script setup>

</script>

<template>
  <header class="nav">
        <div class="nav-left">
            <a href="#">Gmail</a>
            <a href="#">Hình Ảnh</a>
        </div>
        <div class="nav-right">
            <div class="nav-right-menu">
                <a>
                    <svg className="gb_Be" focusable="false" viewBox="0 0 24 24">
                        <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
                      </svg>
                </a>
            </div>
            <div class="nav-right-user">
                <button>B</button>
             </div>

        </div>
    </header>
</template>

<style lang="scss" scoped>
    .nav{
        display: flex;
        justify-content: flex-end;
        padding: 20px;
        .nav-left{
            padding: 6px;
            padding-top: 12px;
            font-size: 13px;
            a{
                color: #fff;
                text-decoration: none;
            }
        }
        .nav-right{
            display: flex;
            .nav-right-menu{
                padding: 6px;
                cursor: pointer;
                a{
                    color: #fff;
                    svg{
                        width: 30px;
                        height: 30px;
                        fill: #fff;
                    }
                }
            }
            .nav-right-user{
                padding: 6px;
                button{
                    color: #fff;
                    background-color: green;
                    border: none;
                    border-radius: 50%;
                    width: 30px;
                    height: 30px;
                    cursor: pointer;
                }
            }
        }
    }

</style>
