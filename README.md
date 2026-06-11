# 한국 역사 뮤비 가사·OST 생성기

학생들이 한국사를 소재로 가사, 음악 생성 AI 프롬프트, 뮤비 스토리보드, 이미지/영상 생성 프롬프트, 대사/내레이션 프롬프트를 만들 수 있는 정적 웹앱입니다.

## 실행

`index.html`을 브라우저에서 열면 바로 사용할 수 있습니다.

로컬 서버로 확인하려면:

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

브라우저에서 `http://127.0.0.1:4173/index.html`을 엽니다.

## 공개 배포

이 앱은 서버 코드가 없는 정적 웹앱입니다. GitHub Pages, Netlify, Vercel에 그대로 배포할 수 있습니다.

자세한 절차는 `DEPLOY.md`를 참고하세요.

## 포함된 프리셋

- 단종이 매화에게 보내는 마지막 편지
- 전하, 이제 강을 건널 때입니다
- 이순신의 용기
- 유관순과 독립
- 사도세자의 비극

## 출력 구조

1. Historical Context
2. Lyrics
3. AI Music Prompt
4. Cinematic Storyboard
5. Image / Video Prompt
6. Dialogue / Narration Prompt
