# 수업용 공개 배포 가이드

이 앱은 정적 웹앱이라 별도 백엔드 서버가 필요 없습니다. `index.html`, `styles.css`, `app.js`, `assets/`만 함께 올라가면 학생들이 링크로 접속할 수 있습니다.

## 추천 방식: GitHub Pages

1. GitHub에서 새 저장소를 만듭니다.
2. 이 프로젝트 폴더의 파일을 저장소에 업로드합니다.
3. 저장소의 `Settings` -> `Pages`로 이동합니다.
4. `Build and deployment`에서 다음처럼 선택합니다.
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
5. 저장하면 몇 분 뒤 공개 주소가 생성됩니다.

예상 주소:

```text
https://사용자이름.github.io/저장소이름/
```

## Netlify로 배포

1. Netlify에서 `Add new site` -> `Deploy manually`를 선택합니다.
2. 이 프로젝트 폴더 전체를 드래그해서 업로드합니다.
3. 자동으로 공개 링크가 만들어집니다.

설정값:

```text
Build command: 비워둠
Publish directory: .
```

## Vercel로 배포

1. Vercel에서 새 프로젝트를 만듭니다.
2. GitHub 저장소를 연결합니다.
3. Framework preset은 `Other` 또는 자동 감지 그대로 둡니다.

설정값:

```text
Build command: 비워둠
Output directory: .
```

## 수업 전 점검

- 학생 기기에서 공개 링크가 열리는지 확인합니다.
- `결과 복사` 버튼이 작동하는지 확인합니다.
- 학교 네트워크에서 이미지 파일이 차단되지 않는지 확인합니다.
- 수업용 안내에는 "생성된 대사 중 실제 사료에 없는 말은 창작 대사"라고 명시합니다.
