<template>
  <div class="loginBox">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span class="loginTitle">登 陆</span>
        <div>
          <span class="loginTitleEn">Login Page</span>
        </div>
        <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
      </div>
      <div class="loginContain">
        <el-form ref="login" :model="login" :rules="rules">
          <el-form-item prop="loginName" class="loginItem">
        <el-input
            v-model="login.loginName"
            prefix-icon="el-icon-user"
            placeholder="请输入用户名"
          ></el-input>
          </el-form-item>
          <el-form-item prop="passWord"  class="loginItem">
          <el-input
            :type="EyeOpen?'':'password'"
            v-model="login.passWord"
            placeholder="请输入密码"
          >
            <!-- prefix-icon='el-icon-lock'  -->
            <i slot="prefix" class="el-icon-lock icon"></i>
            <img
              slot="suffix"
              @click="ChangePWDShow"
              v-show="!EyeOpen"
              src="../assets/login/eye.png"
              class="iconEye"
            />
            <img
              slot="suffix"
              @click="ChangePWDShow"
              v-show="EyeOpen"
              src="../assets/login/openEye.png"
              class="iconEye"
            />
          </el-input>
          </el-form-item>
        </el-form>
        <el-Button class="loginItem" type="primary" @click="loginForm">提 交</el-Button>
        <div class="operation">
          <span @click="forgetPWD">忘记密码？</span>
          <span @click="resetPWD">重置密码？</span>
        </div>
      </div>
    </el-card>
    <div class="loginBottom">个人简历模版使用，本网站不用于商业使用，如应用本网站，请标明来处！感谢您的配合</div>
  </div>
</template>

<script>
import { Users } from "../components/UserDetail/LoginUser";
export default {
  name: "Login",
  data() {
    return {
      login: {
        loginName: "19925956050",
        passWord: "123"
      },
      EyeOpen: false,
      rules: {
        loginName: [
          { required: true, message: "用户名不能为空", trigger: "blur" },
          {
            min: 3,
            max: 20,
            message: "用户名长度在3-20个字符",
            trigger: "blur"
          }
        ],
        passWord: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          {
            min: 3,
            max: 18,
            message: "用户名长度在3-18个字符",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    loginForm() {
      if (this.login.loginName != "" && this.login.passWord != "") {
        for (let i = 0; i < Users.length; i++) {
          if (
            this.login.loginName == Users[i].loginName &&
            this.login.passWord == Users[i].password
          ) {
            console.log("密码帐号正确");
            sessionStorage.setItem('userName',Users[i].name)
            sessionStorage.setItem('loginName',this.login.loginName)
            sessionStorage.setItem('passWord',this.login.passWord)
            this.$router.push('/Main')
          } else {
            console.log("密码帐号错误");
            // this.$message({
            //   type: "error",
            //   message: "帐号或密码错误"
            // });
          }
        }
      }
    },
    ChangePWDShow() {
      this.EyeOpen = !this.EyeOpen;
    },
    forgetPWD() {
      this.$message({
        type: "info",
        message: "忘记密码暂未开通"
      });
    },
    resetPWD() {
      this.$message({
        type: "info",
        message: "重置密码暂未开通"
      });
    }
  },
  mounted() {}
};
</script>

<style scoped>
.loginBox {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  justify-content: space-around;
  height: 100%;
  width: 100%;
  background: url("../assets/loginbg.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.box-card {
  margin-top: 4rem;
  margin-left: 52rem;
  width: 26rem;
  /* height: 20rem; */
  background: rgba(255, 255, 255, 0);
}
.box-card:hover {
  background: rgba(255, 255, 255, 1);
}
.clearfix {
  text-align: center;
}
.clearfix .loginTitle {
  font-size: 1.8rem;
  color: #666;
}
.clearfix .loginTitleEn {
  font-size: 0.8rem;
  color: #00aaaa;
}
.loginContain {
  display: flex;
  flex-direction: column;
  /* justify-content: space-around */
}
.loginContain .loginItem {
  margin-bottom: 1.5rem;
}
.operation {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.operation span {
  font-size: 0.8rem;
  color: #11b1ef;
  cursor: pointer;
}
.operation span:hover {
  text-decoration: underline;
}
.loginBottom {
  /* position: absolute; */
  font-size: 0.5rem;
  color: #fff;
  margin-top: 8rem;
}
/* .icon{
    display: flex !important;
} */
.el-icon-lock {
  /* align-self: center */
  margin-top: 100%;
}
.iconEye {
  margin-top: 50%;
  margin-right: 0.5rem;
  width: 1rem;
  height: 1rem;
  cursor: pointer;
}
</style>