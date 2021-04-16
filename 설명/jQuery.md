# jQuery 메서드 - 종류별 분류

## Selector(선택자)
- $('대상') : css 선택자를 그대로 따른다.
- children(), find(), parent(), parents(), prev(), next(), siblings()
- index(), eq()
- each() : 반복문

## Event
- on()
- mouse: click(), mouseover(), mouseenter(), mouseleave(), wheel()
- keyboard: keyup(), keydown(),
- window: resize(), scroll()
- form: submit(), reset()

## Animation
- show(), hide(), toggle()
- fadeIn(), fadeOut(), fadeToggle()
- slideDown(), slideUp(), slideToggle()
- animate()

## DOM - HTML 관리
- empty(), remove()
- append(), appendTo(), prepend(), prependTo()
- html(), text()
- val()
- attr()

## CSS - CSS 관리
- css()
- addClass(), removeCalss(), toggleClass(), hasClass()

## Dimension
- width(), innerWidth(), outerWidth(), outerWidth(true) 
- height(), innerHeight(), innerWidth(), innerWidth(true)
- offset(), position(), scrollTop()

## 통신Ajax(Asynchronous javascript and xml)
- $.get(), $.post(), $.ajax()




# jQuery 메서드 - 143개의 메서드

## add: ƒ (e,t)
### 설명: 

## addBack: ƒ (e)
### 설명: 

## addClass: ƒ (t)
### 설명: 

## after: ƒ ()
### 설명: 

## ajaxComplete: ƒ (e)
### 설명: 

## ajaxError: ƒ (e)
### 설명: 

## ajaxSend: ƒ (e)
### 설명: 

## ajaxStart: ƒ (e)
### 설명: 

## ajaxStop: ƒ (e)
### 설명: 

## ajaxSuccess: ƒ (e)
### 설명: 

## animate: ƒ (t,e,n,r)
### 설명: 

## append: ƒ ()
### 설명: 대상안의 뒤에 html을 넣는다.
### return: $(대상)
```js
$('대상').append('<div>hi</div>')
```

## appendTo: ƒ (e)
### 설명: html을 대상안의 뒤에 넣는다.
### return: $(html)
```js
$('<div>hi</div>').appendTo('대상')
```

## attr: ƒ (e,t)
### 설명: 

## before: ƒ ()
### 설명: 

## bind: ƒ (e,t,n)
### 설명: 

## blur: ƒ (e,t)
### 설명: 

## change: ƒ (e,t)
### 설명: 

## children: ƒ (e,t)
### 설명: 

## clearQueue: ƒ (e)
### 설명: 

## click: ƒ (e,t)
### 설명: 

## clone: ƒ (e,t)
### 설명: 

## closest: ƒ (e,t)
### 설명: 

## constructor: ƒ (e,t)
### 설명: 

## contents: ƒ (e,t)
### 설명: 

## contextmenu: ƒ (e,t)
### 설명: 

## css: ƒ (e,t)
### 설명: 

## data: ƒ (n,e)
### 설명: 

## dblclick: ƒ (e,t)
### 설명: 

## delay: ƒ (r,e)
### 설명: 

## delegate: ƒ (e,t,n,r)
### 설명: 

## dequeue: ƒ (e)
### 설명: 

## detach: ƒ (e)
### 설명: 

## each: ƒ (e)
### 설명: 

## empty: ƒ ()
### 설명: 대상안의 html을 지운다.
```js
$('.jq').empty()
```

## end: ƒ ()
### 설명: 

## eq: ƒ (e)
### 설명: 

## even: ƒ ()
### 설명: 

## extend: ƒ ()
### 설명: 

## fadeIn: ƒ (e,t,n)
### 설명: 

## fadeOut: ƒ (e,t,n)
### 설명: 

## fadeTo: ƒ (e,t,n,r)
### 설명: 

## fadeToggle: ƒ (e,t,n)
### 설명: 

## filter: ƒ (e)
### 설명: 

## find: ƒ (e)
### 설명: 

## finish: ƒ (a)
### 설명: 

## first: ƒ ()
### 설명: 

## focus: ƒ (e,t)
### 설명: 

## focusin: ƒ (e,t)
### 설명: 

## focusout: ƒ (e,t)
### 설명: 

## get: ƒ (e)
### 설명: 

## has: ƒ (e)
### 설명: 

## hasClass: ƒ (e)
### 설명: 

## height: ƒ (e,t)
### 설명: 

## hide: ƒ (e,t,n)
### 설명: 

## hover: ƒ (e,t)
### 설명: 

## html: ƒ (e)
### 설명: 

## index: ƒ (e)
### 설명: 

## init: ƒ (e,t,n)
### 설명: 

## innerHeight: ƒ (e,t)
### 설명: 

## innerWidth: ƒ (e,t)
### 설명: 

## insertAfter: ƒ (e)
### 설명: 

## insertBefore: ƒ (e)
### 설명: 

