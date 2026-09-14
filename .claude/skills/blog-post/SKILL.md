---
name: blog-post
description: 노션 페이지 URL을 받아 KODA 테크블로그 글로 변환·등록하는 스킬. 트리거 — "/blog-post <노션 URL>", "이 노션 페이지 블로그로 등록해줘", "블로그 글 등록", "노션 글 변환". 노션 블록을 본문 컴포넌트로 1:1 변환하고 메타 등록·검증·PR까지 수행한다.
---

# 노션 → 테크블로그 글 등록

노션에 작성된 초안을 KODA 테크블로그 글로 변환해 등록한다. 상세 대응표와 규칙은 `docs/design/blog-post-workflow.md`가 정본이다 — **먼저 읽는다.**

## 입력

- 노션 페이지 URL (필수). URL 끝의 32자리 hex가 페이지 ID다.
- **메타 블록** — 페이지 맨 위 콜아웃(또는 문단)에 `제목:` `카테고리:` `요약:` `저자:` 줄이 있으면 거기서 읽는다. 선택 항목 `썸네일:`("첫 번째 이미지" 또는 이미지 파일명), `날짜:`, `slug:`. **노션 API는 페이지 제목을 돌려주지 않으므로 제목은 반드시 이 블록에서 얻는다.** 메타 블록은 본문으로 옮기지 않는다.
- 메타 블록이 없거나 항목이 빠지면 사용자에게 묻는다: 제목, 카테고리(`Security` | `Engineering` | `Insight`), 요약(1~2문장), 저자 이름·역할.

## 절차

1. **읽기** — `mcp__koda-dev__notion_page_read`(pageId)로 페이지를 읽는다. MCP를 못 쓰면 공개 페이지 한정으로 WebFetch.
2. **이미지 즉시 다운로드** — 노션 이미지 URL은 **1시간 만료 서명 URL**이다. 읽은 직후 `public/assets/images/blog/`로 `curl` 다운로드하고 `sips -g pixelWidth -g pixelHeight`로 실측 크기를 얻는다. 미루면 URL이 죽는다.
3. **변환** — `docs/design/blog-post-workflow.md`의 블록 대응표대로 `src/components/blog/posts/<PascalCase>.tsx`를 생성한다. 서버 컴포넌트(`'use client'` 없음), 따옴표는 `&ldquo;`/`&rdquo;`, 코드 블록은 템플릿 리터럴, `plain text` 언어는 `language` 프롭 생략, 내용은 한 글자도 각색하지 않는다. 형광펜(`<span color="*_bg">`)·기울임은 `<em>`, 굵게는 `<strong>`. 원문에 마크다운 별표가 글자로 남은 `\*\*텍스트\*\*`는 의도가 명백하므로 `<strong>`으로 옮기고 결과 보고에 적는다.
4. **등록** — `src/data/blogPosts.ts` 배열 **맨 앞**에 메타 추가(맨 앞 = 최신 = 목록 featured). slug는 메타 블록의 `slug:`가 있으면 그 값, 없으면 제목의 영문 kebab-case. 날짜는 메타 `날짜:` 또는 등록일 `YYYY.MM.DD`. 썸네일은 메타 `썸네일:`이 가리키는 이미지의 `public` 경로(없으면 필드 생략). `src/data/blogContentMap.tsx`에 slug→컴포넌트 연결. sitemap은 자동 반영되므로 손대지 않는다.
   - **재실행(수정 반영)** — 같은 slug가 이미 등록돼 있으면 새 글이 아니라 수정이다. 본문 컴포넌트를 덮어쓰고 메타는 바뀐 항목만 갱신하며, slug·날짜는 유지한다.
5. **검증** — `npm run lint && npm run build` 통과, 빌드 라우트 목록에 새 slug 확인. TOC·공유 버튼은 상세 페이지가 자동 제공하므로 글에서 신경 쓸 것 없다.
6. **PR** — `feat/blog-post-<slug>` 브랜치로 커밋하고 `dev` 베이스 PR 생성.

## 금지

- 새 라이브러리 추가, `globals.css` 수정, 스타일 가이드(`docs/design/style-guide.md`) 금지 사항 위반.
- 본문 내용 각색·요약·순서 변경 — 문체·사실·수치를 그대로 옮긴다.
- 대응표에 없는 노션 블록(토글·DB·임베드·북마크·컬럼·동기화 블록·수식·페이지 멘션·파일)을 임의 변환 — 발견 시 사용자에게 처리 방법을 묻는다.
- 저자용 안내는 `docs/design/blog-author-guide.md`다 — 저자가 노션에 무엇을 어떻게 쓰는지가 거기 있으니 규칙을 바꾸면 두 문서를 함께 고친다.
