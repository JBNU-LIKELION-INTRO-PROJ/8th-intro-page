<template>
  <Layout>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

  <div class="card">  
    <img src="https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2019/09/931/524/brad-pitt-ad-astra-tokyo-getty.jpg?ve=1&tl=1" alt="John">
    <h1>박종현</h1>
    <p class="title">7기, 8기 멋쟁이 사자처럼 대표</p>
    <p class="school">Harvard University</p>
    <a href="www.naver.com"><i class="fa fa-facebook"></i></a>
    <a href="#"><i class="fa fa-instagram"></i></a>
    <!-- <p><button>Contact</button></p> -->
</div>

  <div class="card">
    <img src="data:image/jpeg;base64,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">
    <h1>구경민</h1>
    <p class="title">7기,8기 멋쟁이 사자처럼 부대표</p>
    <p class="school">전북대학교</p>
    <a href="www.naver.com"><i class="fa fa-facebook"></i></a>
    <a href="#"><i class="fa fa-instagram"></i></a>
    <!-- <p><button>Contact</button></p> -->
  </div>
   
   <div class="card">
    <img src="https://t1.daumcdn.net/liveboard/BoiledMovie/56edd5149477493486c257ee43982864.JPG" alt='joker'>
    <h1>이범기</h1>
    <p class="title">7기,8기 멋쟁이 사자처럼 총무</p>
    <p class="school">Harvard University</p>
    <a href="#"><i class="fa fa-facebook"></i></a>
    <a href="#"><i class="fa fa-instagram"></i></a>
    <!-- <p><button>Contact</button></p> -->
  </div>

  <div class="card">
    <img src="https://ticketimage.interpark.com/PlayDictionary/DATA/PlayDic/PlayDicUpload/040004/10/04/0400041004_21203_02.gif" alt='actress'>
    <h1>김현희</h1>
    <p class="title">7기,8기 멋쟁이 사자처럼 부대표</p>
    <p class="school">전북대학교</p>
    <a href="#"><i class="fa fa-facebook"></i></a>
    <a href="#"><i class="fa fa-instagram"></i></a>
    <a href="#"><i class="fa fa-github  "></i></a>
    <!-- <p><button>Contact</button></p> -->
  </div>

  <div class="card">
    <img src="https://img5.yna.co.kr/photo/yna/YH/2020/02/10/PYH2020021010040034000_P2.jpg" alt='movie director'>
    <h1>장준혁</h1>
    <p class="title">7기,8기 멋쟁이 사자처럼 부대표</p>
    <p class="school">Harvard University</p>
    <a href="#"><i class="fa fa-facebook"></i></a>
    <a href="https://www.instagram.com/ppak__9/"><i class="fa fa-instagram"></i></a>
    <a href="https://github.com/PeterPPark"><i class="fa fa-github"></i></a>
    <!-- <p><button><a href="https://www.instagram.com/likelion_jbnu/"></a>Contact</button></p> -->
  </div>

  </Layout>
</template>

<page-query>
query Documentation {
  docs: allDocumentation (sortBy: "date", order: DESC) {
    edges {
      node {
        id
        path
        title
        excerpt
      }
    }
  }
}
</page-query>

<style>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: 30px;
  padding:10px;
  text-align: center;
  display: inline-block;
  position: relative;
  left: 70px;
}

.title {
  color: grey;
  font-size: 13px;
}

.school{
  font-size:12px;
}

button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

a {
  text-decoration: none;
  font-size: 22px;
  color: black;
  margin:5px;
}

button:hover, a:hover {
  opacity: 0.7;
}

img{
  width: 200px;
  max-width: 100%;
  height: 200px;
  display:inline-table;
  }
</style>
<script>
export default {
  metaInfo: {
    title: 'Members'
  }
}
</script>

