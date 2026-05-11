import styled from 'styled-components'

const Body = () => {
  return (
    <>
      <Sky>
        <img src="/먹구름.png" className="cloud" />
        <img src="/먹구름.png" className="cloud2" />
        <img src="/집.png" className="house" />
        <img src="/나무.png" className="tree" />
        <SpeechBubble>
          <p>어서오세요! 👋</p>
          <p>천천히 구경하세요 🎵</p>
          <p>오유민 · 산업보안학과</p>
        </SpeechBubble>
      </Sky>
      <Grass />
      <Dirt />
    </>
  )
}

export default Body

const Sky = styled.div`
  height: 75vh;
  background-color: #8babfd;
  position: relative;
  overflow: hidden;

  .cloud {
    position: absolute;
    top: 25%;
    left: 10%;
    width: 8%;
  }

  .cloud2 {
    position: absolute;
    top: 40%;
    right: 10%;
    width: 10%;
  }

  .house {
    position: absolute;
    bottom: -7%;
    left: 15%;
    width: 12%;
  }

  .tree {
    position: absolute;
    bottom: 0;
    left: 8%;
    width: 8%;
  }
`

const SpeechBubble = styled.div`
  background-color: #f1efef;
  border: 5px solid #000000;
  padding: 50px;
  text-align: center;
  font-size: 15px;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  width: 40%;
`

const Grass = styled.div`
  height: 5vh;
  background-color: #abd406;
`

const Dirt = styled.div`
  height: 10vh;
  background-color: #b77005;
`