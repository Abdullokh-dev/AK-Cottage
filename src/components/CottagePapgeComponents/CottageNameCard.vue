<template>
  <q-card bordered class="bg-white my-card">

    <q-card-section>
      <div class="row items-center">
        <div class="col-10">
            <q-icon color="blue" name="mdi-clock" class="q-mr-xs" size="20px"/>
            <span class="q-pr-md">{{$t('cottage.weeksAgo')}}</span>
            <q-icon color="blue" name="mdi-eye" class="q-mr-xs" size="20px"/>
            <span>{{$t('cottage.viewsCount')}}</span>
        </div>
        <div class="col-2 text-right">
          <q-btn color="grey" icon="star" outline round size="10px"/>
        </div>
      </div>
    </q-card-section>

    <q-separator />

    <q-card-section>
      <div class="row">
        <div class="col-10">
          <div class="text-h6">Lorem ipsum dolor sit amet, consectetur adipisicing</div>
          <div class="text-subtitle2">by John Doe</div>
        </div>
        <div class="col-2 text-center">
          <div class="text-h6"> 1200$</div>
        </div>
      </div>
    </q-card-section>

    <q-separator/>

    <q-card-section>
      <p class="text-h6">Description</p>
      <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequatur cumque dolores earum ipsam nostrum
        pariatur tenetur vero vitae voluptas. Aliquid consequatur, deserunt dolore excepturi facere fuga itaque natus
        possimus repellat soluta. Explicabo saepe unde ut voluptatibus! Incidunt, quod, sint. Lorem ipsum dolor sit
        amet, consectetur adipisicing elit. Consequatur inventore quibusdam ratione sit voluptate. Aspernatur cumque
        debitis excepturi ipsam similique.
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: "CottageNameCard"
}
</script>

<style scoped>
.my-card {
  margin: 16px;
}

@media only screen and (min-width: 1024px) {
  .my-card {
    width: 78%;
    margin: 16px auto 20px auto;
  }
}
</style>
