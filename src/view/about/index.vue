<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="24">
        <el-card>
          <template #header>
            <el-divider>Anx</el-divider>
          </template>
          <div>
            <el-row>
              <el-col
                :span="8"
                :offset="8"
              >
                <a href="#">
                  <img
                    class="org-img dom-center"
                    src="@/assets/logo.png"
                    alt="anx"
                  >
                </a>
              </el-col>
            </el-row>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Commits, Members } from '@/api/github'
import { formatTimeToStr } from '@/utils/date'
const page = ref(0)

defineOptions({
  name: 'About'
})

const loadMore = () => {
  page.value++
  loadCommits()
}

const dataTimeline = ref([])
const loadCommits = () => {
  Commits(page.value).then(({ data }) => {
    data.forEach((element) => {
      if (element.commit.message) {
        dataTimeline.value.push({
          from: formatTimeToStr(element.commit.author.date, 'yyyy-MM-dd'),
          title: element.commit.author.name,
          showDayAndMonth: true,
          message: element.commit.message,
        })
      }
    })
  })
}

const members = ref([])
const loadMembers = () => {
  Members().then(({ data }) => {
    members.value = data
    members.value.sort()
  })
}

loadCommits()
loadMembers()

</script>

<style scoped>
.load-more {
  margin-left: 120px;
}

.avatar-img {
  float: left;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  margin-top: 15px;
}

.org-img {
  height: 150px;
  width: 150px;
}

.author-name {
  float: left;
  line-height: 65px !important;
  margin-left: 10px;
  color: darkblue;
  line-height: 100px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}

.dom-center {
  margin-left: 50%;
  transform: translateX(-50%);
}
</style>
