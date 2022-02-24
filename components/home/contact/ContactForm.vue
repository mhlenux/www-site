<template>
  <form
    id="contact-form"
    name="contact-form"
    data-netlify="true"
    data-netlify-honeypot="verify-field"
    @submit.prevent="handleSubmit"
  >
    <input type="hidden" name="form-name" value="contact-form" />

    <div class="for-non-humans">
      <label
        >Only not real entities will try to fill this field:
        <input id="verify-field" type="text" name="verify-field"
      /></label>
    </div>

    <div class="columns">
      <div class="column is-4">
        <div class="contact-form__left">
          <title-divider-content
            :title="'Say Hello!'"
            data-aos="zoom-in"
            data-aos-easing="ease-in-out-back"
          ></title-divider-content>

          <div>
            <div class="contact-form__field">
              <p class="contact-form__error">
                {{ form.name.error }}
              </p>
              <input
                id="name"
                v-model="form.name.value"
                disabled
                :class="{
                  input: true,
                  'is-danger': form.name.error
                }"
                type="text"
                name="name"
                placeholder="Your name.."
              />
            </div>
            <div class="contact-form__field">
              <p class="contact-form__error">
                {{ form.email.error }}
              </p>

              <input
                id="email"
                v-model="form.email.value"
                disabled
                :class="{
                  input: true,
                  'is-danger': form.email.error
                }"
                type="text"
                name="email"
                placeholder="Your email.."
              />
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="contact-form__right">
          <div class="contact-form__field">
            <p class="contact-form__error contact-form__error--message">
              {{ form.message.error }}
            </p>
            <textarea
              id="message"
              v-model="form.message.value"
              disabled
              :class="{
                'is-borderless': true,
                textarea: true,
                'is-danger': form.message.error
              }"
              name="message"
              placeholder="Message.."
            ></textarea>
          </div>
          <div class="contact-form__field">
            <button class="contact-form__button">
              <p data-aos="zoom-in" data-aos-easing="ease-in-out-back">
                Send Message
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import TitleDividerContent from '../common/TitleDividerContent'

export default {
  name: 'ContactForm',
  components: { TitleDividerContent },
  data() {
    return {
      form: {
        name: { value: '', error: '' },
        email: { value: '', error: '' },
        message: { value: '', error: '' }
      }
    }
  },
  methods: {
    checkForm(e) {
      let count = 0
      this.form.name.error = ''
      this.form.email.error = ''
      this.form.message.error = ''

      if (!this.form.name.value) {
        this.form.name.error = 'Name required.'
        count++
      }

      if (!this.form.email.value) {
        this.form.email.error = 'Email required.'
        count++
      } else if (!this.validEmail(this.form.email.value)) {
        this.form.email.error = 'Valid email required.'
        count++
      }

      if (!this.form.message.value) {
        this.form.message.error = 'Message required.'
        count++
      }

      if (count === 0) {
        return true
      }

      e.preventDefault()
    },
    validEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    },
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join('&')
    },
    async postForm() {
      const self = this

      const form = {
        name: self.form.name.value,
        email: self.form.email.value,
        subject: 'Fill it',
        message: self.form.message.value
      }

      const axiosConfig = {
        header: { 'Content-Type': 'application/x-www-form-urlencoded' }
      }
      // eslint-disable-next-line no-undef
      await this.$axios
        .$post(
          '/',
          self.encode({
            'form-name': 'contact-form',
            ...form
          }),
          axiosConfig
        )
        .then(() => {
          this.$router.push('/contact-success')
        })
        .catch(() => {
          this.$router.push('/contact-fail')
        })
    },
    handleSubmit(e) {
      if (!this.checkForm(e)) return
      this.postForm()
    }
  }
}
</script>

<style scoped lang="scss">
.contact-form {
  &__left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-right: 0;

    @include from($tablet) {
      padding-right: 1rem;
      height: 15rem;
    }
  }

  &__right {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: none;

    @include from($tablet) {
      border-left: 1px solid $color-text-primary;
    }
  }

  &__field input,
  &__field textarea {
    padding: 0;
    background-color: transparent;
    border: 0;
    border-radius: 0;
    border-bottom: 1px solid $color-text-primary;
    color: $color-text-primary;

    &::placeholder {
      color: $color-text-primary-darker;
    }
  }

  &__field input {
  }

  &__field textarea {
    height: 11rem;
    padding-left: 0;
    padding-bottom: 20px;

    @include from($tablet) {
      padding-left: 20px;
    }
  }

  &__button {
    background-color: $color-primary;
    border: 0;
    width: 100%;
    padding: 10px;
    p {
      color: $color-secondary-dark !important;
    }
  }

  &__error {
    height: 11px;
    font-size: 11px;
    padding: 0;
    margin: 0;
    padding-bottom: 1rem;
    color: $color-primary;

    &--message {
      padding-left: 0;

      @include from($tablet) {
        padding-left: 20px;
      }
    }
  }
}

.for-non-humans {
  display: none;
}
</style>
