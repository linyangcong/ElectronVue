<template>
  <div >
    <!-- Hello ,welcome to my Resume Page! -->
    <div class="Tittle">
      <div class="TittleTint">
        <img src="http://localhost/WebView/Mine/M2.jpg" />
        <span>PERSONAL RESUME</span>
      </div>
      <div>
        <div class="UserMessage" @click="userName?showOperation=!showOperation:showOperation">
          <img src="http://localhost/WebView/User/u3.jpg" />
          <div class="user">
            <div>
                <span>{{userName?userName:'游客'}}</span>
                <span class="loginbtn" v-show="!userName" @click="$router.push('/login')">登录</span>
            </div>
          </div>
        </div>
        <div class="selectOperation" v-show="showOperation">
            <div @click="showOperation = false;dialogVisible=true">退 出</div>
            <div @click="resetPWD">修 改 密 码</div>
        </div>
      </div>
    </div>

<!-- Main -->
<div class="MainContainer">
<div class="ResumeItem" @click="goPersonResume('1')"></div>
</div>



    <!-- 退出-修改密码 -->
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
      <span>您确认退出当前用户吗？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="delSession">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import {Userdetails} from './UserDetail/UserDetail'
export default {
  name: "MainContain",
  data() {
    return {
      userName: "",
      loginName:'',
      dialogVisible: false,
      showOperation:false
    };
  },
  methods: {
    goPersonResume(val){
      console.log(val)
      if(val=='1'){
        Userdetails.map(item=>{
          if(item.loginName==this.loginName){
            sessionStorage.setItem('userDetail',JSON.stringify(item.userDetail))
          }
        })
        this.$router.push('/Template1')
      }
    },
      delSession(){
          sessionStorage.clear();
          if(sessionStorage.getItem('loginName')==''||sessionStorage.getItem('loginName')==null||sessionStorage.getItem('loginName')==undefined){
              this.$message({
                  type:'success',
                  message:'退出成功'
              })
              this.dialogVisible=false
              this.userName=''
          }
      },
      resetPWD(){
          this.$message({
              type:'info',
              message:'暂未开通'
          })
      }

  },
  mounted() {
    this.userName = sessionStorage.getItem("userName");
    this.loginName=sessionStorage.getItem('loginName')
  }
};
</script>

<style>
.Tittle {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: rgb(31, 40, 53);
  padding: 0.2rem;
}
.TittleTint {
  display: flex;
  flex-direction: row;
}
.TittleTint span {
  display: flex;
  align-self: center;
  color: white;
  margin-left: 1rem;
}
.TittleTint img {
  margin-left: 1rem;
  width: 6rem;
  height: 2.8rem;
}
.UserMessage {
  display: flex;
  flex-direction: row;
  margin-right: 1rem;
}
.UserMessage:hover {
  cursor: pointer;
}
.UserMessage img {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  align-items: center;
  align-self: center;
}
.UserMessage .user {
  align-items: center;
  align-self: center;
  /* display:inline-block; */
  color: white;
  margin: 10px;
}
.selectOperation{
    background:#eee;
    position:absolute;
    top:3rem;
    width: 7rem;
    text-align:center;
    /* border:solid 1px #aaa */

}
.selectOperation div{
    padding: 0.5rem;
    font-size: 1rem;
    color: #333
}
.selectOperation div:hover{
    background: #33ccee;
    cursor: pointer;
}
.loginbtn{
    margin-left: 5px;
    border:2px solid #088;
    font-size:10px;
    /* padding:8px; */
    border-radius: 12px;
    padding:5px 10px
}
.MainContainer{
  display: flex;
  flex-direction: row;
  /* justify-content: space-around; */
  /* align-items: center; */
  margin: 2rem;
  padding: 2rem;
  min-height: 50rem;
  background: #ddfcfc
}
.ResumeItem{
  width: 10rem;
  height: 15rem;
  background: url('../assets/components/Template1/Temp1.png');
  background-repeat: no-repeat;
  background-size: 100%
}
.ResumeItem:hover{
  cursor: pointer;
}
</style>