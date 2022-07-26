## 생활코딩 - 리액트 입문1

node, npm 선 설치필요

* create-react-app 설치 (3.3.0 버전)
```
$ npm install -g create-react-app@3.3.0
```
* 설치확인
```
$ create-react-app -V
3.3.0
```

아무경로에 react-app 폴더생성 (폴더명자유 (app, App 은안됨))
커맨드에서 해당폴더로 이동. 

* 리액트앱 개발환경 설치
```
$ create-react-app . 
```
파일설치진행중...
해당폴더에 리액트앱 개발환경 구축 성공.

* 로컬구동 
```
$ npm run start 
```
=> 브라우저에 localhost:3000 으로 열리면서 리액트 샘플페이지 열림

* 빌드 (배포파일 빌드 & build 디렉토리 생김)
```
$ npm run build  
```

* build 디렉토리를 기준으로 서버를 실행해라.
```
$ npx serve -s build 
```
=> localhost:3000 으로 접속 시 페이지 확인가능.   
=> 기존에 그냥 npm run start 했을 때보다 페이지 리로드시 다운로드 용량이 훨씬 줄어들것을 확인가능하다. (154kb)



