<script setup>
import { ref, watch } from "vue";

const pwEntropySrc = ref("");
const pwEntropyResult = ref(0);

const pwEntropyParams = ref({
  L: 0,
  N: 0,
});

watch(pwEntropySrc, (newPW) => {
  if (newPW === "") {
    pwEntropyResult.value = 0;
    pwEntropyParams.value.L = 0;
    pwEntropyParams.value.N = 0;
    return;
  }
  pwEntropyParams.value.L = newPW.length;
  pwEntropyParams.value.N = 0;
  if (newPW.search(/[a-z]/) != -1) {
    pwEntropyParams.value.N += 26;
  }
  if (newPW.search(/[A-Z]/) != -1) {
    pwEntropyParams.value.N += 26;
  }
  if (newPW.search(/\s/) != -1) {
    pwEntropyParams.value.N += 2;
  }
  if (newPW.search(/\d/) != -1) {
    pwEntropyParams.value.N += 10;
  }
  if (
    newPW.search(/[!@#\$%\^&\*\(\)<>\?\[\]\{\}\\\+=\.\-\_\~\`\'\"\/\,]/) != -1
  ) {
    pwEntropyParams.value.N += 29;
  }
  pwEntropyResult.value =
    Math.round(
      newPW.length * (Math.log(pwEntropyParams.value.N) / Math.log(2)) * 1000,
    ) / 1000;
});
</script>

<template>
  <label
    for="Entropy-Calculator"
    class="vp-raw flex w-full flex-col items-center justify-center gap-8 border-2 border-slate-700 p-5"
  >
    <div :class="$style.pwEntropyCalc">
      <slot></slot>
    </div>
    <ClientOnly>
      <input
        id="Entropy-Calculator"
        type="text"
        v-model="pwEntropySrc"
        class="w-full border-2 border-slate-600 py-3 pl-4 focus:border-slate-800"
        placeholder="請輸入測試密碼..."
        autocomplete="off"
      />
      <p class="text-center text-xl font-bold">
        密碼熵值 ≈ {{ pwEntropyResult }}
      </p>
      <div class="flex w-full items-center justify-around gap-6">
        <p class="text-center">密碼長度：{{ pwEntropyParams.L }}</p>
        <p class="text-center">密碼字元空間：{{ pwEntropyParams.N }}</p>
      </div>
    </ClientOnly>
  </label>
</template>

<style module>
.pwEntropyCalc :not(h2) :not(p),
.pwEntropyCalc h2:not(:nth-of-type(1)) p:not(:nth-of-type(1)) {
  @apply hidden;
}

.pwEntropyCalc {
  @apply flex flex-col items-start justify-center gap-4 p-2;
}

.pwEntropyCalc h2 {
  @apply text-3xl font-bold;
}

.pwEntropyCalc p {
  @apply text-xl;
}
</style>
