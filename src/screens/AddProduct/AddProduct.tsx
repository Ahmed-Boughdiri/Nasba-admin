import { Page, Title } from "components";
import { RouteComponentProps } from "react-router";
import { useSetTabIndex } from "hooks";
import { 
    Card, 
    Row, 
    Col,
    FormControl,
    Button,
    Form
} from "react-bootstrap";
import "./AddProduct.css";
import { useHandleAddProduct } from "hooks";

const AddProduct:React.FC<RouteComponentProps> = ({ history }) =>{
    useSetTabIndex(2);
    const { 
        formState,
        handleAddProduct
    } = useHandleAddProduct(history);
    return (
        <Page history={history}>
            <div className="add-product-form-container">
                <Card>
                    <Card.Header>
                        <Title fontSize="25px">Add New Product: </Title>
                    </Card.Header>
                    <Card.Body>
                        <Form encType="multipart/formdata">
                            <Row className="add-product-form-input-group">
                                <Col md={3}>
                                    <Title fontSize="18px">Product Name: </Title>
                                </Col>
                                <Col md={9}>
                                    <FormControl 
                                        placeholder="Product's Name"
                                        type="text"
                                        value={formState.state.name}
                                        onChange={formState.controllers.handleName}
                                    />
                                </Col>
                            </Row>
                            <Row className="add-product-form-input-group">
                                <Col md={3}>
                                    <Title fontSize="18px">Product Price: </Title>
                                </Col>
                                <Col md={9}>
                                    <FormControl 
                                        placeholder="Product's Price"
                                        type="number"
                                        value={formState.state.price?.toString()}
                                        onChange={formState.controllers.handlePrice}
                                    />
                                </Col>
                            </Row>
                            <Row className="add-product-form-input-group">
                                <Col md={3}>
                                    <Title fontSize="18px">Product Discount Price: </Title>
                                </Col>
                                <Col md={9}>
                                    <FormControl 
                                        placeholder="Product's Discount Price"
                                        type="number"
                                        value={formState.state.discountPrice?.toString()}
                                        onChange={formState.controllers.handleDiscountPrice}
                                    />
                                </Col>
                            </Row>
                            <Row className="add-product-form-input-group">
                                <Col md={3}>
                                    <Title fontSize="18px">Product Label: </Title>
                                </Col>
                                <Col md={9}>
                                    <FormControl 
                                        placeholder="Product's Label"
                                        type="text"
                                        value={formState.state.label}
                                        onChange={formState.controllers.handleLabel}
                                    />
                                </Col>
                            </Row>
                            <Row className="add-product-form-input-group">
                                <Col md={3}>
                                    <Title fontSize="18px">Product Size: </Title>
                                </Col>
                                <Col md={9}>
                                    <FormControl 
                                        placeholder="Product's Size"
                                        type="text"
                                        value={formState.state.size}
                                        onChange={formState.controllers.handleSize}
                                    />
                                </Col>
                            </Row>
                            <Row className="add-product-form-input-group">
                                <Col md={3}>
                                    <Title fontSize="18px">Product Genre: </Title>
                                </Col>
                                <Col md={9}>
                                    <FormControl 
                                        placeholder="Product's Genre"
                                        type="text"
                                        value={formState.state.genre}
                                        onChange={formState.controllers.handleGenre}
                                    />
                                </Col>
                            </Row>
                            <Row className="add-product-form-input-group">
                                <Col md={3}>
                                    <Title fontSize="18px">Product Status: </Title>
                                </Col>
                                <Col md={9}>
                                    <select
                                        value={formState.state.status}
                                        onChange={formState.controllers.handleStatus}
                                    >
                                        <option value="AVAILABLE">AVAILABLE</option>
                                        <option value="NOT AVAILABLE">UNAVAILALBE</option>
                                    </select>
                                </Col>
                            </Row>
                            <Row className="add-product-form-input-group">
                                <Col md={3}>
                                    <Title fontSize="18px">Product Thumbnail(s): </Title>
                                </Col>
                                <Col md={9}>
                                    <FormControl 
                                        type="file"
                                        onChange={formState.controllers.handleThumbnail}
                                        multiple
                                    />
                                </Col>
                            </Row>
                        </Form>
                    </Card.Body>
                    <Card.Footer>
                        <Button 
                            variant="success"
                            className="mx-1"
                            onClick={handleAddProduct}
                        >
                            Add Product
                        </Button>
                        <Button 
                            variant="primary"
                            className="mx-1"
                        >
                            Preview Uploaded Thumbnail(s)
                        </Button>
                    </Card.Footer>
                </Card>
            </div>
        </Page>
    );
}

export default AddProduct;
