var textWithHanja = document.querySelectorAll('.textWithHanja');

textWithHanja.forEach(function(e){
// 정규식을 사용하여 한자 추출
let hanjaMatches = e.textContent.match(/[\u4e00-\u9fa5]/g);

// 추출된 한자를 span 태그로 감싸고 스타일을 적용
if (hanjaMatches) { 
  // p 태그 내의 텍스트 중 한자를 span 태그로 대체
  e.innerHTML = e.innerHTML.replace(/([\u4e00-\u9fa5])/g, '<span class="hanja"> $1 </span>');     
}
})
// 생성된 모든 span 태그에 대해 스타일 적용
  let hanjaElements = document.querySelectorAll('.hanja');
  hanjaElements.forEach(function (element) {
      element.style.color = 'red';
      element.style.fontWeight = 'bold';
  });