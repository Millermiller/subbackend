<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-3">
            <form class="box">
              <b-loading :active="isLoading" :can-cancel="true"></b-loading>
              <small v-if="error" style="color:#ff4949">
                {{ error }}
              </small>
              <b-field
                label="Login"
                :type="{'is-danger': loginerror}"
                :message="loginerror">
                <b-input
                  v-model="form.login"
                  placeholder="Login"
                  maxlength="30"
                ></b-input>
              </b-field>

              <b-field
                label="Password"
                :type="{'is-danger': passerror}"
                :message="passerror">
                <b-input
                  v-model="form.password"
                  type="password"
                  placeholder="Password"
                  auto-complete="on"
                  password-reveal
                >
                </b-input>
              </b-field>

              <b-button type="is-success is-light" @click="submit()">login</b-button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import Vue from 'vue'
import ILoginForm from '@/Scandinaver/Core/Domain/Contract/ILoginForm'
import { LoginService } from '@/Scandinaver/Core/Application/login.service'

@Component({
  name: 'Login',
  components: {},
})
export default class Login extends Vue {
  isLoading: boolean = false

  form: ILoginForm = {
    login: '',
    password: '',
  }

  error: string = ''
  loginerror: string = ''
  passerror: string = ''
  loading: boolean = false

  submit() {
    this.isLoading = true
    LoginService.login(this.form)
      .then(() => this.$router.push('/'))
      .catch((error: any) => {
        if (error.errors) {
          this.loginerror = error.errors.login[0] || ''
          this.passerror = error.errors.password[0] || ''
          this.error = ''
        }
        else {
          this.error = error
          this.loginerror = ''
          this.passerror = ''
        }

        this.isLoading = false
      })
  }
}
</script>

<style lang="scss">
.footer {
  margin-left: 180px;

  .social a {
    border-bottom: none !important;
  }

  .fa.fa-heart {
    color: red;
  }
}
</style>
