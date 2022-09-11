import React, {Component} from "react";

class ClassComponents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
            fixedNumber : 1
        }
    }

    render() {
        const {number, fixedNumber} = this.state;
        return (
            <>
                <h1>{number}</h1>
                <p>{fixedNumber}</p>
                <button onClick={() => {
                    this.setState(prevState => {
                        return {
                            number: prevState.number + 1
                        }
                    }, () => {
                        console.log("방금 setState가 호출되었습니다.")
                    })

                    this.setState(prevState => ({
                        number: prevState.number + 1
                    }))
                }}>+1</button>
            </>
        );
    }
}
  
  export default ClassComponents;

  /* ========================================================================================================================
  <2022-09-11>
  1. state
    - 컴포넌트에 state를 설정할 때는 다음과 같이 constructor메서드를 작성하여 설정한다.
    - 클래스형 컴포넌트에서는 반드시 super(props)를 호출해주어야 하는데 현재 클래스형 컴포넌트가 상속받고 있는 리액트의 Component 클래스가 지닌 생성자 함수를 호출해준다.
    - 그다음 this.state값에 초기값을 설정해준다.
    - render에서는 this.state로 state를 조회한다.
    - 버튼을 클릭할 때마다 this.setState로 해당하는 state값을 변경할 수 있다.
    - this.setState를 두번 호출하면 한번 호출한걸로 적용되는데 이를 해결하기 위해서는 this.setState의 인자로 함수를 넣어주면 된다.
      ex) this.setState((prevState, props) => {
        return {
            // 업데이트하고 싶은 내용
        }
      })
    - this.setState가 끝난 뒤에 특정 작업을 실행할 때는 setState의 두번째 파라미터로 콜백함수를 등록하여 작업을 처리할 수 있다.
      ex) this.setState({변경내용}, () => {작업 후 호출될 함수})
* ======================================================================================================================== */