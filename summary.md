1. 파비콘은 지정하지않아도 대부분의 브라우저는 root부분에 favicon.ico가 있으면 자동으로잡아줌 favicon 명칭 바꾸면안됨
   ico파일의 해상도가 떨어져서 png파일의 고해상도를 지원하고싶으면 <link rel="icon" href="./favicon.png"/> 이런식으로 직접 넣어줄 수 있음.

2. reset.css 적용하는것을 까먹지말자 cd으로 cdn.jsdeliver꺼 넣으면됨.

3. 오픈그래프 - 웹페이지가 소셜미디어(페이스북등)로 공유될때 우선적으로 활용되는 정보 (카톡으로 주소를넘겼을때 카드형식으로 나오는거 이미지나 간단한설명)
   최소한의 메타정보만 끌어다가 보여줌 로고,타이틀,설명등등 오픈그래프 작성하는거(강의에서 가져와서 옮겨서정리하자)
   오픈그래프와 유사한 트위터카드란것도있음

4. 구글폰트 - 일반적으로 폰트두께는 100~900 까지 100단위 9단계를 제공한다. 보통 기본두께400, 두꺼운700을 활용함
   폰트는 용량이크니 하나의페이지에서 폰트남발을 하지말자(최적화를위함)
   css선언방식은 import, link가 있는데 링크는 병렬로 html에서 외부에있는 css를 가져오는거고 임폴트는 직렬로 css파일에서 외부에있는 css파일을 가져옴
   대부분 link방식을 사용함

5. Google Material Icons - 사이트들을 만들다보면 디자인시안과 같지않을 수 있음 매번 디자이너에게 요청하는것보다 자주사용하는 아이콘들은 구글매터리얼을 사용해서 사용
   아이콘의 기본크기는 24px임 크기는 font-size로 제어함.

6. <header>태그는 특수한 기능이아니라 기본적으로 이건 헤드라는 의미다 div와같음 명시를위해 header를 쓴다. 
   보통 line-height는 1.4로함 브라우저의 폰트사이즈는 16px이나 브라우저별 특정브라우저는 16이아닐수도있으니 16을명시하는게좋음 
   글자두께는 400이 일반적

7. 가로사이즈 지정해주고 margin: 0 auto (위,아래 | 좌,우) ; 를 지정해주면 가로기준 중앙정렬이된다. 수직정렬은 height를 주고 margin : auto 0; 을주면됨 margin : auto해도 먹힘

8. div(header)안에 img를 넣었을때 이미지 높이(지정한 img의 크기)때문에 div안에서 이미지 주위 여백이남을 수 있다. 왜이런걸까 ?
   이미지는 인라인요소이다 가로세로, 마진패딩값을 가질수없는 글자다. 글자는 xyz 를보면 y는 수평적으로 조금더 튀어나와있다. 이건 기준선이있음 xyj 와같이 yj가 더튀어나와있음
   글자는 베이스라인 기준선이 존재하고 이는 베이스라인을 넘은상태이다. 이미지역시 베이스라인을 가지고있으며(글자=인라인요소) 베이스라인 아래쪽에 특정한 공간이 생김
   버그가아닌 당연한 현상이고 우리는 이를 수정해야함. img에 css를 지정해줘야함 display:block 처리를 하면(글자취급안함) 특정한 공간이 없어짐.
   top bottom 0을주고 margin 을 auto를 줌 height도 주면 수직가운데 정렬이됨. 포지션 absolute도 사용. absolute와 relative는 짝 relative 지정잊지말자
   위아래 0을 찍고 auto는 브라우저가 자동으로 마진을 계산하는거임. 위아래 0을주고 마진을보면 위아래 길이전체를 의미함. 이러면 가운데로 몰아주게됨
   요소의 height값을 알아야 이게 적용됨 결국 요소를 옴기는것이기때문에 height는 필수 absolute -> top, bottom = 0, margin:auto, 0
   수평을 잡아주려면 left, right 0을 주고 width값을 주고 absolute, position을 사용함 top, bottom left, right를 0값으로 주는이유는 abosolute가 있어야 쓸수있기때문

