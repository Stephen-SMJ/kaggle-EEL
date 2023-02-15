<template>
    <div>
        <el-menu
                :default-active="activeIndex"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
            <el-menu-item index="1" class="first menu"><router-link to="/index" style="text-decoration: none">Home</router-link></el-menu-item>
            <el-menu-item index="2" class="menu"><router-link to="/assessment" style="text-decoration: none">Essay Assessment</router-link></el-menu-item>
            <el-menu-item index="3" class="menu"><router-link to="/about" style="text-decoration: none">About us</router-link></el-menu-item>
        </el-menu>
    </div>

</template>

<script>
    export default {
        name:'navbar',
        data() {
            return {
                activeIndex: '1'
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped>
    .first{
        margin-left: 100px;
    }
    .menu {
        font-size: 16px;
    }
</style>