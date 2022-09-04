<template>
  <div class="footer row bg-grey-9 justify-center gt-xs">
    <div class="col">

      <div class="row">
        <div class="col-12 col-md-6 text-left q-pl-lg items-center">
            <q-icon class="cottage" name="cottage" size="35px" color="blue"/>
            <div class="homeId inline-block">cottageUz</div>
        </div>
        <div class="col-12 col-md-6 text-right q-pr-lg">
          <q-icon class="icon" name="fa-brands fa-telegram" size="30px" color="blue-6"/>
          <q-icon class="icon" name="fa-brands fa-instagram" size="30px" color="purple"/>
          <q-icon class="icon" name="facebook" size="30px" color="blue"/>
        </div>
      </div>

      <div class="row">
        <div class="col-12 col-md-8 q-pl-lg text-left">
          <div class="inline-block">TERMS OF USE</div>
          <div class="inline-block list">PRIVACY POLICY</div>
          <div class="inline-block list" @click="$router.push('/support')">CONTACT SUPPORT</div>
        </div>

        <div class="col-12 col-md-4 reserved-txt text-right q-pr-lg">
          © 2021 cottageUZ. All Rights Reserved
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "FooterDesktop"
};
</script>

<style scoped>

.footer {
  width: 100%;
  font-family: 'Poppins', sans-serif;
}

.inline-block {
  font-size: 16px;
  color: white;
  font-weight: 500;
  cursor: pointer;
}

.list {
  margin-left: 45px;
}

.homeId {
  font-size: 35px;
  margin-top: 8px;
  font-weight: 800;
}

.reserved-txt {
  font-size: 14px;
  color: white;
}

.col-md-6, .col-md-8, .col-md-4 {
  margin-top: 45px;
}

.col-md-4 {
  padding-bottom: 45px;
}

.icon {
  padding: 20px;
}

.cottage {
  margin-top: -18px;
}

.q-icon {
  cursor: pointer;
}

@media only screen and (max-width: 1024px) {
  .col-md-6, .col-md-8, .col-md-4 {
    text-align: center !important;
    margin-top: 10px;
  }
  .col-md-4 {
    margin-bottom: 15px;
  }
  .list {
    margin-left: 2% !important;
  }
  .col-md-8 {
    padding: 0 !important;
  }
  .q-pr-lg {
    padding: 0 !important;
  }
}

</style>
