<template>
  <b-navbar class="container is-fullhd" type="is-black">
    <template #start>
      <b-navbar-item href="#">
        Главная
      </b-navbar-item>
      <b-navbar-item href="#">
        Портфолио
      </b-navbar-item>
      <b-navbar-item href="#">
        Цены
      </b-navbar-item>
    </template>

    <template #end>
      <section>
        <b-navbar-item href="#">
          <b-button
            label="Оставить заявку"
            type="is-primary"
            size="is-medium"
            @click="isComponentModalActive = true"
          />

          <b-modal
            v-model="isComponentModalActive"
            has-modal-card
            trap-focus
            :destroy-on-hide="false"
            aria-role="dialog"
            aria-label="Example Modal"
            aria-modal
          >
            <template #default="props">
              <modal-form v-bind="formProps" @close="props.close"></modal-form>
            </template>
          </b-modal>
        </b-navbar-item>
      </section>
    </template>
  </b-navbar>
</template>

<script>
const ModalForm = {
  props: ["name", "tel", "canCancel"],
  template: `
        <form action="post">
            <div class="modal-card" style="width: auto">
                <header class="modal-card-head">
                    <p class="modal-card-title">Оставить заявку</p>
                    <button
                        type="button"
                        class="delete"
                        @click="$emit('close')"/>
                </header>
                <section class="modal-card-body">
                    <b-field label="Ваше имя">
                        <b-input
                            type="name"
                            :value="name"
                            placeholder="Ваше имя"
                            required>
                        </b-input>
                    </b-field>

                    <b-field label="Телефон">
                        <b-input
                            type="tel"
                            :value="tel"
                            placeholder="+7XXXXXXXXXX"
                            required>
                        </b-input>
                    </b-field>
                </section>
                <footer class="modal-card-foot">
                    <b-button
                        label="Закрыть"
                        @click="$emit('close')" />
                    <b-button
                        label="Отправить"
                        type="is-primary" />
                </footer>
            </div>
        </form>
    `,
};

export default {
  components: {
    ModalForm,
  },
  data() {
    return {
      isComponentModalActive: false,
      formProps: {
        name: "",
        tel: "",
      },
    };
  },
};
</script>
<style lang="scss">
.container {
  box-shadow: 0 0 15px -1px rgba(0, 0, 0, 0.151);
}
</style>
