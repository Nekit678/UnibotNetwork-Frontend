import Title from "antd/es/typography/Title"
import "./NotFound.scss"
import { Button, Col, Row } from "antd"
import { useNavigate } from "react-router-dom"

export const NotFound: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className="not-found-wrapper">
      <div className="not-found">
        <Row className="not-found__content">
          <Col className="not-found__img" >
            <img src="./404.png" alt="404"></img>
          </Col>
          <Col>
            <Title style={{ textAlign: "center", color: "white" }} className="not-found__text">Страница не найдена</Title>
          </Col>
          <Col>
            <Button className="not-found__button" onClick={() => (navigate("/"))}>
              <Title style={{ textAlign: "center" }} level={2}>На главную</Title>
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  )
}