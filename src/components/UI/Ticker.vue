<template>
  <div class="scroll_bg">
    <div class="img" v-for="(image, index) in shuffledImages" :key="index" :style="{ backgroundImage: `url(${image})` }"></div>
  </div>
</template>

<script>
export default {
  name: "ticker",
  data() {
    return {
      images: [
        require("@/static/img/drug1.jpeg"),
        require("@/static/img/drug2.jpeg"),
        require("@/static/img/drug3.jpeg"),
        require("@/static/img/drug4.jpeg"),
        // Добавьте пути к вашим изображениям
      ],
    };
  },
  computed: {
    shuffledImages() {
      // Создайте копию массива изображений и перемешайте его случайным образом
      const shuffled = [...this.images];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    },
  },
  mounted() {
    this.startMarquee();
  },
  methods: {
    startMarquee() {
      const marquee = this.$el.querySelector(".scroll_bg");
      const containerWidth = 120;
      const marqueeWidth = 120;

      if (marqueeWidth > containerWidth) {
        const animationDuration = (marqueeWidth / containerWidth) * 10;
        marquee.style.animation = `scroll ${animationDuration}s linear infinite`;
      }
    },
  },
};
</script>

<style scoped>
@keyframes scroll {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-100%, 0);
  }
}

.scroll_bg {
  display: block;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
}

.img {
  display: inline-block;
  padding-left: 100%;
  animation: scroll 100s infinite linear;
  background-size: 10% 100%;
 
  width: 1px; /* Ширина контейнера изображения */
  height: 300px; /* Высота контейнера изображения */
  margin-left: -5px;
}
</style>
