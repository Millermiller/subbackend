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
              <b-field label="Login" :type="{ 'is-danger': loginerror }" :message="loginerror">
                <b-input v-model="form.username" placeholder="Login" maxlength="30"></b-input>
              </b-field>

              <b-field label="Password" :type="{ 'is-danger': passerror }" :message="passerror">
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
import ILoginForm from '@/app/Core/Domain/Contract/ILoginForm'
import { LoginService } from '@/app/Core/Application/login.service'
import { permissions } from '@/permissions/permission.type'

@Component({
  name: 'Login',
  components: {},
})
export default class Login extends Vue {
  private isLoading: boolean = false

  private form: ILoginForm = {
    username: '',
    password: '',
  }

  public error: string = ''
  public loginerror: string = ''
  public passerror: string = ''

  public submit(): void {
    this.isLoading = true
    LoginService.login(this.form)
      .then(() => {
        if (this.$ability.can(permissions.ACCESS_ADMIN_PAGE)) {
          this.$router.push('/')
        } else {
          this.loginerror = 'FORBIDDEN'
          LoginService.logout()
          this.isLoading = false
        }
      })
      .catch((error: any) => {
        if (error.errors) {
          this.loginerror = error.errors.login[0] || ''
          this.passerror = error.errors.password[0] || ''
          this.error = ''
        } else {
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
