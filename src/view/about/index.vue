<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="24">
        <el-card>
          <template #header>
            <el-divider>
              安新高科技
            </el-divider>
            <div>
                  研究与创新智能时代已扑面而来，为创新带来了前所未有的机遇和挑战。            
                  安新坚持基础研究不动摇，坚持开放创新不动摇，开放心胸，沿着客户的需求顺势而为，同时加强科学技术牵引客户需求，构建灵活的商业模式，使能百模千态，赋能千行万业，把数字世界带入每个人，每个家庭，每个组织，构建万物互联的智能世界。近5年累计投入的研发费用超过人民币1000万元23.4%2023年，研发费用支出为人民币200 万元，占全年收入的23.4%55%截至2023年12月31日，研发员工约11名，占总员工数量的55%14万截至2023年底，安新在全球共持有有效授权专利超过14万件开放、合作、共赢未来十到二十年，我们将加速走向全联接的智能社会，通信和计算是未来世界的两个最重要的基石。安新将持续与政、产、学、研、用等各领域的产业组织和生态伙伴开放合作，持续向产业界贡献标准提案、产业理解、技术难题等，推动产业发展和技术进步。
             </div>
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
