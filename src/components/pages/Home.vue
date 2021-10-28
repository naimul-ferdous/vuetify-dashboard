<template lang="">
  <v-container class="mycontainer">
      <v-row>
          <v-col cols="6">
              <v-sheet
                color="cyan"
                elevation="2"
                height="300"
                rounded
                >
                <v-sparkline
                    :labels="labels"
                    :value="value"
                    color="white"
                    line-width="2"
                    padding="16"
            >   </v-sparkline>
              </v-sheet>
          </v-col>
          <v-col cols="6">
              <v-sheet
                color="green"
                elevation="2"
                height="300"
                rounded
                >
                <v-sparkline
                :value="value1"
                color="rgba(255, 255, 255, .7)"
                height="100"
                padding="24"
                stroke-linecap="round"
                smooth
                >
            <template v-slot:label="item">
                    ${{ item.value }}
                  </template>
              </v-sparkline>
              </v-sheet>
          </v-col>
          <v-col cols="6">
            <v-sheet color="white"  elevation="2"
                height="300"
                rounded>
              <v-sparkline
                :key="String(avg)"
                :smooth="16"
                :gradient="['#f72047', '#ffd200', '#1feaea']"
                :line-width="3"
                :value="heartbeats"
                auto-draw
                stroke-linecap="round"
              ></v-sparkline>
    </v-sheet>
              </v-col>
          <v-col cols="6"><v-sheet
                color="white"
                elevation="2"
                height="300"
                rounded
                >
                <v-sparkline
                  :fill="fill"
                  :gradient="selectedGradient"
                  :line-width="width"
                  :padding="padding"
                  :smooth="radius || false"
                  :value="value2"
                  auto-draw
              ></v-sparkline>
              </v-sheet></v-col>
      </v-row>
  </v-container>
</template>
<script>
const exhale = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const gradients = [
  ["#222"],
  ["#42b3f4"],
  ["red", "orange", "yellow"],
  ["purple", "violet"],
  ["#00c6ff", "#F0F", "#FF0"],
  ["#f72047", "#ffd200", "#1feaea"],
];
export default {
  data: () => ({
    labels: ["12am", "3am", "6am", "9am", "12pm", "3pm", "6pm", "9pm"],
    value: [200, 675, 410, 390, 310, 460, 250, 240],
    value1: [423, 446, 675, 510, 590, 610, 760],
    checking: false,
    heartbeats: [],
    fill: true,
    selectedGradient: gradients[4],
    gradients,
    padding: 8,
    radius: 10,
    value2: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
    width: 2,
  }),
  computed: {
    avg() {
      const sum = this.heartbeats.reduce((acc, cur) => acc + cur, 0);
      const length = this.heartbeats.length;

      if (!sum && !length) return 0;

      return Math.ceil(sum / length);
    },
  },

  created() {
    this.takePulse(false);
  },

  methods: {
    heartbeat() {
      return Math.ceil(Math.random() * (120 - 80) + 80);
    },
    async takePulse(inhale = true) {
      this.checking = true;

      inhale && (await exhale(1000));

      this.heartbeats = Array.from({ length: 20 }, this.heartbeat);

      this.checking = false;
    },
  },
};
</script>
<style scoped>
.v-sheet--offset {
  top: -24px;
  position: relative;
  border: 2px solid red;
}
</style>