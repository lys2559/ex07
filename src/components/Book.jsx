import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Card, Row, Col } from 'react-bootstrap'

const Book = ({ book }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary btn-sm" onClick={handleShow}>
                보기
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}>
                <Modal.Title className="">
                    <Modal.Header>
                        <Modal.Body>
                            <Card>
                                <Card.Body className='book'>
                                    <Row>
                                        <Col md={4}>
                                            <img src={book.thumbnail} />
                                        </Col>
                                        <Col>
                                            <h6>{book.title}</h6>
                                            <div>가격: {book.fmtPrice}원</div>
                                            <div>저자: {book.authors}</div>
                                            <div>출판사: {book.publisher}</div>
                                            <div>출판일: {book.datetime}</div>
                                        </Col>
                                    </Row>
                                    <hr />
                                    <Row>
                                        <Col>
                                            {book.contents}
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Modal.Body>
                    </Modal.Header>
                </Modal.Title>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        확인
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Book