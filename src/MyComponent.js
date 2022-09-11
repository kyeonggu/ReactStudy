import PropTypes from "prop-types";
import {useState} from "react";

const MyComponent = props => {
  const {name, children} = props;
  const [message, setMessage] = useState("");

  const onClickEnter = () => setMessage("안녕하세요");
  const onClickLeave = () => setMessage("안녕히가세요");
    return (
        <>
            Props: {props.name}<br />
            Children : {props.children}
            <br /><br />
            비구조화 Props: {name}<br />
            비구조화 Children : {children}

            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1>{message}</h1>
        </>
    )
}

MyComponent.defaultProps = {
  name: "기본이름",
  age: "기본나이"
}

MyComponent.propTypes = {
  name : PropTypes.string,
  age : PropTypes.number.isRequired
}

export default MyComponent;

/* ========================================================================================================================
  <2022-09-11>
  1. 함수형 컴포넌트와 클래스형 컴포넌트의 차이
    - 클래스형 컴포넌트의 경우 state 기능 및 라이프사이클 기능을 사용할 수 있다는 것과 임의메서드를 정의할 수 있다.
    - 클래스형 컴포넌트의 경우 render 함수가 꼭 있어야 하고 그 안에 보여주어야 할 JSX를 반환한다.
    - 함수형 컴포넌트의 경우 클래스형 컴포넌트보다 선언하기 훨씬 편하고 메모리 자원도 클래스형 컴포넌트보다 덜 사용한다.
    - 함수형 컴포넌트의 단점은 state와 라이프사이클 API의 사용이 불가한데 이 단점은 Hooks라는 기능이 도입되면서 해결되었다.
    - 리액트 공식 매뉴얼에서는 함수형 컴포넌트 사용을 권장한다.
  2. 모듈 내보내기 및 불러오기
    - export default <컴포넌트 이름>
    - import <컴포넌트 이름> from <컴포넌트 경로>
  3. props
    - props는 properties의 줄임말로 컴포넌트 속성을 설정할 때 사용하는 요소이다.
    - props는 함수의 파라미터로 받아와서 사용할 수 있다. (MyComponent를 선언한 태그에 props를 설정해야 한다.)
    - 만약 props를 따로 지정하지 않았을 경우 defaultProps로 기본 props를 설정할 수 있다.
    - children으로 해당 컴포넌트를 선언한 태그 사이의 내용을 보여준다.
    - ES6의 비구조화 할당 문법을 사용하여 내부 값을 바로 추출할 수 있다.
      ex) const {name, children} = props;
  4. propTypes를 통한 props 검증
    - props의 타입을 지정할 때 propTypes를 사용한다.
    - import구문으로 prop-types를 불러온 뒤 defaultProps를 선언한 것 처럼 하단에다가 어떠한 타입인지 선언해야한다.
    - 타입을 선언하면 무조건 그 타입으로만 전달되야한다. 만약 타입이 일치하지 않는다면 콘솔에 에러를 발생시킨다.
    - isRequired를 사용하여 필수 propTypes를 설정할 수 있다. 만약 해당하는 prop이 없다면 에러를 발생시킨다.
  5. useState
    - 함수형 컴포넌트에서는 useState라는 Hooks를 사용해서 state를 사용할 수 있다.
    - useState 함수의 인자에 초기값을 넣어주고 함수를 호출하면 배열이 반환되는데 첫번째는 현재상태, 두번째는 상태를 바꾸어주는 함수이다.
    - useState는 한 컴포넌트에 여러번 사용해도 상관없다.
  6. 주의사항
    - state값을 바꾸어야할 때는 setState혹은 useState를 통해 전달받은 세터 함수를 사용해야 한다.
    - 배열이나 객체를 업데이트해야할 때는 복사본을 만들어놓고 그 복사본에 값을 업데이트한 후 사본의 상태를 setState혹은 세터 함수를 통해 업데이트 한다.
    - 객체애 대한 사본을 만들때는 spread 연산자라 불리는 ...을 사용해서 처리하고, 배열에 대한 사본을 만들 때는 배열의 내장함수들을 활용한다.
* ======================================================================================================================== */