<template>
  <div class="login-container">
    <el-form ref="form" :model="form" label-width="80px">
      <div class="title">Please Login</div>
      <el-form-item>
        <span class="form-item-icon">
          <i class="fa fa-user"></i>
        </span>
        <el-input v-model="form.username" :value="form.username" placeholder="username"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <span class="form-item-icon">
          <i class="fa fa-lock"></i>
        </span>
        <el-input :type="passwordType" v-model="form.password" placeholder="password" auto-complete="off"></el-input>
        <span class="form-item-icon show-password" @click="showPassword">
          <i class="fa fa-eye"></i>
        </span>
      </el-form-item>
      <el-button type="primary" @click='login'>Log In</el-button>
      <div class="tip">
        <div class="tip-content">Username: leecason</br>Password: any</div>
      </div>
    </el-form>
  </div>
</template>

<script type="javascript">
  import { Loading } from 'element-ui';

  export default {
    name: 'Login',
    data() {
      return {
        form: {
          username: 'leecason',
          password: '',
        },
        passwordType: 'password'
      }
    },
    methods: {
      showPassword() {
        if(this.passwordType === 'password') {
          this.passwordType = ''
        } else {
          this.passwordType = 'password'
        }
      },
      login() {
        if(this.form.username !== 'leecason') {
          return;
        }

        // request success
        var loadingInstance = Loading.service({
          text: 'loading...'
        })

        setTimeout(() => {
          setTimeout(() => {
            var expire_days = 1000 * 60 * 60 * 24 * 15;
            this.setCookie('session', 'lijiaxunOuO', expire_days);
          }, 3000)

          this.$nextTick(() => {
            loadingInstance.close();
            this.$router.push('/');
          });
        }, 1500);
      }
    }
  }
</script>
