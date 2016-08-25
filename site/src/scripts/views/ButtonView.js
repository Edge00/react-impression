import React, { Component } from 'react';
import { Card, Row, Col, Button, Breadcrumb } from '../components/impression';
import { CommenTable, Highlight } from '../components';
import { withRouter } from 'react-router';


class ButtonView extends Component{
    buttonClickHandle(event){
        this.props.router.push('/layout');
    }
    render(){

        return (
            <div>
                <Breadcrumb divider="arrow" routes={this.props.routes}/>
                <Card block noborder>
                    <h5>Basic</h5>
                    <Card>
                        <Card.Block>
                            <Row>
                                <Col col="2">
                                    <Button type="button" theme="primary" onClick={this.buttonClickHandle.bind(this)}>primary</Button>
                                </Col>
                                <Col col="2">
                                    <Button theme="default">default</Button>
                                </Col>
                                <Col col="2">
                                    <Button theme="secondary">secondary</Button>
                                </Col>
                            </Row>
                        </Card.Block>
                        <Highlight>
                            {`import { Button } from 'impression-react';\n\n<Button theme="primary">primary</Button>\n<Button theme="default">primary</Button>\n<Button theme="secondary">primary</Button>`}
                        </Highlight>
                    </Card>
                    <h5>Outline</h5>
                    <Card>
                        <Card.Block className="bg-inverse">
                            <Row>
                                <Col col="2">
                                    <Button theme="primary" outline>primary</Button>
                                </Col>
                                <Col col="2">
                                    <Button theme="default" outline>default</Button>
                                </Col>
                                <Col col="2">
                                    <Button theme="secondary" outline>secondary</Button>
                                </Col>
                            </Row>
                        </Card.Block>
                        <Highlight>
                            {`<Button outline theme="primary">primary</Button>\n<Button outline theme="default">primary</Button>\n<Button outline theme="secondary">primary</Button>`}
                        </Highlight>
                    </Card>
                    <h5>Sizes</h5>
                    <Card>
                        <Card.Block>
                            <Row>
                                <Col col="2">
                                    <Button theme="primary" size="sm">Sm</Button>
                                </Col>
                                <Col col="2">
                                    <Button theme="primary">Normal</Button>
                                </Col>
                                <Col col="2">
                                    <Button theme="primary" size="lg">Large</Button>
                                </Col>
                            </Row>
                        </Card.Block>
                        <Highlight>
                            {`<Button size="sm" theme="primary">sm</Button>\n<Button theme="primary">Normal</Button>\n<Button size="lg" theme="primary">Large</Button>`}
                        </Highlight>
                    </Card>
                    <h5>Pill</h5>
                    <Card>
                        <Card.Block>
                            <Row>
                                <Col col="2">
                                    <Button theme="primary" shape="pill">primary</Button>
                                </Col>
                                <Col col="2">
                                    <Button theme="default" shape="pill">default</Button>
                                </Col>
                                <Col col="2">
                                    <Button theme="secondary" shape="pill">secondary</Button>
                                </Col>
                            </Row>
                        </Card.Block>
                        <Highlight>
                            {`<Button theme="primary" shape="pill">primary</Button>\n<Button theme="default" shape="pill">default</Button>\n<Button theme="secondary" shape="pill">secondary</Button>`}
                        </Highlight>
                    </Card>
                    <h5>Link</h5>
                    <Card>
                        <Card.Block>
                            <Row>
                                <Col col="2">
                                    <Button theme="primary" href="www.github.com">primary</Button>
                                </Col>
                                <Col col="2">
                                    <Button theme="default" href="www.github.com">default</Button>
                                </Col>
                                <Col col="2">
                                    <Button theme="secondary" href="www.github.com">secondary</Button>
                                </Col>
                            </Row>
                        </Card.Block>
                        <Highlight>
                            {`<Button theme="primary" href="www.github.com">primary</Button>\n<Button theme="default" href="www.github.com">default</Button>\n<Button theme="secondary" href="www.github.com">secondary</Button>`}
                        </Highlight>
                    </Card>
                    <h5>API</h5>
                    <CommenTable
                        data = {[
                            ['theme', '设置按钮的样式，可选值为 primary、default、secondary', 'string', 'primary'],
                            ['onClick', 'click 事件的 handler', 'function', ''],
                            ['outline', '设置按钮样式是否有外边线', 'boolean', 'false'],
                            ['size', '设置按钮大小，可选值为 sm、normal、large', 'string', ''],
                            ['shape', '设置按钮形状，可选值为 pill', 'string', ''],
                            ['href', '设置按钮链接', 'string', ''],
                            ['close', '设置是否关闭按钮样式', 'boolean', ''],
                            ['classname', '自定义样式', 'string', ''],
                        ]}
                    ></CommenTable>
                </Card>
            </div>
        );
    }
}

ButtonView.title = 'Button';


export default withRouter(ButtonView);