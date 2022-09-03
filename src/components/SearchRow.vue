<template>
  <div class="bg-grey-8 row justify-center" style="margin-top: 59px;">
    <div class="col-11 col-sm-11 col-md-10 col-lg-9">
      <div class="row">
        <div class="col-12 q-pt-sm q-px-sm q-pb-lg">
          <q-input
            v-model="search"
            bg-color="grey-3"
            color="blue"
            debounce="500"
            filled
            placeholder="Dacha Name"
          >
            <template v-slot:append>
              <q-icon name="search" color="blue" />
            </template>
          </q-input>
        </div>
        <div class="col-12 col-sm-6 col-xs-6">
          <div class="q-pa-sm">
            <div class="q-gutter-md row">
              <q-select
                v-model="model"
                :options="options"
                bg-color="grey-3"
                color="blue"
                filled
                input-debounce="0"
                label="Simple filter"
                style="width: 100%"
                use-input
                @filter="filterFn"
              >
                <template v-slot:no-option>
                  <q-item>
                    <q-item-section class="text-grey">
                      No results
                    </q-item-section>
                  </q-item>
                </template>
              </q-select>

            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-xs-6">
          <div class="q-pa-sm">
            <div class="q-gutter-md row">
              <q-select
                color="blue"
                v-model="model"
                :options="options"
                bg-color="grey-3"
                filled
                input-debounce="0"
                label="Simple filter"
                style="width: 100%"
                use-input
                @filter="filterFn"
              >
                <template v-slot:no-option>
                  <q-item>
                    <q-item-section class="text-grey">
                      No results
                    </q-item-section>
                  </q-item>
                </template>
              </q-select>

            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-xs-6">
          <div class="q-pa-sm">
            <div class="q-gutter-md row">
              <q-select
                color="blue"
                v-model="model"
                :options="options"
                bg-color="grey-3"
                filled
                input-debounce="0"
                label="Simple filter"
                style="width: 100%"
                use-input
                @filter="filterFn"
              >
                <template v-slot:no-option>
                  <q-item>
                    <q-item-section class="text-grey">
                      No results
                    </q-item-section>
                  </q-item>
                </template>
              </q-select>

            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-xs-6">
          <div class="q-pa-sm">
            <div class="q-gutter-md row">
              <q-select
                color="blue"
                v-model="model"
                :options="options"
                bg-color="grey-3"
                filled
                input-debounce="0"
                label="Simple filter"
                style="width: 100%"
                use-input
                @filter="filterFn"
              >
                <template v-slot:no-option>
                  <q-item>
                    <q-item-section class="text-grey">
                      No results
                    </q-item-section>
                  </q-item>
                </template>
              </q-select>

            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-xs-6">
          <div class="q-pa-sm">
            <div class="q-gutter-md row">
              <q-select
                color="blue"
                v-model="model"
                :options="options"
                bg-color="grey-3"
                filled
                input-debounce="0"
                label="Simple filter"
                style="width: 100%"
                use-input
                @filter="filterFn"
              >
                <template v-slot:no-option>
                  <q-item>
                    <q-item-section class="text-grey">
                      No results
                    </q-item-section>
                  </q-item>
                </template>
              </q-select>

            </div>
          </div>
        </div>

        <div class="col-12 col-sm-6 col-xs-6 q-pt-lg ">
          <div class="q-pa-md">
            <q-range
              v-model="label"
              :max="100"
              :min="0"
              color="grey-3"
              inner-track-color="blue"
              label-always
              label-text-color="black"
            />
          </div>
        </div>

        <div class="col-8 col-sm-6 q-mx-auto">
          <q-toggle
            v-model="isAlcoholDrink"
            :label="'alcohol ' + isAlcohol"
            :style="{color: isAlcoholDrink ? color : 'white'}"
            color="blue"
            icon="liquor"
            size="80px"
            style="font-family: Roboto, Helvetica, Arial, sans-serif; font-size: 18px; font-weight: bold;"
          />
        </div>

        <div class="col-12 col-sm-6 col-xs-6 q-pt-lg q-pa-sm">
          <q-btn
            class="full-width"
            color="blue"
            label="search" size="20px"
          />
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "SearchRow",
  computed: {
    isAlcohol() {
      if (this.isAlcoholDrink) {
        return "permitted";
      }
      return "not permitted";
    }
  },
  data() {
    return {
      label: {
        min: 0,
        max: 100
      },
      isAlcoholDrink: false,
      color: "#2196F3",
      guest: {
        family: true,
        men: false,
        women: false
      }
    };
  },
  methods: {}
};
</script>

<style scoped>

</style>
