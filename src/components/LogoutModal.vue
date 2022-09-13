<template>
    <div>
      <div class="mb-1">
       <b-button @click="showModal">Logout</b-button>
       Return value: {{ String(confirmLogout) }}
      </div>
    </div>
  </template>
  
  <script>

    export default {
      data() {
        return {
          boxTwo: ''
        }
      },

      methods: {
        showModal() {
          this.confirmLogout = ''
          this.$bvModal.msgBoxConfirm('Please confirm that you want to log out.', {
            title: 'Logout Confirmation',
            size: 'md',
            buttonSize: 'md',
            okVariant: 'danger',
            okTitle: 'Confirm',
            cancelTitle: 'Cancel',
            footerClass: 'p-2',
            hideHeaderClose: false,
            centered: true
          })
            .then(value => {
              //this.confirmLogout = value
              this.confirmLogout = router.push({ path: '/'})
            })
            .catch(err => {
              // An error occurred
            })
        }
      }
    }
    
  </script>
  
