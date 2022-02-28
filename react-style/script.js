const root = document.querySelector('#root');
console.log(root);

const ul = document.createElement('ul');
root.appendChild(ul); //자식으로 추가할래

const menuName = ["피카츄","라이츄","파이리","꼬부기","버터풀","야도란", "피존투", "또가스", "박재희", "홍성학","박준우", "김민종"];

// * 자바스크립트에서 문서를 즉성에서 작성할수 있다.
// * 즉석에서 만들었다는 것은 -> 내가 필요할때 언제든지 바꿀수 있다.
// * 바꿀수 있다. -> 애플리케이션이 된다.

for(let i = 0; i < menuName.length; i++) {
  const li = document.createElement('li');
  li.classList.add('test');
  if(i === 2) {
    li.setAttribute('id', "third");
    li.style.color ='red';
  }
  li.innerHTML =
    
    `
    <div> ${menuName[i]} </div>
    
    `;
  ul.appendChild(li);
}
