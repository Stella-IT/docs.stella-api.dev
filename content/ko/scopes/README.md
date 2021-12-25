---
title: Stella API의 권한
description: Stella API를 통해 접근할 수 있는 권한들을 알아봅니다.
position: 2
category: 빠른시작 가이드
---
본 Scope 는 애플리케이션 들이 이용할 수 있는 권한들을 지정합니다.

## 이용할 수 있는 권한들
- `address`: 내 계정에 등록된 주소를 확인합니다. (주소가 수집되지 않았모므로, 실제로는 제공되지 않음)
- `email`: 내 이메일을 확인합니다.
- `name`: 내 계정에 등록된 이름을 확인합니다.
- `openid`: `/userinfo` 를 쿼리하거나, `id_token` 을 발급받을 수 있으며, 내 사용자 이름등 기본적인 프로필 정보를 조회할 수 있습니다. (필수)
- `phone`: 등록된 휴대전화번호를 확인합니다.
- `profile`: 내 프로필 정보를 조회합니다.
- `https://console.stella-api.dev`: Stella IT Console 에 관련된 정보를 조회할 수 있습니다.
