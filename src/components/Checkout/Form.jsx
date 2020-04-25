import React, { useState } from 'react';
import {
    Row,
    Col,
    Form,
    Button
} from 'react-bootstrap';
import config from '../../config';

const CheckoutForm = (props) => {

    const { Control } = Form;
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEamil] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [valid, setValid] = useState([]);
    const [disabled, setDisabled] = useState(false);

    const onChange = name => event => {
        const { value }= event.target;
        switch (name) {
            case 'firstName':
                setFirstName(value);
                break;
            case 'lastName':
                setLastName(value)
                break;
            case 'email':
                setEamil(value)
                break;
            case 'phone':
                setPhone(value)
                break;
            case 'address':
                setAddress(value)
                break;
            case 'country':
                setCountry(value)
                break;
            case 'city':
                setCity(value);
                break;
            case 'zipcode':
                setZipcode(value);
                break;
            default:
                // noting to do
        }
    }

    const validate = () => {
        const valid = [];

        if (!config.validator.plain.test(firstName)) {
            valid.push('firstName');
        }

        if (!config.validator.plain.test(lastName)) {
            valid.push('lastName');
        }

        if (!config.validator.email.test(email)) {
            valid.push('email');
        }

        if (!config.validator.number.test(phone)) {
            valid.push('phone');
        }

        if (!config.validator.plain.test(address)) {
            valid.push('address');
        }

        if (!config.validator.plain.test(country)) {
            valid.push('country');
        }

        if (!config.validator.plain.test(city)) {
            valid.push('city');
        }

        if (!config.validator.plain.test(zipcode)) {
            valid.push('zipcode');
        }

        setValid(valid);
        return valid.length === 0
    }

    const isValid = name => {
        return valid.indexOf(name) > -1
    }

    const onSubmit = event => {
        event.preventDefault();
        event.stopPropagation();
        setDisabled(true);
        if (validate()) {

            alert(1);
            if (typeof props.onCheckout === 'function') {
                alert(2);

                const data = {
                    firstName,
                    lastName,
                    email,
                    phone,
                    address,
                    country,
                    city,
                    zipcode
                };

                return props.onCheckout({...data});
            }
        }
        setDisabled(false);
    }

    return (
        <Form onSubmit={onSubmit} noValidate disabled={disabled}>
            <h6>Delivery Information</h6>
            <Row className="my-3">
                <Col>
                    <Control
                        placeholder="First Name"
                        value={firstName}
                        onChange={onChange('firstName')}
                        isInvalid={isValid('lastName')}
                    />
                </Col>
                <Col>
                    <Control
                        placeholder="Last name"
                        value={lastName}
                        onChange={onChange('lastName')}
                        isInvalid={isValid('lastName')}
                    />
                </Col>
            </Row>
            <Row className="my-3">
                <Col>
                    <Control
                        placeholder="Email"
                        value={email}
                        onChange={onChange('email')}
                        isInvalid={isValid('email')}
                    />
                </Col>
                <Col>
                    <Control
                        placeholder="Phone"
                        value={phone}
                        onChange={onChange('phone')}
                        isInvalid={isValid('phone')}
                    />
                </Col>
            </Row>
            <Row className="my-3">
                <Col>
                    <Control
                        placeholder="Address"
                        value={address}
                        onChange={onChange('address')}
                        isInvalid={isValid('address')}
                    />
                </Col>
            </Row>
            <Row className="my-3">
                <Col>
                    <Control
                        placeholder="Country"
                        value={country}
                        onChange={onChange('country')}
                        isInvalid={isValid('country')}
                    />
                </Col>
                <Col>
                    <Control
                        placeholder="State / City"
                        value={city}
                        onChange={onChange('city')}
                        isInvalid={isValid('city')}
                    />
                </Col>
                <Col>
                    <Control
                        placeholder="Zip Code"
                        value={zipcode}
                        onChange={onChange('zipcode')}
                        isInvalid={isValid('zipcode')}
                    />
                </Col>
            </Row>
            <Button
                type="submit"
                variant="primary"
            >Checkout</Button>
        </Form>
    )
}

CheckoutForm.displayName = 'CheckoutForm';
export default CheckoutForm;