배치와 정렬의 개념은다르다 absoulte는 배치로 가운데 잡는거임 가운데 정렬은 7번임

9. a(앵커, a태그) 에서 href(주소)를 지정해야하는데 기본적으로 (#)샵 값을 줄 수 잇고 이건 URL 해시(hash)이다. 해시는 몇가지 쓰임이 있지만 그중 css id 선택자를 이용해 페이지내 특정위치로 이동이가능하다.
   javascript:void(0) 를 #대신 쓸 수 있음. 자바스크립트를 통해서 어떤걸 동작시킬건데 그건 void 아무것도 없다는 뜻, 아무기능도 동작시키지않겠다는거임. 링크가 준비가안됐을때 #또는 javascript:void(0)을 넣자 자바스크립트 보이드를 권장
   정말 아무런 동작을 하지않기때문 #는 약간의 변화가 있을수있음 해시라는 특정한 기능을 가지고있기때문.

10. ::before를 사용하려면 content=""를 써야함 빈값이라도 content없으면 작동안함. before는 인라인요소임.
    absolute를 사용하면 요소는 자동으로 block으로 바뀜. 적어도되고 안적어도됨 명시하는게 좋지않을까 ? 선택인듯

11. focus가 해제되었을때 를 나타내는 이벤트는 blur이다.

12. BEM(Block Element Modifier) - HTML 클래스 속성의 작명법
    요소\_\_일부분 - Underscore(Lodash) 기호로 요소의 일부분을 표시
    요소--상태 - Hyphen(Dash) 기호로 요소의 상태를 표시

13. 부모에 position: relative 가 있는데 position: fixed를 써야한다.
    그럼 relative를 없애고 fixed를 사용하면됨.
    애초에 fixed로 위치가 잡혀져있으니 자식에서 absolute를 쓰려고하면
    fixed로도 기준을 잡 을 수 있기 때문에 relative가 필요가업승ㅁ.

14. lodash라이브러리 - lodash의 기능중 debounce, throttle 이 있음.
    해당 스타벅스 예제에선 스크롤에 의한 이벤트처리가 필요한데.
    전체창(window)를 기준으로 스크롤이벤트를 발생시키면 스크롤을할때마다 무수히많은 이벤트가 발생함.
    무수한 이벤트가 의미없이 발생한다면 당연히 안좋은 현상이고 이를 위해 lodash 라이브러리를 사용
    debounce와 throttle가 있는데 비슷하지만 다른 두가지 함수를 알아보자.

debounce - 동일 이벤트가 반복적으로 시행되는경우 "마지막이벤트가 실행되고 나서 일정 시간동안 이벤트가 다시 실행되지 않으면
해당 이벤트의 콜백함수를 실행 "

throttle - 동일 이벤트가 반복적으로 시행되는경우 "이벤트의 실제 반복주기와 상관없이 임의로 설정한 일정 시간간격으로 콜백함수의 실행을보장"
두함수모두 시간의 단위는 ms(밀리세컨드 1s = 1000ms)

debounce의 예를들자면, 우리가 아이디의 중복체크를 하는 input을 가지고있다고 가정할때
input에 타이핑을 할때마다 함수가 실행될거임 즉 키보드가 눌릴때마다.
하지만 debounce가 적용이 된다면, 키보드의 타이핑이 끝난후 지정한시간동안 다시 이벤트가 일어나지않으면 마지막 타이핑기준으로 함수가 실행이됨.

콜백펑션에 넣는 행위니 ele.addEventListener("onKeydown", \_.debounce(func, 200)); 이런식. 0.2초 동안 이벤트가 일어나지않으면 func를 실행이 된다는의미.
여기서 event매개변수는 throttle이나 debounce를 통하여도 값이전달됨.

throttle의 경우 마우스 움직임 이벤트로 예를 들 수 있는데 마우스가 움직일때마다 이벤트가 발생된다면
무수히 많은 이벤트가 발생한다. 하지만 throttle을 걸어준다면 ? 즉 우리가 1초에 마우스의 움직임을 100번움직인다면 100번 이벤트가 발생할거다.
\_.throttle(func, 500) 처리를하면 0.5초 간격으로만 이벤트가 일어난다.
쓰로틀을 걸어버리면 아무리 많은 이벤트를 발생시켜도 0.5초 간격으로 이벤트가 발생된다.

15. GSAP(지삽)이라는 라이브러리를 사용할꺼임, cdn식으로 쓸거고 가져와서 main.js위에 작성
    지삽은 애니메이션을 처리해주는 라이브러리
    gsap.to() 라는함수를 사용할건데 to함수의 요소는 gsap.to(요소, 지속시간, 옵션) 이다.
    우리는 지금 배너를 스크롤(Y)의 위치에따라 보이게, 안보이게 할꺼임

gsap.to(element, 0.6, {opacity: 0, display: "none" }); 이런식으로 사용함
gsap.to(element, 0.6, {opacity: 1, display: "block"}); 다시 나타나는 형식 ㅇㅇ

- opacity 속성처럼 숫자를 값으로 입력하는 속성들은 전환속성(transition, gsap라이브러리)을 통해
  요서의 전/후 상태를 중간 숫자의 값으로 자연스럽게 만들어 줄 수 있지만,
  display 속성처럼 숫자가아닌 none, block같은 값은 전/후 상태의 중간값이 존재하지않으므로 자연스러운 효과를 적용할 수 없다.

16. section 은 div로도 대체가 가능하나 우리는 명시적의미를 위해 section을 사용

17. swiper사용 관련. CDN사용시 css, script모두 붙여야 사용이 가능하다.
    버전확인을 잘하자 강의는 6.8.4인데 나는 7.0.0 버전으로 했다가 기존적용법이달라 안됐다.
    최상단부터 swiper-container -> swiper-wrapper -> swiper-slide 구조가 있어한다.
    HTML 구조를 지켰으면, js파일에서 new Swiper(선택자, 옵션) 선언.
    변수에 담아서 const noticeSwiper = new Swiper()로 사용해도되고
    그냥 new Swiper() 로 작성해도 실행된다.
    기본적으로 direction 옵션을 지정해줘야하고 horizontal은 기본옵션이다(수평)
    pagination 옵션은 또 내부에서 옵션을 더줄 수 있따 el, clickable 등등
    el은 말그대로 페이지 번호 요소 선택자임 .swiper-pagiantion 을 주면됨
    그리고 clickable역시 말그대로 누를수있게 하는 옵션 값은 true, false
    pagination은 해당 요소를 누를때 포커스가 들어가는거임

    navigation 옵션이 있는데 pagination과 상관없이 prevEl, nextEl 옵션이있음.
    .swiper-prev, .swiper-next 옵션이 있는데 말그대로 앞뒤 버튼이고 누르면 요소가 넘어간다.

18. css에서 너비를 calc로 계산해여 주는 경우가있음.
    만약 swiper로 수평 슬라이드를 사용한다고 가정하고 우리화면에 보이는건 3장이라하자
    각 요소는 500px이다. 그럼 총 3장이니 1500px의 너비가 필요하고 요소들은 다닥다닥 붙어있는게 아니니
    1/2/3 사이요소를 10px이라하자. 우리가 보는 화면에서 간격이 필요한 부분은 2군데이다.
    보통 이런경우 전체를 계산해서 너비에 픽셀값을 1520px로도 줄 수 있지만
    calc를 사용하여 주는게 좋다. calc(500px \* 3 + 20px); 이런식으로 줄 수 있음.

19. 우리가 어떤 요소를 가운데로 두고 그화면을 계속 확대한다고 가정할때 화면 중앙에 요소가 계속 고정이될까 ?
    아니다 직접 만들어줘야함.
    일단 요소자체를 왼쪾에서 50% 보낸다 (absolute임) left: 50%
    그럼이제 요소의 왼쪽 선이 화면 정중앙에 와있는거다.
    이러면 요소는 중앙일까 ? 아니다 중앙처럼 보이지만 중앙기준에 요소의 왼쪽면이 와있는거임
    그럼 우리는 요소의 너비중 반을 다시 왼쪽으로 땡겨줘야한다.
    margin-left에 값을주면 왼쪽에서 밀리는거 아닌가 ? 값을 음수로 주면 오른쪽으로 간다.

    위의 calc(500px _ 3 +20px) 이 width라고 가정할때
    margin-left : calc((500px _ 3 + 20px) / -2); 이렇게 줄 수 있음.
    -2를 나누는게아니라 2로나누고 -를 붙인다는 의미다. 이러면 화면을 확대해도 요소는 중앙에 박힌다.
    이 강의에서는 swiper-slide를 이용하여 수평 슬라이드를 사용할때 이 css를 적용했다.

20. <div class="container">
        <div class="item></div>
    </div>

    일때 container는 width: 100px, item은 width:100%, height:0;
    이럼 아무것도 표시가안됨 둘다 높이가 없음. 높이의 기본값은 auto이고 특성은 계속 줄여들려고함
    item에 padding-top: 50% 을 주면 어떻게 될까 ?
    세로길이는 명시되지않았는데 세로의 여백을 늘려주는 값을 50% ?
    이렇게되면 부모의 너비의 반이 세로의 길이로됨.
    item의 width는 100px그대로 가고 거기의 50%인 50px이 세로로. (2:1/가로:세로) 구조를 가짐
    이는 유튜브나 영상을 빔웨어 영상을 삽입할때 유영 이런 사이즈는 보통 16:9를 제공함
    그럼 padding-top은 56.25% 를 주면됨 ! 그럼 항상 16:9가 나옴.

21. 유튜브 에러관련 답변 -->

    postMessage는 iframe 내부에서 현재 window 객체로 메시지를 내보내는 기능입니다.

    현재 페이지가 그 메시지를 받아서 다시 iframe 내부로 특정 데이터를 전달해야 하는데,

    이것은 유튜브 API가 같은 도메인을 확인하는 등의 주요 방법일 뿐입니다.

    결과적으로 에러 메시지가 출력되는 것을 무시하셔도 상관없습니다만..

    만약 에러 메시지가 심각하게 거슬린다고 하시면,

    옵션을 제공하는 playerVars 옵션 자체를 제거하고,

    (playerVars.playlist 옵션이 에러 메시지의 원인입니다,

    아마 이 옵션을 통한 재생 목록을 완성하면서 postMessage를 전송하는 것이 아닌가 추측합니다,

    videoId로 등록한 영상 ID는 별개입니다)

    다음과 같이 제어 메소드로 전부 대체하는 방법이 있습니다.

    youtube.js 파일 내용을 아래와 같이 수정해 보세요.

    onReady: function (event) {

    event.target.loadPlaylist(['An6LvWQuj_8'])

    event.target.setLoop(true)

    event.target.playVideo()

    event.target.mute()

    }

    그리고 Swiper 버전 이슈는 약 한달 전에 제보를 받아서 깃헙 README.md에 해당 내용을 명시했습니다!

    내공100 님께서도 제보해 주셔서 정말 감사합니다~😊

    https://github.com/ParkYoungWoong/starbucks-vanilla-app#swiper

    그럼 위 내용 확인해 보시고,

    혹시 문제가 지속되거나 다른 질문이 있으시면 연락주세요.

    즐거운 하루 보내세요~👍

22.
