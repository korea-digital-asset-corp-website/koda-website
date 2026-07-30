# 테크블로그 글 등록 워크플로

에디터나 CMS 없이 글을 등록하는 절차다. 초안은 노션에 쓰고, 변환·커밋은 Claude가 한다.

## 절차

### ① 노션에 초안 작성

노션 페이지 하나가 글 하나다. 다음을 포함한다.

- **제목** — 페이지 제목이 글 제목이 된다.
- **본문** — 노션 기본 블록만 쓴다: 제목2/제목3, 문단, 코드, 이미지, 인용, 콜아웃, 글머리 기호/번호 목록. 아래 대응표에 없는 블록(토글, 데이터베이스, 임베드)은 변환되지 않는다.
- **메타 정보** — 페이지 상단이나 하단에 카테고리(`Security` | `Engineering` | `Insight`), 요약(1~2문장), 저자 이름·역할을 적는다.

### ② Claude에게 변환 요청

Claude Code에서 노션 페이지 URL과 함께 요청한다.

```
이 노션 페이지를 블로그 글로 등록해줘: <노션 페이지 URL>
docs/design/blog-post-workflow.md 절차를 따라줘.
```

Claude가 수행하는 일:

1. `notion_page_read`(koda-dev MCP)로 페이지를 읽는다. MCP를 못 쓰는 환경이면 공개 페이지 한정으로 WebFetch를 쓴다.
2. 아래 대응표에 따라 `src/components/blog/posts/<PascalCase>.tsx`를 생성한다.
3. `src/data/blogPosts.ts` 배열 **맨 앞**에 메타를 추가한다(맨 앞 = 최신 = 목록 featured). slug는 제목의 영문 kebab-case, 날짜는 `YYYY.MM.DD`.
4. `src/data/blogContentMap.tsx`에 slug→컴포넌트 연결을 추가한다.
5. sitemap은 `blogPosts`를 읽으므로 자동 반영된다 — 수정 불필요.

### ③ 검증

```bash
npm run lint && npm run build
```

빌드 라우트 목록에 새 slug가 나타나는지 확인한다.

### ④ PR

`feat/blog-post-<slug>` 브랜치로 커밋해 PR을 만든다.

## 노션 블록 → 컴포넌트 대응표

| 노션 블록         | 컴포넌트                                                                                     | import                           |
| ----------------- | -------------------------------------------------------------------------------------------- | -------------------------------- |
| 제목2 (heading_2) | `H2`                                                                                         | `@/components/typography`        |
| 제목3 (heading_3) | `H3`                                                                                         | `@/components/typography`        |
| 문단 (paragraph)  | `P`                                                                                          | `@/components/typography`        |
| 코드 (code)       | `CodeBlock`(`language` 프롭에 노션 언어값)                                                   | `@/components/blog/PostElements` |
| 인라인 코드       | `InlineCode`                                                                                 | `@/components/blog/PostElements` |
| 이미지 (image)    | `Figure`(이미지는 `public/assets/images/blog/`에 저장 후 경로 지정, `width`·`height` 실측값) | `@/components/blog/PostElements` |
| 인용 (quote)      | `Blockquote`                                                                                 | `@/components/blog/PostElements` |
| 콜아웃 (callout)  | `Callout`                                                                                    | `@/components/blog/PostElements` |
| 글머리 기호 목록  | `Ul` + `Li`                                                                                  | `@/components/typography`        |
| 번호 목록         | `Ol` + `Li`                                                                                  | `@/components/typography`        |
| 표 (table)        | `TableContainer` + `Thead`/`Tbody`/`Tr`/`Th`/`Td`                                            | `@/components/typography`        |
| 본문 내 외부 링크 | `TextLink`                                                                                   | `@/components/blog/PostElements` |
| 굵게/기울임       | `<strong>` / `<em>`                                                                          | — (HTML 그대로)                  |
| 구분선 (divider)  | 생략 — `H2`가 섹션 경계를 만들므로 옮기지 않는다                                             | —                                |

## 변환 규칙

- 글 본문 컴포넌트는 서버 컴포넌트다 — `'use client'`를 붙이지 않는다.
- 본문은 한국어 고정. UI 문자열이 아니므로 `messages/*.json`을 거치지 않는다.
- 따옴표는 `&ldquo;`/`&rdquo;`(ESLint `react/no-unescaped-entities` 대응), 코드 블록 내용은 템플릿 리터럴로 감싼다.
- 노션 코드 블록 언어가 `plain text`면 `language` 프롭을 생략한다(라벨이 소음이 된다). 실제 언어(`typescript` 등)일 때만 넘긴다.
- **노션 이미지 URL은 1시간 만료 서명 URL이다.** 페이지를 읽은 즉시 `public/assets/images/blog/`로 다운로드하고, `sips -g pixelWidth -g pixelHeight`로 실측 크기를 얻어 `Figure`에 넘긴다.
- 스타일 가이드(`docs/design/style-guide.md`)의 금지 사항이 그대로 적용된다 — 새 색·임의 크기·hex 금지.
