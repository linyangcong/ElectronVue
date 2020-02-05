<template>
  <div style="margin-bottom:2rem">
    <div class="Header">
      <span class="title">个人简历</span>
      <div class="HeaderFlex">
        <span>求职意向:{{userDetail.Wanted}}</span>
        <span>Personal resume</span>
      </div>
    </div>
    <div class="HeaderBorder">
      <div class="HeaderFirst"></div>
      <div class="HeaderSecon"></div>
    </div>
    <div class="Main">
      <div class="Main_Contain">
        <!-- 插入图片 -->
        <div class="TagTitleEXP">
          <img src="../../assets/components/Template1/tag.png" />
          <span>基本信息</span>
        </div>
        <div class="Main_ContainExp" >
        <div class="Main_Row" >
          <span>姓名:{{userDetail.Name}}</span>
          <span style="margin-right:3.3rem">出生年月:{{userDetail.Born}}</span>
        </div>
        <div class="Main_Row">
          <span>民族:{{userDetail.Nation}}</span>
          <span style="margin-right:9.8rem">身高:{{userDetail.Height}}</span>
        </div>
        <div class="Main_Row">
          <span>手机:{{userDetail.Mobile}}</span>
          <span style="margin-right:7.2rem">政治面貌:{{userDetail.PoliticalIdentity}}</span>
        </div>
        <div class="Main_Row">
          <span>邮箱:{{userDetail.Email}}</span>
          <span>毕业院校:{{userDetail.GraduatedSchool}}</span>
        </div>
        <div class="Main_Row">
          <span>住址:{{userDetail.HomeAddress}}</span>
          <span style="margin-right:9.7rem">学历:{{userDetail.Education}}</span>
        </div>
        <div class="Main_Row">
          <span>专业:{{userDetail.Profession}}</span>
          <span style="margin-right:-7.7rem">Github:{{userDetail.Git}}</span>
        </div>
        </div>
      </div>
      <div class="Main_Contain">
         <!-- 插入图片 -->
        <div class="TagTitle">
          <img src="../../assets/components/Template1/tag.png" />
          <span>教育背景</span>
        </div>

        <div class="BGContainer">
          <div class="BGItem" >
            <div class="BGTop">
              <span>{{userDetail.EducationBackground.FromDate}}-{{userDetail.EducationBackground.ToDate}}</span>
              <span>{{userDetail.EducationBackground.SchoolName}}</span>
            </div>
            <div class="BGBottom">
              <span style="font-size:0.9rem;font-weight:600">主修课程:</span>
              <div style="margin-left:2rem">{{userDetail.EducationBackground.MajorSubject}}</div>
              </div>
            <div class="BGBottom">
              <span style="font-size:0.9rem;font-weight:600">自学课程:</span>
              <div style="margin-left:2rem">{{userDetail.EducationBackground.SelfCourse}}</div>
              </div>
          </div>
        </div>
        
      </div>
      <div class="Main_Contain">
         <!-- 插入图片 -->
        <div class="TagTitle">
          <img src="../../assets/components/Template1/tag.png" />
          <span >实习经历</span>
        </div>
         
         <div class="BGContainer">
          <div class="BGItem" v-for="(k,i) in userDetail.InternshipExperience" :key="i">
            <div class="BGTop">
              <span>{{k.FromDate}}-{{k.ToDate}}</span>
              <span>{{k.CompanyName}}</span>
              <span>{{k.Position}}</span>
            </div>
            <div class="BGBottom">
              <span style="font-size:0.9rem;font-weight:600">主要工作内容：</span>
              <div style="margin-left:2rem">{{k.DoWhat}}</div>
              </div>
          </div>
        </div>
      </div>
      <div class="Main_Contain">
         <!-- 插入图片 -->
        <div class="TagTitle">
          <img src="../../assets/components/Template1/tag.png" />
          <span >校园经历</span>
        </div>

        <div class="BGContainer">
          <div class="BGItem" v-for="(k,i) in userDetail.CampusExperience" :key="i">
            <div >
              <span>{{k.Date}}</span>
              <span>{{k.DoWhat}}</span>
            </div>
            <!-- <div class="BGBottom">{{k.DoWhat}}</div> -->
          </div>
        </div>
      </div>
      <div class="Main_Contain">
         <!-- 插入图片 -->
        <div class="TagTitle">
          <img src="../../assets/components/Template1/tag.png" />
          <span>个人作品</span>
        </div>

        <div class="BGContainer">
          <div class="BGItem" v-for="(k,i) in userDetail.personalWorks" :key="i">
            <div class="BGTop">
              <span>{{k.FromDate}}-{{k.ToDate}}</span>
              <span>{{k.DoWhat}}</span>
            </div>
            
            <div class="BGBottom">
              <span style="font-size:0.9rem;font-weight:600">Github:</span>
              <div style="margin-left:2rem" >
                <p v-show="k.Github.Android">{{k.Github.Android}}</p>
                <p v-show="k.Github.Node">{{k.Github.Node}}</p>
                <p v-show="k.Github.HTML5">{{k.Github.HTML5}}</p>
                <p v-show="k.Github.desktop">{{k.Github.desktop}}</p>
              </div>
              </div>
            <div class="BGBottom">
              <span style="font-size:0.9rem;font-weight:600">
                主要技术：
              </span>
              <div style="margin-left:2rem">{{k.UseTec}}</div>
              </div>
          </div>
        </div>

      </div>
      <div class="Main_Contain">
         <!-- 插入图片 -->
        <div class="TagTitle">
          <img src="../../assets/components/Template1/tag.png" />
          <span >项目经验</span>
        </div>
        <div class="BGContainer">
          <div class="BGItem" v-for="(k,i) in userDetail.ProjectExperience" :key="i">
            <div class="BGTop">
              <span>{{k.FromDate}}-{{k.ToDate}}</span>
              <span>{{k.ProjectName}}</span>
            </div>
            
            <div class="BGBottom">
              <span style="font-size:0.9rem;font-weight:600">涉及技术:</span>
              <div style="margin-left:2rem" >
                <p>{{k.UseTec}}</p>
              </div>
              </div>
              <div class="BGBottom">
              <span style="font-size:0.9rem;font-weight:600">遇到问题:</span>
              <div style="margin-left:2rem" >
                <p>{{k.Problem}}</p>
              </div>
              </div>
              <div class="BGBottom">
              <span style="font-size:0.9rem;font-weight:600">解决方法:</span>
              <div style="margin-left:2rem" >
                <p>{{k.Resolve}}</p>
              </div>
              </div>
            <!-- <div class="BGBottom">
              <span style="font-size:0.9rem;font-weight:600">主要技术：</span>
              <span>{{k.UseTec}}</span>
              </div> -->
          </div>
        </div>

      </div>
      <div class="Main_Contain">
         <!-- 插入图片 -->
        <div  class="TagTitle">
          <img src="../../assets/components/Template1/tag.png" />
          <span>自我评价</span>
        </div>
        <p style="text-align:center">{{userDetail.SelfAssessment}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'Template1',
    data(){
        return{
          userDetail:JSON.parse(sessionStorage.getItem('userDetail'))
        }
    },
    methods:{

    },
    mounted(){

    }
}
</script>

