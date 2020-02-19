# 🦁멋쟁이 사자처럼 8기 소개 페이지

## 💻설치하기 및 실행하기

1. Gridsome을 설치하지 않았다면 `npm install --global @gridsome/cli` 로 설치해준다.

2) `npm install` 을 통해서 패키지들을 내려받는다.

3) `npm run develop` 명령어를 통해 로컬 서버를 실행한다.

## 🖨배포하기

`npm run deploy` 명령어를 통해 [깃허브 페이지 링크](https://jbnu-likelion-intro-proj.github.io/8th-intro-page/) 배포

> 도메인 주소가 복잡하니 나중에 다른 곳에 호스팅 예정

## 🖋FAQ 작성 요령

### 폴더 구조

```sh
├─blog
│  │
│  ├─ ...markdown files
│  │
│  │
│  └─images
│       └─ ...image files
│
```

마크다운 파일들과 이미지(옵션)이 들어갈 디렉토리

### 프론트매터 구조

```md
title: // 제목을 적는 곳
path: // 글의 URL 주소가 될 문자열을 적는 곳. _(ex. /freelance-vs-full-time-work)_
date: // 날짜를 적는 곳. 글의 순서를 정한다. _(ex. 2020-02-08)_
summary: // 클릭하기 전 요약본을 적는 곳. 없다면 딱히 안 적어도 된다.
tags: [] // FAQ를 구분할 태그를 적는 곳. _(ex. '지원', '활동', '조건')_
```

## 📂폴더 구조 설명

```sh
└─src
   │
   ├─components    // 각 페이지에 쓰이는 컴포넌트들. 한글화만 해주면 된다.
   │
   ├─css           // css 파일들이 들어가는 곳 (.vue 파일 안에 작성해도 된다.)
   │
   ├─layouts/Default.vue    // 네비게이션바, 푸터 등 전역 디자인을 꾸미는 곳.
   │
   ├─pages
   │    ├─404.vue   // 오류 페이지 안내
   │    ├─Blog.vue  // FAQ 페이지
   │    ├─Docs.vue  // 운영진 소개 페이지
   │    └─Index.vue // 첫 소개 랜딩 페이지
   │
   └─templates
        ├─Documentation.vue     // 아직 건들 필요 없음
        ├─Post.vue              // FAQ 포스트를 눌렀을 때 나오는 페이지
        └─Tag.vue               // 태그 모음 페이지
```

## ➕추가

- [이미지 로딩 최적화를 위한 레이지 로딩 설명](https://gridsome.org/docs/images/)
- 파비콘 필요.
- [Tailwind css](https://tailwindcss.com/)를 사용하는 템플릿이니 함께 공부해도 좋음
- 참고 무료 일러스트 [Undraw](https://undraw.co/)

---
## ⌨️Project

## 2020-02-11
- FAQ 질문지 전부 작성

## 2020-02-12 

- 프로필 페이지 구현
- 연결 링크 및 세부 css 교정 필요
- css에서 margin 및 픽셀 교정 필요
- 모바일 버젼 추후 논의 필요
  

## 2020-02-16
- tailwind css 추가

## 2020-02-17
- profile 작업 완료
- mobile 사이즈 맞게 작업 완료
- 추후 피드백 필요