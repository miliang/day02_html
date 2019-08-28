<template>
    <div>
      <el-row class="tac">
        <el-col :span="24">
          <el-menu :router="true" default-active="/index" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
            <el-menu-item index="1">
              <i class="el-icon-menu"></i>
              <span slot="title">首页</span>
            </el-menu-item>
          </el-menu>
          <el-submenu>
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>九寨沟简介</span>
            </template>
            <el-submenu index="1-1">
              <template slot="title">历史</template>
              <el-menu-item index="/index">已入园</el-menu-item>
            </el-submenu>
            <el-submenu index="1-2">
              <template slot="title">气候</template>
              <el-menu-item index="1-2-1">武如意</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-col>
      </el-row>
    </div>
</template>
<style>
  a{
    text-decoration: none;
  }
  a:active{
    color: black;
  }
  a:visited{
    color: black;
  }
</style>
<script>
    export default{
        data(){
            return {
                msg: 'hello vue'
            }
        },
        componenet: {},
      methods:{
        handleOpen(key,keyPath){
          console.log(key,keyPath);
        },
        handleClose(key,keyPath){
                console.log(key,keyPath);
        }
      }
    }
</script>
