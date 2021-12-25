__NUXT_JSONP__("/ko/client-config/README", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B){return {data:[{document:{slug:"README",description:"Stella API에 등록된 애플리케이션을 설정합니다.",title:"애플리케이션 설정하기",position:m,category:"빠른시작 가이드",toc:[{id:o,depth:m,text:p},{id:q,depth:m,text:r}],body:{type:"root",children:[{type:b,tag:f,props:{},children:[{type:a,value:"Stella IT Accounts에 자신의 애플리케이션을 등록했다면, 애플리케이션을 설정할 수 있습니다."},{type:b,tag:l,props:{},children:[]},{type:a,value:"\n앞에서 명시한 바와 같이, Stella IT 는 자체 개발한 oAuth2 서버 "},{type:b,tag:e,props:{href:"https:\u002F\u002Fmeili.ng",rel:[h,i,j],target:k},children:[{type:a,value:"Meiling Gatekeeper"}]},{type:a,value:" 에 기반하고 있습니다."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"따라서, 본 문서에 나오는 용어가 이해하기 어렵다면, "},{type:b,tag:e,props:{href:"https:\u002F\u002Foauth.net\u002F2\u002F",rel:[h,i,j],target:k},children:[{type:a,value:"oAuth2 문서 (영어)"}]},{type:a,value:" 또는 "},{type:b,tag:e,props:{href:s,rel:[h,i,j],target:k},children:[{type:a,value:"Google에서 제공하는 oAuth2 연동 문서"}]},{type:a,value:" ("},{type:b,tag:e,props:{href:s,rel:[h,i,j],target:k},children:[{type:a,value:"영어"}]},{type:a,value:") 를 참고하시면 도움이 됩니다."}]},{type:a,value:c},{type:b,tag:t,props:{id:o},children:[{type:b,tag:e,props:{href:"#%EC%95%A0%ED%94%8C%EB%A6%AC%EC%BC%80%EC%9D%B4%EC%85%98-%EC%84%A4%EC%A0%95-%ED%8E%98%EC%9D%B4%EC%A7%80%EB%A1%9C-%EB%93%A4%EC%96%B4%EA%B0%80%EA%B8%B0",ariaHidden:u,tabIndex:v},children:[{type:b,tag:w,props:{className:[x,y]},children:[]}]},{type:a,value:p}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"본격적으로 애플리케이션에 관련한 정보를 설정하기 위해서는 애플리케이션 설정 페이지로 접속해야 합니다."},{type:b,tag:l,props:{},children:[]},{type:a,value:"\n접속 방법은 다음과 같습니다."}]},{type:a,value:c},{type:b,tag:"ol",props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{href:"https:\u002F\u002Faccounts.stella-it.com\u002Fsettings",rel:[h,i,j],target:k},children:[{type:a,value:"Stella IT Accounts 개인 설정 페이지"}]},{type:a,value:" 에 접속합니다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"자신의 계정을 선택하거나, 로그인 합니다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"좌측의 사이드바 또는 (모바일) 햄버거 메뉴에서 "},{type:b,tag:g,props:{},children:[{type:a,value:"인증된 앱"}]},{type:a,value:z}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"나의 앱"}]},{type:a,value:z}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"수정할 애플리케이션을 선택합니다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"앱 관리"}]},{type:a,value:" 를 클릭합니다."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:t,props:{id:q},children:[{type:b,tag:e,props:{href:"#%EC%95%B1-%EA%B4%80%EB%A6%AC-%EC%9D%B8%ED%84%B0%ED%8E%98%EC%9D%B4%EC%8A%A4-%EB%8F%84%EC%9B%80%EB%A7%90",ariaHidden:u,tabIndex:v},children:[{type:b,tag:w,props:{className:[x,y]},children:[]}]},{type:a,value:r}]},{type:a,value:c},{type:b,tag:A,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"Client Secret"}]},{type:a,value:": 서버등에서, 이 클라이언트 서버가 요청함을 Stella IT Accounts 서버에 증명하기 위한 시크릿 값입니다."},{type:b,tag:l,props:{},children:[]},{type:a,value:"\n기본 값은 없으며, 없는 경우, Client Secret 없이 Stella IT Accounts 에 인증 토큰 발급등을 요청할 수 있습니다."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"Redirect URI"}]},{type:a,value:": 흔히 "},{type:b,tag:n,props:{},children:[{type:a,value:"\"콜백 주소\""}]},{type:a,value:" 로도 불리며, Stella IT Accounts 에서 애플리케이션을 인증 한 후, 인증 코드 또는 인증 토큰을 반환할 위치 입니다."},{type:b,tag:l,props:{},children:[]},{type:a,value:"\nMeiling Gatekeeper의 경우 다음 특수 Redirect URI 를 추가적으로 지원합니다:"}]},{type:a,value:c},{type:b,tag:A,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:"code",props:{},children:[{type:a,value:"urn:ietf:wg:oauth:2.0:oob"}]},{type:a,value:": Authorization code 를 손수 붙여넣는 인터페이스를 제공합니다."}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"애플리케이션 권한"}]},{type:a,value:" "},{type:b,tag:n,props:{},children:[{type:a,value:"(Scopes)"}]},{type:a,value:" : 애플리케이션이 oAuth2 로 인증토큰을 요청을 할떄 요청할 수 있는 권한 "},{type:b,tag:n,props:{},children:[{type:a,value:"(scope)"}]},{type:a,value:" 의 영역을 지정합니다."}]},{type:a,value:c}]},{type:a,value:c}]}]},dir:"\u002Fko\u002Fclient-config",path:"\u002Fko\u002Fclient-config\u002FREADME",extension:".md",createdAt:B,updatedAt:B,to:"\u002Fclient-config\u002FREADME"},prev:{title:"환영합니다!",path:"\u002Fko\u002Findex",to:"\u002F"},next:{title:"개발을 시작해 볼까요?",path:"\u002Fko\u002Fgetting-started\u002FREADME",to:"\u002Fgetting-started\u002FREADME"}}],fetch:{},mutations:[]}}("text","element","\n","li","a","p","strong","nofollow","noopener","noreferrer","_blank","br",2,"em","애플리케이션-설정-페이지로-들어가기","애플리케이션 설정 페이지로 들어가기","앱-관리-인터페이스-도움말","앱 관리 인터페이스 도움말","https:\u002F\u002Fdevelopers.google.com\u002Fidentity\u002Fprotocols\u002Foauth2","h2","true",-1,"span","icon","icon-link"," 을 선택합니다.","ul","2021-12-25T05:16:43.577Z")));