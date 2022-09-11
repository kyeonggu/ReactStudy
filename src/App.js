import MyComponent from "./MyComponent";
import ClassComponents from "./ClassComponents";

function App() {
  const name = "리액트";
  const age = undefined;
  return (
    <div className="App">
      <>
      <div>
        {name}님 
        {name === "리액트" ? (
          <span> 리액트 입니다.</span>
        ) : (
          <span> 리액트가 아닙니다.</span>
        )}

        <span>{age || "asdf"}</span>
        <br />
        <MyComponent name="React" age={20}>자식</MyComponent>
        {/* <ClassComponents name="React" age={28} /> */}
      </div>
      </>
    </div>
  );
}

/* ========================================================================================================================
  <2022-09-11>
  1. JSX란?
  - JSX는 자바스크립트의 확장문법이며 XML과 매우 비슷하다. 이런 형식으로 작성한 코드는 브라우저에서 실행되기 전에 코드가 번들링되는 과정에서
    바벨을 사용하여 일반 자바스크립트 형태의 코드로 변환된다.
  
  2. JSX의 장점
  - JSX는 HTML코드를 작성하는 것과 비슷하다.
  - JSX는 앞으로 만들 컴포넌트도 JSX안에서 작성할 수 있다.

  3. JSX 문법
    1) 감싸인 요소
      - 리액트는 요소 여러개가 부모 요소 하나에 감싸져 있어야 한다. 이를 하기 위해서는 Fragment를 import 시킨 뒤 <Fregment></Fregment>로 감싸거나 <> </>로 감싼다.
      - 감싸줘야하는 이유는 Virtual DOM에서 컴포넌트 변화를 감지할 때 효율적으로 비교할 수 있도록 내부는 하나의 DOM 트리 구조로 이루어져야한다는 규칙이 있다.
    2) 자바스크립트 표현
      - JSX 내부에서 코드를 {}로 감싸면 된다.
        ex) const name = "리액트"; return ( <> {name}님 </>) // 리액트님
    3) if문 대신 조건부 연산자
      - JSX 내부의 자바스크립트 표현식에서는 if문을 사용할 수는 없다. 하지만 조건에 따라서 렌더링 해야할 때는 JSX밖에서 if문을 사용해서 사전에 값을 설정하거나, {}안에 조건부 연산자를
        사용하면 된다.
        ex) {name === "리액트" ? (true시 렌더링되는 내용) : (false시 렌더링 되는 내용)}
      - 특정 조건을 만족할 때 내용을 보여주고 만족하지 않을 때 아예 렌더링하지 않아야 하는 상황에는 && 연산자를 사용해서 조건부 렌더링이 가능하다.
        ex) {name === "리액트" && 참일 시 보여줄 내용}
    4) undefined를 렌더링하지 않기
      - 어떤 값이 undefined일 수도 있다면 OR(||) 연산자를 이용하여 해당 값이 undefined일 때 사용할 값을 지정할 수 있다.
        ex) const name = undefined; return name || "값이 undefined 입니다.";
    5) 인라인 스타일링
      - 스타일을 적용할 때 문자형태가 아닌 객체형태로 넣어준다. 그리고 카멜표기법으로 작성해야한다.
        ex) const style = {backgroundColor : "black", color : "aqua", fontSize : "48px", padding: 16,} // 단위를 생략하면 px로 지정된다.
            <div style={style}></div>
    6) class대신 className
      - JSX에서는 class대신 className으로 클래스의 이름을 설정한다.
    7) 꼭 닫아야 하는 태그
      - br, input 등 HTML 에서는 자동으로 닫아주는 태그들은 JSX에서는 자동으로 닫아주지 않으므로 꼭 닫아줘야 한다. 아니면 self-closing로 태그를 닫아준다.
        ex) <input /> <br />
* ======================================================================================================================== */

export default App;
