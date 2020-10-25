<template>
  <div id="app">
    <v-app>
      <v-main>
        <b>Diffie–Hellman key exchange</b>
        <v-container>
          <v-row align="center">
            <v-col
              cols="12"
              sm="6"
            >
              <v-text-field
                label="g"
                v-model="g"
                outlined
                :rules="[required]"
              ></v-text-field>
            </v-col>

            <v-col
              cols="12"
              sm="6"
            >
              <v-text-field
                label="p"
                v-model="p"
                hint="p must be a prime number"
                :rules="[required, required_prime]"
                outlined
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <person
              name="Alice"
              :g="g"
              :p="p"
              opposite="Bob"
              :oppP="pb"
              @change="changeA"
            />
            <person
              name="Bob"
              :g="g"
              :p="p"
              right
              opposite="Alice"
              :oppP="pa"
              @change="changeB"
            />
          </v-row>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Person from '@/components/person.vue';
import { isPrimeNumber, primes } from '@/items';

@Component({
  components: { Person },
})
export default class App extends Vue {
  g = 2;

  p = primes[Math.floor(Math.random() * primes.length)];

  pa = 0;

  pb = 0;

  changeA(pub: number) {
    this.pa = pub;
  }

  changeB(pub: number) {
    this.pb = pub;
  }

  required = (value: number) => !!value || 'required';

  required_prime = (value: number) => isPrimeNumber(value) || 'p must be a prime number';
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