## is: ƒ (e)
### 설명: 

## keydown: ƒ (e,t)
### 설명: 

## keypress: ƒ (e,t)
### 설명: 

## keyup: ƒ (e,t)
### 설명: 

## last: ƒ ()
### 설명: 

## length: 0
### 설명: 

## load: ƒ (e,t,n)
### 설명: 

## map: ƒ (n)
### 설명: 

## mousedown: ƒ (e,t)
### 설명: 

## mouseenter: ƒ (e,t)
### 설명: 

## mouseleave: ƒ (e,t)
### 설명: 

## mousemove: ƒ (e,t)
### 설명: 

## mouseout: ƒ (e,t)
### 설명: 

## mouseover: ƒ (e,t)
### 설명: 

## mouseup: ƒ (e,t)
### 설명: 

## next: ƒ (e,t)
### 설명: 

## nextAll: ƒ (e,t)
### 설명: 

## nextUntil: ƒ (e,t)
### 설명: 

## not: ƒ (e)
### 설명: 

## odd: ƒ ()
### 설명: 

## off: ƒ (e,t,n)
### 설명: 

## offset: ƒ (t)
### 설명: 

## offsetParent: ƒ ()
### 설명: 

## on: ƒ (e,t,n,r)
### 설명: 이벤트를 등록한다.
```js
$('.jq').on('click', function(){ 
	// 할일
})
```

## one: ƒ (e,t,n,r)
### 설명: 

## outerHeight: ƒ (e,t)
### 설명: 

## outerWidth: ƒ (e,t)
### 설명: 

## parent: ƒ (e,t)
### 설명: 

## parents: ƒ (e,t)
### 설명: 

## parentsUntil: ƒ (e,t)
### 설명: 

## position: ƒ ()
### 설명: 

## prepend: ƒ ()
### 설명: 대상안의 앞에 html을 넣는다.
### return: $(대상)
```js
$('대상').prepend('<div>hi</div>')
```

## prependTo: ƒ (e)
### 설명: html을 대상안의 앞에 넣는다.
### return: $(html)
```js
$('<div>hi</div>').prependTo('대상')
```

## prev: ƒ (e,t)
### 설명: 

## prevAll: ƒ (e,t)
### 설명: 

## prevUntil: ƒ (e,t)
### 설명: 

## promise: ƒ (e,t)
### 설명: 

## prop: ƒ (e,t)
### 설명: 

## push: ƒ push()
### 설명: 

## pushStack: ƒ (e)
### 설명: 

## queue: ƒ (t,n)
### 설명: 

## ready: ƒ (e)
### 설명: 

## remove: ƒ (e)
### 설명: 대상을 지운다.
```js
$('.jq').remove()
```

## removeAttr: ƒ (e)
### 설명: 

## removeClass: ƒ (t)
### 설명: 

## removeData: ƒ (e)
### 설명: 

## removeProp: ƒ (e)
### 설명: 

## replaceAll: ƒ (e)
### 설명: 

## replaceWith: ƒ ()
### 설명: 

## resize: ƒ (e,t)
### 설명: 

## scroll: ƒ (e,t)
### 설명: 

## scrollLeft: ƒ (e)
### 설명: 

## scrollTop: ƒ (e)
### 설명: 

## select: ƒ (e,t)
### 설명: 

## serialize: ƒ ()
### 설명: 

## serializeArray: ƒ ()
### 설명: 

## show: ƒ (e,t,n)
### 설명: 

## siblings: ƒ (e,t)
### 설명: 

## slice: ƒ ()
### 설명: 

## slideDown: ƒ (e,t,n)
### 설명: 

## slideToggle: ƒ (e,t,n)
### 설명: 

## slideUp: ƒ (e,t,n)
### 설명: 

## sort: ƒ sort()
### 설명: 

## splice: ƒ splice()
### 설명: 

## stop: ƒ (i,e,o)
### 설명: 

## submit: ƒ (e,t)
### 설명: 

## text: ƒ (e)
### 설명: 

## toArray: ƒ ()
### 설명: 

## toggle: ƒ (e,t,n)
### 설명: 

## toggleClass: ƒ (i,t)
### 설명: 

## trigger: ƒ (e,t)
### 설명: 

## triggerHandler: ƒ (e,t)
### 설명: 

## unbind: ƒ (e,t)
### 설명: 

## undelegate: ƒ (e,t,n)
### 설명: 

## unwrap: ƒ (e)
### 설명: 

## val: ƒ (n)
### 설명: form요소(input, select ...)의 값을 반환한다.
```html
<input type="text" id="username" value="홍길동">
```
```js
var username = $('#username').val()		// 홍길동
$('#username').val('홍길순')					// username의 value가 '홍길순'으로 바뀐다.
```

## width: ƒ (e,t)
### 설명: 

## wrap: ƒ (t)
### 설명: 

## wrapAll: ƒ (e)
### 설명: 

## wrapInner: ƒ (n)### 설명: 