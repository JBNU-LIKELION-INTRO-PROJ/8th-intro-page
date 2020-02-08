# 🦁멋쟁이 사자처럼 8기 소개 페이지

## ⌨ 설치하기 및 실행하기

1. Gridsome을 설치하지 않았다면 `npm install --global @gridsome/cli` 로 설치해준다.


2. `npm install` 을 통해서 패키지들을 내려받는다.

3. `npm run develop` 명령어를 통해 로컬 서버를 실행한다.


## 🖨배포하기

`npm run deploy` 명령어를 통해 [깃허브 페이지 링크](https://jbnu-likelion-intro-proj.github.io/8th-intro-page/) 배포

> 도메인 주소가 복잡하기 나중에 다른 곳에 호스팅 예정


## ✒FAQ 작성 요령


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
title:  // 제목을 적는 곳
path:   // 글의 URL 주소가 될 문자열을 적는 곳. *(ex. /freelance-vs-full-time-work)*
date:   // 날짜를 적는 곳. 글의 순서를 정한다. *(ex. 2020-02-08)*
summary: // 클릭하기 전 요약본을 적는 곳. 없다면 딱히 안 적어도 된다.
tags: []    // FAQ를 구분할 태그를 적는 곳. *(ex. '지원', '활동', '조건')*
```