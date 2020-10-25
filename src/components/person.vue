<template>
  <v-col cols="6">
    <b>{{name}}</b>

    <v-text-field
      label="Secret"
      v-model="privateKey"
      hint="2 <= private key < q"
      outlined
      :rules="[required, limit_min, limit_max]"
    ></v-text-field>
    <vue-mathjax :formula="pkeyF"></vue-mathjax>

    <v-row
      v-if="right || right === ''"
      class="mx-1 mb-6"
    >
      <v-icon
        large
        class="mt-16"
      >mdi-arrow-bottom-left-thick</v-icon>
      <v-text-field
        label="publicKey"
        readonly
        :value=publicKey
        outlined
        class=mt-4
      >

      </v-text-field>
    </v-row>
    <v-row
      v-else
      class="mx-1 mb-6"
    >

      <v-text-field
        label="publicKey"
        readonly
        :value=publicKey
        outlined
        class=mt-4
      >
      </v-text-field>
      <v-icon
        large
        class="mt-16"
      >mdi-arrow-bottom-right-thick</v-icon>
    </v-row>
    <vue-mathjax :formula="keyF"></vue-mathjax>
  </v-col>
</template>

<script lang="ts">
import {
  Vue, Component, Prop, Watch, Emit
} from 'vue-property-decorator';

@Component
export default class Person extends Vue {
  @Prop({ default: false })
  right!: boolean;

  @Prop({ required: true })
  name!: string;

  @Prop({ required: true })
  g!: number;

  @Prop({ required: true })
  p!: number;

  @Prop({ required: true })
  opposite!: string;

  @Prop({ required: true })
  oppP!: number;

  privateKey = this.genPrivateKey()

  required = (value: number) => !!value || 'secret is required';
  limit_min = (value: number) => value >= 2 || 'secret must be greater than 2';
  limit_max = (value: number) => value < this.p || 'The secret must be less than p';


  get pkeyF() {
    return '\\begin{align} \n'
      + 'PublicKey &= g^ { Secret } \\bmod p \\\\ \n'
      + `&= ${this.g} ^ {${this.privateKey}} \\bmod ${this.p} \\\\ \n`
      + `&=${this.publicKey}`
      + '\\end{align}'
  }

  get keyF() {
    return '\\begin{align} \n'
      + `Key &=${this.opposite}'sPubKey ^ {Secret} \\bmod p \\\\`
      + `&= ${this.oppP} ^ {${this.privateKey}} \\bmod ${this.p} \\\\ \n`
      + `&=${this.key}`
      + '\\end{align}'
  }

  @Emit('change')
  change(p: number) { }

  mounted() {
    this.change(this.publicKey);
    // @ts-ignore
    MathJax.Hub.Queue(['Typeset', MathJax.Hub]);
  }

  @Watch('p')
  onChangeP() {
    this.privateKey = this.genPrivateKey();
    this.change(this.publicKey);
  }

  @Watch('g')
  onChangeG() {
    this.privateKey = this.genPrivateKey();
    this.change(this.publicKey);
  }

  get publicKey() {
    const bigG = BigInt(this.g);
    const bigPr = BigInt(this.privateKey);
    const t1 = this.powOfBigInt(bigG, bigPr);
    const t2 = t1 % BigInt(this.p);
    return Number(t2);
  }

  get key() {
    const bigPub = BigInt(this.oppP);
    const bigPr = BigInt(this.privateKey);
    const t1 = this.powOfBigInt(bigPub, bigPr);
    const t2 = t1 % BigInt(this.p);
    return Number(t2);
  }

  genPrivateKey() {
    return Math.floor(Math.random() * (this.p - 2)) + 2;
  }

  powOfBigInt(a: bigint, n: bigint) {
    var x = 1n;
    for (var i = 0; i < n; i++) {
      x *= a;
    }
    return x;
  }
}
</script>

<style>
</style>
