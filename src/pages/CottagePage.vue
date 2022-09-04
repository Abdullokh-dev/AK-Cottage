<template>
  <CarouselSlide :cottages="cottages"/>
  <CottageNameCard />
  <CottageAddressCard />
  <CottageOverview :overviews="overview"/>
  <CottageComfort :features="overview"/>
  <CottageVideoCard />
  <CottageMapCard />

</template>

<script>
import CarouselSlide from "components/CottagePapgeComponents/CarouselSlide";
import CottageNameCard from "components/CottagePapgeComponents/CottageNameCard";
import CottageAddressCard from "components/CottagePapgeComponents/CottageAddressCard";
import CottageOverview from "components/CottagePapgeComponents/CottageOverview";
import CottageComfort from "components/CottagePapgeComponents/CottageComfort";
import CottageVideoCard from "components/CottagePapgeComponents/CottageVideoCard";
import CottageMapCard from "components/CottagePapgeComponents/CottageMapCard";
export default {
  components: {
    CottageMapCard,
    CottageVideoCard, CottageComfort, CottageOverview, CottageAddressCard, CottageNameCard, CarouselSlide},
  data() {
    return {
      cottages: [
        {
          image: 'https://demo1-homeid.g5plus.net/wp-content/uploads/2020/10/single-property-04.jpg',
          id: 1
        },
        {
          image: 'https://demo1-homeid.g5plus.net/wp-content/uploads/2020/10/single-property-05.jpg',
          id: 2
        },
        {
          image: 'https://demo1-homeid.g5plus.net/wp-content/uploads/2020/10/single-property-06.jpg',
          id: 3
        },
        {
          image: 'https://demo1-homeid.g5plus.net/wp-content/uploads/2020/10/single-property-07.jpg',
          id: 4
        },
      ],
      overview: [
        {
          name: 'ID',
          value: 2297,
          icon: 'home'
        },
        {
          name: 'BEDROOMS',
          value: 3,
          icon: 'bed'
        },
        {
          name: 'GARAGES',
          value: 1,
          icon: 'garage'
        },
        {
          name: 'LAND SIZE',
          value: '2000 SqFt',
          icon: 'garage'
        },
        {
          name: 'TYPE',
          value: 'House',
          icon: 'house'
        },
        {
          name: 'BATHROOMS',
          value: '2',
          icon: 'bathroom'
        },
        {
          name: 'SIZE',
          value: '900 SqFt',
          icon: 'person'
        },
        {
          name: 'YEAR BUILT',
          value: '2020',
          icon: 'tv'
        },
      ]
    }
  },
}


</script>

<style scoped>
.q-pa-md {
  margin-top: 90px;
}

@media only screen and (min-width: 1024px) {
  .carousel__desktop {
    width: 80%;
    margin: auto;
    height: 550px;
  }
}
</style>
