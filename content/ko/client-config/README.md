---
title: 애플리케이션 설정하기
description: Stella API에 등록된 애플리케이션을 설정합니다.
position: 2
category: 빠른시작 가이드
---
Stella IT Accounts에 자신의 애플리케이션을 등록했다면, 애플리케이션을 설정할 수 있습니다.  
앞에서 명시한 바와 같이, Stella IT 는 자체 개발한 oAuth2 서버 [Meiling Gatekeeper](https://meili.ng) 에 기반하고 있습니다.  

따라서, 본 문서에 나오는 용어가 이해하기 어렵다면, [oAuth2 문서 (영어)](https://oauth.net/2/) 또는 [Google에서 제공하는 oAuth2 연동 문서](https://developers.google.com/identity/protocols/oauth2) ([영어](https://developers.google.com/identity/protocols/oauth2)) 를 참고하시면 도움이 됩니다.  

## 애플리케이션 설정 페이지로 들어가기
본격적으로 애플리케이션에 관련한 정보를 설정하기 위해서는 애플리케이션 설정 페이지로 접속해야 합니다.  
접속 방법은 다음과 같습니다.  

1. [Stella IT Accounts 개인 설정 페이지](https://accounts.stella-it.com/settings) 에 접속합니다.
2. 자신의 계정을 선택하거나, 로그인 합니다.
3. 좌측의 사이드바 또는 (모바일) 햄버거 메뉴에서 **인증된 앱** 을 선택합니다.  
4. **나의 앱** 을 선택합니다.
5. 수정할 애플리케이션을 선택합니다.
6. **앱 관리** 를 클릭합니다.  

## 앱 관리 인터페이스 도움말
* **Client Secret**: 서버등에서, 이 클라이언트 서버가 요청함을 Stella IT Accounts 서버에 증명하기 위한 시크릿 값입니다.  
  기본 값은 없으며, 없는 경우, Client Secret 없이 Stella IT Accounts 에 인증 토큰 발급등을 요청할 수 있습니다.  

* **Redirect URI**: 흔히 *"콜백 주소"* 로도 불리며, Stella IT Accounts 에서 애플리케이션을 인증 한 후, 인증 코드 또는 인증 토큰을 반환할 위치 입니다.  
  Meiling Gatekeeper의 경우 다음 특수 Redirect URI 를 추가적으로 지원합니다:  
    - `urn:ietf:wg:oauth:2.0:oob`: Authorization code 를 손수 붙여넣는 인터페이스를 제공합니다.  

* **애플리케이션 권한** _(Scopes)_ : 애플리케이션이 oAuth2 로 인증토큰을 요청을 할떄 요청할 수 있는 권한 _(scope)_ 의 영역을 지정합니다.  