<style scoped>
.Header{
  display: flex;
  flex-direction:row;
  align-items: center;
  color: #228888;
 
}
.Header .title{
  font-size: 4rem;
  margin: 0.5rem;
  padding: 1rem;
  border-right: #228888 0.5rem solid;
}
.HeaderFlex{
  display: flex;
  flex-direction: column;
  padding: 1rem;
  font-size: 2rem;
}
.HeaderBorder{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* height: 1rem; */
}
.HeaderBorder .HeaderFirst{
  background: #228888;
  width: 69%;
  height: 1.2rem;
}
.HeaderBorder .HeaderSecon{
  /* display: flex; */
  flex-direction: column;
  background: #aaaa00;
  width: 30%;
  height: 0.8rem;
  align-self: flex-end
  /* justify-content: flex-end */
}
.Main{
  margin:0rem 8rem;
  border-left: 0.2rem solid #288;
  /* border-bottom: 0.2rem solid #288; */
  /* width: 100%; */
  /* height: 10rem; */
}
.Main .Main_Contain{
  padding: 1rem;
  border-bottom: #228888 solid 0.2rem;
}
.Main_ContainExp{
padding: 2rem 15rem;
margin-top: 2rem;
 border-top: #288 solid 0.2rem;
}
.Main_Row{
  display: flex;
  flex-direction:row;
  justify-content: space-between;
  font-size: 1.2rem;
  margin: 0.5rem
}
.TagTitleEXP{
  display:flex;
  align-items:center;
  margin-top:0.3rem;
  margin-left:-2rem;
  position:absolute
}
.TagTitleEXP span{
  margin-left:-8rem;
  font-size:1.2rem;
  color:white
}
.TagTitle{
display:flex;
align-items:center;
margin-top:-2.8rem;
margin-left:-2rem;
position:absolute
}
.TagTitle span{
  margin-left:-8rem;
  font-size:1.2rem;
  color:white
}
.BGContainer{
  padding-bottom: 1rem;
}
.BGItem{
  padding-bottom:0.5rem;
  border-bottom: #228888 1px solid
}
.BGTop span{
  margin-right: 5rem
}
.BGBottom{
  font-size: 0.9rem;
  /* padding: 0.5rem */
}
</style>